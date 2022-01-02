import{o as n,c as s,e as a}from"./app.d25b71ec.js";const p='{"title":"80. 删除排序数组中的重复项 II","description":"","frontmatter":{"title":"80. 删除排序数组中的重复项 II","date":"2020-02-26T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["技术相关"],"plugins":["viz"]},"headers":[{"level":2,"title":"每天一道Rust-LeetCode(2020-02-27)","slug":"每天一道rust-leetcode-2020-02-27"},{"level":2,"title":"题目描述","slug":"题目描述"},{"level":2,"title":"解题思路","slug":"解题思路"},{"level":2,"title":"解题过程","slug":"解题过程"},{"level":2,"title":"一点感悟","slug":"一点感悟"},{"level":2,"title":"其他","slug":"其他"}],"relativePath":"rust-leetcode/2020-02-27.md","lastUpdated":1582248052000}',t={},e=[a('<h2 id="每天一道rust-leetcode-2020-02-27"><a class="header-anchor" href="#每天一道rust-leetcode-2020-02-27" aria-hidden="true">#</a> 每天一道Rust-LeetCode(2020-02-27)</h2><p>坚持每天一道题,刷题学习Rust.</p><h2 id="题目描述"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度。</p><p>不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。</p><p>示例 1:</p><p>给定 nums = [1,1,1,2,2,3],</p><p>函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3 。</p><p>你不需要考虑数组中超出新长度后面的元素。 示例 2:</p><p>给定 nums = [0,0,1,1,1,1,2,3,3],</p><p>函数应返回新长度 length = 7, 并且原数组的前五个元素被修改为 0, 0, 1, 1, 2, 3, 3 。</p><p>你不需要考虑数组中超出新长度后面的元素。 说明:</p><p>为什么返回数值是整数，但输出的答案是数组呢?</p><p>请注意，输入数组是以“引用”方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。</p><p>你可以想象内部操作如下:</p><p>// nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝 int len = removeDuplicates(nums);</p><p>// 在函数里修改输入数组对于调用者是可见的。 // 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。 for (int i = 0; i &lt; len; i++) { print(nums[i]); } 通过次数32,517提交次数59,686</p><p>来源：力扣（LeetCode） 链接：<a href="https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii</a> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p><h2 id="解题思路"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>i:表示当前重复不超过两个的进度 j:表示当前进度,每一个数字都加1 c:当前数字 n:当前数字的计数</p><h2 id="解题过程"><a class="header-anchor" href="#解题过程" aria-hidden="true">#</a> 解题过程</h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>\n    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">remove_duplicates</span><span class="token punctuation">(</span>nums<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> nums<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> c <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> n <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token number">1</span><span class="token punctuation">..</span>nums<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!=</span> c <span class="token punctuation">{</span>\n                i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n                n <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n                c <span class="token operator">=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n                n <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n                <span class="token keyword">if</span> n <span class="token operator">&gt;</span> <span class="token number">2</span> <span class="token punctuation">{</span>\n                    <span class="token keyword">continue</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n                i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        i <span class="token keyword">as</span> <span class="token keyword">i32</span> <span class="token operator">+</span> <span class="token number">1</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token attribute attr-name">#[cfg(test)]</span>\n<span class="token keyword">mod</span> <span class="token module-declaration namespace">test</span> <span class="token punctuation">{</span>\n    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>\n    <span class="token attribute attr-name">#[test]</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> v <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">remove_duplicates</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> expect <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>v<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">..</span>r <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>expect<span class="token punctuation">[</span><span class="token punctuation">..</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> v <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">remove_duplicates</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> expect <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>v<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">..</span>r <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>expect<span class="token punctuation">[</span><span class="token punctuation">..</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> v <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">remove_duplicates</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> expect <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>v<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">..</span>r <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>expect<span class="token punctuation">[</span><span class="token punctuation">..</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><h2 id="一点感悟"><a class="header-anchor" href="#一点感悟" aria-hidden="true">#</a> 一点感悟</h2><p>关键是每次移动都要让nums[i]=nums[j] 这样才能做到O(n)的复杂度,O(1)的空间复杂度</p><h2 id="其他"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>欢迎关注我的<a href="https://github.com/nkbai/rust-leetcode" target="_blank" rel="noopener noreferrer">github</a>,本项目文章所有代码都可以找到.</p>',26)];t.render=function(a,p,t,o,c,l){return n(),s("div",null,e)};export{p as __pageData,t as default};
