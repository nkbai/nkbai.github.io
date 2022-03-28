import{_ as n,c as s,o as a,a as p}from"./app.e7435feb.js";const d='{"title":"987. \u4E8C\u53C9\u6811\u7684\u5782\u5E8F\u904D\u5386","description":"","frontmatter":{"title":"987. \u4E8C\u53C9\u6811\u7684\u5782\u5E8F\u904D\u5386","date":"2019-11-03T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["\u6280\u672F\u76F8\u5173"],"plugins":["viz"]},"headers":[{"level":2,"title":"\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-11-04)","slug":"\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-11-04"},{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":2,"title":"\u89E3\u9898\u601D\u8DEF","slug":"\u89E3\u9898\u601D\u8DEF"},{"level":2,"title":"\u89E3\u9898\u8FC7\u7A0B","slug":"\u89E3\u9898\u8FC7\u7A0B"},{"level":2,"title":"\u4E00\u70B9\u611F\u609F","slug":"\u4E00\u70B9\u611F\u609F"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"rust-leetcode/2019-11-04.md"}',t={},e=p(`<h2 id="\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-11-04" tabindex="-1">\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-11-04) <a class="header-anchor" href="#\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-11-04" aria-hidden="true">#</a></h2><p>\u575A\u6301\u6BCF\u5929\u4E00\u9053\u9898,\u5237\u9898\u5B66\u4E60Rust.</p><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u7ED9\u5B9A\u4E8C\u53C9\u6811\uFF0C\u6309\u5782\u5E8F\u904D\u5386\u8FD4\u56DE\u5176\u7ED3\u70B9\u503C\u3002</p><p>\u5BF9\u4F4D\u4E8E\xA0(X, Y)\xA0\u7684\u6BCF\u4E2A\u7ED3\u70B9\u800C\u8A00\uFF0C\u5176\u5DE6\u53F3\u5B50\u7ED3\u70B9\u5206\u522B\u4F4D\u4E8E\xA0(X-1, Y-1)\xA0\u548C\xA0(X+1, Y-1)\u3002</p><p>\u628A\u4E00\u6761\u5782\u7EBF\u4ECE\xA0X = -infinity\xA0\u79FB\u52A8\u5230\xA0X = +infinity\xA0\uFF0C\u6BCF\u5F53\u8BE5\u5782\u7EBF\u4E0E\u7ED3\u70B9\u63A5\u89E6\u65F6\uFF0C\u6211\u4EEC\u6309\u4ECE\u4E0A\u5230\u4E0B\u7684\u987A\u5E8F\u62A5\u544A\u7ED3\u70B9\u7684\u503C\uFF08 Y\xA0\u5750\u6807\u9012\u51CF\uFF09\u3002</p><p>\u5982\u679C\u4E24\u4E2A\u7ED3\u70B9\u4F4D\u7F6E\u76F8\u540C\uFF0C\u5219\u9996\u5148\u62A5\u544A\u7684\u7ED3\u70B9\u503C\u8F83\u5C0F\u3002</p><p>\u6309\xA0X\xA0\u5750\u6807\u987A\u5E8F\u8FD4\u56DE\u975E\u7A7A\u62A5\u544A\u7684\u5217\u8868\u3002\u6BCF\u4E2A\u62A5\u544A\u90FD\u6709\u4E00\u4E2A\u7ED3\u70B9\u503C\u5217\u8868\u3002</p><p>\u793A\u4F8B 1\uFF1A</p><div class="language-viz line-numbers-mode"><pre><code>digraph G {
    node [shape=circle]
    edge [arrowhead=vee]
   3-&gt; 9
   3-&gt; 20
   20-&gt;15
   20-&gt;7 
}
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u8F93\u5165\uFF1A[3,9,20,null,null,15,7] \u8F93\u51FA\uFF1A[[9],[3,15],[20],[7]] \u89E3\u91CA\uFF1A \u5728\u4E0D\u4E27\u5931\u5176\u666E\u904D\u6027\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5047\u8BBE\u6839\u7ED3\u70B9\u4F4D\u4E8E (0, 0)\uFF1A \u7136\u540E\uFF0C\u503C\u4E3A 9 \u7684\u7ED3\u70B9\u51FA\u73B0\u5728 (-1, -1)\uFF1B \u503C\u4E3A 3 \u548C 15 \u7684\u4E24\u4E2A\u7ED3\u70B9\u5206\u522B\u51FA\u73B0\u5728 (0, 0) \u548C (0, -2)\uFF1B \u503C\u4E3A 20 \u7684\u7ED3\u70B9\u51FA\u73B0\u5728 (1, -1)\uFF1B \u503C\u4E3A 7 \u7684\u7ED3\u70B9\u51FA\u73B0\u5728 (2, -2)\u3002 \u793A\u4F8B 2\uFF1A</p><div class="language-viz line-numbers-mode"><pre><code>digraph G {
    node [shape=circle]
    edge [arrowhead=vee]
   1-&gt; 2
   1-&gt; 3
   2-&gt;4
   2-&gt;5
   3-&gt;6
   3-&gt;7  
}
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u8F93\u5165\uFF1A[1,2,3,4,5,6,7] \u8F93\u51FA\uFF1A[[4],[2],[1,5,6],[3],[7]] \u89E3\u91CA\uFF1A \u6839\u636E\u7ED9\u5B9A\u7684\u65B9\u6848\uFF0C\u503C\u4E3A 5 \u548C 6 \u7684\u4E24\u4E2A\u7ED3\u70B9\u51FA\u73B0\u5728\u540C\u4E00\u4F4D\u7F6E\u3002 \u7136\u800C\uFF0C\u5728\u62A5\u544A &quot;[1,5,6]&quot; \u4E2D\uFF0C\u7ED3\u70B9\u503C 5 \u6392\u5728\u524D\u9762\uFF0C\u56E0\u4E3A 5 \u5C0F\u4E8E 6\u3002</p><p>\u63D0\u793A\uFF1A</p><p>\u6811\u7684\u7ED3\u70B9\u6570\u4ECB\u4E8E 1\xA0\u548C\xA01000\xA0\u4E4B\u95F4\u3002 \u6BCF\u4E2A\u7ED3\u70B9\u503C\u4ECB\u4E8E\xA00\xA0\u548C\xA01000\xA0\u4E4B\u95F4\u3002</p><p>\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09 \u94FE\u63A5\uFF1A<a href="https://leetcode-cn.com/problems/vertical-order-traversal-of-a-binary-tree" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/vertical-order-traversal-of-a-binary-tree</a> \u8457\u4F5C\u6743\u5F52\u9886\u6263\u7F51\u7EDC\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u5B98\u65B9\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p><h2 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1">\u89E3\u9898\u601D\u8DEF <a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a></h2><ol><li>\u6309\u7167\u6DF1\u5EA6\u4F18\u5148\u904D\u5386,</li><li>\u4F7F\u7528\u4E00\u4E2ABtreemap\u6765\u4FDD\u5B58\u5782\u76F4\u5C42\u6B21\u5173\u7CFB key: X\u5750\u6807,value: <code>map&lt;Y,vec&lt;i32&gt;&gt;</code></li><li>\u9488\u5BF9X,Y\u5750\u6807\u76F8\u540C\u7684\u4F4D\u7F6E,\u6392\u5E8F\u540E\u8FD4\u56DE\u7ED3\u679C</li></ol><h2 id="\u89E3\u9898\u8FC7\u7A0B" tabindex="-1">\u89E3\u9898\u8FC7\u7A0B <a class="header-anchor" href="#\u89E3\u9898\u8FC7\u7A0B" aria-hidden="true">#</a></h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token class-name">TreeNode</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">RefCell</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>collections<span class="token punctuation">::</span></span><span class="token class-name">BTreeMap</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Rc</span><span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">vertical_traversal</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> m <span class="token operator">=</span> <span class="token class-name">BTreeMap</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">vertical_traversal_internal</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> m<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> v <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        m<span class="token punctuation">.</span><span class="token function">iter_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">for_each</span><span class="token punctuation">(</span><span class="token closure-params"><span class="token closure-punctuation punctuation">|</span>m2<span class="token closure-punctuation punctuation">|</span></span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> <span class="token keyword">mut</span> v2 <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;x={},m={:?}&quot;</span><span class="token punctuation">,</span> m2<span class="token number">.0</span><span class="token punctuation">,</span> m2<span class="token number">.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            m2<span class="token number">.1</span><span class="token punctuation">.</span><span class="token function">iter_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">for_each</span><span class="token punctuation">(</span><span class="token closure-params"><span class="token closure-punctuation punctuation">|</span>v3<span class="token closure-punctuation punctuation">|</span></span> <span class="token punctuation">{</span>
                v3<span class="token number">.1</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                v2<span class="token punctuation">.</span><span class="token function">extend_from_slice</span><span class="token punctuation">(</span>v3<span class="token number">.1</span><span class="token punctuation">.</span><span class="token function">as_slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            v<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>v2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        v
    <span class="token punctuation">}</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">vertical_traversal_internal</span><span class="token punctuation">(</span>
        root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
        m<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token class-name">BTreeMap</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token punctuation">,</span> <span class="token class-name">BTreeMap</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token punctuation">,</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
        x<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span>
        y<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> root<span class="token punctuation">.</span><span class="token function">is_none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> r <span class="token operator">=</span> root<span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token keyword">let</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>m2<span class="token punctuation">)</span> <span class="token operator">=</span> m<span class="token punctuation">.</span><span class="token function">get_mut</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//x\u5DF2\u7ECF\u5B58\u5728,y\u4E5F\u5B58\u5728,\u5B8C\u5168\u76F8\u540C\u7684\u4F4D\u7F6E,\u5230\u65F6\u5019\u9700\u8981\u6392\u5E8F\u7684</span>
            <span class="token keyword">if</span> <span class="token keyword">let</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">=</span> m2<span class="token punctuation">.</span><span class="token function">get_mut</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                v<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">//x\u76F8\u540C,\u4F46\u662Fy\u8FD8\u4E0D\u5B58\u5728</span>
                m2<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>y<span class="token punctuation">,</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span>r<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">//\u521D\u6B21\u51FA\u73B0\u7684X\u5750\u6807</span>
            <span class="token keyword">let</span> <span class="token keyword">mut</span> m2 <span class="token operator">=</span> <span class="token class-name">BTreeMap</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            m2<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>y<span class="token punctuation">,</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span>r<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            m<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> m2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">/*
            \u7531\u4E8EBTreeMap key\u6392\u5E8F\u6BD4\u8F83\u9EBB\u70E6,\u8FD9\u91CC\u7B80\u5355\u8BA9y\u5750\u6807\u5411\u4E0A\u589E\u957F,\u6548\u679C\u5B8C\u5168\u76F8\u540C
        */</span>
        <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">vertical_traversal_internal</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> m<span class="token punctuation">,</span> x <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> y <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">vertical_traversal_internal</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> m<span class="token punctuation">,</span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> y <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token attribute attr-name">#[cfg(test)]</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">test</span> <span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token attribute attr-name">#[test]</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">test_find_duplcates_tree</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token function">build_tree_ignore_parent</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> null<span class="token punctuation">,</span> null<span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">vertical_traversal</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token function">build_tree_ignore_parent</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">vertical_traversal</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br></div></div><h2 id="\u4E00\u70B9\u611F\u609F" tabindex="-1">\u4E00\u70B9\u611F\u609F <a class="header-anchor" href="#\u4E00\u70B9\u611F\u609F" aria-hidden="true">#</a></h2><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u7684<a href="https://github.com/nkbai/rust-leetcode" target="_blank" rel="noopener noreferrer">github</a>,\u672C\u9879\u76EE\u6587\u7AE0\u6240\u6709\u4EE3\u7801\u90FD\u53EF\u4EE5\u627E\u5230.</p>`,23),o=[e];function c(l,u,r,i,k,m){return a(),s("div",null,o)}var f=n(t,[["render",c]]);export{d as __pageData,f as default};
