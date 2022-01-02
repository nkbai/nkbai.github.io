import{o as n,c as s,e as a}from"./app.63f3ffeb.js";const t='{"title":"chain模块","description":"","frontmatter":{"title":"chain模块","date":"2019-05-20T09:31:26.622Z","draft":false,"markup":"mmark"},"headers":[{"level":2,"title":"btcd client","slug":"btcd-client"},{"level":3,"title":"函数调用","slug":"函数调用"}],"relativePath":"blockchain/btcwallet/chain模块.md","lastUpdated":1561507892000}',p={},e=[a('<h1 id="chain模块"><a class="header-anchor" href="#chain模块" aria-hidden="true">#</a> chain模块</h1><p>该模块主要是实现接口<code>Interface</code>,该接口是btcWallet与btc全节点打交道的接口.</p><div class="language-go line-numbers-mode"><pre><code><span class="token comment">// Interface allows more than one backing blockchain source, such as a</span>\n<span class="token comment">// btcd RPC chain server, or an SPV library, as long as we write a driver for</span>\n<span class="token comment">// it.</span>\n<span class="token keyword">type</span> Interface <span class="token keyword">interface</span> <span class="token punctuation">{</span>\n\t<span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span>\n\t<span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\t<span class="token function">WaitForShutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\t<span class="token function">GetBestBlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>chainhash<span class="token punctuation">.</span>Hash<span class="token punctuation">,</span> <span class="token builtin">int32</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>\n\t<span class="token function">GetBlock</span><span class="token punctuation">(</span><span class="token operator">*</span>chainhash<span class="token punctuation">.</span>Hash<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>wire<span class="token punctuation">.</span>MsgBlock<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>\n\t<span class="token function">GetBlockHash</span><span class="token punctuation">(</span><span class="token builtin">int64</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>chainhash<span class="token punctuation">.</span>Hash<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>\n\t<span class="token function">GetBlockHeader</span><span class="token punctuation">(</span><span class="token operator">*</span>chainhash<span class="token punctuation">.</span>Hash<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>wire<span class="token punctuation">.</span>BlockHeader<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>\n\t<span class="token comment">//为什么找到一个block立即返回呢?</span>\n\t<span class="token function">FilterBlocks</span><span class="token punctuation">(</span><span class="token operator">*</span>FilterBlocksRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>FilterBlocksResponse<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>\n\t<span class="token function">BlockStamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>waddrmgr<span class="token punctuation">.</span>BlockStamp<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>\n\t<span class="token function">SendRawTransaction</span><span class="token punctuation">(</span><span class="token operator">*</span>wire<span class="token punctuation">.</span>MsgTx<span class="token punctuation">,</span> <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>chainhash<span class="token punctuation">.</span>Hash<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>\n\t<span class="token comment">// Rescan wraps the normal Rescan command with an additional paramter that</span>\n\t<span class="token comment">// allows us to map an oupoint to the address in the chain that it pays to.</span>\n\t<span class="token comment">// This is useful when using BIP 158 filters as they include the prev pkScript</span>\n\t<span class="token comment">// rather than the full outpoint.</span>\n\t<span class="token function">Rescan</span><span class="token punctuation">(</span><span class="token operator">*</span>chainhash<span class="token punctuation">.</span>Hash<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>btcutil<span class="token punctuation">.</span>Address<span class="token punctuation">,</span> <span class="token keyword">map</span><span class="token punctuation">[</span>wire<span class="token punctuation">.</span>OutPoint<span class="token punctuation">]</span>btcutil<span class="token punctuation">.</span>Address<span class="token punctuation">)</span> <span class="token builtin">error</span>\n\t<span class="token function">NotifyReceived</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>btcutil<span class="token punctuation">.</span>Address<span class="token punctuation">)</span> <span class="token builtin">error</span>\n\t<span class="token function">NotifyBlocks</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span>\n\t<span class="token function">Notifications</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n\t<span class="token function">BackEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>目前总共有三种连接方式,分别是btcd,neutrino,bitcoind,目前默认使用的是btcd. bitcoind实际上根本没启用</p><h2 id="btcd-client"><a class="header-anchor" href="#btcd-client" aria-hidden="true">#</a> btcd client</h2><p>入口在NewRPCClient,wallet主要通过两种方式与RPCClient打交道,</p><ol><li>函数调用.</li><li>channel 异步通知</li></ol><h3 id="函数调用"><a class="header-anchor" href="#函数调用" aria-hidden="true">#</a> 函数调用</h3><p>除了Notify开头的几个函数,其他都是. 其中<code>NotifyReceived([]btcutil.Address) error</code>用于通知新收到了UTXO,<code>NotifyBlocks() error</code>用于告诉btcd,如果产生了新块或者发生了分叉通知我. 通知内容有:</p><div class="language-go line-numbers-mode"><pre><code><span class="token comment">// Notification types.  These are defined here and processed from from reading</span>\n<span class="token comment">// a notificationChan to avoid handling these notifications directly in</span>\n<span class="token comment">// rpcclient callbacks, which isn&#39;t very Go-like and doesn&#39;t allow</span>\n<span class="token comment">// blocking client calls.</span>\n<span class="token keyword">type</span> <span class="token punctuation">(</span>\n\t<span class="token comment">// ClientConnected is a notification for when a client connection is</span>\n\t<span class="token comment">// opened or reestablished to the chain server.</span>\n\tClientConnected <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n\t<span class="token comment">// BlockConnected is a notification for a newly-attached block to the</span>\n\t<span class="token comment">// best chain.</span>\n\tBlockConnected wtxmgr<span class="token punctuation">.</span>BlockMeta\n \n \n\t<span class="token comment">// BlockDisconnected is a notifcation that the block described by the</span>\n\t<span class="token comment">// BlockStamp was reorganized out of the best chain.</span>\n\tBlockDisconnected wtxmgr<span class="token punctuation">.</span>BlockMeta\n\n\t<span class="token comment">// RelevantTx is a notification for a transaction which spends wallet</span>\n\t<span class="token comment">// inputs or pays to a watched address.</span>\n\tRelevantTx <span class="token keyword">struct</span> <span class="token punctuation">{</span>\n\t\tTxRecord <span class="token operator">*</span>wtxmgr<span class="token punctuation">.</span>TxRecord\n\t\tBlock    <span class="token operator">*</span>wtxmgr<span class="token punctuation">.</span>BlockMeta <span class="token comment">// nil if unmined</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token comment">// RescanProgress is a notification describing the current status</span>\n\t<span class="token comment">// of an in-progress rescan.</span>\n\tRescanProgress <span class="token keyword">struct</span> <span class="token punctuation">{</span>\n\t\tHash   <span class="token operator">*</span>chainhash<span class="token punctuation">.</span>Hash\n\t\tHeight <span class="token builtin">int32</span>\n\t\tTime   time<span class="token punctuation">.</span>Time\n\t<span class="token punctuation">}</span>\n\n\t<span class="token comment">// RescanFinished is a notification that a previous rescan request</span>\n\t<span class="token comment">// has finished.</span>\n\tRescanFinished <span class="token keyword">struct</span> <span class="token punctuation">{</span>\n\t\tHash   <span class="token operator">*</span>chainhash<span class="token punctuation">.</span>Hash\n\t\tHeight <span class="token builtin">int32</span>\n\t\tTime   time<span class="token punctuation">.</span>Time\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div>',10)];p.render=function(a,t,p,c,o,l){return n(),s("div",null,e)};export{t as __pageData,p as default};
