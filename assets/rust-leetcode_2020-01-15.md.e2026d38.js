import{_ as n,c as s,o as a,a as p}from"./app.8cf0e725.js";const d='{"title":"122. \u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A II","description":"","frontmatter":{"title":"122. \u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A II","date":"2020-01-14T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["\u6280\u672F\u76F8\u5173"],"plugins":["viz"]},"headers":[{"level":2,"title":"\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2020-01-15)","slug":"\u6BCF\u5929\u4E00\u9053rust-leetcode-2020-01-15"},{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":2,"title":"\u89E3\u9898\u601D\u8DEF","slug":"\u89E3\u9898\u601D\u8DEF"},{"level":2,"title":"\u89E3\u9898\u8FC7\u7A0B","slug":"\u89E3\u9898\u8FC7\u7A0B"},{"level":2,"title":"\u4E00\u70B9\u611F\u609F","slug":"\u4E00\u70B9\u611F\u609F"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"rust-leetcode/2020-01-15.md"}',t={},e=p(`<h2 id="\u6BCF\u5929\u4E00\u9053rust-leetcode-2020-01-15" tabindex="-1">\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2020-01-15) <a class="header-anchor" href="#\u6BCF\u5929\u4E00\u9053rust-leetcode-2020-01-15" aria-hidden="true">#</a></h2><p>\u575A\u6301\u6BCF\u5929\u4E00\u9053\u9898,\u5237\u9898\u5B66\u4E60Rust.</p><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u7ED9\u5B9A\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5B83\u7684\u7B2C\xA0i \u4E2A\u5143\u7D20\u662F\u4E00\u652F\u7ED9\u5B9A\u80A1\u7968\u7B2C i \u5929\u7684\u4EF7\u683C\u3002</p><p>\u8BBE\u8BA1\u4E00\u4E2A\u7B97\u6CD5\u6765\u8BA1\u7B97\u4F60\u6240\u80FD\u83B7\u53D6\u7684\u6700\u5927\u5229\u6DA6\u3002\u4F60\u53EF\u4EE5\u5C3D\u53EF\u80FD\u5730\u5B8C\u6210\u66F4\u591A\u7684\u4EA4\u6613\uFF08\u591A\u6B21\u4E70\u5356\u4E00\u652F\u80A1\u7968\uFF09\u3002</p><p>\u6CE8\u610F\uFF1A\u4F60\u4E0D\u80FD\u540C\u65F6\u53C2\u4E0E\u591A\u7B14\u4EA4\u6613\uFF08\u4F60\u5FC5\u987B\u5728\u518D\u6B21\u8D2D\u4E70\u524D\u51FA\u552E\u6389\u4E4B\u524D\u7684\u80A1\u7968\uFF09\u3002</p><p>\u793A\u4F8B 1:</p><p>\u8F93\u5165: [7,1,5,3,6,4] \u8F93\u51FA: 7 \u89E3\u91CA: \u5728\u7B2C 2 \u5929\uFF08\u80A1\u7968\u4EF7\u683C = 1\uFF09\u7684\u65F6\u5019\u4E70\u5165\uFF0C\u5728\u7B2C 3 \u5929\uFF08\u80A1\u7968\u4EF7\u683C = 5\uFF09\u7684\u65F6\u5019\u5356\u51FA, \u8FD9\u7B14\u4EA4\u6613\u6240\u80FD\u83B7\u5F97\u5229\u6DA6 = 5-1 = 4 \u3002 \u968F\u540E\uFF0C\u5728\u7B2C 4 \u5929\uFF08\u80A1\u7968\u4EF7\u683C = 3\uFF09\u7684\u65F6\u5019\u4E70\u5165\uFF0C\u5728\u7B2C 5 \u5929\uFF08\u80A1\u7968\u4EF7\u683C = 6\uFF09\u7684\u65F6\u5019\u5356\u51FA, \u8FD9\u7B14\u4EA4\u6613\u6240\u80FD\u83B7\u5F97\u5229\u6DA6 = 6-3 = 3 \u3002 \u793A\u4F8B 2:</p><p>\u8F93\u5165: [1,2,3,4,5] \u8F93\u51FA: 4 \u89E3\u91CA: \u5728\u7B2C 1 \u5929\uFF08\u80A1\u7968\u4EF7\u683C = 1\uFF09\u7684\u65F6\u5019\u4E70\u5165\uFF0C\u5728\u7B2C 5 \u5929 \uFF08\u80A1\u7968\u4EF7\u683C = 5\uFF09\u7684\u65F6\u5019\u5356\u51FA, \u8FD9\u7B14\u4EA4\u6613\u6240\u80FD\u83B7\u5F97\u5229\u6DA6 = 5-1 = 4 \u3002 \u6CE8\u610F\u4F60\u4E0D\u80FD\u5728\u7B2C 1 \u5929\u548C\u7B2C 2 \u5929\u63A5\u8FDE\u8D2D\u4E70\u80A1\u7968\uFF0C\u4E4B\u540E\u518D\u5C06\u5B83\u4EEC\u5356\u51FA\u3002 \u56E0\u4E3A\u8FD9\u6837\u5C5E\u4E8E\u540C\u65F6\u53C2\u4E0E\u4E86\u591A\u7B14\u4EA4\u6613\uFF0C\u4F60\u5FC5\u987B\u5728\u518D\u6B21\u8D2D\u4E70\u524D\u51FA\u552E\u6389\u4E4B\u524D\u7684\u80A1\u7968\u3002 \u793A\u4F8B\xA03:</p><p>\u8F93\u5165: [7,6,4,3,1] \u8F93\u51FA: 0 \u89E3\u91CA: \u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B, \u6CA1\u6709\u4EA4\u6613\u5B8C\u6210, \u6240\u4EE5\u6700\u5927\u5229\u6DA6\u4E3A 0\u3002</p><p>\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09 \u94FE\u63A5\uFF1A<a href="https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii</a> \u8457\u4F5C\u6743\u5F52\u9886\u6263\u7F51\u7EDC\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u5B98\u65B9\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p><h2 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1">\u89E3\u9898\u601D\u8DEF <a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a></h2><p>\u6709\u4E00\u70B9\u80AF\u5B9A\u662F\u771F\u7684: \u6211\u6574\u4F53\u7684\u6700\u597D\u6536\u76CA\u53D6\u51B3\u4E8E\u5386\u53F2\u6536\u76CA+\u672A\u6765\u6536\u76CA \u5728\u5F53\u524D\u72B6\u6001: \u6211\u7684\u6700\u597D\u6536\u76CA\u4E0D\u5916\u4E4E\u4E24\u79CD\u60C5\u51B5,\u6301\u6709\u80A1\u7968\u6216\u8005\u4E0D\u6301\u6709\u80A1\u7968\u4E24\u79CD\u60C5\u51B5 \u90A3\u4E48\u660E\u5929\u6211\u7684\u72B6\u6001\u5C31\u662F\u57FA\u4E8E\u8FD9\u4E24\u79CD\u60C5\u51B5\u5411\u524D\u7EE7\u7EED\u6EDA\u52A8 \u4EA4\u6613\u6B21\u6570\u4E0D\u9650\u5236,\u90A3\u5C31\u4E0D\u7528\u5173\u5FC3\u4E70\u5356\u6B21\u6570 dp[i][k][state] state:0 \u8868\u793A\u6301\u6709\u80A1\u7968,1\u8868\u793A\u4E0D\u6301\u6709\u80A1\u7968 dp\u91CC\u9762\u5B58\u50A8\u7684\u662F\u8FD9\u4E2A\u72B6\u6001\u5BF9\u5E94\u7684\u5229\u6DA6 <a href="https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solution/yi-ge-fang-fa-tuan-mie-6-dao-gu-piao-wen-ti-by-l-2/" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solution/yi-ge-fang-fa-tuan-mie-6-dao-gu-piao-wen-ti-by-l-2/</a></p><h2 id="\u89E3\u9898\u8FC7\u7A0B" tabindex="-1">\u89E3\u9898\u8FC7\u7A0B <a class="header-anchor" href="#\u89E3\u9898\u8FC7\u7A0B" aria-hidden="true">#</a></h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cmp<span class="token punctuation">::</span></span>max<span class="token punctuation">;</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
 
    <span class="token comment">//\u6309\u7167\u6846\u67B6\u6765\u5199\u7684\u65B9\u6CD5</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">max_profit</span><span class="token punctuation">(</span>prices<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> prices<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> dp <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">;</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span> prices<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span>prices<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//\u521D\u59CB\u4E0D\u6301\u6709\u80A1\u7968\u7684\u5229\u6DA6\u662F0,\u6301\u6709\u80A1\u7968\u8868\u793A\u7B2C\u4E00\u5929\u4E70\u5165\u4E86,\u90A3\u4E48\u4ED6\u7684\u5229\u6DA6\u5C31\u662F\u8D1F\u6570</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token punctuation">..</span>prices<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u7B2Ci\u5929\u4E0D\u6301\u6709\u80A1\u7968\u4E0D\u5916\u4E4E\u4E24\u79CD\u60C5\u51B5,\u524D\u4E00\u5929\u6CA1\u6709\u6301\u6709\u80A1\u7968,\u5356\u6389\u4E86\u524D\u4E00\u5929\u6301\u6709\u7684\u80A1\u7968</span>
            dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5F53\u524D\u6301\u6709\u80A1\u7968,\u4E0D\u5916\u4E4E\u524D\u4E00\u5929\u6301\u6709\u80A1\u7968,\u6216\u8005\u4ECA\u5929\u4E70\u5165\u4E86</span>
        <span class="token punctuation">}</span>
        dp<span class="token punctuation">[</span>prices<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token attribute attr-name">#[cfg(test)]</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">test</span> <span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>

    <span class="token attribute attr-name">#[test]</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">max_profit</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="\u4E00\u70B9\u611F\u609F" tabindex="-1">\u4E00\u70B9\u611F\u609F <a class="header-anchor" href="#\u4E00\u70B9\u611F\u609F" aria-hidden="true">#</a></h2><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u7684<a href="https://github.com/nkbai/rust-leetcode" target="_blank" rel="noopener noreferrer">github</a>,\u672C\u9879\u76EE\u6587\u7AE0\u6240\u6709\u4EE3\u7801\u90FD\u53EF\u4EE5\u627E\u5230.</p>`,18),o=[e];function c(l,u,i,r,k,b){return a(),s("div",null,o)}var h=n(t,[["render",c]]);export{d as __pageData,h as default};