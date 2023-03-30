import{_ as n,c as s,o as a,a as p}from"./app.3dd4ae37.js";const d='{"title":"99. \u6062\u590D\u4E8C\u53C9\u641C\u7D22\u6811","description":"","frontmatter":{"title":"99. \u6062\u590D\u4E8C\u53C9\u641C\u7D22\u6811","date":"2019-09-01T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["\u6280\u672F\u76F8\u5173"]},"headers":[{"level":2,"title":"\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-09-02)","slug":"\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-09-02"},{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":2,"title":"\u89E3\u9898\u601D\u8DEF","slug":"\u89E3\u9898\u601D\u8DEF"},{"level":2,"title":"\u89E3\u9898\u8FC7\u7A0B","slug":"\u89E3\u9898\u8FC7\u7A0B"},{"level":2,"title":"\u4E00\u70B9\u611F\u609F","slug":"\u4E00\u70B9\u611F\u609F"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"rust-leetcode/2019-09-02.md"}',t={},e=p(`<h2 id="\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-09-02" tabindex="-1">\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-09-02) <a class="header-anchor" href="#\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-09-02" aria-hidden="true">#</a></h2><p>\u575A\u6301\u6BCF\u5929\u4E00\u9053\u9898,\u5237\u9898\u5B66\u4E60Rust.</p><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u4E8C\u53C9\u641C\u7D22\u6811\u4E2D\u7684\u4E24\u4E2A\u8282\u70B9\u88AB\u9519\u8BEF\u5730\u4EA4\u6362\u3002</p><p>\u8BF7\u5728\u4E0D\u6539\u53D8\u5176\u7ED3\u6784\u7684\u60C5\u51B5\u4E0B\uFF0C\u6062\u590D\u8FD9\u68F5\u6811\u3002</p><p>\u793A\u4F8B\xA01:</p><div class="language-"><pre><code>\u8F93\u5165: [1,3,null,null,2]

 1
/
3
  \\
  2

\u8F93\u51FA: [3,1,null,null,2]

 3
/
1
 \\
  2
\u793A\u4F8B\xA02:

\u8F93\u5165: [3,1,4,null,null,2]

  3
 / \\
1   4
/
2

\u8F93\u51FA: [2,1,4,null,null,3]

  2
 / \\
1   4
/
3
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>\u8FDB\u9636:</p><p>\u4F7F\u7528 O(n) \u7A7A\u95F4\u590D\u6742\u5EA6\u7684\u89E3\u6CD5\u5F88\u5BB9\u6613\u5B9E\u73B0\u3002 \u4F60\u80FD\u60F3\u51FA\u4E00\u4E2A\u53EA\u4F7F\u7528\u5E38\u6570\u7A7A\u95F4\u7684\u89E3\u51B3\u65B9\u6848\u5417\uFF1F</p><p>\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09 \u94FE\u63A5\uFF1A<a href="https://leetcode-cn.com/problems/recover-binary-search-tree" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/recover-binary-search-tree</a> \u8457\u4F5C\u6743\u5F52\u9886\u6263\u7F51\u7EDC\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u5B98\u65B9\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p><h2 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1">\u89E3\u9898\u601D\u8DEF <a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a></h2><p>\u91C7\u7528\u4E2D\u5E8F\u904D\u5386,\u9898\u76EE\u4E2D\u660E\u786E\u53EA\u4EA4\u6362\u4E86\u4E24\u4E2A\u8282\u70B9,\u591A\u6B21\u4EA4\u6362\u7684\u60C5\u51B5\u4E0D\u8003\u8651. \u90A3\u4E48\u65E0\u5E8F\u90E8\u5206\u4E00\u5B9A\u662F\u67D0\u68F5\u5B50\u6811\u4E2D\u5DE6\u5B50\u6811\u4E2D\u67D0\u4E00\u4E2A\u8282\u70B9(\u5305\u542Broot)\u5E94\u8BE5\u653E\u5728\u53F3\u5B50\u6811\u4E2D.</p><ol><li>\u7528preNode\u8868\u793A\u904D\u5386\u5230\u5F53\u524D\u8282\u70B9\u65F6\u7684\u524D\u4E00\u4E2A\u8282\u70B9,\u6B63\u5E38\u60C5\u51B5\u4E0B,\u4ED6\u5E94\u8BE5\u5C0F\u4E8E\u5F53\u524D\u8282\u70B9</li><li>\u5982\u679C\u904D\u5386\u5230preNode\u5927\u4E8E\u7B49\u4E8E\u81EA\u8EAB\u7684\u60C5\u51B5,\u8BF4\u660EpreNode\u9519\u4E86,\u8FD9\u662F\u7B2C\u4E00\u4E2A\u9519\u8BEF\u8282\u70B9</li><li>\u5728\u627E\u5230\u7B2C\u4E00\u4E2A\u9519\u8BEF\u8282\u70B9\u7684\u60C5\u51B5\u4E0B,\u5982\u679C\u8FD8\u51FA\u73B0preNode\u5927\u4E8E\u7B49\u4E8E\u81EA\u8EAB\u7684\u60C5\u51B5,\u8BF4\u660E\u8FD9\u662F\u7B2C\u4E8C\u4E2A\u9519\u8BEF\u8282\u70B9 \u6EE1\u8DB3\u6761\u4EF6\u4E09\u7684\u53EF\u80FD\u4F1A\u51FA\u73B0\u4E24\u6B21\u4EE5\u4E0A, \u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u60C5\u51B5: \u5931\u5E8F\u60C5\u51B5, \u7236\u8282\u70B9\u548C\u53F3\u5B50\u8282\u70B9\u76F4\u63A5\u8C03\u6362 \u4E24\u6B21\u7684\u60C5\u51B5: \u5176\u4ED6\u8C03\u6362</li></ol><h2 id="\u89E3\u9898\u8FC7\u7A0B" tabindex="-1">\u89E3\u9898\u8FC7\u7A0B <a class="header-anchor" href="#\u89E3\u9898\u8FC7\u7A0B" aria-hidden="true">#</a></h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token class-name">TreeNode</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">rand<span class="token punctuation">::</span>distributions<span class="token punctuation">::</span>uniform<span class="token punctuation">::</span></span><span class="token class-name">SampleBorrow</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">RefCell</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Rc</span><span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">struct</span> <span class="token type-definition class-name">arg</span> <span class="token punctuation">{</span>
    first_node<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    second_node<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    pre_node<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    pre_node_value<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u6CA1\u6709self,\u53EA\u597D\u7528\u8FD9\u79CD\u65B9\u5F0F\u6765\u4F20\u53C2\u6570\u4E86,\u6BD4\u8F83\u4E11\u964B</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">recover_internal</span><span class="token punctuation">(</span>a<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> arg<span class="token punctuation">,</span> root<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> root<span class="token punctuation">.</span><span class="token function">is_none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> r <span class="token operator">=</span> root<span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> v <span class="token operator">=</span> r<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
        <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">recover_internal</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> r<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> a<span class="token punctuation">.</span>first_node<span class="token punctuation">.</span><span class="token function">is_none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span>pre_node<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span>pre_node_value <span class="token operator">&gt;=</span> v <span class="token punctuation">{</span>
            a<span class="token punctuation">.</span>first_node <span class="token operator">=</span> a<span class="token punctuation">.</span>pre_node<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> a<span class="token punctuation">.</span>first_node<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span>pre_node_value <span class="token operator">&gt;=</span> v <span class="token punctuation">{</span>
            a<span class="token punctuation">.</span>second_node <span class="token operator">=</span> root<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        a<span class="token punctuation">.</span>pre_node <span class="token operator">=</span> root<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        a<span class="token punctuation">.</span>pre_node_value <span class="token operator">=</span> r<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
        <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">recover_internal</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> r<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">recover_tree</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> a <span class="token operator">=</span> arg <span class="token punctuation">{</span>
            first_node<span class="token punctuation">:</span> <span class="token class-name">None</span><span class="token punctuation">,</span>
            second_node<span class="token punctuation">:</span> <span class="token class-name">None</span><span class="token punctuation">,</span>
            pre_node<span class="token punctuation">:</span> <span class="token class-name">None</span><span class="token punctuation">,</span>
            pre_node_value<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">recover_internal</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> a<span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> t <span class="token operator">=</span> a<span class="token punctuation">.</span>first_node<span class="token punctuation">.</span><span class="token function">as_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">;</span>
        a<span class="token punctuation">.</span>first_node<span class="token punctuation">.</span><span class="token function">as_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val <span class="token operator">=</span>
            a<span class="token punctuation">.</span>second_node<span class="token punctuation">.</span><span class="token function">as_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">;</span>
        a<span class="token punctuation">.</span>second_node<span class="token punctuation">.</span><span class="token function">as_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val <span class="token operator">=</span> t<span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token attribute attr-name">#[cfg(test)]</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">test</span> <span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span>build_tree<span class="token punctuation">;</span>
    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token attribute attr-name">#[test]</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">test_num_trees</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> r <span class="token operator">=</span> <span class="token function">build_tree</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">recover_tree</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;r={:?}&quot;</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> r <span class="token operator">=</span> <span class="token function">build_tree</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">recover_tree</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;r={:?}&quot;</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div><h2 id="\u4E00\u70B9\u611F\u609F" tabindex="-1">\u4E00\u70B9\u611F\u609F <a class="header-anchor" href="#\u4E00\u70B9\u611F\u609F" aria-hidden="true">#</a></h2><p>\u4E00\u5F00\u59CBarg\u91CC\u9762\u6CA1\u6709\u4FDD\u5B58pre_node_value,\u53EA\u4FDD\u5B58\u4E86pre_node,\u8FD9\u7F16\u8BD1\u7684\u8FC7\u53BB \u4F46\u662F\u4F1A\u9020\u6210RefCell\u7684borrow_mut\u548Cborrow\u540C\u65F6\u5B58\u5728,\u4ECE\u800C\u51FA\u9519.</p><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u7684<a href="https://github.com/nkbai" target="_blank" rel="noopener noreferrer">github</a>,\u672C\u9879\u76EE\u6587\u7AE0\u6240\u6709\u4EE3\u7801\u90FD\u53EF\u4EE5\u627E\u5230.</p>`,19),o=[e];function c(l,u,r,i,k,b){return a(),s("div",null,o)}var _=n(t,[["render",c]]);export{d as __pageData,_ as default};