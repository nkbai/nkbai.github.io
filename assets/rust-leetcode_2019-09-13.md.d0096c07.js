import{_ as s,c as n,o as a,N as l}from"./chunks/framework.3a9190c5.js";const i=JSON.parse('{"title":"129. 求根到叶子节点数字之和","description":"","frontmatter":{"title":"129. 求根到叶子节点数字之和","date":"2019-09-12T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["技术相关"]},"headers":[],"relativePath":"rust-leetcode/2019-09-13.md"}'),p={name:"rust-leetcode/2019-09-13.md"},o=l(`<h2 id="每天一道rust-leetcode-2019-09-13" tabindex="-1">每天一道Rust-LeetCode(2019-09-13) <a class="header-anchor" href="#每天一道rust-leetcode-2019-09-13" aria-label="Permalink to &quot;每天一道Rust-LeetCode(2019-09-13)&quot;">​</a></h2><p>坚持每天一道题,刷题学习Rust.</p><h2 id="题目描述" tabindex="-1">题目描述 <a class="header-anchor" href="#题目描述" aria-label="Permalink to &quot;题目描述&quot;">​</a></h2><p>给定一个二叉树，它的每个结点都存放一个 0-9 的数字，每条从根到叶子节点的路径都代表一个数字。</p><p>例如，从根到叶子节点路径 1-&gt;2-&gt;3 代表数字 123。</p><p>计算从根到叶子节点生成的所有数字之和。</p><p>说明: 叶子节点是指没有子节点的节点。</p><p>示例 1:</p><p>输入: [1,2,3] 1 / <br> 2 3 输出: 25 解释: 从根到叶子节点路径 1-&gt;2 代表数字 12. 从根到叶子节点路径 1-&gt;3 代表数字 13. 因此，数字总和 = 12 + 13 = 25. 示例 2:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">输入: [4,9,0,5,1]</span></span>
<span class="line"><span style="color:#A6ACCD;">    4</span></span>
<span class="line"><span style="color:#A6ACCD;">   / \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  9   0</span></span>
<span class="line"><span style="color:#A6ACCD;">/ \\</span></span>
<span class="line"><span style="color:#A6ACCD;">5   1</span></span>
<span class="line"><span style="color:#A6ACCD;">输出: 1026</span></span>
<span class="line"><span style="color:#A6ACCD;">解释:</span></span>
<span class="line"><span style="color:#A6ACCD;">从根到叶子节点路径 4-&gt;9-&gt;5 代表数字 495.</span></span>
<span class="line"><span style="color:#A6ACCD;">从根到叶子节点路径 4-&gt;9-&gt;1 代表数字 491.</span></span>
<span class="line"><span style="color:#A6ACCD;">从根到叶子节点路径 4-&gt;0 代表数字 40.</span></span>
<span class="line"><span style="color:#A6ACCD;">因此，数字总和 = 495 + 491 + 40 = 1026.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>来源：力扣（LeetCode） 链接：<a href="https://leetcode-cn.com/problems/sum-root-to-leaf-numbers" target="_blank" rel="noreferrer">https://leetcode-cn.com/problems/sum-root-to-leaf-numbers</a> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p><h2 id="解题思路" tabindex="-1">解题思路 <a class="header-anchor" href="#解题思路" aria-label="Permalink to &quot;解题思路&quot;">​</a></h2><p>非常简单， 如果要改用迭代，也很简单，就是使用vec先保存节点，再去遍历</p><h2 id="解题过程" tabindex="-1">解题过程 <a class="header-anchor" href="#解题过程" aria-label="Permalink to &quot;解题过程&quot;">​</a></h2><div class="language-rust line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#F78C6C;">crate</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">share</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">TreeNode</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> std</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">cell</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">RefCell</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> std</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">rc</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">Rc</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#F78C6C;">impl</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">pub</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sum_numbers</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Option</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Rc</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">RefCell</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">TreeNode</span><span style="color:#89DDFF;">&gt;&gt;&gt;)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">i32</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> sum </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">Solution</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">internal</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> sum</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> sum</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">internal</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Option</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Rc</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">RefCell</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">TreeNode</span><span style="color:#89DDFF;">&gt;&gt;&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> path_sum</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">i32</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> sum</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">i32</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Some</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> root </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            path_sum </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> path_sum </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> r</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">borrow</span><span style="color:#89DDFF;">().</span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> r</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">borrow</span><span style="color:#89DDFF;">().</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">is_none</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> r</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">borrow</span><span style="color:#89DDFF;">().</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">is_none</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">sum </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> path_sum</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> //找到了一条路径</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">            //简单起见不做区分，尝试左右子节点</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">Solution</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">internal</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">borrow</span><span style="color:#89DDFF;">().</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clone</span><span style="color:#89DDFF;">(),</span><span style="color:#A6ACCD;"> path_sum</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> sum</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">Solution</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">internal</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">borrow</span><span style="color:#89DDFF;">().</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clone</span><span style="color:#89DDFF;">(),</span><span style="color:#A6ACCD;"> path_sum</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> sum</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">#[</span><span style="color:#A6ACCD;">cfg</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">test</span><span style="color:#89DDFF;">)]</span></span>
<span class="line"><span style="color:#C792EA;">mod</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">test</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">#[</span><span style="color:#A6ACCD;">warn</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">unused_imports</span><span style="color:#89DDFF;">)]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">super</span><span style="color:#89DDFF;">::*;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#F78C6C;">crate</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">share</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">build_tree</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#F78C6C;">crate</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">share</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">NULL</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">#[</span><span style="color:#A6ACCD;">test</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test_generate</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> t </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">build_tree</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#82AAFF;">vec!</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">assert_eq!</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1026</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">sum_numbers</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">t</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> t </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">build_tree</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#82AAFF;">vec!</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">assert_eq!</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">25</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">sum_numbers</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">t</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h2 id="一点感悟" tabindex="-1">一点感悟 <a class="header-anchor" href="#一点感悟" aria-label="Permalink to &quot;一点感悟&quot;">​</a></h2><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><p>欢迎关注我的<a href="https://github.com/nkbai" target="_blank" rel="noreferrer">github</a>,本项目文章所有代码都可以找到.</p>`,18),e=[o];function r(t,c,F,D,y,C){return a(),n("div",null,e)}const b=s(p,[["render",r]]);export{i as __pageData,b as default};
