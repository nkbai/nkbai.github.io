import{_ as n,c as s,o as a,a as p}from"./app.e7435feb.js";const d='{"title":"525. \u8FDE\u7EED\u6570\u7EC4","description":"","frontmatter":{"title":"525. \u8FDE\u7EED\u6570\u7EC4","date":"2019-12-05T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["\u6280\u672F\u76F8\u5173"],"plugins":["viz"]},"headers":[{"level":2,"title":"\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-12-06)","slug":"\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-12-06"},{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":2,"title":"\u89E3\u9898\u601D\u8DEF","slug":"\u89E3\u9898\u601D\u8DEF"},{"level":2,"title":"\u89E3\u9898\u8FC7\u7A0B","slug":"\u89E3\u9898\u8FC7\u7A0B"},{"level":2,"title":"\u4E00\u70B9\u611F\u609F","slug":"\u4E00\u70B9\u611F\u609F"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"rust-leetcode/2019-12-06.md"}',t={},e=p(`<h2 id="\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-12-06" tabindex="-1">\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-12-06) <a class="header-anchor" href="#\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-12-06" aria-hidden="true">#</a></h2><p>\u575A\u6301\u6BCF\u5929\u4E00\u9053\u9898,\u5237\u9898\u5B66\u4E60Rust.</p><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u7ED9\u5B9A\u4E00\u4E2A\u4E8C\u8FDB\u5236\u6570\u7EC4, \u627E\u5230\u542B\u6709\u76F8\u540C\u6570\u91CF\u7684 0 \u548C 1 \u7684\u6700\u957F\u8FDE\u7EED\u5B50\u6570\u7EC4\uFF08\u7684\u957F\u5EA6\uFF09\u3002</p><p>\u793A\u4F8B 1:</p><p>\u8F93\u5165: [0,1] \u8F93\u51FA: 2 \u8BF4\u660E: [0, 1] \u662F\u5177\u6709\u76F8\u540C\u6570\u91CF0\u548C1\u7684\u6700\u957F\u8FDE\u7EED\u5B50\u6570\u7EC4\u3002 \u793A\u4F8B 2:</p><p>\u8F93\u5165: [0,1,0] \u8F93\u51FA: 2 \u8BF4\u660E: [0, 1] (\u6216 [1, 0]) \u662F\u5177\u6709\u76F8\u540C\u6570\u91CF0\u548C1\u7684\u6700\u957F\u8FDE\u7EED\u5B50\u6570\u7EC4\u3002</p><p>\u6CE8\u610F:\xA0\u7ED9\u5B9A\u7684\u4E8C\u8FDB\u5236\u6570\u7EC4\u7684\u957F\u5EA6\u4E0D\u4F1A\u8D85\u8FC750000\u3002</p><p>\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09 \u94FE\u63A5\uFF1A<a href="https://leetcode-cn.com/problems/contiguous-array" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/contiguous-array</a> \u8457\u4F5C\u6743\u5F52\u9886\u6263\u7F51\u7EDC\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u5B98\u65B9\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p><h2 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1">\u89E3\u9898\u601D\u8DEF <a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a></h2><p>\u6BD4\u5982111011101 \u5C060\u770B\u505A-1,\u7136\u540E\u8BB0\u5F55\u4ECE\u8D77\u59CB\u5230\u73B0\u5728\u7684\u7D2F\u52A0\u548C,\u7136\u540E\u5BF9\u5E94\u4E00\u4E2A\u4E0B\u6807 \u90A3\u4E48\u4E0A\u9762\u7684\u4F8B\u5B50\u5BF9\u5E94\u7684\u5C31\u662F 1 2 3 2 3 4 5 4 5 0 1 2 3 4 5 6 7 8 \u53EA\u9700\u8BB0\u5F55\u4E00\u4E2A\u6570\u7B2C\u4E00\u6B21\u51FA\u73B0\u7684\u6B21\u6570, \u6BD4\u5982\u5982\u679C\u7B2C\u4E00\u6B21\u51FA\u73B02,\u540E\u9762\u51FA\u73B0\u4E86\u4E24\u6B212,\u90A3\u4E48\u6700\u957F\u7684\u8DDD\u79BB\u5C31\u662F\u6700\u540E\u4E00\u6B212\u7684\u4E0B\u6807\u51CF\u53BB\u7B2C\u4E00\u6B21\u7684\u4E0B\u6807</p><h2 id="\u89E3\u9898\u8FC7\u7A0B" tabindex="-1">\u89E3\u9898\u8FC7\u7A0B <a class="header-anchor" href="#\u89E3\u9898\u8FC7\u7A0B" aria-hidden="true">#</a></h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>collections<span class="token punctuation">::</span>hash_map<span class="token punctuation">::</span></span><span class="token class-name">Entry</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>collections<span class="token punctuation">::</span></span><span class="token class-name">HashMap</span><span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">find_max_length</span><span class="token punctuation">(</span>nums<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> m <span class="token operator">=</span> <span class="token class-name">HashMap</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        m<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u521D\u59CB\u548C\u5C31\u662F0,\u4E0B\u6807\u4E3A-1,\u8FD9\u6837\u5C31\u7B97\u662F\u6709\u591A\u4E2A0\u4E5F\u4E0D\u4F1A\u8BB0\u9519</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> nums<span class="token punctuation">.</span><span class="token function">iter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">enumerate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token operator">*</span>i<span class="token number">.1</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
                sum <span class="token operator">+=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                sum <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">match</span> m<span class="token punctuation">.</span><span class="token function">entry</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">Entry</span><span class="token punctuation">::</span><span class="token class-name">Occupied</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> i<span class="token number">.0</span> <span class="token keyword">as</span> <span class="token keyword">i32</span> <span class="token operator">-</span> <span class="token operator">*</span>e<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> max <span class="token punctuation">{</span>
                        max <span class="token operator">=</span> i<span class="token number">.0</span> <span class="token keyword">as</span> <span class="token keyword">i32</span> <span class="token operator">-</span> <span class="token operator">*</span>e<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
                <span class="token class-name">Entry</span><span class="token punctuation">::</span><span class="token class-name">Vacant</span><span class="token punctuation">(</span><span class="token keyword">mut</span> e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>i<span class="token number">.0</span> <span class="token keyword">as</span> <span class="token keyword">i32</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        max <span class="token keyword">as</span> <span class="token keyword">i32</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token attribute attr-name">#[cfg(test)]</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">test</span> <span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share</span><span class="token punctuation">;</span>
    <span class="token attribute attr-name">#[test]</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">test_reverse_list</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">find_max_length</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><h2 id="\u4E00\u70B9\u611F\u609F" tabindex="-1">\u4E00\u70B9\u611F\u609F <a class="header-anchor" href="#\u4E00\u70B9\u611F\u609F" aria-hidden="true">#</a></h2><p>\u7ECF\u8FC7\u4E00\u4E2A\u7B80\u5355\u7684\u8F6C\u6362\u5C31\u628AO(n^2)\u7684\u590D\u6742\u5EA6\u964D\u4F4E\u5230\u4E86O(n)</p><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u7684<a href="https://github.com/nkbai/rust-leetcode" target="_blank" rel="noopener noreferrer">github</a>,\u672C\u9879\u76EE\u6587\u7AE0\u6240\u6709\u4EE3\u7801\u90FD\u53EF\u4EE5\u627E\u5230.</p>`,17),o=[e];function c(l,u,r,i,k,m){return a(),s("div",null,o)}var h=n(t,[["render",c]]);export{d as __pageData,h as default};
