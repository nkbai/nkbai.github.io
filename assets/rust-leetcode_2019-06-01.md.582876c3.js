import{_ as n,c as s,o as a,a as p}from"./app.8cf0e725.js";const b='{"title":"2. \u4E24\u6570\u76F8\u52A0","description":"","frontmatter":{"title":"2. \u4E24\u6570\u76F8\u52A0","date":"2019-06-01T03:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["\u6280\u672F\u76F8\u5173"]},"headers":[{"level":2,"title":"\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-06-01) \u4E24\u6570\u76F8\u52A0","slug":"\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-06-01-\u4E24\u6570\u76F8\u52A0"},{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":2,"title":"\u89E3\u9898\u8FC7\u7A0B","slug":"\u89E3\u9898\u8FC7\u7A0B"},{"level":2,"title":"\u4E00\u70B9\u611F\u609F","slug":"\u4E00\u70B9\u611F\u609F"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"rust-leetcode/2019-06-01.md"}',t={},e=p(`<h2 id="\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-06-01-\u4E24\u6570\u76F8\u52A0" tabindex="-1">\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-06-01) \u4E24\u6570\u76F8\u52A0 <a class="header-anchor" href="#\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-06-01-\u4E24\u6570\u76F8\u52A0" aria-hidden="true">#</a></h2><p>\u575A\u6301\u6BCF\u5929\u4E00\u9053\u9898,\u5237\u9898\u5B66\u4E60Rust.</p><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p><a href="https://leetcode-cn.com/problems/add-two-numbers/" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/add-two-numbers/</a> \u7ED9\u51FA\u4E24\u4E2A \u975E\u7A7A \u7684\u94FE\u8868\u7528\u6765\u8868\u793A\u4E24\u4E2A\u975E\u8D1F\u7684\u6574\u6570\u3002\u5176\u4E2D\uFF0C\u5B83\u4EEC\u5404\u81EA\u7684\u4F4D\u6570\u662F\u6309\u7167 \u9006\u5E8F \u7684\u65B9\u5F0F\u5B58\u50A8\u7684\uFF0C\u5E76\u4E14\u5B83\u4EEC\u7684\u6BCF\u4E2A\u8282\u70B9\u53EA\u80FD\u5B58\u50A8 \u4E00\u4F4D \u6570\u5B57\u3002</p><p>\u5982\u679C\uFF0C\u6211\u4EEC\u5C06\u8FD9\u4E24\u4E2A\u6570\u76F8\u52A0\u8D77\u6765\uFF0C\u5219\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u94FE\u8868\u6765\u8868\u793A\u5B83\u4EEC\u7684\u548C\u3002</p><p>\u60A8\u53EF\u4EE5\u5047\u8BBE\u9664\u4E86\u6570\u5B57 0 \u4E4B\u5916\uFF0C\u8FD9\u4E24\u4E2A\u6570\u90FD\u4E0D\u4F1A\u4EE5 0 \u5F00\u5934\u3002</p><p>\u793A\u4F8B\uFF1A</p><p>\u8F93\u5165\uFF1A(2 -&gt; 4 -&gt; 3) + (5 -&gt; 6 -&gt; 4) \u8F93\u51FA\uFF1A7 -&gt; 0 -&gt; 8 \u539F\u56E0\uFF1A342 + 465 = 807</p><h2 id="\u89E3\u9898\u8FC7\u7A0B" tabindex="-1">\u89E3\u9898\u8FC7\u7A0B <a class="header-anchor" href="#\u89E3\u9898\u8FC7\u7A0B" aria-hidden="true">#</a></h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">add_two_numbers</span><span class="token punctuation">(</span>
        l1<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Box</span><span class="token operator">&lt;</span><span class="token class-name">ListNode</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
        l2<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Box</span><span class="token operator">&lt;</span><span class="token class-name">ListNode</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Box</span><span class="token operator">&lt;</span><span class="token class-name">ListNode</span><span class="token operator">&gt;&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token punctuation">(</span><span class="token keyword">mut</span> p<span class="token punctuation">,</span> <span class="token keyword">mut</span> q<span class="token punctuation">,</span> <span class="token keyword">mut</span> carry<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span>l1<span class="token punctuation">,</span> l2<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> head <span class="token operator">=</span> <span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token class-name">Box</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> current <span class="token operator">=</span> head<span class="token punctuation">.</span><span class="token function">as_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> p<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> q<span class="token punctuation">.</span><span class="token function">is_some</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> <span class="token keyword">mut</span> sum <span class="token operator">=</span> carry<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token keyword">let</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">=</span> p <span class="token punctuation">{</span>
                sum <span class="token operator">+=</span> v<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
                p <span class="token operator">=</span> v<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token keyword">let</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">=</span> q <span class="token punctuation">{</span>
                sum <span class="token operator">+=</span> v<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
                q <span class="token operator">=</span> v<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            carry <span class="token operator">=</span> sum <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> v <span class="token operator">=</span> current<span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            v<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token class-name">Box</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span>sum <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            current <span class="token operator">=</span> v<span class="token punctuation">.</span>next<span class="token punctuation">.</span><span class="token function">as_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> carry <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> v <span class="token operator">=</span> current<span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            v<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token class-name">Box</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span>carry<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        head<span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="\u4E00\u70B9\u611F\u609F" tabindex="-1">\u4E00\u70B9\u611F\u609F <a class="header-anchor" href="#\u4E00\u70B9\u611F\u609F" aria-hidden="true">#</a></h2><p>rust\u8BED\u8A00\u548C\u4EE5\u524D\u63A5\u89E6\u5230\u7684c++,java,go\u8FD9\u4E9B\u6700\u5927\u7684\u533A\u522B\u5C31\u662F<strong>\u6CA1\u6709\u96F6\u503C</strong>. \u56E0\u4E3A\u8FD9\u4E2A\u539F\u56E0,\u6240\u6709\u5B83\u63D0\u4F9B\u4E86Option,\u5E94\u8BE5\u662F\u4E60\u60EF\u7684\u539F\u56E0,\u7528\u8D77\u6765\u662F\u76F8\u5F53\u5927\u4E0D\u987A\u624B. \u8FD9\u4E2A\u9898\u96BE\u70B9\u5C31\u662F\u5728\u719F\u6089rust\u7684\u7528\u6CD5,\u7B97\u6CD5\u672C\u8EAB\u601D\u8DEF\u5F88\u6E05\u6670.</p><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u7684<a href="https://github.com/nkbai" target="_blank" rel="noopener noreferrer">github</a>,\u672C\u9879\u76EE\u6587\u7AE0\u6240\u6709\u4EE3\u7801\u90FD\u53EF\u4EE5\u627E\u5230.</p>`,14),o=[e];function c(l,u,r,k,i,m){return a(),s("div",null,o)}var h=n(t,[["render",c]]);export{b as __pageData,h as default};