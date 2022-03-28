import{_ as n,c as s,o as a,a as p}from"./app.e7435feb.js";const d='{"title":"337. \u6253\u5BB6\u52AB\u820D III","description":"","frontmatter":{"title":"337. \u6253\u5BB6\u52AB\u820D III","date":"2019-09-24T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["\u6280\u672F\u76F8\u5173"]},"headers":[{"level":2,"title":"\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-09-25)","slug":"\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-09-25"},{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":2,"title":"\u89E3\u9898\u601D\u8DEF","slug":"\u89E3\u9898\u601D\u8DEF"},{"level":2,"title":"\u89E3\u9898\u8FC7\u7A0B","slug":"\u89E3\u9898\u8FC7\u7A0B"},{"level":2,"title":"\u4E00\u70B9\u611F\u609F","slug":"\u4E00\u70B9\u611F\u609F"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"rust-leetcode/2019-09-25.md"}',t={},e=p(`<h2 id="\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-09-25" tabindex="-1">\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-09-25) <a class="header-anchor" href="#\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-09-25" aria-hidden="true">#</a></h2><p>\u575A\u6301\u6BCF\u5929\u4E00\u9053\u9898,\u5237\u9898\u5B66\u4E60Rust.</p><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u5728\u4E0A\u6B21\u6253\u52AB\u5B8C\u4E00\u6761\u8857\u9053\u4E4B\u540E\u548C\u4E00\u5708\u623F\u5C4B\u540E\uFF0C\u5C0F\u5077\u53C8\u53D1\u73B0\u4E86\u4E00\u4E2A\u65B0\u7684\u53EF\u884C\u7A83\u7684\u5730\u533A\u3002\u8FD9\u4E2A\u5730\u533A\u53EA\u6709\u4E00\u4E2A\u5165\u53E3\uFF0C\u6211\u4EEC\u79F0\u4E4B\u4E3A\u201C\u6839\u201D\u3002 \u9664\u4E86\u201C\u6839\u201D\u4E4B\u5916\uFF0C\u6BCF\u680B\u623F\u5B50\u6709\u4E14\u53EA\u6709\u4E00\u4E2A\u201C\u7236\u201C\u623F\u5B50\u4E0E\u4E4B\u76F8\u8FDE\u3002\u4E00\u756A\u4FA6\u5BDF\u4E4B\u540E\uFF0C\u806A\u660E\u7684\u5C0F\u5077\u610F\u8BC6\u5230\u201C\u8FD9\u4E2A\u5730\u65B9\u7684\u6240\u6709\u623F\u5C4B\u7684\u6392\u5217\u7C7B\u4F3C\u4E8E\u4E00\u68F5\u4E8C\u53C9\u6811\u201D\u3002 \u5982\u679C\u4E24\u4E2A\u76F4\u63A5\u76F8\u8FDE\u7684\u623F\u5B50\u5728\u540C\u4E00\u5929\u665A\u4E0A\u88AB\u6253\u52AB\uFF0C\u623F\u5C4B\u5C06\u81EA\u52A8\u62A5\u8B66\u3002</p><p>\u8BA1\u7B97\u5728\u4E0D\u89E6\u52A8\u8B66\u62A5\u7684\u60C5\u51B5\u4E0B\uFF0C\u5C0F\u5077\u4E00\u665A\u80FD\u591F\u76D7\u53D6\u7684\u6700\u9AD8\u91D1\u989D\u3002</p><p>\u793A\u4F8B 1:</p><div class="language-"><pre><code>\u8F93\u5165: [3,2,3,null,3,null,1]

     3
    / \\
   2   3
    \\   \\
     3   1

\u8F93\u51FA: 7
\u89E3\u91CA:\xA0\u5C0F\u5077\u4E00\u665A\u80FD\u591F\u76D7\u53D6\u7684\u6700\u9AD8\u91D1\u989D = 3 + 3 + 1 = 7.
\u793A\u4F8B 2:

\u8F93\u5165: [3,4,5,1,3,null,1]

3
    / \\
   4   5
  / \\   \\
 1   3   1
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u8F93\u51FA: 9 \u89E3\u91CA:\xA0\u5C0F\u5077\u4E00\u665A\u80FD\u591F\u76D7\u53D6\u7684\u6700\u9AD8\u91D1\u989D\xA0= 4 + 5 = 9.</p><p>\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09 \u94FE\u63A5\uFF1A<a href="https://leetcode-cn.com/problems/house-robber-iii" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/house-robber-iii</a> \u8457\u4F5C\u6743\u5F52\u9886\u6263\u7F51\u7EDC\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u5B98\u65B9\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p><h2 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1">\u89E3\u9898\u601D\u8DEF <a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a></h2><p>\u601D\u8DEF: \u904D\u5386\u6BCF\u4E2A\u8282\u70B9,\u90FD\u8FD4\u56DE\u4E24\u4E2A\u503C:</p><ol><li>\u7ECF\u8FC7\u81EA\u8EAB\u7684\u53EF\u80FD\u7684\u6700\u9AD8\u91D1\u989D</li><li>\u4E0D\u7ECF\u8FC7\u81EA\u8EAB\u7684\u53EF\u80FD\u7684\u6700\u9AD8\u91D1\u989D \u81EA\u5E95\u5411\u4E0A\u5F00\u59CB\u904D\u5386, \u5BF9\u4E8E\u5F53\u524D\u8282\u70B9:</li><li>\u5982\u679C\u6CA1\u6709\u5B69\u5B50\u8282\u70B9,\u90A3\u4E48\u7ECF\u8FC7\u81EA\u8EAB\u7684\u6700\u9AD8\u91D1\u989D\u5C31\u662F\u81EA\u8EAB0,\u4E0D\u7ECF\u8FC7\u7684\u540C\u6837\u4E5F\u662F0</li><li>\u5982\u679C\u6709\u5DE6\u53F3\u5B69\u5B50\u8282\u70B9,\u90A3\u4E48\u7ECF\u8FC7\u81EA\u8EAB\u7684\u6700\u9AD8\u91D1\u989D\u5C31\u662F\u81EA\u8EAB+ \u4E0D\u7ECF\u8FC7\u5DE6\u53F3\u5B50\u8282\u70B9\u4E4B\u548C, \u4E0D\u7ECF\u8FC7\u81EA\u8EAB\u7684\u6700\u9AD8\u91D1\u989D\u7A0D\u5FAE\u590D\u6742\u4E00\u70B9: \u56E0\u4E3A\u5DE6\u53F3\u5B50\u8282\u70B9\u7684\u8FD4\u56DE\u56DB\u4E2A\u503C\u53EF\u4EE5\u81EA\u7531\u7EC4\u5408,\u56E0\u6B64\u90FD\u9009\u6700\u5927\u7684\u5373\u53EF</li></ol><h2 id="\u89E3\u9898\u8FC7\u7A0B" tabindex="-1">\u89E3\u9898\u8FC7\u7A0B <a class="header-anchor" href="#\u89E3\u9898\u8FC7\u7A0B" aria-hidden="true">#</a></h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token class-name">TreeNode</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">RefCell</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cmp<span class="token punctuation">::</span></span>max<span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Rc</span><span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">rob</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token punctuation">(</span>rc<span class="token punctuation">,</span> ri<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">internal</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">max</span><span class="token punctuation">(</span>rc<span class="token punctuation">,</span> ri<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/*
    \u8FD4\u56DE\u503C:
    \u7B2C\u4E00\u4E2A: \u7ECF\u8FC7\u81EA\u8EAB\u7684\u6700\u5927\u91D1\u989D
    \u7B2C\u4E8C\u4E2A:\u4E0D\u7ECF\u8FC7\u81EA\u8EAB\u7684\u6700\u5927\u91D1\u989D
    */</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">internal</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token punctuation">(</span><span class="token keyword">i32</span><span class="token punctuation">,</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> root<span class="token punctuation">.</span><span class="token function">is_none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> r <span class="token operator">=</span> root<span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token punctuation">(</span>lc<span class="token punctuation">,</span> li<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">internal</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">borrow_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token punctuation">(</span>rc<span class="token punctuation">,</span> ri<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">internal</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">borrow_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> v <span class="token operator">=</span> r<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">;</span>
        <span class="token comment">//\u4E48\u7ECF\u8FC7\u81EA\u8EAB\u7684\u6700\u9AD8\u91D1\u989D\u5C31\u662F\u81EA\u8EAB+\u4E0D\u7ECF\u8FC7\u5DE6\u53F3\u5B50\u8282\u70B9\u4E4B\u548C,</span>
        <span class="token keyword">let</span> cc <span class="token operator">=</span> v <span class="token operator">+</span> li <span class="token operator">+</span> ri<span class="token punctuation">;</span>
        <span class="token comment">//\u4E0D\u7ECF\u8FC7\u81EA\u8EAB \u53EF\u80FD\u6027\u6BD4\u8F83\u591A,\u9009\u7ECF\u4E0D\u7ECF\u8FC7\u5DE6\u53F3\u5B50\u8282\u70B9\u7684\u90FD\u662F\u53EF\u4EE5\u7684</span>
        <span class="token keyword">let</span> ci <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>lc<span class="token punctuation">,</span> li<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">max</span><span class="token punctuation">(</span>rc<span class="token punctuation">,</span> ri<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;v={},cc={},ci={}&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">,</span> cc<span class="token punctuation">,</span> ci<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>cc<span class="token punctuation">,</span> ci<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token attribute attr-name">#[cfg(test)]</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">test</span> <span class="token punctuation">{</span>
    <span class="token attribute attr-name">#[warn(unused_imports)]</span>
    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span>build_tree<span class="token punctuation">;</span>
    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token attribute attr-name">#[test]</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">test_generate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token function">build_tree</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">rob</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token function">build_tree</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">rob</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token function">build_tree</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">rob</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><h2 id="\u4E00\u70B9\u611F\u609F" tabindex="-1">\u4E00\u70B9\u611F\u609F <a class="header-anchor" href="#\u4E00\u70B9\u611F\u609F" aria-hidden="true">#</a></h2><p>\u4E00\u5F00\u59CB\u8003\u8651\u4E0D\u591F\u5468\u5168,\u4E0D\u7ECF\u8FC7\u81EA\u8EAB\u7684\u8FD9\u79CD\u60C5\u51B5,\u76F4\u63A5\u9009\u4E86lc+rc, \u63D0\u4EA4\u4E86\u51E0\u6B21,\u53D1\u73B0\u4E86\u597D\u51E0\u4E2A\u4F8B\u5916,\u6700\u7EC8\u624D\u610F\u8BC6\u5230\u5E94\u8BE5\u662F: max(lc,li)+max(rc,ri) \u56E0\u4E3A\u8FD9\u4E24\u4E2A\u662F\u53EF\u4EE5\u81EA\u7531\u7EC4\u5408\u7684,\u53EA\u8981\u6700\u5927\u7684\u5373\u53EF.</p><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u7684<a href="https://github.com/nkbai" target="_blank" rel="noopener noreferrer">github</a>,\u672C\u9879\u76EE\u6587\u7AE0\u6240\u6709\u4EE3\u7801\u90FD\u53EF\u4EE5\u627E\u5230.</p>`,18),o=[e];function c(l,u,r,i,k,b){return a(),s("div",null,o)}var f=n(t,[["render",c]]);export{d as __pageData,f as default};
