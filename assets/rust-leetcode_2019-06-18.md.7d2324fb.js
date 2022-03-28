import{_ as n,c as s,o as a,a as p}from"./app.e7435feb.js";const d='{"title":"32. \u6700\u957F\u6709\u6548\u62EC\u53F7","description":"","frontmatter":{"title":"32. \u6700\u957F\u6709\u6548\u62EC\u53F7","date":"2019-06-18T03:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["\u6280\u672F\u76F8\u5173"]},"headers":[{"level":2,"title":"\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-06-18)","slug":"\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-06-18"},{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":2,"title":"\u89E3\u9898\u8FC7\u7A0B","slug":"\u89E3\u9898\u8FC7\u7A0B"},{"level":2,"title":"\u4E00\u70B9\u611F\u609F","slug":"\u4E00\u70B9\u611F\u609F"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"rust-leetcode/2019-06-18.md"}',t={},e=p(`<h2 id="\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-06-18" tabindex="-1">\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-06-18) <a class="header-anchor" href="#\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-06-18" aria-hidden="true">#</a></h2><p>\u575A\u6301\u6BCF\u5929\u4E00\u9053\u9898,\u5237\u9898\u5B66\u4E60Rust.</p><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p><a href="https://leetcode-cn.com/problems/longest-valid-parentheses/" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/longest-valid-parentheses/</a></p><ol start="32"><li>\u6700\u957F\u6709\u6548\u62EC\u53F7</li></ol><p>\u7ED9\u5B9A\u4E00\u4E2A\u53EA\u5305\u542B &#39;(&#39;\xA0\u548C &#39;)&#39;\xA0\u7684\u5B57\u7B26\u4E32\uFF0C\u627E\u51FA\u6700\u957F\u7684\u5305\u542B\u6709\u6548\u62EC\u53F7\u7684\u5B50\u4E32\u7684\u957F\u5EA6\u3002</p><div class="language-text line-numbers-mode"><pre><code>\u793A\u4F8B 1:

\u8F93\u5165: &quot;(()&quot;
\u8F93\u51FA: 2
\u89E3\u91CA: \u6700\u957F\u6709\u6548\u62EC\u53F7\u5B50\u4E32\u4E3A &quot;()&quot;
\u793A\u4F8B 2:

\u8F93\u5165: &quot;)()())&quot;
\u8F93\u51FA: 4
\u89E3\u91CA: \u6700\u957F\u6709\u6548\u62EC\u53F7\u5B50\u4E32\u4E3A &quot;()()&quot;
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09 \u94FE\u63A5\uFF1A<a href="https://leetcode-cn.com/problems/longest-valid-parentheses" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/longest-valid-parentheses</a> \u8457\u4F5C\u6743\u5F52\u9886\u6263\u7F51\u7EDC\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u5B98\u65B9\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p><h2 id="\u89E3\u9898\u8FC7\u7A0B" tabindex="-1">\u89E3\u9898\u8FC7\u7A0B <a class="header-anchor" href="#\u89E3\u9898\u8FC7\u7A0B" aria-hidden="true">#</a></h2><p>\u601D\u8DEF: A\u662F\u4E00\u4E2A\u6709\u6548\u7684\u62EC\u53F7\u5B50\u4E32,B\u4E5F\u662F\u4E00\u4E2A\u6709\u6548\u7684\u62EC\u53F7\u5B50\u4E32,\u90A3\u4E48\u8981\u4E48A,B\u4E92\u4E0D\u76F8\u4EA4,\u8981\u4E48A\u5305\u542B\u5728B\u4E2D,\u6216\u8005B\u5305\u542B\u5728A\u4E2D \u8BBE\u8BA1\u4E00\u4E2Amap m[i]=j \u8868\u793A\u4ECE\u4E0B\u6807i\u5230j\u662F\u4E00\u4E2A\u53EF\u4EE5\u6269\u5C55\u5230\u7684\u6700\u957F\u5B57\u7B26\u4E32 i&lt;j \u540C\u6837m[j]=i\u8868\u793A\u4E0B\u6807j\u53EF\u4EE5\u6269\u5C55\u5230j\u7684\u6700\u957F\u5B57\u7B26\u4E32 j&gt;i</p><p>\u4ECE\u7B2C\u4E00\u4E2A\u5B57\u7B26\u4E32\u5F00\u59CB\u78B0\u5230\u5982\u679C\u6070\u597Di,i+1\u662F\u4E00\u5BF9,\u90A3\u4E48\u4ECE\u8FD9\u4E2A\u5F00\u59CB\u5411\u5DE6\u53F3\u6269\u5C55,\u76F4\u5230\u4E0D\u80FD\u7EE7\u7EED\u6269\u5C55\u4E3A\u6B62 \u7136\u540E\u518Dm\u4E2D\u8BB0\u4E0B\u6269\u5C55\u5230\u7684\u6781\u9650\u5047\u8BBE\u662Fi,i+3, \u90A3\u4E48\u4E0B\u4E00\u6B21\u5C31\u4ECEi+4\u5F00\u59CB\u5339\u914D</p><p>\u65F6\u95F4\u590D\u6742\u5EA6: o(n) \u5B57\u7B26\u4E32\u7684\u957F\u5EA6\u904D\u5386\u4E00\u904D\u5373\u53EF \u7A7A\u95F4\u590D\u6742\u5EA6: \u6700\u7CDF\u7CD5\u7684\u60C5\u51B5\u662F()(()(()(()(() \u57FA\u672C\u4E0A\u4E5F\u662F\u6700\u591A2n\u9879\u5728map\u4E2D</p><p>\u4F18\u5316\u7A7A\u95F4: \u611F\u89C9m\u6CA1\u6709\u5B58\u5728\u7684\u5FC5\u8981,\u56E0\u4E3A\u5982\u679C\u5DE6\u8FB9\u53EF\u4EE5\u6269\u5C55,\u80AF\u5B9A\u662F\u7D27\u6328\u7740\u81EA\u5DF1\u7684,\u6240\u4EE5\u76F4\u63A5\u7528\u4E0A\u4E00\u4E2Afrom,end\u5224\u65AD\u5373\u53EF.</p><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>collections<span class="token punctuation">::</span></span><span class="token class-name">HashMap</span><span class="token punctuation">;</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token constant">LEFT_PARENTHESES</span><span class="token punctuation">:</span> <span class="token keyword">u8</span> <span class="token operator">=</span> <span class="token char">&#39;(&#39;</span> <span class="token keyword">as</span> <span class="token keyword">u8</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token constant">RIGHT_PARENTHESES</span><span class="token punctuation">:</span> <span class="token keyword">u8</span> <span class="token operator">=</span> <span class="token char">&#39;)&#39;</span> <span class="token keyword">as</span> <span class="token keyword">u8</span><span class="token punctuation">;</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">longest_valid_parentheses</span><span class="token punctuation">(</span>s<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> s <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">as_bytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> m <span class="token operator">=</span> <span class="token class-name">HashMap</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> i <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token constant">LEFT_PARENTHESES</span> <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token constant">RIGHT_PARENTHESES</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> <span class="token punctuation">(</span>from<span class="token punctuation">,</span> end<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">longest_internal</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> m<span class="token punctuation">,</span> s<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                m<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>from<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>
                m<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>end<span class="token punctuation">,</span> from<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> l <span class="token operator">&lt;</span> end <span class="token operator">-</span> from <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">{</span>
                    l <span class="token operator">=</span> end <span class="token operator">-</span> from <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                i <span class="token operator">=</span> end <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        l <span class="token keyword">as</span> <span class="token keyword">i32</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//\u4F20\u5165from\u8868\u793A\u78B0\u5230\u7684\u4E00\u4E2A()\u7684\u5DE6\u62EC\u53F7\u7684\u4E0B\u6807,\u8FD4\u56DE\u8FD9\u6B21\u627E\u5230\u7684\u6700\u957F\u5B57\u7B26\u4E32\u957F\u5EA6\u4EE5\u53CA\u8D77\u59CB\u4EE5\u53CA\u7ED3\u675F\u4E0B\u6807</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">longest_internal</span><span class="token punctuation">(</span>m<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token class-name">HashMap</span><span class="token operator">&lt;</span><span class="token keyword">usize</span><span class="token punctuation">,</span> <span class="token keyword">usize</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> s<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token punctuation">[</span><span class="token keyword">u8</span><span class="token punctuation">]</span><span class="token punctuation">,</span> from<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token punctuation">(</span><span class="token keyword">usize</span><span class="token punctuation">,</span> <span class="token keyword">usize</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> from <span class="token operator">=</span> from<span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> end <span class="token operator">=</span> from <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//\u786E\u8BA4end\u662F)</span>
        <span class="token keyword">loop</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> from <span class="token operator">&gt;=</span> <span class="token number">1</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> m<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token punctuation">(</span>from <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">//from\u76F4\u63A5\u53EF\u4EE5\u5411\u5DE6\u6269\u5C55\u5230m[from-1],m[from-1]\u80AF\u5B9A\u5C0F\u4E8Efrom</span>
                    from <span class="token operator">=</span> m<span class="token punctuation">[</span><span class="token operator">&amp;</span><span class="token punctuation">(</span>from <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                    <span class="token keyword">continue</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token comment">//\u5C1D\u8BD5\u5411\u5DE6\u53F3\u6269\u5C55</span>
                    <span class="token keyword">if</span> end <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&gt;=</span> s<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">break</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                    <span class="token keyword">if</span> s<span class="token punctuation">[</span>from <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token constant">LEFT_PARENTHESES</span>
                        <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>end <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token constant">RIGHT_PARENTHESES</span>
                    <span class="token punctuation">{</span>
                        from <span class="token operator">=</span> from <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
                        end <span class="token operator">=</span> end <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                        <span class="token keyword">continue</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token comment">//\u6CA1\u6709\u5339\u914D\u5230,\u5C1D\u8BD5\u5411\u540E\u8D70\u4E24\u4E2A\u5B57\u7B26\u5339\u914D()</span>
                    <span class="token keyword">if</span> end <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">if</span> s<span class="token punctuation">[</span>end <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token constant">LEFT_PARENTHESES</span>
                            <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>end <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token constant">RIGHT_PARENTHESES</span>
                        <span class="token punctuation">{</span>
                            end <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span>
                            <span class="token keyword">continue</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> end <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> s<span class="token punctuation">[</span>end <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token constant">LEFT_PARENTHESES</span>
                    <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>end <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token constant">RIGHT_PARENTHESES</span>
                <span class="token punctuation">{</span>
                    end <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span>
                    <span class="token keyword">continue</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span> <span class="token comment">//\u5411\u53F3\u6269\u4E0D\u4F1A\u78B0\u5230\u5DF2\u7ECF\u77E5\u9053\u7684\u6709\u6548\u62EC\u53F7\u5B50\u4E32</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">(</span>from<span class="token punctuation">,</span> end<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token attribute attr-name">#[cfg(test)]</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">test</span> <span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token attribute attr-name">#[test]</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">test_longest_valid_parentheses</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">longest_valid_parentheses</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;(()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>
            <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">longest_valid_parentheses</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;)()())&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>
            <span class="token number">12</span><span class="token punctuation">,</span>
            <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">longest_valid_parentheses</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;(()()(()()))&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>
            <span class="token number">12</span><span class="token punctuation">,</span>
            <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">longest_valid_parentheses</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;((()()(()()))&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>
            <span class="token number">12</span><span class="token punctuation">,</span>
            <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">longest_valid_parentheses</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;(()()(()())))&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>
            <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">longest_valid_parentheses</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;(()))())(&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br></div></div><h2 id="\u4E00\u70B9\u611F\u609F" tabindex="-1">\u4E00\u70B9\u611F\u609F <a class="header-anchor" href="#\u4E00\u70B9\u611F\u609F" aria-hidden="true">#</a></h2><p>\u8FD9\u4E2A\u9898\u76EE\u662F\u5728\u52A8\u6001\u89C4\u5212\u7C7B\u578B\u4E0B,\u611F\u89C9\u4E0D\u7528\u52A8\u6001\u89C4\u5212\u4E5F\u80FD\u505A\u51FA\u6765,\u4F46\u662F\u786E\u5B9E\u7528\u4E86\u52A8\u6001\u89C4\u5212\u7684\u601D\u8DEF,\u7528\u4E86\u5386\u53F2\u8BB0\u5FC6.</p><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u7684<a href="https://github.com/nkbai" target="_blank" rel="noopener noreferrer">github</a>,\u672C\u9879\u76EE\u6587\u7AE0\u6240\u6709\u4EE3\u7801\u90FD\u53EF\u4EE5\u627E\u5230.</p>`,18),o=[e];function c(l,u,r,k,i,b){return a(),s("div",null,o)}var f=n(t,[["render",c]]);export{d as __pageData,f as default};
