import{_ as n,c as s,o as a,a as p}from"./app.eda6f95c.js";const h='{"title":"\u6BD4\u7279\u5E01\u89E3\u9501\u811A\u672C\u4E2D\u7684ScriptSignature\u90FD\u5305\u542B\u4E86\u4EC0\u4E48\u4E1C\u897F","description":"","frontmatter":{"title":"\u6BD4\u7279\u5E01\u89E3\u9501\u811A\u672C\u4E2D\u7684ScriptSignature\u90FD\u5305\u542B\u4E86\u4EC0\u4E48\u4E1C\u897F","date":"2018-11-13T10:46:41.000Z","draft":false,"markup":"mmark"},"headers":[{"level":2,"title":"\u7B7E\u540D\u5185\u5BB9\u8BA1\u7B97\u65B9\u5F0F","slug":"\u7B7E\u540D\u5185\u5BB9\u8BA1\u7B97\u65B9\u5F0F"}],"relativePath":"blockchain/btcd/\u6BD4\u7279\u5E01\u89E3\u9501\u811A\u672C\u4E2D\u7684ScriptSignature\u90FD\u5305\u542B\u4E86\u4EC0\u4E48\u4E1C\u897F.md"}',t={},e=p(`<h1 id="\u6BD4\u7279\u5E01-script-signature-\u5305\u542B\u4E86\u90A3\u4E9B\u4E1C\u897F" tabindex="-1">\u6BD4\u7279\u5E01 script signature \u5305\u542B\u4E86\u90A3\u4E9B\u4E1C\u897F? <a class="header-anchor" href="#\u6BD4\u7279\u5E01-script-signature-\u5305\u542B\u4E86\u90A3\u4E9B\u4E1C\u897F" aria-hidden="true">#</a></h1><p>\u4F7F\u7528 UTXO \u9700\u8981\u79C1\u94A5\u7B7E\u540D,\u79C1\u94A5\u5230\u5E95\u90FD\u7B7E\u4E86\u4EC0\u4E48\u4E1C\u897F\u5462?\u4E00\u76F4\u6BD4\u8F83\u597D\u5947. \u6BD4\u7279\u5E01\u7684\u79C1\u94A5\u7B7E\u540D\u603B\u5171\u6709\u4E94\u4E2D\u7C7B\u578B,\u5177\u4F53\u89C1 btcd \u4EE3\u7801,\u5982\u4E0B:</p><div class="language-go line-numbers-mode"><pre><code><span class="token comment">// SigHashType represents hash type bits at the end of a signature.</span>
<span class="token keyword">type</span> SigHashType <span class="token builtin">uint32</span>

<span class="token comment">// Hash type bits from the end of a signature.</span>
<span class="token keyword">const</span> <span class="token punctuation">(</span>
	SigHashOld          SigHashType <span class="token operator">=</span> <span class="token number">0x0</span>
	SigHashAll          SigHashType <span class="token operator">=</span> <span class="token number">0x1</span>
	SigHashNone         SigHashType <span class="token operator">=</span> <span class="token number">0x2</span>
	SigHashSingle       SigHashType <span class="token operator">=</span> <span class="token number">0x3</span>
	SigHashAnyOneCanPay SigHashType <span class="token operator">=</span> <span class="token number">0x80</span>

	<span class="token comment">// sigHashMask defines the number of bits of the hash type which is used</span>
	<span class="token comment">// to identify which outputs are signed.</span>
	sigHashMask <span class="token operator">=</span> <span class="token number">0x1f</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h1 id="sighashold-\u548C-sighashall" tabindex="-1">SigHashOld \u548C SigHashAll <a class="header-anchor" href="#sighashold-\u548C-sighashall" aria-hidden="true">#</a></h1><p>\u4ECE\u4EE3\u7801\u770B,\u4E24\u8005\u662F\u4E00\u6837\u7684.\u5177\u4F53\u7B7E\u540D\u5185\u5BB9\u89C1\u56FE.</p><h2 id="\u7B7E\u540D\u5185\u5BB9\u8BA1\u7B97\u65B9\u5F0F" tabindex="-1">\u7B7E\u540D\u5185\u5BB9\u8BA1\u7B97\u65B9\u5F0F <a class="header-anchor" href="#\u7B7E\u540D\u5185\u5BB9\u8BA1\u7B97\u65B9\u5F0F" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><pre><code><span class="token comment">// calcSignatureHash will, given a script and hash type for the current script</span>
<span class="token comment">// engine instance, calculate the signature hash to be used for signing and</span>
<span class="token comment">// verification.</span>
<span class="token comment">//script \u662F\u5F15\u7528\u7684outpoint\u5BF9\u5E94\u7684\u8F93\u51FA\u7684\u9501\u5B9A\u811A\u672C</span>
<span class="token comment">//SigHashType \u53EF\u80FD\u662F</span>
<span class="token comment">// SigHashOld          SigHashType = 0x0</span>
<span class="token comment">// SigHashAll          SigHashType = 0x1</span>
<span class="token comment">// SigHashNone         SigHashType = 0x2</span>
<span class="token comment">// SigHashSingle       SigHashType = 0x3</span>
<span class="token comment">// SigHashAnyOneCanPay SigHashType = 0x80</span>
<span class="token comment">//tx\u662F\u8FD9\u6574\u4E2A\u4EA4\u6613</span>
<span class="token comment">//idx \u662F\u4EA4\u6613\u4E2D\u8F93\u5165\u90E8\u5206\u7684\u7F16\u53F7</span>
<span class="token keyword">func</span> <span class="token function">calcSignatureHash</span><span class="token punctuation">(</span>script <span class="token punctuation">[</span><span class="token punctuation">]</span>parsedOpcode<span class="token punctuation">,</span> hashType SigHashType<span class="token punctuation">,</span> tx <span class="token operator">*</span>wire<span class="token punctuation">.</span>MsgTx<span class="token punctuation">,</span> idx <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span> <span class="token punctuation">{</span>
	<span class="token comment">// The SigHashSingle signature type signs only the corresponding input</span>
	<span class="token comment">// and output (the output with the same index number as the input).</span>
	<span class="token comment">//</span>
	<span class="token comment">// Since transactions can have more inputs than outputs, this means it</span>
	<span class="token comment">// is improper to use SigHashSingle on input indices that don&#39;t have a</span>
	<span class="token comment">// corresponding output.</span>
	<span class="token comment">//</span>
	<span class="token comment">// A bug in the original Satoshi client implementation means specifying</span>
	<span class="token comment">// an index that is out of range results in a signature hash of 1 (as a</span>
	<span class="token comment">// uint256 little endian).  The original intent appeared to be to</span>
	<span class="token comment">// indicate failure, but unfortunately, it was never checked and thus is</span>
	<span class="token comment">// treated as the actual signature hash.  This buggy behavior is now</span>
	<span class="token comment">// part of the consensus and a hard fork would be required to fix it.</span>
	<span class="token comment">//</span>
	<span class="token comment">// Due to this, care must be taken by software that creates transactions</span>
	<span class="token comment">// which make use of SigHashSingle because it can lead to an extremely</span>
	<span class="token comment">// dangerous situation where the invalid inputs will end up signing a</span>
	<span class="token comment">// hash of 1.  This in turn presents an opportunity for attackers to</span>
	<span class="token comment">// cleverly construct transactions which can steal those coins provided</span>
	<span class="token comment">// they can reuse signatures.</span>
	<span class="token keyword">if</span> hashType<span class="token operator">&amp;</span>sigHashMask <span class="token operator">==</span> SigHashSingle <span class="token operator">&amp;&amp;</span> idx <span class="token operator">&gt;=</span> <span class="token function">len</span><span class="token punctuation">(</span>tx<span class="token punctuation">.</span>TxOut<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">var</span> hash chainhash<span class="token punctuation">.</span>Hash
		hash<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0x01</span>
		<span class="token keyword">return</span> hash<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// Remove all instances of OP_CODESEPARATOR from the script.</span>
	script <span class="token operator">=</span> <span class="token function">removeOpcode</span><span class="token punctuation">(</span>script<span class="token punctuation">,</span> OP_CODESEPARATOR<span class="token punctuation">)</span>

	<span class="token comment">// Make a deep copy of the transaction, zeroing out the script for all</span>
	<span class="token comment">// inputs that are not currently being processed.</span>
	txCopy <span class="token operator">:=</span> tx<span class="token punctuation">.</span><span class="token function">Copy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> txCopy<span class="token punctuation">.</span>TxIn <span class="token punctuation">{</span>
		<span class="token keyword">if</span> i <span class="token operator">==</span> idx <span class="token punctuation">{</span>
			<span class="token comment">// UnparseScript cannot fail here because removeOpcode</span>
			<span class="token comment">// above only returns a valid script.</span>
			sigScript<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> <span class="token function">unparseScript</span><span class="token punctuation">(</span>script<span class="token punctuation">)</span>
			txCopy<span class="token punctuation">.</span>TxIn<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">.</span>SignatureScript <span class="token operator">=</span> sigScript
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			txCopy<span class="token punctuation">.</span>TxIn<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>SignatureScript <span class="token operator">=</span> <span class="token boolean">nil</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">switch</span> hashType <span class="token operator">&amp;</span> sigHashMask <span class="token punctuation">{</span>
	<span class="token keyword">case</span> SigHashNone<span class="token punctuation">:</span>
		txCopy<span class="token punctuation">.</span>TxOut <span class="token operator">=</span> txCopy<span class="token punctuation">.</span>TxOut<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">// Empty slice.</span>
		<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> txCopy<span class="token punctuation">.</span>TxIn <span class="token punctuation">{</span>
			<span class="token keyword">if</span> i <span class="token operator">!=</span> idx <span class="token punctuation">{</span>
				txCopy<span class="token punctuation">.</span>TxIn<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>Sequence <span class="token operator">=</span> <span class="token number">0</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

	<span class="token keyword">case</span> SigHashSingle<span class="token punctuation">:</span>
		<span class="token comment">// Resize output array to up to and including requested index.</span>
		txCopy<span class="token punctuation">.</span>TxOut <span class="token operator">=</span> txCopy<span class="token punctuation">.</span>TxOut<span class="token punctuation">[</span><span class="token punctuation">:</span>idx<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span>

		<span class="token comment">// All but current output get zeroed out.</span>
		<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> idx<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
			txCopy<span class="token punctuation">.</span>TxOut<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>Value <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
			txCopy<span class="token punctuation">.</span>TxOut<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>PkScript <span class="token operator">=</span> <span class="token boolean">nil</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// Sequence on all other inputs is 0, too.</span>
		<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> txCopy<span class="token punctuation">.</span>TxIn <span class="token punctuation">{</span>
			<span class="token keyword">if</span> i <span class="token operator">!=</span> idx <span class="token punctuation">{</span>
				txCopy<span class="token punctuation">.</span>TxIn<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>Sequence <span class="token operator">=</span> <span class="token number">0</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

	<span class="token keyword">default</span><span class="token punctuation">:</span>
		<span class="token comment">// Consensus treats undefined hashtypes like normal SigHashAll</span>
		<span class="token comment">// for purposes of hash generation.</span>
		<span class="token keyword">fallthrough</span>
	<span class="token keyword">case</span> SigHashOld<span class="token punctuation">:</span>
		<span class="token keyword">fallthrough</span>
	<span class="token keyword">case</span> SigHashAll<span class="token punctuation">:</span>
		<span class="token comment">// Nothing special here.</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> hashType<span class="token operator">&amp;</span>SigHashAnyOneCanPay <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		txCopy<span class="token punctuation">.</span>TxIn <span class="token operator">=</span> txCopy<span class="token punctuation">.</span>TxIn<span class="token punctuation">[</span>idx <span class="token punctuation">:</span> idx<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// The final hash is the double sha256 of both the serialized modified</span>
	<span class="token comment">// transaction and the hash type (encoded as a 4-byte little-endian</span>
	<span class="token comment">// value) appended.</span>
	wbuf <span class="token operator">:=</span> bytes<span class="token punctuation">.</span><span class="token function">NewBuffer</span><span class="token punctuation">(</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> txCopy<span class="token punctuation">.</span><span class="token function">SerializeSizeStripped</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	txCopy<span class="token punctuation">.</span><span class="token function">SerializeNoWitness</span><span class="token punctuation">(</span>wbuf<span class="token punctuation">)</span>
	binary<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>wbuf<span class="token punctuation">,</span> binary<span class="token punctuation">.</span>LittleEndian<span class="token punctuation">,</span> hashType<span class="token punctuation">)</span>
	<span class="token keyword">return</span> chainhash<span class="token punctuation">.</span><span class="token function">DoubleHashB</span><span class="token punctuation">(</span>wbuf<span class="token punctuation">.</span><span class="token function">Bytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br></div></div>`,7),o=[e];function c(l,i,r,u,k,b){return a(),s("div",null,o)}var d=n(t,[["render",c]]);export{h as __pageData,d as default};
