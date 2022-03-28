import{_ as n,c as s,o as a,a as p}from"./app.e7435feb.js";const d='{"title":"155. \u6700\u5C0F\u6808","description":"","frontmatter":{"title":"155. \u6700\u5C0F\u6808","date":"2019-11-17T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["\u6280\u672F\u76F8\u5173"],"plugins":["viz"]},"headers":[{"level":2,"title":"\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-11-18)","slug":"\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-11-18"},{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":2,"title":"\u89E3\u9898\u601D\u8DEF","slug":"\u89E3\u9898\u601D\u8DEF"},{"level":2,"title":"\u89E3\u9898\u8FC7\u7A0B","slug":"\u89E3\u9898\u8FC7\u7A0B"},{"level":2,"title":"\u4E00\u70B9\u611F\u609F","slug":"\u4E00\u70B9\u611F\u609F"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"rust-leetcode/2019-11-18.md"}',t={},e=p(`<h2 id="\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-11-18" tabindex="-1">\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-11-18) <a class="header-anchor" href="#\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-11-18" aria-hidden="true">#</a></h2><p>\u575A\u6301\u6BCF\u5929\u4E00\u9053\u9898,\u5237\u9898\u5B66\u4E60Rust.</p><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u8BBE\u8BA1\u4E00\u4E2A\u652F\u6301 push\uFF0Cpop\uFF0Ctop \u64CD\u4F5C\uFF0C\u5E76\u80FD\u5728\u5E38\u6570\u65F6\u95F4\u5185\u68C0\u7D22\u5230\u6700\u5C0F\u5143\u7D20\u7684\u6808\u3002</p><p>push(x)\xA0-- \u5C06\u5143\u7D20 x \u63A8\u5165\u6808\u4E2D\u3002 pop()\xA0-- \u5220\u9664\u6808\u9876\u7684\u5143\u7D20\u3002 top()\xA0-- \u83B7\u53D6\u6808\u9876\u5143\u7D20\u3002 getMin() -- \u68C0\u7D22\u6808\u4E2D\u7684\u6700\u5C0F\u5143\u7D20\u3002 \u793A\u4F8B:</p><p>MinStack minStack = new MinStack(); minStack.push(-2); minStack.push(0); minStack.push(-3); minStack.getMin(); --&gt; \u8FD4\u56DE -3. minStack.pop(); minStack.top(); --&gt; \u8FD4\u56DE 0. minStack.getMin(); --&gt; \u8FD4\u56DE -2.</p><p>\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09 \u94FE\u63A5\uFF1A<a href="https://leetcode-cn.com/problems/min-stack" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/min-stack</a> \u8457\u4F5C\u6743\u5F52\u9886\u6263\u7F51\u7EDC\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u5B98\u65B9\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p><h2 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1">\u89E3\u9898\u601D\u8DEF <a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a></h2><p>\u4E00\u5F00\u59CB\u9009\u62E9\u7528BTreeSet,\u4F46\u662F\u6CA1\u6709\u8003\u8651\u5230\u91CD\u590D\u7684\u95EE\u9898, \u5982\u679C\u5143\u7D20\u662F\u6709\u91CD\u590D\u7684,\u90A3\u4E48\u5C31\u5FC5\u987B\u4F7F\u7528BTreeMap\u8FDB\u884C\u8BA1\u6570\u624D\u884C</p><h2 id="\u89E3\u9898\u8FC7\u7A0B" tabindex="-1">\u89E3\u9898\u8FC7\u7A0B <a class="header-anchor" href="#\u89E3\u9898\u8FC7\u7A0B" aria-hidden="true">#</a></h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cmp<span class="token punctuation">::</span></span>min<span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>collections<span class="token punctuation">::</span></span><span class="token class-name">BTreeMap</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>ops<span class="token punctuation">::</span></span><span class="token class-name">Bound</span><span class="token punctuation">::</span><span class="token class-name">Included</span><span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">contains_nearby_almost_duplicate</span><span class="token punctuation">(</span>nums<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> k<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span> t<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">bool</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> s <span class="token operator">=</span> <span class="token class-name">BTreeMap</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> t <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> k <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token operator">||</span> nums<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> k <span class="token operator">=</span> k <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">;</span>
        s<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token keyword">i64</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token punctuation">..</span>nums<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> n <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token keyword">i64</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> min <span class="token operator">=</span> n <span class="token operator">-</span> t <span class="token keyword">as</span> <span class="token keyword">i64</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> max <span class="token operator">=</span> n <span class="token operator">+</span> t <span class="token keyword">as</span> <span class="token keyword">i64</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> r <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Included</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>min<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Included</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>max<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> r<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token operator">*</span>s<span class="token punctuation">.</span><span class="token function">entry</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">or_insert</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> i <span class="token operator">&gt;=</span> k <span class="token punctuation">{</span>
                <span class="token comment">//\u79FB\u9664\u7B2Ci-k\u4E2A,\u4FDD\u8BC1map\u91CC\u9762\u4E0D\u4F1A\u8D85\u8FC7k\u4E2A\u5143\u7D20</span>
                <span class="token keyword">let</span> oldest <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">get_mut</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i <span class="token operator">-</span> k<span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token keyword">i64</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token operator">*</span>oldest <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
                    <span class="token comment">//\u8003\u8651\u5230\u6709\u591A\u4E2A\u7684\u8FD9\u79CD\u60C5\u51B5,\u6BD4\u59821\u51FA\u73B0\u4E86\u591A\u6B21</span>
                    s<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i <span class="token operator">-</span> k<span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token keyword">i64</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token operator">*</span>oldest <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">contains_nearby_almost_duplicate2</span><span class="token punctuation">(</span>nums<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> k<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span> t<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">bool</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> t <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> nums<span class="token punctuation">.</span><span class="token function">is_empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> k <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> min <span class="token operator">=</span> <span class="token keyword">i32</span><span class="token punctuation">::</span><span class="token function">max_value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> map<span class="token punctuation">:</span> <span class="token class-name">HashMap</span><span class="token operator">&lt;</span><span class="token keyword">i64</span><span class="token punctuation">,</span> <span class="token keyword">i32</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token class-name">HashMap</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token operator">&amp;</span>nums <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token operator">*</span>i <span class="token operator">&lt;</span> min <span class="token punctuation">{</span>
                min <span class="token operator">=</span> <span class="token operator">*</span>i<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">let</span> diff<span class="token punctuation">:</span> <span class="token keyword">i64</span> <span class="token operator">=</span> t <span class="token keyword">as</span> <span class="token keyword">i64</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> iter <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>nums<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> i <span class="token operator">=</span> nums<span class="token punctuation">[</span>iter<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> index<span class="token punctuation">:</span> <span class="token keyword">i64</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token keyword">as</span> <span class="token keyword">i64</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token punctuation">(</span>min <span class="token keyword">as</span> <span class="token keyword">i64</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> diff<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token keyword">let</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span> <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token punctuation">(</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token keyword">as</span> <span class="token keyword">i64</span> <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token operator">*</span>left <span class="token keyword">as</span> <span class="token keyword">i64</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token punctuation">(</span>t <span class="token keyword">as</span> <span class="token keyword">i64</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span> <span class="token keyword">let</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span> <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token keyword">as</span> <span class="token keyword">i64</span> <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token operator">*</span>right <span class="token keyword">as</span> <span class="token keyword">i64</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token punctuation">(</span>t <span class="token keyword">as</span> <span class="token keyword">i64</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>index<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            map<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">if</span> iter <span class="token keyword">as</span> <span class="token keyword">i32</span> <span class="token operator">&gt;=</span> k <span class="token punctuation">{</span>
                map<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span><span class="token punctuation">(</span>iter <span class="token keyword">as</span> <span class="token keyword">i32</span> <span class="token operator">-</span> k<span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token keyword">i64</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token punctuation">(</span>min <span class="token keyword">as</span> <span class="token keyword">i64</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> diff<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token attribute attr-name">#[cfg(test)]</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">tests</span> <span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token operator">*</span><span class="token punctuation">;</span>

    <span class="token attribute attr-name">#[test]</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>
            <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">contains_nearby_almost_duplicate</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token boolean">true</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>
            <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">contains_nearby_almost_duplicate</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token boolean">true</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>
            <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">contains_nearby_almost_duplicate</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token boolean">false</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>
            <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">contains_nearby_almost_duplicate</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2147483647</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2147483647</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token boolean">true</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br></div></div><h2 id="\u4E00\u70B9\u611F\u609F" tabindex="-1">\u4E00\u70B9\u611F\u609F <a class="header-anchor" href="#\u4E00\u70B9\u611F\u609F" aria-hidden="true">#</a></h2><pre><code>\u56E0\u4E3A\u8981\u6C42\u662F\u6808,\u6240\u4EE5\u5FC5\u987B\u5B58\u5728\u4E00\u4E2AVector,
</code></pre><p>\u8FD8\u8981\u6C42\u5E38\u6570\u53D6\u5F97\u6700\u5C0F,\u6240\u4EE5\u5FC5\u987B\u662F\u6392\u5E8F\u7684,\u8003\u8651\u7528\u5806\u6765\u6392\u5E8F,\u4F46\u662F\u6807\u51C6\u5E93\u4E2D\u7684\u5806\u662F\u4E0D\u652F\u6301\u4EFB\u610F\u5220\u9664\u6570\u636E\u7684 \u53EF\u4EE5\u9009\u62E9BTreeSet,\u4F46\u662F\u56E0\u4E3A\u6709\u6570\u636E\u91CD\u590D,\u6240\u4EE5\u53EA\u80FD\u662FBTreeMap.</p><pre><code>\u5F53\u7136\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u6709\u5E8F\u6570\u7EC4,\u4F46\u662F\u8FD9\u6837\u63D2\u5165\u5220\u9664\u7684\u4EE3\u4EF7\u8BB2\u5E08O(N),\u6BD4\u4E8C\u53C9\u6811\u8981\u5DEE\u4E0D\u5C11.
</code></pre><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u7684<a href="https://github.com/nkbai/rust-leetcode" target="_blank" rel="noopener noreferrer">github</a>,\u672C\u9879\u76EE\u6587\u7AE0\u6240\u6709\u4EE3\u7801\u90FD\u53EF\u4EE5\u627E\u5230.</p>`,17),o=[e];function c(l,u,k,r,i,b){return a(),s("div",null,o)}var y=n(t,[["render",c]]);export{d as __pageData,y as default};
