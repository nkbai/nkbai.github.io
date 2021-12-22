import{o as e,c as o,f as a,b as r,d as l,e as n}from"./app.26819860.js";const t='{"title":"让photon支持go module","description":"","frontmatter":{"title":"让photon支持go module","date":"2018-11-07T12:35:46.000Z","draft":false,"markup":"mmark"},"headers":[{"level":2,"title":"1. go module简介","slug":"_1-go-module简介"},{"level":2,"title":"2. 使用go mod命令管理项目","slug":"_2-使用go-mod命令管理项目"},{"level":3,"title":"2.1 初始化环境","slug":"_2-1-初始化环境"},{"level":3,"title":"2.2 构建","slug":"_2-2-构建"},{"level":2,"title":"3. 保持兼容性","slug":"_3-保持兼容性"},{"level":2,"title":"4. 使用goland来\\b管理你的新版项目","slug":"_4-使用goland来管理你的新版项目"}],"relativePath":"ethereum/让photon支持go module.md","lastUpdated":1561553438000}',d={},i=r("h1",{id:"如何让你的项目同时支持go-vendor和go-module"},[r("a",{class:"header-anchor",href:"#如何让你的项目同时支持go-vendor和go-module","aria-hidden":"true"},"#"),l(" 如何让你的项目同时支持go vendor和go module")],-1),h=n('<ul><li><a href="#%E5%A6%82%E4%BD%95%E8%AE%A9%E4%BD%A0%E7%9A%84%E9%A1%B9%E7%9B%AE%E5%90%8C%E6%97%B6%E6%94%AF%E6%8C%81go-vendor%E5%92%8Cgo-module">如何让你的项目同时支持go vendor和go module</a><ul><li><a href="#1-go-module%E7%AE%80%E4%BB%8B">1. go module简介</a></li><li><a href="#2-%E4%BD%BF%E7%94%A8go-mod%E5%91%BD%E4%BB%A4%E7%AE%A1%E7%90%86%E9%A1%B9%E7%9B%AE">2. 使用go mod命令管理项目</a><ul><li><a href="#21-%E5%88%9D%E5%A7%8B%E5%8C%96%E7%8E%AF%E5%A2%83">2.1 初始化环境</a></li><li><a href="#22-%E6%9E%84%E5%BB%BA">2.2 构建</a><ul><li><a href="#221-%E9%9C%80%E8%A6%81%E7%BF%BB%E5%A2%99%E7%9A%84%E6%BA%90%E7%A0%81%E6%80%8E%E4%B9%88%E5%8A%9E">2.2.1 需要翻墙的源码怎么办?</a></li><li><a href="#222-%E6%88%91%E4%BE%9D%E8%B5%96%E7%9A%84%E4%B8%8D%E8%83%BD%E6%98%AF%E6%9C%80%E6%96%B0%E7%9A%84%E4%BB%A3%E7%A0%81%E6%80%8E%E4%B9%88%E5%8A%9E">2.2.2 我依赖的不能是最新的代码怎么办</a></li><li><a href="#223-%E6%88%91%E4%BE%9D%E8%B5%96%E7%9A%84%E6%9F%90%E4%B8%AA%E9%A1%B9%E7%9B%AE%E6%98%AF%E6%88%91%E4%BF%AE%E6%94%B9%E8%BF%87%E7%9A%84%E5%92%8C%E5%AE%98%E6%96%B9%E7%89%88%E6%9C%AC%E4%B8%8D%E4%B8%80%E6%A0%B7%E6%80%8E%E4%B9%88%E5%8A%9E">2.2.3 我依赖的某个项目是我修改过的,和官方版本不一样怎么办</a></li><li><a href="#224-%E5%85%B6%E4%BB%96%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9">2.2.4 其他注意事项</a></li></ul></li></ul></li><li><a href="#3-%E4%BF%9D%E6%8C%81%E5%85%BC%E5%AE%B9%E6%80%A7">3. 保持兼容性</a></li><li><a href="#4-%E4%BD%BF%E7%94%A8goland%E6%9D%A5%E7%AE%A1%E7%90%86%E4%BD%A0%E7%9A%84%E6%96%B0%E7%89%88%E9%A1%B9%E7%9B%AE">4. 使用goland来\b管理你的新版项目</a></li></ul></li></ul>',1),E=n('<h2 id="_1-go-module简介"><a class="header-anchor" href="#_1-go-module简介" aria-hidden="true">#</a> 1. go module简介</h2><p>go module是go在1.11版本引入的新的版本依赖工具,是对vendor方式的一次升级. 目前是如果项目位于GOPATH下则会默认禁用go modoule,否则就会默认启用.</p><p>因此首先需要将项目移出GOPATH,假设位于~/dev/smmodule目录下.</p><h2 id="_2-使用go-mod命令管理项目"><a class="header-anchor" href="#_2-使用go-mod命令管理项目" aria-hidden="true">#</a> 2. 使用go mod命令管理项目</h2><p>这里以我们的Photon项目为例,来说明如何实施.</p><h3 id="_2-1-初始化环境"><a class="header-anchor" href="#_2-1-初始化环境" aria-hidden="true">#</a> 2.1 初始化环境</h3><p><code>cd ~/dev/smmodule/Photon</code> 切换到项目以后首先要初始化.为了避免带来莫名其妙的问题,建议先将vendor目录移到其他地方,待配置完毕以后再移回来.</p><div class="language-bash line-numbers-mode"><pre><code><span class="token builtin class-name">cd</span> ~/dev/smmodule/Photon\ngo mod init\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这时就会在Photon下产生了go.mod 文件,如果打开就会看到只有一句话</p><div class="language-go.mod"><pre><code>module github.com/nkbai/Photon\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>这个路径是因为我这个项目在github上的路径是 <a href="http://github.com/nkbai/Photon" target="_blank" rel="noopener noreferrer">github.com/nkbai/Photon</a> ,但是实际上,我这个项目只是module <a href="http://github.com/SmartMeshFoundation/Photon" target="_blank" rel="noopener noreferrer">github.com/SmartMeshFoundation/Photon</a> ,所以需要直接将其内容修改为</p><div class="language-go.mod"><pre><code>module github.com/SmartMeshFoundation/Photon\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="_2-2-构建"><a class="header-anchor" href="#_2-2-构建" aria-hidden="true">#</a> 2.2 构建</h3><p>这时候我们进入cmd/photon目录,执行<code>go build</code>命令,进行编译.这时候就会看到go会根据项目代码自动下载所有依赖的项目代码. 这个过程可能会碰到各种问题.下面就常见的问题列出来.</p><h4 id="_2-2-1-需要翻墙的源码怎么办"><a class="header-anchor" href="#_2-2-1-需要翻墙的源码怎么办" aria-hidden="true">#</a> 2.2.1 需要翻墙的源码怎么办?</h4><p>直接打开go.mod 添加replace项, 比如:</p><div class="language-"><pre><code>replace (\n\tgolang.org/x/net v0.0.0-20181106171534-e4dc69e5b2fd =&gt; github.com/golang/net latest\n)\n\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>这表示系统依赖的 <a href="http://golang.org/x/net" target="_blank" rel="noopener noreferrer">golang.org/x/net</a> v0.0.0 <a href="http://xn--github-ov7iw7bl48ft7r231agi8d0zk.com/golang/net" target="_blank" rel="noopener noreferrer">这个版本应该从github.com/golang/net</a> 这个地方下载<code>latest</code>也就是最新版本.</p><h4 id="_2-2-2-我依赖的不能是最新的代码怎么办"><a class="header-anchor" href="#_2-2-2-我依赖的不能是最新的代码怎么办" aria-hidden="true">#</a> 2.2.2 我依赖的不能是最新的代码怎么办</h4><p>我们的项目以前用的是vendor方式,可能依赖的是某个项目较早的版本,但是go下载的确实最新的版本,这时候只需到项目主页找到你依赖的版本号即可.</p><p>比如Photon依赖的storm,go自动下载的是最新的2.1.2,但是无法编译. 这时候就需要打开go.mod 直接修改 比如我这里直接将 <a href="http://github.com/asdine/storm" target="_blank" rel="noopener noreferrer">github.com/asdine/storm</a> v2.1.2+incompatible 修改为v2.1.1</p><p>这样就可以正常编译了.</p><h4 id="_2-2-3-我依赖的某个项目是我修改过的-和官方版本不一样怎么办"><a class="header-anchor" href="#_2-2-3-我依赖的某个项目是我修改过的-和官方版本不一样怎么办" aria-hidden="true">#</a> 2.2.3 我依赖的某个项目是我修改过的,和官方版本不一样怎么办</h4><p>比如Photon依赖的go-ethereum实际上不是官方的任何一个版本,是根据我们自己的需要,做了修改的版本. 那么这时候也很简单,直接clone一个官方的版本到自己的github上,然后修改. 待修改完毕以后,新建一个版本即可.</p><p>比如我就把 <a href="http://github.com/ethereum/go-ethereum" target="_blank" rel="noopener noreferrer">github.com/ethereum/go-ethereum</a> clone到我自己的github上,然后按照vendor中的修改重新来一遍,然后打了一个v1.9.1的tag.</p><p>然后同样replace成下面的. replace ( <a href="http://github.com/ethereum/go-ethereum" target="_blank" rel="noopener noreferrer">github.com/ethereum/go-ethereum</a> v1.8.17 =&gt; <a href="http://github.com/nkbai/go-ethereum" target="_blank" rel="noopener noreferrer">github.com/nkbai/go-ethereum</a> v1.9.1 )</p><h4 id="_2-2-4-其他注意事项"><a class="header-anchor" href="#_2-2-4-其他注意事项" aria-hidden="true">#</a> 2.2.4 其他注意事项</h4><p>由于go mod目前处于较早起版本,我们手工修改文件要特别注意 否则会碰到莫名其妙的问题.我说一下我碰到的两个问题</p><ul><li><ol><li>replace和(之间的空格一定不能少</li></ol></li><li><ol start="2"><li>=&gt; 前后的空格一定不能少</li></ol></li><li><ol start="3"><li>如果替换的版本号不知道是多少,直接写latest,go会自己找到最新版本填上去.</li></ol></li></ul><h2 id="_3-保持兼容性"><a class="header-anchor" href="#_3-保持兼容性" aria-hidden="true">#</a> 3. 保持兼容性</h2><p>将原来的vendor目录移回来,这时候你会发现项目没什么变化,只是多了两个go.mod和go.sum两个文件,直接添加将其提交到github即可.</p><p>这时候,你这个项目既可以在GOPA\b\b\b\bTH下像以前一样管理,也可以在独立的其他目录中编译运行.</p><h2 id="_4-使用goland来管理你的新版项目"><a class="header-anchor" href="#_4-使用goland来管理你的新版项目" aria-hidden="true">#</a> 4. 使用goland来\b管理你的新版项目</h2><p>记得新建项目,并且在新建的时候选择go module即可.</p>',34);d.render=function(r,l,n,t,d,g){return e(),o("div",null,[i,a(' @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} '),a(" code_chunk_output "),h,a(" /code_chunk_output "),E])};export{t as __pageData,d as default};
