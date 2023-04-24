import{_ as s,c as n,o as a,N as l}from"./chunks/framework.3a9190c5.js";const m=JSON.parse('{"title":"将以太坊封装为 ERC20 TOKEN","description":"","frontmatter":{"title":" 将以太坊封装为 ERC20 TOKEN","date":"2018-05-02T03:06:23.000Z","hide":false},"headers":[],"relativePath":"blockchain/ethereum/ethereum_erc20_wrapper.md"}'),p={name:"blockchain/ethereum/ethereum_erc20_wrapper.md"},e=l(`<h1 id="将以太坊封装为-erc20-token" tabindex="-1">将以太坊封装为 ERC20 TOKEN <a class="header-anchor" href="#将以太坊封装为-erc20-token" aria-label="Permalink to &quot;将以太坊封装为 ERC20 TOKEN&quot;">​</a></h1><p>很多 DAPP 都是在处理 ERC20接口的 token, 其实很容易将以太坊封装为 ERC20,这样就可以统一处理, 至少我目前在做的雷电网络就是这么处理的.</p><p>主要内容复制在网络 <a href="https://programtheblockchain.com/posts/2018/05/26/wrapping-ether-in-an-erc20-token/" target="_blank" rel="noreferrer">https://programtheblockchain.com/posts/2018/05/26/wrapping-ether-in-an-erc20-token/</a></p><p>直接上代码,核心部分是</p><div class="language-sol line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sol</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pragma solidity ^0.4.24;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import &quot;baseerc20token.sol&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">contract EtherToken is BaseERC20Token {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(string _name, string _symbol)</span></span>
<span class="line"><span style="color:#A6ACCD;">        BaseERC20Token(0, 18, _name, _symbol) public</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    function buy() public payable {</span></span>
<span class="line"><span style="color:#A6ACCD;">        balanceOf[msg.sender] += msg.value;</span></span>
<span class="line"><span style="color:#A6ACCD;">        totalSupply += msg.value;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        emit Transfer(address(0), msg.sender, msg.value);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    function sell(uint256 amount) public {</span></span>
<span class="line"><span style="color:#A6ACCD;">        require(balanceOf[msg.sender] &gt;= amount, &quot;Insufficient balance.&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        balanceOf[msg.sender] -= amount;</span></span>
<span class="line"><span style="color:#A6ACCD;">        totalSupply -= amount;</span></span>
<span class="line"><span style="color:#A6ACCD;">        msg.sender.transfer(amount);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        emit Transfer(msg.sender, address(0), amount);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>它提供了以太坊和 ERC20互换的接口,换成 ERC20以后就很简单了. 实际上baseerc20token.sol只是一个非常标准的 ERC20实现</p><div class="language-sol line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sol</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pragma solidity ^0.4.23;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">contract BaseERC20Token {</span></span>
<span class="line"><span style="color:#A6ACCD;">    mapping (address =&gt; uint256) public balanceOf;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    string public name;</span></span>
<span class="line"><span style="color:#A6ACCD;">    string public symbol;</span></span>
<span class="line"><span style="color:#A6ACCD;">    uint8 public decimals;</span></span>
<span class="line"><span style="color:#A6ACCD;">    uint256 public totalSupply;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    event Transfer(address indexed from, address indexed to, uint256 value);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor (</span></span>
<span class="line"><span style="color:#A6ACCD;">        uint256 _totalSupply,</span></span>
<span class="line"><span style="color:#A6ACCD;">        uint8 _decimals,</span></span>
<span class="line"><span style="color:#A6ACCD;">        string _name,</span></span>
<span class="line"><span style="color:#A6ACCD;">        string _symbol</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">        public</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        name = _name;</span></span>
<span class="line"><span style="color:#A6ACCD;">        symbol = _symbol;</span></span>
<span class="line"><span style="color:#A6ACCD;">        decimals = _decimals;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        totalSupply = _totalSupply;</span></span>
<span class="line"><span style="color:#A6ACCD;">        balanceOf[msg.sender] = _totalSupply;</span></span>
<span class="line"><span style="color:#A6ACCD;">        emit Transfer(address(0), msg.sender, _totalSupply);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    function transfer(address to, uint256 value) public returns (bool success) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        require(balanceOf[msg.sender] &gt;= value);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        balanceOf[msg.sender] -= value;</span></span>
<span class="line"><span style="color:#A6ACCD;">        balanceOf[to] += value;</span></span>
<span class="line"><span style="color:#A6ACCD;">        emit Transfer(msg.sender, to, value);</span></span>
<span class="line"><span style="color:#A6ACCD;">        return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    event Approval(address indexed owner, address indexed spender, uint256 value);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    mapping(address =&gt; mapping(address =&gt; uint256)) public allowance;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    function approve(address spender, uint256 value)</span></span>
<span class="line"><span style="color:#A6ACCD;">        public</span></span>
<span class="line"><span style="color:#A6ACCD;">        returns (bool success)</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        allowance[msg.sender][spender] = value;</span></span>
<span class="line"><span style="color:#A6ACCD;">        emit Approval(msg.sender, spender, value);</span></span>
<span class="line"><span style="color:#A6ACCD;">        return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    function transferFrom(address from, address to, uint256 value)</span></span>
<span class="line"><span style="color:#A6ACCD;">        public</span></span>
<span class="line"><span style="color:#A6ACCD;">        returns (bool success)</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        require(value &lt;= balanceOf[from]);</span></span>
<span class="line"><span style="color:#A6ACCD;">        require(value &lt;= allowance[from][msg.sender]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        balanceOf[from] -= value;</span></span>
<span class="line"><span style="color:#A6ACCD;">        balanceOf[to] += value;</span></span>
<span class="line"><span style="color:#A6ACCD;">        allowance[from][msg.sender] -= value;</span></span>
<span class="line"><span style="color:#A6ACCD;">        emit Transfer(from, to, value);</span></span>
<span class="line"><span style="color:#A6ACCD;">        return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br></div></div><p>这样简单部署,就可以在雷电网络中将以太坊当做普通的 ERC20 TOKEN进行处理了.</p>`,8),r=[e];function c(o,i,t,b,C,u){return a(),n("div",null,r)}const y=s(p,[["render",c]]);export{m as __pageData,y as default};
