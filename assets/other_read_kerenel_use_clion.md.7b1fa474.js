import{_ as a,c as s,o as e,N as n}from"./chunks/framework.3a9190c5.js";const h=JSON.parse('{"title":"抛弃过时的SourceInsight 使用clion阅读linux内核代码","description":"","frontmatter":{"title":"抛弃过时的SourceInsight 使用clion阅读linux内核代码","date":"2020-08-24T23:06:23.000Z","draft":false},"headers":[],"relativePath":"other/read_kerenel_use_clion.md"}'),l={name:"other/read_kerenel_use_clion.md"},p=n(`<p>欢迎加入qq群:705958262 交流</p><h2 id="最直接方式" tabindex="-1">最直接方式 <a class="header-anchor" href="#最直接方式" aria-label="Permalink to &quot;最直接方式&quot;">​</a></h2><p>clone本仓库</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git clone https://gitee.com/nkbai/clion-linux-kernel-3.16.git</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>或者</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git clone https://github.com/nkbai/clion-linux-kernel-3.16.git</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>然后使用clion打开本工程即可.</p><p><strong>这个版本针对的是arm处理器,开发板是vexpress-a9</strong></p><h2 id="自定义版本" tabindex="-1">自定义版本 <a class="header-anchor" href="#自定义版本" aria-label="Permalink to &quot;自定义版本&quot;">​</a></h2><p>如果你关注的平台不是arm,比如x86,或者不是3.6版本,而是其他版本,那么你就可以自己构造这么一个工程.</p><h3 id="_1-正常编译" tabindex="-1">1. 正常编译 <a class="header-anchor" href="#_1-正常编译" aria-label="Permalink to &quot;1. 正常编译&quot;">​</a></h3><p>选个linux平台,比如ubuntu,可以正常编译内核. 然后</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">make clean</span></span>
<span class="line"><span style="color:#A6ACCD;">bear make zImage</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>其中最关键的是<code>bear make zImage</code>,他会在内核源码目录下生成<code>compile_commands.json</code>. 记录完整的编译过程.</p><h3 id="_2-生成cmakelists-txt" tabindex="-1">2. 生成CMakeLists.txt <a class="header-anchor" href="#_2-生成cmakelists-txt" aria-label="Permalink to &quot;2. 生成CMakeLists.txt&quot;">​</a></h3><p>这里需要用到工具<a href="https://github.com/habemus-papadum/kernel-grok.git" target="_blank" rel="noreferrer">kernel-grok</a></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo apt install ruby</span></span>
<span class="line"><span style="color:#A6ACCD;">git clone https://github.com/habemus-papadum/kernel-grok.git</span></span>
<span class="line"><span style="color:#A6ACCD;">cd clion-linux-kernel-3.16</span></span>
<span class="line"><span style="color:#A6ACCD;">../kernel-grok/generate_cmake</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>这时候就会生成CMakeLists.txt. 然后打开<code>CMakeLists.txt</code>,添加:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">SET(CMAKE_C_COMPILER &quot;gcc&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">include_directories(&quot;.&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">include_directories(&quot;./include&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>否则会出现头文件找不到的情况.</p><h3 id="_3-愉快的阅读源码吧" tabindex="-1">3. 愉快的阅读源码吧. <a class="header-anchor" href="#_3-愉快的阅读源码吧" aria-label="Permalink to &quot;3. 愉快的阅读源码吧.&quot;">​</a></h3><p><img alt="" data-src="img/clion.png" loading="lazy" class="lazy"></p><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><p>这里提供了一个思路,其实所有不支持cmake的传统c/c++项目都可以通过这种方式来导入,至少代码编写,阅读可以流畅许多.</p>`,24),r=[p];function t(i,o,c,d,u,m){return e(),s("div",null,r)}const C=a(l,[["render",t]]);export{h as __pageData,C as default};