import{o as n,c as s,e as a}from"./app.d25b71ec.js";const p='{"title":"814. 二叉树剪枝","description":"","frontmatter":{"title":"814. 二叉树剪枝","date":"2019-10-18T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["技术相关"],"plugins":["viz"]},"headers":[{"level":2,"title":"每天一道Rust-LeetCode(2019-10-19)","slug":"每天一道rust-leetcode-2019-10-19"},{"level":2,"title":"题目描述","slug":"题目描述"},{"level":2,"title":"解题思路","slug":"解题思路"},{"level":2,"title":"解题过程","slug":"解题过程"},{"level":2,"title":"一点感悟","slug":"一点感悟"},{"level":2,"title":"其他","slug":"其他"}],"relativePath":"rust-leetcode/2019-10-19.md","lastUpdated":1641142429980}',t={},e=[a('<h2 id="每天一道rust-leetcode-2019-10-19"><a class="header-anchor" href="#每天一道rust-leetcode-2019-10-19" aria-hidden="true">#</a> 每天一道Rust-LeetCode(2019-10-19)</h2><p>坚持每天一道题,刷题学习Rust.</p><h2 id="题目描述"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>给定二叉树根结点 root ，此外树的每个结点的值要么是 0，要么是 1。</p><p>返回移除了所有不包含 1 的子树的原二叉树。</p><p>( 节点 X 的子树为 X 本身，以及所有 X 的后代。)</p><p>示例1: 输入: [1,null,0,0,1] 输出: [1,null,0,null,1]</p><p>解释: 只有红色节点满足条件“所有不包含 1 的子树”。 右图为返回的答案。</p><div class="language-graphviz line-numbers-mode"><pre><code>digraph G {\n    node [shape=circle]\n    edge [arrowhead=vee]\n    n_b1_1 [label=&quot;1&quot;,fontcolor=&quot;blue&quot;]\n    n_b0_1 [label=&quot;0&quot;,fontcolor=&quot;blue&quot;]\n    n_b0_2 [label=&quot;0&quot;,fontcolor=&quot;red&quot;]\n    n_b1_2 [label=&quot;1&quot;,fillcolor=&quot;blue&quot;]\n \n    n_b1_1-&gt;n_b0_1\n    n_b0_1-&gt;n_b0_2\n    n_b0_1-&gt;n_b1_2\n}\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-graphviz line-numbers-mode"><pre><code>digraph G {\n    node [shape=circle]\n    edge [arrowhead=vee]\n    n_b1_1 [label=&quot;1&quot;,fontcolor=&quot;blue&quot;]\n    n_b0_1 [label=&quot;0&quot;,fontcolor=&quot;blue&quot;]\n    \n    n_b1_2 [label=&quot;1&quot;,fillcolor=&quot;blue&quot;]\n \n    n_b1_1-&gt;n_b0_1\n    n_b0_1-&gt;n_b1_2\n}\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>示例2: 输入: [1,0,1,0,0,0,1] 输出: [1,null,1,null,1] <img alt="" data-src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/06/1028_1.png" loading="lazy" class="lazy"></p><p>示例3: 输入: [1,1,0,1,1,0,1,0] 输出: [1,1,0,1,1,null,1] <img alt="" data-src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/05/1028.png" loading="lazy" class="lazy"></p><p>说明:</p><p>给定的二叉树最多有 100 个节点。 每个节点的值只会为 0 或 1 。</p><p>来源：力扣（LeetCode） 链接：<a href="https://leetcode-cn.com/problems/binary-tree-pruning" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/binary-tree-pruning</a> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p><h2 id="解题思路"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>递归,自底向上判断要不要剪除</p><h2 id="解题过程"><a class="header-anchor" href="#解题过程" aria-hidden="true">#</a> 解题过程</h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token class-name">TreeNode</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token punctuation">{</span><span class="token class-name">Ref</span><span class="token punctuation">,</span> <span class="token class-name">RefCell</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Rc</span><span class="token punctuation">;</span>\n\n<span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>\n    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">prune_tree</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">prune_internal</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            root\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            <span class="token class-name">None</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">prune_internal</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">TreeNode</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">bool</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> root<span class="token punctuation">.</span><span class="token function">is_none</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">let</span> r <span class="token operator">=</span> root<span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> ret <span class="token operator">=</span> r<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">prune_internal</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            ret <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            r<span class="token punctuation">.</span><span class="token function">borrow_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token class-name">None</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">if</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">prune_internal</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            ret <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            r<span class="token punctuation">.</span><span class="token function">borrow_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token class-name">None</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> ret<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token attribute attr-name">#[cfg(test)]</span>\n<span class="token keyword">mod</span> <span class="token module-declaration namespace">test</span> <span class="token punctuation">{</span>\n    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>\n    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token operator">*</span><span class="token punctuation">;</span>\n    <span class="token attribute attr-name">#[test]</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">test_find_duplcates_tree</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token function">build_tree_ignore_parent</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">prune_tree</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;r={}&quot;</span><span class="token punctuation">,</span> <span class="token function">serialize_tree</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> <span class="token function">build_tree_ignore_parent</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> null<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><h2 id="一点感悟"><a class="header-anchor" href="#一点感悟" aria-hidden="true">#</a> 一点感悟</h2><h2 id="其他"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>欢迎关注我的<a href="https://github.com/nkbai" target="_blank" rel="noopener noreferrer">github</a>,本项目文章所有代码都可以找到.</p>',22)];t.render=function(a,p,t,o,l,c){return n(),s("div",null,e)};export{p as __pageData,t as default};
