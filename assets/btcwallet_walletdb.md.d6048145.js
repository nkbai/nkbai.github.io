import{o as n,c as s,e as a}from"./app.26819860.js";const e='{"title":"walletdb","description":"","frontmatter":{"title":"walletdb","date":"2019-05-16T07:04:54.904Z","draft":false,"markup":"mmark"},"headers":[{"level":2,"title":"关于这些interface的使用","slug":"关于这些interface的使用"},{"level":3,"title":"1. 入口","slug":"_1-入口"},{"level":3,"title":"2. 操作Bucket","slug":"_2-操作bucket"},{"level":3,"title":"3. 读写数据","slug":"_3-读写数据"},{"level":2,"title":"manage和unmanage接口的区别","slug":"manage和unmanage接口的区别"},{"level":2,"title":"接口的实现","slug":"接口的实现"}],"relativePath":"btcwallet/walletdb.md","lastUpdated":1561507892000}',t={},p=[a('<h1 id="数据库模块"><a class="header-anchor" href="#数据库模块" aria-hidden="true">#</a> 数据库模块</h1><ul><li>Key/value store</li><li>Namespace support (说的就是NestedBucket)</li><li>Allows multiple packages to have their own area in the database without worrying about conflicts (说的就是NestedBucket)</li><li>Read-only and read-write transactions with both manual and managed modes</li><li>Nested buckets</li><li>Supports registration of backend databases</li><li>Comprehensive test coverage 主要interface</li></ul><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">type</span> ReadTx <span class="token keyword">interface</span> \n<span class="token keyword">type</span> ReadWriteTx <span class="token keyword">interface</span> \n<span class="token keyword">type</span> ReadBucket <span class="token keyword">interface</span> \n<span class="token keyword">type</span> ReadWriteBucket <span class="token keyword">interface</span>\n<span class="token keyword">type</span> ReadCursor <span class="token keyword">interface</span>\n<span class="token keyword">type</span> ReadWriteCursor <span class="token keyword">interface</span>\n<span class="token keyword">type</span> DB <span class="token keyword">interface</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="关于这些interface的使用"><a class="header-anchor" href="#关于这些interface的使用" aria-hidden="true">#</a> 关于这些interface的使用</h2><h3 id="_1-入口"><a class="header-anchor" href="#_1-入口" aria-hidden="true">#</a> 1. 入口</h3><div class="language-go line-numbers-mode"><pre><code>\n<span class="token comment">// DB represents an ACID database.  All database access is performed through</span>\n<span class="token comment">// read or read+write transactions.</span>\n<span class="token keyword">type</span> DB <span class="token keyword">interface</span> <span class="token punctuation">{</span>\n\t<span class="token comment">// BeginReadTx opens a database read transaction.</span>\n\t<span class="token function">BeginReadTx</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>ReadTx<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>\n\n\t<span class="token comment">// BeginReadWriteTx opens a database read+write transaction.</span>\n\t<span class="token function">BeginReadWriteTx</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>ReadWriteTx<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>\n\n\t<span class="token comment">// Copy writes a copy of the database to the provided writer.  This</span>\n\t<span class="token comment">// call will start a read-only transaction to perform all operations.</span>\n\t<span class="token function">Copy</span><span class="token punctuation">(</span>w io<span class="token punctuation">.</span>Writer<span class="token punctuation">)</span> <span class="token builtin">error</span>\n\n\t<span class="token comment">// Close cleanly shuts down the database and syncs all data.</span>\n\t<span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>通过Driver的Create和Open来创建DB,然后可以通过BeginReadTx和BeginReadWriteTx来获取读写数据库的方法</p><h3 id="_2-操作bucket"><a class="header-anchor" href="#_2-操作bucket" aria-hidden="true">#</a> 2. 操作Bucket</h3><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">type</span> ReadTx <span class="token keyword">interface</span> <span class="token punctuation">{</span>\n\t<span class="token comment">// ReadBucket opens the root bucket for read only access.  If the bucket</span>\n\t<span class="token comment">// described by the key does not exist, nil is returned.</span>\n\t<span class="token function">ReadBucket</span><span class="token punctuation">(</span>key <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> ReadBucket\n\n\t<span class="token comment">// Rollback closes the transaction, discarding changes (if any) if the</span>\n\t<span class="token comment">// database was modified by a write transaction.</span>\n\t<span class="token function">Rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// ReadWriteTx represents a database transaction that can be used for both reads</span>\n<span class="token comment">// and writes.  When only reads are necessary, consider using a ReadTx instead.</span>\n<span class="token keyword">type</span> ReadWriteTx <span class="token keyword">interface</span> <span class="token punctuation">{</span>\n\tReadTx\n\n\t<span class="token comment">// ReadWriteBucket opens the root bucket for read/write access.  If the</span>\n\t<span class="token comment">// bucket described by the key does not exist, nil is returned.</span>\n\t<span class="token function">ReadWriteBucket</span><span class="token punctuation">(</span>key <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> ReadWriteBucket\n\n\t<span class="token comment">// CreateTopLevelBucket creates th top level bucket for a key if it</span>\n\t<span class="token comment">// does not exist.  The newly-created bucket it returned.</span>\n\t<span class="token function">CreateTopLevelBucket</span><span class="token punctuation">(</span>key <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>ReadWriteBucket<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>\n\n\t<span class="token comment">// DeleteTopLevelBucket deletes the top level bucket for a key.  This</span>\n\t<span class="token comment">// errors if the bucket can not be found or the key keys a single value</span>\n\t<span class="token comment">// instead of a bucket.</span>\n\t<span class="token function">DeleteTopLevelBucket</span><span class="token punctuation">(</span>key <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token builtin">error</span>\n\n\t<span class="token comment">// Commit commits all changes that have been on the transaction&#39;s root</span>\n\t<span class="token comment">// buckets and all of their sub-buckets to persistent storage.</span>\n\t<span class="token function">Commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span>\n\n\t<span class="token comment">// OnCommit takes a function closure that will be executed when the</span>\n\t<span class="token comment">// transaction successfully gets committed.</span>\n\t<span class="token function">OnCommit</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>通过接口可以看出ReadTx和ReadWriteTx主要是获取Bucket以及对Bucket进行管理.</p><h3 id="_3-读写数据"><a class="header-anchor" href="#_3-读写数据" aria-hidden="true">#</a> 3. 读写数据</h3><div class="language-go line-numbers-mode"><pre><code><span class="token comment">// ReadBucket represents a bucket (a hierarchical structure within the database)</span>\n<span class="token comment">// that is only allowed to perform read operations.</span>\n<span class="token keyword">type</span> ReadBucket <span class="token keyword">interface</span> <span class="token punctuation">{</span>\n\t<span class="token comment">// NestedReadBucket retrieves a nested bucket with the given key.</span>\n\t<span class="token comment">// Returns nil if the bucket does not exist.</span>\n\t<span class="token function">NestedReadBucket</span><span class="token punctuation">(</span>key <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> ReadBucket\n\n\t<span class="token comment">// ForEach invokes the passed function with every key/value pair in</span>\n\t<span class="token comment">// the bucket.  This includes nested buckets, in which case the value</span>\n\t<span class="token comment">// is nil, but it does not include the key/value pairs within those</span>\n\t<span class="token comment">// nested buckets.</span>\n\t<span class="token comment">//</span>\n\t<span class="token comment">// NOTE: The values returned by this function are only valid during a</span>\n\t<span class="token comment">// transaction.  Attempting to access them after a transaction has ended</span>\n\t<span class="token comment">// results in undefined behavior.  This constraint prevents additional</span>\n\t<span class="token comment">// data copies and allows support for memory-mapped database</span>\n\t<span class="token comment">// implementations.</span>\n\t<span class="token function">ForEach</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> v <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token builtin">error</span>\n\n\t<span class="token comment">// Get returns the value for the given key.  Returns nil if the key does</span>\n\t<span class="token comment">// not exist in this bucket (or nested buckets).</span>\n\t<span class="token comment">//</span>\n\t<span class="token comment">// NOTE: The value returned by this function is only valid during a</span>\n\t<span class="token comment">// transaction.  Attempting to access it after a transaction has ended</span>\n\t<span class="token comment">// results in undefined behavior.  This constraint prevents additional</span>\n\t<span class="token comment">// data copies and allows support for memory-mapped database</span>\n\t<span class="token comment">// implementations.</span>\n\t<span class="token function">Get</span><span class="token punctuation">(</span>key <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>\n\t<span class="token comment">//这个接口和forEach有啥关系,如何使用呢?</span>\n\t<span class="token function">ReadCursor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> ReadCursor\n<span class="token punctuation">}</span>\n<span class="token comment">// ReadWriteBucket represents a bucket (a hierarchical structure within the</span>\n<span class="token comment">// database) that is allowed to perform both read and write operations.</span>\n<span class="token keyword">type</span> ReadWriteBucket <span class="token keyword">interface</span> <span class="token punctuation">{</span>\n\tReadBucket\n\n\t<span class="token comment">// NestedReadWriteBucket retrieves a nested bucket with the given key.</span>\n\t<span class="token comment">// Returns nil if the bucket does not exist.</span>\n\t<span class="token function">NestedReadWriteBucket</span><span class="token punctuation">(</span>key <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> ReadWriteBucket\n\n\t<span class="token comment">// CreateBucket creates and returns a new nested bucket with the given</span>\n\t<span class="token comment">// key.  Returns ErrBucketExists if the bucket already exists,</span>\n\t<span class="token comment">// ErrBucketNameRequired if the key is empty, or ErrIncompatibleValue</span>\n\t<span class="token comment">// if the key value is otherwise invalid for the particular database</span>\n\t<span class="token comment">// implementation.  Other errors are possible depending on the</span>\n\t<span class="token comment">// implementation.</span>\n\t<span class="token function">CreateBucket</span><span class="token punctuation">(</span>key <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>ReadWriteBucket<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>\n\n\t<span class="token comment">// CreateBucketIfNotExists creates and returns a new nested bucket with</span>\n\t<span class="token comment">// the given key if it does not already exist.  Returns</span>\n\t<span class="token comment">// ErrBucketNameRequired if the key is empty or ErrIncompatibleValue</span>\n\t<span class="token comment">// if the key value is otherwise invalid for the particular database</span>\n\t<span class="token comment">// backend.  Other errors are possible depending on the implementation.</span>\n\t<span class="token function">CreateBucketIfNotExists</span><span class="token punctuation">(</span>key <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>ReadWriteBucket<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>\n\n\t<span class="token comment">// DeleteNestedBucket removes a nested bucket with the given key.</span>\n\t<span class="token comment">// Returns ErrTxNotWritable if attempted against a read-only transaction</span>\n\t<span class="token comment">// and ErrBucketNotFound if the specified bucket does not exist.</span>\n\t<span class="token function">DeleteNestedBucket</span><span class="token punctuation">(</span>key <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token builtin">error</span>\n\n\t<span class="token comment">// Put saves the specified key/value pair to the bucket.  Keys that do</span>\n\t<span class="token comment">// not already exist are added and keys that already exist are</span>\n\t<span class="token comment">// overwritten.  Returns ErrTxNotWritable if attempted against a</span>\n\t<span class="token comment">// read-only transaction.</span>\n\t<span class="token function">Put</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token builtin">error</span>\n\n\t<span class="token comment">// Delete removes the specified key from the bucket.  Deleting a key</span>\n\t<span class="token comment">// that does not exist does not return an error.  Returns</span>\n\t<span class="token comment">// ErrTxNotWritable if attempted against a read-only transaction.</span>\n\t<span class="token function">Delete</span><span class="token punctuation">(</span>key <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token builtin">error</span>\n\n\t<span class="token comment">// Cursor returns a new cursor, allowing for iteration over the bucket&#39;s</span>\n\t<span class="token comment">// key/value pairs and nested buckets in forward or backward order.</span>\n\t<span class="token function">ReadWriteCursor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> ReadWriteCursor\n\n\t<span class="token comment">// Tx returns the bucket&#39;s transaction.</span>\n\t<span class="token function">Tx</span><span class="token punctuation">(</span><span class="token punctuation">)</span> ReadWriteTx\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br></div></div><p>真正的读写数据就是Get和Put两个,还有Delete会删除数据.</p><p>Tx是在Bucket层面进行管理,而ReadWriteBucket主要是对Bucket的内容管理,同时也会管理在当前Bucket中的NestedBucket. 因此Bucket和Tx是互相嵌套的.</p><h2 id="manage和unmanage接口的区别"><a class="header-anchor" href="#manage和unmanage接口的区别" aria-hidden="true">#</a> manage和unmanage接口的区别</h2><p>直接使用上述接口通过DB.BeginReadTx和BeginReadWriteTx进行数据库操作都是unmanage的, 通过walletdb.View和walletdb.Update接口操作数据库则是manage的方式</p><h2 id="接口的实现"><a class="header-anchor" href="#接口的实现" aria-hidden="true">#</a> 接口的实现</h2><p>实现反而比较简单,基本上是BoltDB的接口的简单封装. 不过这种抽象也有好处,就是后续可以方便的替换为其他数据库来实现.</p>',18)];t.render=function(a,e,t,c,l,o){return n(),s("div",null,p)};export{e as __pageData,t as default};
