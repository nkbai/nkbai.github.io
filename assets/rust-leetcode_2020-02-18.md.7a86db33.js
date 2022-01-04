import{o as n,c as s,e as a}from"./app.f8197458.js";const p='{"title":"365. 水壶问题","description":"","frontmatter":{"title":"365. 水壶问题","date":"2020-02-17T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["技术相关"],"plugins":["viz"]},"headers":[{"level":2,"title":"每天一道Rust-LeetCode(2020-02-18)","slug":"每天一道rust-leetcode-2020-02-18"},{"level":2,"title":"题目描述","slug":"题目描述"},{"level":2,"title":"解题思路","slug":"解题思路"},{"level":2,"title":"解题过程","slug":"解题过程"},{"level":2,"title":"一点感悟","slug":"一点感悟"},{"level":2,"title":"其他","slug":"其他"}],"relativePath":"rust-leetcode/2020-02-18.md","lastUpdated":1582015486000}',t={},e=[a('<h2 id="每天一道rust-leetcode-2020-02-18"><a class="header-anchor" href="#每天一道rust-leetcode-2020-02-18" aria-hidden="true">#</a> 每天一道Rust-LeetCode(2020-02-18)</h2><p>坚持每天一道题,刷题学习Rust.</p><h2 id="题目描述"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>有两个容量分别为 x升 和 y升 的水壶以及无限多的水。请判断能否通过使用这两个水壶，从而可以得到恰好 z升 的水？</p><p>如果可以，最后请用以上水壶中的一或两个来盛放取得的 z升 水。</p><p>你允许：</p><p>装满任意一个水壶 清空任意一个水壶 从一个水壶向另外一个水壶倒水，直到装满或者倒空 示例 1: (From the famous &quot;Die Hard&quot; example)</p><p>输入: x = 3, y = 5, z = 4 输出: True 示例 2:</p><p>输入: x = 2, y = 6, z = 5 输出: False</p><p>来源：力扣（LeetCode） 链接：<a href="https://leetcode-cn.com/problems/water-and-jug-problem" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/water-and-jug-problem</a> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p><h2 id="解题思路"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>如果ax+by=z有整数解, 有整数解时当且仅当z是x和y的最大公约数d的倍数。 <strong>无法证明,这是别人的结论</strong><a href="https://baike.baidu.com/item/%E8%A3%B4%E8%9C%80%E5%AE%9A%E7%90%86/5186593" target="_blank" rel="noopener noreferrer">裴蜀定理</a> 数论太烧脑</p><h2 id="解题过程"><a class="header-anchor" href="#解题过程" aria-hidden="true">#</a> 解题过程</h2><div class="language-rust line-numbers-mode"><pre><code>\n<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cmp<span class="token punctuation">::</span></span><span class="token punctuation">{</span>max<span class="token punctuation">,</span> min<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>collections<span class="token punctuation">::</span></span><span class="token class-name">HashSet</span><span class="token punctuation">;</span>\n\n<span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>\n    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">can_measure_water</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span> z<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">bool</span> <span class="token punctuation">{</span>\n        z <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>x <span class="token operator">+</span> y<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> z <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>z <span class="token operator">%</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">gcd</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">gcd</span><span class="token punctuation">(</span>a<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span> b<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> t1 <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> t2 <span class="token operator">=</span> <span class="token function">min</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> a <span class="token operator">=</span> t1<span class="token punctuation">;</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> b <span class="token operator">=</span> t2<span class="token punctuation">;</span>\n        <span class="token keyword">while</span> b <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>\n            <span class="token keyword">let</span> t1 <span class="token operator">=</span> a <span class="token operator">%</span> b<span class="token punctuation">;</span>\n            a <span class="token operator">=</span> b<span class="token punctuation">;</span>\n            b <span class="token operator">=</span> t1<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        a\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token attribute attr-name">#[cfg(test)]</span>\n<span class="token keyword">mod</span> <span class="token module-declaration namespace">test</span> <span class="token punctuation">{</span>\n    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>\n    <span class="token attribute attr-name">#[test]</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">can_measure_water</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">can_measure_water</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">can_measure_water</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h2 id="一点感悟"><a class="header-anchor" href="#一点感悟" aria-hidden="true">#</a> 一点感悟</h2><p>边界z=0 以及z=x+y这两种情况没有考虑周全</p><h2 id="其他"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>欢迎关注我的<a href="https://github.com/nkbai/rust-leetcode" target="_blank" rel="noopener noreferrer">github</a>,本项目文章所有代码都可以找到.</p>',18)];t.render=function(a,p,t,o,c,l){return n(),s("div",null,e)};export{p as __pageData,t as default};