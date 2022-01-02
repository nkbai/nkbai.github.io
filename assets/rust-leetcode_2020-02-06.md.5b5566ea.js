import{o as n,c as s,e as a}from"./app.d25b71ec.js";const p='{"title":"130. 被围绕的区域","description":"","frontmatter":{"title":"130. 被围绕的区域","date":"2020-02-05T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["技术相关"],"plugins":["viz"]},"headers":[{"level":2,"title":"每天一道Rust-LeetCode(2020-02-06)","slug":"每天一道rust-leetcode-2020-02-06"},{"level":2,"title":"题目描述","slug":"题目描述"},{"level":2,"title":"解题思路","slug":"解题思路"},{"level":2,"title":"解题过程","slug":"解题过程"},{"level":2,"title":"一点感悟","slug":"一点感悟"},{"level":2,"title":"其他","slug":"其他"}],"relativePath":"rust-leetcode/2020-02-06.md","lastUpdated":1582015486000}',t={},o=[a('<h2 id="每天一道rust-leetcode-2020-02-06"><a class="header-anchor" href="#每天一道rust-leetcode-2020-02-06" aria-hidden="true">#</a> 每天一道Rust-LeetCode(2020-02-06)</h2><p>坚持每天一道题,刷题学习Rust.</p><h2 id="题目描述"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>给定一个二维的矩阵，包含 &#39;X&#39; 和 &#39;O&#39;（字母 O）。</p><p>找到所有被 &#39;X&#39; 围绕的区域，并将这些区域里所有的 &#39;O&#39; 用 &#39;X&#39; 填充。</p><p>示例:</p><p>X X X X X O O X X X O X X O X X 运行你的函数后，矩阵变为：</p><p>X X X X X X X X X X X X X O X X 解释:</p><p>被围绕的区间不会存在于边界上，换句话说，任何边界上的 &#39;O&#39; 都不会被填充为 &#39;X&#39;。 任何不在边界上，或不与边界上的 &#39;O&#39; 相连的 &#39;O&#39; 最终都会被填充为 &#39;X&#39;。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。</p><p>来源：力扣（LeetCode） 链接：<a href="https://leetcode-cn.com/problems/surrounded-regions" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/surrounded-regions</a> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p><h2 id="解题思路"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>染色法: 凡是在边界上的o都会被染成红色,然后从他开始向所有邻居的o染色, 如果碰到已经染成红色的o,则跳过 最后扫描一遍,哪些没有被染色的都设置成x</p><p>时间,空间复杂度为O(N) 染色的时候最多访问两边. 最后替换的时候再走一遍</p><p>优化部分: 可以省掉空间复杂度O(N),碰到边界上的O用#来代替,最后所有的#用O代替,所有的O改为X</p><h2 id="解题过程"><a class="header-anchor" href="#解题过程" aria-hidden="true">#</a> 解题过程</h2><div class="language-rust line-numbers-mode"><pre><code>\n<span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>\n    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">solve</span><span class="token punctuation">(</span>board<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">char</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> board<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> board<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> mark <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">;</span> board<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span> board<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token comment">//0 表示不确定 1表示已经染成红色了</span>\n        <span class="token keyword">let</span> row <span class="token operator">=</span> board<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> col <span class="token operator">=</span> board<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>row <span class="token punctuation">{</span>\n            <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>col <span class="token punctuation">{</span>\n                <span class="token comment">//是O,并且没有被染色,并且是在边界上</span>\n                <span class="token keyword">if</span> board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char string">&#39;O&#39;</span>\n                    <span class="token operator">&amp;&amp;</span> mark<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span>\n                    <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> i <span class="token operator">==</span> row <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">||</span> j <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> j <span class="token operator">==</span> col <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>\n                <span class="token punctuation">{</span>\n                    <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> mark<span class="token punctuation">,</span> board<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>row <span class="token punctuation">{</span>\n            <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>col <span class="token punctuation">{</span>\n                <span class="token comment">//那些没有被染色的,肯定是被包围着的</span>\n                <span class="token keyword">if</span> board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char string">&#39;O&#39;</span> <span class="token operator">&amp;&amp;</span> mark<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>\n                    board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char string">&#39;X&#39;</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">color</span><span class="token punctuation">(</span>pos<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token keyword">usize</span><span class="token punctuation">,</span> <span class="token keyword">usize</span><span class="token punctuation">)</span><span class="token punctuation">,</span> mark<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span> board<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">char</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        mark<span class="token punctuation">[</span>pos<span class="token number">.0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>pos<span class="token number">.1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> row <span class="token operator">=</span> board<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> col <span class="token operator">=</span> board<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> nexts <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">get_next</span><span class="token punctuation">(</span>pos<span class="token punctuation">,</span> row<span class="token punctuation">,</span> col<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> next <span class="token keyword">in</span> nexts <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> board<span class="token punctuation">[</span>next<span class="token number">.0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>next<span class="token number">.1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char string">&#39;O&#39;</span> <span class="token operator">&amp;&amp;</span> mark<span class="token punctuation">[</span>next<span class="token number">.0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>next<span class="token number">.1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>\n                <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">color</span><span class="token punctuation">(</span>next<span class="token punctuation">,</span> mark<span class="token punctuation">,</span> board<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">get_next</span><span class="token punctuation">(</span>pos<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token keyword">usize</span><span class="token punctuation">,</span> <span class="token keyword">usize</span><span class="token punctuation">)</span><span class="token punctuation">,</span> row<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">,</span> col<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token keyword">usize</span><span class="token punctuation">,</span> <span class="token keyword">usize</span><span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> v <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> pos<span class="token number">.1</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> col <span class="token punctuation">{</span>\n            v<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span>pos<span class="token number">.0</span><span class="token punctuation">,</span> pos<span class="token number">.1</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">if</span> pos<span class="token number">.1</span> <span class="token operator">&gt;=</span> <span class="token number">1</span> <span class="token punctuation">{</span>\n            v<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span>pos<span class="token number">.0</span><span class="token punctuation">,</span> pos<span class="token number">.1</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">if</span> pos<span class="token number">.0</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> row <span class="token punctuation">{</span>\n            v<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span>pos<span class="token number">.0</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> pos<span class="token number">.1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">if</span> pos<span class="token number">.0</span> <span class="token operator">&gt;=</span> <span class="token number">1</span> <span class="token punctuation">{</span>\n            v<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span>pos<span class="token number">.0</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> pos<span class="token number">.1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        v\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token attribute attr-name">#[cfg(test)]</span>\n<span class="token keyword">mod</span> <span class="token module-declaration namespace">test</span> <span class="token punctuation">{</span>\n    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>\n\n    <span class="token attribute attr-name">#[test]</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> v <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span>\n            <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token char string">&#39;X&#39;</span><span class="token punctuation">,</span> <span class="token char string">&#39;X&#39;</span><span class="token punctuation">,</span> <span class="token char string">&#39;X&#39;</span><span class="token punctuation">,</span> <span class="token char string">&#39;X&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token char string">&#39;X&#39;</span><span class="token punctuation">,</span> <span class="token char string">&#39;O&#39;</span><span class="token punctuation">,</span> <span class="token char string">&#39;O&#39;</span><span class="token punctuation">,</span> <span class="token char string">&#39;X&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token char string">&#39;X&#39;</span><span class="token punctuation">,</span> <span class="token char string">&#39;X&#39;</span><span class="token punctuation">,</span> <span class="token char string">&#39;O&#39;</span><span class="token punctuation">,</span> <span class="token char string">&#39;X&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token char string">&#39;X&#39;</span><span class="token punctuation">,</span> <span class="token char string">&#39;O&#39;</span><span class="token punctuation">,</span> <span class="token char string">&#39;X&#39;</span><span class="token punctuation">,</span> <span class="token char string">&#39;X&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">solve</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;v={:?}&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br></div></div><h2 id="一点感悟"><a class="header-anchor" href="#一点感悟" aria-hidden="true">#</a> 一点感悟</h2><h2 id="其他"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>欢迎关注我的<a href="https://github.com/nkbai/rust-leetcode" target="_blank" rel="noopener noreferrer">github</a>,本项目文章所有代码都可以找到.</p>',19)];t.render=function(a,p,t,e,c,l){return n(),s("div",null,o)};export{p as __pageData,t as default};
