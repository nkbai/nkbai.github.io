import{o as n,c as s,e as a}from"./app.f8197458.js";const p='{"title":"108. 将有序数组转换为二叉搜索树","description":"","frontmatter":{"title":"108. 将有序数组转换为二叉搜索树","date":"2019-09-04T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["技术相关"]},"headers":[{"level":2,"title":"每天一道Rust-LeetCode(2019-09-05)","slug":"每天一道rust-leetcode-2019-09-05"},{"level":2,"title":"题目描述","slug":"题目描述"},{"level":2,"title":"解题思路","slug":"解题思路"},{"level":2,"title":"解题过程","slug":"解题过程"},{"level":2,"title":"一点感悟","slug":"一点感悟"},{"level":2,"title":"其他","slug":"其他"}],"relativePath":"rust-leetcode/2019-09-05.md","lastUpdated":1582015486000}',t={},e=[a('<h2 id="每天一道rust-leetcode-2019-09-05"><a class="header-anchor" href="#每天一道rust-leetcode-2019-09-05" aria-hidden="true">#</a> 每天一道Rust-LeetCode(2019-09-05)</h2><p>坚持每天一道题,刷题学习Rust.</p><h2 id="题目描述"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。</p><p>本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。</p><p>示例:</p><p>给定有序数组: [-10,-3,0,5,9],</p><p>一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：</p><div class="language-"><pre><code>      0\n     / \\\n   -3   9\n   /   /\n -10  5\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>来源：力扣（LeetCode） 链接：<a href="https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree</a> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p><h2 id="解题思路"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>递归去解,每次都是从数组中间分割,前半部分构造左子树,中间作为root,后半部分作为右子树</p><h2 id="解题过程"><a class="header-anchor" href="#解题过程" aria-hidden="true">#</a> 解题过程</h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token class-name">TreeNode</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">RefCell</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Rc</span><span class="token punctuation">;</span>\n<span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>\n    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">internal</span><span class="token punctuation">(</span>nums<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">match</span> nums<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token number">0</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n                <span class="token keyword">return</span> <span class="token class-name">None</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            <span class="token number">1</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n                <span class="token keyword">return</span> <span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token class-name">Rc</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">RefCell</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> <span class="token punctuation">{</span>\n                    val<span class="token punctuation">:</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                    left<span class="token punctuation">:</span> <span class="token class-name">None</span><span class="token punctuation">,</span>\n                    right<span class="token punctuation">:</span> <span class="token class-name">None</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n            <span class="token punctuation">}</span>\n            _ <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n                <span class="token keyword">let</span> l <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token keyword">let</span> <span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span> <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">split_at</span><span class="token punctuation">(</span>l <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token keyword">let</span> <span class="token punctuation">(</span>r0<span class="token punctuation">,</span> r1<span class="token punctuation">)</span> <span class="token operator">=</span> right<span class="token punctuation">.</span><span class="token function">split_at</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token keyword">let</span> root <span class="token operator">=</span> <span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token class-name">Rc</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">RefCell</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> <span class="token punctuation">{</span>\n                    val<span class="token punctuation">:</span> r0<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                    left<span class="token punctuation">:</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">internal</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                    right<span class="token punctuation">:</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">internal</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span>r1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token keyword">return</span> root<span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">sorted_array_to_bst</span><span class="token punctuation">(</span>nums<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">internal</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token attribute attr-name">#[cfg(test)]</span>\n<span class="token keyword">mod</span> <span class="token module-declaration namespace">test</span> <span class="token punctuation">{</span>\n    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>\n    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span>build_tree<span class="token punctuation">;</span>\n    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token constant">NULL</span><span class="token punctuation">;</span>\n    <span class="token attribute attr-name">#[test]</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">test_num_trees</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> r <span class="token operator">=</span> <span class="token function">build_tree</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">sorted_array_to_bst</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><h2 id="一点感悟"><a class="header-anchor" href="#一点感悟" aria-hidden="true">#</a> 一点感悟</h2><h2 id="其他"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>欢迎关注我的<a href="https://github.com/nkbai" target="_blank" rel="noopener noreferrer">github</a>,本项目文章所有代码都可以找到.</p>',17)];t.render=function(a,p,t,o,c,l){return n(),s("div",null,e)};export{p as __pageData,t as default};