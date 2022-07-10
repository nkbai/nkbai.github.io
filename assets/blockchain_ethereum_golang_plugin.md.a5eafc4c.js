import{_ as n,c as s,o as a,a as p}from"./app.dbcd9662.js";const d='{"title":"golang_plugin","description":"","frontmatter":{"title":"golang_plugin","date":"2018-10-14T05:05:37.000Z","draft":false,"markup":"mmark"},"headers":[{"level":2,"title":"\u7B80\u5355\u63D2\u4EF6","slug":"\u7B80\u5355\u63D2\u4EF6"},{"level":3,"title":"1.\u4E3B\u7A0B\u5E8F","slug":"_1-\u4E3B\u7A0B\u5E8F"},{"level":3,"title":"2. plugin\u4EE3\u7801","slug":"_2-plugin\u4EE3\u7801"},{"level":3,"title":"3. plugin\u7F16\u8BD1\u65B9\u6CD5","slug":"_3-plugin\u7F16\u8BD1\u65B9\u6CD5"},{"level":3,"title":"4. \u8FD0\u884C\u7ED3\u679C","slug":"_4-\u8FD0\u884C\u7ED3\u679C"},{"level":2,"title":"\u63D2\u4EF6\u4E0E\u4E3B\u7A0B\u5E8F\u4F9D\u8D56\u7B2C\u4E09\u65B9\u5E93\u7684\u95EE\u9898","slug":"\u63D2\u4EF6\u4E0E\u4E3B\u7A0B\u5E8F\u4F9D\u8D56\u7B2C\u4E09\u65B9\u5E93\u7684\u95EE\u9898"},{"level":3,"title":"1. \u540C\u65F6\u4F9D\u8D56\u7684\u7B2C\u4E09\u65B9\u5E93","slug":"_1-\u540C\u65F6\u4F9D\u8D56\u7684\u7B2C\u4E09\u65B9\u5E93"},{"level":3,"title":"2. \u8FD0\u884C\u7ED3\u679C","slug":"_2-\u8FD0\u884C\u7ED3\u679C"},{"level":2,"title":"\u5F15\u5165\u4E86vendor\u7684\u95EE\u9898","slug":"\u5F15\u5165\u4E86vendor\u7684\u95EE\u9898"},{"level":2,"title":"\u5B8C\u6574\u7684\u4EE3\u7801","slug":"\u5B8C\u6574\u7684\u4EE3\u7801"},{"level":3,"title":"main.go","slug":"main-go"},{"level":3,"title":"plugin eng.go","slug":"plugin-eng-go"},{"level":3,"title":"\u7B2C\u4E09\u65B9\u4F9D\u8D56\u5E93 anotherlib.go","slug":"\u7B2C\u4E09\u65B9\u4F9D\u8D56\u5E93-anotherlib-go"}],"relativePath":"blockchain/ethereum/golang_plugin.md"}',t={},e=p(`<h1 id="golang-plugin\u7684\u4F9D\u8D56\u95EE\u9898" tabindex="-1">golang plugin\u7684\u4F9D\u8D56\u95EE\u9898 <a class="header-anchor" href="#golang-plugin\u7684\u4F9D\u8D56\u95EE\u9898" aria-hidden="true">#</a></h1><p>\u6B64\u6587\u4E2D\u6D89\u53CA\u7684plugin\u8FD0\u884C\u73AF\u5883\u4E3Amac 10.14,go\u7248\u672C\u4E3A1.11 \u4E3B\u8981\u662F\u60F3\u8BA8\u8BBA\u4E00\u4E0B\u63D2\u4EF6\u4F9D\u8D56\u7684\u7B2C\u4E09\u65B9\u5E93\u7684\u95EE\u9898. \u4F8B\u5B50\u662F\u5728https://github.com/vladimirvivien/go-plugin-example\u4E00\u6587\u57FA\u7840\u4E4B\u4E0A.</p><h2 id="\u7B80\u5355\u63D2\u4EF6" tabindex="-1">\u7B80\u5355\u63D2\u4EF6 <a class="header-anchor" href="#\u7B80\u5355\u63D2\u4EF6" aria-hidden="true">#</a></h2><h3 id="_1-\u4E3B\u7A0B\u5E8F" tabindex="-1">1.\u4E3B\u7A0B\u5E8F <a class="header-anchor" href="#_1-\u4E3B\u7A0B\u5E8F" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;os&quot;</span>
	<span class="token string">&quot;plugin&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Greeter <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// load module</span>
	<span class="token comment">// 1. open the so file to load the symbols</span>
	plug<span class="token punctuation">,</span> err <span class="token operator">:=</span> plugin<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;./eng/eng.so&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
		os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 2. look up a symbol (an exported function or variable)</span>
	<span class="token comment">// in this case, variable Greeter</span>
	symGreeter<span class="token punctuation">,</span> err <span class="token operator">:=</span> plug<span class="token punctuation">.</span><span class="token function">Lookup</span><span class="token punctuation">(</span><span class="token string">&quot;Greeter&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
		os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 3. Assert that loaded symbol is of a desired type</span>
	<span class="token comment">// in this case interface type Greeter (defined above)</span>
	<span class="token keyword">var</span> greeter Greeter
	greeter<span class="token punctuation">,</span> ok <span class="token operator">:=</span> symGreeter<span class="token punctuation">.</span><span class="token punctuation">(</span>Greeter<span class="token punctuation">)</span>
	<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;unexpected type from module symbol&quot;</span><span class="token punctuation">)</span>
		os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 4. use the module</span>
	greeter<span class="token punctuation">.</span><span class="token function">Greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><h3 id="_2-plugin\u4EE3\u7801" tabindex="-1">2. plugin\u4EE3\u7801 <a class="header-anchor" href="#_2-plugin\u4EE3\u7801" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> greeting <span class="token builtin">string</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>g greeting<span class="token punctuation">)</span> <span class="token function">Greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Universe&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// exported</span>
<span class="token keyword">var</span> Greeter greeting
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="_3-plugin\u7F16\u8BD1\u65B9\u6CD5" tabindex="-1">3. plugin\u7F16\u8BD1\u65B9\u6CD5 <a class="header-anchor" href="#_3-plugin\u7F16\u8BD1\u65B9\u6CD5" aria-hidden="true">#</a></h3><div class="language-bash line-numbers-mode"><pre><code>go build -buildmode<span class="token operator">=</span>plugin -o eng/eng.so eng/greeter.go
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="_4-\u8FD0\u884C\u7ED3\u679C" tabindex="-1">4. \u8FD0\u884C\u7ED3\u679C <a class="header-anchor" href="#_4-\u8FD0\u884C\u7ED3\u679C" aria-hidden="true">#</a></h3><div class="language-"><pre><code>go run main.go
Hello Universe
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u63D2\u4EF6\u4E0E\u4E3B\u7A0B\u5E8F\u4F9D\u8D56\u7B2C\u4E09\u65B9\u5E93\u7684\u95EE\u9898" tabindex="-1">\u63D2\u4EF6\u4E0E\u4E3B\u7A0B\u5E8F\u4F9D\u8D56\u7B2C\u4E09\u65B9\u5E93\u7684\u95EE\u9898 <a class="header-anchor" href="#\u63D2\u4EF6\u4E0E\u4E3B\u7A0B\u5E8F\u4F9D\u8D56\u7B2C\u4E09\u65B9\u5E93\u7684\u95EE\u9898" aria-hidden="true">#</a></h2><p>\u5982\u679C\u4E3B\u7A0B\u5E8F\u548C\u63D2\u4EF6\u90FD\u4F9D\u8D56\u7B2C\u4E09\u65B9\u5E93\u4F1A\u6709\u4EC0\u4E48\u95EE\u9898\u5462?\b\u4ED6\u4EEC\u662F\u5171\u4EAB\u4E00\u4EFD\u4EE3\u7801?\u8FD8\u662F\u5B8C\u5168\u72EC\u7ACB\u7684copy\u5462? \u8FD9\u5C31\u7C7B\u4F3C\u4E8Ec\u8BED\u8A00\u52A8\u6001\u94FE\u63A5\u5E93\u7684\u4F9D\u8D56,\u4F46\u662F\u5E94\u8BE5\u53C8\u4E0D\u4E00\u6837. \u4EE5\u5B9E\u9A8C\u7ED3\u679C\u8BF4\u8BDD\u5427.</p><h3 id="_1-\u540C\u65F6\u4F9D\u8D56\u7684\u7B2C\u4E09\u65B9\u5E93" tabindex="-1">1. \u540C\u65F6\u4F9D\u8D56\u7684\u7B2C\u4E09\u65B9\u5E93 <a class="header-anchor" href="#_1-\u540C\u65F6\u4F9D\u8D56\u7684\u7B2C\u4E09\u65B9\u5E93" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">package</span> anotherlib
<span class="token keyword">var</span> ShareVariable <span class="token operator">=</span><span class="token number">7</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_2-\u8FD0\u884C\u7ED3\u679C" tabindex="-1">2. \u8FD0\u884C\u7ED3\u679C <a class="header-anchor" href="#_2-\u8FD0\u884C\u7ED3\u679C" aria-hidden="true">#</a></h3><p>\u548C\u5E73\u65F6\u5E38\u89C1\u7684\u52A8\u6001\u5E93\u884C\u4E3A\u4E00\u81F4,\u4E5F\u5C31\u662F\u8BF4\u4E3B\u7A0B\u5E8F\u548C\u63D2\u4EF6\u5171\u4EAB\u4E86\u4E00\u4EFD\u8FD0\u884C\u4EE3\u7801,\u4E5F\u5171\u4EAB\u4E86\u4E00\u4EFD\u8FD0\u884C\u53D8\u91CF.</p><h2 id="\u5F15\u5165\u4E86vendor\u7684\u95EE\u9898" tabindex="-1">\u5F15\u5165\u4E86vendor\u7684\u95EE\u9898 <a class="header-anchor" href="#\u5F15\u5165\u4E86vendor\u7684\u95EE\u9898" aria-hidden="true">#</a></h2><p>\u5B9E\u9645\u9879\u76EE\u4E2D,\u53EF\u80FD\u4EE3\u7801\u90FD\u4F1A\u4F7F\u7528vendor\u6765\u7BA1\u7406\u81EA\u5DF1\u7684\u7B2C\u4E09\u65B9\u4F9D\u8D56\u5E93. \u8FD9\u65F6\u5019\u5C31\u4F1A\u51FA\u73B0\u4E0D\u4E00\u81F4\u7684\u60C5\u51B5.\u4E5F\u5C31\u662F\u8BF4\u56E0\u4E3A\u4E3B\u7A0B\u5E8F\u4F7F\u7528\u4E86vendor\u6216\u8005\u63D2\u4EF6\u4F7F\u7528\u4E86vendor, \u90A3\u4E48\u8FD9\u65F6\u5019go runtime\u5C31\u4F1A\u8BA4\u4E3A\u63D2\u4EF6\u548C\u4E3B\u7A0B\u5E8F\u7528\u7684\u4E0D\u662F\u540C\u4E00\u4E2A\u7B2C\u4E09\u65B9\u4F9D\u8D56\u5E93,\u8FD9\u65F6\u5019\u5C31\u4F1A\u51FA\u73B0\u548C\u9884\u671F\u4E0D\u4E00\u81F4\u7684\u60C5\u51B5.</p><h2 id="\u5B8C\u6574\u7684\u4EE3\u7801" tabindex="-1">\u5B8C\u6574\u7684\u4EE3\u7801 <a class="header-anchor" href="#\u5B8C\u6574\u7684\u4EE3\u7801" aria-hidden="true">#</a></h2><p>\u6211\u5DF2\u7ECF\u628A\u4EE3\u7801\u653E\u5728<a href="https://github.com/nkbai/blog/tree/master/goplugin" target="_blank" rel="noopener noreferrer">github</a>,\u521A\u5174\u8DA3\u53EF\u4EE5\u4E0B\u8F7D\u8FD0\u884C,</p><h3 id="main-go" tabindex="-1">main.go <a class="header-anchor" href="#main-go" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;os&quot;</span>
	<span class="token string">&quot;plugin&quot;</span>
	<span class="token string">&quot;github.com/nkbai/blog/goplugin/anotherlib&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Greeter <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">GetShareVariable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// load module</span>
	<span class="token comment">// 1. open the so file to load the symbols</span>
	plug<span class="token punctuation">,</span> err <span class="token operator">:=</span> plugin<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;./eng/eng.so&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
		os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 2. look up a symbol (an exported function or variable)</span>
	<span class="token comment">// in this case, variable Greeter</span>
	symGreeter<span class="token punctuation">,</span> err <span class="token operator">:=</span> plug<span class="token punctuation">.</span><span class="token function">Lookup</span><span class="token punctuation">(</span><span class="token string">&quot;Greeter&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
		os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 3. Assert that loaded symbol is of a desired type</span>
	<span class="token comment">// in this case interface type Greeter (defined above)</span>
	<span class="token keyword">var</span> greeter Greeter
	greeter<span class="token punctuation">,</span> ok <span class="token operator">:=</span> symGreeter<span class="token punctuation">.</span><span class="token punctuation">(</span>Greeter<span class="token punctuation">)</span>
	<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;unexpected type from module symbol&quot;</span><span class="token punctuation">)</span>
		os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 4. use the module</span>
	greeter<span class="token punctuation">.</span><span class="token function">Greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;anotherlib in main&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>anotherlib<span class="token punctuation">.</span>ShareVariable<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;plugin anotherlib =%d\\n&quot;</span><span class="token punctuation">,</span>greeter<span class="token punctuation">.</span><span class="token function">GetShareVariable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;change anotherlib&#39;s variable&quot;</span><span class="token punctuation">)</span>
	anotherlib<span class="token punctuation">.</span>ShareVariable<span class="token operator">=</span><span class="token number">5</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;main share=%d,plugin share=%d\\n&quot;</span><span class="token punctuation">,</span>anotherlib<span class="token punctuation">.</span>ShareVariable<span class="token punctuation">,</span>greeter<span class="token punctuation">.</span><span class="token function">GetShareVariable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token comment">//\u53EF\u4EE5\u770B\u5230\u8F93\u51FA\u90FD\u662F5</span>

	<span class="token comment">//\u4E0B\u9762\u8FD9\u79CD\u60C5\u51B5\u5C06\u4F1A\u51FA\u73B0\u4E0D\u4E00\u81F4\u7684\u60C5\u51B5</span>
	<span class="token function">testpluginvendor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">testpluginvendor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">// load module</span>
	<span class="token comment">// 1. open the so file to load the symbols</span>
	plug<span class="token punctuation">,</span> err <span class="token operator">:=</span> plugin<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;pluginwithvendor/eng.so&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
		os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 2. look up a symbol (an exported function or variable)</span>
	<span class="token comment">// in this case, variable Greeter</span>
	symGreeter<span class="token punctuation">,</span> err <span class="token operator">:=</span> plug<span class="token punctuation">.</span><span class="token function">Lookup</span><span class="token punctuation">(</span><span class="token string">&quot;Greeter&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
		os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 3. Assert that loaded symbol is of a desired type</span>
	<span class="token comment">// in this case interface type Greeter (defined above)</span>
	<span class="token keyword">var</span> greeter Greeter
	greeter<span class="token punctuation">,</span> ok <span class="token operator">:=</span> symGreeter<span class="token punctuation">.</span><span class="token punctuation">(</span>Greeter<span class="token punctuation">)</span>
	<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;unexpected type from module symbol&quot;</span><span class="token punctuation">)</span>
		os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 4. use the module</span>
	greeter<span class="token punctuation">.</span><span class="token function">Greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;call plugin withvendor&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;anotherlib in main&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>anotherlib<span class="token punctuation">.</span>ShareVariable<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;plugin anotherlib =%d\\n&quot;</span><span class="token punctuation">,</span>greeter<span class="token punctuation">.</span><span class="token function">GetShareVariable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;change anotherlib&#39;s variable&quot;</span><span class="token punctuation">)</span>
	anotherlib<span class="token punctuation">.</span>ShareVariable<span class="token operator">=</span><span class="token number">5</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;main share=%d,plugin share=%d\\n&quot;</span><span class="token punctuation">,</span>anotherlib<span class="token punctuation">.</span>ShareVariable<span class="token punctuation">,</span>greeter<span class="token punctuation">.</span><span class="token function">GetShareVariable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token comment">//\u53EF\u4EE5\u770B\u5230\u8F93\u51FA\u5E76\u4E0D\u4E00\u81F4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br></div></div><h3 id="plugin-eng-go" tabindex="-1">plugin eng.go <a class="header-anchor" href="#plugin-eng-go" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">import</span> <span class="token string">&quot;github.com/nkbai/blog/goplugin/anotherlib&quot;</span>

<span class="token keyword">type</span> greeting <span class="token builtin">string</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>g greeting<span class="token punctuation">)</span> <span class="token function">Greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Universe&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>g greeting<span class="token punctuation">)</span> <span class="token function">GetShareVariable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> anotherlib<span class="token punctuation">.</span>ShareVariable
<span class="token punctuation">}</span>
<span class="token comment">// exported</span>
<span class="token keyword">var</span> Greeter greeting
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="\u7B2C\u4E09\u65B9\u4F9D\u8D56\u5E93-anotherlib-go" tabindex="-1">\u7B2C\u4E09\u65B9\u4F9D\u8D56\u5E93 anotherlib.go <a class="header-anchor" href="#\u7B2C\u4E09\u65B9\u4F9D\u8D56\u5E93-anotherlib-go" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">package</span> anotherlib
<span class="token keyword">var</span> ShareVariable <span class="token operator">=</span><span class="token number">7</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,27),o=[e];function l(c,u,r,i,k,b){return a(),s("div",null,o)}var g=n(t,[["render",l]]);export{d as __pageData,g as default};
