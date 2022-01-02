import{o as n,c as s,e as a}from"./app.d25b71ec.js";const p='{"title":"307. 区域和检索 - 数组可修改","description":"","frontmatter":{"title":"307. 区域和检索 - 数组可修改","date":"2020-03-29T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["技术相关"],"plugins":["viz"]},"headers":[{"level":2,"title":"每天一道Rust-LeetCode(2020-03-30)","slug":"每天一道rust-leetcode-2020-03-30"},{"level":2,"title":"题目描述","slug":"题目描述"},{"level":2,"title":"解题思路","slug":"解题思路"},{"level":2,"title":"解题过程","slug":"解题过程"},{"level":2,"title":"一点感悟","slug":"一点感悟"},{"level":2,"title":"其他","slug":"其他"}],"relativePath":"rust-leetcode/2020-03-30.md","lastUpdated":1585494267000}',t={},e=[a('<h2 id="每天一道rust-leetcode-2020-03-30"><a class="header-anchor" href="#每天一道rust-leetcode-2020-03-30" aria-hidden="true">#</a> 每天一道Rust-LeetCode(2020-03-30)</h2><p>坚持每天一道题,刷题学习Rust.</p><h2 id="题目描述"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>给定一个整数数组  nums，求出数组从索引 i 到 j  (i ≤ j) 范围内元素的总和，包含 i,  j 两点。</p><p>update(i, val) 函数可以通过将下标为 i 的数值更新为 val，从而对数列进行修改。</p><p>示例:</p><p>Given nums = [1, 3, 5]</p><p>sumRange(0, 2) -&gt; 9 update(1, 2) sumRange(0, 2) -&gt; 8 说明:</p><p>数组仅可以在 update 函数下进行修改。 你可以假设 update 函数与 sumRange 函数的调用次数是均匀分布的。</p><p>来源：力扣（LeetCode） 链接：<a href="https://leetcode-cn.com/problems/range-sum-query-mutable" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/range-sum-query-mutable</a> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p><h2 id="解题思路"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>一个简单的思路是求出[0:i]的累加和,这样求sumRange复杂度就是1, 但是Update的复杂度就是O(N),其中N是数组的长度. 显然不合适.</p><p>诉诸线段树,这样sumRange的复杂度是O(logN),update的复杂度也是O(logN)</p><h2 id="解题过程"><a class="header-anchor" href="#解题过程" aria-hidden="true">#</a> 解题过程</h2><div class="language-rust line-numbers-mode"><pre><code><span class="token attribute attr-name">#[derive(Debug)]</span>\n<span class="token keyword">struct</span> <span class="token type-definition class-name">SegmentTreeNode</span> <span class="token punctuation">{</span>\n    <span class="token comment">//本节点的起始地址</span>\n    start<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">,</span>\n    end<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">,</span>\n    sum<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span>\n    left<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Box</span><span class="token operator">&lt;</span><span class="token class-name">SegmentTreeNode</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>\n    right<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Box</span><span class="token operator">&lt;</span><span class="token class-name">SegmentTreeNode</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">impl</span> <span class="token class-name">SegmentTreeNode</span> <span class="token punctuation">{</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">new</span><span class="token punctuation">(</span>nums<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token punctuation">[</span><span class="token keyword">i32</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">Self</span> <span class="token punctuation">{</span>\n        <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">build</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">//组装成二叉树形状的线段树</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">build</span><span class="token punctuation">(</span>nums<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token punctuation">[</span><span class="token keyword">i32</span><span class="token punctuation">]</span><span class="token punctuation">,</span> start<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">,</span> end<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">SegmentTreeNode</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> start <span class="token operator">==</span> end <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token class-name">SegmentTreeNode</span> <span class="token punctuation">{</span>\n                start<span class="token punctuation">,</span>\n                end<span class="token punctuation">,</span>\n                sum<span class="token punctuation">:</span> nums<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">,</span>\n                left<span class="token punctuation">:</span> <span class="token class-name">None</span><span class="token punctuation">,</span>\n                right<span class="token punctuation">:</span> <span class="token class-name">None</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">let</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span>start <span class="token operator">+</span> end<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">build</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> start<span class="token punctuation">,</span> mid<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">build</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">SegmentTreeNode</span> <span class="token punctuation">{</span>\n            start<span class="token punctuation">,</span>\n            end<span class="token punctuation">,</span>\n            sum<span class="token punctuation">:</span> left<span class="token punctuation">.</span>sum <span class="token operator">+</span> right<span class="token punctuation">.</span>sum<span class="token punctuation">,</span>\n            left<span class="token punctuation">:</span> <span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token class-name">Box</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            right<span class="token punctuation">:</span> <span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token class-name">Box</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">/*\n    比如[0,1,2,3,4]\n    如果更新0,则会涉及到区间[0,0],[0,1],[0,1,2],[0,1,2,3,4]\n    */</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">update</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">self</span><span class="token punctuation">,</span> i<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">,</span> val<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token keyword">self</span><span class="token punctuation">.</span>start <span class="token operator">==</span> <span class="token keyword">self</span><span class="token punctuation">.</span>end <span class="token operator">&amp;&amp;</span> <span class="token keyword">self</span><span class="token punctuation">.</span>start <span class="token operator">==</span> i <span class="token punctuation">{</span>\n            <span class="token keyword">self</span><span class="token punctuation">.</span>sum <span class="token operator">=</span> val<span class="token punctuation">;</span>\n            <span class="token keyword">return</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">if</span> <span class="token keyword">self</span><span class="token punctuation">.</span>start <span class="token operator">&gt;</span> i <span class="token operator">||</span> <span class="token keyword">self</span><span class="token punctuation">.</span>end <span class="token operator">&lt;</span> i <span class="token punctuation">{</span>\n            <span class="token macro property">panic!</span><span class="token punctuation">(</span><span class="token string">&quot;range error,i={},node={:?}&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token keyword">self</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">as_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">as_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> i <span class="token operator">&lt;=</span> left<span class="token punctuation">.</span>end <span class="token punctuation">{</span>\n            left<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            right<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">self</span><span class="token punctuation">.</span>sum <span class="token operator">=</span> left<span class="token punctuation">.</span>sum <span class="token operator">+</span> right<span class="token punctuation">.</span>sum<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">//查询一个区间和,</span>\n    <span class="token comment">//以[0-4]为例,如果想查询[1,3]</span>\n    <span class="token comment">//那么[0-4]的left为[0-2],right为[3-4]</span>\n    <span class="token comment">//所以在左侧查[1-2],右侧查[3-3]</span>\n    <span class="token comment">//以此类推,知道得到结果</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">sum_range</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">,</span> start<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">,</span> end<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token keyword">self</span><span class="token punctuation">.</span>start <span class="token operator">==</span> start <span class="token operator">&amp;&amp;</span> <span class="token keyword">self</span><span class="token punctuation">.</span>end <span class="token operator">==</span> end <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token keyword">self</span><span class="token punctuation">.</span>sum<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token comment">//不匹配,那么一定由self.start&lt;=start&lt;=end&lt;=self.end</span>\n        <span class="token comment">//否则应该panic</span>\n        <span class="token keyword">if</span> <span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">.</span>start <span class="token operator">&lt;=</span> start <span class="token operator">&amp;&amp;</span> start <span class="token operator">&lt;=</span> end <span class="token operator">&amp;&amp;</span> end <span class="token operator">&lt;=</span> <span class="token keyword">self</span><span class="token punctuation">.</span>end<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token macro property">panic!</span><span class="token punctuation">(</span><span class="token string">&quot;range error,start={},end={},node={:?}&quot;</span><span class="token punctuation">,</span> start<span class="token punctuation">,</span> end<span class="token punctuation">,</span> <span class="token keyword">self</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> end <span class="token operator">&lt;=</span> left<span class="token punctuation">.</span>end <span class="token punctuation">{</span>\n            <span class="token comment">//全部落在了左侧区域</span>\n            <span class="token keyword">return</span> left<span class="token punctuation">.</span><span class="token function">sum_range</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> right<span class="token punctuation">.</span>start <span class="token operator">&lt;=</span> start <span class="token punctuation">{</span>\n            <span class="token comment">//全部落在了右侧区域</span>\n            <span class="token keyword">return</span> right<span class="token punctuation">.</span><span class="token function">sum_range</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            <span class="token comment">//左右多有</span>\n            <span class="token keyword">let</span> s1 <span class="token operator">=</span> left<span class="token punctuation">.</span><span class="token function">sum_range</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> left<span class="token punctuation">.</span>end<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">let</span> s2 <span class="token operator">=</span> right<span class="token punctuation">.</span><span class="token function">sum_range</span><span class="token punctuation">(</span>right<span class="token punctuation">.</span>start<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">return</span> s1 <span class="token operator">+</span> s2<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">struct</span> <span class="token type-definition class-name">NumArray</span> <span class="token punctuation">{</span>\n    root<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">SegmentTreeNode</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/**\n * `&amp;self` means the method takes an immutable reference.\n * If you need a mutable reference, change it to `&amp;mut self` instead.\n */</span>\n<span class="token keyword">impl</span> <span class="token class-name">NumArray</span> <span class="token punctuation">{</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">new</span><span class="token punctuation">(</span>nums<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">Self</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> nums<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token keyword">Self</span> <span class="token punctuation">{</span> root<span class="token punctuation">:</span> <span class="token class-name">None</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">Self</span> <span class="token punctuation">{</span>\n            root<span class="token punctuation">:</span> <span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token class-name">SegmentTreeNode</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span><span class="token function">as_slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">fn</span> <span class="token function-definition function">update</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">self</span><span class="token punctuation">,</span> i<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span> val<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">self</span><span class="token punctuation">.</span>root<span class="token punctuation">.</span><span class="token function">as_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>i <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">fn</span> <span class="token function-definition function">sum_range</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">,</span> i<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span> j<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>\n        <span class="token keyword">self</span><span class="token punctuation">.</span>root\n            <span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">sum_range</span><span class="token punctuation">(</span>i <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">,</span> j <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token attribute attr-name">#[cfg(test)]</span>\n<span class="token keyword">mod</span> <span class="token module-declaration namespace">test</span> <span class="token punctuation">{</span>\n    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>\n    <span class="token attribute attr-name">#[test]</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> t <span class="token operator">=</span> <span class="token class-name">NumArray</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">sum_range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        t<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">sum_range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br></div></div><h2 id="一点感悟"><a class="header-anchor" href="#一点感悟" aria-hidden="true">#</a> 一点感悟</h2><p>复杂度O(1)-&gt;O(LogN)-&gt;O(N)-&gt;O(N<sup>2)-&gt;O(N</sup>3)-&gt;O(2^N) 想从O(N)降为O(LogN)就要从二分法入手.</p><h2 id="其他"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>欢迎关注我的<a href="https://github.com/nkbai/rust-leetcode" target="_blank" rel="noopener noreferrer">github</a>,本项目文章所有代码都可以找到.</p>',19)];t.render=function(a,p,t,o,c,l){return n(),s("div",null,e)};export{p as __pageData,t as default};
