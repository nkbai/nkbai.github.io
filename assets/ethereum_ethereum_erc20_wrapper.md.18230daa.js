import{o as n,c as s,e as a}from"./app.26819860.js";const p='{"title":"将以太坊封装为 ERC20 TOKEN","description":"","frontmatter":{"title":" 将以太坊封装为 ERC20 TOKEN","date":"2018-05-02T03:06:23.000Z","draft":true},"relativePath":"ethereum/ethereum_erc20_wrapper.md","lastUpdated":1561553438000}',t={},e=[a('<h1 id="将以太坊封装为-erc20-token"><a class="header-anchor" href="#将以太坊封装为-erc20-token" aria-hidden="true">#</a> 将以太坊封装为 ERC20 TOKEN</h1><p>很多 DAPP 都是在处理 ERC20接口的 token, 其实很容易将以太坊封装为 ERC20,这样就可以统一处理, 至少我目前在做的雷电网络就是这么处理的.</p><p>主要内容复制在网络 <a href="https://programtheblockchain.com/posts/2018/05/26/wrapping-ether-in-an-erc20-token/" target="_blank" rel="noopener noreferrer">https://programtheblockchain.com/posts/2018/05/26/wrapping-ether-in-an-erc20-token/</a></p><p>直接上代码,核心部分是</p><div class="language-sol line-numbers-mode"><pre><code><span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.4.24</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token string">&quot;baseerc20token.sol&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">contract</span> <span class="token class-name">EtherToken</span> <span class="token keyword">is</span> BaseERC20Token <span class="token punctuation">{</span>\n    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">string</span> _name<span class="token punctuation">,</span> <span class="token builtin">string</span> _symbol<span class="token punctuation">)</span>\n        <span class="token function">BaseERC20Token</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> _name<span class="token punctuation">,</span> _symbol<span class="token punctuation">)</span> <span class="token keyword">public</span>\n    <span class="token punctuation">{</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">function</span> <span class="token function">buy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>\n        balanceOf<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">+=</span> msg<span class="token punctuation">.</span>value<span class="token punctuation">;</span>\n        totalSupply <span class="token operator">+=</span> msg<span class="token punctuation">.</span>value<span class="token punctuation">;</span>\n\n        <span class="token keyword">emit</span> <span class="token function">Transfer</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> msg<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">function</span> <span class="token function">sell</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> amount<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>\n        <span class="token keyword">require</span><span class="token punctuation">(</span>balanceOf<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> amount<span class="token punctuation">,</span> <span class="token string">&quot;Insufficient balance.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        balanceOf<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">-=</span> amount<span class="token punctuation">;</span>\n        totalSupply <span class="token operator">-=</span> amount<span class="token punctuation">;</span>\n        msg<span class="token punctuation">.</span>sender<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span>amount<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">emit</span> <span class="token function">Transfer</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>它提供了以太坊和 ERC20互换的接口,换成 ERC20以后就很简单了. 实际上baseerc20token.sol只是一个非常标准的 ERC20实现</p><div class="language-sol line-numbers-mode"><pre><code><span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.4.23</span><span class="token punctuation">;</span>\n\n<span class="token keyword">contract</span> <span class="token class-name">BaseERC20Token</span> <span class="token punctuation">{</span>\n    <span class="token keyword">mapping</span> <span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=&gt;</span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token keyword">public</span> balanceOf<span class="token punctuation">;</span>\n\n    <span class="token builtin">string</span> <span class="token keyword">public</span> name<span class="token punctuation">;</span>\n    <span class="token builtin">string</span> <span class="token keyword">public</span> symbol<span class="token punctuation">;</span>\n    <span class="token builtin">uint8</span> <span class="token keyword">public</span> decimals<span class="token punctuation">;</span>\n    <span class="token builtin">uint256</span> <span class="token keyword">public</span> totalSupply<span class="token punctuation">;</span>\n\n    <span class="token keyword">event</span> <span class="token function">Transfer</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">indexed</span> <span class="token keyword">from</span><span class="token punctuation">,</span> <span class="token builtin">address</span> <span class="token keyword">indexed</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">constructor</span> <span class="token punctuation">(</span>\n        <span class="token builtin">uint256</span> _totalSupply<span class="token punctuation">,</span>\n        <span class="token builtin">uint8</span> _decimals<span class="token punctuation">,</span>\n        <span class="token builtin">string</span> _name<span class="token punctuation">,</span>\n        <span class="token builtin">string</span> _symbol\n    <span class="token punctuation">)</span>\n        <span class="token keyword">public</span>\n    <span class="token punctuation">{</span>\n        name <span class="token operator">=</span> _name<span class="token punctuation">;</span>\n        symbol <span class="token operator">=</span> _symbol<span class="token punctuation">;</span>\n        decimals <span class="token operator">=</span> _decimals<span class="token punctuation">;</span>\n\n        totalSupply <span class="token operator">=</span> _totalSupply<span class="token punctuation">;</span>\n        balanceOf<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">=</span> _totalSupply<span class="token punctuation">;</span>\n        <span class="token keyword">emit</span> <span class="token function">Transfer</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> _totalSupply<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">function</span> <span class="token function">transfer</span><span class="token punctuation">(</span><span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> value<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span> success<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">require</span><span class="token punctuation">(</span>balanceOf<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        balanceOf<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">-=</span> value<span class="token punctuation">;</span>\n        balanceOf<span class="token punctuation">[</span>to<span class="token punctuation">]</span> <span class="token operator">+=</span> value<span class="token punctuation">;</span>\n        <span class="token keyword">emit</span> <span class="token function">Transfer</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> to<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">event</span> <span class="token function">Approval</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">indexed</span> owner<span class="token punctuation">,</span> <span class="token builtin">address</span> <span class="token keyword">indexed</span> spender<span class="token punctuation">,</span> <span class="token builtin">uint256</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=&gt;</span> <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=&gt;</span> <span class="token builtin">uint256</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">public</span> allowance<span class="token punctuation">;</span>\n\n    <span class="token keyword">function</span> <span class="token function">approve</span><span class="token punctuation">(</span><span class="token builtin">address</span> spender<span class="token punctuation">,</span> <span class="token builtin">uint256</span> value<span class="token punctuation">)</span>\n        <span class="token keyword">public</span>\n        <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span> success<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        allowance<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span><span class="token punctuation">[</span>spender<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>\n        <span class="token keyword">emit</span> <span class="token function">Approval</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> spender<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">function</span> <span class="token function">transferFrom</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">from</span><span class="token punctuation">,</span> <span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> value<span class="token punctuation">)</span>\n        <span class="token keyword">public</span>\n        <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span> success<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">require</span><span class="token punctuation">(</span>value <span class="token operator">&lt;=</span> balanceOf<span class="token punctuation">[</span><span class="token keyword">from</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">require</span><span class="token punctuation">(</span>value <span class="token operator">&lt;=</span> allowance<span class="token punctuation">[</span><span class="token keyword">from</span><span class="token punctuation">]</span><span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        balanceOf<span class="token punctuation">[</span><span class="token keyword">from</span><span class="token punctuation">]</span> <span class="token operator">-=</span> value<span class="token punctuation">;</span>\n        balanceOf<span class="token punctuation">[</span>to<span class="token punctuation">]</span> <span class="token operator">+=</span> value<span class="token punctuation">;</span>\n        allowance<span class="token punctuation">[</span><span class="token keyword">from</span><span class="token punctuation">]</span><span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">-=</span> value<span class="token punctuation">;</span>\n        <span class="token keyword">emit</span> <span class="token function">Transfer</span><span class="token punctuation">(</span><span class="token keyword">from</span><span class="token punctuation">,</span> to<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br></div></div><p>这样简单部署,就可以在雷电网络中将以太坊当做普通的 ERC20 TOKEN进行处理了.</p>',8)];t.render=function(a,p,t,o,c,l){return n(),s("div",null,e)};export{p as __pageData,t as default};
