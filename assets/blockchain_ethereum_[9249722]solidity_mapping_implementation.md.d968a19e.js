import{o as n,c as s,e as a}from"./app.63f3ffeb.js";const p='{"title":"[9249722]soliditymappingimplementation","description":"","frontmatter":{"title":"[9249722]solidity_mapping_implementation","date":"2018-08-18T06:02:04.000Z","draft":false,"markup":"mmark"},"headers":[{"level":2,"title":"构造合约","slug":"构造合约"},{"level":2,"title":"汇编指令","slug":"汇编指令"},{"level":2,"title":"总结","slug":"总结"}],"relativePath":"blockchain/ethereum/[9249722]solidity_mapping_implementation.md","lastUpdated":1561553438000}',e={},l=[a('<h1 id="solidity-中-mapping-是如何存储的"><a class="header-anchor" href="#solidity-中-mapping-是如何存储的" aria-hidden="true">#</a> solidity 中 mapping 是如何存储的</h1><p>为了探测 solidity mapping 如何实现,我构造了一个简单的合约. 先说结论,实际上 mapping的访问成本并不比直接访问storage变量多花费更多的 gas.两者几乎差不多.</p><h2 id="构造合约"><a class="header-anchor" href="#构造合约" aria-hidden="true">#</a> 构造合约</h2><div class="language-sol line-numbers-mode"><pre><code><span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.4.23</span><span class="token punctuation">;</span>\n\n<span class="token keyword">contract</span> <span class="token class-name">TestMap</span><span class="token punctuation">{</span>\n     <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> <span class="token operator">=&gt;</span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token keyword">public</span> channels<span class="token punctuation">;</span>\n     <span class="token keyword">function</span> <span class="token function">TestSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span><span class="token punctuation">{</span>\n        channels<span class="token punctuation">[</span><span class="token number">0x39</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">0x77</span><span class="token punctuation">;</span>\n     <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>合约非常简单,就是写一个 mapping.</p><h2 id="汇编指令"><a class="header-anchor" href="#汇编指令" aria-hidden="true">#</a> 汇编指令</h2><p>最主要是这些指令里面就有一条昂贵的就是 sstore, 至少需要5000gas.</p><div class="language-asm line-numbers-mode"><pre><code>    /* &quot;testmapping.sol&quot;:151:155  0x77 */\n      0x77\n        /* &quot;testmapping.sol&quot;:136:144  channels */\n      0x0\n        /* &quot;testmapping.sol&quot;:136:150  channels[0x39] */\n      dup1\n        /* &quot;testmapping.sol&quot;:145:149  0x39 */\n      0x39\n        /* &quot;testmapping.sol&quot;:136:150  channels[0x39] */\n      dup2\n      mstore\n      0x20\n      add\n      swap1\n      dup2\n      mstore\n      0x20\n      add\n      0x0\n      keccak256\n        /* &quot;testmapping.sol&quot;:136:155  channels[0x39]=0x77 */\n      dup2\n      swap1\n      sstore\n      pop\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="总结"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>由于指令的成本较低,写 storage 最少需要5000gas, 而 sha3只需要30+gas, 可以忽略不计,其他指令也很便宜. 当然如果是读的话,就稍微贵一点点,读 storage 是200gas, 那么 sha3加上这些指令,估计就有接近100了. 不过如果mapping 确实可以带来便利,那就用 mapping 吧.</p>',10)];e.render=function(a,p,e,t,r,i){return n(),s("div",null,l)};export{p as __pageData,e as default};
