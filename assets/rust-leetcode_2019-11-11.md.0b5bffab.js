import{_ as n,c as s,o as a,a as p}from"./app.e7435feb.js";const d='{"title":"1123. \u6700\u6DF1\u53F6\u8282\u70B9\u7684\u6700\u8FD1\u516C\u5171\u7956\u5148","description":"","frontmatter":{"title":"1123. \u6700\u6DF1\u53F6\u8282\u70B9\u7684\u6700\u8FD1\u516C\u5171\u7956\u5148","date":"2019-11-10T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["\u6280\u672F\u76F8\u5173"],"plugins":["viz"]},"headers":[{"level":2,"title":"\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-11-11)","slug":"\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-11-11"},{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":2,"title":"\u89E3\u9898\u601D\u8DEF","slug":"\u89E3\u9898\u601D\u8DEF"},{"level":2,"title":"\u89E3\u9898\u8FC7\u7A0B","slug":"\u89E3\u9898\u8FC7\u7A0B"},{"level":2,"title":"\u4E00\u70B9\u611F\u609F","slug":"\u4E00\u70B9\u611F\u609F"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"rust-leetcode/2019-11-11.md"}',t={},e=p(`<h2 id="\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-11-11" tabindex="-1">\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-11-11) <a class="header-anchor" href="#\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-11-11" aria-hidden="true">#</a></h2><p>\u575A\u6301\u6BCF\u5929\u4E00\u9053\u9898,\u5237\u9898\u5B66\u4E60Rust.</p><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u7ED9\u4F60\u4E00\u4E2A\u6709\u6839\u8282\u70B9\u7684\u4E8C\u53C9\u6811\uFF0C\u627E\u5230\u5B83\u6700\u6DF1\u7684\u53F6\u8282\u70B9\u7684\u6700\u8FD1\u516C\u5171\u7956\u5148\u3002</p><p>\u56DE\u60F3\u4E00\u4E0B\uFF1A</p><p>\u53F6\u8282\u70B9 \u662F\u4E8C\u53C9\u6811\u4E2D\u6CA1\u6709\u5B50\u8282\u70B9\u7684\u8282\u70B9 \u6811\u7684\u6839\u8282\u70B9\u7684\xA0\u6DF1\u5EA6\xA0\u4E3A\xA00\uFF0C\u5982\u679C\u67D0\u4E00\u8282\u70B9\u7684\u6DF1\u5EA6\u4E3A\xA0d\uFF0C\u90A3\u5B83\u7684\u5B50\u8282\u70B9\u7684\u6DF1\u5EA6\u5C31\u662F\xA0d+1 \u5982\u679C\u6211\u4EEC\u5047\u5B9A A \u662F\u4E00\u7EC4\u8282\u70B9\xA0S\xA0\u7684 \u6700\u8FD1\u516C\u5171\u7956\u5148\uFF0C S \u4E2D\u7684\u6BCF\u4E2A\u8282\u70B9\u90FD\u5728\u4EE5 A \u4E3A\u6839\u8282\u70B9\u7684\u5B50\u6811\u4E2D\uFF0C\u4E14 A\xA0\u7684\u6DF1\u5EA6\u8FBE\u5230\u6B64\u6761\u4EF6\u4E0B\u53EF\u80FD\u7684\u6700\u5927\u503C\u3002</p><p>\u793A\u4F8B 1\uFF1A</p><p>\u8F93\u5165\uFF1Aroot = [1,2,3] \u8F93\u51FA\uFF1A[1,2,3] \u793A\u4F8B 2\uFF1A</p><p>\u8F93\u5165\uFF1Aroot = [1,2,3,4] \u8F93\u51FA\uFF1A[4] \u793A\u4F8B 3\uFF1A</p><p>\u8F93\u5165\uFF1Aroot = [1,2,3,4,5] \u8F93\u51FA\uFF1A[2,4,5]</p><p>\u63D0\u793A\uFF1A</p><p>\u7ED9\u4F60\u7684\u6811\u4E2D\u5C06\u6709\xA01 \u5230 1000 \u4E2A\u8282\u70B9\u3002 \u6811\u4E2D\u6BCF\u4E2A\u8282\u70B9\u7684\u503C\u90FD\u5728 1 \u5230 1000 \u4E4B\u95F4\u3002</p><p>\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09 \u94FE\u63A5\uFF1A<a href="https://leetcode-cn.com/problems/lowest-common-ancestor-of-deepest-leaves" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/lowest-common-ancestor-of-deepest-leaves</a> \u8457\u4F5C\u6743\u5F52\u9886\u6263\u7F51\u7EDC\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u5B98\u65B9\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p><h2 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1">\u89E3\u9898\u601D\u8DEF <a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a></h2><p>\u9488\u5BF9\u6BCF\u4E2A\u8282\u70B9,</p><ol><li>\u5982\u679C\u4ED6\u662F\u53F6\u8282\u70B9,\u90A3\u4E48\u5F97\u5230\u5B83\u7684\u6DF1\u5EA6\u4EE5\u53CA\u6700\u8FD1\u516C\u5171\u7956\u5148\u5C31\u662F\u4ED6\u81EA\u8EAB</li><li>\u5982\u679C\u6709\u5DE6\u53F3\u8282\u70B9 \u65E0\u5916\u4E4E\u4E24\u79CD\u60C5\u51B5</li><li>\u5DE6\u53F3\u5B50\u6811\u8FD4\u56DE\u6DF1\u5EA6\u76F8\u540C,\u90A3\u4E48\u4ED6\u5C31\u662F\u6700\u8FD1\u516C\u5171\u7956\u5148,</li><li>\u5DE6\u53F3\u5B50\u6811\u6DF1\u5EA6\u4E0D\u540C,\u90A3\u4E48\u76F4\u63A5\u8FD4\u56DE\u6DF1\u7684\u90A3\u4E2A\u7ED3\u679C</li></ol><h2 id="\u89E3\u9898\u8FC7\u7A0B" tabindex="-1">\u89E3\u9898\u8FC7\u7A0B <a class="header-anchor" href="#\u89E3\u9898\u8FC7\u7A0B" aria-hidden="true">#</a></h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token class-name">TreeNode</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">RefCell</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Rc</span><span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span><span class="token punctuation">;</span>

<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">lca_deepest_leaves</span><span class="token punctuation">(</span>
        root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">lca_internal</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> r<span class="token number">.1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">lca_internal</span><span class="token punctuation">(</span>
        root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
        depth<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token punctuation">(</span><span class="token keyword">i32</span><span class="token punctuation">,</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> root<span class="token punctuation">.</span><span class="token function">is_none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//\u7A7A,\u8BF4\u660E\u5B83\u7684\u6DF1\u5EA6\u6700\u4F4E,</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span></span><span class="token keyword">i32</span><span class="token punctuation">;</span>
        depth<span class="token punctuation">.</span><span class="token function">leading_zeros</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> r <span class="token operator">=</span> root<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> r<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">is_none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> r<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">is_none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>depth<span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u81EA\u5DF1\u662F\u53F6\u8282\u70B9</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> l <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">lca_internal</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> depth <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">lca_internal</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> depth <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> l<span class="token number">.0</span> <span class="token operator">==</span> r<span class="token number">.0</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>l<span class="token number">.0</span><span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> l<span class="token number">.0</span> <span class="token operator">&gt;</span> r<span class="token number">.0</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> l<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> r<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token attribute attr-name">#[cfg(test)]</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">tests</span> <span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token attribute attr-name">#[test]</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token function">build_tree_ignore_parent</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">lca_deepest_leaves</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token function">build_tree_ignore_parent</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">lca_deepest_leaves</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token function">build_tree_ignore_parent</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">lca_deepest_leaves</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div><h2 id="\u4E00\u70B9\u611F\u609F" tabindex="-1">\u4E00\u70B9\u611F\u609F <a class="header-anchor" href="#\u4E00\u70B9\u611F\u609F" aria-hidden="true">#</a></h2><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u7684<a href="https://github.com/nkbai/rust-leetcode" target="_blank" rel="noopener noreferrer">github</a>,\u672C\u9879\u76EE\u6587\u7AE0\u6240\u6709\u4EE3\u7801\u90FD\u53EF\u4EE5\u627E\u5230.</p>`,21),o=[e];function c(l,u,r,k,i,b){return a(),s("div",null,o)}var f=n(t,[["render",c]]);export{d as __pageData,f as default};
