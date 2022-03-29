import{_ as n,c as s,o as a,a as t}from"./app.b603026e.js";const d='{"title":"mining","description":"","frontmatter":{"title":"mining","date":"2018-11-26T02:01:09.000Z","draft":false,"markup":"mmark"},"headers":[{"level":2,"title":"coinbase \u4EA4\u6613\u957F\u4EC0\u4E48\u6837\u5B50","slug":"coinbase-\u4EA4\u6613\u957F\u4EC0\u4E48\u6837\u5B50"},{"level":2,"title":"\u6316\u77FF\u51FD\u6570","slug":"\u6316\u77FF\u51FD\u6570"},{"level":2,"title":"Transaciton\u7684Priority","slug":"transaciton\u7684priority"}],"relativePath":"blockchain/btcd/mining.md"}',p={},e=t(`<h1 id="mining\u6A21\u5757" tabindex="-1">mining\u6A21\u5757 <a class="header-anchor" href="#mining\u6A21\u5757" aria-hidden="true">#</a></h1><h2 id="coinbase-\u4EA4\u6613\u957F\u4EC0\u4E48\u6837\u5B50" tabindex="-1">coinbase \u4EA4\u6613\u957F\u4EC0\u4E48\u6837\u5B50 <a class="header-anchor" href="#coinbase-\u4EA4\u6613\u957F\u4EC0\u4E48\u6837\u5B50" aria-hidden="true">#</a></h2><p>\u8FD9\u4E2A\u4EA4\u6613\u7684\u8F93\u5165\u5C31\u4E00\u4E2A,TxIn\u5F15\u7528\u7684OutPoint,hash\u503C\u662F0,index\u662F0xffffffff \u8FD9\u4E2AOutPoint\u6BEB\u65E0\u7591\u95EE\u662F\u65E0\u6548\u7684.</p><div class="language-go line-numbers-mode"><pre><code><span class="token comment">// IsCoinBaseTx determines whether or not a transaction is a coinbase.  A coinbase</span>
<span class="token comment">// is a special transaction created by miners that has no inputs.  This is</span>
<span class="token comment">// represented in the block chain by a transaction with a single input that has</span>
<span class="token comment">// a previous output transaction index set to the maximum value along with a</span>
<span class="token comment">// zero hash.</span>
<span class="token comment">//</span>
<span class="token comment">// This function only differs from IsCoinBase in that it works with a raw wire</span>
<span class="token comment">// transaction as opposed to a higher level util transaction.</span>
<span class="token keyword">func</span> <span class="token function">IsCoinBaseTx</span><span class="token punctuation">(</span>msgTx <span class="token operator">*</span>wire<span class="token punctuation">.</span>MsgTx<span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token comment">// A coin base must only have one transaction input.</span>
	<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>msgTx<span class="token punctuation">.</span>TxIn<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">1</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// The previous output of a coin base must have a max value index and</span>
	<span class="token comment">// a zero hash.</span>
	prevOut <span class="token operator">:=</span> <span class="token operator">&amp;</span>msgTx<span class="token punctuation">.</span>TxIn<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>PreviousOutPoint
	<span class="token keyword">if</span> prevOut<span class="token punctuation">.</span>Index <span class="token operator">!=</span> math<span class="token punctuation">.</span>MaxUint32 <span class="token operator">||</span> <span class="token operator">!</span>prevOut<span class="token punctuation">.</span>Hash<span class="token punctuation">.</span><span class="token function">IsEqual</span><span class="token punctuation">(</span>zeroHash<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token comment">// createCoinbaseTx returns a coinbase transaction paying an appropriate subsidy</span>
<span class="token comment">// based on the passed block height to the provided address.  When the address</span>
<span class="token comment">// is nil, the coinbase transaction will instead be redeemable by anyone.</span>
<span class="token comment">//</span>
<span class="token comment">// See the comment for NewBlockTemplate for more information about why the nil</span>
<span class="token comment">// address handling is useful.</span>
<span class="token keyword">func</span> <span class="token function">createCoinbaseTx</span><span class="token punctuation">(</span>params <span class="token operator">*</span>chaincfg<span class="token punctuation">.</span>Params<span class="token punctuation">,</span> coinbaseScript <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> nextBlockHeight <span class="token builtin">int32</span><span class="token punctuation">,</span> addr btcutil<span class="token punctuation">.</span>Address<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>btcutil<span class="token punctuation">.</span>Tx<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// Create the script to pay to the provided payment address if one was</span>
	<span class="token comment">// specified.  Otherwise create a script that allows the coinbase to be</span>
	<span class="token comment">// redeemable by anyone.</span>
	<span class="token keyword">var</span> pkScript <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
	<span class="token keyword">if</span> addr <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">var</span> err <span class="token builtin">error</span>
		pkScript<span class="token punctuation">,</span> err <span class="token operator">=</span> txscript<span class="token punctuation">.</span><span class="token function">PayToAddrScript</span><span class="token punctuation">(</span>addr<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token keyword">var</span> err <span class="token builtin">error</span>
		scriptBuilder <span class="token operator">:=</span> txscript<span class="token punctuation">.</span><span class="token function">NewScriptBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		pkScript<span class="token punctuation">,</span> err <span class="token operator">=</span> scriptBuilder<span class="token punctuation">.</span><span class="token function">AddOp</span><span class="token punctuation">(</span>txscript<span class="token punctuation">.</span>OP_TRUE<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Script</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	tx <span class="token operator">:=</span> wire<span class="token punctuation">.</span><span class="token function">NewMsgTx</span><span class="token punctuation">(</span>wire<span class="token punctuation">.</span>TxVersion<span class="token punctuation">)</span>
	tx<span class="token punctuation">.</span><span class="token function">AddTxIn</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>wire<span class="token punctuation">.</span>TxIn<span class="token punctuation">{</span>
		<span class="token comment">// Coinbase transactions have no inputs, so previous outpoint is</span>
		<span class="token comment">// zero hash and max index.</span>
		PreviousOutPoint<span class="token punctuation">:</span> <span class="token operator">*</span>wire<span class="token punctuation">.</span><span class="token function">NewOutPoint</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>chainhash<span class="token punctuation">.</span>Hash<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
			wire<span class="token punctuation">.</span>MaxPrevOutIndex<span class="token punctuation">)</span><span class="token punctuation">,</span>
		SignatureScript<span class="token punctuation">:</span> coinbaseScript<span class="token punctuation">,</span>
		Sequence<span class="token punctuation">:</span>        wire<span class="token punctuation">.</span>MaxTxInSequenceNum<span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	tx<span class="token punctuation">.</span><span class="token function">AddTxOut</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>wire<span class="token punctuation">.</span>TxOut<span class="token punctuation">{</span>
		Value<span class="token punctuation">:</span>    blockchain<span class="token punctuation">.</span><span class="token function">CalcBlockSubsidy</span><span class="token punctuation">(</span>nextBlockHeight<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">,</span>
		PkScript<span class="token punctuation">:</span> pkScript<span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> btcutil<span class="token punctuation">.</span><span class="token function">NewTx</span><span class="token punctuation">(</span>tx<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br></div></div><h2 id="\u6316\u77FF\u51FD\u6570" tabindex="-1">\u6316\u77FF\u51FD\u6570 <a class="header-anchor" href="#\u6316\u77FF\u51FD\u6570" aria-hidden="true">#</a></h2><p>\u4F4D\u4E8Ecpuminger.go\u4E2D\u7684solveBlock \u5C31\u662F\u66B4\u529B\u7834\u89E3hash\u503C</p><div class="language-go line-numbers-mode"><pre><code><span class="token comment">// solveBlock attempts to find some combination of a nonce, extra nonce, and</span>
<span class="token comment">// current timestamp which makes the passed block hash to a value less than the</span>
<span class="token comment">// target difficulty.  The timestamp is updated periodically and the passed</span>
<span class="token comment">// block is modified with all tweaks during this process.  This means that</span>
<span class="token comment">// when the function returns true, the block is ready for submission.</span>
<span class="token comment">//</span>
<span class="token comment">// This function will return early with false when conditions that trigger a</span>
<span class="token comment">// stale block such as a new block showing up or periodically when there are</span>
<span class="token comment">// new transactions and enough time has elapsed without finding a solution.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>CPUMiner<span class="token punctuation">)</span> <span class="token function">solveBlock</span><span class="token punctuation">(</span>msgBlock <span class="token operator">*</span>wire<span class="token punctuation">.</span>MsgBlock<span class="token punctuation">,</span> blockHeight <span class="token builtin">int32</span><span class="token punctuation">,</span>
	ticker <span class="token operator">*</span>time<span class="token punctuation">.</span>Ticker<span class="token punctuation">,</span> quit <span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>

	<span class="token comment">// Choose a random extra nonce offset for this block template and</span>
	<span class="token comment">// worker.</span>
	enOffset<span class="token punctuation">,</span> err <span class="token operator">:=</span> wire<span class="token punctuation">.</span><span class="token function">RandomUint64</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;Unexpected error while generating random &quot;</span><span class="token operator">+</span>
			<span class="token string">&quot;extra nonce offset: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		enOffset <span class="token operator">=</span> <span class="token number">0</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// Create some convenience variables.</span>
	header <span class="token operator">:=</span> <span class="token operator">&amp;</span>msgBlock<span class="token punctuation">.</span>Header
	targetDifficulty <span class="token operator">:=</span> blockchain<span class="token punctuation">.</span><span class="token function">CompactToBig</span><span class="token punctuation">(</span>header<span class="token punctuation">.</span>Bits<span class="token punctuation">)</span>

	<span class="token comment">// Initial state.</span>
	lastGenerated <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	lastTxUpdate <span class="token operator">:=</span> m<span class="token punctuation">.</span>g<span class="token punctuation">.</span><span class="token function">TxSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">LastUpdated</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	hashesCompleted <span class="token operator">:=</span> <span class="token function">uint64</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

	<span class="token comment">// Note that the entire extra nonce range is iterated and the offset is</span>
	<span class="token comment">// added relying on the fact that overflow will wrap around 0 as</span>
	<span class="token comment">// provided by the Go spec.</span>
	<span class="token keyword">for</span> extraNonce <span class="token operator">:=</span> <span class="token function">uint64</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> extraNonce <span class="token operator">&lt;</span> maxExtraNonce<span class="token punctuation">;</span> extraNonce<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token comment">// Update the extra nonce in the block template with the</span>
		<span class="token comment">// new value by regenerating the coinbase script and</span>
		<span class="token comment">// setting the merkle root to the new value.</span>
		m<span class="token punctuation">.</span>g<span class="token punctuation">.</span><span class="token function">UpdateExtraNonce</span><span class="token punctuation">(</span>msgBlock<span class="token punctuation">,</span> blockHeight<span class="token punctuation">,</span> extraNonce<span class="token operator">+</span>enOffset<span class="token punctuation">)</span>

		<span class="token comment">// Search through the entire nonce range for a solution while</span>
		<span class="token comment">// periodically checking for early quit and stale block</span>
		<span class="token comment">// conditions along with updates to the speed monitor.</span>
		<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token function">uint32</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> maxNonce<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
			<span class="token keyword">select</span> <span class="token punctuation">{</span>
			<span class="token keyword">case</span> <span class="token operator">&lt;-</span>quit<span class="token punctuation">:</span>
				<span class="token keyword">return</span> <span class="token boolean">false</span>

			<span class="token keyword">case</span> <span class="token operator">&lt;-</span>ticker<span class="token punctuation">.</span>C<span class="token punctuation">:</span>
				m<span class="token punctuation">.</span>updateHashes <span class="token operator">&lt;-</span> hashesCompleted
				hashesCompleted <span class="token operator">=</span> <span class="token number">0</span>

				<span class="token comment">// The current block is stale if the best block</span>
				<span class="token comment">// has changed.</span>
				best <span class="token operator">:=</span> m<span class="token punctuation">.</span>g<span class="token punctuation">.</span><span class="token function">BestSnapshot</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
				<span class="token keyword">if</span> <span class="token operator">!</span>header<span class="token punctuation">.</span>PrevBlock<span class="token punctuation">.</span><span class="token function">IsEqual</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>best<span class="token punctuation">.</span>Hash<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">return</span> <span class="token boolean">false</span>
				<span class="token punctuation">}</span>

				<span class="token comment">// The current block is stale if the memory pool</span>
				<span class="token comment">// has been updated since the block template was</span>
				<span class="token comment">// generated and it has been at least one</span>
				<span class="token comment">// minute.</span>
				<span class="token keyword">if</span> lastTxUpdate <span class="token operator">!=</span> m<span class="token punctuation">.</span>g<span class="token punctuation">.</span><span class="token function">TxSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">LastUpdated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
					time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">After</span><span class="token punctuation">(</span>lastGenerated<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Minute<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

					<span class="token keyword">return</span> <span class="token boolean">false</span>
				<span class="token punctuation">}</span>

				m<span class="token punctuation">.</span>g<span class="token punctuation">.</span><span class="token function">UpdateBlockTime</span><span class="token punctuation">(</span>msgBlock<span class="token punctuation">)</span>

			<span class="token keyword">default</span><span class="token punctuation">:</span>
				<span class="token comment">// Non-blocking select to fall through</span>
			<span class="token punctuation">}</span>

			<span class="token comment">// Update the nonce and hash the block header.  Each</span>
			<span class="token comment">// hash is actually a double sha256 (two hashes), so</span>
			<span class="token comment">// increment the number of hashes completed for each</span>
			<span class="token comment">// attempt accordingly.</span>
			header<span class="token punctuation">.</span>Nonce <span class="token operator">=</span> i
			hash <span class="token operator">:=</span> header<span class="token punctuation">.</span><span class="token function">BlockHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			hashesCompleted <span class="token operator">+=</span> <span class="token number">2</span>

			<span class="token comment">// The block is solved when the new block hash is less</span>
			<span class="token comment">// than the target difficulty.  Yay!</span>
			<span class="token keyword">if</span> blockchain<span class="token punctuation">.</span><span class="token function">HashToBig</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>hash<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Cmp</span><span class="token punctuation">(</span>targetDifficulty<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
				m<span class="token punctuation">.</span>updateHashes <span class="token operator">&lt;-</span> hashesCompleted
				<span class="token keyword">return</span> <span class="token boolean">true</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br></div></div><h2 id="transaciton\u7684priority" tabindex="-1">Transaciton\u7684Priority <a class="header-anchor" href="#transaciton\u7684priority" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u770B\u5230\u5728\u653E\u8FDBblock\u7684\u65F6\u5019,\u4F1A\u4F18\u5148\u9009\u62E9priority\u9AD8\u7684Tx.</p>`,9),o=[e];function c(l,r,u,i,k,b){return a(),s("div",null,o)}var h=n(p,[["render",c]]);export{d as __pageData,h as default};
