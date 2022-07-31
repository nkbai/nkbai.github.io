import{_ as n,c as s,o as a,a as e}from"./app.4bbc222c.js";const d='{"title":"\u95EA\u7535\u7F51\u7EDC","description":"","frontmatter":{"title":"\u95EA\u7535\u7F51\u7EDC","date":"2018-09-12T06:16:20.000Z","draft":false,"markup":"mmark"},"headers":[{"level":2,"title":"\\b\u521B\u5EFA\u901A\u9053","slug":"\u521B\u5EFA\u901A\u9053"},{"level":2,"title":"\u6570\u636E\u5E93\u4E2D channel \u7684\u5B58\u50A8","slug":"\u6570\u636E\u5E93\u4E2D-channel-\u7684\u5B58\u50A8"},{"level":2,"title":"\u8F6C\u53D1\u6570\u636E\u5E93\u7ED3\u6784","slug":"\u8F6C\u53D1\u6570\u636E\u5E93\u7ED3\u6784"},{"level":2,"title":"\u6570\u636E\u5E93\u4E2D\u7684 graph","slug":"\u6570\u636E\u5E93\u4E2D\u7684-graph"},{"level":3,"title":"\u672F\u8BED","slug":"\u672F\u8BED"}],"relativePath":"blockchain/ethereum/\u95EA\u7535\u7F51\u7EDC.md"}',t={},p=e(`<h1 id="\u95EA\u7535\u7F51\u7EDC\u9605\u8BFB" tabindex="-1">\u95EA\u7535\u7F51\u7EDC\u9605\u8BFB <a class="header-anchor" href="#\u95EA\u7535\u7F51\u7EDC\u9605\u8BFB" aria-hidden="true">#</a></h1><h2 id="\u521B\u5EFA\u901A\u9053" tabindex="-1">\b\u521B\u5EFA\u901A\u9053 <a class="header-anchor" href="#\u521B\u5EFA\u901A\u9053" aria-hidden="true">#</a></h2><pre class="mermaid loading">sequenceDiagram
    participant A as Alice
    participant B as Bob

    A-&gt;&gt;B: lnwire.OpenChannel
    B-&gt;&gt;A: lnwire.AcceptChannel
   A-&gt;&gt;B:lnwire.FundingCreated
   B-&gt;&gt;A:lnwire.FundingSigned
   A-&gt;&gt;B:lnwire.FundingLocked
   B-&gt;&gt;A:lnwire.FundingLocked</pre><p><mark>Bob\u5C31\u662F\u7B49\u5F85\u901A\u9053\u521B\u5EFA\u4E8B\u4EF6,\u7136\u540E\u518D\u7B49\u5F856\u4E2A\u786E\u8BA4\u4EE5\u540E\u5C31\u8BA4\u4E3A\u901A\u9053\u53EF\u4EE5\u4F7F\u7528\u4E86.</mark></p><h2 id="\u6570\u636E\u5E93\u4E2D-channel-\u7684\u5B58\u50A8" tabindex="-1">\u6570\u636E\u5E93\u4E2D channel \u7684\u5B58\u50A8 <a class="header-anchor" href="#\u6570\u636E\u5E93\u4E2D-channel-\u7684\u5B58\u50A8" aria-hidden="true">#</a></h2><pre class="mermaid loading">graph BT
    open-chan-bucket--&gt;node1-pubkey
    open-chan-bucket--&gt;node2-pubkey
    open-chan-bucket--&gt;node3-pubkey
    node1-pubkey--&gt;mainnet
    node1-pubkey--&gt;testnet
    mainnet--&gt;FundingOutPoint1[channel1]
    mainnet--&gt;FundingOutPoint2[channel2]
    FundingOutPoint1---channelInformation(ChanType,TotalMSatRecived...)
    FundingOutPoint1---commitKey(localCommitment,remoteCommitment)
    FundingOutPoint1---revocationStateKey(RemoteRevocation...)</pre><p>\u77E9\u5F62\u8868\u793A bucket \u5706\u89D2\u77E9\u5F62\u8868\u793A\u5B58\u50A8\u7684\u5E8F\u5217\u5316 Data</p><h2 id="\u8F6C\u53D1\u6570\u636E\u5E93\u7ED3\u6784" tabindex="-1">\u8F6C\u53D1\u6570\u636E\u5E93\u7ED3\u6784 <a class="header-anchor" href="#\u8F6C\u53D1\u6570\u636E\u5E93\u7ED3\u6784" aria-hidden="true">#</a></h2><pre class="mermaid loading">graph BT
fwd-packages--&gt; short-channel-ID1
fwd-packages--&gt; short-channel-ID2
fwd-packages--&gt; short-channel-ID3
short-channel-ID1--&gt;height1
short-channel-ID1--&gt;height2
height1--&gt;add-updates
height1--&gt;fail-settle-updates
height1--&gt;fwd-filter-key(fwd-filter-key)
height1--&gt;ack-filter-key(ack-filter-key)
height1--&gt;settle-fail-filter-key(settle-fail-filter-key)
add-updates--&gt;idx:logupdate(idx:LogUpdate)
fail-settle-updates--&gt;idx:LogUpdate</pre><p>height1,height2\u8FD9\u4E9B\u6307\u7684\u662Ffoward HTLC\u7684 height short-channel-ID \u662F\u4E00\u4E2A8\u5B57\u8282\u7684\u901A\u9053 ID, \u7531 blocknumber,block \u4E2D\u7684\u54EA\u4E2A tx(tx \u5728\u901A\u9053\u4E2D\u7684Index),tx\u7684\u54EA\u4E2A\u8F93\u51FA (output index)</p><h2 id="\u6570\u636E\u5E93\u4E2D\u7684-graph" tabindex="-1">\u6570\u636E\u5E93\u4E2D\u7684 graph <a class="header-anchor" href="#\u6570\u636E\u5E93\u4E2D\u7684-graph" aria-hidden="true">#</a></h2><pre class="mermaid loading">graph BT
nodeBucket[graph-node]--&gt;sourceKey(source-&gt;node public key)
nodeBucket[graph-node]--&gt;nodePub1_node(node public key1-&gt;LightningNode1)
nodeBucket[graph-node]--&gt;nodePub2_node(node public key2-&gt;LightningNode2)

nodeBucket[graph-node]--&gt;aliasIndexBucket[alias]
nodeBucket[graph-node]--&gt;nodeUpdateIndexBucket[graph-node-update-index]
aliasIndexBucket[alias]--&gt;nodePub1_nickName(node public key1-&gt;node1&#39;s nick name)</pre><p>source \u662F\u4E00\u4E2A\u661F\u578B\u62D3\u6251\u56FE\u7684\u4E2D\u5FC3,\u5B9E\u9645\u4E0A\u5C31\u662F\u8282\u70B9\u81EA\u8EAB</p><pre class="mermaid loading">graph BT
edgeBucket[graph-edge]--&gt;edgeIndexBucket[edge-index]
edgeBucket[graph-edge]--&gt;channelPointBucket[chan-index]
edgeIndexBucket--&gt;shortChannelID(shortChannelID-&gt;ChannelEdgeInfo)
channelPointBucket[chan-index]--&gt;ChannelPoint(FundingOutPoint-&gt;ShortChannelID)
edgeBucket[graph-edge]--&gt;edgeKey(nodePub+ShortChannelID-&gt;ChannelEdgePolicy)</pre><p>\u526A\u8F91 Graph</p><pre class="mermaid loading">graph BT
graphMetaBucket[graph-meta]--&gt;pruneLogBucket[prune-log]
pruneLogBucket[prune-log]--&gt;blockHeight_blockHash(block Height-&gt; block Hash)</pre><p>\u6CE8\u610F: \u8FD9\u91CC\u7684 block Height \u548C block Hash \u5C31\u662F\u6307\u7684\u94FE\u4E0A\u67D0\u4E00\u5757\u7684\u9AD8\u5EA6(\u5757\u53F7)\u548C\u8FD9\u4E2A\u5757\u7684 hash \u503C</p><ol><li>\u5B58\u50A8\u5728\u6570\u636E\u5E93\u4E2D\u7684\u4E00\u6761\u901A\u9053,\u8FD9\u4E2A\u662F\u6CA1\u6709\u65B9\u5411\u7684</li></ol><div class="language-go line-numbers-mode"><pre><code><span class="token comment">// ChannelEdgeInfo represents a fully authenticated channel along with all its</span>
<span class="token comment">// unique attributes. Once an authenticated channel announcement has been</span>
<span class="token comment">// processed on the network, then an instance of ChannelEdgeInfo encapsulating</span>
<span class="token comment">// the channels attributes is stored. The other portions relevant to routing</span>
<span class="token comment">// policy of a channel are stored within a ChannelEdgePolicy for each direction</span>
<span class="token comment">// of the channel.</span>
<span class="token keyword">type</span> ChannelEdgeInfo <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token comment">// ChannelID is the unique channel ID for the channel. The first 3</span>
	<span class="token comment">// bytes are the block height, the next 3 the index within the block,</span>
	<span class="token comment">// and the last 2 bytes are the output index for the channel.</span>
	ChannelID <span class="token builtin">uint64</span>

	<span class="token comment">// ChainHash is the hash that uniquely identifies the chain that this</span>
	<span class="token comment">// channel was opened within.</span>
	<span class="token comment">//</span>
	<span class="token comment">// TODO(roasbeef): need to modify db keying for multi-chain</span>
	<span class="token comment">//  * must add chain hash to prefix as well</span>
	ChainHash chainhash<span class="token punctuation">.</span>Hash

	<span class="token comment">// NodeKey1Bytes is the raw public key of the first node.</span>
	NodeKey1Bytes <span class="token punctuation">[</span><span class="token number">33</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
	nodeKey1      <span class="token operator">*</span>btcec<span class="token punctuation">.</span>PublicKey

	<span class="token comment">// NodeKey2Bytes is the raw public key of the first node.</span>
	NodeKey2Bytes <span class="token punctuation">[</span><span class="token number">33</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
	nodeKey2      <span class="token operator">*</span>btcec<span class="token punctuation">.</span>PublicKey

	<span class="token comment">// BitcoinKey1Bytes is the raw public key of the first node.</span>
	BitcoinKey1Bytes <span class="token punctuation">[</span><span class="token number">33</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
	bitcoinKey1      <span class="token operator">*</span>btcec<span class="token punctuation">.</span>PublicKey

	<span class="token comment">// BitcoinKey2Bytes is the raw public key of the first node.</span>
	BitcoinKey2Bytes <span class="token punctuation">[</span><span class="token number">33</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
	bitcoinKey2      <span class="token operator">*</span>btcec<span class="token punctuation">.</span>PublicKey

	<span class="token comment">// Features is an opaque byte slice that encodes the set of channel</span>
	<span class="token comment">// specific features that this channel edge supports.</span>
	Features <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>

	<span class="token comment">// AuthProof is the authentication proof for this channel. This proof</span>
	<span class="token comment">// contains a set of signatures binding four identities, which attests</span>
	<span class="token comment">// to the legitimacy of the advertised channel.</span>
	AuthProof <span class="token operator">*</span>ChannelAuthProof

	<span class="token comment">// ChannelPoint is the funding outpoint of the channel. This can be</span>
	<span class="token comment">// used to uniquely identify the channel within the channel graph.</span>
	ChannelPoint wire<span class="token punctuation">.</span>OutPoint

	<span class="token comment">// Capacity is the total capacity of the channel, this is determined by</span>
	<span class="token comment">// the value output in the outpoint that created this channel.</span>
	Capacity btcutil<span class="token punctuation">.</span>Amount
<span class="token punctuation">}</span>
<span class="token comment">// ChannelAuthProof is the authentication proof (the signature portion) for a</span>
<span class="token comment">// channel. Using the four signatures contained in the struct, and some</span>
<span class="token comment">// auxiliary knowledge (the funding script, node identities, and outpoint) nodes</span>
<span class="token comment">// on the network are able to validate the authenticity and existence of a</span>
<span class="token comment">// channel. Each of these signatures signs the following digest: chanID ||</span>
<span class="token comment">// nodeID1 || nodeID2 || bitcoinKey1|| bitcoinKey2 || 2-byte-feature-len ||</span>
<span class="token comment">// features.</span>
\u8FD9\u4E2A\u662F\u53CC\u65B9\u5E7F\u64AD\u901A\u9053\u65F6\u5019\u7684\u4FE1\u606F
<span class="token keyword">type</span> ChannelAuthProof <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token comment">// nodeSig1 is a cached instance of the first node signature.</span>
	nodeSig1 <span class="token operator">*</span>btcec<span class="token punctuation">.</span>Signature

	<span class="token comment">// NodeSig1Bytes are the raw bytes of the first node signature encoded</span>
	<span class="token comment">// in DER format.</span>
	NodeSig1Bytes <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>

	<span class="token comment">// nodeSig2 is a cached instance of the second node signature.</span>
	nodeSig2 <span class="token operator">*</span>btcec<span class="token punctuation">.</span>Signature

	<span class="token comment">// NodeSig2Bytes are the raw bytes of the second node signature</span>
	<span class="token comment">// encoded in DER format.</span>
	NodeSig2Bytes <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>

	<span class="token comment">// bitcoinSig1 is a cached instance of the first bitcoin signature.</span>
	bitcoinSig1 <span class="token operator">*</span>btcec<span class="token punctuation">.</span>Signature

	<span class="token comment">// BitcoinSig1Bytes are the raw bytes of the first bitcoin signature</span>
	<span class="token comment">// encoded in DER format.</span>
	BitcoinSig1Bytes <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>

	<span class="token comment">// bitcoinSig2 is a cached instance of the second bitcoin signature.</span>
	bitcoinSig2 <span class="token operator">*</span>btcec<span class="token punctuation">.</span>Signature

	<span class="token comment">// BitcoinSig2Bytes are the raw bytes of the second bitcoin signature</span>
	<span class="token comment">// encoded in DER format.</span>
	BitcoinSig2Bytes <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
<span class="token punctuation">}</span>
<span class="token comment">// ChannelEdgePolicy represents a *directed* edge within the channel graph. For</span>
<span class="token comment">// each channel in the database, there are two distinct edges: one for each</span>
<span class="token comment">// possible direction of travel along the channel. The edges themselves hold</span>
<span class="token comment">// information concerning fees, and minimum time-lock information which is</span>
<span class="token comment">// utilized during path finding.</span>
\u8FD9\u4E2A\u662F\u901A\u9053\u53C2\u4E0E\u4E00\u65B9\u5B9A\u4E49\u7684\u5982\u4F55\u5904\u7406\u4ECE\u6211\u8FD9\u91CC\u8DEF\u8FC7\u4EA4\u6613
<span class="token keyword">type</span> ChannelEdgePolicy <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token comment">// SigBytes is the raw bytes of the signature of the channel edge</span>
	<span class="token comment">// policy. We&#39;ll only parse these if the caller needs to access the</span>
	<span class="token comment">// signature for validation purposes.</span>
	SigBytes <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>

	<span class="token comment">// sig is a cached fully parsed signature.</span>
	sig <span class="token operator">*</span>btcec<span class="token punctuation">.</span>Signature

	<span class="token comment">// ChannelID is the unique channel ID for the channel. The first 3</span>
	<span class="token comment">// bytes are the block height, the next 3 the index within the block,</span>
	<span class="token comment">// and the last 2 bytes are the output index for the channel.</span>
	ChannelID <span class="token builtin">uint64</span>

	<span class="token comment">// LastUpdate is the last time an authenticated edge for this channel</span>
	<span class="token comment">// was received.</span>
	LastUpdate time<span class="token punctuation">.</span>Time

	<span class="token comment">// Flags is a bitfield which signals the capabilities of the channel as</span>
	<span class="token comment">// well as the directed edge this update applies to.</span>
	Flags lnwire<span class="token punctuation">.</span>ChanUpdateFlag

	<span class="token comment">// TimeLockDelta is the number of blocks this node will subtract from</span>
	<span class="token comment">// the expiry of an incoming HTLC. This value expresses the time buffer</span>
	<span class="token comment">// the node would like to HTLC exchanges.</span>
	TimeLockDelta <span class="token builtin">uint16</span>

	<span class="token comment">// MinHTLC is the smallest value HTLC this node will accept, expressed</span>
	<span class="token comment">// in millisatoshi.</span>
	MinHTLC lnwire<span class="token punctuation">.</span>MilliSatoshi

	<span class="token comment">// FeeBaseMSat is the base HTLC fee that will be charged for forwarding</span>
	<span class="token comment">// ANY HTLC, expressed in mSAT&#39;s.</span>
	FeeBaseMSat lnwire<span class="token punctuation">.</span>MilliSatoshi

	<span class="token comment">// FeeProportionalMillionths is the rate that the node will charge for</span>
	<span class="token comment">// HTLCs for each millionth of a satoshi forwarded.</span>
	FeeProportionalMillionths lnwire<span class="token punctuation">.</span>MilliSatoshi

	<span class="token comment">// Node is the LightningNode that this directed edge leads to. Using</span>
	<span class="token comment">// this pointer the channel graph can further be traversed.</span>
	Node <span class="token operator">*</span>LightningNode

	db <span class="token operator">*</span>DB
<span class="token punctuation">}</span>


<span class="token comment">// LightningNode represents an individual vertex/node within the channel graph.</span>
<span class="token comment">// A node is connected to other nodes by one or more channel edges emanating</span>
<span class="token comment">// from it. As the graph is directed, a node will also have an incoming edge</span>
<span class="token comment">// attached to it for each outgoing edge.</span>
<span class="token keyword">type</span> LightningNode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token comment">// PubKeyBytes is the raw bytes of the public key of the target node.</span>
	PubKeyBytes <span class="token punctuation">[</span><span class="token number">33</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
	pubKey      <span class="token operator">*</span>btcec<span class="token punctuation">.</span>PublicKey

	<span class="token comment">// HaveNodeAnnouncement indicates whether we received a node</span>
	<span class="token comment">// announcement for this particular node. If true, the remaining fields</span>
	<span class="token comment">// will be set, if false only the PubKey is known for this node.</span>
	HaveNodeAnnouncement <span class="token builtin">bool</span>

	<span class="token comment">// LastUpdate is the last time the vertex information for this node has</span>
	<span class="token comment">// been updated.</span>
	LastUpdate time<span class="token punctuation">.</span>Time

	<span class="token comment">// Address is the TCP address this node is reachable over.</span>
	Addresses <span class="token punctuation">[</span><span class="token punctuation">]</span>net<span class="token punctuation">.</span>Addr

	<span class="token comment">// Color is the selected color for the node.</span>
	Color color<span class="token punctuation">.</span>RGBA

	<span class="token comment">// Alias is a nick-name for the node. The alias can be used to confirm</span>
	<span class="token comment">// a node&#39;s identity or to serve as a short ID for an address book.</span>
	Alias <span class="token builtin">string</span>

	<span class="token comment">// AuthSigBytes is the raw signature under the advertised public key</span>
	<span class="token comment">// which serves to authenticate the attributes announced by this node.</span>
	AuthSigBytes <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>

	<span class="token comment">// Features is the list of protocol features supported by this node.</span>
	Features <span class="token operator">*</span>lnwire<span class="token punctuation">.</span>FeatureVector

	db <span class="token operator">*</span>DB

	<span class="token comment">// TODO(roasbeef): discovery will need storage to keep it&#39;s last IP</span>
	<span class="token comment">// address and re-announce if interface changes?</span>

	<span class="token comment">// TODO(roasbeef): add update method and fetch?</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br></div></div><h3 id="\u672F\u8BED" tabindex="-1">\u672F\u8BED <a class="header-anchor" href="#\u672F\u8BED" aria-hidden="true">#</a></h3><p>settle \b\u7C7B\u4F3C\u4E8E raiden \u4E2D\u7684 unlock \u6D88\u606F,\u7ED3\u675F\u4E00\u7B14 HTLC PublicKey 32\u5B57\u8282\u7684\u516C\u94A5</p>`,21),l=[p];function c(i,o,r,u,b,m){return a(),s("div",null,l)}var k=n(t,[["render",c]]);export{d as __pageData,k as default};
