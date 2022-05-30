import{_ as n,c as s,o as a,a as t}from"./app.8e8e8923.js";const d='{"title":"mruMap","description":"","frontmatter":{"title":"mruMap","date":"2018-11-21T06:21:40.000Z","draft":false,"markup":"mmark"},"headers":[],"relativePath":"blockchain/btcd/mruMap.md"}',p={},e=t(`<h1 id="\u6BD4\u7279\u5E01\u4E2Dmrumap\u7684\u5B9E\u73B0" tabindex="-1">\u6BD4\u7279\u5E01\u4E2DmruMap\u7684\u5B9E\u73B0 <a class="header-anchor" href="#\u6BD4\u7279\u5E01\u4E2Dmrumap\u7684\u5B9E\u73B0" aria-hidden="true">#</a></h1><p>\u7279\u6027</p><ul><li>\u5E26\u9501,\u5E76\u53D1\u8BBF\u95EE</li><li>\u6570\u91CF\u6709\u4E0A\u9650</li><li>\u81EA\u52A8\u79FB\u9664\u6700\u4E0D\u5E38\u7528</li></ul><p>\u4E3B\u8981\u63A5\u53E3\u8BF4\u660E:</p><ol><li>Exists \u5224\u65AD\u67D0\u4E2A\u5143\u7D20\u662F\u5426\u5B58\u5728</li><li>Add \u8D77\u5230\u6DFB\u52A0\u548C\u6807\u8BB0\u4F7F\u7528\u7684\u53CC\u91CD\u4F5C\u7528</li><li>Delete\u4E3B\u52A8\u5220\u9664</li></ol><p>\u6027\u80FD\u8BF4\u660E: \u589E\u5220\u6539\u67E5\u90FD\u662FO(1)</p><ul><li>\u67E5\u7528\u7684\u662FMap,\u63A5\u8FD1O(1),</li><li>\u589E\u5220\u66F4\u65B0,\u90FD\u662F\u7528\u7684\u53CC\u5411\u94FE\u8868List</li></ul><p>\u5176\u4ED6\u95EE\u9898: \u8981\u6C42\u5B58\u50A8\u7684\u5143\u7D20\u5FC5\u987B\u80FD\u591F\u4F5C\u4E3Amap\u7684key</p><p>\u53C2\u8003\u5B9E\u73B0</p><div class="language-go line-numbers-mode"><pre><code><span class="token comment">// mruNonceMap provides a concurrency safe map that is limited to a maximum</span>
<span class="token comment">// number of items with eviction for the oldest entry when the limit is</span>
<span class="token comment">// exceeded.</span>
<span class="token keyword">type</span> mruNonceMap <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	mtx       sync<span class="token punctuation">.</span>Mutex
	nonceMap  <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">uint64</span><span class="token punctuation">]</span><span class="token operator">*</span>list<span class="token punctuation">.</span>Element <span class="token comment">// nearly O(1) lookups</span>
	nonceList <span class="token operator">*</span>list<span class="token punctuation">.</span>List               <span class="token comment">// O(1) insert, update, delete</span>
	limit     <span class="token builtin">uint</span>
<span class="token punctuation">}</span>

<span class="token comment">// Exists returns whether or not the passed nonce is in the map.</span>
<span class="token comment">//</span>
<span class="token comment">// This function is safe for concurrent access.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>mruNonceMap<span class="token punctuation">)</span> <span class="token function">Exists</span><span class="token punctuation">(</span>nonce <span class="token builtin">uint64</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	m<span class="token punctuation">.</span>mtx<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token boolean">_</span><span class="token punctuation">,</span> exists <span class="token operator">:=</span> m<span class="token punctuation">.</span>nonceMap<span class="token punctuation">[</span>nonce<span class="token punctuation">]</span>
	m<span class="token punctuation">.</span>mtx<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">return</span> exists
<span class="token punctuation">}</span>

<span class="token comment">// Add adds the passed nonce to the map and handles eviction of the oldest item</span>
<span class="token comment">// if adding the new item would exceed the max limit.  Adding an existing item</span>
<span class="token comment">// makes it the most recently used item.</span>
<span class="token comment">//</span>
<span class="token comment">// This function is safe for concurrent access.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>mruNonceMap<span class="token punctuation">)</span> <span class="token function">Add</span><span class="token punctuation">(</span>nonce <span class="token builtin">uint64</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	m<span class="token punctuation">.</span>mtx<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> m<span class="token punctuation">.</span>mtx<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// When the limit is zero, nothing can be added to the map, so just</span>
	<span class="token comment">// return.</span>
	<span class="token keyword">if</span> m<span class="token punctuation">.</span>limit <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// When the entry already exists move it to the front of the list</span>
	<span class="token comment">// thereby marking it most recently used.</span>
	<span class="token keyword">if</span> node<span class="token punctuation">,</span> exists <span class="token operator">:=</span> m<span class="token punctuation">.</span>nonceMap<span class="token punctuation">[</span>nonce<span class="token punctuation">]</span><span class="token punctuation">;</span> exists <span class="token punctuation">{</span>
		m<span class="token punctuation">.</span>nonceList<span class="token punctuation">.</span><span class="token function">MoveToFront</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// Evict the least recently used entry (back of the list) if the the new</span>
	<span class="token comment">// entry would exceed the size limit for the map.  Also reuse the list</span>
	<span class="token comment">// node so a new one doesn&#39;t have to be allocated.</span>
	<span class="token keyword">if</span> <span class="token function">uint</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>nonceMap<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span> <span class="token operator">&gt;</span> m<span class="token punctuation">.</span>limit <span class="token punctuation">{</span>
		node <span class="token operator">:=</span> m<span class="token punctuation">.</span>nonceList<span class="token punctuation">.</span><span class="token function">Back</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		lru <span class="token operator">:=</span> node<span class="token punctuation">.</span>Value<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">uint64</span><span class="token punctuation">)</span>

		<span class="token comment">// Evict least recently used item.</span>
		<span class="token function">delete</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>nonceMap<span class="token punctuation">,</span> lru<span class="token punctuation">)</span>

		<span class="token comment">// Reuse the list node of the item that was just evicted for the</span>
		<span class="token comment">// new item.</span>
		node<span class="token punctuation">.</span>Value <span class="token operator">=</span> nonce
		m<span class="token punctuation">.</span>nonceList<span class="token punctuation">.</span><span class="token function">MoveToFront</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
		m<span class="token punctuation">.</span>nonceMap<span class="token punctuation">[</span>nonce<span class="token punctuation">]</span> <span class="token operator">=</span> node
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// The limit hasn&#39;t been reached yet, so just add the new item.</span>
	node <span class="token operator">:=</span> m<span class="token punctuation">.</span>nonceList<span class="token punctuation">.</span><span class="token function">PushFront</span><span class="token punctuation">(</span>nonce<span class="token punctuation">)</span>
	m<span class="token punctuation">.</span>nonceMap<span class="token punctuation">[</span>nonce<span class="token punctuation">]</span> <span class="token operator">=</span> node
<span class="token punctuation">}</span>

<span class="token comment">// Delete deletes the passed nonce from the map (if it exists).</span>
<span class="token comment">//</span>
<span class="token comment">// This function is safe for concurrent access.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>mruNonceMap<span class="token punctuation">)</span> <span class="token function">Delete</span><span class="token punctuation">(</span>nonce <span class="token builtin">uint64</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	m<span class="token punctuation">.</span>mtx<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> node<span class="token punctuation">,</span> exists <span class="token operator">:=</span> m<span class="token punctuation">.</span>nonceMap<span class="token punctuation">[</span>nonce<span class="token punctuation">]</span><span class="token punctuation">;</span> exists <span class="token punctuation">{</span>
		m<span class="token punctuation">.</span>nonceList<span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
		<span class="token function">delete</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>nonceMap<span class="token punctuation">,</span> nonce<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	m<span class="token punctuation">.</span>mtx<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// newMruNonceMap returns a new nonce map that is limited to the number of</span>
<span class="token comment">// entries specified by limit.  When the number of entries exceeds the limit,</span>
<span class="token comment">// the oldest (least recently used) entry will be removed to make room for the</span>
<span class="token comment">// new entry.</span>
<span class="token keyword">func</span> <span class="token function">newMruNonceMap</span><span class="token punctuation">(</span>limit <span class="token builtin">uint</span><span class="token punctuation">)</span> <span class="token operator">*</span>mruNonceMap <span class="token punctuation">{</span>
	m <span class="token operator">:=</span> mruNonceMap<span class="token punctuation">{</span>
		nonceMap<span class="token punctuation">:</span>  <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">uint64</span><span class="token punctuation">]</span><span class="token operator">*</span>list<span class="token punctuation">.</span>Element<span class="token punctuation">)</span><span class="token punctuation">,</span>
		nonceList<span class="token punctuation">:</span> list<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		limit<span class="token punctuation">:</span>     limit<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>m
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br></div></div>`,10),o=[e];function c(l,u,i,r,k,m){return a(),s("div",null,o)}var f=n(p,[["render",c]]);export{d as __pageData,f as default};
