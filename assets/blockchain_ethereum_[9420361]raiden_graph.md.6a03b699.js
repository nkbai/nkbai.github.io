import{o as e,c as a,e as r}from"./app.1f3c315f.js";const t='{"title":"[9420361]raiden_graph","description":"","frontmatter":{"title":"[9420361]raiden_graph","date":"2018-08-27T02:48:47.000Z","draft":false,"markup":"mmark"},"headers":[{"level":2,"title":"通道 AB,正常状态","slug":"通道-ab-正常状态"},{"level":2,"title":"通道 AB closed","slug":"通道-ab-closed"},{"level":2,"title":"通道 ABCD","slug":"通道-abcd"}],"relativePath":"blockchain/ethereum/[9420361]raiden_graph.md","lastUpdated":1561553438000}',i={},n=[r('<h1 id="使用mermaid描述-raiden"><a class="header-anchor" href="#使用mermaid描述-raiden" aria-hidden="true">#</a> 使用mermaid描述 raiden</h1><h2 id="通道-ab-正常状态"><a class="header-anchor" href="#通道-ab-正常状态" aria-hidden="true">#</a> 通道 AB,正常状态</h2><pre class="mermaid loading">graph LR\n    A-- 60,100,S_100 ---B</pre><h2 id="通道-ab-closed"><a class="header-anchor" href="#通道-ab-closed" aria-hidden="true">#</a> 通道 AB closed</h2><pre class="mermaid loading">graph LR\nA((A)) -. 60,100 .- B((B))</pre><h2 id="通道-abcd"><a class="header-anchor" href="#通道-abcd" aria-hidden="true">#</a> 通道 ABCD</h2><pre class="mermaid loading">graph LR\nA((A))\nA--60,100 ---B\nB-- 50,50 ---C\nB--20,30 ---D</pre><h1 id="交易-a-b-c"><a class="header-anchor" href="#交易-a-b-c" aria-hidden="true">#</a> 交易 A-B-C</h1><pre class="mermaid loading">sequenceDiagram\n    participant A as Alice\n    participant B as Bob\n    participant C as Charle\n    A-&gt;&gt;B:  MTR,expiration=3000,H(secret)=333\n    B-&gt;&gt;C: MTR,expiration=3000\n    Note right of B: exiration should less than 3000\n    Note over A,C: secret should be the same\n    C-&gt;&gt;A: Secret Request\n    A-&gt;&gt;C: Reveal Secret\n    C-&gt;&gt;B: Reveal Secret\n    B-&gt;&gt;C: Unlock\n    B-&gt;&gt;A: Reveal Secret\n    A-&gt;&gt;B: Unlock</pre><p><a href="https://mermaidjs.github.io/demos.html" target="_blank" rel="noopener noreferrer">mermaid示例以及帮助文档</a></p>',10)];i.render=function(r,t,i,d,l,s){return e(),a("div",null,n)};export{t as __pageData,i as default};
