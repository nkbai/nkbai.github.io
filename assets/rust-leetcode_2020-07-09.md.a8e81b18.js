import{o as n,c as s,e as a}from"./app.735ab1d2.js";const p='{"title":"面试题 17.13. 恢复空格","description":"","frontmatter":{"title":"面试题 17.13. 恢复空格","date":"2020-07-08T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["技术相关"],"plugins":["viz"]},"headers":[{"level":2,"title":"每天一道Rust-LeetCode(2020-07-09)","slug":"每天一道rust-leetcode-2020-07-09"},{"level":2,"title":"题目描述","slug":"题目描述"},{"level":2,"title":"解题思路","slug":"解题思路"},{"level":2,"title":"解题过程","slug":"解题过程"},{"level":2,"title":"一点感悟","slug":"一点感悟"},{"level":2,"title":"其他","slug":"其他"}],"relativePath":"rust-leetcode/2020-07-09.md","lastUpdated":1594260965000}',t={},o=[a('<h2 id="每天一道rust-leetcode-2020-07-09"><a class="header-anchor" href="#每天一道rust-leetcode-2020-07-09" aria-hidden="true">#</a> 每天一道Rust-LeetCode(2020-07-09)</h2><p>坚持每天一道题,刷题学习Rust.</p><h2 id="题目描述"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>哦，不！你不小心把一个长篇文章中的空格、标点都删掉了，并且大写也弄成了小写。像句子&quot;I reset the computer. It still didn’t boot!&quot;已经变成了&quot;iresetthecomputeritstilldidntboot&quot;。在处理标点符号和大小写之前，你得先把它断成词语。当然了，你有一本厚厚的词典dictionary，不过，有些词没在词典里。假设文章用sentence表示，设计一个算法，把文章断开，要求未识别的字符最少，返回未识别的字符数。</p><p>注意：本题相对原题稍作改动，只需返回未识别的字符数</p><p>示例：</p><p>输入： dictionary = [&quot;looked&quot;,&quot;just&quot;,&quot;like&quot;,&quot;her&quot;,&quot;brother&quot;] sentence = &quot;jesslookedjustliketimherbrother&quot; 输出： 7 解释： 断句后为&quot;jess looked just like tim her brother&quot;，共7个未识别字符。 提示：</p><p>0 &lt;= len(sentence) &lt;= 1000 dictionary中总字符数不超过 150000。 你可以认为dictionary和sentence中只包含小写字母。</p><p>来源：力扣（LeetCode） 链接：<a href="https://leetcode-cn.com/problems/re-space-lcci" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/re-space-lcci</a> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p><h2 id="解题思路"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>首先将dict转为map,加速查找. 使用动态规划思路: i,j都是sentence中的下标 首先dp[i][j]表示从i到j(包含j)中未识别的字符数,显然这个数最大就是j-i+1 第一步,扫描整个字符串,找出所有包含在字典中的dp[i][j],然后设置为0 第二步,由短变长遍历整个dp,最终得出结果 空间复杂度是O(N^2),其中N是句子的长度 时间复杂度是O(N^3),其中N是句子的长度</p><h2 id="解题过程"><a class="header-anchor" href="#解题过程" aria-hidden="true">#</a> 解题过程</h2><div class="language-rust line-numbers-mode"><pre><code>\n<span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>\n    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">respace</span><span class="token punctuation">(</span>dictionary<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> sentence<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> sentence<span class="token punctuation">.</span><span class="token function">is_empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> set <span class="token operator">=</span> <span class="token namespace">std<span class="token punctuation">::</span>collections<span class="token punctuation">::</span></span><span class="token class-name">HashSet</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">for</span> s <span class="token keyword">in</span> dictionary<span class="token punctuation">.</span><span class="token function">iter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            set<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">as_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">let</span> s <span class="token operator">=</span> sentence<span class="token punctuation">.</span><span class="token function">as_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> dp <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">;</span> sentence<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> sentence<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token comment">//第一步,扫描整个字符串,找出所有包含在字典中的dp[i][j],然后设置为0</span>\n        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>sentence<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">for</span> j <span class="token keyword">in</span> i<span class="token punctuation">..</span>sentence<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">if</span> set<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>s<span class="token punctuation">[</span>i<span class="token punctuation">..=</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n                    dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> j <span class="token operator">-</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        <span class="token comment">// println!(&quot;dp={:?}&quot;, dp);</span>\n        <span class="token comment">//第二步,由短变长遍历整个dp,最终得出结果</span>\n        <span class="token keyword">for</span> step <span class="token keyword">in</span> <span class="token number">1</span><span class="token punctuation">..</span>sentence<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>sentence<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> step <span class="token punctuation">{</span>\n                <span class="token comment">//从i开始往后走step步恰好是一个单词</span>\n                <span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token operator">&amp;</span>s<span class="token punctuation">[</span>i<span class="token punctuation">..=</span><span class="token punctuation">(</span>i <span class="token operator">+</span> step<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n                <span class="token keyword">if</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>i <span class="token operator">+</span> step<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>\n                    <span class="token keyword">continue</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n                <span class="token comment">// if total == &quot;jesslooked&quot; {</span>\n                <span class="token comment">//     println!(&quot;total={}&quot;, total);</span>\n                <span class="token comment">// }</span>\n                <span class="token comment">//没有组成一个单词,就开始切分,找出切分组合中最小的情况</span>\n                <span class="token keyword">let</span> <span class="token keyword">mut</span> expected <span class="token operator">=</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>i <span class="token operator">+</span> step<span class="token punctuation">]</span><span class="token punctuation">;</span>\n                <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>step <span class="token punctuation">{</span>\n                    <span class="token keyword">if</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>i <span class="token operator">+</span> j<span class="token punctuation">]</span> <span class="token operator">+</span> dp<span class="token punctuation">[</span>i <span class="token operator">+</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>i <span class="token operator">+</span> step<span class="token punctuation">]</span> <span class="token operator">&lt;</span> expected <span class="token punctuation">{</span>\n                        expected <span class="token operator">=</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>i <span class="token operator">+</span> j<span class="token punctuation">]</span> <span class="token operator">+</span> dp<span class="token punctuation">[</span>i <span class="token operator">+</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>i <span class="token operator">+</span> step<span class="token punctuation">]</span>\n                    <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span>\n                dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>i <span class="token operator">+</span> step<span class="token punctuation">]</span> <span class="token operator">=</span> expected<span class="token punctuation">;</span>\n                <span class="token comment">// println!(&quot;total={},dp[{}][{}]={}&quot;, total, i, step, dp[i][step]);</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>sentence<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token keyword">i32</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token attribute attr-name">#[cfg(test)]</span>\n<span class="token keyword">mod</span> <span class="token module-declaration namespace">tests</span> <span class="token punctuation">{</span>\n    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>\n    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span>vec_str_to_string<span class="token punctuation">;</span>\n    <span class="token attribute attr-name">#[test]</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">it_works</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">respace</span><span class="token punctuation">(</span>\n            <span class="token function">vec_str_to_string</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token string">&quot;looked&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;just&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;like&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;her&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;brother&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            <span class="token string">&quot;lookedjust&quot;</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">respace</span><span class="token punctuation">(</span>\n            <span class="token function">vec_str_to_string</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token string">&quot;looked&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;just&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;like&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;her&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;brother&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            <span class="token string">&quot;jesslooked&quot;</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">respace</span><span class="token punctuation">(</span>\n            <span class="token function">vec_str_to_string</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token string">&quot;looked&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;just&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;like&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;her&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;brother&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            <span class="token string">&quot;jesslookedjustliketimherbrother&quot;</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">respace</span><span class="token punctuation">(</span>\n            <span class="token function">vec_str_to_string</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token string">&quot;looked&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;just&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;like&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;her&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;brother&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            <span class="token string">&quot;&quot;</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">respace</span><span class="token punctuation">(</span>\n            <span class="token function">vec_str_to_string</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;just&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;like&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;her&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;brother&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            <span class="token string">&quot;a&quot;</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br></div></div><h2 id="一点感悟"><a class="header-anchor" href="#一点感悟" aria-hidden="true">#</a> 一点感悟</h2><p>看了别人的答案,好像复杂度比我这个好得多,后续会再来一篇优化的方案</p><h2 id="其他"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>欢迎关注我的<a href="https://github.com/nkbai/rust-leetcode" target="_blank" rel="noopener noreferrer">github</a>,本项目文章所有代码都可以找到.</p>',17)];t.render=function(a,p,t,e,c,u){return n(),s("div",null,o)};export{p as __pageData,t as default};