import{_ as n,c as s,o as a,a as p}from"./app.3dd4ae37.js";const d='{"title":"952. \u6309\u516C\u56E0\u6570\u8BA1\u7B97\u6700\u5927\u7EC4\u4EF6\u5927\u5C0F","description":"","frontmatter":{"title":"952. \u6309\u516C\u56E0\u6570\u8BA1\u7B97\u6700\u5927\u7EC4\u4EF6\u5927\u5C0F","date":"2020-03-15T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["\u6280\u672F\u76F8\u5173"],"plugins":["viz"]},"headers":[{"level":2,"title":"\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2020-03-16)","slug":"\u6BCF\u5929\u4E00\u9053rust-leetcode-2020-03-16"},{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":2,"title":"\u89E3\u9898\u601D\u8DEF","slug":"\u89E3\u9898\u601D\u8DEF"},{"level":2,"title":"\u89E3\u9898\u8FC7\u7A0B","slug":"\u89E3\u9898\u8FC7\u7A0B"},{"level":2,"title":"\u4E00\u70B9\u611F\u609F","slug":"\u4E00\u70B9\u611F\u609F"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"rust-leetcode/2020-03-16.md"}',t={},e=p(`<h2 id="\u6BCF\u5929\u4E00\u9053rust-leetcode-2020-03-16" tabindex="-1">\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2020-03-16) <a class="header-anchor" href="#\u6BCF\u5929\u4E00\u9053rust-leetcode-2020-03-16" aria-hidden="true">#</a></h2><p>\u575A\u6301\u6BCF\u5929\u4E00\u9053\u9898,\u5237\u9898\u5B66\u4E60Rust.</p><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u7ED9\u5B9A\u4E00\u4E2A\u7531\u4E0D\u540C\u6B63\u6574\u6570\u7684\u7EC4\u6210\u7684\u975E\u7A7A\u6570\u7EC4 A\uFF0C\u8003\u8651\u4E0B\u9762\u7684\u56FE\uFF1A</p><p>\u6709\xA0A.length\xA0\u4E2A\u8282\u70B9\uFF0C\u6309\u4ECE\xA0A[0]\xA0\u5230\xA0A[A.length - 1]\xA0\u6807\u8BB0\uFF1B \u53EA\u6709\u5F53 A[i] \u548C A[j] \u5171\u7528\u4E00\u4E2A\u5927\u4E8E 1 \u7684\u516C\u56E0\u6570\u65F6\uFF0CA[i]\xA0\u548C A[j] \u4E4B\u95F4\u624D\u6709\u4E00\u6761\u8FB9\u3002 \u8FD4\u56DE\u56FE\u4E2D\u6700\u5927\u8FDE\u901A\u7EC4\u4EF6\u7684\u5927\u5C0F\u3002</p><p>\u793A\u4F8B 1\uFF1A</p><p>\u8F93\u5165\uFF1A[4,6,15,35] \u8F93\u51FA\uFF1A4 <a href="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/01/ex1.png" target="_blank" rel="noopener noreferrer">https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/01/ex1.png</a></p><p>\u793A\u4F8B 2\uFF1A</p><p>\u8F93\u5165\uFF1A[20,50,9,63] \u8F93\u51FA\uFF1A2 <a href="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/01/ex2.png" target="_blank" rel="noopener noreferrer">https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/01/ex2.png</a></p><p>\u793A\u4F8B 3\uFF1A</p><p>\u8F93\u5165\uFF1A[2,3,6,7,4,12,21,39] \u8F93\u51FA\uFF1A8 <a href="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/01/ex3.png" target="_blank" rel="noopener noreferrer">https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/01/ex3.png</a></p><p>\u63D0\u793A\uFF1A</p><p>1 &lt;= A.length &lt;= 20000 1 &lt;= A[i] &lt;= 100000</p><p>\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09 \u94FE\u63A5\uFF1A<a href="https://leetcode-cn.com/problems/largest-component-size-by-common-factor" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/largest-component-size-by-common-factor</a> \u8457\u4F5C\u6743\u5F52\u9886\u6263\u7F51\u7EDC\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u5B98\u65B9\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p><h2 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1">\u89E3\u9898\u601D\u8DEF <a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a></h2><p>\u9002\u5408\u7528\u5E76\u67E5\u96C6,\u662F\u4E00\u4E2A\u5206\u7C7B\u95EE\u9898.</p><p>\u76F4\u89C2\u7684\u65B9\u6CD5: \u590D\u6742\u5EA6:O(N^2) \u4EFB\u610F\u4E24\u4E2A\u6570,\u5982\u679C\u4ED6\u4EEC\u6709\u516C\u7EA6\u6570,\u90A3\u4E48\u653E\u5728\u4E00\u4E2A\u96C6\u5408\u4E2D(union\u64CD\u4F5C), \u6700\u7CDF\u7CD5\u7684\u60C5\u5F62\u662F\u4EFB\u610F\u4E24\u4E2A\u6570\u90FD\u6CA1\u6709\u516C\u7EA6\u6570,\u8FD9\u4F1A\u5BFC\u81F4N^2\u6B21\u516C\u7EA6\u6570\u67E5\u627E.</p><p>\u6539\u8FDB\u4E00\u70B9\u7684\u65B9\u6CD5: \u6C42\u51FA\u6BCF\u4E00\u4E2A\u6570\u7684\u6240\u6709\u56E0\u5B50,\u7136\u540E\u653E\u5230\u4E00\u4E2A\u96C6\u5408\u91CC, \u4E3E\u4F8B\u6765\u8BF4: 15,\u56E0\u5B50\u67093,5,\u90A3\u4E4815,3,5\u5C31\u653E\u5728\u4E00\u4E2A\u96C6\u5408\u91CC. \u590D\u6742\u5EA6:O(L*Sqrt(N)) \u7A7A\u95F4\u590D\u6742\u5EA6:O(N) \u5176\u4E2DN\u662F\u6570\u7EC4\u4E2D\u6700\u5927\u7684\u6570\u5B57.L\u662F\u6570\u7EC4\u7684\u957F\u5EA6</p><h2 id="\u89E3\u9898\u8FC7\u7A0B" tabindex="-1">\u89E3\u9898\u8FC7\u7A0B <a class="header-anchor" href="#\u89E3\u9898\u8FC7\u7A0B" aria-hidden="true">#</a></h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">struct</span> <span class="token type-definition class-name">DSU</span> <span class="token punctuation">{</span>
    pre<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">impl</span> <span class="token constant">DSU</span> <span class="token punctuation">{</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">new</span><span class="token punctuation">(</span>n<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token constant">DSU</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> v <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">with_capacity</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>n <span class="token punctuation">{</span>
            v<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i <span class="token keyword">as</span> <span class="token keyword">i32</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token constant">DSU</span> <span class="token punctuation">{</span> pre<span class="token punctuation">:</span> v <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">self</span><span class="token punctuation">,</span> x<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token keyword">self</span><span class="token punctuation">.</span>pre<span class="token punctuation">[</span>x <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">]</span> <span class="token operator">==</span> x <span class="token punctuation">{</span>
            <span class="token keyword">return</span> x<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// let prex = self.pre[x];</span>
        <span class="token keyword">let</span> prex <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">.</span>pre<span class="token punctuation">[</span>x <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u56E0\u4E3A\u9012\u5F52,\u8FD9\u91CC\u4F1A\u628A\u4E00\u4E32\u4E0A\u9762\u7684\u6240\u6709\u8DEF\u5F84\u90FD\u538B\u7F29\u4E86,</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>pre<span class="token punctuation">[</span>x <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">]</span> <span class="token operator">=</span> prex<span class="token punctuation">;</span>
        <span class="token keyword">return</span> prex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//\u8FD4\u56DEfalse,\u8BF4\u660Ex,y\u5728\u540C\u4E00\u4E2A\u96C6\u5408\u91CC</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">merge</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">self</span><span class="token punctuation">,</span> x<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">bool</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> prex <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> prey <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> prex <span class="token operator">==</span> prey <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//\u6CE8\u610F\u8FD9\u91CC\u662F\u8BBE\u7F6E\u7684\u662Fprex\u7684parent,\u800C\u4E0D\u662Fx\u7684parent</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>pre<span class="token punctuation">[</span>prey <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">]</span> <span class="token operator">=</span> prex<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">largest_component_size</span><span class="token punctuation">(</span>a<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        a<span class="token punctuation">.</span><span class="token function">iter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">for_each</span><span class="token punctuation">(</span><span class="token closure-params"><span class="token closure-punctuation punctuation">|</span>n<span class="token closure-punctuation punctuation">|</span></span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> max <span class="token operator">&lt;</span> <span class="token operator">*</span>n <span class="token punctuation">{</span>
                max <span class="token operator">=</span> <span class="token operator">*</span>n<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> dsu <span class="token operator">=</span> <span class="token constant">DSU</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">(</span>max <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        a<span class="token punctuation">.</span><span class="token function">iter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">for_each</span><span class="token punctuation">(</span><span class="token closure-params"><span class="token closure-punctuation punctuation">|</span>n<span class="token closure-punctuation punctuation">|</span></span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token operator">*</span>n<span class="token punctuation">;</span>
            <span class="token keyword">let</span> nf <span class="token operator">=</span> n <span class="token keyword">as</span> <span class="token keyword">f32</span><span class="token punctuation">;</span>
            <span class="token comment">// println!(&quot;n={} nf.sqrt()={}&quot;, n, nf.sqrt() as i32);</span>
            <span class="token keyword">for</span> k <span class="token keyword">in</span> <span class="token number">2</span><span class="token punctuation">..=</span><span class="token punctuation">(</span>nf<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> n <span class="token operator">%</span> k <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
                    <span class="token comment">// println!(&quot;merge {}-&gt;{},{}-&gt;{}&quot;, n, k, n, n / k);</span>
                    dsu<span class="token punctuation">.</span><span class="token function">merge</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    dsu<span class="token punctuation">.</span><span class="token function">merge</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> n <span class="token operator">/</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token comment">// println!(&quot;pre[{}]={},pre[{}]={}&quot;, k, n, n / k, n);</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u8FD9\u65F6\u5019\u518D\u9010\u4E2A\u7EDF\u8BA1\u6BCF\u4E2A\u5143\u7D20\u7684parent,\u56E0\u4E3A\u6CA1\u6709\u4E86merge\u7684\u8FC7\u7A0B,\u5F97\u5230\u7684\u662F\u6700\u7EC8\u7684\u76F4\u63A5\u7684parent.</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> m <span class="token operator">=</span> <span class="token class-name">HashMap</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        a<span class="token punctuation">.</span><span class="token function">iter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">for_each</span><span class="token punctuation">(</span><span class="token closure-params"><span class="token closure-punctuation punctuation">|</span>n<span class="token closure-punctuation punctuation">|</span></span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token operator">*</span>n<span class="token punctuation">;</span>
            <span class="token keyword">let</span> p <span class="token operator">=</span> dsu<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// println!(&quot;find {}-&gt;{}&quot;, n, p);</span>
            <span class="token keyword">let</span> e <span class="token operator">=</span> m<span class="token punctuation">.</span><span class="token function">entry</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">or_insert</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token operator">*</span>e <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> max <span class="token operator">&lt;</span> <span class="token operator">*</span>e <span class="token punctuation">{</span>
                max <span class="token operator">=</span> <span class="token operator">*</span>e<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        max
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token attribute attr-name">#[cfg(test)]</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">test</span> <span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token attribute attr-name">#[test]</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">largest_component_size</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">largest_component_size</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">63</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">largest_component_size</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">39</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br></div></div><h2 id="\u4E00\u70B9\u611F\u609F" tabindex="-1">\u4E00\u70B9\u611F\u609F <a class="header-anchor" href="#\u4E00\u70B9\u611F\u609F" aria-hidden="true">#</a></h2><p>\u767E\u79D1\u4E2D\u6709\u4E00\u79CD\u57C3\u6C0F\u7B5B\u7D20\u6570\u7684\u65B9\u5F0F,\u901F\u5EA6\u66F4\u5FEB,\u4E0D\u8FC7\u4E0D\u662F\u5F88\u719F\u7684\u4E00\u822C\u60F3\u4E0D\u5230.</p><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u7684<a href="https://github.com/nkbai/rust-leetcode" target="_blank" rel="noopener noreferrer">github</a>,\u672C\u9879\u76EE\u6587\u7AE0\u6240\u6709\u4EE3\u7801\u90FD\u53EF\u4EE5\u627E\u5230.</p>`,24),o=[e];function c(l,u,r,k,i,b){return a(),s("div",null,o)}var y=n(t,[["render",c]]);export{d as __pageData,y as default};