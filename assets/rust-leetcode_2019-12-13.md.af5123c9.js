import{o as n,c as s,e as a}from"./app.d25b71ec.js";const p='{"title":"632. 最小区间","description":"","frontmatter":{"title":"632. 最小区间","date":"2019-12-12T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["技术相关"],"plugins":["viz"]},"headers":[{"level":2,"title":"每天一道Rust-LeetCode(2019-12-13)","slug":"每天一道rust-leetcode-2019-12-13"},{"level":2,"title":"题目描述","slug":"题目描述"},{"level":2,"title":"解题思路","slug":"解题思路"},{"level":2,"title":"解题过程","slug":"解题过程"},{"level":2,"title":"一点感悟","slug":"一点感悟"},{"level":2,"title":"其他","slug":"其他"}],"relativePath":"rust-leetcode/2019-12-13.md","lastUpdated":1641139139147}',t={},e=[a('<h2 id="每天一道rust-leetcode-2019-12-13"><a class="header-anchor" href="#每天一道rust-leetcode-2019-12-13" aria-hidden="true">#</a> 每天一道Rust-LeetCode(2019-12-13)</h2><p>坚持每天一道题,刷题学习Rust.</p><h2 id="题目描述"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>你有 k 个升序排列的整数数组。找到一个最小区间，使得 k 个列表中的每个列表至少有一个数包含在其中。</p><p>我们定义如果 b-a &lt; d-c 或者在 b-a == d-c 时 a &lt; c，则区间 [a,b] 比 [c,d] 小。</p><p>示例 1:</p><p>输入:[[4,10,15,24,26], [0,9,12,20], [5,18,22,30]] 输出: [20,24] 解释: 列表 1：[4, 10, 15, 24, 26]，24 在区间 [20,24] 中。 列表 2：[0, 9, 12, 20]，20 在区间 [20,24] 中。 列表 3：[5, 18, 22, 30]，22 在区间 [20,24] 中。 注意:</p><p>给定的列表可能包含重复元素，所以在这里升序表示 &gt;= 。 1 &lt;= k &lt;= 3500 -105 &lt;= 元素的值 &lt;= 105 对于使用Java的用户，请注意传入类型已修改为<code>List&lt;List&lt;Integer&gt;&gt;</code>。重置代码模板后可以看到这项改动。</p><p>来源：力扣（LeetCode） 链接：<a href="https://leetcode-cn.com/problems/smallest-range-covering-elements-from-k-lists" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/smallest-range-covering-elements-from-k-lists</a> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p><h2 id="解题思路"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>滑动窗口加优先队列 优先队列中的是k个数组按照最小值的排列 left: 初始空或者不满足覆盖k个数组任意元素的排列 right: 刚好满足覆盖到k个数组任意元素的终点</p><p>步骤:</p><ol><li>left,right为0</li><li>从优先队列中取出一个数组,移除最小数,然后放回队列中</li><li>将最小数放入计数器中,</li><li>检查是否满足条件(覆盖k个数组任意元素的排列)</li><li>如果满足,则移动left直到刚好不满足条件,然后计算得到一个区间</li><li>回到2,right继续向前走</li></ol><p>优先队列在rust中使用binaryHeap实现. 复杂度分析: 队列中的每一个元素都要走两遍,有k个数组,每个数组有m个元素,总数是k*m=N 那么复杂度就是O(Nlogk),每个元素走第一遍的时候,需要对k个数组进行顺序调整,这个是logk,因此总体复杂度就是 O(Nlogk) 空间复杂度:主要是队列占用空间就是O(k),极端情况下可能是O(N)</p><h2 id="解题过程"><a class="header-anchor" href="#解题过程" aria-hidden="true">#</a> 解题过程</h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cmp<span class="token punctuation">::</span></span><span class="token class-name">Ordering</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>collections<span class="token punctuation">::</span></span><span class="token class-name">BinaryHeap</span><span class="token punctuation">;</span>\n\n<span class="token attribute attr-name">#[derive(Clone, Eq, PartialEq)]</span>\n<span class="token keyword">struct</span> <span class="token type-definition class-name">Element</span><span class="token punctuation">(</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token keyword">usize</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//第一个元素是数组本身,第二个则是他的编号</span>\n<span class="token keyword">impl</span> <span class="token class-name">Ord</span> <span class="token keyword">for</span> <span class="token class-name">Element</span> <span class="token punctuation">{</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">cmp</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">,</span> other<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">Self</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Ordering</span> <span class="token punctuation">{</span>\n        other\n            <span class="token punctuation">.</span><span class="token number">0</span>\n            <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">expect</span><span class="token punctuation">(</span><span class="token string">&quot;self must have one element&quot;</span><span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">cmp</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">.</span><span class="token number">0</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">expect</span><span class="token punctuation">(</span><span class="token string">&quot;other must have one element&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">impl</span> <span class="token class-name">PartialOrd</span> <span class="token keyword">for</span> <span class="token class-name">Element</span> <span class="token punctuation">{</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">partial_cmp</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">,</span> other<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">Self</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Ordering</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">cmp</span><span class="token punctuation">(</span>other<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>\n    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">smallest_range</span><span class="token punctuation">(</span>nums<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> nums <span class="token operator">=</span> nums<span class="token punctuation">;</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> h <span class="token operator">=</span> <span class="token class-name">BinaryHeap</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">let</span> k <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> current_max <span class="token operator">=</span> <span class="token namespace">std<span class="token punctuation">::</span></span><span class="token keyword">i32</span><span class="token punctuation">::</span><span class="token constant">MAX</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> range_start <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> range_end <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token comment">//对应的某个数组是否已经移除了一个数到q中</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> k_cnt<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">with_capacity</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">//元素值以及其对应的数组下标</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> q<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token keyword">usize</span><span class="token punctuation">,</span> <span class="token keyword">i32</span><span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> over <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">with_capacity</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">//初始化队列,放入所有的数组</span>\n        <span class="token keyword">for</span> n <span class="token keyword">in</span> nums<span class="token punctuation">.</span><span class="token function">iter_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">enumerate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> n<span class="token number">.1</span><span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token punctuation">{</span>\n                <span class="token keyword">return</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span>range_start<span class="token punctuation">,</span> range_end<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//不可能满足条件,因为初始就有数组是空的</span>\n            <span class="token punctuation">}</span>\n            <span class="token comment">//怎么移出呢?</span>\n            h<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token class-name">Element</span><span class="token punctuation">(</span>n<span class="token number">.1</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> n<span class="token number">.0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            k_cnt<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            over<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token comment">/*\n        1,2,3,4,5,6这些步骤才开始\n        */</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> current_cnt <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//初始k_cnt中已经填充满了有效值</span>\n        <span class="token keyword">while</span> h<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>\n            <span class="token keyword">let</span> <span class="token keyword">mut</span> v <span class="token operator">=</span> h<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">expect</span><span class="token punctuation">(</span><span class="token string">&quot;h must have one&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">let</span> min <span class="token operator">=</span> v<span class="token number">.0</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">let</span> ke <span class="token operator">=</span> k_cnt<span class="token punctuation">.</span><span class="token function">get_mut</span><span class="token punctuation">(</span>v<span class="token number">.1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">expect</span><span class="token punctuation">(</span><span class="token string">&quot;must have&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span> <span class="token operator">*</span>ke <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>\n                <span class="token comment">//第一次找到了这个位置上的元素</span>\n                current_cnt <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            <span class="token operator">*</span>ke <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n            q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span>v<span class="token number">.1</span><span class="token punctuation">,</span> min<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span> v<span class="token number">.0</span><span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>\n                <span class="token comment">//某一个数组遍历完了,还不能结束要等到最后一个元素使用完了才能结束</span>\n                over<span class="token punctuation">[</span>v<span class="token number">.1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n                h<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token class-name">Element</span><span class="token punctuation">(</span>v<span class="token number">.0</span><span class="token punctuation">,</span> v<span class="token number">.1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            <span class="token comment">//已经满足条件,那么移动left,直到</span>\n            <span class="token keyword">if</span> current_cnt <span class="token operator">==</span> k <span class="token punctuation">{</span>\n                <span class="token keyword">let</span> <span class="token keyword">mut</span> min <span class="token operator">=</span> q<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n                <span class="token keyword">let</span> max <span class="token operator">=</span> q<span class="token punctuation">[</span>q<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n                <span class="token keyword">while</span> current_cnt <span class="token operator">==</span> k <span class="token punctuation">{</span>\n                    <span class="token keyword">let</span> first <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                    k_cnt<span class="token punctuation">[</span>first<span class="token number">.0</span><span class="token punctuation">]</span> <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n                    <span class="token keyword">if</span> k_cnt<span class="token punctuation">[</span>first<span class="token number">.0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>\n                        <span class="token comment">//某个数组降到了0,再讲就不满足目标了.</span>\n                        min <span class="token operator">=</span> first<span class="token punctuation">;</span>\n                        current_cnt <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n                    <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span>\n                <span class="token keyword">if</span> max<span class="token number">.1</span> <span class="token operator">-</span> min<span class="token number">.1</span> <span class="token operator">&lt;</span> current_max <span class="token punctuation">{</span>\n                    current_max <span class="token operator">=</span> max<span class="token number">.1</span> <span class="token operator">-</span> min<span class="token number">.1</span><span class="token punctuation">;</span>\n                    range_start <span class="token operator">=</span> min<span class="token number">.1</span><span class="token punctuation">;</span>\n                    range_end <span class="token operator">=</span> max<span class="token number">.1</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token macro property">vec!</span><span class="token punctuation">[</span>range_start<span class="token punctuation">,</span> range_end<span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token attribute attr-name">#[cfg(test)]</span>\n<span class="token keyword">mod</span> <span class="token module-declaration namespace">test</span> <span class="token punctuation">{</span>\n    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>\n    <span class="token attribute attr-name">#[test]</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">smallest_range</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">//[[4,10,15,24,26], [0,9,12,20], [5,18,22,30]]</span>\n        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">smallest_range</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span>\n            <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br></div></div><h2 id="一点感悟"><a class="header-anchor" href="#一点感悟" aria-hidden="true">#</a> 一点感悟</h2><p>一开始总是想着优化left向前移动部分,想着在一个logk时间范围内, 使用了BTreeMap等工具,结果处理不了数组中元素相同的情况,徒增麻烦.</p><h2 id="其他"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>欢迎关注我的<a href="https://github.com/nkbai/rust-leetcode" target="_blank" rel="noopener noreferrer">github</a>,本项目文章所有代码都可以找到.</p>',20)];t.render=function(a,p,t,o,c,l){return n(),s("div",null,e)};export{p as __pageData,t as default};
