import{_ as n,c as s,o as a,a as t}from"./app.e7435feb.js";const m='{"title":"655. \u8F93\u51FA\u4E8C\u53C9\u6811","description":"","frontmatter":{"title":"655. \u8F93\u51FA\u4E8C\u53C9\u6811","date":"2019-10-16T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["\u6280\u672F\u76F8\u5173"]},"headers":[{"level":2,"title":"\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-10-17)","slug":"\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-10-17"},{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":2,"title":"\u89E3\u9898\u601D\u8DEF","slug":"\u89E3\u9898\u601D\u8DEF"},{"level":2,"title":"\u89E3\u9898\u8FC7\u7A0B","slug":"\u89E3\u9898\u8FC7\u7A0B"},{"level":2,"title":"\u4E00\u70B9\u611F\u609F","slug":"\u4E00\u70B9\u611F\u609F"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"rust-leetcode/2019-10-17.md"}',p={},o=t(`<h2 id="\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-10-17" tabindex="-1">\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-10-17) <a class="header-anchor" href="#\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-10-17" aria-hidden="true">#</a></h2><p>\u575A\u6301\u6BCF\u5929\u4E00\u9053\u9898,\u5237\u9898\u5B66\u4E60Rust.</p><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u5728\u4E00\u4E2A m*n \u7684\u4E8C\u7EF4\u5B57\u7B26\u4E32\u6570\u7EC4\u4E2D\u8F93\u51FA\u4E8C\u53C9\u6811\uFF0C\u5E76\u9075\u5B88\u4EE5\u4E0B\u89C4\u5219\uFF1A</p><p>\u884C\u6570\xA0m\xA0\u5E94\u5F53\u7B49\u4E8E\u7ED9\u5B9A\u4E8C\u53C9\u6811\u7684\u9AD8\u5EA6\u3002 \u5217\u6570\xA0n\xA0\u5E94\u5F53\u603B\u662F\u5947\u6570\u3002 \u6839\u8282\u70B9\u7684\u503C\uFF08\u4EE5\u5B57\u7B26\u4E32\u683C\u5F0F\u7ED9\u51FA\uFF09\u5E94\u5F53\u653E\u5728\u53EF\u653E\u7F6E\u7684\u7B2C\u4E00\u884C\u6B63\u4E2D\u95F4\u3002\u6839\u8282\u70B9\u6240\u5728\u7684\u884C\u4E0E\u5217\u4F1A\u5C06\u5269\u4F59\u7A7A\u95F4\u5212\u5206\u4E3A\u4E24\u90E8\u5206\uFF08\u5DE6\u4E0B\u90E8\u5206\u548C\u53F3\u4E0B\u90E8\u5206\uFF09\u3002\u4F60\u5E94\u8BE5\u5C06\u5DE6\u5B50\u6811\u8F93\u51FA\u5728\u5DE6\u4E0B\u90E8\u5206\uFF0C\u53F3\u5B50\u6811\u8F93\u51FA\u5728\u53F3\u4E0B\u90E8\u5206\u3002\u5DE6\u4E0B\u548C\u53F3\u4E0B\u90E8\u5206\u5E94\u5F53\u6709\u76F8\u540C\u7684\u5927\u5C0F\u3002\u5373\u4F7F\u4E00\u4E2A\u5B50\u6811\u4E3A\u7A7A\u800C\u53E6\u4E00\u4E2A\u975E\u7A7A\uFF0C\u4F60\u4E0D\u9700\u8981\u4E3A\u7A7A\u7684\u5B50\u6811\u8F93\u51FA\u4EFB\u4F55\u4E1C\u897F\uFF0C\u4F46\u4ECD\u9700\u8981\u4E3A\u53E6\u4E00\u4E2A\u5B50\u6811\u7559\u51FA\u8DB3\u591F\u7684\u7A7A\u95F4\u3002\u7136\u800C\uFF0C\u5982\u679C\u4E24\u4E2A\u5B50\u6811\u90FD\u4E3A\u7A7A\u5219\u4E0D\u9700\u8981\u4E3A\u5B83\u4EEC\u7559\u51FA\u4EFB\u4F55\u7A7A\u95F4\u3002 \u6BCF\u4E2A\u672A\u4F7F\u7528\u7684\u7A7A\u95F4\u5E94\u5305\u542B\u4E00\u4E2A\u7A7A\u7684\u5B57\u7B26\u4E32&quot;&quot;\u3002 \u4F7F\u7528\u76F8\u540C\u7684\u89C4\u5219\u8F93\u51FA\u5B50\u6811\u3002 \u793A\u4F8B 1:</p><div class="language-"><pre><code>\u8F93\u5165:
     1
    /
   2
\u8F93\u51FA:
[[&quot;&quot;, &quot;1&quot;, &quot;&quot;],
 [&quot;2&quot;, &quot;&quot;, &quot;&quot;]]
\u793A\u4F8B 2:

\u8F93\u5165:
     1
    / \\
   2   3
    \\
     4
\u8F93\u51FA:
[[&quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;1&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;],
 [&quot;&quot;, &quot;2&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;3&quot;, &quot;&quot;],
 [&quot;&quot;, &quot;&quot;, &quot;4&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;]]
\u793A\u4F8B 3:

\u8F93\u5165:
      1
     / \\
    2   5
   /
  3
 /
4
\u8F93\u51FA:
[[&quot;&quot;,  &quot;&quot;,  &quot;&quot;, &quot;&quot;,  &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;1&quot;, &quot;&quot;,  &quot;&quot;,  &quot;&quot;,  &quot;&quot;,  &quot;&quot;, &quot;&quot;, &quot;&quot;]
 [&quot;&quot;,  &quot;&quot;,  &quot;&quot;, &quot;2&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;,  &quot;&quot;,  &quot;&quot;,  &quot;&quot;,  &quot;5&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;]
 [&quot;&quot;,  &quot;3&quot;, &quot;&quot;, &quot;&quot;,  &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;,  &quot;&quot;,  &quot;&quot;,  &quot;&quot;,  &quot;&quot;,  &quot;&quot;, &quot;&quot;, &quot;&quot;]
 [&quot;4&quot;, &quot;&quot;,  &quot;&quot;, &quot;&quot;,  &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;,  &quot;&quot;,  &quot;&quot;,  &quot;&quot;,  &quot;&quot;,  &quot;&quot;, &quot;&quot;, &quot;&quot;]]
\u6CE8\u610F: \u4E8C\u53C9\u6811\u7684\u9AD8\u5EA6\u5728\u8303\u56F4 [1, 10] \u4E2D\u3002
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1">\u89E3\u9898\u601D\u8DEF <a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a></h2><p>\u601D\u8DEF: \u5148\u6C42\u51FA\u6811\u7684\u9AD8\u5EA6,\u90A3\u4E48\u6BCF\u5C42\u5BBD\u5EA6\u5C31\u786E\u5B9A\u4E86,</p><ol><li>\u5047\u8BBE\u6811\u9AD8\u4E3A3,\u90A3\u4E48root\u8282\u70B9\u6253\u5370\u51FA\u6765\u5C31\u5E94\u8BE5\u662F\u5DE6\u8FB92<sup>(3-1)-1\u4E2A\u7A7A,\u81EA\u8EAB,\u53F3\u8FB92</sup>(3-1)-1\u4E2A\u7A7A</li><li>\u9012\u5F52\u5411\u4E0B,\u5DE6\u8FB9\u6253\u5370\u51FA\u6765\u7684\u5C31\u662F\u5DE6\u4FA7\u6574\u68F5\u5B50\u6811\u7684\u6837\u5B50,\u53F3\u8FB9\u6253\u5370\u51FA\u6765\u5C31\u662F\u53F3\u4FA7\u6574\u9897\u5B50\u6811\u7684\u6837\u5B50,</li><li>\u5C06\u5DE6\u53F3\u5408\u5E76</li></ol><h2 id="\u89E3\u9898\u8FC7\u7A0B" tabindex="-1">\u89E3\u9898\u8FC7\u7A0B <a class="header-anchor" href="#\u89E3\u9898\u8FC7\u7A0B" aria-hidden="true">#</a></h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token class-name">TreeNode</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token punctuation">{</span><span class="token class-name">Ref</span><span class="token punctuation">,</span> <span class="token class-name">RefCell</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cmp<span class="token punctuation">::</span></span>max<span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Rc</span><span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">print_tree</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token operator">&gt;&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> height <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">height</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//        println!(&quot;height is {}&quot;, height);</span>
        <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">print_tree_internal</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> height<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">print_tree_internal</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token operator">&gt;&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> val <span class="token operator">=</span> <span class="token keyword">if</span> root<span class="token punctuation">.</span><span class="token function">is_none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token macro property">format!</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> root<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> height <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">/*
        \u5148\u51D1\u51FA\u6211\u8FD9\u4E00\u5C42
        */</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> result <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> space_count <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span>height <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token comment">//        println!(&quot;height={},space_count={}&quot;, height, space_count);</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> this_level <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>space_count <span class="token punctuation">{</span>
            this_level<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        this_level<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>space_count <span class="token punctuation">{</span>
            this_level<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>this_level<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token punctuation">(</span>leftNode<span class="token punctuation">,</span> rightNode<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">if</span> root<span class="token punctuation">.</span><span class="token function">is_none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token punctuation">(</span><span class="token class-name">None</span><span class="token punctuation">,</span> <span class="token class-name">None</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token punctuation">(</span>
                root<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                root<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">print_tree_internal</span><span class="token punctuation">(</span>leftNode<span class="token punctuation">,</span> height <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">print_tree_internal</span><span class="token punctuation">(</span>rightNode<span class="token punctuation">,</span> height <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u5C06\u5DE6\u53F3\u62FC\u63A5\u8D77\u6765,\u4FDD\u8BC1\u5BBD\u5EA6</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>left<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> <span class="token keyword">mut</span> v <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            v<span class="token punctuation">.</span><span class="token function">extend_from_slice</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>left<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            v<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            v<span class="token punctuation">.</span><span class="token function">extend_from_slice</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>right<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        result
    <span class="token punctuation">}</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">height</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> root<span class="token punctuation">.</span><span class="token function">is_none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> r <span class="token operator">=</span> root<span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">height</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> height <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">height</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">max</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> height<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token attribute attr-name">#[cfg(test)]</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">test</span> <span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token attribute attr-name">#[test]</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">test_find_duplcates_tree</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token function">build_tree_ignore_parent</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> null<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>
            <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">print_tree</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token macro property">vec!</span><span class="token punctuation">[</span>
                <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br></div></div><h2 id="\u4E00\u70B9\u611F\u609F" tabindex="-1">\u4E00\u70B9\u611F\u609F <a class="header-anchor" href="#\u4E00\u70B9\u611F\u609F" aria-hidden="true">#</a></h2><p>\u63A8\u7B97\u516C\u5F0F\u6709\u70B9\u7C97\u5FC3,\u5BFC\u81F4\u6765\u56DE\u6298\u817E\u4E86\u51E0\u6B21</p><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u7684<a href="https://github.com/nkbai" target="_blank" rel="noopener noreferrer">github</a>,\u672C\u9879\u76EE\u6587\u7AE0\u6240\u6709\u4EE3\u7801\u90FD\u53EF\u4EE5\u627E\u5230.</p>`,15),e=[o];function c(u,l,i,r,k,b){return a(),s("div",null,e)}var d=n(p,[["render",c]]);export{m as __pageData,d as default};
