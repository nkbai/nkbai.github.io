import{_ as n,c as s,o as a,a as p}from"./app.3dd4ae37.js";const d='{"title":"889. \u6839\u636E\u524D\u5E8F\u548C\u540E\u5E8F\u904D\u5386\u6784\u9020\u4E8C\u53C9\u6811","description":"","frontmatter":{"title":"889. \u6839\u636E\u524D\u5E8F\u548C\u540E\u5E8F\u904D\u5386\u6784\u9020\u4E8C\u53C9\u6811","date":"2019-10-21T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["\u6280\u672F\u76F8\u5173"]},"headers":[{"level":2,"title":"\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-10-22)","slug":"\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-10-22"},{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":2,"title":"\u89E3\u9898\u601D\u8DEF","slug":"\u89E3\u9898\u601D\u8DEF"},{"level":2,"title":"\u89E3\u9898\u8FC7\u7A0B","slug":"\u89E3\u9898\u8FC7\u7A0B"},{"level":2,"title":"\u4E00\u70B9\u611F\u609F","slug":"\u4E00\u70B9\u611F\u609F"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"rust-leetcode/2019-10-22.md"}',t={},e=p(`<h2 id="\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-10-22" tabindex="-1">\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-10-22) <a class="header-anchor" href="#\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-10-22" aria-hidden="true">#</a></h2><p>\u575A\u6301\u6BCF\u5929\u4E00\u9053\u9898,\u5237\u9898\u5B66\u4E60Rust.</p><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u8FD4\u56DE\u4E0E\u7ED9\u5B9A\u7684\u524D\u5E8F\u548C\u540E\u5E8F\u904D\u5386\u5339\u914D\u7684\u4EFB\u4F55\u4E8C\u53C9\u6811\u3002</p><p>pre\xA0\u548C\xA0post\xA0\u904D\u5386\u4E2D\u7684\u503C\u662F\u4E0D\u540C\u7684\u6B63\u6574\u6570\u3002</p><p>\u793A\u4F8B\uFF1A</p><p>\u8F93\u5165\uFF1Apre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1] \u8F93\u51FA\uFF1A[1,2,3,4,5,6,7]</p><p>\u63D0\u793A\uFF1A</p><p>1 &lt;= pre.length == post.length &lt;= 30 pre[]\xA0\u548C\xA0post[]\xA0\u90FD\u662F\xA01, 2, ..., pre.length\xA0\u7684\u6392\u5217 \u6BCF\u4E2A\u8F93\u5165\u4FDD\u8BC1\u81F3\u5C11\u6709\u4E00\u4E2A\u7B54\u6848\u3002\u5982\u679C\u6709\u591A\u4E2A\u7B54\u6848\uFF0C\u53EF\u4EE5\u8FD4\u56DE\u5176\u4E2D\u4E00\u4E2A\u3002</p><p>\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09 \u94FE\u63A5\uFF1A<a href="https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal</a> \u8457\u4F5C\u6743\u5F52\u9886\u6263\u7F51\u7EDC\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u5B98\u65B9\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p><h2 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1">\u89E3\u9898\u601D\u8DEF <a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a></h2><p>\u9898\u76EE\u4E2D\u660E\u786E\u8BF4\u4E86\u6709\u53EF\u80FD\u6709\u591A\u4E2A\u7B54\u6848,\u53EA\u8981\u6709\u4E00\u4E2A\u5C31ok\u4E86</p><ol><li>\u524D\u5E8F\u7B2C\u4E00\u4E2A\u5F53\u524D\u5B50\u6811\u7684\u6839\u8282\u70B9,\u540E\u5E8F\u6700\u540E\u4E00\u4E2A\u540C\u6837\u662F\u5F53\u524D\u5B50\u6811\u7684\u6839\u8282\u70B9,\u79FB\u9664\u4ED6\u4EEC</li><li>\u524D\u5E8F\u7B2C\u4E00\u4E2A\u662F\u5F53\u524D\u5B50\u6811\u7684\u5DE6\u5B50\u8282\u70B9(\u672A\u5FC5\u4E00\u5B9A,\u4F46\u662F\u884C\u5F97\u901A)</li><li>\u524D\u5E8F\u7B2C\u4E00\u4E2A\u628A\u540E\u5E8F\u5206\u6210\u4E24\u90E8\u5206\u524D\u534A\u90E8\u5206\u662F\u5DE6\u5B50\u6811,\u540E\u534A\u90E8\u5206\u662F\u53F3\u5B50\u6811,\u540E\u534A\u90E8\u5206\u8981\u79FB\u9664\u6700\u540E\u4E00\u4E2A</li><li>\u5DE6\u53F3\u4E24\u90E8\u5206\u7EE7\u7EED\u5206\u522B\u4ECE\u7B2C\u4E00\u6B65\u5F00\u59CB\u9012\u5F52\u6784\u9020\u5B50\u6811</li></ol><h2 id="\u89E3\u9898\u8FC7\u7A0B" tabindex="-1">\u89E3\u9898\u8FC7\u7A0B <a class="header-anchor" href="#\u89E3\u9898\u8FC7\u7A0B" aria-hidden="true">#</a></h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token class-name">TreeNode</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token punctuation">{</span><span class="token class-name">Ref</span><span class="token punctuation">,</span> <span class="token class-name">RefCell</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>collections<span class="token punctuation">::</span></span><span class="token class-name">HashSet</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Rc</span><span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">construct_from_pre_post</span><span class="token punctuation">(</span>pre<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> post<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">construct_internal</span><span class="token punctuation">(</span>pre<span class="token punctuation">.</span><span class="token function">as_slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> post<span class="token punctuation">.</span><span class="token function">as_slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">construct_internal</span><span class="token punctuation">(</span>pre<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token punctuation">[</span><span class="token keyword">i32</span><span class="token punctuation">]</span><span class="token punctuation">,</span> post<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token punctuation">[</span><span class="token keyword">i32</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> pre<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> post<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token macro property">panic!</span><span class="token punctuation">(</span><span class="token string">&quot;pre={:?},post={:?}&quot;</span><span class="token punctuation">,</span> pre<span class="token punctuation">,</span> post<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> pre<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token class-name">None</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> r <span class="token operator">=</span> <span class="token class-name">TreeNode</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span>pre<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u7B2C\u4E00\u4E2A</span>
        <span class="token keyword">let</span> l <span class="token operator">=</span> pre<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> l <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token class-name">Rc</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">RefCell</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u4E86,\u4E0D\u7528\u7EE7\u7EED\u6784\u5EFA\u4E86</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> m <span class="token operator">=</span> pre<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">//\u5FC5\u5B9A\u627E\u5F97\u5230,\u8FD9\u4E2A\u4F4D\u7F6E\u5C31\u662F\u5DE6\u534A\u90E8\u5206\u7684\u957F\u5EA6\u4E86</span>
        <span class="token keyword">let</span> pos <span class="token operator">=</span> post
            <span class="token punctuation">.</span><span class="token function">iter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">position</span><span class="token punctuation">(</span><span class="token closure-params"><span class="token closure-punctuation punctuation">|</span>n<span class="token closure-punctuation punctuation">|</span></span> m <span class="token operator">==</span> <span class="token operator">*</span>n<span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">expect</span><span class="token punctuation">(</span><span class="token macro property">format!</span><span class="token punctuation">(</span><span class="token string">&quot;pre post \u6570\u636E\u4E0D\u4E00\u81F4,pre={:?},post={:?}&quot;</span><span class="token punctuation">,</span> pre<span class="token punctuation">,</span> post<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">as_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u6839\u636E\u957F\u5EA6\u5207\u5272\u524D\u5E8F</span>
        <span class="token keyword">let</span> <span class="token punctuation">(</span>pre_left_first<span class="token punctuation">,</span> pre_right<span class="token punctuation">)</span> <span class="token operator">=</span> pre<span class="token punctuation">.</span><span class="token function">split_at</span><span class="token punctuation">(</span>pos <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5DE6\u534A\u90E8\u5206\u591A\u5305\u542B\u4E00\u4E2A\u6839\u8282\u70B9</span>
        <span class="token keyword">let</span> <span class="token punctuation">(</span>_<span class="token punctuation">,</span> pre_left<span class="token punctuation">)</span> <span class="token operator">=</span> pre_left_first<span class="token punctuation">.</span><span class="token function">split_at</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5DE6\u8FB9\u81F3\u5C11\u5305\u542B\u4E24\u5143\u7D20</span>
                                                        <span class="token comment">//\u6839\u636E\u957F\u5EA6\u5207\u5272\u540E\u5E8F</span>
        <span class="token keyword">let</span> <span class="token punctuation">(</span>post_left<span class="token punctuation">,</span> post_right_and_last<span class="token punctuation">)</span> <span class="token operator">=</span> post<span class="token punctuation">.</span><span class="token function">split_at</span><span class="token punctuation">(</span>pos <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u53EA\u662F\u5DE6\u534A\u90E8\u5206</span>
        <span class="token keyword">let</span> <span class="token punctuation">(</span>post_right<span class="token punctuation">,</span> _<span class="token punctuation">)</span> <span class="token operator">=</span> post_right_and_last<span class="token punctuation">.</span><span class="token function">split_at</span><span class="token punctuation">(</span>post_right_and_last<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        r<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">construct_internal</span><span class="token punctuation">(</span>pre_left<span class="token punctuation">,</span> post_left<span class="token punctuation">)</span><span class="token punctuation">;</span>
        r<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">construct_internal</span><span class="token punctuation">(</span>pre_right<span class="token punctuation">,</span> post_right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">return</span> <span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token class-name">Rc</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">RefCell</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token attribute attr-name">#[cfg(test)]</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">test</span> <span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token attribute attr-name">#[test]</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">test_construct_tree</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> pre <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> post <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token macro property">println!</span><span class="token punctuation">(</span>
            <span class="token string">&quot;tree={}&quot;</span><span class="token punctuation">,</span>
            <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">construct_from_pre_post</span><span class="token punctuation">(</span>pre<span class="token punctuation">,</span> post<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><h2 id="\u4E00\u70B9\u611F\u609F" tabindex="-1">\u4E00\u70B9\u611F\u609F <a class="header-anchor" href="#\u4E00\u70B9\u611F\u609F" aria-hidden="true">#</a></h2><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u7684<a href="https://github.com/nkbai" target="_blank" rel="noopener noreferrer">github</a>,\u672C\u9879\u76EE\u6587\u7AE0\u6240\u6709\u4EE3\u7801\u90FD\u53EF\u4EE5\u627E\u5230.</p>`,18),o=[e];function c(l,u,r,k,i,m){return a(),s("div",null,o)}var f=n(t,[["render",c]]);export{d as __pageData,f as default};