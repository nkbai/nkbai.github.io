import{_ as n,c as s,o as a,a as p}from"./app.e7435feb.js";const d='{"title":"515. \u5728\u6BCF\u4E2A\u6811\u884C\u4E2D\u627E\u6700\u5927\u503C","description":"","frontmatter":{"title":"515. \u5728\u6BCF\u4E2A\u6811\u884C\u4E2D\u627E\u6700\u5927\u503C","date":"2019-09-26T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["\u6280\u672F\u76F8\u5173"]},"headers":[{"level":2,"title":"\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-09-27)","slug":"\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-09-27"},{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":2,"title":"\u89E3\u9898\u601D\u8DEF","slug":"\u89E3\u9898\u601D\u8DEF"},{"level":2,"title":"\u89E3\u9898\u8FC7\u7A0B","slug":"\u89E3\u9898\u8FC7\u7A0B"},{"level":2,"title":"\u4E00\u70B9\u611F\u609F","slug":"\u4E00\u70B9\u611F\u609F"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"rust-leetcode/2019-09-27.md"}',t={},e=p(`<h2 id="\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-09-27" tabindex="-1">\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-09-27) <a class="header-anchor" href="#\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-09-27" aria-hidden="true">#</a></h2><p>\u575A\u6301\u6BCF\u5929\u4E00\u9053\u9898,\u5237\u9898\u5B66\u4E60Rust.</p><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u60A8\u9700\u8981\u5728\u4E8C\u53C9\u6811\u7684\u6BCF\u4E00\u884C\u4E2D\u627E\u5230\u6700\u5927\u7684\u503C\u3002</p><p>\u793A\u4F8B\uFF1A</p><p>\u8F93\u5165:</p><pre><code>      1
     / \\
    3   2
   / \\   \\
  5   3   9
</code></pre><p>\u8F93\u51FA: [1, 3, 9]</p><p>\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09 \u94FE\u63A5\uFF1A<a href="https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row</a> \u8457\u4F5C\u6743\u5F52\u9886\u6263\u7F51\u7EDC\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u5B98\u65B9\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p><h2 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1">\u89E3\u9898\u601D\u8DEF <a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a></h2><p>\u6309\u5C42\u904D\u5386, \u6BCF\u5C42\u53EA\u80FD\u9010\u4E2A\u6BD4\u8F83\u627E\u6700\u5927\u503C</p><h2 id="\u89E3\u9898\u8FC7\u7A0B" tabindex="-1">\u89E3\u9898\u8FC7\u7A0B <a class="header-anchor" href="#\u89E3\u9898\u8FC7\u7A0B" aria-hidden="true">#</a></h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token class-name">TreeNode</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">RefCell</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Rc</span><span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">largest_values</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> r <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> h <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> root<span class="token punctuation">.</span><span class="token function">is_none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> r<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//        println!(&quot;root={:?}&quot;, root);</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> v <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        v<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        h<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token operator">!</span>h<span class="token punctuation">.</span><span class="token function">is_empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> <span class="token keyword">mut</span> max <span class="token operator">=</span> <span class="token namespace">std<span class="token punctuation">::</span></span><span class="token keyword">i32</span><span class="token punctuation">::</span><span class="token constant">MIN</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> <span class="token keyword">mut</span> vh <span class="token operator">=</span> h<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u79FB\u9664\u7B2C\u4E00\u4E2A</span>
                                      <span class="token comment">//            println!(&quot;vh={:?}&quot;, vh);</span>
            <span class="token keyword">let</span> <span class="token keyword">mut</span> vh2 <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            vh<span class="token punctuation">.</span><span class="token function">iter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">for_each</span><span class="token punctuation">(</span><span class="token closure-params"><span class="token closure-punctuation punctuation">|</span>t<span class="token closure-punctuation punctuation">|</span></span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> t<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val <span class="token operator">&gt;</span> max <span class="token punctuation">{</span>
                    max <span class="token operator">=</span> t<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token keyword">let</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span> <span class="token operator">=</span> t<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    vh2<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token keyword">let</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span> <span class="token operator">=</span> t<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    vh2<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token operator">!</span>vh2<span class="token punctuation">.</span><span class="token function">is_empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                h<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>vh2<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            r<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        r
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token attribute attr-name">#[cfg(test)]</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">test</span> <span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token attribute attr-name">#[test]</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">test_level_order_bottom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>
            <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">largest_values</span><span class="token punctuation">(</span><span class="token function">build_tree</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>
            <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">largest_values</span><span class="token punctuation">(</span><span class="token function">build_tree</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>
            <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">largest_values</span><span class="token punctuation">(</span><span class="token function">build_tree</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token macro property">vec!</span><span class="token punctuation">[</span>
                <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token number">7</span>
            <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br></div></div><h2 id="\u4E00\u70B9\u611F\u609F" tabindex="-1">\u4E00\u70B9\u611F\u609F <a class="header-anchor" href="#\u4E00\u70B9\u611F\u609F" aria-hidden="true">#</a></h2><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u7684<a href="https://github.com/nkbai" target="_blank" rel="noopener noreferrer">github</a>,\u672C\u9879\u76EE\u6587\u7AE0\u6240\u6709\u4EE3\u7801\u90FD\u53EF\u4EE5\u627E\u5230.</p>`,16),o=[e];function c(l,u,k,r,i,b){return a(),s("div",null,o)}var h=n(t,[["render",c]]);export{d as __pageData,h as default};
