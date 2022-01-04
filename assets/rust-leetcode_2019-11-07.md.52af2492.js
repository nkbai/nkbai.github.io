import{o as n,c as s,e as a}from"./app.f8197458.js";const p='{"title":"1104. 二叉树寻路","description":"","frontmatter":{"title":"1104. 二叉树寻路","date":"2019-11-06T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["技术相关"],"plugins":["viz"]},"headers":[{"level":2,"title":"每天一道Rust-LeetCode(2019-11-07)","slug":"每天一道rust-leetcode-2019-11-07"},{"level":2,"title":"题目描述","slug":"题目描述"},{"level":2,"title":"解题思路","slug":"解题思路"},{"level":2,"title":"解题过程","slug":"解题过程"},{"level":2,"title":"一点感悟","slug":"一点感悟"},{"level":2,"title":"其他","slug":"其他"}],"relativePath":"rust-leetcode/2019-11-07.md","lastUpdated":1582015486000}',t={},e=[a('<h2 id="每天一道rust-leetcode-2019-11-07"><a class="header-anchor" href="#每天一道rust-leetcode-2019-11-07" aria-hidden="true">#</a> 每天一道Rust-LeetCode(2019-11-07)</h2><p>坚持每天一道题,刷题学习Rust.</p><h2 id="题目描述"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>在一棵无限的二叉树上，每个节点都有两个子节点，树中的节点 逐行 依次按 “之” 字形进行标记。</p><p>如下图所示，在奇数行（即，第一行、第三行、第五行……）中，按从左到右的顺序进行标记；</p><p>而偶数行（即，第二行、第四行、第六行……）中，按从右到左的顺序进行标记。</p><p><img alt="" data-src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/06/28/tree.png" loading="lazy" class="lazy"></p><p>给你树上某一个节点的标号 label，请你返回从根节点到该标号为 label 节点的路径，该路径是由途经的节点标号所组成的。</p><p>示例 1：</p><p>输入：label = 14 输出：[1,3,4,14] 示例 2：</p><p>输入：label = 26 输出：[1,2,6,10,26]</p><p>提示：</p><p>1 &lt;= label &lt;= 10^6</p><p>来源：力扣（LeetCode） 链接：<a href="https://leetcode-cn.com/problems/path-in-zigzag-labelled-binary-tree" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/path-in-zigzag-labelled-binary-tree</a> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p><h2 id="解题思路"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>如果不考虑zigzag,那么label就是位置,编号从1开始,假设label是26,其对应的位置就是16, 那么此时返回的应该是[14,7,3,1] 因为zigzag的缘故,要是别出来偶数行是从右到左的,其中14,3,是偶数行 14 需要从[8..15]进行转换,所以14对应的位置是9,但是因为14是第一个数,所以直接从这个位置开始. 那么9这个位置对应的父节点就是9/2=4,奇数行不做处理. 得到[14,4] 然后4的父节点是2,其所在行是[2,3],偶数行 所以转换为3,得到[14,4,3] 3的父节点为1,奇数行不转换,得到[14,4,3,1],逆序输出即可. 注意计算父节点的时候都应该使用位置,而不应该使用位置上的值</p><p>时间复杂度: O(LogN) 空间复杂度 O(LogN)</p><h2 id="解题过程"><a class="header-anchor" href="#解题过程" aria-hidden="true">#</a> 解题过程</h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span><span class="token punctuation">;</span>\n\n<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>\n    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">path_in_zig_zag_tree</span><span class="token punctuation">(</span>label<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> v <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> isFirst <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> cur_pos <span class="token operator">=</span> label<span class="token punctuation">;</span>\n        <span class="token keyword">while</span> cur_pos <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>\n            <span class="token keyword">let</span> first_one_pos <span class="token operator">=</span> <span class="token number">32</span> <span class="token operator">-</span> <span class="token function">leading_zero</span><span class="token punctuation">(</span>cur_pos <span class="token keyword">as</span> <span class="token keyword">u32</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;cur={},first_one_pos={}&quot;</span><span class="token punctuation">,</span> cur_pos<span class="token punctuation">,</span> first_one_pos<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">let</span> isEven <span class="token operator">=</span> first_one_pos <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//第一个1是奇数行,从1开始</span>\n            <span class="token keyword">let</span> <span class="token keyword">mut</span> order_num <span class="token operator">=</span> cur_pos<span class="token punctuation">;</span>\n            <span class="token keyword">if</span> isEven <span class="token punctuation">{</span>\n                <span class="token comment">//偶数行需要转换</span>\n                <span class="token keyword">let</span> first <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span>first_one_pos <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//针对8-15,范围是1000到1111,first_one_pos=4</span>\n                <span class="token keyword">let</span> end <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> first_one_pos<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n                order_num <span class="token operator">=</span> end <span class="token operator">-</span> <span class="token punctuation">(</span>order_num <span class="token operator">-</span> first<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            <span class="token keyword">if</span> isFirst <span class="token punctuation">{</span>\n                v<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> cur_pos<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                isFirst <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n                cur_pos <span class="token operator">=</span> order_num<span class="token punctuation">;</span> <span class="token comment">//第一个数是逆序,需要保证真正的位置</span>\n            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n                v<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> order_num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//除第一个值以外都应该使用对应位置上的值,而不是位置本身</span>\n            <span class="token punctuation">}</span>\n            <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;orderPos={}&quot;</span><span class="token punctuation">,</span> order_num<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            cur_pos <span class="token operator">=</span> cur_pos <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">//找下一个</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> v<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">//判断一个整数有多少个前缀0</span>\n<span class="token keyword">fn</span> <span class="token function-definition function">leading_zero</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token keyword">u32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> <span class="token keyword">mut</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> <span class="token keyword">mut</span> x <span class="token operator">=</span> x<span class="token punctuation">;</span>\n    <span class="token keyword">if</span> x <span class="token operator">&lt;=</span> <span class="token number">0x0000ffff</span> <span class="token punctuation">{</span>\n        n <span class="token operator">+=</span> <span class="token number">16</span><span class="token punctuation">;</span>\n        x <span class="token operator">&lt;&lt;=</span> <span class="token number">16</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">if</span> x <span class="token operator">&lt;=</span> <span class="token number">0x00ffffff</span> <span class="token punctuation">{</span>\n        n <span class="token operator">+=</span> <span class="token number">8</span><span class="token punctuation">;</span>\n        x <span class="token operator">&lt;&lt;=</span> <span class="token number">8</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">if</span> x <span class="token operator">&lt;=</span> <span class="token number">0x0fffffff</span> <span class="token punctuation">{</span>\n        n <span class="token operator">+=</span> <span class="token number">4</span><span class="token punctuation">;</span>\n        x <span class="token operator">&lt;&lt;=</span> <span class="token number">4</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&lt;=</span> <span class="token number">0x3fffffff</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        n <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n        x <span class="token operator">&lt;&lt;=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">if</span> x <span class="token operator">&lt;=</span> <span class="token number">0x7fffffff</span> <span class="token punctuation">{</span>\n        n <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> n<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token attribute attr-name">#[cfg(test)]</span>\n<span class="token keyword">mod</span> <span class="token module-declaration namespace">tests</span> <span class="token punctuation">{</span>\n    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>\n    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token operator">*</span><span class="token punctuation">;</span>\n    <span class="token attribute attr-name">#[test]</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">path_in_zig_zag_tree</span><span class="token punctuation">(</span><span class="token number">14</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">path_in_zig_zag_tree</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">path_in_zig_zag_tree</span><span class="token punctuation">(</span><span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">path_in_zig_zag_tree</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">path_in_zig_zag_tree</span><span class="token punctuation">(</span><span class="token number">31</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token attribute attr-name">#[test]</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">test_leading_zeros</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token number">31</span><span class="token punctuation">,</span> <span class="token function">leading_zero</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token function">leading_zero</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token number">28</span><span class="token punctuation">,</span> <span class="token function">leading_zero</span><span class="token punctuation">(</span><span class="token number">14</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br></div></div><h2 id="一点感悟"><a class="header-anchor" href="#一点感悟" aria-hidden="true">#</a> 一点感悟</h2><h2 id="其他"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>欢迎关注我的<a href="https://github.com/nkbai/rust-leetcode" target="_blank" rel="noopener noreferrer">github</a>,本项目文章所有代码都可以找到.</p>',22)];t.render=function(a,p,t,o,c,l){return n(),s("div",null,e)};export{p as __pageData,t as default};