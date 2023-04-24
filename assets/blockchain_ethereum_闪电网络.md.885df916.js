import{_ as s,c as n,o as a,N as e}from"./chunks/framework.3a9190c5.js";const C=JSON.parse('{"title":"闪电网络","description":"","frontmatter":{"title":"闪电网络","date":"2018-09-12T06:16:20.000Z","draft":false,"markup":"mmark"},"headers":[],"relativePath":"blockchain/ethereum/闪电网络.md"}'),l={name:"blockchain/ethereum/闪电网络.md"},p=e(`<h1 id="闪电网络阅读" tabindex="-1">闪电网络阅读 <a class="header-anchor" href="#闪电网络阅读" aria-label="Permalink to &quot;闪电网络阅读&quot;">​</a></h1><h2 id="创建通道" tabindex="-1">\b创建通道 <a class="header-anchor" href="#创建通道" aria-label="Permalink to &quot;\b创建通道&quot;">​</a></h2><pre class="mermaid loading">sequenceDiagram
    participant A as Alice
    participant B as Bob

    A-&gt;&gt;B: lnwire.OpenChannel
    B-&gt;&gt;A: lnwire.AcceptChannel
   A-&gt;&gt;B:lnwire.FundingCreated
   B-&gt;&gt;A:lnwire.FundingSigned
   A-&gt;&gt;B:lnwire.FundingLocked
   B-&gt;&gt;A:lnwire.FundingLocked</pre><p><mark>Bob就是等待通道创建事件,然后再等待6个确认以后就认为通道可以使用了.</mark></p><h2 id="数据库中-channel-的存储" tabindex="-1">数据库中 channel 的存储 <a class="header-anchor" href="#数据库中-channel-的存储" aria-label="Permalink to &quot;数据库中 channel 的存储&quot;">​</a></h2><pre class="mermaid loading">graph BT
    open-chan-bucket--&gt;node1-pubkey
    open-chan-bucket--&gt;node2-pubkey
    open-chan-bucket--&gt;node3-pubkey
    node1-pubkey--&gt;mainnet
    node1-pubkey--&gt;testnet
    mainnet--&gt;FundingOutPoint1[channel1]
    mainnet--&gt;FundingOutPoint2[channel2]
    FundingOutPoint1---channelInformation(ChanType,TotalMSatRecived...)
    FundingOutPoint1---commitKey(localCommitment,remoteCommitment)
    FundingOutPoint1---revocationStateKey(RemoteRevocation...)</pre><p>矩形表示 bucket 圆角矩形表示存储的序列化 Data</p><h2 id="转发数据库结构" tabindex="-1">转发数据库结构 <a class="header-anchor" href="#转发数据库结构" aria-label="Permalink to &quot;转发数据库结构&quot;">​</a></h2><pre class="mermaid loading">graph BT
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
fail-settle-updates--&gt;idx:LogUpdate</pre><p>height1,height2这些指的是foward HTLC的 height short-channel-ID 是一个8字节的通道 ID, 由 blocknumber,block 中的哪个 tx(tx 在通道中的Index),tx的哪个输出 (output index)</p><h2 id="数据库中的-graph" tabindex="-1">数据库中的 graph <a class="header-anchor" href="#数据库中的-graph" aria-label="Permalink to &quot;数据库中的 graph&quot;">​</a></h2><pre class="mermaid loading">graph BT
nodeBucket[graph-node]--&gt;sourceKey(source-&gt;node public key)
nodeBucket[graph-node]--&gt;nodePub1_node(node public key1-&gt;LightningNode1)
nodeBucket[graph-node]--&gt;nodePub2_node(node public key2-&gt;LightningNode2)

nodeBucket[graph-node]--&gt;aliasIndexBucket[alias]
nodeBucket[graph-node]--&gt;nodeUpdateIndexBucket[graph-node-update-index]
aliasIndexBucket[alias]--&gt;nodePub1_nickName(node public key1-&gt;node1&#39;s nick name)</pre><p>source 是一个星型拓扑图的中心,实际上就是节点自身</p><pre class="mermaid loading">graph BT
edgeBucket[graph-edge]--&gt;edgeIndexBucket[edge-index]
edgeBucket[graph-edge]--&gt;channelPointBucket[chan-index]
edgeIndexBucket--&gt;shortChannelID(shortChannelID-&gt;ChannelEdgeInfo)
channelPointBucket[chan-index]--&gt;ChannelPoint(FundingOutPoint-&gt;ShortChannelID)
edgeBucket[graph-edge]--&gt;edgeKey(nodePub+ShortChannelID-&gt;ChannelEdgePolicy)</pre><p>剪辑 Graph</p><pre class="mermaid loading">graph BT
graphMetaBucket[graph-meta]--&gt;pruneLogBucket[prune-log]
pruneLogBucket[prune-log]--&gt;blockHeight_blockHash(block Height-&gt; block Hash)</pre><p>注意: 这里的 block Height 和 block Hash 就是指的链上某一块的高度(块号)和这个块的 hash 值</p><ol><li>存储在数据库中的一条通道,这个是没有方向的</li></ol><div class="language-go line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// ChannelEdgeInfo represents a fully authenticated channel along with all its</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// unique attributes. Once an authenticated channel announcement has been</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// processed on the network, then an instance of ChannelEdgeInfo encapsulating</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// the channels attributes is stored. The other portions relevant to routing</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// policy of a channel are stored within a ChannelEdgePolicy for each direction</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// of the channel.</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ChannelEdgeInfo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// ChannelID is the unique channel ID for the channel. The first 3</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// bytes are the block height, the next 3 the index within the block,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// and the last 2 bytes are the output index for the channel.</span></span>
<span class="line"><span style="color:#A6ACCD;">	ChannelID </span><span style="color:#C792EA;">uint64</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// ChainHash is the hash that uniquely identifies the chain that this</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// channel was opened within.</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">//</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// TODO(roasbeef): need to modify db keying for multi-chain</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">//  * must add chain hash to prefix as well</span></span>
<span class="line"><span style="color:#A6ACCD;">	ChainHash chainhash</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Hash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// NodeKey1Bytes is the raw public key of the first node.</span></span>
<span class="line"><span style="color:#A6ACCD;">	NodeKey1Bytes </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">33</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">byte</span></span>
<span class="line"><span style="color:#A6ACCD;">	nodeKey1      </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">btcec</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PublicKey</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// NodeKey2Bytes is the raw public key of the first node.</span></span>
<span class="line"><span style="color:#A6ACCD;">	NodeKey2Bytes </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">33</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">byte</span></span>
<span class="line"><span style="color:#A6ACCD;">	nodeKey2      </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">btcec</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PublicKey</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// BitcoinKey1Bytes is the raw public key of the first node.</span></span>
<span class="line"><span style="color:#A6ACCD;">	BitcoinKey1Bytes </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">33</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">byte</span></span>
<span class="line"><span style="color:#A6ACCD;">	bitcoinKey1      </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">btcec</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PublicKey</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// BitcoinKey2Bytes is the raw public key of the first node.</span></span>
<span class="line"><span style="color:#A6ACCD;">	BitcoinKey2Bytes </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">33</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">byte</span></span>
<span class="line"><span style="color:#A6ACCD;">	bitcoinKey2      </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">btcec</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PublicKey</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// Features is an opaque byte slice that encodes the set of channel</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// specific features that this channel edge supports.</span></span>
<span class="line"><span style="color:#A6ACCD;">	Features </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">byte</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// AuthProof is the authentication proof for this channel. This proof</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// contains a set of signatures binding four identities, which attests</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// to the legitimacy of the advertised channel.</span></span>
<span class="line"><span style="color:#A6ACCD;">	AuthProof </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">ChannelAuthProof</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// ChannelPoint is the funding outpoint of the channel. This can be</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// used to uniquely identify the channel within the channel graph.</span></span>
<span class="line"><span style="color:#A6ACCD;">	ChannelPoint wire</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">OutPoint</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// Capacity is the total capacity of the channel, this is determined by</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// the value output in the outpoint that created this channel.</span></span>
<span class="line"><span style="color:#A6ACCD;">	Capacity btcutil</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Amount</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ChannelAuthProof is the authentication proof (the signature portion) for a</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// channel. Using the four signatures contained in the struct, and some</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// auxiliary knowledge (the funding script, node identities, and outpoint) nodes</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// on the network are able to validate the authenticity and existence of a</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// channel. Each of these signatures signs the following digest: chanID ||</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// nodeID1 || nodeID2 || bitcoinKey1|| bitcoinKey2 || 2-byte-feature-len ||</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// features.</span></span>
<span class="line"><span style="color:#A6ACCD;">这个是双方广播通道时候的信息</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ChannelAuthProof</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// nodeSig1 is a cached instance of the first node signature.</span></span>
<span class="line"><span style="color:#A6ACCD;">	nodeSig1 </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">btcec</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Signature</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// NodeSig1Bytes are the raw bytes of the first node signature encoded</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// in DER format.</span></span>
<span class="line"><span style="color:#A6ACCD;">	NodeSig1Bytes </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">byte</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// nodeSig2 is a cached instance of the second node signature.</span></span>
<span class="line"><span style="color:#A6ACCD;">	nodeSig2 </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">btcec</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Signature</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// NodeSig2Bytes are the raw bytes of the second node signature</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// encoded in DER format.</span></span>
<span class="line"><span style="color:#A6ACCD;">	NodeSig2Bytes </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">byte</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// bitcoinSig1 is a cached instance of the first bitcoin signature.</span></span>
<span class="line"><span style="color:#A6ACCD;">	bitcoinSig1 </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">btcec</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Signature</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// BitcoinSig1Bytes are the raw bytes of the first bitcoin signature</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// encoded in DER format.</span></span>
<span class="line"><span style="color:#A6ACCD;">	BitcoinSig1Bytes </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">byte</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// bitcoinSig2 is a cached instance of the second bitcoin signature.</span></span>
<span class="line"><span style="color:#A6ACCD;">	bitcoinSig2 </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">btcec</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Signature</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// BitcoinSig2Bytes are the raw bytes of the second bitcoin signature</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// encoded in DER format.</span></span>
<span class="line"><span style="color:#A6ACCD;">	BitcoinSig2Bytes </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">byte</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ChannelEdgePolicy represents a *directed* edge within the channel graph. For</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// each channel in the database, there are two distinct edges: one for each</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// possible direction of travel along the channel. The edges themselves hold</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// information concerning fees, and minimum time-lock information which is</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// utilized during path finding.</span></span>
<span class="line"><span style="color:#A6ACCD;">这个是通道参与一方定义的如何处理从我这里路过交易</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ChannelEdgePolicy</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// SigBytes is the raw bytes of the signature of the channel edge</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// policy. We&#39;ll only parse these if the caller needs to access the</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// signature for validation purposes.</span></span>
<span class="line"><span style="color:#A6ACCD;">	SigBytes </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">byte</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// sig is a cached fully parsed signature.</span></span>
<span class="line"><span style="color:#A6ACCD;">	sig </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">btcec</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Signature</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// ChannelID is the unique channel ID for the channel. The first 3</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// bytes are the block height, the next 3 the index within the block,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// and the last 2 bytes are the output index for the channel.</span></span>
<span class="line"><span style="color:#A6ACCD;">	ChannelID </span><span style="color:#C792EA;">uint64</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// LastUpdate is the last time an authenticated edge for this channel</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// was received.</span></span>
<span class="line"><span style="color:#A6ACCD;">	LastUpdate time</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Time</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// Flags is a bitfield which signals the capabilities of the channel as</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// well as the directed edge this update applies to.</span></span>
<span class="line"><span style="color:#A6ACCD;">	Flags lnwire</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ChanUpdateFlag</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// TimeLockDelta is the number of blocks this node will subtract from</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// the expiry of an incoming HTLC. This value expresses the time buffer</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// the node would like to HTLC exchanges.</span></span>
<span class="line"><span style="color:#A6ACCD;">	TimeLockDelta </span><span style="color:#C792EA;">uint16</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// MinHTLC is the smallest value HTLC this node will accept, expressed</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// in millisatoshi.</span></span>
<span class="line"><span style="color:#A6ACCD;">	MinHTLC lnwire</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">MilliSatoshi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// FeeBaseMSat is the base HTLC fee that will be charged for forwarding</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// ANY HTLC, expressed in mSAT&#39;s.</span></span>
<span class="line"><span style="color:#A6ACCD;">	FeeBaseMSat lnwire</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">MilliSatoshi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// FeeProportionalMillionths is the rate that the node will charge for</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// HTLCs for each millionth of a satoshi forwarded.</span></span>
<span class="line"><span style="color:#A6ACCD;">	FeeProportionalMillionths lnwire</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">MilliSatoshi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// Node is the LightningNode that this directed edge leads to. Using</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// this pointer the channel graph can further be traversed.</span></span>
<span class="line"><span style="color:#A6ACCD;">	Node </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">LightningNode</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	db </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">DB</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// LightningNode represents an individual vertex/node within the channel graph.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// A node is connected to other nodes by one or more channel edges emanating</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// from it. As the graph is directed, a node will also have an incoming edge</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// attached to it for each outgoing edge.</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">LightningNode</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// PubKeyBytes is the raw bytes of the public key of the target node.</span></span>
<span class="line"><span style="color:#A6ACCD;">	PubKeyBytes </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">33</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">byte</span></span>
<span class="line"><span style="color:#A6ACCD;">	pubKey      </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">btcec</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PublicKey</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// HaveNodeAnnouncement indicates whether we received a node</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// announcement for this particular node. If true, the remaining fields</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// will be set, if false only the PubKey is known for this node.</span></span>
<span class="line"><span style="color:#A6ACCD;">	HaveNodeAnnouncement </span><span style="color:#C792EA;">bool</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// LastUpdate is the last time the vertex information for this node has</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// been updated.</span></span>
<span class="line"><span style="color:#A6ACCD;">	LastUpdate time</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Time</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// Address is the TCP address this node is reachable over.</span></span>
<span class="line"><span style="color:#A6ACCD;">	Addresses </span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;">net</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Addr</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// Color is the selected color for the node.</span></span>
<span class="line"><span style="color:#A6ACCD;">	Color color</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">RGBA</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// Alias is a nick-name for the node. The alias can be used to confirm</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// a node&#39;s identity or to serve as a short ID for an address book.</span></span>
<span class="line"><span style="color:#A6ACCD;">	Alias </span><span style="color:#C792EA;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// AuthSigBytes is the raw signature under the advertised public key</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// which serves to authenticate the attributes announced by this node.</span></span>
<span class="line"><span style="color:#A6ACCD;">	AuthSigBytes </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">byte</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// Features is the list of protocol features supported by this node.</span></span>
<span class="line"><span style="color:#A6ACCD;">	Features </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">lnwire</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">FeatureVector</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	db </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">DB</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// TODO(roasbeef): discovery will need storage to keep it&#39;s last IP</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// address and re-announce if interface changes?</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// TODO(roasbeef): add update method and fetch?</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br></div></div><h3 id="术语" tabindex="-1">术语 <a class="header-anchor" href="#术语" aria-label="Permalink to &quot;术语&quot;">​</a></h3><p>settle \b类似于 raiden 中的 unlock 消息,结束一笔 HTLC PublicKey 32字节的公钥</p>`,21),t=[p];function o(c,i,r,y,b,h){return a(),n("div",null,t)}const A=s(l,[["render",o]]);export{C as __pageData,A as default};
