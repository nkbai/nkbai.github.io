import{o as n,c as a,e as s}from"./app.8bf2a359.js";const p='{"title":"漏洞的本质","description":"","frontmatter":{},"headers":[{"level":2,"title":"漏洞的本质","slug":"漏洞的本质"},{"level":3,"title":"伪造同名package进行攻击","slug":"伪造同名package进行攻击"},{"level":2,"title":"如何防止","slug":"如何防止"},{"level":2,"title":"其他问题","slug":"其他问题"},{"level":2,"title":"自动扫描这一类漏洞","slug":"自动扫描这一类漏洞"}],"relativePath":"app_security/android_lce_third_party.md","lastUpdated":1641349785274}',t={},e=[s('<hr><p>title: &quot;android第三方包上下文任意代码执行&quot; date: 2022-01-05T21:57:03+08:00 draft: false tags: [&quot;security&quot;,&quot;app&quot;,&quot;android&quot;] categories: [&quot;技术相关&quot;]</p><hr><p>在安卓中可以通过createPackageContext来访问和使用第三方的资源以及代码,可以利用这种机制来作为app的一种插件机制. 但是如果设计的不恰当,就有可能造成任意代码执行问题</p><h2 id="漏洞的本质"><a class="header-anchor" href="#漏洞的本质" aria-hidden="true">#</a> 漏洞的本质</h2><div class="language-java line-numbers-mode"><pre><code>    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">processModule</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">,</span> <span class="token class-name">String</span> packageName<span class="token punctuation">)</span>  <span class="token punctuation">{</span>\n        <span class="token class-name">Context</span> appContext <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">createPackageContext</span><span class="token punctuation">(</span>packageName<span class="token punctuation">,</span> CONTEXT_INCLUDE_CODE <span class="token operator">|</span> CONTEXT_IGNORE_SECURITY<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">ClassLoader</span> classLoader <span class="token operator">=</span> appContext<span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token class-name">Object</span> obj <span class="token operator">=</span> classLoader<span class="token punctuation">.</span><span class="token function">loadClass</span><span class="token punctuation">(</span><span class="token string">&quot;com.example.myapplicationcallee.MainInterface&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token string">&quot;getInterface&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>首先利用<code>createPackageContext</code>来获取到第三方App的Context,进而可以利用这个context来访问其代码,资源等. 这里是通过反射来执行第三方App的某个函数.</p><p>利用这种方式,可以实现动态插件的目的,但是如果因为设计不当,就可能会存在任意代码执行的漏洞,具体来说就是,可以恶意安装符合processModule规则要求的package,这些package的名称也符合我们的插件名称.</p><h3 id="伪造同名package进行攻击"><a class="header-anchor" href="#伪造同名package进行攻击" aria-hidden="true">#</a> 伪造同名package进行攻击</h3><div class="language-java line-numbers-mode"><pre><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>myapplicationcallee</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Log</span><span class="token punctuation">;</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainInterface</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> <span class="token function">getInterface</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">try</span> <span class="token punctuation">{</span>\n           <span class="token class-name">Process</span> process<span class="token operator">=</span>  <span class="token class-name">Runtime</span><span class="token punctuation">.</span><span class="token function">getRuntime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token string">&quot;ls -l /&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n           <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">e</span><span class="token punctuation">(</span><span class="token string">&quot;exec&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;code exec!!!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            process<span class="token punctuation">.</span><span class="token function">waitFor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> th<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="如何防止"><a class="header-anchor" href="#如何防止" aria-hidden="true">#</a> 如何防止</h2><p>packageName可以伪造,但是package的签名是不能伪造的,我们只要验证package的签名即可,具体来说就是:</p><p><code>packageManager.checkSignatures(packageName, context.getPackageName()) == PackageManager.SIGNATURE_MATCH</code>,必须相当,然后才去执行相关代码.</p><div class="language-java line-numbers-mode"><pre><code>    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">processModule_security</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">,</span> <span class="token class-name">String</span> packageName<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">PackageManager</span> packageManager <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getPackageManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>packageManager<span class="token punctuation">.</span><span class="token function">checkSignatures</span><span class="token punctuation">(</span>packageName<span class="token punctuation">,</span> context<span class="token punctuation">.</span><span class="token function">getPackageName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token class-name">PackageManager</span><span class="token punctuation">.</span>SIGNATURE_MATCH<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token class-name">Context</span> appContext <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">createPackageContext</span><span class="token punctuation">(</span>packageName<span class="token punctuation">,</span> CONTEXT_INCLUDE_CODE <span class="token operator">|</span> CONTEXT_IGNORE_SECURITY<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token class-name">ClassLoader</span> classLoader <span class="token operator">=</span> appContext<span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n            <span class="token class-name">Object</span> obj <span class="token operator">=</span> classLoader<span class="token punctuation">.</span><span class="token function">loadClass</span><span class="token punctuation">(</span><span class="token string">&quot;com.example.myapplicationcallee.MainInterface&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token string">&quot;getInterface&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token punctuation">}</span>\n     <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>这个是改进后的安全版本.</p><h2 id="其他问题"><a class="header-anchor" href="#其他问题" aria-hidden="true">#</a> 其他问题</h2><p>这个漏洞,我在android api25上是可以复现,但是在api30上却不可以,应该是高版本做了相关的安全限制.</p><h2 id="自动扫描这一类漏洞"><a class="header-anchor" href="#自动扫描这一类漏洞" aria-hidden="true">#</a> 自动扫描这一类漏洞</h2><p>规则就是:</p><p>Source: android.content.Context.createPackageContext的返回值</p><p>Sink: loadClass的this指针</p>',21)];t.render=function(s,p,t,c,o,l){return n(),a("div",null,e)};export{p as __pageData,t as default};
