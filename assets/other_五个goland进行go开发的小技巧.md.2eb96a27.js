import{o as n,c as s,e as a}from"./app.63f3ffeb.js";const p='{"title":"五个goland进行go开发的小技巧","description":"","frontmatter":{"title":"五个goland进行go开发的小技巧","date":"2019-05-09T00:59:35.138Z","draft":false,"markup":"mmark"},"headers":[{"level":2,"title":"1. 实现interface","slug":"_1-实现interface"},{"level":2,"title":"提取接口","slug":"提取接口"},{"level":2,"title":"2. 使用模板","slug":"_2-使用模板"},{"level":3,"title":"3.1 forr 快速展开for range","slug":"_3-1-forr-快速展开for-range"},{"level":3,"title":"3.2 err 错误处理","slug":"_3-2-err-错误处理"},{"level":3,"title":"4. 填充Struct","slug":"_4-填充struct"},{"level":3,"title":"5. 自动生成测试代码","slug":"_5-自动生成测试代码"}],"relativePath":"other/五个goland进行go开发的小技巧.md","lastUpdated":1561553438000}',t={},e=[a('<h1 id="五个goland进行go开发的小技巧"><a class="header-anchor" href="#五个goland进行go开发的小技巧" aria-hidden="true">#</a> 五个goland进行go开发的小技巧</h1><p>本文译自<a href="https://medium.com/@keperry/5-tips-to-speed-up-golang-development-with-intellij-or-goland-6646110e9c5e" target="_blank" rel="noopener noreferrer">5 Tips To Speed Up Golang Development With IntelliJ Or Goland</a> 确实很实用.</p><h2 id="_1-实现interface"><a class="header-anchor" href="#_1-实现interface" aria-hidden="true">#</a> 1. 实现interface</h2><p>比如我想为下面的结构体实现共识interface</p><div class="language-go line-numbers-mode"><pre><code>\n<span class="token keyword">type</span> MyConensus <span class="token keyword">struct</span> <span class="token punctuation">{</span>\n\t\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>通过右键generate-&gt;implement methods-&gt;搜索engine 一键生成下面代码:</p><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">type</span> MyConensus <span class="token keyword">struct</span> <span class="token punctuation">{</span>\n\tinfo <span class="token builtin">string</span> \n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>MyConensus<span class="token punctuation">)</span> <span class="token function">Author</span><span class="token punctuation">(</span>header <span class="token operator">*</span>types<span class="token punctuation">.</span>Header<span class="token punctuation">)</span> <span class="token punctuation">(</span>common<span class="token punctuation">.</span>Address<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;implement me&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>MyConensus<span class="token punctuation">)</span> <span class="token function">VerifyHeader</span><span class="token punctuation">(</span>chain ChainReader<span class="token punctuation">,</span> header <span class="token operator">*</span>types<span class="token punctuation">.</span>Header<span class="token punctuation">,</span> seal <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>\n\t<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;implement me&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>MyConensus<span class="token punctuation">)</span> <span class="token function">VerifyHeaders</span><span class="token punctuation">(</span>chain ChainReader<span class="token punctuation">,</span> headers <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>types<span class="token punctuation">.</span>Header<span class="token punctuation">,</span> seals <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;implement me&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>MyConensus<span class="token punctuation">)</span> <span class="token function">VerifyUncles</span><span class="token punctuation">(</span>chain ChainReader<span class="token punctuation">,</span> block <span class="token operator">*</span>types<span class="token punctuation">.</span>Block<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>\n\t<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;implement me&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>MyConensus<span class="token punctuation">)</span> <span class="token function">VerifySeal</span><span class="token punctuation">(</span>chain ChainReader<span class="token punctuation">,</span> header <span class="token operator">*</span>types<span class="token punctuation">.</span>Header<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>\n\t<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;implement me&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>MyConensus<span class="token punctuation">)</span> <span class="token function">Prepare</span><span class="token punctuation">(</span>chain ChainReader<span class="token punctuation">,</span> header <span class="token operator">*</span>types<span class="token punctuation">.</span>Header<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>\n\t<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;implement me&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>MyConensus<span class="token punctuation">)</span> <span class="token function">Finalize</span><span class="token punctuation">(</span>chain ChainReader<span class="token punctuation">,</span> header <span class="token operator">*</span>types<span class="token punctuation">.</span>Header<span class="token punctuation">,</span> state <span class="token operator">*</span>state<span class="token punctuation">.</span>StateDB<span class="token punctuation">,</span> txs <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>types<span class="token punctuation">.</span>Transaction<span class="token punctuation">,</span>\n\tuncles <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>types<span class="token punctuation">.</span>Header<span class="token punctuation">,</span> receipts <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>types<span class="token punctuation">.</span>Receipt<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>types<span class="token punctuation">.</span>Block<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;implement me&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>MyConensus<span class="token punctuation">)</span> <span class="token function">Seal</span><span class="token punctuation">(</span>chain ChainReader<span class="token punctuation">,</span> block <span class="token operator">*</span>types<span class="token punctuation">.</span>Block<span class="token punctuation">,</span> results <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token operator">*</span>types<span class="token punctuation">.</span>Block<span class="token punctuation">,</span> stop <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>\n\t<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;implement me&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>MyConensus<span class="token punctuation">)</span> <span class="token function">SealHash</span><span class="token punctuation">(</span>header <span class="token operator">*</span>types<span class="token punctuation">.</span>Header<span class="token punctuation">)</span> common<span class="token punctuation">.</span>Hash <span class="token punctuation">{</span>\n\t<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;implement me&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>MyConensus<span class="token punctuation">)</span> <span class="token function">CalcDifficulty</span><span class="token punctuation">(</span>chain ChainReader<span class="token punctuation">,</span> time <span class="token builtin">uint64</span><span class="token punctuation">,</span> parent <span class="token operator">*</span>types<span class="token punctuation">.</span>Header<span class="token punctuation">)</span> <span class="token operator">*</span>big<span class="token punctuation">.</span>Int <span class="token punctuation">{</span>\n\t<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;implement me&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>MyConensus<span class="token punctuation">)</span> <span class="token function">APIs</span><span class="token punctuation">(</span>chain ChainReader<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>rpc<span class="token punctuation">.</span>API <span class="token punctuation">{</span>\n\t<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;implement me&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>MyConensus<span class="token punctuation">)</span> <span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>\n\t<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;implement me&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><p><img alt="" data-src="https://img2018.cnblogs.com/blog/124391/201905/124391-20190509085750087-456762519.gif" loading="lazy" class="lazy"></p><h2 id="提取接口"><a class="header-anchor" href="#提取接口" aria-hidden="true">#</a> 提取接口</h2><p>面向接口编程,有时候我们需要针对已经实现的struct提取接口. 方法: struct-&gt;Refactor-&gt;Extract-&gt;interfac <img alt="" data-src="https://img2018.cnblogs.com/blog/124391/201905/124391-20190509085812217-674004844.gif" loading="lazy" class="lazy"></p><h2 id="_2-使用模板"><a class="header-anchor" href="#_2-使用模板" aria-hidden="true">#</a> 2. 使用模板</h2><h3 id="_3-1-forr-快速展开for-range"><a class="header-anchor" href="#_3-1-forr-快速展开for-range" aria-hidden="true">#</a> 3.1 forr 快速展开for range</h3><p>forr 然后tab,就会自动展开</p><div class="language-go line-numbers-mode"><pre><code>\t<span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> collection <span class="token punctuation">{</span>\n\t\t\n\t<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img alt="" data-src="https://img2018.cnblogs.com/blog/124391/201905/124391-20190509085821223-1978977870.gif" loading="lazy" class="lazy"></p><h3 id="_3-2-err-错误处理"><a class="header-anchor" href="#_3-2-err-错误处理" aria-hidden="true">#</a> 3.2 err 错误处理</h3><p>err 然后tab,自动展开如下: <img alt="" data-src="https://img2018.cnblogs.com/blog/124391/201905/124391-20190509085831846-521727195.gif" loading="lazy" class="lazy"></p><h3 id="_4-填充struct"><a class="header-anchor" href="#_4-填充struct" aria-hidden="true">#</a> 4. 填充Struct</h3><p>这个相对不是很实用, <img alt="" data-src="https://img2018.cnblogs.com/blog/124391/201905/124391-20190509085841121-997810444.gif" loading="lazy" class="lazy"></p><h3 id="_5-自动生成测试代码"><a class="header-anchor" href="#_5-自动生成测试代码" aria-hidden="true">#</a> 5. 自动生成测试代码</h3><p>这个非常使用,单元测试,我们专注于测试本身就ok了. 在文件任意位置-&gt;Genreate-&gt;Test for File-&gt; 自动生成该文件对应的测试文件 <img alt="" data-src="https://img2018.cnblogs.com/blog/124391/201905/124391-20190509085851547-53435913.gif" loading="lazy" class="lazy"></p>',21)];t.render=function(a,p,t,o,c,l){return n(),s("div",null,e)};export{p as __pageData,t as default};
