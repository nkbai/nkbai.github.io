import{o as n,c as s,e as a}from"./app.d25b71ec.js";const p='{"title":"990. 等式方程的可满足性","description":"","frontmatter":{"title":"990. 等式方程的可满足性","date":"2020-03-16T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["技术相关"],"plugins":["viz"]},"headers":[{"level":2,"title":"每天一道Rust-LeetCode(2020-03-17)","slug":"每天一道rust-leetcode-2020-03-17"},{"level":2,"title":"题目描述","slug":"题目描述"},{"level":2,"title":"解题思路","slug":"解题思路"},{"level":2,"title":"解题过程","slug":"解题过程"},{"level":2,"title":"一点感悟","slug":"一点感悟"},{"level":2,"title":"其他","slug":"其他"}],"relativePath":"rust-leetcode/2020-03-17.md","lastUpdated":1584458538000}',t={},e=[a('<h2 id="每天一道rust-leetcode-2020-03-17"><a class="header-anchor" href="#每天一道rust-leetcode-2020-03-17" aria-hidden="true">#</a> 每天一道Rust-LeetCode(2020-03-17)</h2><p>坚持每天一道题,刷题学习Rust.</p><h2 id="题目描述"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>给定一个由表示变量之间关系的字符串方程组成的数组，每个字符串方程 equations[i] 的长度为 4，并采用两种不同的形式之一：&quot;a==b&quot; 或 &quot;a!=b&quot;。在这里，a 和 b 是小写字母（不一定不同），表示单字母变量名。</p><p>只有当可以将整数分配给变量名，以便满足所有给定的方程时才返回 true，否则返回 false。</p><p>示例 1：</p><p>输入：[&quot;a==b&quot;,&quot;b!=a&quot;] 输出：false 解释：如果我们指定，a = 1 且 b = 1，那么可以满足第一个方程，但无法满足第二个方程。没有办法分配变量同时满足这两个方程。 示例 2：</p><p>输出：[&quot;b<mark>a&quot;,&quot;a</mark>b&quot;] 输入：true 解释：我们可以指定 a = 1 且 b = 1 以满足满足这两个方程。 示例 3：</p><p>输入：[&quot;a<mark>b&quot;,&quot;b</mark>c&quot;,&quot;a==c&quot;] 输出：true 示例 4：</p><p>输入：[&quot;a<mark>b&quot;,&quot;b!=c&quot;,&quot;c</mark>a&quot;] 输出：false 示例 5：</p><p>输入：[&quot;c<mark>c&quot;,&quot;b</mark>d&quot;,&quot;x!=z&quot;] 输出：true</p><p>提示：</p><p>1 &lt;= equations.length &lt;= 500 equations[i].length == 4 equations[i][0] 和 equations[i][3] 是小写字母 equations[i][1] 要么是 &#39;=&#39;，要么是 &#39;!&#39; equations[i][2] 是 &#39;=&#39;</p><p>来源：力扣（LeetCode） 链接：<a href="https://leetcode-cn.com/problems/satisfiability-of-equality-equations" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/satisfiability-of-equality-equations</a> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p><h2 id="解题思路"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>==具有传递性,!=则没有 先将等等放在并查集中, 然后拿不等来校验,如果都不在一个集合中,则返回true</p><h2 id="解题过程"><a class="header-anchor" href="#解题过程" aria-hidden="true">#</a> 解题过程</h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token keyword">struct</span> <span class="token type-definition class-name">DSU</span> <span class="token punctuation">{</span>\n    pre<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">impl</span> <span class="token constant">DSU</span> <span class="token punctuation">{</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">new</span><span class="token punctuation">(</span>n<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token constant">DSU</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> v <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">with_capacity</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>n <span class="token punctuation">{</span>\n            v<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i <span class="token keyword">as</span> <span class="token keyword">i32</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token constant">DSU</span> <span class="token punctuation">{</span> pre<span class="token punctuation">:</span> v <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">self</span><span class="token punctuation">,</span> x<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token keyword">self</span><span class="token punctuation">.</span>pre<span class="token punctuation">[</span>x <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">]</span> <span class="token operator">==</span> x <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> x<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token comment">// let prex = self.pre[x];</span>\n        <span class="token keyword">let</span> prex <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">.</span>pre<span class="token punctuation">[</span>x <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">//因为递归,这里会把一串上面的所有路径都压缩了,</span>\n        <span class="token keyword">self</span><span class="token punctuation">.</span>pre<span class="token punctuation">[</span>x <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">]</span> <span class="token operator">=</span> prex<span class="token punctuation">;</span>\n        <span class="token keyword">return</span> prex<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">//返回false,说明x,y在同一个集合里</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">merge</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">self</span><span class="token punctuation">,</span> x<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">bool</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> prex <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> prey <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> prex <span class="token operator">==</span> prey <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token comment">//注意这里是设置的是prex的parent,而不是x的parent</span>\n        <span class="token keyword">self</span><span class="token punctuation">.</span>pre<span class="token punctuation">[</span>prey <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">]</span> <span class="token operator">=</span> prex<span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>\n    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">equations_possible</span><span class="token punctuation">(</span>equations<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">bool</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> not_equals <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> dsu <span class="token operator">=</span> <span class="token constant">DSU</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> e <span class="token keyword">in</span> equations <span class="token punctuation">{</span>\n            <span class="token keyword">let</span> e <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">as_bytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">let</span> a <span class="token operator">=</span> e<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token char string">&#39;a&#39;</span> <span class="token keyword">as</span> <span class="token keyword">u8</span><span class="token punctuation">;</span>\n            <span class="token keyword">let</span> b <span class="token operator">=</span> e<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token char string">&#39;a&#39;</span> <span class="token keyword">as</span> <span class="token keyword">u8</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span> e<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char string">&#39;=&#39;</span> <span class="token keyword">as</span> <span class="token keyword">u8</span> <span class="token punctuation">{</span>\n                dsu<span class="token punctuation">.</span><span class="token function">merge</span><span class="token punctuation">(</span>a <span class="token keyword">as</span> <span class="token keyword">i32</span><span class="token punctuation">,</span> b <span class="token keyword">as</span> <span class="token keyword">i32</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n                not_equals<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token keyword">in</span> not_equals <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> dsu<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>a <span class="token keyword">as</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token operator">==</span> dsu<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>b <span class="token keyword">as</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        <span class="token boolean">true</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token attribute attr-name">#[cfg(test)]</span>\n<span class="token keyword">mod</span> <span class="token module-declaration namespace">test</span> <span class="token punctuation">{</span>\n    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>\n    <span class="token attribute attr-name">#[test]</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">equations_possible</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token string">&quot;a==b&quot;</span><span class="token punctuation">.</span><span class="token function">into</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;b==c&quot;</span><span class="token punctuation">.</span><span class="token function">into</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;a==c&quot;</span><span class="token punctuation">.</span><span class="token function">into</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">equations_possible</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token string">&quot;a==b&quot;</span><span class="token punctuation">.</span><span class="token function">into</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;b!=c&quot;</span><span class="token punctuation">.</span><span class="token function">into</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;c==a&quot;</span><span class="token punctuation">.</span><span class="token function">into</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">equations_possible</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token string">&quot;c==c&quot;</span><span class="token punctuation">.</span><span class="token function">into</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;b==d&quot;</span><span class="token punctuation">.</span><span class="token function">into</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;x!=z&quot;</span><span class="token punctuation">.</span><span class="token function">into</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br></div></div><h2 id="一点感悟"><a class="header-anchor" href="#一点感悟" aria-hidden="true">#</a> 一点感悟</h2><h2 id="其他"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>欢迎关注我的<a href="https://github.com/nkbai/rust-leetcode" target="_blank" rel="noopener noreferrer">github</a>,本项目文章所有代码都可以找到.</p>',21)];t.render=function(a,p,t,o,c,l){return n(),s("div",null,e)};export{p as __pageData,t as default};
