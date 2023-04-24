import{_ as s,c as a,o as n,N as l}from"./chunks/framework.3a9190c5.js";const d=JSON.parse('{"title":"mariana安卓静态分析工具简介","description":"","frontmatter":{"title":"mariana安卓静态分析工具简介","date":"2021-11-14T03:57:03.000Z","draft":false,"tags":["android","静态分析"],"series":["静态分析"],"categories":["技术相关"]},"headers":[],"relativePath":"static_analysis/mariana-introduction.md"}'),e={name:"static_analysis/mariana-introduction.md"},t=l(`<h2 id="工作原理" tabindex="-1">工作原理 <a class="header-anchor" href="#工作原理" aria-label="Permalink to &quot;工作原理&quot;">​</a></h2><h3 id="什么是model" tabindex="-1">什么是Model <a class="header-anchor" href="#什么是model" aria-label="Permalink to &quot;什么是Model&quot;">​</a></h3><p>为每一个函数都建立一个model，包括库函数，描述：</p><ul><li>匹配到了哪些sink点</li><li>匹配到了哪些source点</li><li>污点怎么从变量传播到返回值，this，静态变量等 迭代求解： 比如foo调用了bar。 Iteration 1： 求foo的model，发生了变化，没有调用者 求bar的model，发生了变化，将bar的调用者foo加入下一轮求解集合中 Iteration 2: 在bar的model基础上继续求解foo的model</li></ul><p>什么是Model 源码中的说法</p><div class="language-c line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * A \`Model\` is a summary of what we know about a method. A \`Model\` should</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * contain the properties we are interested in, such as *generations*,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * *propagations* and *sinks*.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * A *mode* describes a specific behavior of a model. See \`Model::Mode\`.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * A *generation* describes the property that the method either</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * returns a tainted value or mutates (and hence taints) a reference type</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * argument, regardless of whether parameters are tainted.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * A *parameter source* of a method describes the property that the method</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * receives a tainted value on a given parameter.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * A *propagation* describes how taint may flow through a method. More</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * specifically, how taint may flow from a parameter to the method&#39;s return</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * value or another parameters. A *propagation* will only propagate the taint</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * if the parameter is tainted. See \`Propagation\`.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * A *global sanitizer* sanitizes all sources, sinks or propagations flowing</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * through the method that have a kind dictated by its kinds field</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * *Attach to sources* automatically adds features to all sources flowing out of</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * the method.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * *Attach to sinks* automatically adds features to all sources flowing in</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * the method.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * *Attach to propagations* automatically adds features to all propagations from</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * or to a given argument or return value.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * *Add features to arguments* automatically adds features to all taint that</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * might flow in or out of a given argument. This is equivalent to *attach to</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * sources/sinks/propagations*, but also adds features even when there is no</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * inferred propagation. E.g,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * \`\`\`</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * List&lt;String&gt; x;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * f(x);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * // Here x has the feature, regardless of the propagations of f.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * \`\`\`</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * *inline as* is either top, bottom or an argument access path that will be</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * used to inline the method at call sites.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p>最简单的Model</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">method</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Lcom/security/bvaa/MainActivity;.f:()V</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">position</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">line</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">44</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">path</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">com/security/bvaa/MainActivity.java</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,8),p=[t];function o(i,r,c,y,b,u){return n(),a("div",null,p)}const f=s(e,[["render",o]]);export{d as __pageData,f as default};
