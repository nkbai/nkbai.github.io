import{_ as s,c as n,o as a,N as l}from"./chunks/framework.3a9190c5.js";const i=JSON.parse('{"title":"99. 恢复二叉搜索树","description":"","frontmatter":{"title":"99. 恢复二叉搜索树","date":"2019-09-01T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["技术相关"]},"headers":[],"relativePath":"rust-leetcode/2019-09-02.md"}'),p={name:"rust-leetcode/2019-09-02.md"},o=l(`<h2 id="每天一道rust-leetcode-2019-09-02" tabindex="-1">每天一道Rust-LeetCode(2019-09-02) <a class="header-anchor" href="#每天一道rust-leetcode-2019-09-02" aria-label="Permalink to &quot;每天一道Rust-LeetCode(2019-09-02)&quot;">​</a></h2><p>坚持每天一道题,刷题学习Rust.</p><h2 id="题目描述" tabindex="-1">题目描述 <a class="header-anchor" href="#题目描述" aria-label="Permalink to &quot;题目描述&quot;">​</a></h2><p>二叉搜索树中的两个节点被错误地交换。</p><p>请在不改变其结构的情况下，恢复这棵树。</p><p>示例 1:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">输入: [1,3,null,null,2]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> 1</span></span>
<span class="line"><span style="color:#A6ACCD;">/</span></span>
<span class="line"><span style="color:#A6ACCD;">3</span></span>
<span class="line"><span style="color:#A6ACCD;">  \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">输出: [3,1,null,null,2]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> 3</span></span>
<span class="line"><span style="color:#A6ACCD;">/</span></span>
<span class="line"><span style="color:#A6ACCD;">1</span></span>
<span class="line"><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  2</span></span>
<span class="line"><span style="color:#A6ACCD;">示例 2:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">输入: [3,1,4,null,null,2]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  3</span></span>
<span class="line"><span style="color:#A6ACCD;"> / \\</span></span>
<span class="line"><span style="color:#A6ACCD;">1   4</span></span>
<span class="line"><span style="color:#A6ACCD;">/</span></span>
<span class="line"><span style="color:#A6ACCD;">2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">输出: [2,1,4,null,null,3]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  2</span></span>
<span class="line"><span style="color:#A6ACCD;"> / \\</span></span>
<span class="line"><span style="color:#A6ACCD;">1   4</span></span>
<span class="line"><span style="color:#A6ACCD;">/</span></span>
<span class="line"><span style="color:#A6ACCD;">3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>进阶:</p><p>使用 O(n) 空间复杂度的解法很容易实现。 你能想出一个只使用常数空间的解决方案吗？</p><p>来源：力扣（LeetCode） 链接：<a href="https://leetcode-cn.com/problems/recover-binary-search-tree" target="_blank" rel="noreferrer">https://leetcode-cn.com/problems/recover-binary-search-tree</a> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p><h2 id="解题思路" tabindex="-1">解题思路 <a class="header-anchor" href="#解题思路" aria-label="Permalink to &quot;解题思路&quot;">​</a></h2><p>采用中序遍历,题目中明确只交换了两个节点,多次交换的情况不考虑. 那么无序部分一定是某棵子树中左子树中某一个节点(包含root)应该放在右子树中.</p><ol><li>用preNode表示遍历到当前节点时的前一个节点,正常情况下,他应该小于当前节点</li><li>如果遍历到preNode大于等于自身的情况,说明preNode错了,这是第一个错误节点</li><li>在找到第一个错误节点的情况下,如果还出现preNode大于等于自身的情况,说明这是第二个错误节点 满足条件三的可能会出现两次以上, 只出现一次的情况: 失序情况, 父节点和右子节点直接调换 两次的情况: 其他调换</li></ol><h2 id="解题过程" tabindex="-1">解题过程 <a class="header-anchor" href="#解题过程" aria-label="Permalink to &quot;解题过程&quot;">​</a></h2><div class="language-rust line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#F78C6C;">crate</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">share</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">TreeNode</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> rand</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">distributions</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">uniform</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">SampleBorrow</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> std</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">cell</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">RefCell</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> std</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">rc</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">Rc</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#C792EA;">struct</span><span style="color:#A6ACCD;"> arg </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    first_node</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Option</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Rc</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">RefCell</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">TreeNode</span><span style="color:#89DDFF;">&gt;&gt;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    second_node</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Option</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Rc</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">RefCell</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">TreeNode</span><span style="color:#89DDFF;">&gt;&gt;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    pre_node</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Option</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Rc</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">RefCell</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">TreeNode</span><span style="color:#89DDFF;">&gt;&gt;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    pre_node_value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">i32</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">impl</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    //没有self,只好用这种方式来传参数了,比较丑陋</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">recover_internal</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> arg</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> root</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Option</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Rc</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">RefCell</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">TreeNode</span><span style="color:#89DDFF;">&gt;&gt;&gt;)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> root</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">is_none</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> r </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> root</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">as_ref</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">unwrap</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">borrow_mut</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> v </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> r</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">Solution</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">recover_internal</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> r</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">first_node</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">is_none</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">pre_node</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">is_some</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">pre_node_value </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> v </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">first_node </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">pre_node</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clone</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">first_node</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">is_some</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">pre_node_value </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> v </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">second_node </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> root</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clone</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">pre_node </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> root</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clone</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">pre_node_value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> r</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">Solution</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">recover_internal</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> r</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">pub</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">recover_tree</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Option</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Rc</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">RefCell</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">TreeNode</span><span style="color:#89DDFF;">&gt;&gt;&gt;)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arg </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            first_node</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">None</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            second_node</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">None</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            pre_node</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">None</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            pre_node_value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">Solution</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">recover_internal</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> root</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> t </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">first_node</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">as_mut</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">unwrap</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">borrow_mut</span><span style="color:#89DDFF;">().</span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">first_node</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">as_mut</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">unwrap</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">borrow_mut</span><span style="color:#89DDFF;">().</span><span style="color:#A6ACCD;">val </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">            a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">second_node</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">as_mut</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">unwrap</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">borrow_mut</span><span style="color:#89DDFF;">().</span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">second_node</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">as_mut</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">unwrap</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">borrow_mut</span><span style="color:#89DDFF;">().</span><span style="color:#A6ACCD;">val </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> t</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">#[</span><span style="color:#A6ACCD;">cfg</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">test</span><span style="color:#89DDFF;">)]</span></span>
<span class="line"><span style="color:#C792EA;">mod</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">test</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">super</span><span style="color:#89DDFF;">::*;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#F78C6C;">crate</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">share</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">build_tree</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#F78C6C;">crate</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">share</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">NULL</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">#[</span><span style="color:#A6ACCD;">test</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test_num_trees</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> r </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">build_tree</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#82AAFF;">vec!</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> NULL</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> NULL</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">Solution</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">recover_tree</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> r</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">println!</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">r=</span><span style="color:#89DDFF;">{</span><span style="color:#C3E88D;">:?</span><span style="color:#89DDFF;">}&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> r</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> r </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">build_tree</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#82AAFF;">vec!</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> NULL</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> NULL</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">Solution</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">recover_tree</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> r</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">println!</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">r=</span><span style="color:#89DDFF;">{</span><span style="color:#C3E88D;">:?</span><span style="color:#89DDFF;">}&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> r</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div><h2 id="一点感悟" tabindex="-1">一点感悟 <a class="header-anchor" href="#一点感悟" aria-label="Permalink to &quot;一点感悟&quot;">​</a></h2><p>一开始arg里面没有保存pre_node_value,只保存了pre_node,这编译的过去 但是会造成RefCell的borrow_mut和borrow同时存在,从而出错.</p><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><p>欢迎关注我的<a href="https://github.com/nkbai" target="_blank" rel="noreferrer">github</a>,本项目文章所有代码都可以找到.</p>`,19),e=[o];function r(c,t,F,D,y,C){return a(),n("div",null,e)}const b=s(p,[["render",r]]);export{i as __pageData,b as default};
