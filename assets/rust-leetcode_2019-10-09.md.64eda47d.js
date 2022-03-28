import{_ as n,c as s,o as a,a as p}from"./app.e7435feb.js";const d='{"title":"538. \u628A\u4E8C\u53C9\u641C\u7D22\u6811\u8F6C\u6362\u4E3A\u7D2F\u52A0\u6811","description":"","frontmatter":{"title":"538. \u628A\u4E8C\u53C9\u641C\u7D22\u6811\u8F6C\u6362\u4E3A\u7D2F\u52A0\u6811","date":"2019-10-08T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["\u6280\u672F\u76F8\u5173"]},"headers":[{"level":2,"title":"\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-10-09)","slug":"\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-10-09"},{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":2,"title":"\u89E3\u9898\u601D\u8DEF","slug":"\u89E3\u9898\u601D\u8DEF"},{"level":2,"title":"\u89E3\u9898\u8FC7\u7A0B","slug":"\u89E3\u9898\u8FC7\u7A0B"},{"level":2,"title":"\u4E00\u70B9\u611F\u609F","slug":"\u4E00\u70B9\u611F\u609F"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"rust-leetcode/2019-10-09.md"}',t={},e=p(`<h2 id="\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-10-09" tabindex="-1">\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-10-09) <a class="header-anchor" href="#\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-10-09" aria-hidden="true">#</a></h2><p>\u575A\u6301\u6BCF\u5929\u4E00\u9053\u9898,\u5237\u9898\u5B66\u4E60Rust.</p><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u7ED9\u5B9A\u4E00\u4E2A\u4E8C\u53C9\u641C\u7D22\u6811\uFF08Binary Search Tree\uFF09\uFF0C\u628A\u5B83\u8F6C\u6362\u6210\u4E3A\u7D2F\u52A0\u6811\uFF08Greater Tree)\uFF0C\u4F7F\u5F97\u6BCF\u4E2A\u8282\u70B9\u7684\u503C\u662F\u539F\u6765\u7684\u8282\u70B9\u503C\u52A0\u4E0A\u6240\u6709\u5927\u4E8E\u5B83\u7684\u8282\u70B9\u503C\u4E4B\u548C\u3002</p><p>\u4F8B\u5982\uFF1A</p><div class="language-"><pre><code>\u8F93\u5165: \u4E8C\u53C9\u641C\u7D22\u6811:
              5
            /   \\
           2     13

\u8F93\u51FA: \u8F6C\u6362\u4E3A\u7D2F\u52A0\u6811:
             18
            /   \\
          20     13
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09 \u94FE\u63A5\uFF1A<a href="https://leetcode-cn.com/problems/convert-bst-to-greater-tree" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/convert-bst-to-greater-tree</a> \u8457\u4F5C\u6743\u5F52\u9886\u6263\u7F51\u7EDC\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u5B98\u65B9\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p><h2 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1">\u89E3\u9898\u601D\u8DEF <a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a></h2><p>\u4E0A\u4E00\u79CD\u65B9\u6CD5\u662F\u770B\u9519\u9898\u76EE\u4E86,\u7406\u89E3\u6210\u666E\u901A\u4E8C\u53C9\u6811\u4E86, \u5982\u679C\u662Fbst,\u53EF\u4EE5\u8FDB\u884C\u7B80\u5316</p><ol><li>\u767E\u5EA6\u4E86\u4E00\u4E0B,BST\u8981\u6C42\u6CA1\u6709\u76F8\u7B49\u7684\u8282\u70B9,\u90A3\u4E48\u5C31\u7B80\u5316\u4E86\u5F88\u591A</li><li>\u91C7\u7528\u5148\u53F3\u5B50\u6811\u904D\u5386,\u7136\u540E\u4E0D\u65AD\u7D2F\u52A0\u66F4\u65B0\u5373\u53EF</li></ol><h2 id="\u89E3\u9898\u8FC7\u7A0B" tabindex="-1">\u89E3\u9898\u8FC7\u7A0B <a class="header-anchor" href="#\u89E3\u9898\u8FC7\u7A0B" aria-hidden="true">#</a></h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token class-name">TreeNode</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">RefCell</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Rc</span><span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">convert_bst</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">traversal</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        root
    <span class="token punctuation">}</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">traversal</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token keyword">mut</span> lastv<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> root<span class="token punctuation">.</span><span class="token function">is_none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> lastv<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> r <span class="token operator">=</span> root<span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        lastv <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">traversal</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">borrow_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> lastv<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> v <span class="token operator">=</span> r<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">;</span>
        lastv <span class="token operator">=</span> lastv <span class="token operator">+</span> v<span class="token punctuation">;</span>
        r<span class="token punctuation">.</span><span class="token function">borrow_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val <span class="token operator">=</span> lastv<span class="token punctuation">;</span>
        lastv <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">traversal</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> lastv<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> lastv<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token attribute attr-name">#[cfg(test)]</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">test</span> <span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token attribute attr-name">#[test]</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">test_level_order_bottom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//        assert_eq!(</span>
        <span class="token comment">//            Solution::convert_bst(build_tree(&amp;vec![3, 9, 20, NULL, NULL, 15, 7])),</span>
        <span class="token comment">//            build_tree(&amp;vec![])</span>
        <span class="token comment">//        );</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>
            <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">convert_bst</span><span class="token punctuation">(</span><span class="token function">build_tree</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token function">build_tree</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//        assert_eq!(</span>
        <span class="token comment">//            Solution::convert_bst(build_tree(&amp;vec![</span>
        <span class="token comment">//                1, 2, 3, 4, NULL, 5, 6, NULL, NULL, NULL, NULL, 7</span>
        <span class="token comment">//            ])),</span>
        <span class="token comment">//            1</span>
        <span class="token comment">//        );</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><h2 id="\u4E00\u70B9\u611F\u609F" tabindex="-1">\u4E00\u70B9\u611F\u609F <a class="header-anchor" href="#\u4E00\u70B9\u611F\u609F" aria-hidden="true">#</a></h2><p>\u770B\u9898\u4E0D\u591F\u4ED4\u7EC6,\u4E0A\u4E00\u6B21\u76F4\u63A5\u628ABST\u8FD9\u4E2A\u5173\u952E\u4FE1\u606F\u7ED9\u6F0F\u4E86,\u5BFC\u81F4\u4EE3\u7801\u590D\u6742\u5EA6\u9AD8\u4E86\u4E0D\u5C11</p><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u7684<a href="https://github.com/nkbai" target="_blank" rel="noopener noreferrer">github</a>,\u672C\u9879\u76EE\u6587\u7AE0\u6240\u6709\u4EE3\u7801\u90FD\u53EF\u4EE5\u627E\u5230.</p>`,16),o=[e];function c(l,r,u,i,k,b){return a(),s("div",null,o)}var f=n(t,[["render",c]]);export{d as __pageData,f as default};
