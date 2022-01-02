import{o as n,c as s,e as a}from"./app.d25b71ec.js";const t='{"title":"49. 字母异位词分组","description":"","frontmatter":{"title":"49. 字母异位词分组","date":"2019-11-19T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["技术相关"],"plugins":["viz"]},"headers":[{"level":2,"title":"每天一道Rust-LeetCode(2019-11-20)","slug":"每天一道rust-leetcode-2019-11-20"},{"level":2,"title":"题目描述","slug":"题目描述"},{"level":2,"title":"解题思路","slug":"解题思路"},{"level":2,"title":"解题过程","slug":"解题过程"},{"level":2,"title":"一点感悟","slug":"一点感悟"},{"level":2,"title":"其他","slug":"其他"}],"relativePath":"rust-leetcode/2019-11-20.md","lastUpdated":1582015486000}',p={},e=[a('<h2 id="每天一道rust-leetcode-2019-11-20"><a class="header-anchor" href="#每天一道rust-leetcode-2019-11-20" aria-hidden="true">#</a> 每天一道Rust-LeetCode(2019-11-20)</h2><p>坚持每天一道题,刷题学习Rust.</p><h2 id="题目描述"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。</p><p>示例:</p><p>输入: [&quot;eat&quot;, &quot;tea&quot;, &quot;tan&quot;, &quot;ate&quot;, &quot;nat&quot;, &quot;bat&quot;], 输出: [ [&quot;ate&quot;,&quot;eat&quot;,&quot;tea&quot;], [&quot;nat&quot;,&quot;tan&quot;], [&quot;bat&quot;] ] 说明：</p><p>所有输入均为小写字母。 不考虑答案输出的顺序。</p><p>来源：力扣（LeetCode） 链接：<a href="https://leetcode-cn.com/problems/group-anagrams" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/group-anagrams</a> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p><h2 id="解题思路"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>思路: 这个实际上是将字符串分组,新来一个字符串,看看他和哪个类似,然后放到一组中.</p><ol><li>盼到两个字符串是否类似,一种是排序后看是否一致,另一种是统计字符出现的个数</li><li>第一种是把排序后的字符串作为map的key,第二种则是把结构体作为map的key 第二种的结构体可以设计为count[26],其中count[0]表示字符a的个数,count[25]表示字符z的个数 相比之下,第一种可能会更好一点 排序是O(KLogK),查找用HashMap是O(1),总体时间复杂度是O(N*KLogK) 其中N是字符串的个数,K则是某个字符串的长度, 这里没有考虑的是字符串Hash的复杂度,如果一个字符串长度为1万呢? 至少要遍历一遍,因此复杂度是O(K)</li></ol><h2 id="解题过程"><a class="header-anchor" href="#解题过程" aria-hidden="true">#</a> 解题过程</h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>collections<span class="token punctuation">::</span></span><span class="token class-name">HashMap</span><span class="token punctuation">;</span>\n\n<span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span><span class="token punctuation">;</span>\n\n<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>\n    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">group_anagrams</span><span class="token punctuation">(</span>strs<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token operator">&gt;&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> m <span class="token operator">=</span> <span class="token class-name">HashMap</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> s <span class="token keyword">in</span> strs <span class="token punctuation">{</span>\n            <span class="token keyword">let</span> <span class="token keyword">mut</span> s2<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span>_<span class="token operator">&gt;</span> <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">into_bytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            s2<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token comment">//            println!(&quot;s={}&quot;, s);</span>\n            m<span class="token punctuation">.</span><span class="token function">entry</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">or_insert</span><span class="token punctuation">(</span><span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token comment">//        println!(&quot;m={:?}&quot;, m);</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> v <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">//这里能否避免复制字符串呢?</span>\n        <span class="token keyword">for</span> t <span class="token keyword">in</span> m<span class="token punctuation">.</span><span class="token function">iter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            v<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>t<span class="token number">.1</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        v\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token attribute attr-name">#[cfg(test)]</span>\n<span class="token keyword">mod</span> <span class="token module-declaration namespace">tests</span> <span class="token punctuation">{</span>\n    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>\n    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token operator">*</span><span class="token punctuation">;</span>\n\n    <span class="token attribute attr-name">#[test]</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">group_anagrams</span><span class="token punctuation">(</span>\n            <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token string">&quot;eat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tea&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tan&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;nat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tan&quot;</span><span class="token punctuation">]</span>\n                <span class="token punctuation">.</span><span class="token function">iter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token closure-params"><span class="token closure-punctuation punctuation">|</span>n<span class="token closure-punctuation punctuation">|</span></span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token operator">*</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;t={:?}&quot;</span><span class="token punctuation">,</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h2 id="一点感悟"><a class="header-anchor" href="#一点感悟" aria-hidden="true">#</a> 一点感悟</h2><h2 id="其他"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>欢迎关注我的<a href="https://github.com/nkbai/rust-leetcode" target="_blank" rel="noopener noreferrer">github</a>,本项目文章所有代码都可以找到.</p>',16)];p.render=function(a,t,p,o,c,l){return n(),s("div",null,e)};export{t as __pageData,p as default};
