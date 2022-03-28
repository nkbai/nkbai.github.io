import{_ as n,c as s,o as a,a as p}from"./app.e7435feb.js";const d='{"title":"98. \u9A8C\u8BC1\u4E8C\u53C9\u641C\u7D22\u6811","description":"","frontmatter":{"title":"98. \u9A8C\u8BC1\u4E8C\u53C9\u641C\u7D22\u6811","date":"2019-06-17T03:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["\u6280\u672F\u76F8\u5173"]},"headers":[{"level":2,"title":"\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-06-17)","slug":"\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-06-17"},{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":2,"title":"\u89E3\u9898\u8FC7\u7A0B","slug":"\u89E3\u9898\u8FC7\u7A0B"},{"level":2,"title":"\u4E00\u70B9\u611F\u609F","slug":"\u4E00\u70B9\u611F\u609F"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"rust-leetcode/2019-06-17.md"}',t={},e=p(`<h2 id="\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-06-17" tabindex="-1">\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-06-17) <a class="header-anchor" href="#\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-06-17" aria-hidden="true">#</a></h2><p>\u575A\u6301\u6BCF\u5929\u4E00\u9053\u9898,\u5237\u9898\u5B66\u4E60Rust.</p><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p><a href="https://leetcode-cn.com/problems/validate-binary-search-tree/" target="_blank" rel="noopener noreferrer">\u9A8C\u8BC1\u4E8C\u53C9\u641C\u7D22\u6811</a> \u7ED9\u5B9A\u4E00\u4E2A\u4E8C\u53C9\u6811\uFF0C\u5224\u65AD\u5176\u662F\u5426\u662F\u4E00\u4E2A\u6709\u6548\u7684\u4E8C\u53C9\u641C\u7D22\u6811\u3002</p><p>\u5047\u8BBE\u4E00\u4E2A\u4E8C\u53C9\u641C\u7D22\u6811\u5177\u6709\u5982\u4E0B\u7279\u5F81\uFF1A</p><p>\u8282\u70B9\u7684\u5DE6\u5B50\u6811\u53EA\u5305\u542B\u5C0F\u4E8E\u5F53\u524D\u8282\u70B9\u7684\u6570\u3002 \u8282\u70B9\u7684\u53F3\u5B50\u6811\u53EA\u5305\u542B\u5927\u4E8E\u5F53\u524D\u8282\u70B9\u7684\u6570\u3002 \u6240\u6709\u5DE6\u5B50\u6811\u548C\u53F3\u5B50\u6811\u81EA\u8EAB\u5FC5\u987B\u4E5F\u662F\u4E8C\u53C9\u641C\u7D22\u6811\u3002</p><div class="language-"><pre><code>\u793A\u4F8B\xA01:

\u8F93\u5165:
    2
   / \\
  1   3
\u8F93\u51FA: true
\u793A\u4F8B\xA02:

\u8F93\u5165:
    5
   / \\
  1   4
/ \\
3   6
\u8F93\u51FA: false
\u89E3\u91CA: \u8F93\u5165\u4E3A: [5,1,4,null,null,3,6]\u3002
\u6839\u8282\u70B9\u7684\u503C\u4E3A 5 \uFF0C\u4F46\u662F\u5176\u53F3\u5B50\u8282\u70B9\u503C\u4E3A 4 \u3002
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09 \u94FE\u63A5\uFF1A<a href="https://leetcode-cn.com/problems/validate-binary-search-tree" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/validate-binary-search-tree</a> \u8457\u4F5C\u6743\u5F52\u9886\u6263\u7F51\u7EDC\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u5B98\u65B9\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p><h2 id="\u89E3\u9898\u8FC7\u7A0B" tabindex="-1">\u89E3\u9898\u8FC7\u7A0B <a class="header-anchor" href="#\u89E3\u9898\u8FC7\u7A0B" aria-hidden="true">#</a></h2><p>\u601D\u8DEF: \u4E8C\u53C9\u641C\u7D22\u6811\u7684\u7279\u70B9\u662F:\u5DE6\u5B50\u6811\u90FD\u5C0F\u4E8E\u81EA\u5DF1,\u53F3\u5B50\u6811\u90FD\u5927\u4E8E\u81EA\u5DF1 \u8FD9\u6837\u5C31\u53EF\u4EE5\u542C\u8FC7\u7ED9\u6BCF\u4E2A\u5B50\u6811\u4E00\u4E2A\u6700\u5927\u503C\u6700\u5C0F\u503C\u6765\u5224\u65AD\u5176\u662F\u5426\u662Fbst\u4E86</p><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token class-name">TreeNode</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">core<span class="token punctuation">::</span>borrow<span class="token punctuation">::</span></span><span class="token class-name">Borrow</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">RefCell</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Rc</span><span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">is_valid_bst</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">bool</span> <span class="token punctuation">{</span>
        <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">is_valid_bst_internal</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token class-name">None</span><span class="token punctuation">,</span> <span class="token class-name">None</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//\u56E0\u4E3A\u51FA\u73B0\u8FD9\u79CD\u60C5\u51B5[2147483647,2147483647],\u6240\u4EE5\u8FB9\u754C\u5FC5\u987B\u5B9A\u4E49\u6210option</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">is_valid_bst_internal</span><span class="token punctuation">(</span>
        root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
        low<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
        upper<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">bool</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> root<span class="token punctuation">.</span><span class="token function">is_none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> r <span class="token operator">=</span> root<span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u9898\u76EE\u6076\u5FC3\u4EBA\u7684\u5730\u65B9\u5C31\u5728\u4E8E\u5361\u8FB9\u754C</span>
        <span class="token keyword">match</span> <span class="token punctuation">(</span>low<span class="token punctuation">,</span> upper<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token punctuation">(</span><span class="token class-name">None</span><span class="token punctuation">,</span> <span class="token class-name">None</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">(</span><span class="token class-name">None</span><span class="token punctuation">,</span> <span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token keyword">ref</span> x<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> r<span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val <span class="token operator">&gt;=</span> <span class="token operator">*</span>x <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token punctuation">(</span><span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token keyword">ref</span> x<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">None</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> r<span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val <span class="token operator">&lt;=</span> <span class="token operator">*</span>x <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token punctuation">(</span><span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token keyword">ref</span> l<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token keyword">ref</span> u<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token operator">!</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val <span class="token operator">&gt;</span> <span class="token operator">*</span>l <span class="token operator">&amp;&amp;</span> r<span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val <span class="token operator">&lt;</span> <span class="token operator">*</span>u<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token operator">!</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">is_valid_bst_internal</span><span class="token punctuation">(</span>
            r<span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            low<span class="token punctuation">,</span>
            <span class="token class-name">Some</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token operator">!</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">is_valid_bst_internal</span><span class="token punctuation">(</span>
            r<span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">Some</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">,</span>
            upper<span class="token punctuation">,</span>
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token attribute attr-name">#[cfg(test)]</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">test</span> <span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span>build_tree<span class="token punctuation">;</span>
    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token attribute attr-name">#[test]</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">test_is_valid_bst</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token function">build_tree</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">is_valid_bst</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token function">build_tree</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">is_valid_bst</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token function">build_tree</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">2147483647</span><span class="token punctuation">,</span> <span class="token number">2147483647</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">is_valid_bst</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br></div></div><h2 id="\u4E00\u70B9\u611F\u609F" tabindex="-1">\u4E00\u70B9\u611F\u609F <a class="header-anchor" href="#\u4E00\u70B9\u611F\u609F" aria-hidden="true">#</a></h2><p>\u8FD9\u4E2A\u9898\u76EE\u672C\u6765\u5F88\u7B80\u5355,\u4F46\u662F\u56E0\u4E3A\u9898\u5E93\u91CC\u603B\u662F\u5728\u5361\u8FB9\u754C,\u5BFC\u81F4</p><div class="language-rust line-numbers-mode"><pre><code> <span class="token keyword">fn</span> <span class="token function-definition function">is_valid_bst_internal</span><span class="token punctuation">(</span>
        root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
        low<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span>
        upper<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">bool</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8FD9\u79CD\u539F\u578B\u6839\u672C\u4E0D\u53EF\u6B63\u786E,\u56E0\u6B64\u4E0D\u5F97\u5DF2\u628A\u539F\u578B\u6539\u4E3A:</p><div class="language-rust line-numbers-mode"><pre><code> <span class="token keyword">fn</span> <span class="token function-definition function">is_valid_bst_internal</span><span class="token punctuation">(</span>
        root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
        low<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
        upper<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">bool</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4E5F\u5C31\u662F\u8BF4\u8FB9\u754C\u4E0D\u53EF\u80FD\u7528std::i32::MIN,MAX\u6765\u68C0\u6D4B,\u53EA\u80FD\u901A\u8FC7\u4E13\u7528\u7684\u6807\u5FD7</p><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u7684<a href="https://github.com/nkbai" target="_blank" rel="noopener noreferrer">github</a>,\u672C\u9879\u76EE\u6587\u7AE0\u6240\u6709\u4EE3\u7801\u90FD\u53EF\u4EE5\u627E\u5230.</p>`,19),o=[e];function c(l,u,r,i,k,b){return a(),s("div",null,o)}var f=n(t,[["render",c]]);export{d as __pageData,f as default};
