import{_ as n,c as s,o as a,a as p}from"./app.4bbc222c.js";const m='{"title":"990. \u7B49\u5F0F\u65B9\u7A0B\u7684\u53EF\u6EE1\u8DB3\u6027","description":"","frontmatter":{"title":"990. \u7B49\u5F0F\u65B9\u7A0B\u7684\u53EF\u6EE1\u8DB3\u6027","date":"2020-03-16T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["\u6280\u672F\u76F8\u5173"],"plugins":["viz"]},"headers":[{"level":2,"title":"\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2020-03-17)","slug":"\u6BCF\u5929\u4E00\u9053rust-leetcode-2020-03-17"},{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":2,"title":"\u89E3\u9898\u601D\u8DEF","slug":"\u89E3\u9898\u601D\u8DEF"},{"level":2,"title":"\u89E3\u9898\u8FC7\u7A0B","slug":"\u89E3\u9898\u8FC7\u7A0B"},{"level":2,"title":"\u4E00\u70B9\u611F\u609F","slug":"\u4E00\u70B9\u611F\u609F"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"rust-leetcode/2020-03-17.md"}',t={},e=p(`<h2 id="\u6BCF\u5929\u4E00\u9053rust-leetcode-2020-03-17" tabindex="-1">\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2020-03-17) <a class="header-anchor" href="#\u6BCF\u5929\u4E00\u9053rust-leetcode-2020-03-17" aria-hidden="true">#</a></h2><p>\u575A\u6301\u6BCF\u5929\u4E00\u9053\u9898,\u5237\u9898\u5B66\u4E60Rust.</p><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u7ED9\u5B9A\u4E00\u4E2A\u7531\u8868\u793A\u53D8\u91CF\u4E4B\u95F4\u5173\u7CFB\u7684\u5B57\u7B26\u4E32\u65B9\u7A0B\u7EC4\u6210\u7684\u6570\u7EC4\uFF0C\u6BCF\u4E2A\u5B57\u7B26\u4E32\u65B9\u7A0B equations[i] \u7684\u957F\u5EA6\u4E3A 4\uFF0C\u5E76\u91C7\u7528\u4E24\u79CD\u4E0D\u540C\u7684\u5F62\u5F0F\u4E4B\u4E00\uFF1A&quot;a==b&quot; \u6216\xA0&quot;a!=b&quot;\u3002\u5728\u8FD9\u91CC\uFF0Ca \u548C b \u662F\u5C0F\u5199\u5B57\u6BCD\uFF08\u4E0D\u4E00\u5B9A\u4E0D\u540C\uFF09\uFF0C\u8868\u793A\u5355\u5B57\u6BCD\u53D8\u91CF\u540D\u3002</p><p>\u53EA\u6709\u5F53\u53EF\u4EE5\u5C06\u6574\u6570\u5206\u914D\u7ED9\u53D8\u91CF\u540D\uFF0C\u4EE5\u4FBF\u6EE1\u8DB3\u6240\u6709\u7ED9\u5B9A\u7684\u65B9\u7A0B\u65F6\u624D\u8FD4\u56DE\xA0true\uFF0C\u5426\u5219\u8FD4\u56DE false\u3002</p><p>\u793A\u4F8B 1\uFF1A</p><p>\u8F93\u5165\uFF1A[&quot;a==b&quot;,&quot;b!=a&quot;] \u8F93\u51FA\uFF1Afalse \u89E3\u91CA\uFF1A\u5982\u679C\u6211\u4EEC\u6307\u5B9A\uFF0Ca = 1 \u4E14 b = 1\uFF0C\u90A3\u4E48\u53EF\u4EE5\u6EE1\u8DB3\u7B2C\u4E00\u4E2A\u65B9\u7A0B\uFF0C\u4F46\u65E0\u6CD5\u6EE1\u8DB3\u7B2C\u4E8C\u4E2A\u65B9\u7A0B\u3002\u6CA1\u6709\u529E\u6CD5\u5206\u914D\u53D8\u91CF\u540C\u65F6\u6EE1\u8DB3\u8FD9\u4E24\u4E2A\u65B9\u7A0B\u3002 \u793A\u4F8B 2\uFF1A</p><p>\u8F93\u51FA\uFF1A[&quot;b<mark>a&quot;,&quot;a</mark>b&quot;] \u8F93\u5165\uFF1Atrue \u89E3\u91CA\uFF1A\u6211\u4EEC\u53EF\u4EE5\u6307\u5B9A a = 1 \u4E14 b = 1 \u4EE5\u6EE1\u8DB3\u6EE1\u8DB3\u8FD9\u4E24\u4E2A\u65B9\u7A0B\u3002 \u793A\u4F8B 3\uFF1A</p><p>\u8F93\u5165\uFF1A[&quot;a<mark>b&quot;,&quot;b</mark>c&quot;,&quot;a==c&quot;] \u8F93\u51FA\uFF1Atrue \u793A\u4F8B 4\uFF1A</p><p>\u8F93\u5165\uFF1A[&quot;a<mark>b&quot;,&quot;b!=c&quot;,&quot;c</mark>a&quot;] \u8F93\u51FA\uFF1Afalse \u793A\u4F8B 5\uFF1A</p><p>\u8F93\u5165\uFF1A[&quot;c<mark>c&quot;,&quot;b</mark>d&quot;,&quot;x!=z&quot;] \u8F93\u51FA\uFF1Atrue</p><p>\u63D0\u793A\uFF1A</p><p>1 &lt;= equations.length &lt;= 500 equations[i].length == 4 equations[i][0] \u548C\xA0equations[i][3]\xA0\u662F\u5C0F\u5199\u5B57\u6BCD equations[i][1] \u8981\u4E48\u662F\xA0&#39;=&#39;\uFF0C\u8981\u4E48\u662F\xA0&#39;!&#39; equations[i][2]\xA0\u662F\xA0&#39;=&#39;</p><p>\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09 \u94FE\u63A5\uFF1A<a href="https://leetcode-cn.com/problems/satisfiability-of-equality-equations" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/satisfiability-of-equality-equations</a> \u8457\u4F5C\u6743\u5F52\u9886\u6263\u7F51\u7EDC\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u5B98\u65B9\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p><h2 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1">\u89E3\u9898\u601D\u8DEF <a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a></h2><p>==\u5177\u6709\u4F20\u9012\u6027,!=\u5219\u6CA1\u6709 \u5148\u5C06\u7B49\u7B49\u653E\u5728\u5E76\u67E5\u96C6\u4E2D, \u7136\u540E\u62FF\u4E0D\u7B49\u6765\u6821\u9A8C,\u5982\u679C\u90FD\u4E0D\u5728\u4E00\u4E2A\u96C6\u5408\u4E2D,\u5219\u8FD4\u56DEtrue</p><h2 id="\u89E3\u9898\u8FC7\u7A0B" tabindex="-1">\u89E3\u9898\u8FC7\u7A0B <a class="header-anchor" href="#\u89E3\u9898\u8FC7\u7A0B" aria-hidden="true">#</a></h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">struct</span> <span class="token type-definition class-name">DSU</span> <span class="token punctuation">{</span>
    pre<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">impl</span> <span class="token constant">DSU</span> <span class="token punctuation">{</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">new</span><span class="token punctuation">(</span>n<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token constant">DSU</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> v <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">with_capacity</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>n <span class="token punctuation">{</span>
            v<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i <span class="token keyword">as</span> <span class="token keyword">i32</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token constant">DSU</span> <span class="token punctuation">{</span> pre<span class="token punctuation">:</span> v <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">self</span><span class="token punctuation">,</span> x<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token keyword">self</span><span class="token punctuation">.</span>pre<span class="token punctuation">[</span>x <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">]</span> <span class="token operator">==</span> x <span class="token punctuation">{</span>
            <span class="token keyword">return</span> x<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// let prex = self.pre[x];</span>
        <span class="token keyword">let</span> prex <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">.</span>pre<span class="token punctuation">[</span>x <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u56E0\u4E3A\u9012\u5F52,\u8FD9\u91CC\u4F1A\u628A\u4E00\u4E32\u4E0A\u9762\u7684\u6240\u6709\u8DEF\u5F84\u90FD\u538B\u7F29\u4E86,</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>pre<span class="token punctuation">[</span>x <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">]</span> <span class="token operator">=</span> prex<span class="token punctuation">;</span>
        <span class="token keyword">return</span> prex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//\u8FD4\u56DEfalse,\u8BF4\u660Ex,y\u5728\u540C\u4E00\u4E2A\u96C6\u5408\u91CC</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">merge</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">self</span><span class="token punctuation">,</span> x<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">bool</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> prex <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> prey <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> prex <span class="token operator">==</span> prey <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//\u6CE8\u610F\u8FD9\u91CC\u662F\u8BBE\u7F6E\u7684\u662Fprex\u7684parent,\u800C\u4E0D\u662Fx\u7684parent</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>pre<span class="token punctuation">[</span>prey <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">]</span> <span class="token operator">=</span> prex<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">equations_possible</span><span class="token punctuation">(</span>equations<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">bool</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> not_equals <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> dsu <span class="token operator">=</span> <span class="token constant">DSU</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> e <span class="token keyword">in</span> equations <span class="token punctuation">{</span>
            <span class="token keyword">let</span> e <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">as_bytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> a <span class="token operator">=</span> e<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span> <span class="token keyword">as</span> <span class="token keyword">u8</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> b <span class="token operator">=</span> e<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span> <span class="token keyword">as</span> <span class="token keyword">u8</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> e<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;=&#39;</span> <span class="token keyword">as</span> <span class="token keyword">u8</span> <span class="token punctuation">{</span>
                dsu<span class="token punctuation">.</span><span class="token function">merge</span><span class="token punctuation">(</span>a <span class="token keyword">as</span> <span class="token keyword">i32</span><span class="token punctuation">,</span> b <span class="token keyword">as</span> <span class="token keyword">i32</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                not_equals<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token keyword">in</span> not_equals <span class="token punctuation">{</span>
            <span class="token keyword">if</span> dsu<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>a <span class="token keyword">as</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token operator">==</span> dsu<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>b <span class="token keyword">as</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token attribute attr-name">#[cfg(test)]</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">test</span> <span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token attribute attr-name">#[test]</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">equations_possible</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token string">&quot;a==b&quot;</span><span class="token punctuation">.</span><span class="token function">into</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;b==c&quot;</span><span class="token punctuation">.</span><span class="token function">into</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;a==c&quot;</span><span class="token punctuation">.</span><span class="token function">into</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">equations_possible</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token string">&quot;a==b&quot;</span><span class="token punctuation">.</span><span class="token function">into</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;b!=c&quot;</span><span class="token punctuation">.</span><span class="token function">into</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;c==a&quot;</span><span class="token punctuation">.</span><span class="token function">into</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">equations_possible</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token string">&quot;c==c&quot;</span><span class="token punctuation">.</span><span class="token function">into</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;b==d&quot;</span><span class="token punctuation">.</span><span class="token function">into</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;x!=z&quot;</span><span class="token punctuation">.</span><span class="token function">into</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br></div></div><h2 id="\u4E00\u70B9\u611F\u609F" tabindex="-1">\u4E00\u70B9\u611F\u609F <a class="header-anchor" href="#\u4E00\u70B9\u611F\u609F" aria-hidden="true">#</a></h2><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u7684<a href="https://github.com/nkbai/rust-leetcode" target="_blank" rel="noopener noreferrer">github</a>,\u672C\u9879\u76EE\u6587\u7AE0\u6240\u6709\u4EE3\u7801\u90FD\u53EF\u4EE5\u627E\u5230.</p>`,21),o=[e];function c(l,u,k,i,r,b){return a(),s("div",null,o)}var y=n(t,[["render",c]]);export{m as __pageData,y as default};