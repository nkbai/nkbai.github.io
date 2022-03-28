import{_ as n,c as s,o as a,a as t}from"./app.e7435feb.js";const d='{"title":"chain\u6A21\u5757","description":"","frontmatter":{"title":"chain\u6A21\u5757","date":"2019-05-20T09:31:26.622Z","draft":false,"markup":"mmark"},"headers":[{"level":2,"title":"btcd client","slug":"btcd-client"},{"level":3,"title":"\u51FD\u6570\u8C03\u7528","slug":"\u51FD\u6570\u8C03\u7528"}],"relativePath":"blockchain/btcwallet/chain\u6A21\u5757.md"}',p={},e=t(`<h1 id="chain\u6A21\u5757" tabindex="-1">chain\u6A21\u5757 <a class="header-anchor" href="#chain\u6A21\u5757" aria-hidden="true">#</a></h1><p>\u8BE5\u6A21\u5757\u4E3B\u8981\u662F\u5B9E\u73B0\u63A5\u53E3<code>Interface</code>,\u8BE5\u63A5\u53E3\u662FbtcWallet\u4E0Ebtc\u5168\u8282\u70B9\u6253\u4EA4\u9053\u7684\u63A5\u53E3.</p><div class="language-go line-numbers-mode"><pre><code><span class="token comment">// Interface allows more than one backing blockchain source, such as a</span>
<span class="token comment">// btcd RPC chain server, or an SPV library, as long as we write a driver for</span>
<span class="token comment">// it.</span>
<span class="token keyword">type</span> Interface <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span>
	<span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">WaitForShutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">GetBestBlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>chainhash<span class="token punctuation">.</span>Hash<span class="token punctuation">,</span> <span class="token builtin">int32</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
	<span class="token function">GetBlock</span><span class="token punctuation">(</span><span class="token operator">*</span>chainhash<span class="token punctuation">.</span>Hash<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>wire<span class="token punctuation">.</span>MsgBlock<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
	<span class="token function">GetBlockHash</span><span class="token punctuation">(</span><span class="token builtin">int64</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>chainhash<span class="token punctuation">.</span>Hash<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
	<span class="token function">GetBlockHeader</span><span class="token punctuation">(</span><span class="token operator">*</span>chainhash<span class="token punctuation">.</span>Hash<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>wire<span class="token punctuation">.</span>BlockHeader<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
	<span class="token comment">//\u4E3A\u4EC0\u4E48\u627E\u5230\u4E00\u4E2Ablock\u7ACB\u5373\u8FD4\u56DE\u5462?</span>
	<span class="token function">FilterBlocks</span><span class="token punctuation">(</span><span class="token operator">*</span>FilterBlocksRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>FilterBlocksResponse<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
	<span class="token function">BlockStamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>waddrmgr<span class="token punctuation">.</span>BlockStamp<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
	<span class="token function">SendRawTransaction</span><span class="token punctuation">(</span><span class="token operator">*</span>wire<span class="token punctuation">.</span>MsgTx<span class="token punctuation">,</span> <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>chainhash<span class="token punctuation">.</span>Hash<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
	<span class="token comment">// Rescan wraps the normal Rescan command with an additional paramter that</span>
	<span class="token comment">// allows us to map an oupoint to the address in the chain that it pays to.</span>
	<span class="token comment">// This is useful when using BIP 158 filters as they include the prev pkScript</span>
	<span class="token comment">// rather than the full outpoint.</span>
	<span class="token function">Rescan</span><span class="token punctuation">(</span><span class="token operator">*</span>chainhash<span class="token punctuation">.</span>Hash<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>btcutil<span class="token punctuation">.</span>Address<span class="token punctuation">,</span> <span class="token keyword">map</span><span class="token punctuation">[</span>wire<span class="token punctuation">.</span>OutPoint<span class="token punctuation">]</span>btcutil<span class="token punctuation">.</span>Address<span class="token punctuation">)</span> <span class="token builtin">error</span>
	<span class="token function">NotifyReceived</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>btcutil<span class="token punctuation">.</span>Address<span class="token punctuation">)</span> <span class="token builtin">error</span>
	<span class="token function">NotifyBlocks</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span>
	<span class="token function">Notifications</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token function">BackEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u76EE\u524D\u603B\u5171\u6709\u4E09\u79CD\u8FDE\u63A5\u65B9\u5F0F,\u5206\u522B\u662Fbtcd,neutrino,bitcoind,\u76EE\u524D\u9ED8\u8BA4\u4F7F\u7528\u7684\u662Fbtcd. bitcoind\u5B9E\u9645\u4E0A\u6839\u672C\u6CA1\u542F\u7528</p><h2 id="btcd-client" tabindex="-1">btcd client <a class="header-anchor" href="#btcd-client" aria-hidden="true">#</a></h2><p>\u5165\u53E3\u5728NewRPCClient,wallet\u4E3B\u8981\u901A\u8FC7\u4E24\u79CD\u65B9\u5F0F\u4E0ERPCClient\u6253\u4EA4\u9053,</p><ol><li>\u51FD\u6570\u8C03\u7528.</li><li>channel \u5F02\u6B65\u901A\u77E5</li></ol><h3 id="\u51FD\u6570\u8C03\u7528" tabindex="-1">\u51FD\u6570\u8C03\u7528 <a class="header-anchor" href="#\u51FD\u6570\u8C03\u7528" aria-hidden="true">#</a></h3><p>\u9664\u4E86Notify\u5F00\u5934\u7684\u51E0\u4E2A\u51FD\u6570,\u5176\u4ED6\u90FD\u662F. \u5176\u4E2D<code>NotifyReceived([]btcutil.Address) error</code>\u7528\u4E8E\u901A\u77E5\u65B0\u6536\u5230\u4E86UTXO,<code>NotifyBlocks() error</code>\u7528\u4E8E\u544A\u8BC9btcd,\u5982\u679C\u4EA7\u751F\u4E86\u65B0\u5757\u6216\u8005\u53D1\u751F\u4E86\u5206\u53C9\u901A\u77E5\u6211. \u901A\u77E5\u5185\u5BB9\u6709:</p><div class="language-go line-numbers-mode"><pre><code><span class="token comment">// Notification types.  These are defined here and processed from from reading</span>
<span class="token comment">// a notificationChan to avoid handling these notifications directly in</span>
<span class="token comment">// rpcclient callbacks, which isn&#39;t very Go-like and doesn&#39;t allow</span>
<span class="token comment">// blocking client calls.</span>
<span class="token keyword">type</span> <span class="token punctuation">(</span>
	<span class="token comment">// ClientConnected is a notification for when a client connection is</span>
	<span class="token comment">// opened or reestablished to the chain server.</span>
	ClientConnected <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

	<span class="token comment">// BlockConnected is a notification for a newly-attached block to the</span>
	<span class="token comment">// best chain.</span>
	BlockConnected wtxmgr<span class="token punctuation">.</span>BlockMeta
 
 
	<span class="token comment">// BlockDisconnected is a notifcation that the block described by the</span>
	<span class="token comment">// BlockStamp was reorganized out of the best chain.</span>
	BlockDisconnected wtxmgr<span class="token punctuation">.</span>BlockMeta

	<span class="token comment">// RelevantTx is a notification for a transaction which spends wallet</span>
	<span class="token comment">// inputs or pays to a watched address.</span>
	RelevantTx <span class="token keyword">struct</span> <span class="token punctuation">{</span>
		TxRecord <span class="token operator">*</span>wtxmgr<span class="token punctuation">.</span>TxRecord
		Block    <span class="token operator">*</span>wtxmgr<span class="token punctuation">.</span>BlockMeta <span class="token comment">// nil if unmined</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// RescanProgress is a notification describing the current status</span>
	<span class="token comment">// of an in-progress rescan.</span>
	RescanProgress <span class="token keyword">struct</span> <span class="token punctuation">{</span>
		Hash   <span class="token operator">*</span>chainhash<span class="token punctuation">.</span>Hash
		Height <span class="token builtin">int32</span>
		Time   time<span class="token punctuation">.</span>Time
	<span class="token punctuation">}</span>

	<span class="token comment">// RescanFinished is a notification that a previous rescan request</span>
	<span class="token comment">// has finished.</span>
	RescanFinished <span class="token keyword">struct</span> <span class="token punctuation">{</span>
		Hash   <span class="token operator">*</span>chainhash<span class="token punctuation">.</span>Hash
		Height <span class="token builtin">int32</span>
		Time   time<span class="token punctuation">.</span>Time
	<span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div>`,10),c=[e];function o(l,i,r,u,k,b){return a(),s("div",null,c)}var h=n(p,[["render",o]]);export{d as __pageData,h as default};
