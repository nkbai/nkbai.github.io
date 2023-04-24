import{_ as s,c as a,o as n,N as e}from"./chunks/framework.3a9190c5.js";const C=JSON.parse('{"title":"TheDao 简化版解释","description":"","frontmatter":{"title":"TheDao 简化版解释","date":"2018-04-25T03:06:23.000Z","hide":false},"headers":[],"relativePath":"blockchain/ethereum/thedao.md"}'),l={name:"blockchain/ethereum/thedao.md"},p=e(`<h1 id="thedao-简化版解释" tabindex="-1">TheDao 简化版解释 <a class="header-anchor" href="#thedao-简化版解释" aria-label="Permalink to &quot;TheDao 简化版解释&quot;">​</a></h1><h2 id="the-dao-合约" tabindex="-1">the Dao 合约 <a class="header-anchor" href="#the-dao-合约" aria-label="Permalink to &quot;the Dao 合约&quot;">​</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">contract f1{</span></span>
<span class="line"><span style="color:#A6ACCD;">    function transfer()</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (acccount[m]&gt;=100) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            m.send(100)</span></span>
<span class="line"><span style="color:#A6ACCD;">            account[m]-=100</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h1 id="send-会调用-m-的-fallback-函数" tabindex="-1">send 会调用 m 的 fallback 函数 <a class="header-anchor" href="#send-会调用-m-的-fallback-函数" aria-label="Permalink to &quot;send 会调用 m 的 fallback 函数&quot;">​</a></h1><p>但是 m 不是一个普通的地址,而是下面的合约</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">contract m {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //fallback function</span></span>
<span class="line"><span style="color:#A6ACCD;">    function ()payable{</span></span>
<span class="line"><span style="color:#A6ACCD;">        f1.f()</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h1 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h1><p>先扣钱再转转</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">contract f2{</span></span>
<span class="line"><span style="color:#A6ACCD;">    function transfer()</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (acccount[m]&gt;=100) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            account[m]-=100</span></span>
<span class="line"><span style="color:#A6ACCD;">            m.send(100)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,9),c=[p];function r(o,t,i,b,m,u){return n(),a("div",null,c)}const A=s(l,[["render",r]]);export{C as __pageData,A as default};
