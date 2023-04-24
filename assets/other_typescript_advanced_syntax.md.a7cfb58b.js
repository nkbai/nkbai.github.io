import{_ as s,c as n,o as a,N as l}from"./chunks/framework.3a9190c5.js";const A=JSON.parse('{"title":"typescript的一些高级语法","description":"","frontmatter":{"title":"typescript的一些高级语法","date":"2022-01-010T21:57:03+08:00","draft":false,"tags":["program","typescript","javascript"],"categories":["other"]},"headers":[],"relativePath":"other/typescript_advanced_syntax.md"}'),p={name:"other/typescript_advanced_syntax.md"},e=l(`<p>本文内容主要来自<code>玩转vue3全家桶</code>课程.</p><h2 id="联合类型定义" tabindex="-1">联合类型定义 <a class="header-anchor" href="#联合类型定义" aria-label="Permalink to &quot;联合类型定义&quot;">​</a></h2><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> course1 </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//course的类型可以是string以及number,其他则是错误.</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="泛型" tabindex="-1">泛型 <a class="header-anchor" href="#泛型" aria-label="Permalink to &quot;泛型&quot;">​</a></h2><p>语言引入泛型后,不可避免的复杂化.</p><h3 id="最简单的泛型" tabindex="-1">最简单的泛型 <a class="header-anchor" href="#最简单的泛型" aria-label="Permalink to &quot;最简单的泛型&quot;">​</a></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">identity</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;font-style:italic;">arg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arg</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="泛型的一些关键字" tabindex="-1">泛型的一些关键字 <a class="header-anchor" href="#泛型的一些关键字" aria-label="Permalink to &quot;泛型的一些关键字&quot;">​</a></h3><h4 id="keyof" tabindex="-1">keyof <a class="header-anchor" href="#keyof" aria-label="Permalink to &quot;keyof&quot;">​</a></h4><p>keyof <code>keyof T</code> 获取T的所有key,相当于返回一个字符串列表,其中每一个字符串都是T的key</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CourseProps</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">keyof</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">VueCourse5</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 只能是name和price选一个</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> k</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">CourseProps</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> k1</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">CourseProps</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">p</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 改成price</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="类型三元表达式" tabindex="-1">类型三元表达式 <a class="header-anchor" href="#类型三元表达式" aria-label="Permalink to &quot;类型三元表达式&quot;">​</a></h4><p>extends 关键字 <code>T extends U? X:Y</code> 主要这里的T,U,X,Y都是类型,而不是数值</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyType</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">?</span><span style="color:#FFCB6B;">String</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">Number</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyTypeString</span><span style="color:#89DDFF;">=</span><span style="color:#FFCB6B;">MyType</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//MyTypeString类型实际上是String 等价于type MyTypeString=String</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyTypeNumber</span><span style="color:#89DDFF;">=</span><span style="color:#FFCB6B;">MyType</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//MyTypeString类型实际上是Number,等价于type MyTypeNumber=Number</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="in-关键字" tabindex="-1">in 关键字 <a class="header-anchor" href="#in-关键字" aria-label="Permalink to &quot;in 关键字&quot;">​</a></h4><p>in 用于类型中</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Courses</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">玩转Vue 3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">|</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">重学前端</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CourseObj</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    [</span><span style="color:#FFCB6B;">k</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Courses</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 遍历Courses类型作为key</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 上面的代码等于下面的定义</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// type CourseObj = {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     玩转Vue 3: number;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     重学前端: number;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="组合起来的getproperty" tabindex="-1">组合起来的getProperty <a class="header-anchor" href="#组合起来的getproperty" aria-label="Permalink to &quot;组合起来的getProperty&quot;">​</a></h4><p>这里的extends和上面说的并不一致, <code>K extends key of T</code>限定了K的类型是一个字符串常量列表,其中每一个字符串都是T的field名字. <code>T[K]</code>则表示T的field K的类型</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getProperty</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">&lt;</span><span style="color:#A6ACCD;font-style:italic;">T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">K</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">keyof</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">T</span><span style="color:#A6ACCD;">&gt;</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;font-style:italic;">obj</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">field</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">K</span><span style="color:#89DDFF;">):</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;">[</span><span style="color:#FFCB6B;">K</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">obj</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">field</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="infer关键字" tabindex="-1">infer关键字 <a class="header-anchor" href="#infer关键字" aria-label="Permalink to &quot;infer关键字&quot;">​</a></h4><p>来自<a href="https://zhuanlan.zhihu.com/p/402541135" target="_blank" rel="noreferrer">知乎</a></p><p>infer关键字用于类型解构,想得到一个类型的某部分的类型,可以使用infer.</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ReturnType</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">infer</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">R</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">R</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">any</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这里的T如果infer,比如 <code>T extends ()=&gt;string</code> 表示T是一个返回类型是string的函数,但是我想取这个函数类型的返回值类型,该怎么办呢? 就用<code>infer R</code>,相当于引入了一个新类型,该类型表示<code>T</code>的某一个局部的类型.</p><h4 id="更多例子" tabindex="-1">更多例子 <a class="header-anchor" href="#更多例子" aria-label="Permalink to &quot;更多例子&quot;">​</a></h4><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Partial</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">={</span></span>
<span class="line"><span style="color:#A6ACCD;">    [K keyof T]</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;">[</span><span style="color:#FFCB6B;">K</span><span style="color:#A6ACCD;">] </span><span style="color:#676E95;font-style:italic;">//注意这里的?,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//Exclude from T those types that are assignable to U</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Exclude</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#FFCB6B;">K</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">K</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">never</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//Construct a type with a set of properties K of type T</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Record</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">K</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">key</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">of</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">,</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;={</span></span>
<span class="line"><span style="color:#A6ACCD;">    [</span><span style="color:#FFCB6B;">P</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">K</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// From T, pick a set of properties whose keys are in the union K</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Pick</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#FFCB6B;">K</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">keyof</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">={</span></span>
<span class="line"><span style="color:#A6ACCD;">    [</span><span style="color:#FFCB6B;">P</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">K</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;">[</span><span style="color:#FFCB6B;">P</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="一个完整的例子" tabindex="-1">一个完整的例子 <a class="header-anchor" href="#一个完整的例子" aria-label="Permalink to &quot;一个完整的例子&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> axios </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">axios</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Api</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/course/buy</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/course/comment</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">message</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">request</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">keyof</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Api</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;font-style:italic;">url</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">obj</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">Api</span><span style="color:#A6ACCD;">[</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">axios</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">post</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">obj</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">request</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/course/buy</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,{</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">request</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/course/comment</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,{</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">message</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">嘎嘎好看</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">request</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/course/comment</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,{</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">//Argument type {id: number} is not assignable to parameter type Api[&quot;/course/comment&quot;] </span></span>
<span class="line"><span style="color:#82AAFF;">request</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/course/404</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,{</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">//Argument type &quot;/course/404&quot; is not assignable to parameter type keyof Api </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="更多类型编程" tabindex="-1">更多类型编程 <a class="header-anchor" href="#更多类型编程" aria-label="Permalink to &quot;更多类型编程&quot;">​</a></h2><p>这玩意感觉类似于针对类型的编程语法,有点象高级宏,和普通编程的思路是不太一样的. 更多的例子到<a href="https://github.com/type-challenges/type-challenges" target="_blank" rel="noreferrer">type-challenges</a>. 这也是c++,Rust等语言在支持泛型后,不可避免带来的复杂化问题. 而Java的泛型则实际上是动态执行的时候都会转换成Object,并不完全 编译期泛型.</p>`,31),o=[e];function t(r,c,y,F,i,D){return a(),n("div",null,o)}const u=s(p,[["render",t]]);export{A as __pageData,u as default};