import{_ as s,c as n,o as a,N as l}from"./chunks/framework.3a9190c5.js";const i=JSON.parse('{"title":"409. 最长回文串","description":"","frontmatter":{"title":"409. 最长回文串","date":"2019-11-28T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["技术相关"],"plugins":["viz"]},"headers":[],"relativePath":"rust-leetcode/2019-11-29.md"}'),p={name:"rust-leetcode/2019-11-29.md"},o=l(`<h2 id="每天一道rust-leetcode-2019-11-29" tabindex="-1">每天一道Rust-LeetCode(2019-11-29) <a class="header-anchor" href="#每天一道rust-leetcode-2019-11-29" aria-label="Permalink to &quot;每天一道Rust-LeetCode(2019-11-29)&quot;">​</a></h2><p>坚持每天一道题,刷题学习Rust.</p><h2 id="题目描述" tabindex="-1">题目描述 <a class="header-anchor" href="#题目描述" aria-label="Permalink to &quot;题目描述&quot;">​</a></h2><p>给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。</p><p>在构造过程中，请注意区分大小写。比如 &quot;Aa&quot; 不能当做一个回文字符串。</p><p>注意: 假设字符串的长度不会超过 1010。</p><p>示例 1:</p><p>输入: &quot;abccccdd&quot;</p><p>输出: 7</p><p>解释: 我们可以构造的最长的回文串是&quot;dccaccd&quot;, 它的长度是 7。</p><p>来源：力扣（LeetCode） 链接：<a href="https://leetcode-cn.com/problems/longest-palindrome" target="_blank" rel="noreferrer">https://leetcode-cn.com/problems/longest-palindrome</a> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p><h2 id="解题思路" tabindex="-1">解题思路 <a class="header-anchor" href="#解题思路" aria-label="Permalink to &quot;解题思路&quot;">​</a></h2><p>统计每个字符的个数 选一个单的,剩下的只能挑双的了.</p><p>简单起见,就用map,也可以用数组,只是注意要把大小写相应转换到对应的数组中去.</p><h2 id="解题过程" tabindex="-1">解题过程 <a class="header-anchor" href="#解题过程" aria-label="Permalink to &quot;解题过程&quot;">​</a></h2><div class="language-rust line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki material-theme-palenight"><code><span class="line"></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> std</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">collections</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">HashMap</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#F78C6C;">impl</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">pub</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">longest_palindrome</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">String</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">i32</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> s </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">as_bytes</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> m </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HashMap</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> s </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">m</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">entry</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">or_insert</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> single </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> cnt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">_k</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> v</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> m </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#82AAFF;">println!</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">k=</span><span style="color:#89DDFF;">{}</span><span style="color:#C3E88D;">,v=</span><span style="color:#89DDFF;">{}&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> _k</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> v</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> v </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> single </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                single </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false;</span></span>
<span class="line"><span style="color:#A6ACCD;">                cnt </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">            cnt </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">v </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> //只考虑偶数部分</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        cnt</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">#[</span><span style="color:#A6ACCD;">cfg</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">test</span><span style="color:#89DDFF;">)]</span></span>
<span class="line"><span style="color:#C792EA;">mod</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">test</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">super</span><span style="color:#89DDFF;">::*;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">#[</span><span style="color:#A6ACCD;">test</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">assert_eq!</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Solution</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">longest_palindrome</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">String</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">from</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">abcccccdd</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)),</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">assert_eq!</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Solution</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">longest_palindrome</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">String</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">from</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ccc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)),</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="一点感悟" tabindex="-1">一点感悟 <a class="header-anchor" href="#一点感悟" aria-label="Permalink to &quot;一点感悟&quot;">​</a></h2><p>一开始没有考虑ccc这种情况,考虑到的是acc这种,</p><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><p>欢迎关注我的<a href="https://github.com/nkbai/rust-leetcode" target="_blank" rel="noreferrer">github</a>,本项目文章所有代码都可以找到.</p>`,20),e=[o];function t(r,c,D,F,y,C){return a(),n("div",null,e)}const u=s(p,[["render",t]]);export{i as __pageData,u as default};