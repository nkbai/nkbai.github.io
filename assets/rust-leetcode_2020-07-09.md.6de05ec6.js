import{_ as n,c as s,o as a,a as p}from"./app.e7435feb.js";const d='{"title":"\u9762\u8BD5\u9898 17.13. \u6062\u590D\u7A7A\u683C","description":"","frontmatter":{"title":"\u9762\u8BD5\u9898 17.13. \u6062\u590D\u7A7A\u683C","date":"2020-07-08T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["\u6280\u672F\u76F8\u5173"],"plugins":["viz"]},"headers":[{"level":2,"title":"\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2020-07-09)","slug":"\u6BCF\u5929\u4E00\u9053rust-leetcode-2020-07-09"},{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":2,"title":"\u89E3\u9898\u601D\u8DEF","slug":"\u89E3\u9898\u601D\u8DEF"},{"level":2,"title":"\u89E3\u9898\u8FC7\u7A0B","slug":"\u89E3\u9898\u8FC7\u7A0B"},{"level":2,"title":"\u4E00\u70B9\u611F\u609F","slug":"\u4E00\u70B9\u611F\u609F"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"rust-leetcode/2020-07-09.md"}',t={},o=p(`<h2 id="\u6BCF\u5929\u4E00\u9053rust-leetcode-2020-07-09" tabindex="-1">\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2020-07-09) <a class="header-anchor" href="#\u6BCF\u5929\u4E00\u9053rust-leetcode-2020-07-09" aria-hidden="true">#</a></h2><p>\u575A\u6301\u6BCF\u5929\u4E00\u9053\u9898,\u5237\u9898\u5B66\u4E60Rust.</p><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u54E6\uFF0C\u4E0D\uFF01\u4F60\u4E0D\u5C0F\u5FC3\u628A\u4E00\u4E2A\u957F\u7BC7\u6587\u7AE0\u4E2D\u7684\u7A7A\u683C\u3001\u6807\u70B9\u90FD\u5220\u6389\u4E86\uFF0C\u5E76\u4E14\u5927\u5199\u4E5F\u5F04\u6210\u4E86\u5C0F\u5199\u3002\u50CF\u53E5\u5B50&quot;I reset the computer. It still didn\u2019t boot!&quot;\u5DF2\u7ECF\u53D8\u6210\u4E86&quot;iresetthecomputeritstilldidntboot&quot;\u3002\u5728\u5904\u7406\u6807\u70B9\u7B26\u53F7\u548C\u5927\u5C0F\u5199\u4E4B\u524D\uFF0C\u4F60\u5F97\u5148\u628A\u5B83\u65AD\u6210\u8BCD\u8BED\u3002\u5F53\u7136\u4E86\uFF0C\u4F60\u6709\u4E00\u672C\u539A\u539A\u7684\u8BCD\u5178dictionary\uFF0C\u4E0D\u8FC7\uFF0C\u6709\u4E9B\u8BCD\u6CA1\u5728\u8BCD\u5178\u91CC\u3002\u5047\u8BBE\u6587\u7AE0\u7528sentence\u8868\u793A\uFF0C\u8BBE\u8BA1\u4E00\u4E2A\u7B97\u6CD5\uFF0C\u628A\u6587\u7AE0\u65AD\u5F00\uFF0C\u8981\u6C42\u672A\u8BC6\u522B\u7684\u5B57\u7B26\u6700\u5C11\uFF0C\u8FD4\u56DE\u672A\u8BC6\u522B\u7684\u5B57\u7B26\u6570\u3002</p><p>\u6CE8\u610F\uFF1A\u672C\u9898\u76F8\u5BF9\u539F\u9898\u7A0D\u4F5C\u6539\u52A8\uFF0C\u53EA\u9700\u8FD4\u56DE\u672A\u8BC6\u522B\u7684\u5B57\u7B26\u6570</p><p>\u793A\u4F8B\uFF1A</p><p>\u8F93\u5165\uFF1A dictionary = [&quot;looked&quot;,&quot;just&quot;,&quot;like&quot;,&quot;her&quot;,&quot;brother&quot;] sentence = &quot;jesslookedjustliketimherbrother&quot; \u8F93\u51FA\uFF1A 7 \u89E3\u91CA\uFF1A \u65AD\u53E5\u540E\u4E3A&quot;jess looked just like tim her brother&quot;\uFF0C\u51717\u4E2A\u672A\u8BC6\u522B\u5B57\u7B26\u3002 \u63D0\u793A\uFF1A</p><p>0 &lt;= len(sentence) &lt;= 1000 dictionary\u4E2D\u603B\u5B57\u7B26\u6570\u4E0D\u8D85\u8FC7 150000\u3002 \u4F60\u53EF\u4EE5\u8BA4\u4E3Adictionary\u548Csentence\u4E2D\u53EA\u5305\u542B\u5C0F\u5199\u5B57\u6BCD\u3002</p><p>\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09 \u94FE\u63A5\uFF1A<a href="https://leetcode-cn.com/problems/re-space-lcci" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/re-space-lcci</a> \u8457\u4F5C\u6743\u5F52\u9886\u6263\u7F51\u7EDC\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u5B98\u65B9\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p><h2 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1">\u89E3\u9898\u601D\u8DEF <a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a></h2><p>\u9996\u5148\u5C06dict\u8F6C\u4E3Amap,\u52A0\u901F\u67E5\u627E. \u4F7F\u7528\u52A8\u6001\u89C4\u5212\u601D\u8DEF: i,j\u90FD\u662Fsentence\u4E2D\u7684\u4E0B\u6807 \u9996\u5148dp[i][j]\u8868\u793A\u4ECEi\u5230j(\u5305\u542Bj)\u4E2D\u672A\u8BC6\u522B\u7684\u5B57\u7B26\u6570,\u663E\u7136\u8FD9\u4E2A\u6570\u6700\u5927\u5C31\u662Fj-i+1 \u7B2C\u4E00\u6B65,\u626B\u63CF\u6574\u4E2A\u5B57\u7B26\u4E32,\u627E\u51FA\u6240\u6709\u5305\u542B\u5728\u5B57\u5178\u4E2D\u7684dp[i][j],\u7136\u540E\u8BBE\u7F6E\u4E3A0 \u7B2C\u4E8C\u6B65,\u7531\u77ED\u53D8\u957F\u904D\u5386\u6574\u4E2Adp,\u6700\u7EC8\u5F97\u51FA\u7ED3\u679C \u7A7A\u95F4\u590D\u6742\u5EA6\u662FO(N^2),\u5176\u4E2DN\u662F\u53E5\u5B50\u7684\u957F\u5EA6 \u65F6\u95F4\u590D\u6742\u5EA6\u662FO(N^3),\u5176\u4E2DN\u662F\u53E5\u5B50\u7684\u957F\u5EA6</p><h2 id="\u89E3\u9898\u8FC7\u7A0B" tabindex="-1">\u89E3\u9898\u8FC7\u7A0B <a class="header-anchor" href="#\u89E3\u9898\u8FC7\u7A0B" aria-hidden="true">#</a></h2><div class="language-rust line-numbers-mode"><pre><code>
<span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">respace</span><span class="token punctuation">(</span>dictionary<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> sentence<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> sentence<span class="token punctuation">.</span><span class="token function">is_empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> set <span class="token operator">=</span> <span class="token namespace">std<span class="token punctuation">::</span>collections<span class="token punctuation">::</span></span><span class="token class-name">HashSet</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> s <span class="token keyword">in</span> dictionary<span class="token punctuation">.</span><span class="token function">iter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            set<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">as_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> s <span class="token operator">=</span> sentence<span class="token punctuation">.</span><span class="token function">as_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> dp <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">;</span> sentence<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> sentence<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">//\u7B2C\u4E00\u6B65,\u626B\u63CF\u6574\u4E2A\u5B57\u7B26\u4E32,\u627E\u51FA\u6240\u6709\u5305\u542B\u5728\u5B57\u5178\u4E2D\u7684dp[i][j],\u7136\u540E\u8BBE\u7F6E\u4E3A0</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>sentence<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> j <span class="token keyword">in</span> i<span class="token punctuation">..</span>sentence<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> set<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>s<span class="token punctuation">[</span>i<span class="token punctuation">..=</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> j <span class="token operator">-</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// println!(&quot;dp={:?}&quot;, dp);</span>
        <span class="token comment">//\u7B2C\u4E8C\u6B65,\u7531\u77ED\u53D8\u957F\u904D\u5386\u6574\u4E2Adp,\u6700\u7EC8\u5F97\u51FA\u7ED3\u679C</span>
        <span class="token keyword">for</span> step <span class="token keyword">in</span> <span class="token number">1</span><span class="token punctuation">..</span>sentence<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>sentence<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> step <span class="token punctuation">{</span>
                <span class="token comment">//\u4ECEi\u5F00\u59CB\u5F80\u540E\u8D70step\u6B65\u6070\u597D\u662F\u4E00\u4E2A\u5355\u8BCD</span>
                <span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token operator">&amp;</span>s<span class="token punctuation">[</span>i<span class="token punctuation">..=</span><span class="token punctuation">(</span>i <span class="token operator">+</span> step<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>i <span class="token operator">+</span> step<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
                    <span class="token keyword">continue</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token comment">// if total == &quot;jesslooked&quot; {</span>
                <span class="token comment">//     println!(&quot;total={}&quot;, total);</span>
                <span class="token comment">// }</span>
                <span class="token comment">//\u6CA1\u6709\u7EC4\u6210\u4E00\u4E2A\u5355\u8BCD,\u5C31\u5F00\u59CB\u5207\u5206,\u627E\u51FA\u5207\u5206\u7EC4\u5408\u4E2D\u6700\u5C0F\u7684\u60C5\u51B5</span>
                <span class="token keyword">let</span> <span class="token keyword">mut</span> expected <span class="token operator">=</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>i <span class="token operator">+</span> step<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>step <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>i <span class="token operator">+</span> j<span class="token punctuation">]</span> <span class="token operator">+</span> dp<span class="token punctuation">[</span>i <span class="token operator">+</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>i <span class="token operator">+</span> step<span class="token punctuation">]</span> <span class="token operator">&lt;</span> expected <span class="token punctuation">{</span>
                        expected <span class="token operator">=</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>i <span class="token operator">+</span> j<span class="token punctuation">]</span> <span class="token operator">+</span> dp<span class="token punctuation">[</span>i <span class="token operator">+</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>i <span class="token operator">+</span> step<span class="token punctuation">]</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
                dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>i <span class="token operator">+</span> step<span class="token punctuation">]</span> <span class="token operator">=</span> expected<span class="token punctuation">;</span>
                <span class="token comment">// println!(&quot;total={},dp[{}][{}]={}&quot;, total, i, step, dp[i][step]);</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>sentence<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token keyword">i32</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token attribute attr-name">#[cfg(test)]</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">tests</span> <span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span>vec_str_to_string<span class="token punctuation">;</span>
    <span class="token attribute attr-name">#[test]</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">it_works</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">respace</span><span class="token punctuation">(</span>
            <span class="token function">vec_str_to_string</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token string">&quot;looked&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;just&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;like&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;her&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;brother&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token string">&quot;lookedjust&quot;</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">respace</span><span class="token punctuation">(</span>
            <span class="token function">vec_str_to_string</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token string">&quot;looked&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;just&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;like&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;her&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;brother&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token string">&quot;jesslooked&quot;</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">respace</span><span class="token punctuation">(</span>
            <span class="token function">vec_str_to_string</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token string">&quot;looked&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;just&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;like&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;her&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;brother&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token string">&quot;jesslookedjustliketimherbrother&quot;</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">respace</span><span class="token punctuation">(</span>
            <span class="token function">vec_str_to_string</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token string">&quot;looked&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;just&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;like&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;her&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;brother&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">respace</span><span class="token punctuation">(</span>
            <span class="token function">vec_str_to_string</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;just&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;like&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;her&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;brother&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token string">&quot;a&quot;</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br></div></div><h2 id="\u4E00\u70B9\u611F\u609F" tabindex="-1">\u4E00\u70B9\u611F\u609F <a class="header-anchor" href="#\u4E00\u70B9\u611F\u609F" aria-hidden="true">#</a></h2><p>\u770B\u4E86\u522B\u4EBA\u7684\u7B54\u6848,\u597D\u50CF\u590D\u6742\u5EA6\u6BD4\u6211\u8FD9\u4E2A\u597D\u5F97\u591A,\u540E\u7EED\u4F1A\u518D\u6765\u4E00\u7BC7\u4F18\u5316\u7684\u65B9\u6848</p><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u7684<a href="https://github.com/nkbai/rust-leetcode" target="_blank" rel="noopener noreferrer">github</a>,\u672C\u9879\u76EE\u6587\u7AE0\u6240\u6709\u4EE3\u7801\u90FD\u53EF\u4EE5\u627E\u5230.</p>`,17),e=[o];function c(u,l,i,r,k,b){return a(),s("div",null,e)}var q=n(t,[["render",c]]);export{d as __pageData,q as default};
