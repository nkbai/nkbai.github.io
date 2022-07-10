import{_ as n,c as s,o as a,a as e}from"./app.7ecda22b.js";const k='{"title":"soliditymappingimplementation","description":"","frontmatter":{"title":"solidity_mapping_implementation","date":"2018-08-18T06:02:04.000Z","draft":false,"markup":"mmark"},"headers":[{"level":2,"title":"\u6784\u9020\u5408\u7EA6","slug":"\u6784\u9020\u5408\u7EA6"},{"level":2,"title":"\u6C47\u7F16\u6307\u4EE4","slug":"\u6C47\u7F16\u6307\u4EE4"},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3"}],"relativePath":"blockchain/ethereum/solidity_mapping_implementation.md"}',p={},t=e(`<h1 id="solidity-\u4E2D-mapping-\u662F\u5982\u4F55\u5B58\u50A8\u7684" tabindex="-1">solidity \u4E2D mapping \u662F\u5982\u4F55\u5B58\u50A8\u7684 <a class="header-anchor" href="#solidity-\u4E2D-mapping-\u662F\u5982\u4F55\u5B58\u50A8\u7684" aria-hidden="true">#</a></h1><p>\u4E3A\u4E86\u63A2\u6D4B solidity mapping \u5982\u4F55\u5B9E\u73B0,\u6211\u6784\u9020\u4E86\u4E00\u4E2A\u7B80\u5355\u7684\u5408\u7EA6. \u5148\u8BF4\u7ED3\u8BBA,\u5B9E\u9645\u4E0A mapping\u7684\u8BBF\u95EE\u6210\u672C\u5E76\u4E0D\u6BD4\u76F4\u63A5\u8BBF\u95EEstorage\u53D8\u91CF\u591A\u82B1\u8D39\u66F4\u591A\u7684 gas.\u4E24\u8005\u51E0\u4E4E\u5DEE\u4E0D\u591A.</p><h2 id="\u6784\u9020\u5408\u7EA6" tabindex="-1">\u6784\u9020\u5408\u7EA6 <a class="header-anchor" href="#\u6784\u9020\u5408\u7EA6" aria-hidden="true">#</a></h2><div class="language-sol line-numbers-mode"><pre><code><span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.4.23</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">TestMap</span><span class="token punctuation">{</span>
     <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> <span class="token operator">=&gt;</span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token keyword">public</span> channels<span class="token punctuation">;</span>
     <span class="token keyword">function</span> <span class="token function">TestSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span><span class="token punctuation">{</span>
        channels<span class="token punctuation">[</span><span class="token number">0x39</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">0x77</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5408\u7EA6\u975E\u5E38\u7B80\u5355,\u5C31\u662F\u5199\u4E00\u4E2A mapping.</p><h2 id="\u6C47\u7F16\u6307\u4EE4" tabindex="-1">\u6C47\u7F16\u6307\u4EE4 <a class="header-anchor" href="#\u6C47\u7F16\u6307\u4EE4" aria-hidden="true">#</a></h2><p>\u6700\u4E3B\u8981\u662F\u8FD9\u4E9B\u6307\u4EE4\u91CC\u9762\u5C31\u6709\u4E00\u6761\u6602\u8D35\u7684\u5C31\u662F sstore, \u81F3\u5C11\u9700\u89815000gas.</p><div class="language-asm line-numbers-mode"><pre><code>    /* &quot;testmapping.sol&quot;:151:155  0x77 */
      0x77
        /* &quot;testmapping.sol&quot;:136:144  channels */
      0x0
        /* &quot;testmapping.sol&quot;:136:150  channels[0x39] */
      dup1
        /* &quot;testmapping.sol&quot;:145:149  0x39 */
      0x39
        /* &quot;testmapping.sol&quot;:136:150  channels[0x39] */
      dup2
      mstore
      0x20
      add
      swap1
      dup2
      mstore
      0x20
      add
      0x0
      keccak256
        /* &quot;testmapping.sol&quot;:136:155  channels[0x39]=0x77 */
      dup2
      swap1
      sstore
      pop
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u7531\u4E8E\u6307\u4EE4\u7684\u6210\u672C\u8F83\u4F4E,\u5199 storage \u6700\u5C11\u9700\u89815000gas, \u800C sha3\u53EA\u9700\u898130+gas, \u53EF\u4EE5\u5FFD\u7565\u4E0D\u8BA1,\u5176\u4ED6\u6307\u4EE4\u4E5F\u5F88\u4FBF\u5B9C. \u5F53\u7136\u5982\u679C\u662F\u8BFB\u7684\u8BDD,\u5C31\u7A0D\u5FAE\u8D35\u4E00\u70B9\u70B9,\u8BFB storage \u662F200gas, \u90A3\u4E48 sha3\u52A0\u4E0A\u8FD9\u4E9B\u6307\u4EE4,\u4F30\u8BA1\u5C31\u6709\u63A5\u8FD1100\u4E86. \u4E0D\u8FC7\u5982\u679Cmapping \u786E\u5B9E\u53EF\u4EE5\u5E26\u6765\u4FBF\u5229,\u90A3\u5C31\u7528 mapping \u5427.</p>`,10),l=[t];function r(i,o,c,u,m,b){return a(),s("div",null,l)}var h=n(p,[["render",r]]);export{k as __pageData,h as default};
