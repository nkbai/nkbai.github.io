import{o as n,c as a,e as s}from"./app.1f3c315f.js";const e='{"title":"indexer模块","description":"","frontmatter":{"title":"indexer模块","date":"2019-04-18T03:46:43.173Z","draft":false,"markup":"mmark"},"headers":[{"level":2,"title":"索引管理","slug":"索引管理"},{"level":3,"title":"索引管理数据库","slug":"索引管理数据库"},{"level":2,"title":"TxHash 找Tx","slug":"txhash-找tx"},{"level":3,"title":"数据库","slug":"数据库"},{"level":2,"title":"addr找Tx","slug":"addr找tx"},{"level":3,"title":"数据库","slug":"数据库-1"},{"level":2,"title":"cfIndex","slug":"cfindex"},{"level":3,"title":"1. bucket","slug":"_1-bucket"}],"relativePath":"blockchain/btcd/indexer模块.md","lastUpdated":1561507892000}',t={},c=[s('<h1 id="blockchain-indexers-模块"><a class="header-anchor" href="#blockchain-indexers-模块" aria-hidden="true">#</a> blockchain/indexers 模块</h1><p>该模块分为两个部分,一个是根据TxHash找Tx,另一个是根据地址找Tx. 主要是针对常用操作建立索引,加快信息查找.</p><h2 id="索引管理"><a class="header-anchor" href="#索引管理" aria-hidden="true">#</a> 索引管理</h2><p>索引管理主要是为了提供统一的接口,让外部可以方便的管理地址索引和Tx的索引. 对外暴露接口</p><div class="language-go line-numbers-mode"><pre><code><span class="token comment">// NewManager returns a new index manager with the provided indexes enabled.</span>\n<span class="token comment">//</span>\n<span class="token comment">// The manager returned satisfies the blockchain.IndexManager interface and thus</span>\n<span class="token comment">// cleanly plugs into the normal blockchain processing path.</span>\n<span class="token keyword">func</span> <span class="token function">NewManager</span><span class="token punctuation">(</span>db database<span class="token punctuation">.</span>DB<span class="token punctuation">,</span> enabledIndexes <span class="token punctuation">[</span><span class="token punctuation">]</span>Indexer<span class="token punctuation">)</span> <span class="token operator">*</span>Manager\n<span class="token comment">// Init initializes the enabled indexes.  This is called during chain</span>\n<span class="token comment">// initialization and primarily consists of catching up all indexes to the</span>\n<span class="token comment">// current best chain tip.  This is necessary since each index can be disabled</span>\n<span class="token comment">// and re-enabled at any time and attempting to catch-up indexes at the same</span>\n<span class="token comment">// time new blocks are being downloaded would lead to an overall longer time to</span>\n<span class="token comment">// catch up due to the I/O contention.</span>\n<span class="token comment">//</span>\n<span class="token comment">// This is part of the blockchain.IndexManager interface.</span>\n<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>Manager<span class="token punctuation">)</span> <span class="token function">Init</span><span class="token punctuation">(</span>chain <span class="token operator">*</span>blockchain<span class="token punctuation">.</span>BlockChain<span class="token punctuation">)</span> <span class="token builtin">error</span>\n<span class="token comment">// ConnectBlock must be invoked when a block is extending the main chain.  It</span>\n<span class="token comment">// keeps track of the state of each index it is managing, performs some sanity</span>\n<span class="token comment">// checks, and invokes each indexer.</span>\n<span class="token comment">//</span>\n<span class="token comment">// This is part of the blockchain.IndexManager interface.</span>\n<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>Manager<span class="token punctuation">)</span> <span class="token function">ConnectBlock</span><span class="token punctuation">(</span>dbTx database<span class="token punctuation">.</span>Tx<span class="token punctuation">,</span> block <span class="token operator">*</span>btcutil<span class="token punctuation">.</span>Block<span class="token punctuation">,</span> view <span class="token operator">*</span>blockchain<span class="token punctuation">.</span>UtxoViewpoint<span class="token punctuation">)</span> <span class="token builtin">error</span>\n<span class="token comment">// DisconnectBlock must be invoked when a block is being disconnected from the</span>\n<span class="token comment">// end of the main chain.  It keeps track of the state of each index it is</span>\n<span class="token comment">// managing, performs some sanity checks, and invokes each indexer to remove</span>\n<span class="token comment">// the index entries associated with the block.</span>\n<span class="token comment">//</span>\n<span class="token comment">// This is part of the blockchain.IndexManager interface.</span>\n<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>Manager<span class="token punctuation">)</span> <span class="token function">DisconnectBlock</span><span class="token punctuation">(</span>dbTx database<span class="token punctuation">.</span>Tx<span class="token punctuation">,</span> block <span class="token operator">*</span>btcutil<span class="token punctuation">.</span>Block<span class="token punctuation">,</span> view <span class="token operator">*</span>blockchain<span class="token punctuation">.</span>UtxoViewpoint<span class="token punctuation">)</span> <span class="token builtin">error</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="索引管理数据库"><a class="header-anchor" href="#索引管理数据库" aria-hidden="true">#</a> 索引管理数据库</h3><p>对应唯一的bucket idxtips 里面存着索引处理到哪一块了,有哪些索引,每个索引处理到第几块了等信息.</p><p>idxtips数据库中的信息</p><table><thead><tr><th>索引名</th><th>内容</th></tr></thead><tbody><tr><td>txHash索引( txbyhashidx)</td><td>最新 blockHash+blockHeight</td></tr><tr><td>通过地址查找Tx( txbyaddridx)</td><td>最新 blockHash+blockHeight</td></tr></tbody></table><div class="language-go line-numbers-mode"><pre><code><span class="token comment">// Indexer provides a generic interface for an indexer that is managed by an</span>\n<span class="token comment">// index manager such as the Manager type provided by this package.</span>\n<span class="token keyword">type</span> Indexer <span class="token keyword">interface</span> <span class="token punctuation">{</span>\n\t<span class="token comment">// Key returns the key of the index as a byte slice.</span>\n\t<span class="token function">Key</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span> <span class="token comment">//这个就是给manager管理用的.</span>\n\n\t<span class="token comment">// Name returns the human-readable name of the index.</span>\n\t<span class="token function">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token comment">//给人看的</span>\n\n\t<span class="token comment">// Create is invoked when the indexer manager determines the index needs</span>\n\t<span class="token comment">// to be created for the first time.</span>\n\t<span class="token function">Create</span><span class="token punctuation">(</span>dbTx database<span class="token punctuation">.</span>Tx<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token comment">//初始化数据库</span>\n\n\t<span class="token comment">// Init is invoked when the index manager is first initializing the</span>\n\t<span class="token comment">// index.  This differs from the Create method in that it is called on</span>\n\t<span class="token comment">// every load, including the case the index was just created. //初始化Indexer</span>\n\t<span class="token function">Init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> \n\n\t<span class="token comment">// ConnectBlock is invoked when the index manager is notified that a new</span>\n\t<span class="token comment">// block has been connected to the main chain. 来了一个新块</span>\n\t<span class="token function">ConnectBlock</span><span class="token punctuation">(</span>dbTx database<span class="token punctuation">.</span>Tx<span class="token punctuation">,</span> block <span class="token operator">*</span>btcutil<span class="token punctuation">.</span>Block<span class="token punctuation">,</span> view <span class="token operator">*</span>blockchain<span class="token punctuation">.</span>UtxoViewpoint<span class="token punctuation">)</span> <span class="token builtin">error</span>\n\n\t<span class="token comment">// DisconnectBlock is invoked when the index manager is notified that a</span>\n\t<span class="token comment">// block has been disconnected from the main chain. 发生了分叉, 移除一个块</span>\n\t<span class="token function">DisconnectBlock</span><span class="token punctuation">(</span>dbTx database<span class="token punctuation">.</span>Tx<span class="token punctuation">,</span> block <span class="token operator">*</span>btcutil<span class="token punctuation">.</span>Block<span class="token punctuation">,</span> view <span class="token operator">*</span>blockchain<span class="token punctuation">.</span>UtxoViewpoint<span class="token punctuation">)</span> <span class="token builtin">error</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="txhash-找tx"><a class="header-anchor" href="#txhash-找tx" aria-hidden="true">#</a> TxHash 找Tx</h2><p>主要是处理ConnectBlock,每一个新块来以后,为相关的Tx建立索引. DisconnectBlock,发生分叉需要移除一个block的时候,这个block中的索引也都删掉.</p><h3 id="数据库"><a class="header-anchor" href="#数据库" aria-hidden="true">#</a> 数据库</h3><ol><li><p>bucket hashbyididx blockNumber-&gt;blockHash 这个Bucket中存的是块号到块hash</p></li><li><p>bucket idbyhashidx blockHash-&gt;blockNumber 从blockhash到块号的映射</p></li><li><p>bucket txbyhashidx TxHash-&gt;Tx索引 映射 Tx索引结构如下:</p></li></ol><table><thead><tr><th>blockNumber</th><th>Tx在该块内字节偏移</th><th>Tx长度</th></tr></thead><tbody><tr><td>4</td><td>4</td><td>4</td></tr><tr><td>这里说的偏移,指的是block序列化以后的偏移,Tx长度指的也是Tx序列化以后的字节长度</td><td></td><td></td></tr></tbody></table><h2 id="addr找tx"><a class="header-anchor" href="#addr找tx" aria-hidden="true">#</a> addr找Tx</h2><p>主要是处理地址到交易的映射,这里说的Tx实际上是Tx索引,也就是上一节中说的blockNumber+TxStart+TxLength 因为addr可能会对应成千上万的交易,所以这部分索引的管理与维护是比较考验技巧的. 他用的是<strong>LSM Tree</strong>,需要以后研究一下.</p><h3 id="数据库-1"><a class="header-anchor" href="#数据库-1" aria-hidden="true">#</a> 数据库</h3><p>bucket txbyaddridx</p><p>可以认为这个数据库中存的是一个地址关联的所有交易的集合.实际上就是把Tx按照地址进行分组整理. [addr]--&gt;[tx,tx,...] 并且tx是有序的,按照发生时间(也就是block number)进行了排序.</p><p>这里的<strong>存储思路需要好好研究一下</strong></p><h2 id="cfindex"><a class="header-anchor" href="#cfindex" aria-hidden="true">#</a> cfIndex</h2><p>// Committed filters come in one flavor currently: basic. They are generated // and dropped in pairs, and both are indexed by a block&#39;s hash. Besides // holding different content, they also live in different buckets. 这里存储的是针对某个block建立的类似bloom过滤器一样的索引. 只不过gcs索引数据更小. 这里的索引针对的是block中消费的pkscript以及生成的pkscript</p><h3 id="_1-bucket"><a class="header-anchor" href="#_1-bucket" aria-hidden="true">#</a> 1. bucket</h3><p>总bucket是cfIndexParentBucketKey 下面还有三个子bucket,分别是</p><h4 id="cf0byhashidx-cfindexkeys"><a class="header-anchor" href="#cf0byhashidx-cfindexkeys" aria-hidden="true">#</a> cf0byhashidx cfIndexKeys</h4><pre><code>// cfIndexKeys is an array of db bucket names used to house indexes of\n// block hashes to cfilters.\n</code></pre><p>blockhash--&gt;所有相关pkscript的索引</p><h4 id="cf0headerbyhashidx-cfheaderkeys"><a class="header-anchor" href="#cf0headerbyhashidx-cfheaderkeys" aria-hidden="true">#</a> cf0headerbyhashidx cfHeaderKeys</h4><pre><code>// cfHeaderKeys is an array of db bucket names used to house indexes of\n// block hashes to cf headers.\n</code></pre><p>blockhash--&gt;hash(cf0hashbyhashidx中的hash,上一块header的hash)</p><h4 id="cf0hashbyhashidx-cfhashkeys"><a class="header-anchor" href="#cf0hashbyhashidx-cfhashkeys" aria-hidden="true">#</a> cf0hashbyhashidx cfHashKeys</h4><pre><code>// cfHashKeys is an array of db bucket names used to house indexes of\n// block hashes to cf hashes.\n</code></pre><p>blockhash--&gt;所有相关pkscript的索引的hash值</p>',34)];t.render=function(s,e,t,p,o,i){return n(),a("div",null,c)};export{e as __pageData,t as default};
