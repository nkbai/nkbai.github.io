import{_ as n,c as s,o as a,a as p}from"./app.e7435feb.js";const d='{"title":"365. \u6C34\u58F6\u95EE\u9898","description":"","frontmatter":{"title":"365. \u6C34\u58F6\u95EE\u9898","date":"2020-02-16T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["\u6280\u672F\u76F8\u5173"],"plugins":["viz"]},"headers":[{"level":2,"title":"\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2020-02-17)","slug":"\u6BCF\u5929\u4E00\u9053rust-leetcode-2020-02-17"},{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":2,"title":"\u89E3\u9898\u601D\u8DEF","slug":"\u89E3\u9898\u601D\u8DEF"},{"level":2,"title":"\u89E3\u9898\u8FC7\u7A0B","slug":"\u89E3\u9898\u8FC7\u7A0B"},{"level":2,"title":"\u4E00\u70B9\u611F\u609F","slug":"\u4E00\u70B9\u611F\u609F"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"rust-leetcode/2020-02-17.md"}',t={},e=p(`<h2 id="\u6BCF\u5929\u4E00\u9053rust-leetcode-2020-02-17" tabindex="-1">\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2020-02-17) <a class="header-anchor" href="#\u6BCF\u5929\u4E00\u9053rust-leetcode-2020-02-17" aria-hidden="true">#</a></h2><p>\u575A\u6301\u6BCF\u5929\u4E00\u9053\u9898,\u5237\u9898\u5B66\u4E60Rust.</p><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u6709\u4E24\u4E2A\u5BB9\u91CF\u5206\u522B\u4E3A\xA0x\u5347 \u548C y\u5347 \u7684\u6C34\u58F6\u4EE5\u53CA\u65E0\u9650\u591A\u7684\u6C34\u3002\u8BF7\u5224\u65AD\u80FD\u5426\u901A\u8FC7\u4F7F\u7528\u8FD9\u4E24\u4E2A\u6C34\u58F6\uFF0C\u4ECE\u800C\u53EF\u4EE5\u5F97\u5230\u6070\u597D\xA0z\u5347 \u7684\u6C34\uFF1F</p><p>\u5982\u679C\u53EF\u4EE5\uFF0C\u6700\u540E\u8BF7\u7528\u4EE5\u4E0A\u6C34\u58F6\u4E2D\u7684\u4E00\u6216\u4E24\u4E2A\u6765\u76DB\u653E\u53D6\u5F97\u7684\xA0z\u5347\xA0\u6C34\u3002</p><p>\u4F60\u5141\u8BB8\uFF1A</p><p>\u88C5\u6EE1\u4EFB\u610F\u4E00\u4E2A\u6C34\u58F6 \u6E05\u7A7A\u4EFB\u610F\u4E00\u4E2A\u6C34\u58F6 \u4ECE\u4E00\u4E2A\u6C34\u58F6\u5411\u53E6\u5916\u4E00\u4E2A\u6C34\u58F6\u5012\u6C34\uFF0C\u76F4\u5230\u88C5\u6EE1\u6216\u8005\u5012\u7A7A \u793A\u4F8B 1: (From the famous &quot;Die Hard&quot; example)</p><p>\u8F93\u5165: x = 3, y = 5, z = 4 \u8F93\u51FA: True \u793A\u4F8B 2:</p><p>\u8F93\u5165: x = 2, y = 6, z = 5 \u8F93\u51FA: False</p><p>\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09 \u94FE\u63A5\uFF1A<a href="https://leetcode-cn.com/problems/water-and-jug-problem" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/water-and-jug-problem</a> \u8457\u4F5C\u6743\u5F52\u9886\u6263\u7F51\u7EDC\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u5B98\u65B9\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p><h2 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1">\u89E3\u9898\u601D\u8DEF <a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a></h2><p>\u66B4\u529B\u7A77\u4E3E,\u4F46\u662F\u4E3B\u8981\u4FDD\u5B58\u72B6\u6001,\u5BF9\u4E8E\u660E\u786E\u4E0D\u884C\u7684,\u4E2D\u95F4\u8FC7\u7A0B\u6BCF\u4E2A\u72B6\u6001\u90FD\u4FDD\u5B58. \u5BF9\u4E8E\u4EFB\u610F\u4E00\u4E2A\u72B6\u6001 \u5BF9\u4E24\u4E2A\u6C34\u58F6,\u4E0D\u5916\u4E4E\u4E09\u79CD\u64CD\u4F5C 1.\u52A0\u6EE1 2.\u5012\u7A7A 3.\u5012\u7ED9\u5BF9\u65B9 \u5F97\u5230\u4E00\u4E2A\u65B0\u7684\u72B6\u6001, \u5982\u679C\u6240\u6709\u53EF\u80FD\u7684\u8DEF\u90FD\u8D70\u4E0D\u901A,\u90A3\u4E48\u8FD9\u4E2A\u72B6\u6001\u4E5F\u662F\u65E0\u6548\u7684.</p><h2 id="\u89E3\u9898\u8FC7\u7A0B" tabindex="-1">\u89E3\u9898\u8FC7\u7A0B <a class="header-anchor" href="#\u89E3\u9898\u8FC7\u7A0B" aria-hidden="true">#</a></h2><div class="language-rust line-numbers-mode"><pre><code>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cmp<span class="token punctuation">::</span></span><span class="token punctuation">{</span>max<span class="token punctuation">,</span> min<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>collections<span class="token punctuation">::</span></span><span class="token class-name">HashSet</span><span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">can_measure_water</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span> z<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">bool</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> x <span class="token operator">+</span> y <span class="token operator">&lt;</span> z <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> z <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> x <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> y <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> state <span class="token operator">=</span> <span class="token class-name">HashSet</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">measure_internal</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>y<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> z<span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> state<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">measure_internal</span><span class="token punctuation">(</span>
        x<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token keyword">i32</span><span class="token punctuation">,</span> <span class="token keyword">i32</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        y<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token keyword">i32</span><span class="token punctuation">,</span> <span class="token keyword">i32</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        z<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span>
        state<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token class-name">HashSet</span><span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token keyword">i32</span><span class="token punctuation">,</span> <span class="token keyword">i32</span><span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">bool</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u5DF2\u7ECF\u6D4B\u8BD5\u8FC7,\u4E0D\u884C</span>
        <span class="token keyword">if</span> state<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token punctuation">(</span>x<span class="token number">.1</span><span class="token punctuation">,</span> y<span class="token number">.1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;try {:?}&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>x<span class="token number">.1</span><span class="token punctuation">,</span> y<span class="token number">.1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u521A\u597D\u5408\u9002</span>
        <span class="token keyword">if</span> x<span class="token number">.1</span> <span class="token operator">+</span> y<span class="token number">.1</span> <span class="token operator">==</span> z <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//\u4E0D\u8981\u91CD\u590D\u81EA\u5DF1\u4E86</span>
        state<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token number">.1</span><span class="token punctuation">,</span> y<span class="token number">.1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u52A0\u6EE1x</span>
        <span class="token keyword">if</span> x<span class="token number">.1</span> <span class="token operator">&lt;</span> x<span class="token number">.0</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">measure_internal</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token number">.0</span><span class="token punctuation">,</span> x<span class="token number">.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">//x\u6EE1,y\u4FDD\u6301\u4E0D\u53D8,\u884C\u4E0D\u901A</span>
            state<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token number">.0</span><span class="token punctuation">,</span> y<span class="token number">.1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//\u5012\u7A7Ax</span>
        <span class="token keyword">if</span> x<span class="token number">.1</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">measure_internal</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token number">.0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            state<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> y<span class="token number">.1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//\u5012\u7ED9y</span>
        <span class="token keyword">if</span> x<span class="token number">.1</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> y<span class="token number">.1</span> <span class="token operator">&lt;</span> y<span class="token number">.0</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> y1 <span class="token operator">=</span> <span class="token function">min</span><span class="token punctuation">(</span>x<span class="token number">.1</span><span class="token punctuation">,</span> y<span class="token number">.0</span> <span class="token operator">-</span> y<span class="token number">.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> x1 <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> x<span class="token number">.1</span> <span class="token operator">-</span> y1<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">measure_internal</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token number">.0</span><span class="token punctuation">,</span> x1<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>y<span class="token number">.0</span><span class="token punctuation">,</span> y1<span class="token punctuation">)</span><span class="token punctuation">,</span> z<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            state<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x1<span class="token punctuation">,</span> y1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//\u52A0\u6EE1y</span>
        <span class="token keyword">if</span> y<span class="token number">.1</span> <span class="token operator">&lt;</span> y<span class="token number">.0</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">measure_internal</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token punctuation">(</span>y<span class="token number">.0</span><span class="token punctuation">,</span> y<span class="token number">.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> z<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            state<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token number">.1</span><span class="token punctuation">,</span> y<span class="token number">.0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//\u5012\u7A7Ay</span>
        <span class="token keyword">if</span> y<span class="token number">.1</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">measure_internal</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token punctuation">(</span>y<span class="token number">.0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> z<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            state<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token number">.1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//\u5012\u7ED9x</span>
        <span class="token keyword">if</span> y<span class="token number">.1</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> x<span class="token number">.1</span> <span class="token operator">&lt;</span> x<span class="token number">.0</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> x1 <span class="token operator">=</span> <span class="token function">min</span><span class="token punctuation">(</span>y<span class="token number">.1</span><span class="token punctuation">,</span> x<span class="token number">.0</span> <span class="token operator">-</span> x<span class="token number">.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> y1 <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> y<span class="token number">.1</span> <span class="token operator">-</span> x1<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">measure_internal</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token number">.0</span><span class="token punctuation">,</span> x1<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>y<span class="token number">.0</span><span class="token punctuation">,</span> y1<span class="token punctuation">)</span><span class="token punctuation">,</span> z<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            state<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x1<span class="token punctuation">,</span> y1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token attribute attr-name">#[cfg(test)]</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">test</span> <span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token attribute attr-name">#[test]</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">can_measure_water</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">can_measure_water</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">can_measure_water</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br></div></div><h2 id="\u4E00\u70B9\u611F\u609F" tabindex="-1">\u4E00\u70B9\u611F\u609F <a class="header-anchor" href="#\u4E00\u70B9\u611F\u609F" aria-hidden="true">#</a></h2><p>\u8FB9\u754Cz=0 \u4EE5\u53CAz=x+y\u8FD9\u4E24\u79CD\u60C5\u51B5\u6CA1\u6709\u8003\u8651\u5468\u5168</p><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u7684<a href="https://github.com/nkbai/rust-leetcode" target="_blank" rel="noopener noreferrer">github</a>,\u672C\u9879\u76EE\u6587\u7AE0\u6240\u6709\u4EE3\u7801\u90FD\u53EF\u4EE5\u627E\u5230.</p>`,18),o=[e];function c(u,l,k,r,i,b){return a(),s("div",null,o)}var y=n(t,[["render",c]]);export{d as __pageData,y as default};
