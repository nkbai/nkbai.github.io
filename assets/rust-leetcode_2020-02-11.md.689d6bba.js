import{o as n,c as s,e as a}from"./app.d25b71ec.js";const p='{"title":"673. 最长递增子序列的个数","description":"","frontmatter":{"title":"673. 最长递增子序列的个数","date":"2020-02-10T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["技术相关"],"plugins":["viz"]},"headers":[{"level":2,"title":"每天一道Rust-LeetCode(2020-02-11)","slug":"每天一道rust-leetcode-2020-02-11"},{"level":2,"title":"题目描述","slug":"题目描述"},{"level":2,"title":"解题思路","slug":"解题思路"},{"level":2,"title":"解题过程","slug":"解题过程"},{"level":2,"title":"一点感悟","slug":"一点感悟"},{"level":2,"title":"其他","slug":"其他"}],"relativePath":"rust-leetcode/2020-02-11.md","lastUpdated":1582015486000}',t={},e=[a('<h2 id="每天一道rust-leetcode-2020-02-11"><a class="header-anchor" href="#每天一道rust-leetcode-2020-02-11" aria-hidden="true">#</a> 每天一道Rust-LeetCode(2020-02-11)</h2><p>坚持每天一道题,刷题学习Rust.</p><h2 id="题目描述"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>给定一个未排序的整数数组，找到最长递增子序列的个数。</p><p>示例 1:</p><p>输入: [1,3,5,4,7] 输出: 2 解释: 有两个最长递增子序列，分别是 [1, 3, 4, 7] 和[1, 3, 5, 7]。 示例 2:</p><p>输入: [2,2,2,2,2] 输出: 5 解释: 最长递增子序列的长度是1，并且存在5个子序列的长度为1，因此输出5。 注意: 给定的数组长度不超过 2000 并且结果一定是32位有符号整数。</p><p>来源：力扣（LeetCode） 链接：<a href="https://leetcode-cn.com/problems/number-of-longest-increasing-subsequence" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/number-of-longest-increasing-subsequence</a> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p><h2 id="解题思路"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>dp[i]表示以i结尾的递增子序列的最大长度以及以及个数 比如 2 1 3 4 5 dp[0]={1,1} dp[1]={1,1} dp[2]={2,2} dp[4]={4,2} 那么dp[j]= 遍历0..j之间所有的子序列,如果a[i]&lt;a[j],则取其最大值+1,同时累加相关个数 然后从头遍历,统计最长递增子序列对应的个数</p><h2 id="解题过程"><a class="header-anchor" href="#解题过程" aria-hidden="true">#</a> 解题过程</h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>\n    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">find_number_of_lis</span><span class="token punctuation">(</span>nums<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> nums<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> max_len <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> dp <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        dp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token number">1</span><span class="token punctuation">..</span>nums<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">let</span> nj <span class="token operator">=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>\n            <span class="token keyword">let</span> <span class="token keyword">mut</span> current_max <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n            <span class="token keyword">let</span> <span class="token keyword">mut</span> current_max_count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n            <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>j <span class="token punctuation">{</span>\n                <span class="token keyword">let</span> cmax <span class="token operator">=</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token number">0</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n                <span class="token keyword">if</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> nj <span class="token operator">&amp;&amp;</span> cmax <span class="token operator">&gt;=</span> current_max <span class="token punctuation">{</span>\n                    <span class="token keyword">if</span> cmax <span class="token operator">==</span> current_max <span class="token punctuation">{</span>\n                        current_max_count <span class="token operator">+=</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//相同的长度要累加</span>\n                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n                        current_max <span class="token operator">=</span> cmax<span class="token punctuation">;</span>\n                        current_max_count <span class="token operator">=</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token number">1</span><span class="token punctuation">;</span>\n                    <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n            <span class="token macro property">println!</span><span class="token punctuation">(</span>\n                <span class="token string">&quot;current={},current_max={},current_max_count={}&quot;</span><span class="token punctuation">,</span>\n                nj<span class="token punctuation">,</span> current_max<span class="token punctuation">,</span> current_max_count\n            <span class="token punctuation">)</span><span class="token punctuation">;</span>\n            dp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span>current_max<span class="token punctuation">,</span> current_max_count<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span> max_len <span class="token operator">&lt;</span> current_max <span class="token punctuation">{</span>\n                max_len <span class="token operator">=</span> current_max<span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span>max<span class="token punctuation">,</span> c<span class="token punctuation">)</span> <span class="token keyword">in</span> dp <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> max <span class="token operator">==</span> max_len <span class="token punctuation">{</span>\n                count <span class="token operator">+=</span> c<span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        count\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token attribute attr-name">#[cfg(test)]</span>\n<span class="token keyword">mod</span> <span class="token module-declaration namespace">tests</span> <span class="token punctuation">{</span>\n    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>\n    <span class="token attribute attr-name">#[test]</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">find_number_of_lis</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">find_number_of_lis</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><h2 id="一点感悟"><a class="header-anchor" href="#一点感悟" aria-hidden="true">#</a> 一点感悟</h2><h2 id="其他"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>欢迎关注我的<a href="https://github.com/nkbai/rust-leetcode" target="_blank" rel="noopener noreferrer">github</a>,本项目文章所有代码都可以找到.</p>',15)];t.render=function(a,p,t,o,c,l){return n(),s("div",null,e)};export{p as __pageData,t as default};
