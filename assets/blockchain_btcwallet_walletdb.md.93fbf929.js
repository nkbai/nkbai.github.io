import{_ as n,c as s,o as a,a as e}from"./app.3dd4ae37.js";const d='{"title":"walletdb","description":"","frontmatter":{"title":"walletdb","date":"2019-05-16T07:04:54.904Z","draft":false,"markup":"mmark"},"headers":[{"level":2,"title":"\u5173\u4E8E\u8FD9\u4E9Binterface\u7684\u4F7F\u7528","slug":"\u5173\u4E8E\u8FD9\u4E9Binterface\u7684\u4F7F\u7528"},{"level":3,"title":"1. \u5165\u53E3","slug":"_1-\u5165\u53E3"},{"level":3,"title":"2. \u64CD\u4F5CBucket","slug":"_2-\u64CD\u4F5Cbucket"},{"level":3,"title":"3. \u8BFB\u5199\u6570\u636E","slug":"_3-\u8BFB\u5199\u6570\u636E"},{"level":2,"title":"manage\u548Cunmanage\u63A5\u53E3\u7684\u533A\u522B","slug":"manage\u548Cunmanage\u63A5\u53E3\u7684\u533A\u522B"},{"level":2,"title":"\u63A5\u53E3\u7684\u5B9E\u73B0","slug":"\u63A5\u53E3\u7684\u5B9E\u73B0"}],"relativePath":"blockchain/btcwallet/walletdb.md"}',t={},p=e(`<h1 id="\u6570\u636E\u5E93\u6A21\u5757" tabindex="-1">\u6570\u636E\u5E93\u6A21\u5757 <a class="header-anchor" href="#\u6570\u636E\u5E93\u6A21\u5757" aria-hidden="true">#</a></h1><ul><li>Key/value store</li><li>Namespace support (\u8BF4\u7684\u5C31\u662FNestedBucket)</li><li>Allows multiple packages to have their own area in the database without worrying about conflicts (\u8BF4\u7684\u5C31\u662FNestedBucket)</li><li>Read-only and read-write transactions with both manual and managed modes</li><li>Nested buckets</li><li>Supports registration of backend databases</li><li>Comprehensive test coverage \u4E3B\u8981interface</li></ul><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">type</span> ReadTx <span class="token keyword">interface</span> 
<span class="token keyword">type</span> ReadWriteTx <span class="token keyword">interface</span> 
<span class="token keyword">type</span> ReadBucket <span class="token keyword">interface</span> 
<span class="token keyword">type</span> ReadWriteBucket <span class="token keyword">interface</span>
<span class="token keyword">type</span> ReadCursor <span class="token keyword">interface</span>
<span class="token keyword">type</span> ReadWriteCursor <span class="token keyword">interface</span>
<span class="token keyword">type</span> DB <span class="token keyword">interface</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u5173\u4E8E\u8FD9\u4E9Binterface\u7684\u4F7F\u7528" tabindex="-1">\u5173\u4E8E\u8FD9\u4E9Binterface\u7684\u4F7F\u7528 <a class="header-anchor" href="#\u5173\u4E8E\u8FD9\u4E9Binterface\u7684\u4F7F\u7528" aria-hidden="true">#</a></h2><h3 id="_1-\u5165\u53E3" tabindex="-1">1. \u5165\u53E3 <a class="header-anchor" href="#_1-\u5165\u53E3" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><pre><code>
<span class="token comment">// DB represents an ACID database.  All database access is performed through</span>
<span class="token comment">// read or read+write transactions.</span>
<span class="token keyword">type</span> DB <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token comment">// BeginReadTx opens a database read transaction.</span>
	<span class="token function">BeginReadTx</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>ReadTx<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>

	<span class="token comment">// BeginReadWriteTx opens a database read+write transaction.</span>
	<span class="token function">BeginReadWriteTx</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>ReadWriteTx<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>

	<span class="token comment">// Copy writes a copy of the database to the provided writer.  This</span>
	<span class="token comment">// call will start a read-only transaction to perform all operations.</span>
	<span class="token function">Copy</span><span class="token punctuation">(</span>w io<span class="token punctuation">.</span>Writer<span class="token punctuation">)</span> <span class="token builtin">error</span>

	<span class="token comment">// Close cleanly shuts down the database and syncs all data.</span>
	<span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u901A\u8FC7Driver\u7684Create\u548COpen\u6765\u521B\u5EFADB,\u7136\u540E\u53EF\u4EE5\u901A\u8FC7BeginReadTx\u548CBeginReadWriteTx\u6765\u83B7\u53D6\u8BFB\u5199\u6570\u636E\u5E93\u7684\u65B9\u6CD5</p><h3 id="_2-\u64CD\u4F5Cbucket" tabindex="-1">2. \u64CD\u4F5CBucket <a class="header-anchor" href="#_2-\u64CD\u4F5Cbucket" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">type</span> ReadTx <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token comment">// ReadBucket opens the root bucket for read only access.  If the bucket</span>
	<span class="token comment">// described by the key does not exist, nil is returned.</span>
	<span class="token function">ReadBucket</span><span class="token punctuation">(</span>key <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> ReadBucket

	<span class="token comment">// Rollback closes the transaction, discarding changes (if any) if the</span>
	<span class="token comment">// database was modified by a write transaction.</span>
	<span class="token function">Rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span>
<span class="token punctuation">}</span>
<span class="token comment">// ReadWriteTx represents a database transaction that can be used for both reads</span>
<span class="token comment">// and writes.  When only reads are necessary, consider using a ReadTx instead.</span>
<span class="token keyword">type</span> ReadWriteTx <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	ReadTx

	<span class="token comment">// ReadWriteBucket opens the root bucket for read/write access.  If the</span>
	<span class="token comment">// bucket described by the key does not exist, nil is returned.</span>
	<span class="token function">ReadWriteBucket</span><span class="token punctuation">(</span>key <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> ReadWriteBucket

	<span class="token comment">// CreateTopLevelBucket creates th top level bucket for a key if it</span>
	<span class="token comment">// does not exist.  The newly-created bucket it returned.</span>
	<span class="token function">CreateTopLevelBucket</span><span class="token punctuation">(</span>key <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>ReadWriteBucket<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>

	<span class="token comment">// DeleteTopLevelBucket deletes the top level bucket for a key.  This</span>
	<span class="token comment">// errors if the bucket can not be found or the key keys a single value</span>
	<span class="token comment">// instead of a bucket.</span>
	<span class="token function">DeleteTopLevelBucket</span><span class="token punctuation">(</span>key <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token builtin">error</span>

	<span class="token comment">// Commit commits all changes that have been on the transaction&#39;s root</span>
	<span class="token comment">// buckets and all of their sub-buckets to persistent storage.</span>
	<span class="token function">Commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span>

	<span class="token comment">// OnCommit takes a function closure that will be executed when the</span>
	<span class="token comment">// transaction successfully gets committed.</span>
	<span class="token function">OnCommit</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>\u901A\u8FC7\u63A5\u53E3\u53EF\u4EE5\u770B\u51FAReadTx\u548CReadWriteTx\u4E3B\u8981\u662F\u83B7\u53D6Bucket\u4EE5\u53CA\u5BF9Bucket\u8FDB\u884C\u7BA1\u7406.</p><h3 id="_3-\u8BFB\u5199\u6570\u636E" tabindex="-1">3. \u8BFB\u5199\u6570\u636E <a class="header-anchor" href="#_3-\u8BFB\u5199\u6570\u636E" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><pre><code><span class="token comment">// ReadBucket represents a bucket (a hierarchical structure within the database)</span>
<span class="token comment">// that is only allowed to perform read operations.</span>
<span class="token keyword">type</span> ReadBucket <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token comment">// NestedReadBucket retrieves a nested bucket with the given key.</span>
	<span class="token comment">// Returns nil if the bucket does not exist.</span>
	<span class="token function">NestedReadBucket</span><span class="token punctuation">(</span>key <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> ReadBucket

	<span class="token comment">// ForEach invokes the passed function with every key/value pair in</span>
	<span class="token comment">// the bucket.  This includes nested buckets, in which case the value</span>
	<span class="token comment">// is nil, but it does not include the key/value pairs within those</span>
	<span class="token comment">// nested buckets.</span>
	<span class="token comment">//</span>
	<span class="token comment">// NOTE: The values returned by this function are only valid during a</span>
	<span class="token comment">// transaction.  Attempting to access them after a transaction has ended</span>
	<span class="token comment">// results in undefined behavior.  This constraint prevents additional</span>
	<span class="token comment">// data copies and allows support for memory-mapped database</span>
	<span class="token comment">// implementations.</span>
	<span class="token function">ForEach</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> v <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token builtin">error</span>

	<span class="token comment">// Get returns the value for the given key.  Returns nil if the key does</span>
	<span class="token comment">// not exist in this bucket (or nested buckets).</span>
	<span class="token comment">//</span>
	<span class="token comment">// NOTE: The value returned by this function is only valid during a</span>
	<span class="token comment">// transaction.  Attempting to access it after a transaction has ended</span>
	<span class="token comment">// results in undefined behavior.  This constraint prevents additional</span>
	<span class="token comment">// data copies and allows support for memory-mapped database</span>
	<span class="token comment">// implementations.</span>
	<span class="token function">Get</span><span class="token punctuation">(</span>key <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
	<span class="token comment">//\u8FD9\u4E2A\u63A5\u53E3\u548CforEach\u6709\u5565\u5173\u7CFB,\u5982\u4F55\u4F7F\u7528\u5462?</span>
	<span class="token function">ReadCursor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> ReadCursor
<span class="token punctuation">}</span>
<span class="token comment">// ReadWriteBucket represents a bucket (a hierarchical structure within the</span>
<span class="token comment">// database) that is allowed to perform both read and write operations.</span>
<span class="token keyword">type</span> ReadWriteBucket <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	ReadBucket

	<span class="token comment">// NestedReadWriteBucket retrieves a nested bucket with the given key.</span>
	<span class="token comment">// Returns nil if the bucket does not exist.</span>
	<span class="token function">NestedReadWriteBucket</span><span class="token punctuation">(</span>key <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> ReadWriteBucket

	<span class="token comment">// CreateBucket creates and returns a new nested bucket with the given</span>
	<span class="token comment">// key.  Returns ErrBucketExists if the bucket already exists,</span>
	<span class="token comment">// ErrBucketNameRequired if the key is empty, or ErrIncompatibleValue</span>
	<span class="token comment">// if the key value is otherwise invalid for the particular database</span>
	<span class="token comment">// implementation.  Other errors are possible depending on the</span>
	<span class="token comment">// implementation.</span>
	<span class="token function">CreateBucket</span><span class="token punctuation">(</span>key <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>ReadWriteBucket<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>

	<span class="token comment">// CreateBucketIfNotExists creates and returns a new nested bucket with</span>
	<span class="token comment">// the given key if it does not already exist.  Returns</span>
	<span class="token comment">// ErrBucketNameRequired if the key is empty or ErrIncompatibleValue</span>
	<span class="token comment">// if the key value is otherwise invalid for the particular database</span>
	<span class="token comment">// backend.  Other errors are possible depending on the implementation.</span>
	<span class="token function">CreateBucketIfNotExists</span><span class="token punctuation">(</span>key <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>ReadWriteBucket<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>

	<span class="token comment">// DeleteNestedBucket removes a nested bucket with the given key.</span>
	<span class="token comment">// Returns ErrTxNotWritable if attempted against a read-only transaction</span>
	<span class="token comment">// and ErrBucketNotFound if the specified bucket does not exist.</span>
	<span class="token function">DeleteNestedBucket</span><span class="token punctuation">(</span>key <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token builtin">error</span>

	<span class="token comment">// Put saves the specified key/value pair to the bucket.  Keys that do</span>
	<span class="token comment">// not already exist are added and keys that already exist are</span>
	<span class="token comment">// overwritten.  Returns ErrTxNotWritable if attempted against a</span>
	<span class="token comment">// read-only transaction.</span>
	<span class="token function">Put</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token builtin">error</span>

	<span class="token comment">// Delete removes the specified key from the bucket.  Deleting a key</span>
	<span class="token comment">// that does not exist does not return an error.  Returns</span>
	<span class="token comment">// ErrTxNotWritable if attempted against a read-only transaction.</span>
	<span class="token function">Delete</span><span class="token punctuation">(</span>key <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token builtin">error</span>

	<span class="token comment">// Cursor returns a new cursor, allowing for iteration over the bucket&#39;s</span>
	<span class="token comment">// key/value pairs and nested buckets in forward or backward order.</span>
	<span class="token function">ReadWriteCursor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> ReadWriteCursor

	<span class="token comment">// Tx returns the bucket&#39;s transaction.</span>
	<span class="token function">Tx</span><span class="token punctuation">(</span><span class="token punctuation">)</span> ReadWriteTx
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br></div></div><p>\u771F\u6B63\u7684\u8BFB\u5199\u6570\u636E\u5C31\u662FGet\u548CPut\u4E24\u4E2A,\u8FD8\u6709Delete\u4F1A\u5220\u9664\u6570\u636E.</p><p>Tx\u662F\u5728Bucket\u5C42\u9762\u8FDB\u884C\u7BA1\u7406,\u800CReadWriteBucket\u4E3B\u8981\u662F\u5BF9Bucket\u7684\u5185\u5BB9\u7BA1\u7406,\u540C\u65F6\u4E5F\u4F1A\u7BA1\u7406\u5728\u5F53\u524DBucket\u4E2D\u7684NestedBucket. \u56E0\u6B64Bucket\u548CTx\u662F\u4E92\u76F8\u5D4C\u5957\u7684.</p><h2 id="manage\u548Cunmanage\u63A5\u53E3\u7684\u533A\u522B" tabindex="-1">manage\u548Cunmanage\u63A5\u53E3\u7684\u533A\u522B <a class="header-anchor" href="#manage\u548Cunmanage\u63A5\u53E3\u7684\u533A\u522B" aria-hidden="true">#</a></h2><p>\u76F4\u63A5\u4F7F\u7528\u4E0A\u8FF0\u63A5\u53E3\u901A\u8FC7DB.BeginReadTx\u548CBeginReadWriteTx\u8FDB\u884C\u6570\u636E\u5E93\u64CD\u4F5C\u90FD\u662Funmanage\u7684, \u901A\u8FC7walletdb.View\u548Cwalletdb.Update\u63A5\u53E3\u64CD\u4F5C\u6570\u636E\u5E93\u5219\u662Fmanage\u7684\u65B9\u5F0F</p><h2 id="\u63A5\u53E3\u7684\u5B9E\u73B0" tabindex="-1">\u63A5\u53E3\u7684\u5B9E\u73B0 <a class="header-anchor" href="#\u63A5\u53E3\u7684\u5B9E\u73B0" aria-hidden="true">#</a></h2><p>\u5B9E\u73B0\u53CD\u800C\u6BD4\u8F83\u7B80\u5355,\u57FA\u672C\u4E0A\u662FBoltDB\u7684\u63A5\u53E3\u7684\u7B80\u5355\u5C01\u88C5. \u4E0D\u8FC7\u8FD9\u79CD\u62BD\u8C61\u4E5F\u6709\u597D\u5904,\u5C31\u662F\u540E\u7EED\u53EF\u4EE5\u65B9\u4FBF\u7684\u66FF\u6362\u4E3A\u5176\u4ED6\u6570\u636E\u5E93\u6765\u5B9E\u73B0.</p>`,18),c=[p];function l(o,r,i,u,b,k){return a(),s("div",null,c)}var h=n(t,[["render",l]]);export{d as __pageData,h as default};
