import{_ as s,c as n,o as a,N as l}from"./chunks/framework.3a9190c5.js";const A=JSON.parse('{"title":"solidity_mapping_implementation","description":"","frontmatter":{"title":"solidity_mapping_implementation","date":"2018-08-18T06:02:04.000Z","draft":false,"markup":"mmark"},"headers":[],"relativePath":"blockchain/ethereum/solidity_mapping_implementation.md"}'),p={name:"blockchain/ethereum/solidity_mapping_implementation.md"},e=l(`<h1 id="solidity-中-mapping-是如何存储的" tabindex="-1">solidity 中 mapping 是如何存储的 <a class="header-anchor" href="#solidity-中-mapping-是如何存储的" aria-label="Permalink to &quot;solidity 中 mapping 是如何存储的&quot;">​</a></h1><p>为了探测 solidity mapping 如何实现,我构造了一个简单的合约. 先说结论,实际上 mapping的访问成本并不比直接访问storage变量多花费更多的 gas.两者几乎差不多.</p><h2 id="构造合约" tabindex="-1">构造合约 <a class="header-anchor" href="#构造合约" aria-label="Permalink to &quot;构造合约&quot;">​</a></h2><div class="language-sol line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sol</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pragma solidity ^0.4.23;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">contract TestMap{</span></span>
<span class="line"><span style="color:#A6ACCD;">     mapping(uint256 =&gt; uint256) public channels;</span></span>
<span class="line"><span style="color:#A6ACCD;">     function TestSet() external{</span></span>
<span class="line"><span style="color:#A6ACCD;">        channels[0x39]=0x77;</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>合约非常简单,就是写一个 mapping.</p><h2 id="汇编指令" tabindex="-1">汇编指令 <a class="header-anchor" href="#汇编指令" aria-label="Permalink to &quot;汇编指令&quot;">​</a></h2><p>最主要是这些指令里面就有一条昂贵的就是 sstore, 至少需要5000gas.</p><div class="language-asm line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/* &quot;testmapping.sol&quot;:151:155  0x77 */</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F78C6C;">0x77</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">/* &quot;testmapping.sol&quot;:136:144  channels */</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F78C6C;">0x0</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">/* &quot;testmapping.sol&quot;:136:150  channels[0x39] */</span></span>
<span class="line"><span style="color:#A6ACCD;">      dup1</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">/* &quot;testmapping.sol&quot;:145:149  0x39 */</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F78C6C;">0x39</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">/* &quot;testmapping.sol&quot;:136:150  channels[0x39] */</span></span>
<span class="line"><span style="color:#A6ACCD;">      dup2</span></span>
<span class="line"><span style="color:#A6ACCD;">      mstore</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F78C6C;">0x20</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">add</span></span>
<span class="line"><span style="color:#A6ACCD;">      swap1</span></span>
<span class="line"><span style="color:#A6ACCD;">      dup2</span></span>
<span class="line"><span style="color:#A6ACCD;">      mstore</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F78C6C;">0x20</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">add</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F78C6C;">0x0</span></span>
<span class="line"><span style="color:#A6ACCD;">      keccak256</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">/* &quot;testmapping.sol&quot;:136:155  channels[0x39]=0x77 */</span></span>
<span class="line"><span style="color:#A6ACCD;">      dup2</span></span>
<span class="line"><span style="color:#A6ACCD;">      swap1</span></span>
<span class="line"><span style="color:#A6ACCD;">      sstore</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">pop</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>由于指令的成本较低,写 storage 最少需要5000gas, 而 sha3只需要30+gas, 可以忽略不计,其他指令也很便宜. 当然如果是读的话,就稍微贵一点点,读 storage 是200gas, 那么 sha3加上这些指令,估计就有接近100了. 不过如果mapping 确实可以带来便利,那就用 mapping 吧.</p>`,10),o=[e];function t(i,r,c,m,b,C){return a(),n("div",null,o)}const y=s(p,[["render",t]]);export{A as __pageData,y as default};
