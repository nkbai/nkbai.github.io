import{_ as n,c as s,o as a,a as p}from"./app.8cf0e725.js";const d='{"title":"865. \u5177\u6709\u6240\u6709\u6700\u6DF1\u7ED3\u70B9\u7684\u6700\u5C0F\u5B50\u6811-\u4E00\u904D\u904D\u5386\u89E3\u6CD5","description":"","frontmatter":{"title":"865. \u5177\u6709\u6240\u6709\u6700\u6DF1\u7ED3\u70B9\u7684\u6700\u5C0F\u5B50\u6811-\u4E00\u904D\u904D\u5386\u89E3\u6CD5","date":"2019-10-29T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["\u6280\u672F\u76F8\u5173"]},"headers":[{"level":2,"title":"\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-10-30)","slug":"\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-10-30"},{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":2,"title":"\u89E3\u9898\u601D\u8DEF","slug":"\u89E3\u9898\u601D\u8DEF"},{"level":2,"title":"\u89E3\u9898\u8FC7\u7A0B","slug":"\u89E3\u9898\u8FC7\u7A0B"},{"level":2,"title":"\u4E00\u70B9\u611F\u609F","slug":"\u4E00\u70B9\u611F\u609F"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"rust-leetcode/2019-10-30.md"}',t={},e=p(`<h2 id="\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-10-30" tabindex="-1">\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-10-30) <a class="header-anchor" href="#\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-10-30" aria-hidden="true">#</a></h2><p>\u575A\u6301\u6BCF\u5929\u4E00\u9053\u9898,\u5237\u9898\u5B66\u4E60Rust.</p><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u7ED9\u5B9A\u4E00\u4E2A\u6839\u4E3A\xA0root\xA0\u7684\u4E8C\u53C9\u6811\uFF0C\u6BCF\u4E2A\u7ED3\u70B9\u7684\u6DF1\u5EA6\u662F\u5B83\u5230\u6839\u7684\u6700\u77ED\u8DDD\u79BB\u3002</p><p>\u5982\u679C\u4E00\u4E2A\u7ED3\u70B9\u5728\u6574\u4E2A\u6811\u7684\u4EFB\u610F\u7ED3\u70B9\u4E4B\u95F4\u5177\u6709\u6700\u5927\u7684\u6DF1\u5EA6\uFF0C\u5219\u8BE5\u7ED3\u70B9\u662F\u6700\u6DF1\u7684\u3002</p><p>\u4E00\u4E2A\u7ED3\u70B9\u7684\u5B50\u6811\u662F\u8BE5\u7ED3\u70B9\u52A0\u4E0A\u5B83\u7684\u6240\u6709\u540E\u4EE3\u7684\u96C6\u5408\u3002</p><p>\u8FD4\u56DE\u80FD\u6EE1\u8DB3\u201C\u4EE5\u8BE5\u7ED3\u70B9\u4E3A\u6839\u7684\u5B50\u6811\u4E2D\u5305\u542B\u6240\u6709\u6700\u6DF1\u7684\u7ED3\u70B9\u201D\u8FD9\u4E00\u6761\u4EF6\u7684\u5177\u6709\u6700\u5927\u6DF1\u5EA6\u7684\u7ED3\u70B9\u3002</p><p>\u793A\u4F8B\uFF1A</p><p>\u8F93\u5165\uFF1A[3,5,1,6,2,0,8,null,null,7,4] \u8F93\u51FA\uFF1A[2,7,4] \u89E3\u91CA\uFF1A <img alt="" data-src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/01/sketch1.png" loading="lazy" class="lazy"> \u6211\u4EEC\u8FD4\u56DE\u503C\u4E3A 2 \u7684\u7ED3\u70B9\uFF0C\u5728\u56FE\u4E2D\u7528\u9EC4\u8272\u6807\u8BB0\u3002 \u5728\u56FE\u4E2D\u7528\u84DD\u8272\u6807\u8BB0\u7684\u662F\u6811\u7684\u6700\u6DF1\u7684\u7ED3\u70B9\u3002 \u8F93\u5165 &quot;[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]&quot; \u662F\u5BF9\u7ED9\u5B9A\u7684\u6811\u7684\u5E8F\u5217\u5316\u8868\u8FF0\u3002 \u8F93\u51FA &quot;[2, 7, 4]&quot; \u662F\u5BF9\u6839\u7ED3\u70B9\u7684\u503C\u4E3A 2 \u7684\u5B50\u6811\u7684\u5E8F\u5217\u5316\u8868\u8FF0\u3002 \u8F93\u5165\u548C\u8F93\u51FA\u90FD\u5177\u6709 TreeNode \u7C7B\u578B\u3002</p><p>\u63D0\u793A\uFF1A</p><p>\u6811\u4E2D\u7ED3\u70B9\u7684\u6570\u91CF\u4ECB\u4E8E\xA01 \u548C\xA0500 \u4E4B\u95F4\u3002 \u6BCF\u4E2A\u7ED3\u70B9\u7684\u503C\u90FD\u662F\u72EC\u4E00\u65E0\u4E8C\u7684\u3002</p><p>\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09 \u94FE\u63A5\uFF1A<a href="https://leetcode-cn.com/problems/smallest-subtree-with-all-the-deepest-nodes" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/smallest-subtree-with-all-the-deepest-nodes</a> \u8457\u4F5C\u6743\u5F52\u9886\u6263\u7F51\u7EDC\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u5B98\u65B9\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p><h2 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1">\u89E3\u9898\u601D\u8DEF <a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a></h2><pre><code>\u9488\u5BF9\u6BCF\u4E2A\u7ED3\u70B9\u8FD4\u56DE\u4E24\u4E2A\u53C2\u6570 1.\u5F53\u524D\u5B50\u6811\u7684\u6700\u6DF1\u6DF1\u5EA6 2. \u5F53\u524D\u5305\u542B\u6240\u6709\u6700\u6DF1\u7ED3\u70B9\u7684\u90A3\u9897\u6700\u5C0F\u5B50\u6811
</code></pre><p>\u521D\u59CB:</p><ol><li>\u6BCF\u4E2A\u53F6\u8282\u70B9\u8FD4\u56DE\u7684\u90FD\u662F\u4ED6\u7684\u6DF1\u5EA6\u4EE5\u53CA\u5B83\u81EA\u8EAB</li><li>\u5982\u679C\u53F6\u8282\u70B9\u7684\u7236\u8282\u70B9\u662F\u5DE6\u53F3\u5BF9\u79F0\u7684,\u90A3\u4E48\u8FD4\u56DE\u7236\u8282\u70B9\u4EE5\u53CA\u53F6\u8282\u70B9\u7684\u6DF1\u5EA6</li><li>\u5982\u679C\u53F6\u8282\u70B9\u5DE6\u53F3\u4E0D\u5BF9\u79F0,\u8FD4\u56DE\u53F6\u8282\u70B9\u4EE5\u53CA\u53F6\u8282\u70B9\u7684\u6DF1\u5EA6 \u8FD9\u6837\u5C31\u514D\u4E8E\u5BF9\u4E8E\u540C\u4E00\u4E2A\u8282\u70B9\u7684\u591A\u6B21\u904D\u5386.</li></ol><h2 id="\u89E3\u9898\u8FC7\u7A0B" tabindex="-1">\u89E3\u9898\u8FC7\u7A0B <a class="header-anchor" href="#\u89E3\u9898\u8FC7\u7A0B" aria-hidden="true">#</a></h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token class-name">TreeNode</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">RefCell</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cmp<span class="token punctuation">::</span></span>max<span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Rc</span><span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
       <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">subtree_with_all_deepest</span><span class="token punctuation">(</span>
        root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/*
    \u904D\u5386\u4E00\u904D\u5C31\u80FD\u5F97\u5230
    \u601D\u8DEF:
    \u9488\u5BF9\u6BCF\u4E2A\u7ED3\u70B9\u8FD4\u56DE\u4E24\u4E2A\u53C2\u6570 1.\u5F53\u524D\u5B50\u6811\u7684\u6700\u6DF1\u6DF1\u5EA6 2. \u5F53\u524D\u5305\u542B\u6240\u6709\u6700\u6DF1\u7ED3\u70B9\u7684\u90A3\u9897\u6700\u5C0F\u5B50\u6811
    \u521D\u59CB:
    1. \u6BCF\u4E2A\u53F6\u8282\u70B9\u8FD4\u56DE\u7684\u90FD\u662F\u4ED6\u7684\u6DF1\u5EA6\u4EE5\u53CA\u5B83\u81EA\u8EAB
    2. \u5982\u679C\u53F6\u8282\u70B9\u7684\u7236\u8282\u70B9\u662F\u5DE6\u53F3\u5BF9\u79F0\u7684,\u90A3\u4E48\u8FD4\u56DE\u7236\u8282\u70B9\u4EE5\u53CA\u53F6\u8282\u70B9\u7684\u6DF1\u5EA6
    3. \u5982\u679C\u53F6\u8282\u70B9\u5DE6\u53F3\u4E0D\u5BF9\u79F0,\u8FD4\u56DE\u53F6\u8282\u70B9\u4EE5\u53CA\u53F6\u8282\u70B9\u7684\u6DF1\u5EA6

    */</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> d<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token punctuation">(</span><span class="token keyword">i32</span><span class="token punctuation">,</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> root<span class="token punctuation">.</span><span class="token function">is_none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token class-name">None</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> r <span class="token operator">=</span> root<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> l <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">dfs</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> d <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">dfs</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> d <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> l<span class="token number">.0</span> <span class="token operator">&gt;</span> r<span class="token number">.0</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> l<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> r<span class="token number">.0</span> <span class="token operator">&gt;</span> l<span class="token number">.0</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> r<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">//max\u4E3B\u8981\u662F\u5904\u7406\u5DE6\u53F3\u5B50\u6811\u90FD\u4E3A\u7A7A,\u90FD\u662F-1\u7684\u60C5\u5F62</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token function">max</span><span class="token punctuation">(</span>l<span class="token number">.0</span><span class="token punctuation">,</span> d<span class="token punctuation">)</span><span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u6700\u5927\u6DF1\u5EA6\u5305\u542B\u6240\u6709</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token attribute attr-name">#[cfg(test)]</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">test</span> <span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token attribute attr-name">#[test]</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">test_find_duplcates_tree</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token function">build_tree_ignore_parent</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> null<span class="token punctuation">,</span> null<span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">subtree_with_all_deepest</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><h2 id="\u4E00\u70B9\u611F\u609F" tabindex="-1">\u4E00\u70B9\u611F\u609F <a class="header-anchor" href="#\u4E00\u70B9\u611F\u609F" aria-hidden="true">#</a></h2><p>\u5C3D\u91CF\u53BB\u6389\u91CD\u590D\u7684\u52A8\u4F5C\u624D\u80FD\u9AD8\u6548</p><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u7684<a href="https://github.com/nkbai/rust-leetcode" target="_blank" rel="noopener noreferrer">github</a>,\u672C\u9879\u76EE\u6587\u7AE0\u6240\u6709\u4EE3\u7801\u90FD\u53EF\u4EE5\u627E\u5230.</p>`,22),o=[e];function c(l,u,r,k,i,b){return a(),s("div",null,o)}var f=n(t,[["render",c]]);export{d as __pageData,f as default};