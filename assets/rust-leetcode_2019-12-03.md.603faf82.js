import{_ as n,c as s,o as a,a as p}from"./app.e7435feb.js";const d='{"title":"30. \u4E32\u8054\u6240\u6709\u5355\u8BCD\u7684\u5B50\u4E32","description":"","frontmatter":{"title":"30. \u4E32\u8054\u6240\u6709\u5355\u8BCD\u7684\u5B50\u4E32","date":"2019-12-02T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["\u6280\u672F\u76F8\u5173"],"plugins":["viz"]},"headers":[{"level":2,"title":"\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-12-03)","slug":"\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-12-03"},{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":2,"title":"\u89E3\u9898\u601D\u8DEF","slug":"\u89E3\u9898\u601D\u8DEF"},{"level":2,"title":"\u89E3\u9898\u8FC7\u7A0B","slug":"\u89E3\u9898\u8FC7\u7A0B"},{"level":2,"title":"\u4E00\u70B9\u611F\u609F","slug":"\u4E00\u70B9\u611F\u609F"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"rust-leetcode/2019-12-03.md"}',t={},o=p(`<h2 id="\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-12-03" tabindex="-1">\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-12-03) <a class="header-anchor" href="#\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-12-03" aria-hidden="true">#</a></h2><p>\u575A\u6301\u6BCF\u5929\u4E00\u9053\u9898,\u5237\u9898\u5B66\u4E60Rust.</p><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u7ED9\u5B9A\u4E00\u4E2A\u5B57\u7B26\u4E32\xA0s\xA0\u548C\u4E00\u4E9B\u957F\u5EA6\u76F8\u540C\u7684\u5355\u8BCD\xA0words\u3002\u627E\u51FA s \u4E2D\u6070\u597D\u53EF\u4EE5\u7531\xA0words \u4E2D\u6240\u6709\u5355\u8BCD\u4E32\u8054\u5F62\u6210\u7684\u5B50\u4E32\u7684\u8D77\u59CB\u4F4D\u7F6E\u3002</p><p>\u6CE8\u610F\u5B50\u4E32\u8981\u4E0E\xA0words \u4E2D\u7684\u5355\u8BCD\u5B8C\u5168\u5339\u914D\uFF0C\u4E2D\u95F4\u4E0D\u80FD\u6709\u5176\u4ED6\u5B57\u7B26\uFF0C\u4F46\u4E0D\u9700\u8981\u8003\u8651\xA0words\xA0\u4E2D\u5355\u8BCD\u4E32\u8054\u7684\u987A\u5E8F\u3002</p><p>\u793A\u4F8B 1\uFF1A</p><p>\u8F93\u5165\uFF1A s = &quot;barfoothefoobarman&quot;, words = [&quot;foo&quot;,&quot;bar&quot;] \u8F93\u51FA\uFF1A[0,9] \u89E3\u91CA\uFF1A \u4ECE\u7D22\u5F15 0 \u548C 9 \u5F00\u59CB\u7684\u5B50\u4E32\u5206\u522B\u662F &quot;barfoo&quot; \u548C &quot;foobar&quot; \u3002 \u8F93\u51FA\u7684\u987A\u5E8F\u4E0D\u91CD\u8981, [9,0] \u4E5F\u662F\u6709\u6548\u7B54\u6848\u3002 \u793A\u4F8B 2\uFF1A</p><p>\u8F93\u5165\uFF1A s = &quot;wordgoodgoodgoodbestword&quot;, words = [&quot;word&quot;,&quot;good&quot;,&quot;best&quot;,&quot;word&quot;] \u8F93\u51FA\uFF1A[]</p><p>\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09 \u94FE\u63A5\uFF1A<a href="https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words</a> \u8457\u4F5C\u6743\u5F52\u9886\u6263\u7F51\u7EDC\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u5B98\u65B9\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p><h2 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1">\u89E3\u9898\u601D\u8DEF <a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a></h2><p>\u601D\u8DEF:</p><ol><li>\u9898\u76EE\u660E\u786E\u8981\u6C42\u7684\u662Fwords\u4E2D\u7684\u5B57\u7B26\u4E32\u957F\u5EA6\u90FD\u662F\u56FA\u5B9A\u7684,\u4E14\u76F8\u540C</li><li>words\u4E2D\u7684\u5B57\u7B26\u4E32\u4F1A\u91CD\u590D</li><li>\u4F7F\u7528map\u6765\u5BF9words\u4E2D\u7684\u6BCF\u4E2A\u5B57\u7B26\u4E32\u8FDB\u884C\u8BA1\u6570\u7EDF\u8BA1</li><li>\u4EE5\u5355\u8BCD\u4E3A\u5355\u4F4D\u5BF9s\u4E2D\u7684\u5B57\u7B26\u4E32\u8FDB\u884C\u5206\u5272,\u53EA\u8981\u4EE5\u67D0\u4E2A\u5B57\u7B26\u4E32\u5F00\u59CB,\u80FD\u591F\u8BA93\u4E2D\u7684map\u8BA1\u6570\u5668\u964D\u52300,\u90A3\u4E48\u5C31\u8BA4\u4E3A\u627E\u5230\u4E86\u4E00\u4E2A\u4F4D\u7F6E</li></ol><h2 id="\u89E3\u9898\u8FC7\u7A0B" tabindex="-1">\u89E3\u9898\u8FC7\u7A0B <a class="header-anchor" href="#\u89E3\u9898\u8FC7\u7A0B" aria-hidden="true">#</a></h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>collections<span class="token punctuation">::</span></span><span class="token class-name">HashMap</span><span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span><span class="token punctuation">;</span>

<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">find_substring</span><span class="token punctuation">(</span>s<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> words<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> m <span class="token operator">=</span> <span class="token class-name">HashMap</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> words<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u7A7A\u7684\u5B57\u7B26\u4E32,\u4E0D\u7528\u627E</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> words<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\u662F0,\u4E5F\u4E0D\u7528\u627E\u4E86</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> sub_len <span class="token operator">=</span> words<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> total_len <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> s <span class="token keyword">in</span> words<span class="token punctuation">.</span><span class="token function">iter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token operator">*</span>m<span class="token punctuation">.</span><span class="token function">entry</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">as_bytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">or_insert</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            total_len <span class="token operator">+=</span> sub_len<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> res <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> s <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">as_bytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> i <span class="token operator">+</span> total_len <span class="token operator">&lt;=</span> s<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> <span class="token keyword">mut</span> m2 <span class="token operator">=</span> m<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> <span class="token keyword">mut</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span>
            <span class="token keyword">while</span> m2<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">+</span> sub_len <span class="token operator">&lt;=</span> s<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;i={},j={}&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">let</span> r <span class="token operator">=</span> j<span class="token punctuation">..</span><span class="token punctuation">(</span>j <span class="token operator">+</span> sub_len<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">let</span> sub <span class="token operator">=</span> <span class="token operator">&amp;</span>s<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> m2<span class="token punctuation">.</span><span class="token function">contains_key</span><span class="token punctuation">(</span>sub<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">let</span> e <span class="token operator">=</span> m2<span class="token punctuation">.</span><span class="token function">get_mut</span><span class="token punctuation">(</span>sub<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">expect</span><span class="token punctuation">(</span><span class="token string">&quot;must have&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token operator">*</span>e <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token operator">*</span>e <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
                        m2<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>sub<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                j <span class="token operator">+=</span> sub_len<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">//\u5982\u679C\u5168\u90E8\u90FD\u5339\u914D\u5230\u4E86,\u8FD9\u65F6\u5019m2\u80AF\u5B9A\u7A7A\u4E86.</span>
            <span class="token comment">//\u5982\u679C\u5339\u914D\u5230\u4E86,\u53EF\u4EE5\u8003\u8651\u8DF3\u7684\u66F4\u591A,</span>
            <span class="token comment">//\u6BD4\u5982words=[aa,bb,cc]</span>
            <span class="token comment">//\u5982\u679Ci\u5339\u914D\u5230\u4E86,\u6BD4\u5982s[i:i+sub_len]=cc,\u90A3\u4E48\u53EA\u9700\u8981\u770Bs[i+sub_len*2:i+sub_len*3]\u662F\u5426\u662Fcc</span>
            <span class="token comment">//\u5982\u679C\u662Fcc,\u81EA\u7136\u53EF\u4EE5\u7EE7\u7EED\u5339\u914D,\u5982\u679C\u4E0D\u662F,\u8FD8\u8981\u5206\u4E24\u79CD\u60C5\u51B5</span>
            <span class="token comment">//1. s[i+sub_len*2:i+sub_len*3]\u662F\u5426\u5728m\u4E2D,\u5982\u679C\u4E0D\u5728,\u8DF3\u8FC7</span>
            <span class="token comment">//2.\u5982\u679C\u5728,\u8C28\u614E\u8D77\u89C1,\u53EA\u80FD\u7EE7\u7EED\u4ECEi+sub_len\u5F00\u59CB\u5339\u914D,</span>
            <span class="token keyword">if</span> m2<span class="token punctuation">.</span><span class="token function">is_empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i <span class="token keyword">as</span> <span class="token keyword">i32</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        res
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token attribute attr-name">#[cfg(test)]</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">tests</span> <span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token attribute attr-name">#[test]</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>
            <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">find_substring</span><span class="token punctuation">(</span>
                <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;barfoothefoobarman&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;bar&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>
            <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">find_substring</span><span class="token punctuation">(</span>
                <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;wordgoodgoodgoodbestword&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token macro property">vec!</span><span class="token punctuation">[</span>
                    <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;word&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;good&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;best&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;word&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>
            <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">find_substring</span><span class="token punctuation">(</span>
                <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;wordgoodgoodgoodbestword&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token macro property">vec!</span><span class="token punctuation">[</span>
                    <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;word&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;good&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;best&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;good&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>
            <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">find_substring</span><span class="token punctuation">(</span>
                <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;ababaab&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;ab&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;ba&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;ba&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br></div></div><h2 id="\u4E00\u70B9\u611F\u609F" tabindex="-1">\u4E00\u70B9\u611F\u609F <a class="header-anchor" href="#\u4E00\u70B9\u611F\u609F" aria-hidden="true">#</a></h2><p>\u4E00\u5F00\u59CB\u88AB\u9898\u89E3\u6240\u8BEF\u5BFC,s = &quot;ababaab&quot;, words = [&quot;ab&quot;,&quot;ba&quot;,&quot;ba&quot;] ,\u4EE5\u4E3A\u8FD9\u79CD\u60C5\u51B5\u4E0D\u80FD\u5339\u914D,\u7ED3\u679C\u662F\u53EF\u4EE5\u5339\u914D.</p><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u7684<a href="https://github.com/nkbai/rust-leetcode" target="_blank" rel="noopener noreferrer">github</a>,\u672C\u9879\u76EE\u6587\u7AE0\u6240\u6709\u4EE3\u7801\u90FD\u53EF\u4EE5\u627E\u5230.</p>`,18),e=[o];function c(l,u,r,i,k,b){return a(),s("div",null,e)}var f=n(t,[["render",c]]);export{d as __pageData,f as default};
