import{o as n,c as s,e as a}from"./app.d25b71ec.js";const p='{"title":"987. 二叉树的垂序遍历","description":"","frontmatter":{"title":"987. 二叉树的垂序遍历","date":"2019-11-03T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["技术相关"],"plugins":["viz"]},"headers":[{"level":2,"title":"每天一道Rust-LeetCode(2019-11-04)","slug":"每天一道rust-leetcode-2019-11-04"},{"level":2,"title":"题目描述","slug":"题目描述"},{"level":2,"title":"解题思路","slug":"解题思路"},{"level":2,"title":"解题过程","slug":"解题过程"},{"level":2,"title":"一点感悟","slug":"一点感悟"},{"level":2,"title":"其他","slug":"其他"}],"relativePath":"rust-leetcode/2019-11-04.md","lastUpdated":1641139068385}',t={},e=[a('<h2 id="每天一道rust-leetcode-2019-11-04"><a class="header-anchor" href="#每天一道rust-leetcode-2019-11-04" aria-hidden="true">#</a> 每天一道Rust-LeetCode(2019-11-04)</h2><p>坚持每天一道题,刷题学习Rust.</p><h2 id="题目描述"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>给定二叉树，按垂序遍历返回其结点值。</p><p>对位于 (X, Y) 的每个结点而言，其左右子结点分别位于 (X-1, Y-1) 和 (X+1, Y-1)。</p><p>把一条垂线从 X = -infinity 移动到 X = +infinity ，每当该垂线与结点接触时，我们按从上到下的顺序报告结点的值（ Y 坐标递减）。</p><p>如果两个结点位置相同，则首先报告的结点值较小。</p><p>按 X 坐标顺序返回非空报告的列表。每个报告都有一个结点值列表。</p><p>示例 1：</p><div class="language-viz line-numbers-mode"><pre><code>digraph G {\n    node [shape=circle]\n    edge [arrowhead=vee]\n   3-&gt; 9\n   3-&gt; 20\n   20-&gt;15\n   20-&gt;7 \n}\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>输入：[3,9,20,null,null,15,7] 输出：[[9],[3,15],[20],[7]] 解释： 在不丧失其普遍性的情况下，我们可以假设根结点位于 (0, 0)： 然后，值为 9 的结点出现在 (-1, -1)； 值为 3 和 15 的两个结点分别出现在 (0, 0) 和 (0, -2)； 值为 20 的结点出现在 (1, -1)； 值为 7 的结点出现在 (2, -2)。 示例 2：</p><div class="language-viz line-numbers-mode"><pre><code>digraph G {\n    node [shape=circle]\n    edge [arrowhead=vee]\n   1-&gt; 2\n   1-&gt; 3\n   2-&gt;4\n   2-&gt;5\n   3-&gt;6\n   3-&gt;7  \n}\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>输入：[1,2,3,4,5,6,7] 输出：[[4],[2],[1,5,6],[3],[7]] 解释： 根据给定的方案，值为 5 和 6 的两个结点出现在同一位置。 然而，在报告 &quot;[1,5,6]&quot; 中，结点值 5 排在前面，因为 5 小于 6。</p><p>提示：</p><p>树的结点数介于 1 和 1000 之间。 每个结点值介于 0 和 1000 之间。</p><p>来源：力扣（LeetCode） 链接：<a href="https://leetcode-cn.com/problems/vertical-order-traversal-of-a-binary-tree" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/vertical-order-traversal-of-a-binary-tree</a> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p><h2 id="解题思路"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>按照深度优先遍历,</li><li>使用一个Btreemap来保存垂直层次关系 key: X坐标,value: <code>map&lt;Y,vec&lt;i32&gt;&gt;</code></li><li>针对X,Y坐标相同的位置,排序后返回结果</li></ol><h2 id="解题过程"><a class="header-anchor" href="#解题过程" aria-hidden="true">#</a> 解题过程</h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token class-name">TreeNode</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">RefCell</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>collections<span class="token punctuation">::</span></span><span class="token class-name">BTreeMap</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Rc</span><span class="token punctuation">;</span>\n\n<span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>\n    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">vertical_traversal</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> m <span class="token operator">=</span> <span class="token class-name">BTreeMap</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">vertical_traversal_internal</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> m<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> v <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        m<span class="token punctuation">.</span><span class="token function">iter_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">for_each</span><span class="token punctuation">(</span><span class="token closure-params"><span class="token closure-punctuation punctuation">|</span>m2<span class="token closure-punctuation punctuation">|</span></span> <span class="token punctuation">{</span>\n            <span class="token keyword">let</span> <span class="token keyword">mut</span> v2 <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;x={},m={:?}&quot;</span><span class="token punctuation">,</span> m2<span class="token number">.0</span><span class="token punctuation">,</span> m2<span class="token number">.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            m2<span class="token number">.1</span><span class="token punctuation">.</span><span class="token function">iter_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">for_each</span><span class="token punctuation">(</span><span class="token closure-params"><span class="token closure-punctuation punctuation">|</span>v3<span class="token closure-punctuation punctuation">|</span></span> <span class="token punctuation">{</span>\n                v3<span class="token number">.1</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                v2<span class="token punctuation">.</span><span class="token function">extend_from_slice</span><span class="token punctuation">(</span>v3<span class="token number">.1</span><span class="token punctuation">.</span><span class="token function">as_slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            v<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>v2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        v\n    <span class="token punctuation">}</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">vertical_traversal_internal</span><span class="token punctuation">(</span>\n        root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>\n        m<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token class-name">BTreeMap</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token punctuation">,</span> <span class="token class-name">BTreeMap</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token punctuation">,</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>\n        x<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span>\n        y<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span>\n    <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> root<span class="token punctuation">.</span><span class="token function">is_none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">let</span> r <span class="token operator">=</span> root<span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token keyword">let</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>m2<span class="token punctuation">)</span> <span class="token operator">=</span> m<span class="token punctuation">.</span><span class="token function">get_mut</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment">//x已经存在,y也存在,完全相同的位置,到时候需要排序的</span>\n            <span class="token keyword">if</span> <span class="token keyword">let</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">=</span> m2<span class="token punctuation">.</span><span class="token function">get_mut</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>y<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                v<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span>\n            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n                <span class="token comment">//x相同,但是y还不存在</span>\n                m2<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>y<span class="token punctuation">,</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span>r<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            <span class="token comment">//初次出现的X坐标</span>\n            <span class="token keyword">let</span> <span class="token keyword">mut</span> m2 <span class="token operator">=</span> <span class="token class-name">BTreeMap</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            m2<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>y<span class="token punctuation">,</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span>r<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            m<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> m2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token comment">/*\n            由于BTreeMap key排序比较麻烦,这里简单让y坐标向上增长,效果完全相同\n        */</span>\n        <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">vertical_traversal_internal</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> m<span class="token punctuation">,</span> x <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> y <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">vertical_traversal_internal</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> m<span class="token punctuation">,</span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> y <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token attribute attr-name">#[cfg(test)]</span>\n<span class="token keyword">mod</span> <span class="token module-declaration namespace">test</span> <span class="token punctuation">{</span>\n    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>\n    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token operator">*</span><span class="token punctuation">;</span>\n    <span class="token attribute attr-name">#[test]</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">test_find_duplcates_tree</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token function">build_tree_ignore_parent</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> null<span class="token punctuation">,</span> null<span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">vertical_traversal</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token function">build_tree_ignore_parent</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">vertical_traversal</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br></div></div><h2 id="一点感悟"><a class="header-anchor" href="#一点感悟" aria-hidden="true">#</a> 一点感悟</h2><h2 id="其他"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>欢迎关注我的<a href="https://github.com/nkbai/rust-leetcode" target="_blank" rel="noopener noreferrer">github</a>,本项目文章所有代码都可以找到.</p>',23)];t.render=function(a,p,t,o,c,l){return n(),s("div",null,e)};export{p as __pageData,t as default};
