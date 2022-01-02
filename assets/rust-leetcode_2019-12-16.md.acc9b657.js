import{o as n,c as s,e as a}from"./app.d25b71ec.js";const p='{"title":"84. 柱状图中最大的矩形","description":"","frontmatter":{"title":"84. 柱状图中最大的矩形","date":"2019-12-15T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["技术相关"],"plugins":["viz"]},"headers":[{"level":2,"title":"每天一道Rust-LeetCode(2019-12-16)","slug":"每天一道rust-leetcode-2019-12-16"},{"level":2,"title":"题目描述","slug":"题目描述"},{"level":2,"title":"解题思路","slug":"解题思路"},{"level":2,"title":"解题过程","slug":"解题过程"},{"level":2,"title":"一点感悟","slug":"一点感悟"},{"level":2,"title":"其他","slug":"其他"}],"relativePath":"rust-leetcode/2019-12-16.md","lastUpdated":1582015486000}',t={},e=[a('<h2 id="每天一道rust-leetcode-2019-12-16"><a class="header-anchor" href="#每天一道rust-leetcode-2019-12-16" aria-hidden="true">#</a> 每天一道Rust-LeetCode(2019-12-16)</h2><p>坚持每天一道题,刷题学习Rust.</p><h2 id="题目描述"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。</p><p>求在该柱状图中，能够勾勒出来的矩形的最大面积。</p><p><img alt="" data-src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/histogram.png" loading="lazy" class="lazy"></p><p>以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。</p><p><img alt="" data-src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/histogram_area.png" loading="lazy" class="lazy"></p><p>图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。</p><p>示例:</p><p>输入: [2,1,5,6,2,3] 输出: 10</p><p>来源：力扣（LeetCode） 链接：<a href="https://leetcode-cn.com/problems/largest-rectangle-in-histogram" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/largest-rectangle-in-histogram</a> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p><h2 id="解题思路"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>考虑到矩形的面积是由最矮的柱子决定的, 那么只要记录[j,i]之间最矮的柱子,那么[j,i]的面积就决定了是(i-j+1)*min 对于一个新来的柱子,都要遍历以前所有的组合 所以复杂度是O(N^2)</p><h2 id="解题过程"><a class="header-anchor" href="#解题过程" aria-hidden="true">#</a> 解题过程</h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cmp<span class="token punctuation">::</span></span><span class="token punctuation">{</span>max<span class="token punctuation">,</span> min<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>\n    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">largest_rectangle_area</span><span class="token punctuation">(</span>heights<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> lowest <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        heights<span class="token punctuation">.</span><span class="token function">iter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">for_each</span><span class="token punctuation">(</span><span class="token closure-params"><span class="token closure-punctuation punctuation">|</span>_<span class="token closure-punctuation punctuation">|</span></span> <span class="token punctuation">{</span>\n            lowest<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> max_area <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token comment">//lowest[j]表示从当前i到j的最矮的柱子高度</span>\n        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>heights<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            lowest<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> heights<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//从i到i的最矮柱子就是i本身</span>\n            max_area <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>max_area<span class="token punctuation">,</span> heights<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">..</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rev</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                lowest<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">min</span><span class="token punctuation">(</span>heights<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> lowest<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[j,i]区间</span>\n                max_area <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>max_area<span class="token punctuation">,</span> <span class="token punctuation">(</span>i <span class="token operator">-</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token keyword">i32</span> <span class="token operator">*</span> lowest<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        max_area\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token attribute attr-name">#[cfg(test)]</span>\n<span class="token keyword">mod</span> <span class="token module-declaration namespace">test</span> <span class="token punctuation">{</span>\n    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>\n    <span class="token attribute attr-name">#[test]</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">largest_rectangle_area</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">largest_rectangle_area</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">largest_rectangle_area</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="一点感悟"><a class="header-anchor" href="#一点感悟" aria-hidden="true">#</a> 一点感悟</h2><h2 id="其他"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>欢迎关注我的<a href="https://github.com/nkbai/rust-leetcode" target="_blank" rel="noopener noreferrer">github</a>,本项目文章所有代码都可以找到.</p>',19)];t.render=function(a,p,t,o,c,l){return n(),s("div",null,e)};export{p as __pageData,t as default};
