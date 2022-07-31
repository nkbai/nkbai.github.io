import{_ as n,c as s,o as a,a as p}from"./app.8cf0e725.js";const d='{"title":"120. \u4E09\u89D2\u5F62\u6700\u5C0F\u8DEF\u5F84\u548C","description":"","frontmatter":{"title":"120. \u4E09\u89D2\u5F62\u6700\u5C0F\u8DEF\u5F84\u548C","date":"2019-08-13T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["\u6280\u672F\u76F8\u5173"]},"headers":[{"level":2,"title":"\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-08-14)","slug":"\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-08-14"},{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":2,"title":"\u89E3\u9898\u601D\u8DEF","slug":"\u89E3\u9898\u601D\u8DEF"},{"level":2,"title":"\u89E3\u9898\u8FC7\u7A0B","slug":"\u89E3\u9898\u8FC7\u7A0B"},{"level":2,"title":"\u4E00\u70B9\u611F\u609F","slug":"\u4E00\u70B9\u611F\u609F"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"rust-leetcode/2019-08-14.md"}',t={},e=p(`<h2 id="\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-08-14" tabindex="-1">\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-08-14) <a class="header-anchor" href="#\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-08-14" aria-hidden="true">#</a></h2><p>\u575A\u6301\u6BCF\u5929\u4E00\u9053\u9898,\u5237\u9898\u5B66\u4E60Rust.</p><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u7ED9\u5B9A\u4E00\u4E2A\u4E09\u89D2\u5F62\uFF0C\u627E\u51FA\u81EA\u9876\u5411\u4E0B\u7684\u6700\u5C0F\u8DEF\u5F84\u548C\u3002\u6BCF\u4E00\u6B65\u53EA\u80FD\u79FB\u52A8\u5230\u4E0B\u4E00\u884C\u4E2D\u76F8\u90BB\u7684\u7ED3\u70B9\u4E0A\u3002</p><p>\u4F8B\u5982\uFF0C\u7ED9\u5B9A\u4E09\u89D2\u5F62\uFF1A</p><div class="language-"><pre><code>[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u81EA\u9876\u5411\u4E0B\u7684\u6700\u5C0F\u8DEF\u5F84\u548C\u4E3A\xA011\uFF08\u5373\uFF0C2\xA0+\xA03\xA0+\xA05\xA0+\xA01\xA0= 11\uFF09\u3002</p><p>\u8BF4\u660E\uFF1A</p><p>\u5982\u679C\u4F60\u53EF\u4EE5\u53EA\u4F7F\u7528 O(n)\xA0\u7684\u989D\u5916\u7A7A\u95F4\uFF08n \u4E3A\u4E09\u89D2\u5F62\u7684\u603B\u884C\u6570\uFF09\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u90A3\u4E48\u4F60\u7684\u7B97\u6CD5\u4F1A\u5F88\u52A0\u5206\u3002</p><p>\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09 \u94FE\u63A5\uFF1A<a href="https://leetcode-cn.com/problems/triangle" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/triangle</a> \u8457\u4F5C\u6743\u5F52\u9886\u6263\u7F51\u7EDC\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u5B98\u65B9\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p><h2 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1">\u89E3\u9898\u601D\u8DEF <a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a></h2><p>\u81EA\u5E95\u5411\u4E0A \u5148\u6C42\u6700\u4E0B\u9762\u4E00\u884C\u7684\u6700\u5C0F\u8DEF\u5F84,\u5C31\u662F\u4ED6\u81EA\u8EAB. \u7136\u540E\u4F9D\u6B21\u6C42\u51FA\u5012\u6570\u7B2C\u4E8C\u884C\u7684\u6240\u6709\u5143\u7D20\u7684\u6700\u77ED\u8DEF\u5F84. \u4F9D\u6B21\u7C7B\u63A8,\u6700\u7EC8\u5F97\u51FA\u81EA\u9876\u5411\u4E0B\u7684\u6700\u77ED\u8DEF\u5F84. \u65F6\u95F4\u590D\u6742\u5EA6\u4E3AO(N) N\u4E3A\u6240\u6709\u5143\u7D20\u7684\u4E2A\u6570 \u7A7A\u95F4\u590D\u6742\u5EA6\u4E3AO(n) n\u4E3A\u4E09\u89D2\u5F62\u603B\u884C\u6570</p><h2 id="\u89E3\u9898\u8FC7\u7A0B" tabindex="-1">\u89E3\u9898\u8FC7\u7A0B <a class="header-anchor" href="#\u89E3\u9898\u8FC7\u7A0B" aria-hidden="true">#</a></h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">minimum_total</span><span class="token punctuation">(</span>triangle<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> row <span class="token operator">=</span> triangle<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> path <span class="token operator">=</span> triangle<span class="token punctuation">[</span>row <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> path<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token punctuation">{</span>
            row <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> rv <span class="token operator">=</span> triangle<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>row <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>row <span class="token punctuation">{</span>
                <span class="token keyword">let</span> m <span class="token operator">=</span> path<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>path<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u4FDD\u8BC1\u4E0D\u4F1A\u8D8A\u754C\u7684</span>
                path<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> m <span class="token operator">+</span> rv<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            path<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u6254\u6389\u6700\u540E\u4E00\u4E2A</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> path<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token attribute attr-name">#[cfg(test)]</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">tests</span> <span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token attribute attr-name">#[test]</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">test_mininum_total</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>
            <span class="token number">11</span><span class="token punctuation">,</span>
            <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">minimum_total</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="\u4E00\u70B9\u611F\u609F" tabindex="-1">\u4E00\u70B9\u611F\u609F <a class="header-anchor" href="#\u4E00\u70B9\u611F\u609F" aria-hidden="true">#</a></h2><p>\u4F7F\u7528rust\u786E\u5B9E\u80FD\u8BA9\u601D\u8DEF\u66F4\u6E05\u6670,\u4F7F\u5F97\u901A\u8FC7\u7387\u66F4\u9AD8.</p><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u7684<a href="https://github.com/nkbai" target="_blank" rel="noopener noreferrer">github</a>,\u672C\u9879\u76EE\u6587\u7AE0\u6240\u6709\u4EE3\u7801\u90FD\u53EF\u4EE5\u627E\u5230.</p>`,18),o=[e];function c(l,u,r,i,k,b){return a(),s("div",null,o)}var h=n(t,[["render",c]]);export{d as __pageData,h as default};