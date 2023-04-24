import{_ as a,c as s,o as e,N as n}from"./chunks/framework.3a9190c5.js";const C=JSON.parse('{"title":"git以及github回退到指定版本","description":"","frontmatter":{"title":"git以及github回退到指定版本","date":"2019-06-30T03:06:23.000Z","draft":false},"headers":[],"relativePath":"other/git以及github回退.md"}'),t={name:"other/git以及github回退.md"},l=n(`<h2 id="本地回退" tabindex="-1">本地回退 <a class="header-anchor" href="#本地回退" aria-label="Permalink to &quot;本地回退&quot;">​</a></h2><p>git log 获取到你想回退到的那个commit, 然后</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--hard</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">d324ce75cc9bcc6777a2b45c756f4df2f47c4ef3</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这样本地就回退完毕</p><h2 id="github回退" tabindex="-1">github回退 <a class="header-anchor" href="#github回退" aria-label="Permalink to &quot;github回退&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">-f</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><p>这个会影响其他分支么? 不会,只影响你所在的分支,比如这里的master</p>`,8),o=[l];function p(r,i,c,d,h,u){return e(),s("div",null,o)}const _=a(t,[["render",p]]);export{C as __pageData,_ as default};
