import{_ as n,c as s,o as a,a as t}from"./app.e7435feb.js";const m='{"title":"\u7528 go \u5199 WebAssembly\u5165\u95E8","description":"","frontmatter":{"title":"\u7528 go \u5199 WebAssembly\u5165\u95E8","date":"2018-09-07T01:14:10.000Z","draft":false,"markup":"mmark"},"headers":[{"level":2,"title":"1. \u6D4F\u89C8\u5668\u4E2D\u8FD0\u884C Go","slug":"_1-\u6D4F\u89C8\u5668\u4E2D\u8FD0\u884C-go"},{"level":3,"title":"1.1 code","slug":"_1-1-code"},{"level":3,"title":"1.2 \u7F16\u8BD1","slug":"_1-2-\u7F16\u8BD1"},{"level":3,"title":"1.3 \u8FD0\u884C","slug":"_1-3-\u8FD0\u884C"},{"level":2,"title":"2. node\u4E2D\u8FD0\u884C wasm","slug":"_2-node\u4E2D\u8FD0\u884C-wasm"},{"level":2,"title":"3. \u5176\u4ED6\u4F8B\u5B50","slug":"_3-\u5176\u4ED6\u4F8B\u5B50"},{"level":3,"title":"3.1 bouncy","slug":"_3-1-bouncy"},{"level":3,"title":"3.2 ranbow-mouse","slug":"_3-2-ranbow-mouse"},{"level":3,"title":"3.3 bumpy","slug":"_3-3-bumpy"}],"relativePath":"other/\u7528 go \u5199 WebAssembly\u5165\u95E8.md"}',e={},p=t(`<h1 id="golang-webassembly-\u5165\u95E8" tabindex="-1">Golang WebAssembly \u5165\u95E8 <a class="header-anchor" href="#golang-webassembly-\u5165\u95E8" aria-hidden="true">#</a></h1><p>Golang \u57281.11\u7248\u672C\u4E2D\u5F15\u5165\u4E86 WebAssembly \u652F\u6301,\u610F\u5473\u7740\u4EE5\u540E\u53EF\u4EE5\u7528 go\u7F16\u5199\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u4E2D\u8FD0\u884C\u7684\u7A0B\u5E8F,\u5F53\u7136\u8FD9\u4E2A\u80AF\u5B9A\u4E5F\u662F\u8981\u53D7\u6D4F\u89C8\u5668\u6C99\u76D2\u73AF\u5883\u7EA6\u675F\u7684.</p><h2 id="_1-\u6D4F\u89C8\u5668\u4E2D\u8FD0\u884C-go" tabindex="-1">1. \u6D4F\u89C8\u5668\u4E2D\u8FD0\u884C Go <a class="header-anchor" href="#_1-\u6D4F\u89C8\u5668\u4E2D\u8FD0\u884C-go" aria-hidden="true">#</a></h2><h3 id="_1-1-code" tabindex="-1">1.1 code <a class="header-anchor" href="#_1-1-code" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">package</span> main
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, WebAssembly!&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_1-2-\u7F16\u8BD1" tabindex="-1">1.2 \u7F16\u8BD1 <a class="header-anchor" href="#_1-2-\u7F16\u8BD1" aria-hidden="true">#</a></h3><p>\u5FC5\u987B\u662F go1.11\u624D\u884C</p><div class="language-"><pre><code>GOARCH=wasm GOOS=js go build -o test.wasm main.go
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="_1-3-\u8FD0\u884C" tabindex="-1">1.3 \u8FD0\u884C <a class="header-anchor" href="#_1-3-\u8FD0\u884C" aria-hidden="true">#</a></h3><p>\u5355\u72EC\u7684 wasm \u6587\u4EF6\u662F\u65E0\u6CD5\u76F4\u63A5\u8FD0\u884C\u7684,\u5FC5\u987B\u8F7D\u5165\u6D4F\u89C8\u5668\u4E2D.</p><div class="language-shell line-numbers-mode"><pre><code><span class="token function">mkdir</span> <span class="token builtin class-name">test</span>
<span class="token function">cp</span> test.wasm <span class="token builtin class-name">test</span>
<span class="token function">cp</span> <span class="token variable">$GOROOT</span>/misc/wasm/wasm_exec.<span class="token punctuation">{</span>html,js<span class="token punctuation">}</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="_1-3-1-\u4E00\u4E2A\u6D4B\u8BD5-http-\u670D\u52A1\u5668" tabindex="-1">1.3.1 \u4E00\u4E2A\u6D4B\u8BD5 http \u670D\u52A1\u5668 <a class="header-anchor" href="#_1-3-1-\u4E00\u4E2A\u6D4B\u8BD5-http-\u670D\u52A1\u5668" aria-hidden="true">#</a></h4><p>chrome \u662F\u4E0D\u652F\u6301\u672C\u5730\u6587\u4EF6\u4E2D\u8FD0\u884C wasm \u7684,\u6240\u4EE5\u5FC5\u987B\u6709\u4E00\u4E2A http \u670D\u52A1\u5668</p><div class="language-go line-numbers-mode"><pre><code><span class="token comment">//http.go</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;flag&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;net/http&quot;</span>
	<span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
	listen <span class="token operator">=</span> flag<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token string">&quot;listen&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;:8080&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;listen address&quot;</span><span class="token punctuation">)</span>
	dir    <span class="token operator">=</span> flag<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token string">&quot;dir&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;directory to serve&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	flag<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;listening on %q...&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>listen<span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token operator">*</span>listen<span class="token punctuation">,</span> http<span class="token punctuation">.</span><span class="token function">HandlerFunc</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>resp http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> req <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> strings<span class="token punctuation">.</span><span class="token function">HasSuffix</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>URL<span class="token punctuation">.</span>Path<span class="token punctuation">,</span> <span class="token string">&quot;.wasm&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			resp<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;content-type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;application/wasm&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>

		http<span class="token punctuation">.</span><span class="token function">FileServer</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span><span class="token function">Dir</span><span class="token punctuation">(</span><span class="token operator">*</span>dir<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ServeHTTP</span><span class="token punctuation">(</span>resp<span class="token punctuation">,</span> req<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h4 id="_1-3-2-http-go" tabindex="-1">1.3.2 http.go <a class="header-anchor" href="#_1-3-2-http-go" aria-hidden="true">#</a></h4><div class="language-shell line-numbers-mode"><pre><code><span class="token function">mv</span> http.go <span class="token builtin class-name">test</span>
<span class="token builtin class-name">cd</span> <span class="token builtin class-name">test</span>
go run http.go 
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="_1-4-\u6548\u679C" tabindex="-1">1.4 \u6548\u679C <a class="header-anchor" href="#_1-4-\u6548\u679C" aria-hidden="true">#</a></h4><p>\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00http://localhost:8080/wasm_exec.html,\u70B9\u51FB run \u6309\u94AE,\u53EF\u4EE5\u5728\u63A7\u5236\u53F0\u770B\u5230 Hello, WebAssembly!\u5B57\u7B26\u4E32</p><h2 id="_2-node\u4E2D\u8FD0\u884C-wasm" tabindex="-1">2. node\u4E2D\u8FD0\u884C wasm <a class="header-anchor" href="#_2-node\u4E2D\u8FD0\u884C-wasm" aria-hidden="true">#</a></h2><p>\u8FD9\u4E2A\u66F4\u76F4\u63A5</p><div class="language-"><pre><code>node wasm_exec.js test.wasm
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5C31\u53EF\u4EE5\u5728\u63A7\u5236\u53F0\u770B\u5230Hello, WebAssembly!\u5B57\u7B26\u4E32\u4E86.</p><h2 id="_3-\u5176\u4ED6\u4F8B\u5B50" tabindex="-1">3. \u5176\u4ED6\u4F8B\u5B50 <a class="header-anchor" href="#_3-\u5176\u4ED6\u4F8B\u5B50" aria-hidden="true">#</a></h2><p>\u5728<a href="https://github.com/stdiopt/gowasm-experiments" target="_blank" rel="noopener noreferrer"> example</a>\u4E2D\u53EF\u4EE5\u770B\u5230\u66F4\u591A\u4F8B\u5B50</p><h3 id="_3-1-bouncy" tabindex="-1">3.1 bouncy <a class="header-anchor" href="#_3-1-bouncy" aria-hidden="true">#</a></h3><p><img alt="" data-src="https://img2018.cnblogs.com/blog/124391/201809/124391-20180907090933841-1091730982.png" loading="lazy" class="lazy"></p><h3 id="_3-2-ranbow-mouse" tabindex="-1">3.2 ranbow-mouse <a class="header-anchor" href="#_3-2-ranbow-mouse" aria-hidden="true">#</a></h3><p>\u4F1A\u8DDF\u7740\u9F20\u6807\u753B\u51FA\u5F69\u8679\u56FE\u6848,\u633A\u597D\u770B\u7684 <img alt="" data-src="https://img2018.cnblogs.com/blog/124391/201809/124391-20180907091057014-1717034536.png" loading="lazy" class="lazy"></p><h3 id="_3-3-bumpy" tabindex="-1">3.3 bumpy <a class="header-anchor" href="#_3-3-bumpy" aria-hidden="true">#</a></h3><p>\u53EF\u4EE5\u753B\u4E00\u4E9B\u81EA\u5B9A\u4E49\u7684\u5F62\u72B6,\u5F62\u72B6\u4E0D\u540C,\u843D\u5730\u6548\u679C\u4E0D\u540C.\u7403\u5C31\u4F1A\u53CD\u5F39,\u4E09\u89D2\u5F62\u5C31\u4E0D\u4F1A.\u4E0D\u8FC7\u90FD\u6454\u4E0D\u574F,\u4E0D\u4F1A\u53D8\u5F62,\u8FD9\u70B9\u4E0D\u591F\u771F\u5B9E <img alt="" data-src="https://img2018.cnblogs.com/blog/124391/201809/124391-20180907091344841-321938760.png" loading="lazy" class="lazy"></p>`,30),o=[p];function c(l,i,u,r,d,b){return a(),s("div",null,o)}var h=n(e,[["render",c]]);export{m as __pageData,h as default};
