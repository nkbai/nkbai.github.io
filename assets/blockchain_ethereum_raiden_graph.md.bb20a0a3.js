import{_ as a,c as e,o as r,N as t}from"./chunks/framework.3a9190c5.js";const g=JSON.parse('{"title":"raiden_graph","description":"","frontmatter":{"title":"raiden_graph","date":"2018-08-27T02:48:47.000Z","draft":false,"markup":"mmark"},"headers":[],"relativePath":"blockchain/ethereum/raiden_graph.md"}'),n={name:"blockchain/ethereum/raiden_graph.md"},i=t(`<h1 id="使用mermaid描述-raiden" tabindex="-1">使用mermaid描述 raiden <a class="header-anchor" href="#使用mermaid描述-raiden" aria-label="Permalink to &quot;使用mermaid描述 raiden&quot;">​</a></h1><h2 id="通道-ab-正常状态" tabindex="-1">通道 AB,正常状态 <a class="header-anchor" href="#通道-ab-正常状态" aria-label="Permalink to &quot;通道 AB,正常状态&quot;">​</a></h2><pre class="mermaid loading">graph LR
    A-- 60,100,S_100 ---B</pre><h2 id="通道-ab-closed" tabindex="-1">通道 AB closed <a class="header-anchor" href="#通道-ab-closed" aria-label="Permalink to &quot;通道 AB closed&quot;">​</a></h2><pre class="mermaid loading">graph LR
A((A)) -. 60,100 .- B((B))</pre><h2 id="通道-abcd" tabindex="-1">通道 ABCD <a class="header-anchor" href="#通道-abcd" aria-label="Permalink to &quot;通道 ABCD&quot;">​</a></h2><pre class="mermaid loading">graph LR
A((A))
A--60,100 ---B
B-- 50,50 ---C
B--20,30 ---D</pre><h1 id="交易-a-b-c" tabindex="-1">交易 A-B-C <a class="header-anchor" href="#交易-a-b-c" aria-label="Permalink to &quot;交易 A-B-C&quot;">​</a></h1><pre class="mermaid loading">sequenceDiagram
    participant A as Alice
    participant B as Bob
    participant C as Charle
    A-&gt;&gt;B:  MTR,expiration=3000,H(secret)=333
    B-&gt;&gt;C: MTR,expiration=3000
    Note right of B: exiration should less than 3000
    Note over A,C: secret should be the same
    C-&gt;&gt;A: Secret Request
    A-&gt;&gt;C: Reveal Secret
    C-&gt;&gt;B: Reveal Secret
    B-&gt;&gt;C: Unlock
    B-&gt;&gt;A: Reveal Secret
    A-&gt;&gt;B: Unlock</pre><p><a href="https://mermaidjs.github.io/demos.html" target="_blank" rel="noreferrer">mermaid示例以及帮助文档</a></p>`,10),o=[i];function d(s,c,l,h,m,p){return r(),e("div",null,o)}const A=a(n,[["render",d]]);export{g as __pageData,A as default};
