import{o as e,c as a,e as n}from"./app.26819860.js";const s='{"title":"抛弃过时的SourceInsight 使用clion阅读linux内核代码","description":"","frontmatter":{"title":"抛弃过时的SourceInsight 使用clion阅读linux内核代码","date":"2020-08-24T23:06:23.000Z","draft":false},"headers":[{"level":2,"title":"最直接方式","slug":"最直接方式"},{"level":2,"title":"自定义版本","slug":"自定义版本"},{"level":3,"title":"1. 正常编译","slug":"_1-正常编译"},{"level":3,"title":"2. 生成CMakeLists.txt","slug":"_2-生成cmakelists-txt"},{"level":3,"title":"3. 愉快的阅读源码吧.","slug":"_3-愉快的阅读源码吧"},{"level":2,"title":"其他","slug":"其他"}],"relativePath":"other/read_kerenel_use_clion.md","lastUpdated":1640138772465}',r={},l=[n('<p>欢迎加入qq群:705958262 交流</p><h2 id="最直接方式"><a class="header-anchor" href="#最直接方式" aria-hidden="true">#</a> 最直接方式</h2><p>clone本仓库</p><div class="language-"><pre><code>git clone https://gitee.com/nkbai/clion-linux-kernel-3.16.git\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>或者</p><div class="language-"><pre><code>git clone https://github.com/nkbai/clion-linux-kernel-3.16.git\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>然后使用clion打开本工程即可.</p><p><strong>这个版本针对的是arm处理器,开发板是vexpress-a9</strong></p><h2 id="自定义版本"><a class="header-anchor" href="#自定义版本" aria-hidden="true">#</a> 自定义版本</h2><p>如果你关注的平台不是arm,比如x86,或者不是3.6版本,而是其他版本,那么你就可以自己构造这么一个工程.</p><h3 id="_1-正常编译"><a class="header-anchor" href="#_1-正常编译" aria-hidden="true">#</a> 1. 正常编译</h3><p>选个linux平台,比如ubuntu,可以正常编译内核. 然后</p><div class="language-"><pre><code>make clean\nbear make zImage\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>其中最关键的是<code>bear make zImage</code>,他会在内核源码目录下生成<code>compile_commands.json</code>. 记录完整的编译过程.</p><h3 id="_2-生成cmakelists-txt"><a class="header-anchor" href="#_2-生成cmakelists-txt" aria-hidden="true">#</a> 2. 生成CMakeLists.txt</h3><p>这里需要用到工具<a href="https://github.com/habemus-papadum/kernel-grok.git" target="_blank" rel="noopener noreferrer">kernel-grok</a></p><div class="language-"><pre><code>sudo apt install ruby\ngit clone https://github.com/habemus-papadum/kernel-grok.git\ncd clion-linux-kernel-3.16\n../kernel-grok/generate_cmake\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>这时候就会生成CMakeLists.txt. 然后打开<code>CMakeLists.txt</code>,添加:</p><div class="language-"><pre><code>SET(CMAKE_C_COMPILER &quot;gcc&quot;)\ninclude_directories(&quot;.&quot;)\ninclude_directories(&quot;./include&quot;)\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>否则会出现头文件找不到的情况.</p><h3 id="_3-愉快的阅读源码吧"><a class="header-anchor" href="#_3-愉快的阅读源码吧" aria-hidden="true">#</a> 3. 愉快的阅读源码吧.</h3><p><img alt="" data-src="img/clion.png" loading="lazy" class="lazy"></p><h2 id="其他"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>这里提供了一个思路,其实所有不支持cmake的传统c/c++项目都可以通过这种方式来导入,至少代码编写,阅读可以流畅许多.</p>',24)];r.render=function(n,s,r,i,t,c){return e(),a("div",null,l)};export{s as __pageData,r as default};
