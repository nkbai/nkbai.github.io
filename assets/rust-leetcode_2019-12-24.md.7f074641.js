import{o as n,c as s,e as a}from"./app.d25b71ec.js";const p='{"title":"288. 单词的唯一缩写","description":"","frontmatter":{"title":"288. 单词的唯一缩写","date":"2019-12-23T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["技术相关"],"plugins":["viz"]},"headers":[{"level":2,"title":"每天一道Rust-LeetCode(2019-12-24)","slug":"每天一道rust-leetcode-2019-12-24"},{"level":2,"title":"题目描述","slug":"题目描述"},{"level":2,"title":"解题思路","slug":"解题思路"},{"level":2,"title":"解题过程","slug":"解题过程"},{"level":2,"title":"一点感悟","slug":"一点感悟"},{"level":2,"title":"其他","slug":"其他"}],"relativePath":"rust-leetcode/2019-12-24.md","lastUpdated":1582015486000}',t={},e=[a('<h2 id="每天一道rust-leetcode-2019-12-24"><a class="header-anchor" href="#每天一道rust-leetcode-2019-12-24" aria-hidden="true">#</a> 每天一道Rust-LeetCode(2019-12-24)</h2><p>坚持每天一道题,刷题学习Rust.</p><h2 id="题目描述"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>一个单词的缩写需要遵循 &lt;起始字母&gt;&lt;中间字母数&gt;&lt;结尾字母&gt; 这样的格式。</p><p>以下是一些单词缩写的范例：</p><p>a) it --&gt; it (没有缩写)</p><pre><code> 1\n ↓\n</code></pre><p>b) d|o|g --&gt; d1g</p><pre><code>          1    1  1\n 1---5----0----5--8\n ↓   ↓    ↓    ↓  ↓\n</code></pre><p>c) i|nternationalizatio|n --&gt; i18n</p><pre><code>          1\n 1---5----0\n</code></pre><p>↓ ↓ ↓ d) l|ocalizatio|n --&gt; l10n 假设你有一个字典和一个单词，请你判断该单词的缩写在这本字典中是否唯一。若单词的缩写在字典中没有任何 其他 单词与其缩写相同，则被称为单词的唯一缩写。</p><p>示例：</p><p>给定 dictionary = [ &quot;deer&quot;, &quot;door&quot;, &quot;cake&quot;, &quot;card&quot; ]</p><p>isUnique(&quot;dear&quot;) -&gt; false isUnique(&quot;cart&quot;) -&gt; true isUnique(&quot;cane&quot;) -&gt; false isUnique(&quot;make&quot;) -&gt; true</p><p>来源：力扣（LeetCode） 链接：<a href="https://leetcode-cn.com/problems/unique-word-abbreviation" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/unique-word-abbreviation</a> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p><h2 id="解题思路"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>考虑到字典中本身可能存在重复的单词问题</p><h2 id="解题过程"><a class="header-anchor" href="#解题过程" aria-hidden="true">#</a> 解题过程</h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>collections<span class="token punctuation">::</span></span><span class="token class-name">HashMap</span><span class="token punctuation">;</span>\n\n<span class="token keyword">struct</span> <span class="token type-definition class-name">ValidWordAbbr</span> <span class="token punctuation">{</span>\n    m<span class="token punctuation">:</span> <span class="token class-name">HashMap</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/**\n * `&amp;self` means the method takes an immutable reference.\n * If you need a mutable reference, change it to `&amp;mut self` instead.\n */</span>\n<span class="token keyword">impl</span> <span class="token class-name">ValidWordAbbr</span> <span class="token punctuation">{</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">new</span><span class="token punctuation">(</span>dictionary<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">Self</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> m <span class="token operator">=</span> <span class="token class-name">HashMap</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> dup <span class="token operator">=</span> <span class="token class-name">HashMap</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> dictionary <span class="token operator">=</span> dictionary<span class="token punctuation">;</span>\n        <span class="token keyword">for</span> s <span class="token keyword">in</span> dictionary <span class="token punctuation">{</span>\n            <span class="token keyword">let</span> e <span class="token operator">=</span> dup<span class="token punctuation">.</span><span class="token function">entry</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">or_insert</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span> <span class="token operator">*</span>e <span class="token punctuation">{</span>\n                <span class="token keyword">continue</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            <span class="token operator">*</span>e <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n            <span class="token keyword">let</span> abbv <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">abbv</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            m<span class="token punctuation">.</span><span class="token function">entry</span><span class="token punctuation">(</span>abbv<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">or_insert</span><span class="token punctuation">(</span><span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token class-name">ValidWordAbbr</span> <span class="token punctuation">{</span> m <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">abbv</span><span class="token punctuation">(</span>s<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> s<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">2</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">let</span> <span class="token keyword">mut</span> v <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> s <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">as_bytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        v<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> l <span class="token operator">=</span> <span class="token macro property">format!</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        l<span class="token punctuation">.</span><span class="token function">as_bytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">iter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">for_each</span><span class="token punctuation">(</span><span class="token closure-params"><span class="token closure-punctuation punctuation">|</span>n<span class="token closure-punctuation punctuation">|</span></span> <span class="token punctuation">{</span>\n            v<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">*</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        v<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>s<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">unsafe</span> <span class="token punctuation">{</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from_utf8_unchecked</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">is_unique</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">,</span> word<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">bool</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> abbv <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">abbv</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>word<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> e <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span>m<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>abbv<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">match</span> e <span class="token punctuation">{</span>\n            <span class="token class-name">None</span> <span class="token operator">=&gt;</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n            <span class="token class-name">Some</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n                <span class="token keyword">if</span> v<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token punctuation">{</span>\n                    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n                    <span class="token keyword">if</span> word <span class="token operator">==</span> <span class="token operator">*</span>v<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">expect</span><span class="token punctuation">(</span><span class="token string">&quot;must have one&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n                        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n                    <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/**\n * Your ValidWordAbbr object will be instantiated and called as such:\n * let obj = ValidWordAbbr::new(dictionary);\n * let ret_1: bool = obj.is_unique(word);\n */</span>\n<span class="token attribute attr-name">#[cfg(test)]</span>\n<span class="token keyword">mod</span> <span class="token module-declaration namespace">test</span> <span class="token punctuation">{</span>\n    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>\n    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token operator">*</span><span class="token punctuation">;</span>\n    <span class="token attribute attr-name">#[test]</span>\n    <span class="token keyword">fn</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token class-name">ValidWordAbbr</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span>\n            <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token string">&quot;deer&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;door&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cake&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;card&quot;</span><span class="token punctuation">]</span>\n                <span class="token punctuation">.</span><span class="token function">iter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token closure-params"><span class="token closure-punctuation punctuation">|</span>n<span class="token closure-punctuation punctuation">|</span></span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token operator">*</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">/*\n                isUnique(&quot;dear&quot;) -&gt; false\n        isUnique(&quot;cart&quot;) -&gt; true\n        isUnique(&quot;cane&quot;) -&gt; false\n        isUnique(&quot;make&quot;) -&gt; true\n        */</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">is_unique</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;dear&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">is_unique</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;cart&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">is_unique</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;cane&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">is_unique</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;make&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br></div></div><h2 id="一点感悟"><a class="header-anchor" href="#一点感悟" aria-hidden="true">#</a> 一点感悟</h2><h2 id="其他"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>欢迎关注我的<a href="https://github.com/nkbai/rust-leetcode" target="_blank" rel="noopener noreferrer">github</a>,本项目文章所有代码都可以找到.</p>',23)];t.render=function(a,p,t,o,c,l){return n(),s("div",null,e)};export{p as __pageData,t as default};
