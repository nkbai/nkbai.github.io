import{_ as n,c as e,o as s,a}from"./app.1b76eb5d.js";const m='{"title":"wallet\u4E2D\u7684\u6570\u636E\u5E93\u8BBE\u8BA1","description":"","frontmatter":{"title":"wallet\u4E2D\u7684\u6570\u636E\u5E93\u8BBE\u8BA1","date":"2019-05-19T13:32:33.874Z","draft":false,"markup":"mmark"},"headers":[{"level":3,"title":"Bucket\u76F8\u5173","slug":"bucket\u76F8\u5173"},{"level":3,"title":"\u9876\u5C42Bucket","slug":"\u9876\u5C42bucket"},{"level":2,"title":"Tx\u76F8\u5173","slug":"tx\u76F8\u5173"},{"level":3,"title":"buckets","slug":"buckets"}],"relativePath":"blockchain/btcwallet/wallet\u4E2D\u7684\u6570\u636E\u5E93\u8BBE\u8BA1.md"}',t={},c=a(`<h1 id="btcwallet\u4E2D\u7684\u6570\u636E\u5E93\u8BBE\u8BA1" tabindex="-1">btcWallet\u4E2D\u7684\u6570\u636E\u5E93\u8BBE\u8BA1 <a class="header-anchor" href="#btcwallet\u4E2D\u7684\u6570\u636E\u5E93\u8BBE\u8BA1" aria-hidden="true">#</a></h1><h3 id="bucket\u76F8\u5173" tabindex="-1">Bucket\u76F8\u5173 <a class="header-anchor" href="#bucket\u76F8\u5173" aria-hidden="true">#</a></h3><h3 id="\u9876\u5C42bucket" tabindex="-1">\u9876\u5C42Bucket <a class="header-anchor" href="#\u9876\u5C42bucket" aria-hidden="true">#</a></h3><p><strong>key\u5217\u8868:</strong> mgrVersionName mgrCreateDateName <strong>Bucket\u5217\u8868:</strong> \u5730\u5740\u76F8\u5173\u7684</p><h4 id="_1-waddrmgrnamespacekey" tabindex="-1">1. waddrmgrNamespaceKey <a class="header-anchor" href="#_1-waddrmgrnamespacekey" aria-hidden="true">#</a></h4><h5 id="_1-1-mainbucketname" tabindex="-1">1.1 mainBucketName <a class="header-anchor" href="#_1-1-mainbucketname" aria-hidden="true">#</a></h5><pre><code>    stores the encrypted crypto keys that encrypt all other generated keys
</code></pre><h5 id="_1-2-syncbucketname" tabindex="-1">1.2 syncBucketName <a class="header-anchor" href="#_1-2-syncbucketname" aria-hidden="true">#</a></h5><pre><code>    stores the current sync state of the root manager.
</code></pre><h5 id="_1-3-scopebucketname" tabindex="-1">1.3 scopeBucketName <a class="header-anchor" href="#_1-3-scopebucketname" aria-hidden="true">#</a></h5><pre><code>    		scopeBucketNme is the name of the top-level bucket within the
            hierarchy. It maps: purpose || coinType to a new sub-bucket that
            will house a scoped address manager. All buckets below are a child
            of this bucket:
            
            scopeBucket -&gt; scope -&gt; acctBucketName //account id=&gt;dbDefaultAccountRow
            scopeBucket -&gt; scope -&gt; addrBucketName //addressID Hash=&gt;dbAddressRow
            scopeBucket -&gt; scope -&gt; usedAddrBucketName // \u4E00\u4E2A\u5730\u5740\u662F\u5426\u88AB\u4F7F\u7528
            scopeBucket -&gt; scope -&gt; addrAcctIdxBucketName //addressID hash =&gt; account id
            scopeBucket -&gt; scope -&gt; acctNameIdxBucketName //accountName =&gt; account_id
            scopeBucket -&gt; scope -&gt; acctIDIdxBucketName //account_id =&gt; accountName
            scopeBucket -&gt; scope -&gt; metaBucket //metaData
            scopeBucket -&gt; scope -&gt; metaBucket -&gt; lastAccountNameKey //manager\u4E2D\u7684\u6700\u540E\u4E00\u4E2Aaccount
            scopeBucket -&gt; scope -&gt; coinTypePrivKey //\u540E\u9762\u8FD9\u4E24\u4E2A\u4EE3\u7801\u6CA1\u770B\u5230
            scopeBucket -&gt; scope -&gt; coinTypePubKey
</code></pre><p>\u76EE\u524D\u5DF2\u77E5\u7684Scope\u6709KeyScopeBIP0044,KeyScopeBIP0049Plus\u7B49 \u4ECE\u8FD9\u91CC\u4E5F\u770B\u51FA\u6BD4\u7279\u5E01\u7684Key\u662F\u6811\u5F62\u7ED3\u6784,</p><h5 id="_1-4-scopeschemabucketname" tabindex="-1">1.4 scopeSchemaBucketName <a class="header-anchor" href="#_1-4-scopeschemabucketname" aria-hidden="true">#</a></h5><pre><code>scopeSchemaBucket is the name of the bucket that maps a particular
manager scope to the type of addresses that should be derived for
particular branches during key derivation.
</code></pre><div class="language-go line-numbers-mode"><pre><code>	<span class="token comment">// KeyScopeBIP0049Plus is the key scope of our modified BIP0049</span>
	<span class="token comment">// derivation. We say this is BIP0049 &quot;plus&quot;, as we&#39;ll actually use</span>
	<span class="token comment">// p2wkh change all change addresses.</span>
	KeyScopeBIP0049Plus <span class="token operator">=</span> KeyScope<span class="token punctuation">{</span>
		Purpose<span class="token punctuation">:</span> <span class="token number">49</span><span class="token punctuation">,</span>
		Coin<span class="token punctuation">:</span>    <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// KeyScopeBIP0084 is the key scope for BIP0084 derivation. BIP0084</span>
	<span class="token comment">// will be used to derive all p2wkh addresses.</span>
	KeyScopeBIP0084 <span class="token operator">=</span> KeyScope<span class="token punctuation">{</span>
		Purpose<span class="token punctuation">:</span> <span class="token number">84</span><span class="token punctuation">,</span>
		Coin<span class="token punctuation">:</span>    <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// KeyScopeBIP0044 is the key scope for BIP0044 derivation. Legacy</span>
	<span class="token comment">// wallets will only be able to use this key scope, and no keys beyond</span>
	<span class="token comment">// it.</span>
	KeyScopeBIP0044 <span class="token operator">=</span> KeyScope<span class="token punctuation">{</span>
		Purpose<span class="token punctuation">:</span> <span class="token number">44</span><span class="token punctuation">,</span>
		Coin<span class="token punctuation">:</span>    <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// DefaultKeyScopes is the set of default key scopes that will be</span>
	<span class="token comment">// created by the root manager upon initial creation.</span>
	DefaultKeyScopes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>KeyScope<span class="token punctuation">{</span>
		KeyScopeBIP0049Plus<span class="token punctuation">,</span>
		KeyScopeBIP0084<span class="token punctuation">,</span>
		KeyScopeBIP0044<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// ScopeAddrMap is a map from the default key scopes to the scope</span>
	<span class="token comment">// address schema for each scope type. This will be consulted during</span>
	<span class="token comment">// the initial creation of the root key manager.</span>
	ScopeAddrMap <span class="token operator">=</span> <span class="token keyword">map</span><span class="token punctuation">[</span>KeyScope<span class="token punctuation">]</span>ScopeAddrSchema<span class="token punctuation">{</span>
		KeyScopeBIP0049Plus<span class="token punctuation">:</span> <span class="token punctuation">{</span>
			ExternalAddrType<span class="token punctuation">:</span> NestedWitnessPubKey<span class="token punctuation">,</span>
			InternalAddrType<span class="token punctuation">:</span> WitnessPubKey<span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		KeyScopeBIP0084<span class="token punctuation">:</span> <span class="token punctuation">{</span>
			ExternalAddrType<span class="token punctuation">:</span> WitnessPubKey<span class="token punctuation">,</span>
			InternalAddrType<span class="token punctuation">:</span> WitnessPubKey<span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		KeyScopeBIP0044<span class="token punctuation">:</span> <span class="token punctuation">{</span>
			InternalAddrType<span class="token punctuation">:</span> PubKeyHash<span class="token punctuation">,</span>
			ExternalAddrType<span class="token punctuation">:</span> PubKeyHash<span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><p>Tx\u76F8\u5173\u7684<br> 2. wtxmgrNamespaceKey</p><h2 id="tx\u76F8\u5173" tabindex="-1">Tx\u76F8\u5173 <a class="header-anchor" href="#tx\u76F8\u5173" aria-hidden="true">#</a></h2><h3 id="buckets" tabindex="-1">buckets <a class="header-anchor" href="#buckets" aria-hidden="true">#</a></h3><pre><code>bucketBlocks         = []byte(&quot;b&quot;)
bucketTxRecords      = []byte(&quot;t&quot;)
bucketCredits        = []byte(&quot;c&quot;)
bucketUnspent        = []byte(&quot;u&quot;)
bucketDebits         = []byte(&quot;d&quot;)
bucketUnmined        = []byte(&quot;m&quot;)
bucketUnminedCredits = []byte(&quot;mc&quot;)
bucketUnminedInputs  = []byte(&quot;mi&quot;)
</code></pre><ol><li><p>bucketBlocks \u5B58\u50A8\u67D0\u4E2A\u5757\u6709\u54EA\u4E9BTx,\u6CA1\u6709\u8003\u8651\u5206\u53C9 bucketBlocks: blockNumber=&gt;blockHash+blockTime+TxCount+[ TxHash1,TxHash2...]</p></li><li><p>bucketTxRecords \u5B58\u50A8\u5E8F\u5217\u5316\u7684Tx,\u5DF2\u7ECF\u88AB\u6253\u5305\u4E0A\u94FE\u7684, TxHash+blockNumber+blockHash=&gt;SerializedTx</p></li><li><p>bucketCredits \u5B58\u50A8\u672A\u82B1\u8D39\u7684UTXO,\u6216\u8005\u5DF2\u82B1\u8D39,\u4F46\u662F\u8FD8\u6CA1\u6709\u786E\u8BA4\u7684,\u8FD9\u4E9B\u90FD\u662F\u6211\u5173\u6CE8\u7684 Txhash+blockNumber+blockHash+Index(outpoint\u4E2D)=&gt;UTXO Amount[8\u4E2A\u5B57\u8282]+\u5176\u4ED6\u4FE1\u606F \u5176\u4ED6\u4FE1\u606F: v[8]\u7B2C0\u4F4D\u8868\u793A\u662F\u5426\u5DF2\u6D88\u8D39 1 \u8868\u793A\u5DF2\u6D88\u8D39 v[8]\u7B2C1\u4F4D\u8868\u793A\u662F\u5426\u662F\u627E\u96F6 1 \u4E3A\u627E\u96F6 \u5982\u679C\u5DF2\u7ECF\u6D88\u8D39,\u90A3\u4E48\u7B2C9\u4E2A\u5B57\u8282\u540E\u8FD8\u4F1A\u6709TxHash+blockNumber+blockHash+Index \u8868\u793A\u8FD9\u4E2AUTXO\u5728\u54EA\u91CC\u88AB\u6D88\u8D39\u4E86.</p></li><li><p>bucketUnspent \u5B58\u50A8\u9700\u8981\u6211\u5173\u6CE8\u7684\u672A\u6D88\u8D39\u7684UTXO,\u4E00\u65E6\u8BE5UTXO\u88AB\u6D88\u8D39,\u5C31\u4F1A\u5220\u9664\u76F8\u5173\u8BB0\u5F55 \u5B58\u50A8outPoint=&gt;blockNumer+blocHash \u8BE5outpoint\u4EA7\u751F\u7684block</p></li><li><p>bucketDebits <strong>\u8FD9\u4E2A\u9700\u8981\u89E3\u91CA\u6E05\u695A</strong> \u8BB0\u5F55\u94B1\u5305\u4E2D\u4E00\u7B14\u88AB\u6D88\u8D39\u7684UTXO, debit\u5565\u610F\u601D\u5462 Txhash+blockNumber+blockHash+Index(outpoint\u4E2D)=&gt;Amount[8\u5B57\u8282]+Txhash+blockNumber+blockHash+Index</p></li><li><p>bucketUnmined \u5B58\u50A8\u8FDB\u5165memPool,\u4F46\u662F\u8FD8\u672A\u88AB\u6253\u5305\u7684\u4EA4\u6613 TxHash=&gt;ReceivedTime(8\u5B57\u8282)+SeralizedTx</p></li><li><p>bucketUnminedCredits \u5B58\u50A8 outpoint=&gt;UTXO Amount+change \u53C2\u8003bucketCredits</p></li><li><p>bucketUnminedInputs \u4FDD\u5B58\u5DF2\u7ECF\u6D88\u8D39\u7684UTXO,\u4F46\u662F\u8FD8\u672A\u88AB\u6253\u5305\u6216\u8005\u6B63\u5728\u88AB\u6253\u5305 \u8FD9\u4E9BUTXO\u5DF2\u7ECF\u88AB\u8FDB\u5165mempool\u7684Tx\u6D88\u8D39\u4E86. outpoint=&gt;[TxHash1,TxHash2] TxHash1,TxHash2\u53EF\u80FD\u4F1A\u6D88\u8D39\u8FD9\u4E2Aoutpoint</p></li></ol>`,20),p=[c];function o(u,l,r,i,b,k){return s(),e("div",null,p)}var h=n(t,[["render",o]]);export{m as __pageData,h as default};
