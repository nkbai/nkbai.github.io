import{o as n,c as s,e as a}from"./app.d25b71ec.js";const p='{"title":"98. 验证二叉搜索树","description":"","frontmatter":{"title":"98. 验证二叉搜索树","date":"2019-06-17T03:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["技术相关"]},"headers":[{"level":2,"title":"每天一道Rust-LeetCode(2019-06-17)","slug":"每天一道rust-leetcode-2019-06-17"},{"level":2,"title":"题目描述","slug":"题目描述"},{"level":2,"title":"解题过程","slug":"解题过程"},{"level":2,"title":"一点感悟","slug":"一点感悟"},{"level":2,"title":"其他","slug":"其他"}],"relativePath":"rust-leetcode/2019-06-17.md","lastUpdated":1582015486000}',t={},e=[a('<h2 id="每天一道rust-leetcode-2019-06-17"><a class="header-anchor" href="#每天一道rust-leetcode-2019-06-17" aria-hidden="true">#</a> 每天一道Rust-LeetCode(2019-06-17)</h2><p>坚持每天一道题,刷题学习Rust.</p><h2 id="题目描述"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p><a href="https://leetcode-cn.com/problems/validate-binary-search-tree/" target="_blank" rel="noopener noreferrer">验证二叉搜索树</a> 给定一个二叉树，判断其是否是一个有效的二叉搜索树。</p><p>假设一个二叉搜索树具有如下特征：</p><p>节点的左子树只包含小于当前节点的数。 节点的右子树只包含大于当前节点的数。 所有左子树和右子树自身必须也是二叉搜索树。</p><div class="language-"><pre><code>示例 1:\n\n输入:\n    2\n   / \\\n  1   3\n输出: true\n示例 2:\n\n输入:\n    5\n   / \\\n  1   4\n/ \\\n3   6\n输出: false\n解释: 输入为: [5,1,4,null,null,3,6]。\n根节点的值为 5 ，但是其右子节点值为 4 。\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>来源：力扣（LeetCode） 链接：<a href="https://leetcode-cn.com/problems/validate-binary-search-tree" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/validate-binary-search-tree</a> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p><h2 id="解题过程"><a class="header-anchor" href="#解题过程" aria-hidden="true">#</a> 解题过程</h2><p>思路: 二叉搜索树的特点是:左子树都小于自己,右子树都大于自己 这样就可以听过给每个子树一个最大值最小值来判断其是否是bst了</p><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token class-name">TreeNode</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token namespace">core<span class="token punctuation">::</span>borrow<span class="token punctuation">::</span></span><span class="token class-name">Borrow</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">RefCell</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Rc</span><span class="token punctuation">;</span>\n<span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>\n    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">is_valid_bst</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">bool</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">is_valid_bst_internal</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token class-name">None</span><span class="token punctuation">,</span> <span class="token class-name">None</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">//因为出现这种情况[2147483647,2147483647],所以边界必须定义成option</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">is_valid_bst_internal</span><span class="token punctuation">(</span>\n        root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>\n        low<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>\n        upper<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">bool</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> root<span class="token punctuation">.</span><span class="token function">is_none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">let</span> r <span class="token operator">=</span> root<span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">//题目恶心人的地方就在于卡边界</span>\n        <span class="token keyword">match</span> <span class="token punctuation">(</span>low<span class="token punctuation">,</span> upper<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token punctuation">(</span><span class="token class-name">None</span><span class="token punctuation">,</span> <span class="token class-name">None</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n            <span class="token punctuation">(</span><span class="token class-name">None</span><span class="token punctuation">,</span> <span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token keyword">ref</span> x<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n                <span class="token keyword">if</span> r<span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val <span class="token operator">&gt;=</span> <span class="token operator">*</span>x <span class="token punctuation">{</span>\n                    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n            <span class="token punctuation">(</span><span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token keyword">ref</span> x<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">None</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n                <span class="token keyword">if</span> r<span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val <span class="token operator">&lt;=</span> <span class="token operator">*</span>x <span class="token punctuation">{</span>\n                    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n            <span class="token punctuation">(</span><span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token keyword">ref</span> l<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token keyword">ref</span> u<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n                <span class="token keyword">if</span> <span class="token operator">!</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val <span class="token operator">&gt;</span> <span class="token operator">*</span>l <span class="token operator">&amp;&amp;</span> r<span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val <span class="token operator">&lt;</span> <span class="token operator">*</span>u<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">if</span> <span class="token operator">!</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">is_valid_bst_internal</span><span class="token punctuation">(</span>\n            r<span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            low<span class="token punctuation">,</span>\n            <span class="token class-name">Some</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">if</span> <span class="token operator">!</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">is_valid_bst_internal</span><span class="token punctuation">(</span>\n            r<span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            <span class="token class-name">Some</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">,</span>\n            upper<span class="token punctuation">,</span>\n        <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token boolean">true</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token attribute attr-name">#[cfg(test)]</span>\n<span class="token keyword">mod</span> <span class="token module-declaration namespace">test</span> <span class="token punctuation">{</span>\n    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>\n    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span>build_tree<span class="token punctuation">;</span>\n    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token constant">NULL</span><span class="token punctuation">;</span>\n    <span class="token attribute attr-name">#[test]</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">test_is_valid_bst</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token function">build_tree</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">is_valid_bst</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token function">build_tree</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">is_valid_bst</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token function">build_tree</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">2147483647</span><span class="token punctuation">,</span> <span class="token number">2147483647</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">is_valid_bst</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br></div></div><h2 id="一点感悟"><a class="header-anchor" href="#一点感悟" aria-hidden="true">#</a> 一点感悟</h2><p>这个题目本来很简单,但是因为题库里总是在卡边界,导致</p><div class="language-rust line-numbers-mode"><pre><code> <span class="token keyword">fn</span> <span class="token function-definition function">is_valid_bst_internal</span><span class="token punctuation">(</span>\n        root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>\n        low<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span>\n        upper<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span>\n    <span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">bool</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>这种原型根本不可正确,因此不得已把原型改为:</p><div class="language-rust line-numbers-mode"><pre><code> <span class="token keyword">fn</span> <span class="token function-definition function">is_valid_bst_internal</span><span class="token punctuation">(</span>\n        root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>\n        low<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>\n        upper<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">bool</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>也就是说边界不可能用std::i32::MIN,MAX来检测,只能通过专用的标志</p><h2 id="其他"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>欢迎关注我的<a href="https://github.com/nkbai" target="_blank" rel="noopener noreferrer">github</a>,本项目文章所有代码都可以找到.</p>',19)];t.render=function(a,p,t,o,c,l){return n(),s("div",null,e)};export{p as __pageData,t as default};
