import{o as n,c as s,e}from"./app.26819860.js";const a='{"title":"wallet中的数据库设计","description":"","frontmatter":{"title":"wallet中的数据库设计","date":"2019-05-19T13:32:33.874Z","draft":false,"markup":"mmark"},"headers":[{"level":3,"title":"Bucket相关","slug":"bucket相关"},{"level":3,"title":"顶层Bucket","slug":"顶层bucket"},{"level":2,"title":"Tx相关","slug":"tx相关"},{"level":3,"title":"buckets","slug":"buckets"}],"relativePath":"btcwallet/wallet中的数据库设计.md","lastUpdated":1561507892000}',t={},p=[e('<h1 id="btcwallet中的数据库设计"><a class="header-anchor" href="#btcwallet中的数据库设计" aria-hidden="true">#</a> btcWallet中的数据库设计</h1><h3 id="bucket相关"><a class="header-anchor" href="#bucket相关" aria-hidden="true">#</a> Bucket相关</h3><h3 id="顶层bucket"><a class="header-anchor" href="#顶层bucket" aria-hidden="true">#</a> 顶层Bucket</h3><p><strong>key列表:</strong> mgrVersionName mgrCreateDateName <strong>Bucket列表:</strong> 地址相关的</p><h4 id="_1-waddrmgrnamespacekey"><a class="header-anchor" href="#_1-waddrmgrnamespacekey" aria-hidden="true">#</a> 1. waddrmgrNamespaceKey</h4><h5 id="_1-1-mainbucketname"><a class="header-anchor" href="#_1-1-mainbucketname" aria-hidden="true">#</a> 1.1 mainBucketName</h5><pre><code>    stores the encrypted crypto keys that encrypt all other generated keys\n</code></pre><h5 id="_1-2-syncbucketname"><a class="header-anchor" href="#_1-2-syncbucketname" aria-hidden="true">#</a> 1.2 syncBucketName</h5><pre><code>    stores the current sync state of the root manager.\n</code></pre><h5 id="_1-3-scopebucketname"><a class="header-anchor" href="#_1-3-scopebucketname" aria-hidden="true">#</a> 1.3 scopeBucketName</h5><pre><code>    \t\tscopeBucketNme is the name of the top-level bucket within the\n            hierarchy. It maps: purpose || coinType to a new sub-bucket that\n            will house a scoped address manager. All buckets below are a child\n            of this bucket:\n            \n            scopeBucket -&gt; scope -&gt; acctBucketName //account id=&gt;dbDefaultAccountRow\n            scopeBucket -&gt; scope -&gt; addrBucketName //addressID Hash=&gt;dbAddressRow\n            scopeBucket -&gt; scope -&gt; usedAddrBucketName // 一个地址是否被使用\n            scopeBucket -&gt; scope -&gt; addrAcctIdxBucketName //addressID hash =&gt; account id\n            scopeBucket -&gt; scope -&gt; acctNameIdxBucketName //accountName =&gt; account_id\n            scopeBucket -&gt; scope -&gt; acctIDIdxBucketName //account_id =&gt; accountName\n            scopeBucket -&gt; scope -&gt; metaBucket //metaData\n            scopeBucket -&gt; scope -&gt; metaBucket -&gt; lastAccountNameKey //manager中的最后一个account\n            scopeBucket -&gt; scope -&gt; coinTypePrivKey //后面这两个代码没看到\n            scopeBucket -&gt; scope -&gt; coinTypePubKey\n</code></pre><p>目前已知的Scope有KeyScopeBIP0044,KeyScopeBIP0049Plus等 从这里也看出比特币的Key是树形结构,</p><h5 id="_1-4-scopeschemabucketname"><a class="header-anchor" href="#_1-4-scopeschemabucketname" aria-hidden="true">#</a> 1.4 scopeSchemaBucketName</h5><pre><code>scopeSchemaBucket is the name of the bucket that maps a particular\nmanager scope to the type of addresses that should be derived for\nparticular branches during key derivation.\n</code></pre><div class="language-go line-numbers-mode"><pre><code>\t<span class="token comment">// KeyScopeBIP0049Plus is the key scope of our modified BIP0049</span>\n\t<span class="token comment">// derivation. We say this is BIP0049 &quot;plus&quot;, as we&#39;ll actually use</span>\n\t<span class="token comment">// p2wkh change all change addresses.</span>\n\tKeyScopeBIP0049Plus <span class="token operator">=</span> KeyScope<span class="token punctuation">{</span>\n\t\tPurpose<span class="token punctuation">:</span> <span class="token number">49</span><span class="token punctuation">,</span>\n\t\tCoin<span class="token punctuation">:</span>    <span class="token number">0</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token comment">// KeyScopeBIP0084 is the key scope for BIP0084 derivation. BIP0084</span>\n\t<span class="token comment">// will be used to derive all p2wkh addresses.</span>\n\tKeyScopeBIP0084 <span class="token operator">=</span> KeyScope<span class="token punctuation">{</span>\n\t\tPurpose<span class="token punctuation">:</span> <span class="token number">84</span><span class="token punctuation">,</span>\n\t\tCoin<span class="token punctuation">:</span>    <span class="token number">0</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token comment">// KeyScopeBIP0044 is the key scope for BIP0044 derivation. Legacy</span>\n\t<span class="token comment">// wallets will only be able to use this key scope, and no keys beyond</span>\n\t<span class="token comment">// it.</span>\n\tKeyScopeBIP0044 <span class="token operator">=</span> KeyScope<span class="token punctuation">{</span>\n\t\tPurpose<span class="token punctuation">:</span> <span class="token number">44</span><span class="token punctuation">,</span>\n\t\tCoin<span class="token punctuation">:</span>    <span class="token number">0</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token comment">// DefaultKeyScopes is the set of default key scopes that will be</span>\n\t<span class="token comment">// created by the root manager upon initial creation.</span>\n\tDefaultKeyScopes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>KeyScope<span class="token punctuation">{</span>\n\t\tKeyScopeBIP0049Plus<span class="token punctuation">,</span>\n\t\tKeyScopeBIP0084<span class="token punctuation">,</span>\n\t\tKeyScopeBIP0044<span class="token punctuation">,</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token comment">// ScopeAddrMap is a map from the default key scopes to the scope</span>\n\t<span class="token comment">// address schema for each scope type. This will be consulted during</span>\n\t<span class="token comment">// the initial creation of the root key manager.</span>\n\tScopeAddrMap <span class="token operator">=</span> <span class="token keyword">map</span><span class="token punctuation">[</span>KeyScope<span class="token punctuation">]</span>ScopeAddrSchema<span class="token punctuation">{</span>\n\t\tKeyScopeBIP0049Plus<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n\t\t\tExternalAddrType<span class="token punctuation">:</span> NestedWitnessPubKey<span class="token punctuation">,</span>\n\t\t\tInternalAddrType<span class="token punctuation">:</span> WitnessPubKey<span class="token punctuation">,</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\tKeyScopeBIP0084<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n\t\t\tExternalAddrType<span class="token punctuation">:</span> WitnessPubKey<span class="token punctuation">,</span>\n\t\t\tInternalAddrType<span class="token punctuation">:</span> WitnessPubKey<span class="token punctuation">,</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\tKeyScopeBIP0044<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n\t\t\tInternalAddrType<span class="token punctuation">:</span> PubKeyHash<span class="token punctuation">,</span>\n\t\t\tExternalAddrType<span class="token punctuation">:</span> PubKeyHash<span class="token punctuation">,</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><p>Tx相关的<br> 2. wtxmgrNamespaceKey</p><h2 id="tx相关"><a class="header-anchor" href="#tx相关" aria-hidden="true">#</a> Tx相关</h2><h3 id="buckets"><a class="header-anchor" href="#buckets" aria-hidden="true">#</a> buckets</h3><pre><code>bucketBlocks         = []byte(&quot;b&quot;)\nbucketTxRecords      = []byte(&quot;t&quot;)\nbucketCredits        = []byte(&quot;c&quot;)\nbucketUnspent        = []byte(&quot;u&quot;)\nbucketDebits         = []byte(&quot;d&quot;)\nbucketUnmined        = []byte(&quot;m&quot;)\nbucketUnminedCredits = []byte(&quot;mc&quot;)\nbucketUnminedInputs  = []byte(&quot;mi&quot;)\n</code></pre><ol><li><p>bucketBlocks 存储某个块有哪些Tx,没有考虑分叉 bucketBlocks: blockNumber=&gt;blockHash+blockTime+TxCount+[ TxHash1,TxHash2...]</p></li><li><p>bucketTxRecords 存储序列化的Tx,已经被打包上链的, TxHash+blockNumber+blockHash=&gt;SerializedTx</p></li><li><p>bucketCredits 存储未花费的UTXO,或者已花费,但是还没有确认的,这些都是我关注的 Txhash+blockNumber+blockHash+Index(outpoint中)=&gt;UTXO Amount[8个字节]+其他信息 其他信息: v[8]第0位表示是否已消费 1 表示已消费 v[8]第1位表示是否是找零 1 为找零 如果已经消费,那么第9个字节后还会有TxHash+blockNumber+blockHash+Index 表示这个UTXO在哪里被消费了.</p></li><li><p>bucketUnspent 存储需要我关注的未消费的UTXO,一旦该UTXO被消费,就会删除相关记录 存储outPoint=&gt;blockNumer+blocHash 该outpoint产生的block</p></li><li><p>bucketDebits <strong>这个需要解释清楚</strong> 记录钱包中一笔被消费的UTXO, debit啥意思呢 Txhash+blockNumber+blockHash+Index(outpoint中)=&gt;Amount[8字节]+Txhash+blockNumber+blockHash+Index</p></li><li><p>bucketUnmined 存储进入memPool,但是还未被打包的交易 TxHash=&gt;ReceivedTime(8字节)+SeralizedTx</p></li><li><p>bucketUnminedCredits 存储 outpoint=&gt;UTXO Amount+change 参考bucketCredits</p></li><li><p>bucketUnminedInputs 保存已经消费的UTXO,但是还未被打包或者正在被打包 这些UTXO已经被进入mempool的Tx消费了. outpoint=&gt;[TxHash1,TxHash2] TxHash1,TxHash2可能会消费这个outpoint</p></li></ol>',20)];t.render=function(e,a,t,c,o,u){return n(),s("div",null,p)};export{a as __pageData,t as default};
