import{_ as n,c as s,o as a,a as p}from"./app.8cf0e725.js";const d='{"title":"287. \u5BFB\u627E\u91CD\u590D\u6570","description":"","frontmatter":{"title":"287. \u5BFB\u627E\u91CD\u590D\u6570","date":"2020-02-25T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["\u6280\u672F\u76F8\u5173"],"plugins":["viz"]},"headers":[{"level":2,"title":"\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2020-02-26)","slug":"\u6BCF\u5929\u4E00\u9053rust-leetcode-2020-02-26"},{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":2,"title":"\u89E3\u9898\u601D\u8DEF","slug":"\u89E3\u9898\u601D\u8DEF"},{"level":2,"title":"\u89E3\u9898\u8FC7\u7A0B","slug":"\u89E3\u9898\u8FC7\u7A0B"},{"level":2,"title":"\u4E00\u70B9\u611F\u609F","slug":"\u4E00\u70B9\u611F\u609F"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"rust-leetcode/2020-02-26.md"}',t={},e=p(`<h2 id="\u6BCF\u5929\u4E00\u9053rust-leetcode-2020-02-26" tabindex="-1">\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2020-02-26) <a class="header-anchor" href="#\u6BCF\u5929\u4E00\u9053rust-leetcode-2020-02-26" aria-hidden="true">#</a></h2><p>\u575A\u6301\u6BCF\u5929\u4E00\u9053\u9898,\u5237\u9898\u5B66\u4E60Rust.</p><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><ol start="287"><li>\u5BFB\u627E\u91CD\u590D\u6570 \u7ED9\u5B9A\u4E00\u4E2A\u5305\u542B\xA0n + 1 \u4E2A\u6574\u6570\u7684\u6570\u7EC4\xA0nums\uFF0C\u5176\u6570\u5B57\u90FD\u5728 1 \u5230 n\xA0\u4E4B\u95F4\uFF08\u5305\u62EC 1 \u548C n\uFF09\uFF0C\u53EF\u77E5\u81F3\u5C11\u5B58\u5728\u4E00\u4E2A\u91CD\u590D\u7684\u6574\u6570\u3002\u5047\u8BBE\u53EA\u6709\u4E00\u4E2A\u91CD\u590D\u7684\u6574\u6570\uFF0C\u627E\u51FA\u8FD9\u4E2A\u91CD\u590D\u7684\u6570\u3002</li></ol><p>\u793A\u4F8B 1:</p><p>\u8F93\u5165: [1,3,4,2,2] \u8F93\u51FA: 2 \u793A\u4F8B 2:</p><p>\u8F93\u5165: [3,1,3,4,2] \u8F93\u51FA: 3 \u8BF4\u660E\uFF1A</p><p>\u4E0D\u80FD\u66F4\u6539\u539F\u6570\u7EC4\uFF08\u5047\u8BBE\u6570\u7EC4\u662F\u53EA\u8BFB\u7684\uFF09\u3002 \u53EA\u80FD\u4F7F\u7528\u989D\u5916\u7684 O(1) \u7684\u7A7A\u95F4\u3002 \u65F6\u95F4\u590D\u6742\u5EA6\u5C0F\u4E8E O(n2) \u3002 \u6570\u7EC4\u4E2D\u53EA\u6709\u4E00\u4E2A\u91CD\u590D\u7684\u6570\u5B57\uFF0C\u4F46\u5B83\u53EF\u80FD\u4E0D\u6B62\u91CD\u590D\u51FA\u73B0\u4E00\u6B21\u3002</p><p>\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09 \u94FE\u63A5\uFF1A<a href="https://leetcode-cn.com/problems/find-the-duplicate-number" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/find-the-duplicate-number</a> \u8457\u4F5C\u6743\u5F52\u9886\u6263\u7F51\u7EDC\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u5B98\u65B9\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p><h2 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1">\u89E3\u9898\u601D\u8DEF <a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a></h2><p>\u6CE8\u610F\u8981\u6C42:</p><ol><li>\u4E0D\u80FD\u66F4\u6539\u539F\u6570\u7EC4,\u6240\u4EE5\u4E0D\u80FD\u6392\u5E8F</li><li>\u53EA\u80FD\u4F7F\u7528O(1)\u7A7A\u95F4</li><li>\u65F6\u95F4\u590D\u6742\u5EA6\u5C0F\u4E8EO(N^2) \u6700\u66B4\u529B\u7684\u65B9\u5F0F: \u9488\u5BF9a[i],\u5728\u9664a[i]\u4E4B\u5916\u7684\u6240\u6709\u5143\u7D20\u9010\u4E2A\u6BD4\u8F83. \u8FD9\u6837\u80AF\u5B9A\u80FD\u627E\u5230\u91CD\u590D\u7684\u6570\u5B57,\u4F46\u662F\u8FDD\u53CD\u4E863,\u590D\u6742\u5EA6\u4E3AO(N^2) \u6240\u4EE5\u53EF\u4EE5\u8003\u8651\u4E8C\u5206\u67E5\u627E: \u7B2C\u4E00\u904D\u5728[1,n/2],(n/2,n]\u4E4B\u95F4\u627E,\u5982\u679C\u5DE6\u8FB9\u7684\u4E2A\u6570\u8D85\u8FC7n/2,\u5219\u91CD\u590D\u7684\u6570\u5B57\u4E00\u5B9A\u5728\u5DE6\u8FB9,\u5426\u5219\u5728\u53F3\u8FB9.</li></ol><h2 id="\u89E3\u9898\u8FC7\u7A0B" tabindex="-1">\u89E3\u9898\u8FC7\u7A0B <a class="header-anchor" href="#\u89E3\u9898\u8FC7\u7A0B" aria-hidden="true">#</a></h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">find_duplicate</span><span class="token punctuation">(</span>nums<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u533A\u95F4\u90FD\u662F\u95ED\u533A\u95F4,\u5DE6\u53F3\u90FD\u5305\u542B</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> l <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>nums<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token keyword">i32</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> r <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token keyword">i32</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>nums<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token keyword">i32</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">loop</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">find_internal</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span><span class="token function">as_slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> l<span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;l={:?},r={:?},result={:?}&quot;</span><span class="token punctuation">,</span> l<span class="token punctuation">,</span> r<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//\u5728\u5DE6\u8FB9,\u52A01\u662F\u56E0\u4E3A\u95ED\u533A\u95F4</span>
            <span class="token keyword">if</span> result<span class="token number">.0</span> <span class="token operator">&gt;</span> l<span class="token number">.1</span> <span class="token operator">-</span> l<span class="token number">.0</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> len <span class="token operator">=</span> l<span class="token number">.1</span> <span class="token operator">-</span> l<span class="token number">.0</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> len <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
                    <span class="token comment">//\u957F\u5EA6\u53EA\u67091\u8868\u793A\u627E\u5230\u4E86</span>
                    <span class="token keyword">return</span> l<span class="token number">.0</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                r <span class="token operator">=</span> <span class="token punctuation">(</span>len <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">+</span> l<span class="token number">.0</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> l<span class="token number">.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                l <span class="token operator">=</span> <span class="token punctuation">(</span>l<span class="token number">.0</span><span class="token punctuation">,</span> len <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">+</span> l<span class="token number">.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">//\u5728\u53F3\u8FB9</span>
                <span class="token keyword">let</span> len <span class="token operator">=</span> r<span class="token number">.1</span> <span class="token operator">-</span> r<span class="token number">.0</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> len <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> r<span class="token number">.0</span><span class="token punctuation">;</span> <span class="token comment">//\u957F\u5EA6\u53EA\u67091\u8868\u793A\u627E\u5230\u4E86</span>
                <span class="token punctuation">}</span>
                l <span class="token operator">=</span> <span class="token punctuation">(</span>r<span class="token number">.0</span><span class="token punctuation">,</span> len <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">+</span> r<span class="token number">.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                r <span class="token operator">=</span> <span class="token punctuation">(</span>len <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">+</span> r<span class="token number">.0</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> r<span class="token number">.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// panic!(&quot;not found&quot;);</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">find_internal</span><span class="token punctuation">(</span>nums<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token punctuation">[</span><span class="token keyword">i32</span><span class="token punctuation">]</span><span class="token punctuation">,</span> l<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token keyword">i32</span><span class="token punctuation">,</span> <span class="token keyword">i32</span><span class="token punctuation">)</span><span class="token punctuation">,</span> r<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token keyword">i32</span><span class="token punctuation">,</span> <span class="token keyword">i32</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token punctuation">(</span><span class="token keyword">i32</span><span class="token punctuation">,</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> countl <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> countr <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        nums<span class="token punctuation">.</span><span class="token function">iter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">for_each</span><span class="token punctuation">(</span><span class="token closure-params"><span class="token closure-punctuation punctuation">|</span>i<span class="token closure-punctuation punctuation">|</span></span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token operator">*</span>i <span class="token operator">&gt;=</span> l<span class="token number">.0</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">*</span>i <span class="token operator">&lt;=</span> l<span class="token number">.1</span> <span class="token punctuation">{</span>
                countl <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token operator">*</span>i <span class="token operator">&gt;=</span> r<span class="token number">.0</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">*</span>i <span class="token operator">&lt;=</span> r<span class="token number">.1</span> <span class="token punctuation">{</span>
                countr <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">(</span>countl<span class="token punctuation">,</span> countr<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><h2 id="\u4E00\u70B9\u611F\u609F" tabindex="-1">\u4E00\u70B9\u611F\u609F <a class="header-anchor" href="#\u4E00\u70B9\u611F\u609F" aria-hidden="true">#</a></h2><p>\u53E6\u5916\u8FD8\u6709\u4E00\u79CD<a href="https://leetcode-cn.com/problems/find-the-duplicate-number/solution/xun-zhao-zhong-fu-shu-by-leetcode/" target="_blank" rel="noopener noreferrer">\u5F17\u6D1B\u4F0A\u5FB7\u7684\u4E4C\u9F9F\u548C\u5154\u5B50\uFF08\u5FAA\u73AF\u68C0\u6D4B</a> \u770B\u4E86\u534A\u5929\u8FD8\u662F\u6CA1\u660E\u767D,\u8FD8\u662F\u4E8C\u5206\u641C\u7D22\u66F4\u6E05\u6670,\u4E0D\u8FC7\u4EE3\u7801\u7565\u957F.</p><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u7684<a href="https://github.com/nkbai/rust-leetcode" target="_blank" rel="noopener noreferrer">github</a>,\u672C\u9879\u76EE\u6587\u7AE0\u6240\u6709\u4EE3\u7801\u90FD\u53EF\u4EE5\u627E\u5230.</p>`,18),o=[e];function c(l,u,r,k,i,b){return a(),s("div",null,o)}var h=n(t,[["render",c]]);export{d as __pageData,h as default};