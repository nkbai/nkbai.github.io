import{_ as n,c as s,o as a,a as p}from"./app.e7435feb.js";const d='{"title":"124. \u4E8C\u53C9\u6811\u4E2D\u7684\u6700\u5927\u8DEF\u5F84\u548C-\u7B49\u6548,\u4F46\u662F\u66F4\u6E05\u6670","description":"","frontmatter":{"title":"124. \u4E8C\u53C9\u6811\u4E2D\u7684\u6700\u5927\u8DEF\u5F84\u548C-\u7B49\u6548,\u4F46\u662F\u66F4\u6E05\u6670","date":"2019-09-16T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["\u6280\u672F\u76F8\u5173"]},"headers":[{"level":2,"title":"\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-09-17)","slug":"\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-09-17"},{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":2,"title":"\u89E3\u9898\u601D\u8DEF","slug":"\u89E3\u9898\u601D\u8DEF"},{"level":2,"title":"\u89E3\u9898\u8FC7\u7A0B","slug":"\u89E3\u9898\u8FC7\u7A0B"},{"level":2,"title":"\u4E00\u70B9\u611F\u609F","slug":"\u4E00\u70B9\u611F\u609F"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"rust-leetcode/2019-09-17.md"}',t={},e=p(`<h2 id="\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-09-17" tabindex="-1">\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-09-17) <a class="header-anchor" href="#\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-09-17" aria-hidden="true">#</a></h2><p>\u575A\u6301\u6BCF\u5929\u4E00\u9053\u9898,\u5237\u9898\u5B66\u4E60Rust.</p><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u7ED9\u5B9A\u4E00\u4E2A\u975E\u7A7A\u4E8C\u53C9\u6811\uFF0C\u8FD4\u56DE\u5176\u6700\u5927\u8DEF\u5F84\u548C\u3002</p><p>\u672C\u9898\u4E2D\uFF0C\u8DEF\u5F84\u88AB\u5B9A\u4E49\u4E3A\u4E00\u6761\u4ECE\u6811\u4E2D\u4EFB\u610F\u8282\u70B9\u51FA\u53D1\uFF0C\u8FBE\u5230\u4EFB\u610F\u8282\u70B9\u7684\u5E8F\u5217\u3002\u8BE5\u8DEF\u5F84\u81F3\u5C11\u5305\u542B\u4E00\u4E2A\u8282\u70B9\uFF0C\u4E14\u4E0D\u4E00\u5B9A\u7ECF\u8FC7\u6839\u8282\u70B9\u3002</p><p>\u793A\u4F8B 1:</p><div class="language-"><pre><code>\u8F93\u5165: [1,2,3]

       1
      / \\
     2   3

\u8F93\u51FA: 6
\u793A\u4F8B\xA02:

\u8F93\u5165: [-10,9,20,null,null,15,7]

   -10
   / \\
  9  20
    /  \\
   15   7

\u8F93\u51FA: 42
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09 \u94FE\u63A5\uFF1A<a href="https://leetcode-cn.com/problems/binary-tree-maximum-path-sum" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/binary-tree-maximum-path-sum</a> \u8457\u4F5C\u6743\u5F52\u9886\u6263\u7F51\u7EDC\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u5B98\u65B9\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p><h2 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1">\u89E3\u9898\u601D\u8DEF <a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a></h2><p>\u53EA\u7BA1\u6C42\u7ECF\u8FC7\u6BCF\u4E2A\u8282\u70B9\u7684\u6700\u5927\u8DEF\u5F84\u548C\u5373\u53EF,\u4F46\u662F\u6BCF\u6C42\u4E00\u6B21\u90FD\u8981\u5224\u65AD\u8FD9\u4E2A\u662F\u5426\u6700\u7EC8\u7684\u6700\u5927\u8DEF\u5F84 \u6B64\u89E3\u6CD5\u662Fleetcode\u4E0A\u7684</p><h2 id="\u89E3\u9898\u8FC7\u7A0B" tabindex="-1">\u89E3\u9898\u8FC7\u7A0B <a class="header-anchor" href="#\u89E3\u9898\u8FC7\u7A0B" aria-hidden="true">#</a></h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token class-name">ListNode</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token class-name">TreeNode</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">RefCell</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cmp<span class="token punctuation">::</span></span>max<span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Rc</span><span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
<span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">max_path_sum</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> max <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">9999999</span><span class="token punctuation">;</span>
        <span class="token comment">//\u8FD9\u91CC\u4F7F\u7528\u95ED\u5305\u6765\u5904\u7406\u6700\u7EC8\u7ED3\u679C\u7684\u4F20\u9012,\u5F88\u5DE7\u5999,\u503C\u5F97\u501F\u9274</span>
        <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token closure-params"><span class="token closure-punctuation punctuation">|</span>x<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token closure-punctuation punctuation">|</span></span> <span class="token punctuation">{</span>
            max <span class="token operator">=</span> max<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{:?}&quot;</span><span class="token punctuation">,</span> max<span class="token punctuation">)</span><span class="token punctuation">;</span>
        max
    <span class="token punctuation">}</span>
    <span class="token comment">//f:&amp;mut impl FnMut(i32)\u8FD9\u79CD\u5199\u6CD5\u4E5F\u503C\u5F97\u5B66\u4E60</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> f<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">impl</span> <span class="token class-name">FnMut</span><span class="token punctuation">(</span><span class="token keyword">i32</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> root<span class="token punctuation">.</span><span class="token function">is_none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> r_b <span class="token operator">=</span> root<span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token punctuation">(</span>l<span class="token punctuation">,</span> r<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span>r_b<span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> r_b<span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u8FD9\u91CC\u6709\u70B9\u5DE7\u5999,\u56E0\u4E3A\u6211\u6C42\u7684\u662F\u7ECF\u8FC7\u6211\u8FD9\u4E2A\u8282\u70B9\u7684\u6700\u5927\u8DEF\u5F84\u548C,\u90A3\u4E48\u5B50\u6811\u5982\u679C\u662F\u8D1F\u503C,\u5FFD\u7565\u5373\u53EF.</span>
        <span class="token comment">//\u56E0\u6B64\u901A\u8FC7max(0)\u8FD9\u79CD\u65B9\u5F0F,\u6781\u5927\u7684\u7B80\u5316\u4E86\u4EE3\u7801\u590D\u6742\u5EA6.</span>
        <span class="token comment">//\u76F8\u6BD4\u6211\u4E4B\u524D\u7684\u4EE3\u7801,\u4F18\u96C5\u4E86\u4E0D\u77E5\u9053\u591A\u5C11\u500D</span>
        <span class="token keyword">let</span> <span class="token punctuation">(</span>lval<span class="token punctuation">,</span> rval<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">traverse</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> f<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">traverse</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> f<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> cur_path_max <span class="token operator">=</span> lval <span class="token operator">+</span> rval <span class="token operator">+</span> r_b<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
        <span class="token function">f</span><span class="token punctuation">(</span>cur_path_max<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">(</span>lval <span class="token operator">+</span> r_b<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>rval <span class="token operator">+</span> r_b<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token attribute attr-name">#[cfg(test)]</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">test</span> <span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span>build_tree<span class="token punctuation">;</span>
    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token attribute attr-name">#[test]</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">test_has_path_sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/*
                [
           [5,4,11,2],
           [5,8,4,5]
        ]
                */</span>
        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token function">build_tree</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;t={:?}&quot;</span><span class="token punctuation">,</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
               <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">max_path_sum</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token function">build_tree</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;t={:?}&quot;</span><span class="token punctuation">,</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
               <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">,</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">max_path_sum</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token function">build_tree</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;t={:?}&quot;</span><span class="token punctuation">,</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
               <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token number">49</span><span class="token punctuation">,</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">max_path_sum</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token function">build_tree</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token macro property">vec!</span><span class="token punctuation">[</span>
            <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;t={:?}&quot;</span><span class="token punctuation">,</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
               <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token number">48</span><span class="token punctuation">,</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">max_path_sum</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token class-name">TreeNode</span> <span class="token punctuation">{</span>
            val<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
            left<span class="token punctuation">:</span> <span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token class-name">Rc</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">RefCell</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> <span class="token punctuation">{</span>
                val<span class="token punctuation">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
                left<span class="token punctuation">:</span> <span class="token class-name">None</span><span class="token punctuation">,</span>
                right<span class="token punctuation">:</span> <span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token class-name">Rc</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">RefCell</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> <span class="token punctuation">{</span>
                    val<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">,</span>
                    left<span class="token punctuation">:</span> <span class="token class-name">None</span><span class="token punctuation">,</span>
                    right<span class="token punctuation">:</span> <span class="token class-name">None</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            right<span class="token punctuation">:</span> <span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token class-name">Rc</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">RefCell</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> <span class="token punctuation">{</span>
                val<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                right<span class="token punctuation">:</span> <span class="token class-name">None</span><span class="token punctuation">,</span>
                left<span class="token punctuation">:</span> <span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token class-name">Rc</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">RefCell</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> <span class="token punctuation">{</span>
                    val<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    right<span class="token punctuation">:</span> <span class="token class-name">None</span><span class="token punctuation">,</span>
                    left<span class="token punctuation">:</span> <span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token class-name">Rc</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">RefCell</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> <span class="token punctuation">{</span>
                        val<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">,</span>
                        left<span class="token punctuation">:</span> <span class="token class-name">None</span><span class="token punctuation">,</span>
                        right<span class="token punctuation">:</span> <span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token class-name">Rc</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">RefCell</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> <span class="token punctuation">{</span>
                            val<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">,</span>
                            left<span class="token punctuation">:</span> <span class="token class-name">None</span><span class="token punctuation">,</span>
                            right<span class="token punctuation">:</span> <span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token class-name">Rc</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">RefCell</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> <span class="token punctuation">{</span>
                                val<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span>
                                left<span class="token punctuation">:</span> <span class="token class-name">None</span><span class="token punctuation">,</span>
                                right<span class="token punctuation">:</span> <span class="token class-name">None</span><span class="token punctuation">,</span>
                            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token class-name">Rc</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">RefCell</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;t={:?}&quot;</span><span class="token punctuation">,</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">max_path_sum</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br></div></div><h2 id="\u4E00\u70B9\u611F\u609F" tabindex="-1">\u4E00\u70B9\u611F\u609F <a class="header-anchor" href="#\u4E00\u70B9\u611F\u609F" aria-hidden="true">#</a></h2><p>\u8FD9\u91CC\u533A\u5206\u4E86\u597D\u51E0\u79CD\u60C5\u51B5,\u770B\u4E86\u522B\u4EBA\u7684\u89E3\u7B54,\u604D\u7136\u5927\u609F,\u6CA1\u5FC5\u8981\u5982\u6B64\u533A\u5206,</p><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u7684<a href="https://github.com/nkbai" target="_blank" rel="noopener noreferrer">github</a>,\u672C\u9879\u76EE\u6587\u7AE0\u6240\u6709\u4EE3\u7801\u90FD\u53EF\u4EE5\u627E\u5230.</p>`,16),o=[e];function c(l,u,k,i,r,m){return a(),s("div",null,o)}var f=n(t,[["render",c]]);export{d as __pageData,f as default};
