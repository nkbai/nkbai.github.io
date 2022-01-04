import{o as n,c as s,e as a}from"./app.f8197458.js";const p='{"title":"188. 买卖股票的最佳时机 IV-3","description":"","frontmatter":{"title":"188. 买卖股票的最佳时机 IV-3","date":"2020-01-20T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["技术相关"],"plugins":["viz"]},"headers":[{"level":2,"title":"每天一道Rust-LeetCode(2020-01-21)","slug":"每天一道rust-leetcode-2020-01-21"},{"level":2,"title":"题目描述","slug":"题目描述"},{"level":2,"title":"解题思路","slug":"解题思路"},{"level":2,"title":"解题过程","slug":"解题过程"},{"level":2,"title":"一点感悟","slug":"一点感悟"},{"level":2,"title":"其他","slug":"其他"}],"relativePath":"rust-leetcode/2020-01-21.md","lastUpdated":1582015486000}',t={},e=[a('<h2 id="每天一道rust-leetcode-2020-01-21"><a class="header-anchor" href="#每天一道rust-leetcode-2020-01-21" aria-hidden="true">#</a> 每天一道Rust-LeetCode(2020-01-21)</h2><p>坚持每天一道题,刷题学习Rust.</p><h2 id="题目描述"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。</p><p>设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。</p><p>注意: 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。</p><p>示例 1:</p><p>输入: [2,4,1], k = 2 输出: 2 解释: 在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。 示例 2:</p><p>输入: [3,2,6,5,0,3], k = 2 输出: 7 解释: 在第 2 天 (股票价格 = 2) 的时候买入，在第 3 天 (股票价格 = 6) 的时候卖出, 这笔交易所能获得利润 = 6-2 = 4 。 随后，在第 5 天 (股票价格 = 0) 的时候买入，在第 6 天 (股票价格 = 3) 的时候卖出, 这笔交易所能获得利润 = 3-0 = 3 。 在真实的面试中遇到</p><p>来源：力扣（LeetCode） 链接：<a href="https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv</a> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p><h2 id="解题思路"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>进一步优化</p><ol><li>如果k&gt;prices.len,那么就退化成了不限制次数,</li><li>考虑到1,5,7,30这样的序列,中间是不可能卖出的,可以移除大部分值</li></ol><h2 id="解题过程"><a class="header-anchor" href="#解题过程" aria-hidden="true">#</a> 解题过程</h2><div class="language-rust line-numbers-mode"><pre><code>    <span class="token comment">//k 很大的时候</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">simple_max_profit</span><span class="token punctuation">(</span>prices<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> prices<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> hold <span class="token operator">=</span> <span class="token operator">-</span>prices<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//持有股票</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> cash <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 不持有股票</span>\n        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token punctuation">..</span>prices<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            cash <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>cash<span class="token punctuation">,</span> hold <span class="token operator">+</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//第i天不持有股票不外乎两种情况,前一天没有持有股票,卖掉了前一天持有的股票</span>\n            hold <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>hold<span class="token punctuation">,</span> cash <span class="token operator">-</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//当前持有股票,不外乎前一天持有股票,或者今天买入了</span>\n        <span class="token punctuation">}</span>\n        cash\n    <span class="token punctuation">}</span>\n    <span class="token comment">//考虑到1,5,7,30这样的序列,中间是不可能卖出的,可以移除大部分值</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">remove_inscrease_order</span><span class="token punctuation">(</span>prices<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> prices<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> prices<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> res <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> cur_min <span class="token operator">=</span> prices<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> cur_max <span class="token operator">=</span> prices<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur_min<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token punctuation">..</span>prices<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">let</span> p <span class="token operator">=</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span> p <span class="token operator">&lt;</span> cur_max <span class="token punctuation">{</span>\n                <span class="token comment">//碰到了新一个由低到高</span>\n                <span class="token keyword">if</span> cur_max <span class="token operator">&gt;</span> cur_min <span class="token punctuation">{</span>\n                    res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur_max<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n                res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                cur_min <span class="token operator">=</span> p<span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            cur_max <span class="token operator">=</span> p<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">if</span> cur_max <span class="token operator">&gt;</span> cur_min <span class="token punctuation">{</span>\n            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur_max<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        res\n    <span class="token punctuation">}</span>\n    <span class="token comment">/*\n    终极优化问题\n    1. 如果k&gt;prices.len,那么就退化成了不限制次数,\n    2. 考虑到1,5,7,30这样的序列,中间是不可能卖出的,可以移除大部分值\n    */</span>\n    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">max_profit</span><span class="token punctuation">(</span>k<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span> prices<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>\n        <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;k={},priceslen={}&quot;</span><span class="token punctuation">,</span> k<span class="token punctuation">,</span> prices<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> k <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> prices<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> k <span class="token operator">=</span> k <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> k <span class="token operator">&gt;=</span> prices<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">simple_max_profit</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>prices<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">let</span> prices <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">remove_inscrease_order</span><span class="token punctuation">(</span>prices<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> dp <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">;</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span> k <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;k={},priceslen={}&quot;</span><span class="token punctuation">,</span> k<span class="token punctuation">,</span> prices<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>k <span class="token punctuation">{</span>\n            dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span>prices<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//剩下k-1次交易,持有股票 ,</span>\n        <span class="token punctuation">}</span>\n        <span class="token comment">//        println!(&quot;dp0={:?}&quot;, dp[0]);</span>\n        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token punctuation">..</span>prices<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">let</span> price <span class="token operator">=</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n            <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>k <span class="token keyword">as</span> <span class="token keyword">usize</span> <span class="token punctuation">{</span>\n                <span class="token comment">//剩下j次交易,不持有股票,</span>\n                dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> price<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token keyword">let</span> <span class="token keyword">mut</span> last <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n                <span class="token keyword">if</span> j <span class="token operator">&lt;</span> k <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">{</span>\n                    last <span class="token operator">=</span> dp<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n                <span class="token comment">//剩下j次交易,持有股票</span>\n                dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> last <span class="token operator">-</span> price<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;i={}&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token comment">//            println!(&quot;dp[{}]={:?}&quot;, i, dp[i]);</span>\n        <span class="token punctuation">}</span>\n        dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br></div></div><h2 id="一点感悟"><a class="header-anchor" href="#一点感悟" aria-hidden="true">#</a> 一点感悟</h2><p>时间复杂度分析 O(KN) k&lt;=N 空间复杂度: O(K)</p><p>空间复杂度:从一开始的空间复杂度是O(KN)降低到O(K), 时间复杂度虽然一直是O(KN),但是最后通过移除增长序列的方式,实际上会把问题规模大幅降低. 当然最糟糕的情况是和没有移除是一样的.</p><h2 id="其他"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>欢迎关注我的<a href="https://github.com/nkbai/rust-leetcode" target="_blank" rel="noopener noreferrer">github</a>,本项目文章所有代码都可以找到.</p>',20)];t.render=function(a,p,t,o,c,l){return n(),s("div",null,e)};export{p as __pageData,t as default};