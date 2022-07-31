import{_ as e,c as a,o as r,a as t}from"./app.4bbc222c.js";const m='{"title":"raiden_graph","description":"","frontmatter":{"title":"raiden_graph","date":"2018-08-27T02:48:47.000Z","draft":false,"markup":"mmark"},"headers":[{"level":2,"title":"\u901A\u9053 AB,\u6B63\u5E38\u72B6\u6001","slug":"\u901A\u9053-ab-\u6B63\u5E38\u72B6\u6001"},{"level":2,"title":"\u901A\u9053 AB closed","slug":"\u901A\u9053-ab-closed"},{"level":2,"title":"\u901A\u9053 ABCD","slug":"\u901A\u9053-abcd"}],"relativePath":"blockchain/ethereum/raiden_graph.md"}',n={},i=t(`<h1 id="\u4F7F\u7528mermaid\u63CF\u8FF0-raiden" tabindex="-1">\u4F7F\u7528mermaid\u63CF\u8FF0 raiden <a class="header-anchor" href="#\u4F7F\u7528mermaid\u63CF\u8FF0-raiden" aria-hidden="true">#</a></h1><h2 id="\u901A\u9053-ab-\u6B63\u5E38\u72B6\u6001" tabindex="-1">\u901A\u9053 AB,\u6B63\u5E38\u72B6\u6001 <a class="header-anchor" href="#\u901A\u9053-ab-\u6B63\u5E38\u72B6\u6001" aria-hidden="true">#</a></h2><pre class="mermaid loading">graph LR
    A-- 60,100,S_100 ---B</pre><h2 id="\u901A\u9053-ab-closed" tabindex="-1">\u901A\u9053 AB closed <a class="header-anchor" href="#\u901A\u9053-ab-closed" aria-hidden="true">#</a></h2><pre class="mermaid loading">graph LR
A((A)) -. 60,100 .- B((B))</pre><h2 id="\u901A\u9053-abcd" tabindex="-1">\u901A\u9053 ABCD <a class="header-anchor" href="#\u901A\u9053-abcd" aria-hidden="true">#</a></h2><pre class="mermaid loading">graph LR
A((A))
A--60,100 ---B
B-- 50,50 ---C
B--20,30 ---D</pre><h1 id="\u4EA4\u6613-a-b-c" tabindex="-1">\u4EA4\u6613 A-B-C <a class="header-anchor" href="#\u4EA4\u6613-a-b-c" aria-hidden="true">#</a></h1><pre class="mermaid loading">sequenceDiagram
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
    A-&gt;&gt;B: Unlock</pre><p><a href="https://mermaidjs.github.io/demos.html" target="_blank" rel="noopener noreferrer">mermaid\u793A\u4F8B\u4EE5\u53CA\u5E2E\u52A9\u6587\u6863</a></p>`,10),d=[i];function s(c,h,l,o,p,g){return r(),a("div",null,d)}var A=e(n,[["render",s]]);export{m as __pageData,A as default};
