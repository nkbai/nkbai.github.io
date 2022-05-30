import{_ as n,c as s,o as a,a as e}from"./app.8e8e8923.js";const k='{"title":"waddrmgr\u6A21\u5757","description":"","frontmatter":{"title":"waddrmgr\u6A21\u5757","date":"2019-05-18T13:57:08.732Z","draft":false,"markup":"mmark"},"headers":[{"level":3,"title":"\u5730\u5740","slug":"\u5730\u5740"},{"level":2,"title":"manager","slug":"manager"},{"level":3,"title":"manager","slug":"manager-1"},{"level":3,"title":"ScopedKeyManager \u5BF9\u5E94\u7740\u5177\u4F53\u7684\u67D0\u4E2A\u5B50\u8D26\u6237","slug":"scopedkeymanager-\u5BF9\u5E94\u7740\u5177\u4F53\u7684\u67D0\u4E2A\u5B50\u8D26\u6237"},{"level":3,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"blockchain/btcwallet/waddrmgr\u6A21\u5757.md"}',t={},p=e(`<h1 id="waddrmgr\u6A21\u5757" tabindex="-1">waddrmgr\u6A21\u5757 <a class="header-anchor" href="#waddrmgr\u6A21\u5757" aria-hidden="true">#</a></h1><h4 id="_1-waddrmgrnamespacekey" tabindex="-1">1. waddrmgrNamespaceKey <a class="header-anchor" href="#_1-waddrmgrnamespacekey" aria-hidden="true">#</a></h4><h5 id="_1-1-mainbucketname" tabindex="-1">1.1 mainBucketName <a class="header-anchor" href="#_1-1-mainbucketname" aria-hidden="true">#</a></h5><pre><code>    stores the encrypted crypto keys that encrypt all other generated keys
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
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><h3 id="\u5730\u5740" tabindex="-1">\u5730\u5740 <a class="header-anchor" href="#\u5730\u5740" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><pre><code>
<span class="token comment">// AddressType represents the various address types waddrmgr is currently able</span>
<span class="token comment">// to generate, and maintain.</span>
<span class="token comment">//</span>
<span class="token comment">// NOTE: These MUST be stable as they&#39;re used for scope address schema</span>
<span class="token comment">// recognition within the database.</span>
<span class="token keyword">type</span> AddressType <span class="token builtin">uint8</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
	<span class="token comment">// PubKeyHash is a regular p2pkh address.</span>
	PubKeyHash AddressType <span class="token operator">=</span> <span class="token boolean">iota</span>

	<span class="token comment">// Script reprints a raw script address.</span>
	Script

	<span class="token comment">// RawPubKey is just raw public key to be used within scripts, This</span>
	<span class="token comment">// type indicates that a scoped manager with this address type</span>
	<span class="token comment">// shouldn&#39;t be consulted during historical rescans.</span>
	RawPubKey

	<span class="token comment">// NestedWitnessPubKey represents a p2wkh output nested within a p2sh</span>
	<span class="token comment">// output. Using this address type, the wallet can receive funds from</span>
	<span class="token comment">// other wallet&#39;s which don&#39;t yet recognize the new segwit standard</span>
	<span class="token comment">// output types. Receiving funds to this address maintains the</span>
	<span class="token comment">// scalability, and malleability fixes due to segwit in a backwards</span>
	<span class="token comment">// compatible manner.</span>
	NestedWitnessPubKey

	<span class="token comment">// WitnessPubKey represents a p2wkh (pay-to-witness-key-hash) address</span>
	<span class="token comment">// type.</span>
	WitnessPubKey
<span class="token punctuation">)</span>

<span class="token comment">// ManagedAddress is an interface that provides acces to information regarding</span>
<span class="token comment">// an address managed by an address manager. Concrete implementations of this</span>
<span class="token comment">// type may provide further fields to provide information specific to that type</span>
<span class="token comment">// of address.</span>
<span class="token keyword">type</span> ManagedAddress <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token comment">// Account returns the account the address is associated with.</span>
	<span class="token function">Account</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">uint32</span>

	<span class="token comment">// Address returns a btcutil.Address for the backing address.</span>
	<span class="token function">Address</span><span class="token punctuation">(</span><span class="token punctuation">)</span> btcutil<span class="token punctuation">.</span>Address

	<span class="token comment">// AddrHash returns the key or script hash related to the address</span>
	<span class="token function">AddrHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>

	<span class="token comment">// Imported returns true if the backing address was imported instead</span>
	<span class="token comment">// of being part of an address chain.</span>
	<span class="token function">Imported</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">bool</span>

	<span class="token comment">// Internal returns true if the backing address was created for internal</span>
	<span class="token comment">// use such as a change output of a transaction.</span>
	<span class="token function">Internal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">bool</span>

	<span class="token comment">// Compressed returns true if the backing address is compressed.</span>
	<span class="token function">Compressed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">bool</span>

	<span class="token comment">// Used returns true if the backing address has been used in a transaction.</span>
	<span class="token function">Used</span><span class="token punctuation">(</span>ns walletdb<span class="token punctuation">.</span>ReadBucket<span class="token punctuation">)</span> <span class="token builtin">bool</span>

	<span class="token comment">// AddrType returns the address type of the managed address. This can</span>
	<span class="token comment">// be used to quickly discern the address type without further</span>
	<span class="token comment">// processing</span>
	<span class="token function">AddrType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> AddressType
<span class="token punctuation">}</span>

<span class="token comment">// ManagedPubKeyAddress extends ManagedAddress and additionally provides the</span>
<span class="token comment">// public and private keys for pubkey-based addresses.</span>
<span class="token keyword">type</span> ManagedPubKeyAddress <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	ManagedAddress

	<span class="token comment">// PubKey returns the public key associated with the address.</span>
	<span class="token function">PubKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>btcec<span class="token punctuation">.</span>PublicKey

	<span class="token comment">// ExportPubKey returns the public key associated with the address</span>
	<span class="token comment">// serialized as a hex encoded string.</span>
	<span class="token function">ExportPubKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>

	<span class="token comment">// PrivKey returns the private key for the address.  It can fail if the</span>
	<span class="token comment">// address manager is watching-only or locked, or the address does not</span>
	<span class="token comment">// have any keys.</span>
	<span class="token function">PrivKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>btcec<span class="token punctuation">.</span>PrivateKey<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>

	<span class="token comment">// ExportPrivKey returns the private key associated with the address</span>
	<span class="token comment">// serialized as Wallet Import Format (WIF).</span>
	<span class="token function">ExportPrivKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>btcutil<span class="token punctuation">.</span>WIF<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>

	<span class="token comment">// DerivationInfo contains the information required to derive the key</span>
	<span class="token comment">// that backs the address via traditional methods from the HD root. For</span>
	<span class="token comment">// imported keys, the first value will be set to false to indicate that</span>
	<span class="token comment">// we don&#39;t know exactly how the key was derived.</span>
	<span class="token function">DerivationInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>KeyScope<span class="token punctuation">,</span> DerivationPath<span class="token punctuation">,</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// ManagedScriptAddress extends ManagedAddress and represents a pay-to-script-hash</span>
<span class="token comment">// style of bitcoin addresses.  It additionally provides information about the</span>
<span class="token comment">// script.</span>
<span class="token keyword">type</span> ManagedScriptAddress <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	ManagedAddress

	<span class="token comment">// Script returns the script associated with the address.</span>
	<span class="token function">Script</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br></div></div><p>managedAddress \u8868\u793A\u5728ScopedKeyManager\u4E0B\u9762\u7684\u5730\u5740,P2PubKey\u7C7B\u578B\u7684\u5730\u5740,\u65E0\u8BBA\u662F\u5426\u77E5\u9053\u79C1\u94A5,\u90FD\u53EF\u4EE5\u653E\u5728\u8FD9\u91CC. scriptAddress \u8868\u793A\u5728ScopedKeyManager\u4E0B\u9762\u7684\u5730\u5740,\u7C7B\u578B\u662FP2SH\u7C7B\u578B</p><h2 id="manager" tabindex="-1">manager <a class="header-anchor" href="#manager" aria-hidden="true">#</a></h2><h3 id="manager-1" tabindex="-1">manager <a class="header-anchor" href="#manager-1" aria-hidden="true">#</a></h3><p>\u8FD9\u662F\u94B1\u5305\u5730\u5740\u7BA1\u7406\u7684\u603B\u5165\u53E3,\u771F\u6B63\u7684\u79C1\u94A5\u662F\u7531ScopedKeyManager\u7BA1\u7406</p><div class="language-go line-numbers-mode"><pre><code><span class="token comment">// Manager represents a concurrency safe crypto currency address manager and</span>
<span class="token comment">// key store.</span>
<span class="token keyword">type</span> Manager <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	mtx sync<span class="token punctuation">.</span>RWMutex

	<span class="token comment">// scopedManager is a mapping of scope of scoped manager, the manager</span>
	<span class="token comment">// itself loaded into memory.</span>
	scopedManagers <span class="token keyword">map</span><span class="token punctuation">[</span>KeyScope<span class="token punctuation">]</span><span class="token operator">*</span>ScopedKeyManager

	externalAddrSchemas <span class="token keyword">map</span><span class="token punctuation">[</span>AddressType<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span>KeyScope
	internalAddrSchemas <span class="token keyword">map</span><span class="token punctuation">[</span>AddressType<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span>KeyScope

	syncState    syncState
	watchingOnly <span class="token builtin">bool</span>
	birthday     time<span class="token punctuation">.</span>Time
	locked       <span class="token builtin">bool</span>
	closed       <span class="token builtin">bool</span>
	chainParams  <span class="token operator">*</span>chaincfg<span class="token punctuation">.</span>Params

	<span class="token comment">// masterKeyPub is the secret key used to secure the cryptoKeyPub key</span>
	<span class="token comment">// and masterKeyPriv is the secret key used to secure the cryptoKeyPriv</span>
	<span class="token comment">// key.  This approach is used because it makes changing the passwords</span>
	<span class="token comment">// much simpler as it then becomes just changing these keys.  It also</span>
	<span class="token comment">// provides future flexibility.</span>
	<span class="token comment">//</span>
	<span class="token comment">// NOTE: This is not the same thing as BIP0032 master node extended</span>
	<span class="token comment">// key.</span>
	<span class="token comment">//</span>
	<span class="token comment">// The underlying master private key will be zeroed when the address</span>
	<span class="token comment">// manager is locked.</span>
	masterKeyPub  <span class="token operator">*</span>snacl<span class="token punctuation">.</span>SecretKey
	masterKeyPriv <span class="token operator">*</span>snacl<span class="token punctuation">.</span>SecretKey

	<span class="token comment">// cryptoKeyPub is the key used to encrypt public extended keys and</span>
	<span class="token comment">// addresses.</span>
	cryptoKeyPub EncryptorDecryptor

	<span class="token comment">// cryptoKeyPriv is the key used to encrypt private data such as the</span>
	<span class="token comment">// master hierarchical deterministic extended key.</span>
	<span class="token comment">//</span>
	<span class="token comment">// This key will be zeroed when the address manager is locked.</span>
	cryptoKeyPrivEncrypted <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
	cryptoKeyPriv          EncryptorDecryptor

	<span class="token comment">// cryptoKeyScript is the key used to encrypt script data.</span>
	<span class="token comment">//</span>
	<span class="token comment">// This key will be zeroed when the address manager is locked.</span>
	cryptoKeyScriptEncrypted <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
	cryptoKeyScript          EncryptorDecryptor

	<span class="token comment">// privPassphraseSalt and hashedPrivPassphrase allow for the secure</span>
	<span class="token comment">// detection of a correct passphrase on manager unlock when the</span>
	<span class="token comment">// manager is already unlocked.  The hash is zeroed each lock.</span>
	privPassphraseSalt   <span class="token punctuation">[</span>saltSize<span class="token punctuation">]</span><span class="token builtin">byte</span>
	hashedPrivPassphrase <span class="token punctuation">[</span>sha512<span class="token punctuation">.</span>Size<span class="token punctuation">]</span><span class="token builtin">byte</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><p>\u6CE8\u610F\u5176\u4E2D\u7684lock\u662F\u8D26\u6237\u6240\u52A8,unlock\u662F\u51ED\u5BC6\u7801\u89E3\u9501\u94B1\u5305, \u4E5F\u5C31\u662F\u8BF4\u5E73\u65F6\u94B1\u5305\u91CC\u7684\u79C1\u94A5\u90FD\u662F\u4EE5\u5BC6\u6587\u4FDD\u5B58\u7684, \u8FD9\u662F\u4E00\u79CD\u6BD4\u8F83\u5B89\u5168\u7684\u5B9E\u73B0,\u5982\u679Clock,\u4F1A\u628A\u4FDD\u5B58\u7684\u94ED\u6587\u79C1\u94A5\u4EE5\u53CA\u5BC6\u7801\u90FD\u6E05\u7A7A\u7684.</p><h3 id="scopedkeymanager-\u5BF9\u5E94\u7740\u5177\u4F53\u7684\u67D0\u4E2A\u5B50\u8D26\u6237" tabindex="-1">ScopedKeyManager \u5BF9\u5E94\u7740\u5177\u4F53\u7684\u67D0\u4E2A\u5B50\u8D26\u6237 <a class="header-anchor" href="#scopedkeymanager-\u5BF9\u5E94\u7740\u5177\u4F53\u7684\u67D0\u4E2A\u5B50\u8D26\u6237" aria-hidden="true">#</a></h3><p>m/purpose&#39;/cointype&#39; \u4E0B\u9762\u67D0\u4E2A\u8D26\u6237\u7684key\u7684\u7BA1\u7406</p><h3 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h3><p>btcwallet\u628ASyncState\u4E5F\u653E\u5728\u4E86waddrmgr\u6A21\u5757</p>`,24),c=[p];function r(o,l,i,u,b,m){return a(),s("div",null,c)}var h=n(t,[["render",r]]);export{k as __pageData,h as default};
