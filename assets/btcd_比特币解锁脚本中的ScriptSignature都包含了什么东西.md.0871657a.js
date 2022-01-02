import{o as n,c as s,e as a}from"./app.f7f738b8.js";const p='{"title":"比特币解锁脚本中的ScriptSignature都包含了什么东西","description":"","frontmatter":{"title":"比特币解锁脚本中的ScriptSignature都包含了什么东西","date":"2018-11-13T10:46:41.000Z","draft":false,"markup":"mmark"},"headers":[{"level":2,"title":"签名内容计算方式","slug":"签名内容计算方式"}],"relativePath":"btcd/比特币解锁脚本中的ScriptSignature都包含了什么东西.md","lastUpdated":1561507892000}',t={},e=[a('<h1 id="比特币-script-signature-包含了那些东西"><a class="header-anchor" href="#比特币-script-signature-包含了那些东西" aria-hidden="true">#</a> 比特币 script signature 包含了那些东西?</h1><p>使用 UTXO 需要私钥签名,私钥到底都签了什么东西呢?一直比较好奇. 比特币的私钥签名总共有五中类型,具体见 btcd 代码,如下:</p><div class="language-go line-numbers-mode"><pre><code><span class="token comment">// SigHashType represents hash type bits at the end of a signature.</span>\n<span class="token keyword">type</span> SigHashType <span class="token builtin">uint32</span>\n\n<span class="token comment">// Hash type bits from the end of a signature.</span>\n<span class="token keyword">const</span> <span class="token punctuation">(</span>\n\tSigHashOld          SigHashType <span class="token operator">=</span> <span class="token number">0x0</span>\n\tSigHashAll          SigHashType <span class="token operator">=</span> <span class="token number">0x1</span>\n\tSigHashNone         SigHashType <span class="token operator">=</span> <span class="token number">0x2</span>\n\tSigHashSingle       SigHashType <span class="token operator">=</span> <span class="token number">0x3</span>\n\tSigHashAnyOneCanPay SigHashType <span class="token operator">=</span> <span class="token number">0x80</span>\n\n\t<span class="token comment">// sigHashMask defines the number of bits of the hash type which is used</span>\n\t<span class="token comment">// to identify which outputs are signed.</span>\n\tsigHashMask <span class="token operator">=</span> <span class="token number">0x1f</span>\n<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h1 id="sighashold-和-sighashall"><a class="header-anchor" href="#sighashold-和-sighashall" aria-hidden="true">#</a> SigHashOld 和 SigHashAll</h1><p>从代码看,两者是一样的.具体签名内容见图.</p><h2 id="签名内容计算方式"><a class="header-anchor" href="#签名内容计算方式" aria-hidden="true">#</a> 签名内容计算方式</h2><div class="language-go line-numbers-mode"><pre><code><span class="token comment">// calcSignatureHash will, given a script and hash type for the current script</span>\n<span class="token comment">// engine instance, calculate the signature hash to be used for signing and</span>\n<span class="token comment">// verification.</span>\n<span class="token comment">//script 是引用的outpoint对应的输出的锁定脚本</span>\n<span class="token comment">//SigHashType 可能是</span>\n<span class="token comment">// SigHashOld          SigHashType = 0x0</span>\n<span class="token comment">// SigHashAll          SigHashType = 0x1</span>\n<span class="token comment">// SigHashNone         SigHashType = 0x2</span>\n<span class="token comment">// SigHashSingle       SigHashType = 0x3</span>\n<span class="token comment">// SigHashAnyOneCanPay SigHashType = 0x80</span>\n<span class="token comment">//tx是这整个交易</span>\n<span class="token comment">//idx 是交易中输入部分的编号</span>\n<span class="token keyword">func</span> <span class="token function">calcSignatureHash</span><span class="token punctuation">(</span>script <span class="token punctuation">[</span><span class="token punctuation">]</span>parsedOpcode<span class="token punctuation">,</span> hashType SigHashType<span class="token punctuation">,</span> tx <span class="token operator">*</span>wire<span class="token punctuation">.</span>MsgTx<span class="token punctuation">,</span> idx <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span> <span class="token punctuation">{</span>\n\t<span class="token comment">// The SigHashSingle signature type signs only the corresponding input</span>\n\t<span class="token comment">// and output (the output with the same index number as the input).</span>\n\t<span class="token comment">//</span>\n\t<span class="token comment">// Since transactions can have more inputs than outputs, this means it</span>\n\t<span class="token comment">// is improper to use SigHashSingle on input indices that don&#39;t have a</span>\n\t<span class="token comment">// corresponding output.</span>\n\t<span class="token comment">//</span>\n\t<span class="token comment">// A bug in the original Satoshi client implementation means specifying</span>\n\t<span class="token comment">// an index that is out of range results in a signature hash of 1 (as a</span>\n\t<span class="token comment">// uint256 little endian).  The original intent appeared to be to</span>\n\t<span class="token comment">// indicate failure, but unfortunately, it was never checked and thus is</span>\n\t<span class="token comment">// treated as the actual signature hash.  This buggy behavior is now</span>\n\t<span class="token comment">// part of the consensus and a hard fork would be required to fix it.</span>\n\t<span class="token comment">//</span>\n\t<span class="token comment">// Due to this, care must be taken by software that creates transactions</span>\n\t<span class="token comment">// which make use of SigHashSingle because it can lead to an extremely</span>\n\t<span class="token comment">// dangerous situation where the invalid inputs will end up signing a</span>\n\t<span class="token comment">// hash of 1.  This in turn presents an opportunity for attackers to</span>\n\t<span class="token comment">// cleverly construct transactions which can steal those coins provided</span>\n\t<span class="token comment">// they can reuse signatures.</span>\n\t<span class="token keyword">if</span> hashType<span class="token operator">&amp;</span>sigHashMask <span class="token operator">==</span> SigHashSingle <span class="token operator">&amp;&amp;</span> idx <span class="token operator">&gt;=</span> <span class="token function">len</span><span class="token punctuation">(</span>tx<span class="token punctuation">.</span>TxOut<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">var</span> hash chainhash<span class="token punctuation">.</span>Hash\n\t\thash<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0x01</span>\n\t\t<span class="token keyword">return</span> hash<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token comment">// Remove all instances of OP_CODESEPARATOR from the script.</span>\n\tscript <span class="token operator">=</span> <span class="token function">removeOpcode</span><span class="token punctuation">(</span>script<span class="token punctuation">,</span> OP_CODESEPARATOR<span class="token punctuation">)</span>\n\n\t<span class="token comment">// Make a deep copy of the transaction, zeroing out the script for all</span>\n\t<span class="token comment">// inputs that are not currently being processed.</span>\n\ttxCopy <span class="token operator">:=</span> tx<span class="token punctuation">.</span><span class="token function">Copy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\t<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> txCopy<span class="token punctuation">.</span>TxIn <span class="token punctuation">{</span>\n\t\t<span class="token keyword">if</span> i <span class="token operator">==</span> idx <span class="token punctuation">{</span>\n\t\t\t<span class="token comment">// UnparseScript cannot fail here because removeOpcode</span>\n\t\t\t<span class="token comment">// above only returns a valid script.</span>\n\t\t\tsigScript<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> <span class="token function">unparseScript</span><span class="token punctuation">(</span>script<span class="token punctuation">)</span>\n\t\t\ttxCopy<span class="token punctuation">.</span>TxIn<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">.</span>SignatureScript <span class="token operator">=</span> sigScript\n\t\t<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n\t\t\ttxCopy<span class="token punctuation">.</span>TxIn<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>SignatureScript <span class="token operator">=</span> <span class="token boolean">nil</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token keyword">switch</span> hashType <span class="token operator">&amp;</span> sigHashMask <span class="token punctuation">{</span>\n\t<span class="token keyword">case</span> SigHashNone<span class="token punctuation">:</span>\n\t\ttxCopy<span class="token punctuation">.</span>TxOut <span class="token operator">=</span> txCopy<span class="token punctuation">.</span>TxOut<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">// Empty slice.</span>\n\t\t<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> txCopy<span class="token punctuation">.</span>TxIn <span class="token punctuation">{</span>\n\t\t\t<span class="token keyword">if</span> i <span class="token operator">!=</span> idx <span class="token punctuation">{</span>\n\t\t\t\ttxCopy<span class="token punctuation">.</span>TxIn<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>Sequence <span class="token operator">=</span> <span class="token number">0</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t<span class="token punctuation">}</span>\n\n\t<span class="token keyword">case</span> SigHashSingle<span class="token punctuation">:</span>\n\t\t<span class="token comment">// Resize output array to up to and including requested index.</span>\n\t\ttxCopy<span class="token punctuation">.</span>TxOut <span class="token operator">=</span> txCopy<span class="token punctuation">.</span>TxOut<span class="token punctuation">[</span><span class="token punctuation">:</span>idx<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span>\n\n\t\t<span class="token comment">// All but current output get zeroed out.</span>\n\t\t<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> idx<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>\n\t\t\ttxCopy<span class="token punctuation">.</span>TxOut<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>Value <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>\n\t\t\ttxCopy<span class="token punctuation">.</span>TxOut<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>PkScript <span class="token operator">=</span> <span class="token boolean">nil</span>\n\t\t<span class="token punctuation">}</span>\n\n\t\t<span class="token comment">// Sequence on all other inputs is 0, too.</span>\n\t\t<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> txCopy<span class="token punctuation">.</span>TxIn <span class="token punctuation">{</span>\n\t\t\t<span class="token keyword">if</span> i <span class="token operator">!=</span> idx <span class="token punctuation">{</span>\n\t\t\t\ttxCopy<span class="token punctuation">.</span>TxIn<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>Sequence <span class="token operator">=</span> <span class="token number">0</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t<span class="token punctuation">}</span>\n\n\t<span class="token keyword">default</span><span class="token punctuation">:</span>\n\t\t<span class="token comment">// Consensus treats undefined hashtypes like normal SigHashAll</span>\n\t\t<span class="token comment">// for purposes of hash generation.</span>\n\t\t<span class="token keyword">fallthrough</span>\n\t<span class="token keyword">case</span> SigHashOld<span class="token punctuation">:</span>\n\t\t<span class="token keyword">fallthrough</span>\n\t<span class="token keyword">case</span> SigHashAll<span class="token punctuation">:</span>\n\t\t<span class="token comment">// Nothing special here.</span>\n\t<span class="token punctuation">}</span>\n\t<span class="token keyword">if</span> hashType<span class="token operator">&amp;</span>SigHashAnyOneCanPay <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>\n\t\ttxCopy<span class="token punctuation">.</span>TxIn <span class="token operator">=</span> txCopy<span class="token punctuation">.</span>TxIn<span class="token punctuation">[</span>idx <span class="token punctuation">:</span> idx<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token comment">// The final hash is the double sha256 of both the serialized modified</span>\n\t<span class="token comment">// transaction and the hash type (encoded as a 4-byte little-endian</span>\n\t<span class="token comment">// value) appended.</span>\n\twbuf <span class="token operator">:=</span> bytes<span class="token punctuation">.</span><span class="token function">NewBuffer</span><span class="token punctuation">(</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> txCopy<span class="token punctuation">.</span><span class="token function">SerializeSizeStripped</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\ttxCopy<span class="token punctuation">.</span><span class="token function">SerializeNoWitness</span><span class="token punctuation">(</span>wbuf<span class="token punctuation">)</span>\n\tbinary<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>wbuf<span class="token punctuation">,</span> binary<span class="token punctuation">.</span>LittleEndian<span class="token punctuation">,</span> hashType<span class="token punctuation">)</span>\n\t<span class="token keyword">return</span> chainhash<span class="token punctuation">.</span><span class="token function">DoubleHashB</span><span class="token punctuation">(</span>wbuf<span class="token punctuation">.</span><span class="token function">Bytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br></div></div>',7)];t.render=function(a,p,t,o,c,l){return n(),s("div",null,e)};export{p as __pageData,t as default};
