import{_ as s,c as n,o as a,N as e}from"./chunks/framework.3a9190c5.js";const D=JSON.parse('{"title":"waddrmgr模块","description":"","frontmatter":{"title":"waddrmgr模块","date":"2019-05-18T13:57:08.732Z","draft":false,"markup":"mmark"},"headers":[],"relativePath":"blockchain/btcwallet/waddrmgr模块.md"}'),l={name:"blockchain/btcwallet/waddrmgr模块.md"},p=e(`<h1 id="waddrmgr模块" tabindex="-1">waddrmgr模块 <a class="header-anchor" href="#waddrmgr模块" aria-label="Permalink to &quot;waddrmgr模块&quot;">​</a></h1><h4 id="_1-waddrmgrnamespacekey" tabindex="-1">1. waddrmgrNamespaceKey <a class="header-anchor" href="#_1-waddrmgrnamespacekey" aria-label="Permalink to &quot;1. waddrmgrNamespaceKey&quot;">​</a></h4><h5 id="_1-1-mainbucketname" tabindex="-1">1.1 mainBucketName <a class="header-anchor" href="#_1-1-mainbucketname" aria-label="Permalink to &quot;1.1  mainBucketName&quot;">​</a></h5><pre><code>    stores the encrypted crypto keys that encrypt all other generated keys
</code></pre><h5 id="_1-2-syncbucketname" tabindex="-1">1.2 syncBucketName <a class="header-anchor" href="#_1-2-syncbucketname" aria-label="Permalink to &quot;1.2  syncBucketName&quot;">​</a></h5><pre><code>    stores the current sync state of the root manager.
</code></pre><h5 id="_1-3-scopebucketname" tabindex="-1">1.3 scopeBucketName <a class="header-anchor" href="#_1-3-scopebucketname" aria-label="Permalink to &quot;1.3 scopeBucketName&quot;">​</a></h5><pre><code>    		scopeBucketNme is the name of the top-level bucket within the
            hierarchy. It maps: purpose || coinType to a new sub-bucket that
            will house a scoped address manager. All buckets below are a child
            of this bucket:
            
            scopeBucket -&gt; scope -&gt; acctBucketName //account id=&gt;dbDefaultAccountRow
            scopeBucket -&gt; scope -&gt; addrBucketName //addressID Hash=&gt;dbAddressRow
            scopeBucket -&gt; scope -&gt; usedAddrBucketName // 一个地址是否被使用
            scopeBucket -&gt; scope -&gt; addrAcctIdxBucketName //addressID hash =&gt; account id
            scopeBucket -&gt; scope -&gt; acctNameIdxBucketName //accountName =&gt; account_id
            scopeBucket -&gt; scope -&gt; acctIDIdxBucketName //account_id =&gt; accountName
            scopeBucket -&gt; scope -&gt; metaBucket //metaData
            scopeBucket -&gt; scope -&gt; metaBucket -&gt; lastAccountNameKey //manager中的最后一个account
            scopeBucket -&gt; scope -&gt; coinTypePrivKey //后面这两个代码没看到
            scopeBucket -&gt; scope -&gt; coinTypePubKey
</code></pre><p>目前已知的Scope有KeyScopeBIP0044,KeyScopeBIP0049Plus等 从这里也看出比特币的Key是树形结构,</p><h5 id="_1-4-scopeschemabucketname" tabindex="-1">1.4 scopeSchemaBucketName <a class="header-anchor" href="#_1-4-scopeschemabucketname" aria-label="Permalink to &quot;1.4 scopeSchemaBucketName&quot;">​</a></h5><pre><code>scopeSchemaBucket is the name of the bucket that maps a particular
manager scope to the type of addresses that should be derived for
particular branches during key derivation.
</code></pre><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// KeyScopeBIP0049Plus is the key scope of our modified BIP0049</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// derivation. We say this is BIP0049 &quot;plus&quot;, as we&#39;ll actually use</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// p2wkh change all change addresses.</span></span>
<span class="line"><span style="color:#A6ACCD;">	KeyScopeBIP0049Plus </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> KeyScope</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		Purpose</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">49</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		Coin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// KeyScopeBIP0084 is the key scope for BIP0084 derivation. BIP0084</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// will be used to derive all p2wkh addresses.</span></span>
<span class="line"><span style="color:#A6ACCD;">	KeyScopeBIP0084 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> KeyScope</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		Purpose</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">84</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		Coin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// KeyScopeBIP0044 is the key scope for BIP0044 derivation. Legacy</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// wallets will only be able to use this key scope, and no keys beyond</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// it.</span></span>
<span class="line"><span style="color:#A6ACCD;">	KeyScopeBIP0044 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> KeyScope</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		Purpose</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">44</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		Coin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// DefaultKeyScopes is the set of default key scopes that will be</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// created by the root manager upon initial creation.</span></span>
<span class="line"><span style="color:#A6ACCD;">	DefaultKeyScopes </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;">KeyScope</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		KeyScopeBIP0049Plus</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		KeyScopeBIP0084</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		KeyScopeBIP0044</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// ScopeAddrMap is a map from the default key scopes to the scope</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// address schema for each scope type. This will be consulted during</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// the initial creation of the root key manager.</span></span>
<span class="line"><span style="color:#A6ACCD;">	ScopeAddrMap </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">map[</span><span style="color:#A6ACCD;">KeyScope</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">ScopeAddrSchema</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		KeyScopeBIP0049Plus</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			ExternalAddrType</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> NestedWitnessPubKey</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">			InternalAddrType</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> WitnessPubKey</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		KeyScopeBIP0084</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			ExternalAddrType</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> WitnessPubKey</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">			InternalAddrType</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> WitnessPubKey</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		KeyScopeBIP0044</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			InternalAddrType</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> PubKeyHash</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">			ExternalAddrType</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> PubKeyHash</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><h3 id="地址" tabindex="-1">地址 <a class="header-anchor" href="#地址" aria-label="Permalink to &quot;地址&quot;">​</a></h3><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// AddressType represents the various address types waddrmgr is currently able</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// to generate, and maintain.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// NOTE: These MUST be stable as they&#39;re used for scope address schema</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// recognition within the database.</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AddressType</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">uint8</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// PubKeyHash is a regular p2pkh address.</span></span>
<span class="line"><span style="color:#A6ACCD;">	PubKeyHash AddressType </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">iota</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// Script reprints a raw script address.</span></span>
<span class="line"><span style="color:#A6ACCD;">	Script</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// RawPubKey is just raw public key to be used within scripts, This</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// type indicates that a scoped manager with this address type</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// shouldn&#39;t be consulted during historical rescans.</span></span>
<span class="line"><span style="color:#A6ACCD;">	RawPubKey</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// NestedWitnessPubKey represents a p2wkh output nested within a p2sh</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// output. Using this address type, the wallet can receive funds from</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// other wallet&#39;s which don&#39;t yet recognize the new segwit standard</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// output types. Receiving funds to this address maintains the</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// scalability, and malleability fixes due to segwit in a backwards</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// compatible manner.</span></span>
<span class="line"><span style="color:#A6ACCD;">	NestedWitnessPubKey</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// WitnessPubKey represents a p2wkh (pay-to-witness-key-hash) address</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// type.</span></span>
<span class="line"><span style="color:#A6ACCD;">	WitnessPubKey</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ManagedAddress is an interface that provides acces to information regarding</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// an address managed by an address manager. Concrete implementations of this</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// type may provide further fields to provide information specific to that type</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// of address.</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ManagedAddress</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// Account returns the account the address is associated with.</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">Account</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">uint32</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// Address returns a btcutil.Address for the backing address.</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">Address</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> btcutil</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Address</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// AddrHash returns the key or script hash related to the address</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">AddrHash</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">byte</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// Imported returns true if the backing address was imported instead</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// of being part of an address chain.</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">Imported</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">bool</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// Internal returns true if the backing address was created for internal</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// use such as a change output of a transaction.</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">Internal</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">bool</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// Compressed returns true if the backing address is compressed.</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">Compressed</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">bool</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// Used returns true if the backing address has been used in a transaction.</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">Used</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ns walletdb</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ReadBucket</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">bool</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// AddrType returns the address type of the managed address. This can</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// be used to quickly discern the address type without further</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// processing</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">AddrType</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> AddressType</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ManagedPubKeyAddress extends ManagedAddress and additionally provides the</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// public and private keys for pubkey-based addresses.</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ManagedPubKeyAddress</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	ManagedAddress</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// PubKey returns the public key associated with the address.</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">PubKey</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">btcec</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PublicKey</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// ExportPubKey returns the public key associated with the address</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// serialized as a hex encoded string.</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">ExportPubKey</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// PrivKey returns the private key for the address.  It can fail if the</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// address manager is watching-only or locked, or the address does not</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// have any keys.</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">PrivKey</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(*</span><span style="color:#A6ACCD;">btcec</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PrivateKey</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">error</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// ExportPrivKey returns the private key associated with the address</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// serialized as Wallet Import Format (WIF).</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">ExportPrivKey</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(*</span><span style="color:#A6ACCD;">btcutil</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">WIF</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">error</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// DerivationInfo contains the information required to derive the key</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// that backs the address via traditional methods from the HD root. For</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// imported keys, the first value will be set to false to indicate that</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// we don&#39;t know exactly how the key was derived.</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">DerivationInfo</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">KeyScope</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> DerivationPath</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">bool</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ManagedScriptAddress extends ManagedAddress and represents a pay-to-script-hash</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// style of bitcoin addresses.  It additionally provides information about the</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// script.</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ManagedScriptAddress</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	ManagedAddress</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// Script returns the script associated with the address.</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">Script</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">([]</span><span style="color:#C792EA;">byte</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">error</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br></div></div><p>managedAddress 表示在ScopedKeyManager下面的地址,P2PubKey类型的地址,无论是否知道私钥,都可以放在这里. scriptAddress 表示在ScopedKeyManager下面的地址,类型是P2SH类型</p><h2 id="manager" tabindex="-1">manager <a class="header-anchor" href="#manager" aria-label="Permalink to &quot;manager&quot;">​</a></h2><h3 id="manager-1" tabindex="-1">manager <a class="header-anchor" href="#manager-1" aria-label="Permalink to &quot;manager&quot;">​</a></h3><p>这是钱包地址管理的总入口,真正的私钥是由ScopedKeyManager管理</p><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Manager represents a concurrency safe crypto currency address manager and</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// key store.</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Manager</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	mtx sync</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">RWMutex</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// scopedManager is a mapping of scope of scoped manager, the manager</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// itself loaded into memory.</span></span>
<span class="line"><span style="color:#A6ACCD;">	scopedManagers </span><span style="color:#89DDFF;">map[</span><span style="color:#A6ACCD;">KeyScope</span><span style="color:#89DDFF;">]*</span><span style="color:#A6ACCD;">ScopedKeyManager</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	externalAddrSchemas </span><span style="color:#89DDFF;">map[</span><span style="color:#A6ACCD;">AddressType</span><span style="color:#89DDFF;">][]</span><span style="color:#A6ACCD;">KeyScope</span></span>
<span class="line"><span style="color:#A6ACCD;">	internalAddrSchemas </span><span style="color:#89DDFF;">map[</span><span style="color:#A6ACCD;">AddressType</span><span style="color:#89DDFF;">][]</span><span style="color:#A6ACCD;">KeyScope</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	syncState    syncState</span></span>
<span class="line"><span style="color:#A6ACCD;">	watchingOnly </span><span style="color:#C792EA;">bool</span></span>
<span class="line"><span style="color:#A6ACCD;">	birthday     time</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Time</span></span>
<span class="line"><span style="color:#A6ACCD;">	locked       </span><span style="color:#C792EA;">bool</span></span>
<span class="line"><span style="color:#A6ACCD;">	closed       </span><span style="color:#C792EA;">bool</span></span>
<span class="line"><span style="color:#A6ACCD;">	chainParams  </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">chaincfg</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Params</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// masterKeyPub is the secret key used to secure the cryptoKeyPub key</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// and masterKeyPriv is the secret key used to secure the cryptoKeyPriv</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// key.  This approach is used because it makes changing the passwords</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// much simpler as it then becomes just changing these keys.  It also</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// provides future flexibility.</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">//</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// NOTE: This is not the same thing as BIP0032 master node extended</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// key.</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">//</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// The underlying master private key will be zeroed when the address</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// manager is locked.</span></span>
<span class="line"><span style="color:#A6ACCD;">	masterKeyPub  </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">snacl</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">SecretKey</span></span>
<span class="line"><span style="color:#A6ACCD;">	masterKeyPriv </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">snacl</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">SecretKey</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// cryptoKeyPub is the key used to encrypt public extended keys and</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// addresses.</span></span>
<span class="line"><span style="color:#A6ACCD;">	cryptoKeyPub EncryptorDecryptor</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// cryptoKeyPriv is the key used to encrypt private data such as the</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// master hierarchical deterministic extended key.</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">//</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// This key will be zeroed when the address manager is locked.</span></span>
<span class="line"><span style="color:#A6ACCD;">	cryptoKeyPrivEncrypted </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">byte</span></span>
<span class="line"><span style="color:#A6ACCD;">	cryptoKeyPriv          EncryptorDecryptor</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// cryptoKeyScript is the key used to encrypt script data.</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">//</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// This key will be zeroed when the address manager is locked.</span></span>
<span class="line"><span style="color:#A6ACCD;">	cryptoKeyScriptEncrypted </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">byte</span></span>
<span class="line"><span style="color:#A6ACCD;">	cryptoKeyScript          EncryptorDecryptor</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// privPassphraseSalt and hashedPrivPassphrase allow for the secure</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// detection of a correct passphrase on manager unlock when the</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// manager is already unlocked.  The hash is zeroed each lock.</span></span>
<span class="line"><span style="color:#A6ACCD;">	privPassphraseSalt   </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">saltSize</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">byte</span></span>
<span class="line"><span style="color:#A6ACCD;">	hashedPrivPassphrase </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">sha512</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Size</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">byte</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><p>注意其中的lock是账户所动,unlock是凭密码解锁钱包, 也就是说平时钱包里的私钥都是以密文保存的, 这是一种比较安全的实现,如果lock,会把保存的铭文私钥以及密码都清空的.</p><h3 id="scopedkeymanager-对应着具体的某个子账户" tabindex="-1">ScopedKeyManager 对应着具体的某个子账户 <a class="header-anchor" href="#scopedkeymanager-对应着具体的某个子账户" aria-label="Permalink to &quot;ScopedKeyManager 对应着具体的某个子账户&quot;">​</a></h3><p>m/purpose&#39;/cointype&#39; 下面某个账户的key的管理</p><h3 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h3><p>btcwallet把SyncState也放在了waddrmgr模块</p>`,24),t=[p];function o(r,c,i,y,b,A){return a(),n("div",null,t)}const d=s(l,[["render",o]]);export{D as __pageData,d as default};
