import{_ as s,c as n,o as a,N as l}from"./chunks/framework.3a9190c5.js";const i=JSON.parse('{"title":"108. 将有序数组转换为二叉搜索树","description":"","frontmatter":{"title":"108. 将有序数组转换为二叉搜索树","date":"2019-09-04T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["技术相关"]},"headers":[],"relativePath":"rust-leetcode/2019-09-05.md"}'),p={name:"rust-leetcode/2019-09-05.md"},o=l(`<h2 id="每天一道rust-leetcode-2019-09-05" tabindex="-1">每天一道Rust-LeetCode(2019-09-05) <a class="header-anchor" href="#每天一道rust-leetcode-2019-09-05" aria-label="Permalink to &quot;每天一道Rust-LeetCode(2019-09-05)&quot;">​</a></h2><p>坚持每天一道题,刷题学习Rust.</p><h2 id="题目描述" tabindex="-1">题目描述 <a class="header-anchor" href="#题目描述" aria-label="Permalink to &quot;题目描述&quot;">​</a></h2><p>将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。</p><p>本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。</p><p>示例:</p><p>给定有序数组: [-10,-3,0,5,9],</p><p>一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">      0</span></span>
<span class="line"><span style="color:#A6ACCD;">     / \\</span></span>
<span class="line"><span style="color:#A6ACCD;">   -3   9</span></span>
<span class="line"><span style="color:#A6ACCD;">   /   /</span></span>
<span class="line"><span style="color:#A6ACCD;"> -10  5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>来源：力扣（LeetCode） 链接：<a href="https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree" target="_blank" rel="noreferrer">https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree</a> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p><h2 id="解题思路" tabindex="-1">解题思路 <a class="header-anchor" href="#解题思路" aria-label="Permalink to &quot;解题思路&quot;">​</a></h2><p>递归去解,每次都是从数组中间分割,前半部分构造左子树,中间作为root,后半部分作为右子树</p><h2 id="解题过程" tabindex="-1">解题过程 <a class="header-anchor" href="#解题过程" aria-label="Permalink to &quot;解题过程&quot;">​</a></h2><div class="language-rust line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#F78C6C;">crate</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">share</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">TreeNode</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> std</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">cell</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">RefCell</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> std</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">rc</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">Rc</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">impl</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">pub</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">internal</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#FFCB6B;">Vec</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">i32</span><span style="color:#89DDFF;">&gt;)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Option</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Rc</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">RefCell</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">TreeNode</span><span style="color:#89DDFF;">&gt;&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">match</span><span style="color:#A6ACCD;"> nums</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">None</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Some</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Rc</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">RefCell</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">TreeNode</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    val</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> nums</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">                    left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">None</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">None</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">})))</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">            _ </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> l </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> nums</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> right</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> nums</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split_at</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">l </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">r0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> r1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> right</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split_at</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> root </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Some</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Rc</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">RefCell</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">TreeNode</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    val</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> r0</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">                    left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">internal</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#FFCB6B;">Vec</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">from</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">)),</span></span>
<span class="line"><span style="color:#A6ACCD;">                    right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">internal</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#FFCB6B;">Vec</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">from</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">r1</span><span style="color:#89DDFF;">)),</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">})));</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> root</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">pub</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sorted_array_to_bst</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Vec</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">i32</span><span style="color:#89DDFF;">&gt;)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Option</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Rc</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">RefCell</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">TreeNode</span><span style="color:#89DDFF;">&gt;&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">internal</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">#[</span><span style="color:#A6ACCD;">cfg</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">test</span><span style="color:#89DDFF;">)]</span></span>
<span class="line"><span style="color:#C792EA;">mod</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">test</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">super</span><span style="color:#89DDFF;">::*;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#F78C6C;">crate</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">share</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">build_tree</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#F78C6C;">crate</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">share</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">NULL</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">#[</span><span style="color:#A6ACCD;">test</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test_num_trees</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> r </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">build_tree</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#82AAFF;">vec!</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> NULL</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">assert_eq!</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Solution</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">sorted_array_to_bst</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">vec!</span><span style="color:#89DDFF;">[-</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">]),</span><span style="color:#A6ACCD;"> r</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><h2 id="一点感悟" tabindex="-1">一点感悟 <a class="header-anchor" href="#一点感悟" aria-label="Permalink to &quot;一点感悟&quot;">​</a></h2><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><p>欢迎关注我的<a href="https://github.com/nkbai" target="_blank" rel="noreferrer">github</a>,本项目文章所有代码都可以找到.</p>`,17),e=[o];function r(t,c,F,D,y,C){return a(),n("div",null,e)}const b=s(p,[["render",r]]);export{i as __pageData,b as default};