import{_ as n,c as s,o as a,a as t}from"./app.e7435feb.js";const m='{"title":"golang Subprocess tests","description":"","frontmatter":{"title":"golang Subprocess tests","date":"2018-04-30T03:06:23.000Z","hide":false},"headers":[],"relativePath":"blockchain/ethereum/golang subprocess tests.md"}',p={},e=t(`<h1 id="golang-subprocess-tests" tabindex="-1">golang Subprocess tests <a class="header-anchor" href="#golang-subprocess-tests" aria-hidden="true">#</a></h1><p>Sometimes you need to test the behavior of a process, not just a function.</p><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">func</span> <span class="token function">Crasher</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Going down in flames!&quot;</span><span class="token punctuation">)</span>
    os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>To test this code, we invoke the test binary itself as a subprocess:</p><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">func</span> <span class="token function">TestCrasher</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> os<span class="token punctuation">.</span><span class="token function">Getenv</span><span class="token punctuation">(</span><span class="token string">&quot;BE_CRASHER&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;1&quot;</span> <span class="token punctuation">{</span>
        <span class="token function">Crasher</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    cmd <span class="token operator">:=</span> exec<span class="token punctuation">.</span><span class="token function">Command</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&quot;-test.run=TestCrasher&quot;</span><span class="token punctuation">)</span>
    cmd<span class="token punctuation">.</span>Env <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">Environ</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;BE_CRASHER=1&quot;</span><span class="token punctuation">)</span>
    err <span class="token operator">:=</span> cmd<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> e<span class="token punctuation">,</span> ok <span class="token operator">:=</span> err<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>exec<span class="token punctuation">.</span>ExitError<span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>e<span class="token punctuation">.</span><span class="token function">Success</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    t<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;process ran with err %v, want exit status 1&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u6838\u5FC3\u6280\u5DE7\u5728\u4E8Eos.args[0]\u53EF\u4EE5\u83B7\u53D6\u5230\u771F\u5B9E\u7684\u53EF\u6267\u884C test \u7A0B\u5E8F,\u4ECE\u800C\u6539\u53D8\u73AF\u5883\u53D8\u91CF.</p>`,6),o=[e];function c(u,l,r,i,k,b){return a(),s("div",null,o)}var f=n(p,[["render",c]]);export{m as __pageData,f as default};
