import{_ as s,c as a,o as n,N as l}from"./chunks/framework.3a9190c5.js";const i=JSON.parse('{"title":"84. 柱状图中最大的矩形","description":"","frontmatter":{"title":"84. 柱状图中最大的矩形","date":"2019-12-15T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["技术相关"],"plugins":["viz"]},"headers":[],"relativePath":"rust-leetcode/2019-12-16.md"}'),p={name:"rust-leetcode/2019-12-16.md"},o=l(`<h2 id="每天一道rust-leetcode-2019-12-16" tabindex="-1">每天一道Rust-LeetCode(2019-12-16) <a class="header-anchor" href="#每天一道rust-leetcode-2019-12-16" aria-label="Permalink to &quot;每天一道Rust-LeetCode(2019-12-16)&quot;">​</a></h2><p>坚持每天一道题,刷题学习Rust.</p><h2 id="题目描述" tabindex="-1">题目描述 <a class="header-anchor" href="#题目描述" aria-label="Permalink to &quot;题目描述&quot;">​</a></h2><p>给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。</p><p>求在该柱状图中，能够勾勒出来的矩形的最大面积。</p><p><img alt="" data-src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/histogram.png" loading="lazy" class="lazy"></p><p>以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。</p><p><img alt="" data-src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/histogram_area.png" loading="lazy" class="lazy"></p><p>图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。</p><p>示例:</p><p>输入: [2,1,5,6,2,3] 输出: 10</p><p>来源：力扣（LeetCode） 链接：<a href="https://leetcode-cn.com/problems/largest-rectangle-in-histogram" target="_blank" rel="noreferrer">https://leetcode-cn.com/problems/largest-rectangle-in-histogram</a> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p><h2 id="解题思路" tabindex="-1">解题思路 <a class="header-anchor" href="#解题思路" aria-label="Permalink to &quot;解题思路&quot;">​</a></h2><p>考虑到矩形的面积是由最矮的柱子决定的, 那么只要记录[j,i]之间最矮的柱子,那么[j,i]的面积就决定了是(i-j+1)*min 对于一个新来的柱子,都要遍历以前所有的组合 所以复杂度是O(N^2)</p><h2 id="解题过程" tabindex="-1">解题过程 <a class="header-anchor" href="#解题过程" aria-label="Permalink to &quot;解题过程&quot;">​</a></h2><div class="language-rust line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> std</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">cmp</span><span style="color:#89DDFF;">::{</span><span style="color:#FFCB6B;">max</span><span style="color:#89DDFF;">,</span><span style="color:#FFCB6B;"> min</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#F78C6C;">impl</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">pub</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">largest_rectangle_area</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">heights</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Vec</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">i32</span><span style="color:#89DDFF;">&gt;)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">i32</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> lowest </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Vec</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        heights</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">iter</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">for_each</span><span style="color:#89DDFF;">(|</span><span style="color:#A6ACCD;">_</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            lowest</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> max_area </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        //lowest[j]表示从当前i到j的最矮的柱子高度</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">..</span><span style="color:#A6ACCD;">heights</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            lowest</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> heights</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">];</span><span style="color:#676E95;font-style:italic;"> //从i到i的最矮柱子就是i本身</span></span>
<span class="line"><span style="color:#A6ACCD;">            max_area </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">max</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">max_area</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> heights</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> j </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">..</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">rev</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                lowest</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">min</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">heights</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> lowest</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">]);</span><span style="color:#676E95;font-style:italic;"> //[j,i]区间</span></span>
<span class="line"><span style="color:#A6ACCD;">                max_area </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">max</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">max_area</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> j </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">i32</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> lowest</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        max_area</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">#[</span><span style="color:#A6ACCD;">cfg</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">test</span><span style="color:#89DDFF;">)]</span></span>
<span class="line"><span style="color:#C792EA;">mod</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">test</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">super</span><span style="color:#89DDFF;">::*;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">#[</span><span style="color:#A6ACCD;">test</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> t </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">largest_rectangle_area</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">vec!</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">assert_eq!</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">t</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> t </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">largest_rectangle_area</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">vec!</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">assert_eq!</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">t</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> t </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">largest_rectangle_area</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">vec!</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">assert_eq!</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">t</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="一点感悟" tabindex="-1">一点感悟 <a class="header-anchor" href="#一点感悟" aria-label="Permalink to &quot;一点感悟&quot;">​</a></h2><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><p>欢迎关注我的<a href="https://github.com/nkbai/rust-leetcode" target="_blank" rel="noreferrer">github</a>,本项目文章所有代码都可以找到.</p>`,19),e=[o];function t(r,c,D,F,y,C){return n(),a("div",null,e)}const b=s(p,[["render",t]]);export{i as __pageData,b as default};