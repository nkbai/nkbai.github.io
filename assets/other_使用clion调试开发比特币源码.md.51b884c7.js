import{_ as s,c as a,o as n,N as l}from"./chunks/framework.3a9190c5.js";const C=JSON.parse('{"title":"使用clion调试开发比特币源码","description":"","frontmatter":{"title":"使用clion调试开发比特币源码","date":"2019-06-27T23:06:23.000Z","draft":false},"headers":[],"relativePath":"other/使用clion调试开发比特币源码.md"}'),e={name:"other/使用clion调试开发比特币源码.md"},i=l(`<p>以mac平台为例,这个做法我相信都是通用的,我用的是clion 2019.1.2. 版本不同,可能功能会略有不同.</p><h2 id="编译安装" tabindex="-1">编译安装 <a class="header-anchor" href="#编译安装" aria-label="Permalink to &quot;编译安装&quot;">​</a></h2><ol><li>准备</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">xcode-select --install</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2"><li>依赖</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">brew install automake berkeley-db4 libtool boost miniupnpc openssl pkg-config protobuf python qt libevent qrencode</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="3"><li>钱包依赖的DB 如果需要钱包功能,则需要Berkeley DB 4.8. 下载<a href="https://github.com/bitcoin/bitcoin/blob/master/contrib/install_db4.sh" target="_blank" rel="noreferrer">安装脚本</a>. 在源码根目录运行:</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">./contrib/install_db4.sh .</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="4"><li>编译</li></ol><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/bitcoin/bitcoin</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bitcoin</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">/autogen.sh</span></span>
<span class="line"><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">/configure</span></span>
<span class="line"><span style="color:#FFCB6B;">make</span></span>
<span class="line"><span style="color:#FFCB6B;">make</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">check</span></span>
<span class="line"><span style="color:#FFCB6B;">make</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">deploy</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>比如我在mac上就碰到找不到boost目录的情况,则需要在./configure指定,我的./configure参数:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">./configure --enable-debug --without-gui --with-boost=/usr/local/Cellar/boost/1.68.0_1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="5"><li>运行 这时候就会在bitcoin/src目录下看到可执行程序bitcoind,bitcoin-cli等.</li></ol><h2 id="配置clion" tabindex="-1">配置clion <a class="header-anchor" href="#配置clion" aria-label="Permalink to &quot;配置clion&quot;">​</a></h2><h3 id="创建cmakefile-txt" tabindex="-1">创建CMakefile.txt <a class="header-anchor" href="#创建cmakefile-txt" aria-label="Permalink to &quot;创建CMakefile.txt&quot;">​</a></h3><p>在src目录创建CMakefile.txt,内容如下</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cmake_minimum_required(VERSION 3.12)</span></span>
<span class="line"><span style="color:#A6ACCD;">project(src)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">set(CMAKE_CXX_STANDARD 11)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">include_directories(\${PROJECT_SOURCE_DIR}/secp256k1/include</span></span>
<span class="line"><span style="color:#A6ACCD;">        \${PROJECT_SOURCE_DIR}/leveldb/include</span></span>
<span class="line"><span style="color:#A6ACCD;">        \${PROJECT_SOURCE_DIR}/univalue/include</span></span>
<span class="line"><span style="color:#A6ACCD;">        \${PROJECT_SOURCE_DIR}</span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">file(GLOB_RECURSE SRCS *.cpp *,h)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="创建项目" tabindex="-1">创建项目 <a class="header-anchor" href="#创建项目" aria-label="Permalink to &quot;创建项目&quot;">​</a></h3><p>File-&gt;New CMake Project From Source-&gt;选择刚刚的CMakefile.txt</p><p>等待系统建立索引.这时候你就发现代码跳转,代码提示已经ok了. <strong>如果直接运行是编译不通过的.</strong></p><h3 id="支持调试运行" tabindex="-1">支持调试运行 <a class="header-anchor" href="#支持调试运行" aria-label="Permalink to &quot;支持调试运行&quot;">​</a></h3><ol><li>Run-&gt;Edit Configurations-&gt;添加Custom Build Application 起名字叫bitcoin-cli</li><li>Configure Custom Build Targets 仍然起名字叫bitcoin-cli <img alt="" data-src="./img/custombuildtarget.jpg" loading="lazy" class="lazy"></li></ol><ul><li>添加build Name: bitcoin-cli Program: make Arguments: bitcoin-cli <img alt="" data-src="./img/build.jpg" loading="lazy" class="lazy"></li><li>clean 选择和build一样的配置</li></ul><ol start="3"><li><p>继续配置Custom Build Application Target: 选择bitcoin-cli Executable: 找到文件系统中的可执行程序bitcoin-cli文件 <img alt="" data-src="./img/custom2.jpg" loading="lazy" class="lazy"> 可以根据自己的需要添加运行参数.</p></li><li><p>调试 在bitcoin-cli.cpp main函数入口处设置断点. 如果有语法错误提示,忽略即可,</p></li></ol><p>点击调试-&gt;bitcoin-cli 发现停在了main函数,并且能够显示变量. 只不过对于复杂的变量,不能显示. <img alt="示意图" data-src="./img/debug.jpg" loading="lazy" class="lazy"></p><p>这个支持调试的思路就是让clion支持非cmake build的可执行程序,在<code>2. Configure Custom Build Targets</code>中使用<code>make bitcoin-cli</code>,实际上就是在src目录执行这个命令. 这样就会在调试之前生成可执行程序.</p><p>这里举的例子是bitcoin-cli,如果有调试其他程序需求,如法炮制即可.</p>`,27),p=[i];function o(c,t,r,b,d,u){return n(),a("div",null,p)}const A=s(e,[["render",o]]);export{C as __pageData,A as default};
