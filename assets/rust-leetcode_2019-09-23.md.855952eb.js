import{_ as n,c as s,o as a,a as p}from"./app.e7435feb.js";const d='{"title":"257. \u4E8C\u53C9\u6811\u7684\u6240\u6709\u8DEF\u5F84","description":"","frontmatter":{"title":"257. \u4E8C\u53C9\u6811\u7684\u6240\u6709\u8DEF\u5F84","date":"2019-09-22T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["\u6280\u672F\u76F8\u5173"]},"headers":[{"level":2,"title":"\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-09-23)","slug":"\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-09-23"},{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":2,"title":"\u89E3\u9898\u601D\u8DEF","slug":"\u89E3\u9898\u601D\u8DEF"},{"level":2,"title":"\u89E3\u9898\u8FC7\u7A0B","slug":"\u89E3\u9898\u8FC7\u7A0B"},{"level":2,"title":"\u4E00\u70B9\u611F\u609F","slug":"\u4E00\u70B9\u611F\u609F"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"rust-leetcode/2019-09-23.md"}',t={},e=p(`<h2 id="\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-09-23" tabindex="-1">\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-09-23) <a class="header-anchor" href="#\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-09-23" aria-hidden="true">#</a></h2><p>\u575A\u6301\u6BCF\u5929\u4E00\u9053\u9898,\u5237\u9898\u5B66\u4E60Rust.</p><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u7ED9\u5B9A\u4E00\u4E2A\u4E8C\u53C9\u6811\uFF0C\u8FD4\u56DE\u6240\u6709\u4ECE\u6839\u8282\u70B9\u5230\u53F6\u5B50\u8282\u70B9\u7684\u8DEF\u5F84\u3002</p><p>\u8BF4\u660E:\xA0\u53F6\u5B50\u8282\u70B9\u662F\u6307\u6CA1\u6709\u5B50\u8282\u70B9\u7684\u8282\u70B9\u3002</p><p>\u793A\u4F8B:</p><p>\u8F93\u5165:</p><p>1 / <br> 2 3 <br> 5</p><p>\u8F93\u51FA: [&quot;1-&gt;2-&gt;5&quot;, &quot;1-&gt;3&quot;]</p><p>\u89E3\u91CA: \u6240\u6709\u6839\u8282\u70B9\u5230\u53F6\u5B50\u8282\u70B9\u7684\u8DEF\u5F84\u4E3A: 1-&gt;2-&gt;5, 1-&gt;3 \u5728\u771F\u5B9E\u7684\u9762\u8BD5\u4E2D\u9047\u5230\u8FC7\u8FD9\u9053\u9898\uFF1F</p><p>\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09 \u94FE\u63A5\uFF1A<a href="https://leetcode-cn.com/problems/binary-tree-paths" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/binary-tree-paths</a> \u8457\u4F5C\u6743\u5F52\u9886\u6263\u7F51\u7EDC\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u5B98\u65B9\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p><h2 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1">\u89E3\u9898\u601D\u8DEF <a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a></h2><p>\u601D\u8DEF: \u8BB0\u5F97\u6BCF\u4E2A\u8282\u70B9\u8DEF\u5F84\u90FD\u662Fclone\u8FC7\u53BB\u7684\uFF0C\u53EF\u4EE5\u4EFB\u610F\u4FEE\u6539</p><h2 id="\u89E3\u9898\u8FC7\u7A0B" tabindex="-1">\u89E3\u9898\u8FC7\u7A0B <a class="header-anchor" href="#\u89E3\u9898\u8FC7\u7A0B" aria-hidden="true">#</a></h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token class-name">TreeNode</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">RefCell</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Rc</span><span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">binary_tree_paths</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> v <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> path <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">internal</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> path<span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token closure-params"><span class="token closure-punctuation punctuation">|</span>n<span class="token punctuation">,</span> p<span class="token closure-punctuation punctuation">|</span></span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> p<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
                <span class="token operator">*</span>p <span class="token operator">+=</span> n<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">as_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token operator">*</span>p <span class="token operator">+=</span> <span class="token string">&quot;-&gt;&quot;</span><span class="token punctuation">;</span>
                <span class="token operator">*</span>p <span class="token operator">+=</span> n<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">as_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> n<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">is_none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> n<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">is_none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                v<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> v<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">internal</span><span class="token punctuation">(</span>
        root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
        <span class="token keyword">mut</span> path<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span>
        f<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">impl</span> <span class="token class-name">FnMut</span><span class="token punctuation">(</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token class-name">String</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//\u95ED\u5305\u7C7B\u578B\u4E0D\u80FD\u5E26\u53C2\u6570\u540D\u5B57\uFF0C</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> root<span class="token punctuation">.</span><span class="token function">is_none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> r <span class="token operator">=</span> root<span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">f</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">internal</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">borrow_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> f<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">internal</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">borrow_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> path<span class="token punctuation">,</span> f<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token attribute attr-name">#[cfg(test)]</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">test</span> <span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span>build_tree<span class="token punctuation">;</span>
    <span class="token attribute attr-name">#[test]</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">test_path</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token function">build_tree</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>
            <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token string">&quot;1-&gt;2-&gt;4&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1-&gt;2-&gt;5&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1-&gt;3&quot;</span><span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">binary_tree_paths</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><h2 id="\u4E00\u70B9\u611F\u609F" tabindex="-1">\u4E00\u70B9\u611F\u609F <a class="header-anchor" href="#\u4E00\u70B9\u611F\u609F" aria-hidden="true">#</a></h2><p>\u4F7F\u7528\u95ED\u5305,\u907F\u514D\u4E86\u5F88\u591A\u53C2\u6570\u7684\u4F20\u9012</p><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u7684<a href="https://github.com/nkbai" target="_blank" rel="noopener noreferrer">github</a>,\u672C\u9879\u76EE\u6587\u7AE0\u6240\u6709\u4EE3\u7801\u90FD\u53EF\u4EE5\u627E\u5230.</p>`,19),o=[e];function c(l,u,i,r,k,b){return a(),s("div",null,o)}var f=n(t,[["render",c]]);export{d as __pageData,f as default};
