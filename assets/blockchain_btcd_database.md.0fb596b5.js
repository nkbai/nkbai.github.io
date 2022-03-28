import{_ as n,c as s,o as a,a as e}from"./app.e7435feb.js";const d='{"title":"database","description":"","frontmatter":{"title":"database","date":"2018-11-30T03:54:04.000Z","draft":false,"markup":"mmark"},"headers":[{"level":2,"title":"\u5757\u7684\u5B58\u50A8","slug":"\u5757\u7684\u5B58\u50A8"},{"level":2,"title":"\u63A5\u53E3","slug":"\u63A5\u53E3"}],"relativePath":"blockchain/btcd/database.md"}',t={},p=e(`<h1 id="btcd\u6570\u636E\u5E93\u8BBE\u8BA1" tabindex="-1">btcd\u6570\u636E\u5E93\u8BBE\u8BA1 <a class="header-anchor" href="#btcd\u6570\u636E\u5E93\u8BBE\u8BA1" aria-hidden="true">#</a></h1><h2 id="\u5757\u7684\u5B58\u50A8" tabindex="-1">\u5757\u7684\u5B58\u50A8 <a class="header-anchor" href="#\u5757\u7684\u5B58\u50A8" aria-hidden="true">#</a></h2><p>\u7531\u4E8E\u533A\u5757\u94FE\u5757\u4FE1\u606F\u7684\u4E0D\u53D8\u6027,btcd\u5C06\u6574\u4E2A\u6BD4\u7279\u5E01\u7684\u533A\u5757\u60F3\u8C61\u6210\u4E00\u4E2A\u8D85\u7EA7\u5927\u7684\u5E73\u5766\u6587\u4EF6,\u5757\u4E0E\u5757\u76F8\u90BB\u5B58\u653E. \u7531\u4E8E\u6587\u4EF6\u7CFB\u7EDF\u7684\u9650\u5236,\u5C06\u8FD9\u4E2A\u8D85\u7EA7\u5927\u6587\u4EF6\u62C6\u5206\u6210n\u591A\u6587\u4EF6\u5757,\u6BCF\u5757\u90FD\u662F512M. \u5047\u5B9A\u6211\u77E5\u9053\u6211\u8981\u8BFB\u7684\u7B2C3000block\u7684\u8D77\u59CB\u662F1000000000000,\u5927\u5C0F\u662F3M,\u90A3\u4E48\u5F88\u7B80\u5355\u7684\u7B97\u6CD5. \u4E00\u4E2A\u6587\u4EF6\u5757\u662F512M\u5B57\u8282=512<em>1024</em>1024=536870912\u5B57\u8282, \u56E0\u6B64,\u6211\u4F4D\u4E8E\u7B2C1862(1000000000000/536870912)\u6587\u4EF6\u5757,\u6587\u4EF6\u5757\u5185\u504F\u79FB\u662F346361856(1000000000000%536870912)\u5B57\u8282, \u90A3\u4E48\u6211\u5C31\u8BFB\u53D6\u7B2C1862\u6587\u4EF6\u5757\u4E2D\u7684346361856\u5230349507584\u5373\u53EF.</p><p>\u5F53\u7136\u5177\u4F53\u5B9E\u73B0\u8FD8\u8981\u8003\u8651\u5230\u7F13\u5B58\u4EE5\u53CAblock\u8DE8\u8D8A\u6587\u4EF6\u5757\u7684\u95EE\u9898</p><h2 id="\u63A5\u53E3" tabindex="-1">\u63A5\u53E3 <a class="header-anchor" href="#\u63A5\u53E3" aria-hidden="true">#</a></h2><p>btcd\u5173\u4E8E\u6570\u636E\u7684\u8BBE\u8BA1\u5B8C\u5168\u662F\u9762\u5411\u63A5\u53E3\u7684,\u6700\u7EC8\u66B4\u9732\u51FA\u6765\u7684\u662Fffldb/interface.go\u4E2D\u7684\u51E0\u4E2A\u63A5\u53E3, \u4E3B\u8981\u662FDB,Cursor,Bucket,Tx \u5168\u90E8\u90FD\u662F\u63A5\u53E3. \u771F\u6B63\u7684\u5B9E\u73B0\u4F4D\u4E8Effldb/db.go\u4E2D</p><ul><li>Bucket\u662F\u771F\u6B63\u5B58\u6570\u636E\u7684\u5730\u65B9,\u5E76\u4E14\u63D0\u4F9B\u4E86\u76F4\u63A5\u8BFB\u5199KV\u63A5\u53E3</li><li>\u4E00\u7EC4\u8BFB\u5199Bucket\u4F7F\u7528Tx\u8FDB\u884C\u7BA1\u7406,</li><li>Cursor\u662F\u7528\u6765\u904D\u5386Bucket</li></ul><div class="language-go line-numbers-mode"><pre><code><span class="token comment">// db represents a collection of namespaces which are persisted and implements</span>
<span class="token comment">// the database.DB interface.  All database access is performed through</span>
<span class="token comment">// transactions which are obtained through the specific Namespace.</span>
<span class="token keyword">type</span> db <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	writeLock sync<span class="token punctuation">.</span>Mutex   <span class="token comment">// Limit to one write transaction at a time.</span>
	closeLock sync<span class="token punctuation">.</span>RWMutex <span class="token comment">// Make database close block while txns active.</span>
	closed    <span class="token builtin">bool</span>         <span class="token comment">// Is the database closed?</span>
	store     <span class="token operator">*</span>blockStore  <span class="token comment">// Handles read/writing blocks to flat files.</span>
	cache     <span class="token operator">*</span>dbCache     <span class="token comment">// Cache layer which wraps underlying leveldb DB.</span>
<span class="token punctuation">}</span>
<span class="token comment">// transaction represents a database transaction.  It can either be read-only or</span>
<span class="token comment">// read-write and implements the database.Bucket interface.  The transaction</span>
<span class="token comment">// provides a root bucket against which all read and writes occur.</span>
<span class="token keyword">type</span> transaction <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	managed        <span class="token builtin">bool</span>             <span class="token comment">// Is the transaction managed?</span>
	closed         <span class="token builtin">bool</span>             <span class="token comment">// Is the transaction closed?</span>
	writable       <span class="token builtin">bool</span>             <span class="token comment">// Is the transaction writable?</span>
	db             <span class="token operator">*</span>db              <span class="token comment">// DB instance the tx was created from.</span>
	snapshot       <span class="token operator">*</span>dbCacheSnapshot <span class="token comment">// Underlying snapshot for txns.</span>
	metaBucket     <span class="token operator">*</span>bucket          <span class="token comment">// The root metadata bucket.</span>
	blockIdxBucket <span class="token operator">*</span>bucket          <span class="token comment">// The block index bucket.</span>

	<span class="token comment">// Blocks that need to be stored on commit.  The pendingBlocks map is</span>
	<span class="token comment">// kept to allow quick lookups of pending data by block hash.</span>
	pendingBlocks    <span class="token keyword">map</span><span class="token punctuation">[</span>chainhash<span class="token punctuation">.</span>Hash<span class="token punctuation">]</span><span class="token builtin">int</span>
	pendingBlockData <span class="token punctuation">[</span><span class="token punctuation">]</span>pendingBlock

	<span class="token comment">// Keys that need to be stored or deleted on commit.</span>
	pendingKeys   <span class="token operator">*</span>treap<span class="token punctuation">.</span>Mutable
	pendingRemove <span class="token operator">*</span>treap<span class="token punctuation">.</span>Mutable

	<span class="token comment">// Active iterators that need to be notified when the pending keys have</span>
	<span class="token comment">// been updated so the cursors can properly handle updates to the</span>
	<span class="token comment">// transaction state.</span>
	activeIterLock sync<span class="token punctuation">.</span>RWMutex
	activeIters    <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>treap<span class="token punctuation">.</span>Iterator
<span class="token punctuation">}</span>
<span class="token comment">// bucket is an internal type used to represent a collection of key/value pairs</span>
<span class="token comment">// and implements the database.Bucket interface.</span>
<span class="token keyword">type</span> bucket <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	tx <span class="token operator">*</span>transaction
	id <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
<span class="token punctuation">}</span>
<span class="token comment">// cursor is an internal type used to represent a cursor over key/value pairs</span>
<span class="token comment">// and nested buckets of a bucket and implements the database.Cursor interface.</span>
<span class="token keyword">type</span> cursor <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	bucket      <span class="token operator">*</span>bucket
	dbIter      iterator<span class="token punctuation">.</span>Iterator
	pendingIter iterator<span class="token punctuation">.</span>Iterator
	currentIter iterator<span class="token punctuation">.</span>Iterator
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><p>\u8FD9\u91CC\u9762\u5B9E\u73B0\u673A\u5236\u6BD4\u8F83\u590D\u6742,\u57FA\u672C\u601D\u8DEF\u662F\u7528leveldb\u6765\u5B58block\u7684\u5143\u6570\u636E\u4FE1\u606F,\u771F\u6B63\u7684block\u662F\u6309\u7167\u6587\u4EF6\u8FDB\u884C\u5B58\u50A8\u7684. \u8FD9\u6837\u7684\u8BBE\u8BA1\u597D\u5904\u662F\u89C4\u907F\u4E86leveldb\u5199\u5927\u91CF\u6570\u636E\u65F6\u7684\u4F4E\u6027\u80FD\u95EE\u9898.</p><p>\u540C\u65F6\u8FD8\u6709\u7F13\u5B58\u7BA1\u7406,\u5C24\u5176\u662Ftransaction\u4E2D\u4F7F\u7528\u7684treap\u6A21\u5757 \u5F88\u6709\u610F\u601D,\u9700\u8981\u4E13\u95E8\u82B1\u65F6\u95F4\u7814\u7A76, treap\u8FD9\u4E2A\u6570\u636E\u7ED3\u6784\u53EF\u4EE5\u505A\u5230\u68C0\u7D22,\u63D2\u5165,\u5220\u9664\u90FD\u662FO(logn), \u662F\u4E00\u4E2A\u6BD4\u8F83\u5DE7\u5999\u7684\u8BBE\u8BA1.</p>`,10),c=[p];function o(l,r,i,b,u,m){return a(),s("div",null,c)}var h=n(t,[["render",o]]);export{d as __pageData,h as default};
