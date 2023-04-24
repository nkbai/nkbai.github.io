import{_ as s,c as n,o as a,N as l}from"./chunks/framework.3a9190c5.js";const d=JSON.parse('{"title":"YUL IR简介","description":"","frontmatter":{"title":"YUL IR简介","date":"2022-07-10T01:57:03.000Z","draft":false,"tags":["ethereum","blockchain"],"categories":["技术相关"]},"headers":[],"relativePath":"blockchain/solidity/solidity_yul.md"}'),p={name:"blockchain/solidity/solidity_yul.md"},e=l(`<h2 id="ir-指令集" tabindex="-1">IR 指令集 <a class="header-anchor" href="#ir-指令集" aria-label="Permalink to &quot;IR 指令集&quot;">​</a></h2><p>solidity都会被翻译成为下面的ir指令.</p><p><strong>注意区分哪些操作是以256字节为单位,哪些是以字节为单位</strong></p><p>mstore以256字节 为单位的操作:</p><ul><li>sload,sstore</li><li>所有的数学运算以及逻辑运算</li></ul><p>地址,操作数以字节为单位的操作:</p><ul><li>Mload,mstore,mload8</li><li>returndata相关returndatacopy,returndatasize</li><li>calldata相关 calldataload,calldatacopy,calldatasize</li><li>code相关extcodecopy,extcodesize,codecopy</li><li>log相关</li></ul><table><thead><tr><th>Instruction</th><th></th><th></th><th>Explanation</th></tr></thead><tbody><tr><td>stop()</td><td>-</td><td>F</td><td>stop execution, identical to return(0, 0)</td></tr><tr><td>add(x, y)</td><td></td><td>F</td><td>x + y</td></tr><tr><td>sub(x, y)</td><td></td><td>F</td><td>x - y</td></tr><tr><td>mul(x, y)</td><td></td><td>F</td><td>x * y</td></tr><tr><td>div(x, y)</td><td></td><td>F</td><td>x / y or 0 if y == 0</td></tr><tr><td>sdiv(x, y)</td><td></td><td>F</td><td>x / y, for signed numbers in two’s complement, 0 if y == 0</td></tr><tr><td>mod(x, y)</td><td></td><td>F</td><td>x % y, 0 if y == 0</td></tr><tr><td>smod(x, y)</td><td></td><td>F</td><td>x % y, for signed numbers in two’s complement, 0 if y == 0</td></tr><tr><td>exp(x, y)</td><td></td><td>F</td><td>x to the power of y</td></tr><tr><td>not(x)</td><td></td><td>F</td><td>bitwise “not” of x (every bit of x is negated)</td></tr><tr><td>lt(x, y)</td><td></td><td>F</td><td>1 if x &lt; y, 0 otherwise</td></tr><tr><td>gt(x, y)</td><td></td><td>F</td><td>1 if x &gt; y, 0 otherwise</td></tr><tr><td>slt(x, y)</td><td></td><td>F</td><td>1 if x &lt; y, 0 otherwise, for signed numbers in two’s complement</td></tr><tr><td>sgt(x, y)</td><td></td><td>F</td><td>1 if x &gt; y, 0 otherwise, for signed numbers in two’s complement</td></tr><tr><td>eq(x, y)</td><td></td><td>F</td><td>1 if x == y, 0 otherwise</td></tr><tr><td>iszero(x)</td><td></td><td>F</td><td>1 if x == 0, 0 otherwise</td></tr><tr><td>and(x, y)</td><td></td><td>F</td><td>bitwise “and” of x and y</td></tr><tr><td>or(x, y)</td><td></td><td>F</td><td>bitwise “or” of x and y</td></tr><tr><td>xor(x, y)</td><td></td><td>F</td><td>bitwise “xor” of x and y</td></tr><tr><td>byte(n, x)</td><td></td><td>F</td><td>nth byte of x, where the most significant byte is the 0th byte</td></tr><tr><td>shl(x, y)</td><td></td><td>C</td><td>logical shift left y by x bits</td></tr><tr><td>shr(x, y)</td><td></td><td>C</td><td>logical shift right y by x bits</td></tr><tr><td>sar(x, y)</td><td></td><td>C</td><td>signed arithmetic shift right y by x bits</td></tr><tr><td>addmod(x, y, m)</td><td></td><td>F</td><td>(x + y) % m with arbitrary precision arithmetic, 0 if m == 0</td></tr><tr><td>mulmod(x, y, m)</td><td></td><td>F</td><td>(x * y) % m with arbitrary precision arithmetic, 0 if m == 0</td></tr><tr><td>signextend(i, x)</td><td></td><td>F</td><td>sign extend from (i*8+7)th bit counting from least significant</td></tr><tr><td>keccak256(p, n)</td><td></td><td>F</td><td>keccak(mem[p…(p+n)))</td></tr><tr><td>pc()</td><td></td><td>F</td><td>current position in code</td></tr><tr><td>pop(x)</td><td>-</td><td>F</td><td>discard value x</td></tr><tr><td>mload(p)</td><td></td><td>F</td><td>mem[p…(p+32))</td></tr><tr><td>mstore(p, v)</td><td>-</td><td>F</td><td>mem[p…(p+32)) := v</td></tr><tr><td>mstore8(p, v)</td><td>-</td><td>F</td><td>mem[p] := v &amp; 0xff (only modifies a single byte)</td></tr><tr><td>sload(p)</td><td></td><td>F</td><td>storage[p]</td></tr><tr><td>sstore(p, v)</td><td>-</td><td>F</td><td>storage[p] := v</td></tr><tr><td>msize()</td><td></td><td>F</td><td>size of memory, i.e. largest accessed memory index</td></tr><tr><td>gas()</td><td></td><td>F</td><td>gas still available to execution</td></tr><tr><td>address()</td><td></td><td>F</td><td>address of the current contract / execution context</td></tr><tr><td>balance(a)</td><td></td><td>F</td><td>wei balance at address a</td></tr><tr><td>selfbalance()</td><td></td><td>I</td><td>equivalent to balance(address()), but cheaper</td></tr><tr><td>caller()</td><td></td><td>F</td><td>call sender (excluding <code>delegatecall</code>)</td></tr><tr><td>callvalue()</td><td></td><td>F</td><td>wei sent together with the current call</td></tr><tr><td>calldataload(p)</td><td></td><td>F</td><td>call data starting from position p (32 bytes)</td></tr><tr><td>calldatasize()</td><td></td><td>F</td><td>size of call data in bytes</td></tr><tr><td>calldatacopy(t, f, s)</td><td>-</td><td>F</td><td>copy s bytes from calldata at position f to mem at position t</td></tr><tr><td>codesize()</td><td></td><td>F</td><td>size of the code of the current contract / execution context</td></tr><tr><td>codecopy(t, f, s)</td><td>-</td><td>F</td><td>copy s bytes from code at position f to mem at position t</td></tr><tr><td>extcodesize(a)</td><td></td><td>F</td><td>size of the code at address a</td></tr><tr><td>extcodecopy(a, t, f, s)</td><td>-</td><td>F</td><td>like codecopy(t, f, s) but take code at address a</td></tr><tr><td>returndatasize()</td><td></td><td>B</td><td>size of the last returndata</td></tr><tr><td>returndatacopy(t, f, s)</td><td>-</td><td>B</td><td>copy s bytes from returndata at position f to mem at position t</td></tr><tr><td>extcodehash(a)</td><td></td><td>C</td><td>code hash of address a</td></tr><tr><td>create(v, p, n)</td><td></td><td>F</td><td>create new contract with code mem[p…(p+n)) and send v wei and return the new address; returns 0 on error</td></tr><tr><td>create2(v, p, n, s)</td><td></td><td>C</td><td>create new contract with code mem[p…(p+n)) at address keccak256(0xff . this . s . keccak256(mem[p…(p+n))) and send v wei and return the new address, where <code>0xff</code> is a 1 byte value, <code>this</code> is the current contract’s address as a 20 byte value and <code>s</code> is a big-endian 256-bit value; returns 0 on error</td></tr><tr><td>call(g, a, v, in, insize, out, outsize)</td><td></td><td>F</td><td>call contract at address a with input mem[in…(in+insize)) providing g gas and v wei and output area mem[out…(out+outsize)) returning 0 on error (eg. out of gas) and 1 on success <a href="https://docs.soliditylang.org/en/v0.8.15/yul.html#yul-call-return-area" target="_blank" rel="noreferrer">See more</a></td></tr><tr><td>callcode(g, a, v, in, insize, out, outsize)</td><td></td><td>F</td><td>identical to <code>call</code> but only use the code from a and stay in the context of the current contract otherwise <a href="https://docs.soliditylang.org/en/v0.8.15/yul.html#yul-call-return-area" target="_blank" rel="noreferrer">See more</a></td></tr><tr><td>delegatecall(g, a, in, insize, out, outsize)</td><td></td><td>H</td><td>identical to <code>callcode</code> but also keep <code>caller</code> and <code>callvalue</code> <a href="https://docs.soliditylang.org/en/v0.8.15/yul.html#yul-call-return-area" target="_blank" rel="noreferrer">See more</a></td></tr><tr><td>staticcall(g, a, in, insize, out, outsize)</td><td></td><td>B</td><td>identical to <code>call(g, a, 0, in, insize, out, outsize)</code> but do not allow state modifications <a href="https://docs.soliditylang.org/en/v0.8.15/yul.html#yul-call-return-area" target="_blank" rel="noreferrer">See more</a></td></tr><tr><td>return(p, s)</td><td>-</td><td>F</td><td>end execution, return data mem[p…(p+s))</td></tr><tr><td>revert(p, s)</td><td>-</td><td>B</td><td>end execution, revert state changes, return data mem[p…(p+s))</td></tr><tr><td>selfdestruct(a)</td><td>-</td><td>F</td><td>end execution, destroy current contract and send funds to a</td></tr><tr><td>invalid()</td><td>-</td><td>F</td><td>end execution with invalid instruction</td></tr><tr><td>log0(p, s)</td><td>-</td><td>F</td><td>log without topics and data mem[p…(p+s))</td></tr><tr><td>log1(p, s, t1)</td><td>-</td><td>F</td><td>log with topic t1 and data mem[p…(p+s))</td></tr><tr><td>log2(p, s, t1, t2)</td><td>-</td><td>F</td><td>log with topics t1, t2 and data mem[p…(p+s))</td></tr><tr><td>log3(p, s, t1, t2, t3)</td><td>-</td><td>F</td><td>log with topics t1, t2, t3 and data mem[p…(p+s))</td></tr><tr><td>log4(p, s, t1, t2, t3, t4)</td><td>-</td><td>F</td><td>log with topics t1, t2, t3, t4 and data mem[p…(p+s))</td></tr><tr><td>chainid()</td><td></td><td>I</td><td>ID of the executing chain (EIP-1344)</td></tr><tr><td>basefee()</td><td></td><td>L</td><td>current block’s base fee (EIP-3198 and EIP-1559)</td></tr><tr><td>origin()</td><td></td><td>F</td><td>transaction sender</td></tr><tr><td>gasprice()</td><td></td><td>F</td><td>gas price of the transaction</td></tr><tr><td>blockhash(b)</td><td></td><td>F</td><td>hash of block nr b - only for last 256 blocks excluding current</td></tr><tr><td>coinbase()</td><td></td><td>F</td><td>current mining beneficiary</td></tr><tr><td>timestamp()</td><td></td><td>F</td><td>timestamp of the current block in seconds since the epoch</td></tr><tr><td>number()</td><td></td><td>F</td><td>current block number</td></tr><tr><td>difficulty()</td><td></td><td>F</td><td>difficulty of the current block</td></tr><tr><td>gaslimit()</td><td></td><td>F</td><td>block gas limit of the current block</td></tr></tbody></table><p>一个erc20合约:</p><div class="language-solidity line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki material-theme-palenight"><code><span class="line"></span>
<span class="line"><span style="color:#C792EA;">contract</span><span style="color:#FFCB6B;"> ERC20Buggy</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">uint256</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> _totalSupply</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">mapping</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">address</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">uint</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> _balanceOf</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">mapping</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">address</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mapping</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">address</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">uint</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> _allowance</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">transfer</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">address</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">to</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">uint256</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">returns</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">bool</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">success</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">        _balanceOf</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">msg.sender</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-=</span><span style="color:#A6ACCD;"> value</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        _balanceOf</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">to</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> value</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">transferFrom</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">address</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">from</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">address</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">to</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">uint256</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">returns</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">bool</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">success</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">_allowance</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">msg.sender</span><span style="color:#89DDFF;">][</span><span style="color:#A6ACCD;">from</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> value</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">            _allowance</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">msg.sender</span><span style="color:#89DDFF;">][</span><span style="color:#A6ACCD;">from</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-=</span><span style="color:#A6ACCD;"> value</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            _balanceOf</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">from</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-=</span><span style="color:#A6ACCD;"> value</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            _balanceOf</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">to</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> value</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">approve</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">address</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">_spender</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">uint256</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">returns</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">bool</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">success</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">        _allowance</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">msg.sender</span><span style="color:#89DDFF;">][</span><span style="color:#A6ACCD;">_spender</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> value</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">balanceOf</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">address</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">from</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">returns</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">uint</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> _balanceOf</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">from</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">allowance</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">address</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">from</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">address</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">to</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">returns</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">uint</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> _allowance</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">from</span><span style="color:#89DDFF;">][</span><span style="color:#A6ACCD;">to</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">totalSupply</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">returns</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">uint</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> _totalSupply</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">event</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Transfer</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">address</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">indexed</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">_from</span><span style="color:#A6ACCD;">, </span><span style="color:#FFCB6B;">address</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">indexed</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">_to</span><span style="color:#A6ACCD;">, </span><span style="color:#FFCB6B;">uint256</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">_value</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">event</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Approval</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">address</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">indexed</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">_owner</span><span style="color:#A6ACCD;">, </span><span style="color:#FFCB6B;">address</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">indexed</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">_spender</span><span style="color:#A6ACCD;">, </span><span style="color:#FFCB6B;">uint256</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">_value</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p>使用solc 0.8.15 编译</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">solc --ir ERC20.sol          </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>对应的yul ir:</p><div class="language-yul line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yul</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#A6ACCD;">IR:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/// @use-src 0:&quot;ERC20.sol&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">object &quot;ERC20Buggy_158&quot; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    code {</span></span>
<span class="line"><span style="color:#A6ACCD;">        /// @src 0:1:1327  &quot;contract ERC20Buggy {...&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        mstore(64, memoryguard(128))</span></span>
<span class="line"><span style="color:#A6ACCD;">        if callvalue() { revert_error_ca66f745a3ce8ff40e2ccaf1ad45db7774001b90d25810abd9040049be7bf4bb() }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        constructor_ERC20Buggy_158()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        let _1 := allocate_unbounded()</span></span>
<span class="line"><span style="color:#A6ACCD;">        codecopy(_1, dataoffset(&quot;ERC20Buggy_158_deployed&quot;), datasize(&quot;ERC20Buggy_158_deployed&quot;))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        return(_1, datasize(&quot;ERC20Buggy_158_deployed&quot;))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        function allocate_unbounded() -&gt; memPtr {</span></span>
<span class="line"><span style="color:#A6ACCD;">            memPtr := mload(64)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        function revert_error_ca66f745a3ce8ff40e2ccaf1ad45db7774001b90d25810abd9040049be7bf4bb() {</span></span>
<span class="line"><span style="color:#A6ACCD;">            revert(0, 0)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        /// @src 0:1:1327  &quot;contract ERC20Buggy {...&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        function constructor_ERC20Buggy_158() {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            /// @src 0:1:1327  &quot;contract ERC20Buggy {...&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        /// @src 0:1:1327  &quot;contract ERC20Buggy {...&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    /// @use-src 0:&quot;ERC20.sol&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    object &quot;ERC20Buggy_158_deployed&quot; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        code {</span></span>
<span class="line"><span style="color:#A6ACCD;">            /// @src 0:1:1327  &quot;contract ERC20Buggy {...&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            mstore(64, memoryguard(128))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            if iszero(lt(calldatasize(), 4))</span></span>
<span class="line"><span style="color:#A6ACCD;">            {</span></span>
<span class="line"><span style="color:#A6ACCD;">                let selector := shift_right_224_unsigned(calldataload(0))</span></span>
<span class="line"><span style="color:#A6ACCD;">                switch selector</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                case 0x095ea7b3</span></span>
<span class="line"><span style="color:#A6ACCD;">                {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    // approve(address,uint256)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                    external_fun_approve_105()</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                case 0x18160ddd</span></span>
<span class="line"><span style="color:#A6ACCD;">                {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    // totalSupply()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                    external_fun_totalSupply_141()</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                case 0x23b872dd</span></span>
<span class="line"><span style="color:#A6ACCD;">                {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    // transferFrom(address,address,uint256)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                    external_fun_transferFrom_84()</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                case 0x3eaaf86b</span></span>
<span class="line"><span style="color:#A6ACCD;">                {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    // _totalSupply()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                    external_fun__totalSupply_2()</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                case 0x70a08231</span></span>
<span class="line"><span style="color:#A6ACCD;">                {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    // balanceOf(address)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                    external_fun_balanceOf_117()</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                case 0xa9059cbb</span></span>
<span class="line"><span style="color:#A6ACCD;">                {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    // transfer(address,uint256)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                    external_fun_transfer_37()</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                case 0xcca3e832</span></span>
<span class="line"><span style="color:#A6ACCD;">                {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    // _balanceOf(address)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                    external_fun__balanceOf_6()</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                case 0xdd336c12</span></span>
<span class="line"><span style="color:#A6ACCD;">                {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    // _allowance(address,address)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                    external_fun__allowance_12()</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                case 0xdd62ed3e</span></span>
<span class="line"><span style="color:#A6ACCD;">                {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    // allowance(address,address)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                    external_fun_allowance_133()</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                default {}</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            revert_error_42b3090547df1d2001c96683413b8cf91c1b902ef5e3cb8d9f6f304cf7446f74()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function shift_right_224_unsigned(value) -&gt; newValue {</span></span>
<span class="line"><span style="color:#A6ACCD;">                newValue :=</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                shr(224, value)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function allocate_unbounded() -&gt; memPtr {</span></span>
<span class="line"><span style="color:#A6ACCD;">                memPtr := mload(64)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function revert_error_ca66f745a3ce8ff40e2ccaf1ad45db7774001b90d25810abd9040049be7bf4bb() {</span></span>
<span class="line"><span style="color:#A6ACCD;">                revert(0, 0)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {</span></span>
<span class="line"><span style="color:#A6ACCD;">                revert(0, 0)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {</span></span>
<span class="line"><span style="color:#A6ACCD;">                revert(0, 0)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function cleanup_t_uint160(value) -&gt; cleaned {</span></span>
<span class="line"><span style="color:#A6ACCD;">                cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function cleanup_t_address(value) -&gt; cleaned {</span></span>
<span class="line"><span style="color:#A6ACCD;">                cleaned := cleanup_t_uint160(value)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function validator_revert_t_address(value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function abi_decode_t_address(offset, end) -&gt; value {</span></span>
<span class="line"><span style="color:#A6ACCD;">                value := calldataload(offset)</span></span>
<span class="line"><span style="color:#A6ACCD;">                validator_revert_t_address(value)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function cleanup_t_uint256(value) -&gt; cleaned {</span></span>
<span class="line"><span style="color:#A6ACCD;">                cleaned := value</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function validator_revert_t_uint256(value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function abi_decode_t_uint256(offset, end) -&gt; value {</span></span>
<span class="line"><span style="color:#A6ACCD;">                value := calldataload(offset)</span></span>
<span class="line"><span style="color:#A6ACCD;">                validator_revert_t_uint256(value)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -&gt; value0, value1 {</span></span>
<span class="line"><span style="color:#A6ACCD;">                if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                    let offset := 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                    value0 := abi_decode_t_address(add(headStart, offset), dataEnd)</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                    let offset := 32</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                    value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function cleanup_t_bool(value) -&gt; cleaned {</span></span>
<span class="line"><span style="color:#A6ACCD;">                cleaned := iszero(iszero(value))</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                mstore(pos, cleanup_t_bool(value))</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function abi_encode_tuple_t_bool__to_t_bool__fromStack(headStart , value0) -&gt; tail {</span></span>
<span class="line"><span style="color:#A6ACCD;">                tail := add(headStart, 32)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function external_fun_approve_105() {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                if callvalue() { revert_error_ca66f745a3ce8ff40e2ccaf1ad45db7774001b90d25810abd9040049be7bf4bb() }</span></span>
<span class="line"><span style="color:#A6ACCD;">                let param_0, param_1 :=  abi_decode_tuple_t_addresst_uint256(4, calldatasize())</span></span>
<span class="line"><span style="color:#A6ACCD;">                let ret_0 :=  fun_approve_105(param_0, param_1)</span></span>
<span class="line"><span style="color:#A6ACCD;">                let memPos := allocate_unbounded()</span></span>
<span class="line"><span style="color:#A6ACCD;">                let memEnd := abi_encode_tuple_t_bool__to_t_bool__fromStack(memPos , ret_0)</span></span>
<span class="line"><span style="color:#A6ACCD;">                return(memPos, sub(memEnd, memPos))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function abi_decode_tuple_(headStart, dataEnd)   {</span></span>
<span class="line"><span style="color:#A6ACCD;">                if slt(sub(dataEnd, headStart), 0) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                mstore(pos, cleanup_t_uint256(value))</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function abi_encode_tuple_t_uint256__to_t_uint256__fromStack(headStart , value0) -&gt; tail {</span></span>
<span class="line"><span style="color:#A6ACCD;">                tail := add(headStart, 32)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function external_fun_totalSupply_141() {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                if callvalue() { revert_error_ca66f745a3ce8ff40e2ccaf1ad45db7774001b90d25810abd9040049be7bf4bb() }</span></span>
<span class="line"><span style="color:#A6ACCD;">                abi_decode_tuple_(4, calldatasize())</span></span>
<span class="line"><span style="color:#A6ACCD;">                let ret_0 :=  fun_totalSupply_141()</span></span>
<span class="line"><span style="color:#A6ACCD;">                let memPos := allocate_unbounded()</span></span>
<span class="line"><span style="color:#A6ACCD;">                let memEnd := abi_encode_tuple_t_uint256__to_t_uint256__fromStack(memPos , ret_0)</span></span>
<span class="line"><span style="color:#A6ACCD;">                return(memPos, sub(memEnd, memPos))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -&gt; value0, value1, value2 {</span></span>
<span class="line"><span style="color:#A6ACCD;">                if slt(sub(dataEnd, headStart), 96) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                    let offset := 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                    value0 := abi_decode_t_address(add(headStart, offset), dataEnd)</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                    let offset := 32</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                    value1 := abi_decode_t_address(add(headStart, offset), dataEnd)</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                    let offset := 64</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                    value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function external_fun_transferFrom_84() {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                if callvalue() { revert_error_ca66f745a3ce8ff40e2ccaf1ad45db7774001b90d25810abd9040049be7bf4bb() }</span></span>
<span class="line"><span style="color:#A6ACCD;">                let param_0, param_1, param_2 :=  abi_decode_tuple_t_addresst_addresst_uint256(4, calldatasize())</span></span>
<span class="line"><span style="color:#A6ACCD;">                let ret_0 :=  fun_transferFrom_84(param_0, param_1, param_2)</span></span>
<span class="line"><span style="color:#A6ACCD;">                let memPos := allocate_unbounded()</span></span>
<span class="line"><span style="color:#A6ACCD;">                let memEnd := abi_encode_tuple_t_bool__to_t_bool__fromStack(memPos , ret_0)</span></span>
<span class="line"><span style="color:#A6ACCD;">                return(memPos, sub(memEnd, memPos))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function shift_right_unsigned_dynamic(bits, value) -&gt; newValue {</span></span>
<span class="line"><span style="color:#A6ACCD;">                newValue :=</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                shr(bits, value)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function cleanup_from_storage_t_uint256(value) -&gt; cleaned {</span></span>
<span class="line"><span style="color:#A6ACCD;">                cleaned := value</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function extract_from_storage_value_dynamict_uint256(slot_value, offset) -&gt; value {</span></span>
<span class="line"><span style="color:#A6ACCD;">                value := cleanup_from_storage_t_uint256(shift_right_unsigned_dynamic(mul(offset, 8), slot_value))</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function read_from_storage_split_dynamic_t_uint256(slot, offset) -&gt; value {</span></span>
<span class="line"><span style="color:#A6ACCD;">                value := extract_from_storage_value_dynamict_uint256(sload(slot), offset)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            /// @ast-id 2</span></span>
<span class="line"><span style="color:#A6ACCD;">            /// @src 0:28:55  &quot;uint256 public _totalSupply&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            function getter_fun__totalSupply_2() -&gt; ret {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                let slot := 0</span></span>
<span class="line"><span style="color:#A6ACCD;">                let offset := 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                ret := read_from_storage_split_dynamic_t_uint256(slot, offset)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            /// @src 0:1:1327  &quot;contract ERC20Buggy {...&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function external_fun__totalSupply_2() {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                if callvalue() { revert_error_ca66f745a3ce8ff40e2ccaf1ad45db7774001b90d25810abd9040049be7bf4bb() }</span></span>
<span class="line"><span style="color:#A6ACCD;">                abi_decode_tuple_(4, calldatasize())</span></span>
<span class="line"><span style="color:#A6ACCD;">                let ret_0 :=  getter_fun__totalSupply_2()</span></span>
<span class="line"><span style="color:#A6ACCD;">                let memPos := allocate_unbounded()</span></span>
<span class="line"><span style="color:#A6ACCD;">                let memEnd := abi_encode_tuple_t_uint256__to_t_uint256__fromStack(memPos , ret_0)</span></span>
<span class="line"><span style="color:#A6ACCD;">                return(memPos, sub(memEnd, memPos))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function abi_decode_tuple_t_address(headStart, dataEnd) -&gt; value0 {</span></span>
<span class="line"><span style="color:#A6ACCD;">                if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                    let offset := 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                    value0 := abi_decode_t_address(add(headStart, offset), dataEnd)</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function external_fun_balanceOf_117() {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                if callvalue() { revert_error_ca66f745a3ce8ff40e2ccaf1ad45db7774001b90d25810abd9040049be7bf4bb() }</span></span>
<span class="line"><span style="color:#A6ACCD;">                let param_0 :=  abi_decode_tuple_t_address(4, calldatasize())</span></span>
<span class="line"><span style="color:#A6ACCD;">                let ret_0 :=  fun_balanceOf_117(param_0)</span></span>
<span class="line"><span style="color:#A6ACCD;">                let memPos := allocate_unbounded()</span></span>
<span class="line"><span style="color:#A6ACCD;">                let memEnd := abi_encode_tuple_t_uint256__to_t_uint256__fromStack(memPos , ret_0)</span></span>
<span class="line"><span style="color:#A6ACCD;">                return(memPos, sub(memEnd, memPos))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function external_fun_transfer_37() {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                if callvalue() { revert_error_ca66f745a3ce8ff40e2ccaf1ad45db7774001b90d25810abd9040049be7bf4bb() }</span></span>
<span class="line"><span style="color:#A6ACCD;">                let param_0, param_1 :=  abi_decode_tuple_t_addresst_uint256(4, calldatasize())</span></span>
<span class="line"><span style="color:#A6ACCD;">                let ret_0 :=  fun_transfer_37(param_0, param_1)</span></span>
<span class="line"><span style="color:#A6ACCD;">                let memPos := allocate_unbounded()</span></span>
<span class="line"><span style="color:#A6ACCD;">                let memEnd := abi_encode_tuple_t_bool__to_t_bool__fromStack(memPos , ret_0)</span></span>
<span class="line"><span style="color:#A6ACCD;">                return(memPos, sub(memEnd, memPos))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function identity(value) -&gt; ret {</span></span>
<span class="line"><span style="color:#A6ACCD;">                ret := value</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function convert_t_uint160_to_t_uint160(value) -&gt; converted {</span></span>
<span class="line"><span style="color:#A6ACCD;">                converted := cleanup_t_uint160(identity(cleanup_t_uint160(value)))</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function convert_t_uint160_to_t_address(value) -&gt; converted {</span></span>
<span class="line"><span style="color:#A6ACCD;">                converted := convert_t_uint160_to_t_uint160(value)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function convert_t_address_to_t_address(value) -&gt; converted {</span></span>
<span class="line"><span style="color:#A6ACCD;">                converted := convert_t_uint160_to_t_address(value)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function mapping_index_access_t_mapping$_t_address_$_t_uint256_$_of_t_address(slot , key) -&gt; dataSlot {</span></span>
<span class="line"><span style="color:#A6ACCD;">                mstore(0, convert_t_address_to_t_address(key))</span></span>
<span class="line"><span style="color:#A6ACCD;">                mstore(0x20, slot)</span></span>
<span class="line"><span style="color:#A6ACCD;">                dataSlot := keccak256(0, 0x40)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            /// @ast-id 6</span></span>
<span class="line"><span style="color:#A6ACCD;">            /// @src 0:61:103  &quot;mapping(address =&gt; uint) public _balanceOf&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            function getter_fun__balanceOf_6(key_0) -&gt; ret {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                let slot := 1</span></span>
<span class="line"><span style="color:#A6ACCD;">                let offset := 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                slot := mapping_index_access_t_mapping$_t_address_$_t_uint256_$_of_t_address(slot, key_0)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                ret := read_from_storage_split_dynamic_t_uint256(slot, offset)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            /// @src 0:1:1327  &quot;contract ERC20Buggy {...&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function external_fun__balanceOf_6() {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                if callvalue() { revert_error_ca66f745a3ce8ff40e2ccaf1ad45db7774001b90d25810abd9040049be7bf4bb() }</span></span>
<span class="line"><span style="color:#A6ACCD;">                let param_0 :=  abi_decode_tuple_t_address(4, calldatasize())</span></span>
<span class="line"><span style="color:#A6ACCD;">                let ret_0 :=  getter_fun__balanceOf_6(param_0)</span></span>
<span class="line"><span style="color:#A6ACCD;">                let memPos := allocate_unbounded()</span></span>
<span class="line"><span style="color:#A6ACCD;">                let memEnd := abi_encode_tuple_t_uint256__to_t_uint256__fromStack(memPos , ret_0)</span></span>
<span class="line"><span style="color:#A6ACCD;">                return(memPos, sub(memEnd, memPos))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -&gt; value0, value1 {</span></span>
<span class="line"><span style="color:#A6ACCD;">                if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                    let offset := 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                    value0 := abi_decode_t_address(add(headStart, offset), dataEnd)</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                    let offset := 32</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                    value1 := abi_decode_t_address(add(headStart, offset), dataEnd)</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function mapping_index_access_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_of_t_address(slot , key) -&gt; dataSlot {</span></span>
<span class="line"><span style="color:#A6ACCD;">                mstore(0, convert_t_address_to_t_address(key))</span></span>
<span class="line"><span style="color:#A6ACCD;">                mstore(0x20, slot)</span></span>
<span class="line"><span style="color:#A6ACCD;">                dataSlot := keccak256(0, 0x40)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            /// @ast-id 12</span></span>
<span class="line"><span style="color:#A6ACCD;">            /// @src 0:109:171  &quot;mapping(address =&gt; mapping(address =&gt; uint)) public _allowance&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            function getter_fun__allowance_12(key_0, key_1) -&gt; ret {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                let slot := 2</span></span>
<span class="line"><span style="color:#A6ACCD;">                let offset := 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                slot := mapping_index_access_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_of_t_address(slot, key_0)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                slot := mapping_index_access_t_mapping$_t_address_$_t_uint256_$_of_t_address(slot, key_1)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                ret := read_from_storage_split_dynamic_t_uint256(slot, offset)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            /// @src 0:1:1327  &quot;contract ERC20Buggy {...&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function external_fun__allowance_12() {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                if callvalue() { revert_error_ca66f745a3ce8ff40e2ccaf1ad45db7774001b90d25810abd9040049be7bf4bb() }</span></span>
<span class="line"><span style="color:#A6ACCD;">                let param_0, param_1 :=  abi_decode_tuple_t_addresst_address(4, calldatasize())</span></span>
<span class="line"><span style="color:#A6ACCD;">                let ret_0 :=  getter_fun__allowance_12(param_0, param_1)</span></span>
<span class="line"><span style="color:#A6ACCD;">                let memPos := allocate_unbounded()</span></span>
<span class="line"><span style="color:#A6ACCD;">                let memEnd := abi_encode_tuple_t_uint256__to_t_uint256__fromStack(memPos , ret_0)</span></span>
<span class="line"><span style="color:#A6ACCD;">                return(memPos, sub(memEnd, memPos))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function external_fun_allowance_133() {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                if callvalue() { revert_error_ca66f745a3ce8ff40e2ccaf1ad45db7774001b90d25810abd9040049be7bf4bb() }</span></span>
<span class="line"><span style="color:#A6ACCD;">                let param_0, param_1 :=  abi_decode_tuple_t_addresst_address(4, calldatasize())</span></span>
<span class="line"><span style="color:#A6ACCD;">                let ret_0 :=  fun_allowance_133(param_0, param_1)</span></span>
<span class="line"><span style="color:#A6ACCD;">                let memPos := allocate_unbounded()</span></span>
<span class="line"><span style="color:#A6ACCD;">                let memEnd := abi_encode_tuple_t_uint256__to_t_uint256__fromStack(memPos , ret_0)</span></span>
<span class="line"><span style="color:#A6ACCD;">                return(memPos, sub(memEnd, memPos))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function revert_error_42b3090547df1d2001c96683413b8cf91c1b902ef5e3cb8d9f6f304cf7446f74() {</span></span>
<span class="line"><span style="color:#A6ACCD;">                revert(0, 0)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function zero_value_for_split_t_bool() -&gt; ret {</span></span>
<span class="line"><span style="color:#A6ACCD;">                ret := 0</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function shift_right_0_unsigned(value) -&gt; newValue {</span></span>
<span class="line"><span style="color:#A6ACCD;">                newValue :=</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                shr(0, value)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function extract_from_storage_value_offset_0t_uint256(slot_value) -&gt; value {</span></span>
<span class="line"><span style="color:#A6ACCD;">                value := cleanup_from_storage_t_uint256(shift_right_0_unsigned(slot_value))</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function read_from_storage_split_offset_0_t_uint256(slot) -&gt; value {</span></span>
<span class="line"><span style="color:#A6ACCD;">                value := extract_from_storage_value_offset_0t_uint256(sload(slot))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function panic_error_0x11() {</span></span>
<span class="line"><span style="color:#A6ACCD;">                mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)</span></span>
<span class="line"><span style="color:#A6ACCD;">                mstore(4, 0x11)</span></span>
<span class="line"><span style="color:#A6ACCD;">                revert(0, 0x24)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function checked_sub_t_uint256(x, y) -&gt; diff {</span></span>
<span class="line"><span style="color:#A6ACCD;">                x := cleanup_t_uint256(x)</span></span>
<span class="line"><span style="color:#A6ACCD;">                y := cleanup_t_uint256(y)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                if lt(x, y) { panic_error_0x11() }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                diff := sub(x, y)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function shift_left_0(value) -&gt; newValue {</span></span>
<span class="line"><span style="color:#A6ACCD;">                newValue :=</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                shl(0, value)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function update_byte_slice_32_shift_0(value, toInsert) -&gt; result {</span></span>
<span class="line"><span style="color:#A6ACCD;">                let mask := 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</span></span>
<span class="line"><span style="color:#A6ACCD;">                toInsert := shift_left_0(toInsert)</span></span>
<span class="line"><span style="color:#A6ACCD;">                value := and(value, not(mask))</span></span>
<span class="line"><span style="color:#A6ACCD;">                result := or(value, and(toInsert, mask))</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function convert_t_uint256_to_t_uint256(value) -&gt; converted {</span></span>
<span class="line"><span style="color:#A6ACCD;">                converted := cleanup_t_uint256(identity(cleanup_t_uint256(value)))</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function prepare_store_t_uint256(value) -&gt; ret {</span></span>
<span class="line"><span style="color:#A6ACCD;">                ret := value</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function update_storage_value_offset_0t_uint256_to_t_uint256(slot, value_0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                let convertedValue_0 := convert_t_uint256_to_t_uint256(value_0)</span></span>
<span class="line"><span style="color:#A6ACCD;">                sstore(slot, update_byte_slice_32_shift_0(sload(slot), prepare_store_t_uint256(convertedValue_0)))</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function checked_add_t_uint256(x, y) -&gt; sum {</span></span>
<span class="line"><span style="color:#A6ACCD;">                x := cleanup_t_uint256(x)</span></span>
<span class="line"><span style="color:#A6ACCD;">                y := cleanup_t_uint256(y)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                // overflow, if x &gt; (maxValue - y)</span></span>
<span class="line"><span style="color:#A6ACCD;">                if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                sum := add(x, y)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            /// @ast-id 37</span></span>
<span class="line"><span style="color:#A6ACCD;">            /// @src 0:178:354  &quot;function transfer(address to, uint256 value) public returns (bool success){...&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            function fun_transfer_37(var_to_14, var_value_16) -&gt; var_success_19 {</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:239:251  &quot;bool success&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let zero_t_bool_1 := zero_value_for_split_t_bool()</span></span>
<span class="line"><span style="color:#A6ACCD;">                var_success_19 := zero_t_bool_1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:288:293  &quot;value&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let _2 := var_value_16</span></span>
<span class="line"><span style="color:#A6ACCD;">                let expr_25 := _2</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:262:272  &quot;_balanceOf&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let _3 := 0x01</span></span>
<span class="line"><span style="color:#A6ACCD;">                let expr_21 := _3</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:273:283  &quot;msg.sender&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let expr_23 := caller()</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:262:284  &quot;_balanceOf[msg.sender]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let _4 := mapping_index_access_t_mapping$_t_address_$_t_uint256_$_of_t_address(expr_21,expr_23)</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:262:293  &quot;_balanceOf[msg.sender] -= value&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let _5 := read_from_storage_split_offset_0_t_uint256(_4)</span></span>
<span class="line"><span style="color:#A6ACCD;">                let expr_26 := checked_sub_t_uint256(_5, expr_25)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                update_storage_value_offset_0t_uint256_to_t_uint256(_4, expr_26)</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:321:326  &quot;value&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let _6 := var_value_16</span></span>
<span class="line"><span style="color:#A6ACCD;">                let expr_31 := _6</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:303:313  &quot;_balanceOf&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let _7 := 0x01</span></span>
<span class="line"><span style="color:#A6ACCD;">                let expr_28 := _7</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:314:316  &quot;to&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let _8 := var_to_14</span></span>
<span class="line"><span style="color:#A6ACCD;">                let expr_29 := _8</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:303:317  &quot;_balanceOf[to]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let _9 := mapping_index_access_t_mapping$_t_address_$_t_uint256_$_of_t_address(expr_28,expr_29)</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:303:326  &quot;_balanceOf[to] += value&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let _10 := read_from_storage_split_offset_0_t_uint256(_9)</span></span>
<span class="line"><span style="color:#A6ACCD;">                let expr_32 := checked_add_t_uint256(_10, expr_31)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                update_storage_value_offset_0t_uint256_to_t_uint256(_9, expr_32)</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:343:347  &quot;true&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let expr_34 := 0x01</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:336:347  &quot;return true&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                var_success_19 := expr_34</span></span>
<span class="line"><span style="color:#A6ACCD;">                leave</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            /// @src 0:1:1327  &quot;contract ERC20Buggy {...&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            /// @ast-id 84</span></span>
<span class="line"><span style="color:#A6ACCD;">            /// @src 0:360:694  &quot;function transferFrom(address from, address to, uint256 value) public returns (bool success){...&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            function fun_transferFrom_84(var_from_39, var_to_41, var_value_43) -&gt; var_success_46 {</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:439:451  &quot;bool success&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let zero_t_bool_11 := zero_value_for_split_t_bool()</span></span>
<span class="line"><span style="color:#A6ACCD;">                var_success_46 := zero_t_bool_11</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:465:475  &quot;_allowance&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let _12 := 0x02</span></span>
<span class="line"><span style="color:#A6ACCD;">                let expr_48 := _12</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:476:486  &quot;msg.sender&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let expr_50 := caller()</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:465:487  &quot;_allowance[msg.sender]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let _13 := mapping_index_access_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_of_t_address(expr_48,expr_50)</span></span>
<span class="line"><span style="color:#A6ACCD;">                let _14 := _13</span></span>
<span class="line"><span style="color:#A6ACCD;">                let expr_51 := _14</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:488:492  &quot;from&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let _15 := var_from_39</span></span>
<span class="line"><span style="color:#A6ACCD;">                let expr_52 := _15</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:465:493  &quot;_allowance[msg.sender][from]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let _16 := mapping_index_access_t_mapping$_t_address_$_t_uint256_$_of_t_address(expr_51,expr_52)</span></span>
<span class="line"><span style="color:#A6ACCD;">                let _17 := read_from_storage_split_offset_0_t_uint256(_16)</span></span>
<span class="line"><span style="color:#A6ACCD;">                let expr_53 := _17</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:497:502  &quot;value&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let _18 := var_value_43</span></span>
<span class="line"><span style="color:#A6ACCD;">                let expr_54 := _18</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:465:502  &quot;_allowance[msg.sender][from] &gt;= value&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let expr_55 := iszero(lt(cleanup_t_uint256(expr_53), cleanup_t_uint256(expr_54)))</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:462:666  &quot;if(_allowance[msg.sender][from] &gt;= value){...&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                if expr_55 {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    /// @src 0:549:554  &quot;value&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let _19 := var_value_43</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let expr_62 := _19</span></span>
<span class="line"><span style="color:#A6ACCD;">                    /// @src 0:517:527  &quot;_allowance&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let _20 := 0x02</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let expr_56 := _20</span></span>
<span class="line"><span style="color:#A6ACCD;">                    /// @src 0:528:538  &quot;msg.sender&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let expr_58 := caller()</span></span>
<span class="line"><span style="color:#A6ACCD;">                    /// @src 0:517:539  &quot;_allowance[msg.sender]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let _21 := mapping_index_access_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_of_t_address(expr_56,expr_58)</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let _22 := _21</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let expr_60 := _22</span></span>
<span class="line"><span style="color:#A6ACCD;">                    /// @src 0:540:544  &quot;from&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let _23 := var_from_39</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let expr_59 := _23</span></span>
<span class="line"><span style="color:#A6ACCD;">                    /// @src 0:517:545  &quot;_allowance[msg.sender][from]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let _24 := mapping_index_access_t_mapping$_t_address_$_t_uint256_$_of_t_address(expr_60,expr_59)</span></span>
<span class="line"><span style="color:#A6ACCD;">                    /// @src 0:517:554  &quot;_allowance[msg.sender][from] -= value&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let _25 := read_from_storage_split_offset_0_t_uint256(_24)</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let expr_63 := checked_sub_t_uint256(_25, expr_62)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                    update_storage_value_offset_0t_uint256_to_t_uint256(_24, expr_63)</span></span>
<span class="line"><span style="color:#A6ACCD;">                    /// @src 0:588:593  &quot;value&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let _26 := var_value_43</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let expr_68 := _26</span></span>
<span class="line"><span style="color:#A6ACCD;">                    /// @src 0:568:578  &quot;_balanceOf&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let _27 := 0x01</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let expr_65 := _27</span></span>
<span class="line"><span style="color:#A6ACCD;">                    /// @src 0:579:583  &quot;from&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let _28 := var_from_39</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let expr_66 := _28</span></span>
<span class="line"><span style="color:#A6ACCD;">                    /// @src 0:568:584  &quot;_balanceOf[from]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let _29 := mapping_index_access_t_mapping$_t_address_$_t_uint256_$_of_t_address(expr_65,expr_66)</span></span>
<span class="line"><span style="color:#A6ACCD;">                    /// @src 0:568:593  &quot;_balanceOf[from] -= value&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let _30 := read_from_storage_split_offset_0_t_uint256(_29)</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let expr_69 := checked_sub_t_uint256(_30, expr_68)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                    update_storage_value_offset_0t_uint256_to_t_uint256(_29, expr_69)</span></span>
<span class="line"><span style="color:#A6ACCD;">                    /// @src 0:625:630  &quot;value&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let _31 := var_value_43</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let expr_74 := _31</span></span>
<span class="line"><span style="color:#A6ACCD;">                    /// @src 0:607:617  &quot;_balanceOf&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let _32 := 0x01</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let expr_71 := _32</span></span>
<span class="line"><span style="color:#A6ACCD;">                    /// @src 0:618:620  &quot;to&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let _33 := var_to_41</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let expr_72 := _33</span></span>
<span class="line"><span style="color:#A6ACCD;">                    /// @src 0:607:621  &quot;_balanceOf[to]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let _34 := mapping_index_access_t_mapping$_t_address_$_t_uint256_$_of_t_address(expr_71,expr_72)</span></span>
<span class="line"><span style="color:#A6ACCD;">                    /// @src 0:607:630  &quot;_balanceOf[to] += value&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let _35 := read_from_storage_split_offset_0_t_uint256(_34)</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let expr_75 := checked_add_t_uint256(_35, expr_74)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                    update_storage_value_offset_0t_uint256_to_t_uint256(_34, expr_75)</span></span>
<span class="line"><span style="color:#A6ACCD;">                    /// @src 0:651:655  &quot;true&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let expr_77 := 0x01</span></span>
<span class="line"><span style="color:#A6ACCD;">                    /// @src 0:644:655  &quot;return true&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    var_success_46 := expr_77</span></span>
<span class="line"><span style="color:#A6ACCD;">                    leave</span></span>
<span class="line"><span style="color:#A6ACCD;">                    /// @src 0:462:666  &quot;if(_allowance[msg.sender][from] &gt;= value){...&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:682:687  &quot;false&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let expr_81 := 0x00</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:675:687  &quot;return false&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                var_success_46 := expr_81</span></span>
<span class="line"><span style="color:#A6ACCD;">                leave</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            /// @src 0:1:1327  &quot;contract ERC20Buggy {...&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            /// @ast-id 105</span></span>
<span class="line"><span style="color:#A6ACCD;">            /// @src 0:700:857  &quot;function approve(address _spender, uint256 value) public returns (bool success){...&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            function fun_approve_105(var__spender_86, var_value_88) -&gt; var_success_91 {</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:766:778  &quot;bool success&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let zero_t_bool_36 := zero_value_for_split_t_bool()</span></span>
<span class="line"><span style="color:#A6ACCD;">                var_success_91 := zero_t_bool_36</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:824:829  &quot;value&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let _37 := var_value_88</span></span>
<span class="line"><span style="color:#A6ACCD;">                let expr_99 := _37</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:789:799  &quot;_allowance&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let _38 := 0x02</span></span>
<span class="line"><span style="color:#A6ACCD;">                let expr_93 := _38</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:800:810  &quot;msg.sender&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let expr_95 := caller()</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:789:811  &quot;_allowance[msg.sender]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let _39 := mapping_index_access_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_of_t_address(expr_93,expr_95)</span></span>
<span class="line"><span style="color:#A6ACCD;">                let _40 := _39</span></span>
<span class="line"><span style="color:#A6ACCD;">                let expr_97 := _40</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:812:820  &quot;_spender&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let _41 := var__spender_86</span></span>
<span class="line"><span style="color:#A6ACCD;">                let expr_96 := _41</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:789:821  &quot;_allowance[msg.sender][_spender]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let _42 := mapping_index_access_t_mapping$_t_address_$_t_uint256_$_of_t_address(expr_97,expr_96)</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:789:829  &quot;_allowance[msg.sender][_spender] = value&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                update_storage_value_offset_0t_uint256_to_t_uint256(_42, expr_99)</span></span>
<span class="line"><span style="color:#A6ACCD;">                let expr_100 := expr_99</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:846:850  &quot;true&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let expr_102 := 0x01</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:839:850  &quot;return true&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                var_success_91 := expr_102</span></span>
<span class="line"><span style="color:#A6ACCD;">                leave</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            /// @src 0:1:1327  &quot;contract ERC20Buggy {...&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            function zero_value_for_split_t_uint256() -&gt; ret {</span></span>
<span class="line"><span style="color:#A6ACCD;">                ret := 0</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            /// @ast-id 117</span></span>
<span class="line"><span style="color:#A6ACCD;">            /// @src 0:863:957  &quot;function balanceOf(address from) public returns(uint) {...&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            function fun_balanceOf_117(var_from_107) -&gt; var__110 {</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:911:915  &quot;uint&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let zero_t_uint256_43 := zero_value_for_split_t_uint256()</span></span>
<span class="line"><span style="color:#A6ACCD;">                var__110 := zero_t_uint256_43</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:934:944  &quot;_balanceOf&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let _44 := 0x01</span></span>
<span class="line"><span style="color:#A6ACCD;">                let expr_112 := _44</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:945:949  &quot;from&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let _45 := var_from_107</span></span>
<span class="line"><span style="color:#A6ACCD;">                let expr_113 := _45</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:934:950  &quot;_balanceOf[from]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let _46 := mapping_index_access_t_mapping$_t_address_$_t_uint256_$_of_t_address(expr_112,expr_113)</span></span>
<span class="line"><span style="color:#A6ACCD;">                let _47 := read_from_storage_split_offset_0_t_uint256(_46)</span></span>
<span class="line"><span style="color:#A6ACCD;">                let expr_114 := _47</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:927:950  &quot;return _balanceOf[from]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                var__110 := expr_114</span></span>
<span class="line"><span style="color:#A6ACCD;">                leave</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            /// @src 0:1:1327  &quot;contract ERC20Buggy {...&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            /// @ast-id 133</span></span>
<span class="line"><span style="color:#A6ACCD;">            /// @src 0:963:1073  &quot;function allowance(address from, address to) public returns(uint) {...&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            function fun_allowance_133(var_from_119, var_to_121) -&gt; var__124 {</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:1023:1027  &quot;uint&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let zero_t_uint256_48 := zero_value_for_split_t_uint256()</span></span>
<span class="line"><span style="color:#A6ACCD;">                var__124 := zero_t_uint256_48</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:1046:1056  &quot;_allowance&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let _49 := 0x02</span></span>
<span class="line"><span style="color:#A6ACCD;">                let expr_126 := _49</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:1057:1061  &quot;from&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let _50 := var_from_119</span></span>
<span class="line"><span style="color:#A6ACCD;">                let expr_127 := _50</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:1046:1062  &quot;_allowance[from]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let _51 := mapping_index_access_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_of_t_address(expr_126,expr_127)</span></span>
<span class="line"><span style="color:#A6ACCD;">                let _52 := _51</span></span>
<span class="line"><span style="color:#A6ACCD;">                let expr_128 := _52</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:1063:1065  &quot;to&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let _53 := var_to_121</span></span>
<span class="line"><span style="color:#A6ACCD;">                let expr_129 := _53</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:1046:1066  &quot;_allowance[from][to]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let _54 := mapping_index_access_t_mapping$_t_address_$_t_uint256_$_of_t_address(expr_128,expr_129)</span></span>
<span class="line"><span style="color:#A6ACCD;">                let _55 := read_from_storage_split_offset_0_t_uint256(_54)</span></span>
<span class="line"><span style="color:#A6ACCD;">                let expr_130 := _55</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:1039:1066  &quot;return _allowance[from][to]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                var__124 := expr_130</span></span>
<span class="line"><span style="color:#A6ACCD;">                leave</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            /// @src 0:1:1327  &quot;contract ERC20Buggy {...&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            /// @ast-id 141</span></span>
<span class="line"><span style="color:#A6ACCD;">            /// @src 0:1079:1158  &quot;function totalSupply() public returns(uint){...&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            function fun_totalSupply_141() -&gt; var__136 {</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:1117:1121  &quot;uint&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let zero_t_uint256_56 := zero_value_for_split_t_uint256()</span></span>
<span class="line"><span style="color:#A6ACCD;">                var__136 := zero_t_uint256_56</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:1139:1151  &quot;_totalSupply&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                let _57 := read_from_storage_split_offset_0_t_uint256(0x00)</span></span>
<span class="line"><span style="color:#A6ACCD;">                let expr_138 := _57</span></span>
<span class="line"><span style="color:#A6ACCD;">                /// @src 0:1132:1151  &quot;return _totalSupply&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                var__136 := expr_138</span></span>
<span class="line"><span style="color:#A6ACCD;">                leave</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            /// @src 0:1:1327  &quot;contract ERC20Buggy {...&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        data &quot;.metadata&quot; hex&quot;a26469706673582212208b92a117f2fc80a279ab935266f5a5c692dcd642e1a9e5f2dc1fe7a0bbe86a9c64736f6c634300080f0033&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br><span class="line-number">294</span><br><span class="line-number">295</span><br><span class="line-number">296</span><br><span class="line-number">297</span><br><span class="line-number">298</span><br><span class="line-number">299</span><br><span class="line-number">300</span><br><span class="line-number">301</span><br><span class="line-number">302</span><br><span class="line-number">303</span><br><span class="line-number">304</span><br><span class="line-number">305</span><br><span class="line-number">306</span><br><span class="line-number">307</span><br><span class="line-number">308</span><br><span class="line-number">309</span><br><span class="line-number">310</span><br><span class="line-number">311</span><br><span class="line-number">312</span><br><span class="line-number">313</span><br><span class="line-number">314</span><br><span class="line-number">315</span><br><span class="line-number">316</span><br><span class="line-number">317</span><br><span class="line-number">318</span><br><span class="line-number">319</span><br><span class="line-number">320</span><br><span class="line-number">321</span><br><span class="line-number">322</span><br><span class="line-number">323</span><br><span class="line-number">324</span><br><span class="line-number">325</span><br><span class="line-number">326</span><br><span class="line-number">327</span><br><span class="line-number">328</span><br><span class="line-number">329</span><br><span class="line-number">330</span><br><span class="line-number">331</span><br><span class="line-number">332</span><br><span class="line-number">333</span><br><span class="line-number">334</span><br><span class="line-number">335</span><br><span class="line-number">336</span><br><span class="line-number">337</span><br><span class="line-number">338</span><br><span class="line-number">339</span><br><span class="line-number">340</span><br><span class="line-number">341</span><br><span class="line-number">342</span><br><span class="line-number">343</span><br><span class="line-number">344</span><br><span class="line-number">345</span><br><span class="line-number">346</span><br><span class="line-number">347</span><br><span class="line-number">348</span><br><span class="line-number">349</span><br><span class="line-number">350</span><br><span class="line-number">351</span><br><span class="line-number">352</span><br><span class="line-number">353</span><br><span class="line-number">354</span><br><span class="line-number">355</span><br><span class="line-number">356</span><br><span class="line-number">357</span><br><span class="line-number">358</span><br><span class="line-number">359</span><br><span class="line-number">360</span><br><span class="line-number">361</span><br><span class="line-number">362</span><br><span class="line-number">363</span><br><span class="line-number">364</span><br><span class="line-number">365</span><br><span class="line-number">366</span><br><span class="line-number">367</span><br><span class="line-number">368</span><br><span class="line-number">369</span><br><span class="line-number">370</span><br><span class="line-number">371</span><br><span class="line-number">372</span><br><span class="line-number">373</span><br><span class="line-number">374</span><br><span class="line-number">375</span><br><span class="line-number">376</span><br><span class="line-number">377</span><br><span class="line-number">378</span><br><span class="line-number">379</span><br><span class="line-number">380</span><br><span class="line-number">381</span><br><span class="line-number">382</span><br><span class="line-number">383</span><br><span class="line-number">384</span><br><span class="line-number">385</span><br><span class="line-number">386</span><br><span class="line-number">387</span><br><span class="line-number">388</span><br><span class="line-number">389</span><br><span class="line-number">390</span><br><span class="line-number">391</span><br><span class="line-number">392</span><br><span class="line-number">393</span><br><span class="line-number">394</span><br><span class="line-number">395</span><br><span class="line-number">396</span><br><span class="line-number">397</span><br><span class="line-number">398</span><br><span class="line-number">399</span><br><span class="line-number">400</span><br><span class="line-number">401</span><br><span class="line-number">402</span><br><span class="line-number">403</span><br><span class="line-number">404</span><br><span class="line-number">405</span><br><span class="line-number">406</span><br><span class="line-number">407</span><br><span class="line-number">408</span><br><span class="line-number">409</span><br><span class="line-number">410</span><br><span class="line-number">411</span><br><span class="line-number">412</span><br><span class="line-number">413</span><br><span class="line-number">414</span><br><span class="line-number">415</span><br><span class="line-number">416</span><br><span class="line-number">417</span><br><span class="line-number">418</span><br><span class="line-number">419</span><br><span class="line-number">420</span><br><span class="line-number">421</span><br><span class="line-number">422</span><br><span class="line-number">423</span><br><span class="line-number">424</span><br><span class="line-number">425</span><br><span class="line-number">426</span><br><span class="line-number">427</span><br><span class="line-number">428</span><br><span class="line-number">429</span><br><span class="line-number">430</span><br><span class="line-number">431</span><br><span class="line-number">432</span><br><span class="line-number">433</span><br><span class="line-number">434</span><br><span class="line-number">435</span><br><span class="line-number">436</span><br><span class="line-number">437</span><br><span class="line-number">438</span><br><span class="line-number">439</span><br><span class="line-number">440</span><br><span class="line-number">441</span><br><span class="line-number">442</span><br><span class="line-number">443</span><br><span class="line-number">444</span><br><span class="line-number">445</span><br><span class="line-number">446</span><br><span class="line-number">447</span><br><span class="line-number">448</span><br><span class="line-number">449</span><br><span class="line-number">450</span><br><span class="line-number">451</span><br><span class="line-number">452</span><br><span class="line-number">453</span><br><span class="line-number">454</span><br><span class="line-number">455</span><br><span class="line-number">456</span><br><span class="line-number">457</span><br><span class="line-number">458</span><br><span class="line-number">459</span><br><span class="line-number">460</span><br><span class="line-number">461</span><br><span class="line-number">462</span><br><span class="line-number">463</span><br><span class="line-number">464</span><br><span class="line-number">465</span><br><span class="line-number">466</span><br><span class="line-number">467</span><br><span class="line-number">468</span><br><span class="line-number">469</span><br><span class="line-number">470</span><br><span class="line-number">471</span><br><span class="line-number">472</span><br><span class="line-number">473</span><br><span class="line-number">474</span><br><span class="line-number">475</span><br><span class="line-number">476</span><br><span class="line-number">477</span><br><span class="line-number">478</span><br><span class="line-number">479</span><br><span class="line-number">480</span><br><span class="line-number">481</span><br><span class="line-number">482</span><br><span class="line-number">483</span><br><span class="line-number">484</span><br><span class="line-number">485</span><br><span class="line-number">486</span><br><span class="line-number">487</span><br><span class="line-number">488</span><br><span class="line-number">489</span><br><span class="line-number">490</span><br><span class="line-number">491</span><br><span class="line-number">492</span><br><span class="line-number">493</span><br><span class="line-number">494</span><br><span class="line-number">495</span><br><span class="line-number">496</span><br><span class="line-number">497</span><br><span class="line-number">498</span><br><span class="line-number">499</span><br><span class="line-number">500</span><br><span class="line-number">501</span><br><span class="line-number">502</span><br><span class="line-number">503</span><br><span class="line-number">504</span><br><span class="line-number">505</span><br><span class="line-number">506</span><br><span class="line-number">507</span><br><span class="line-number">508</span><br><span class="line-number">509</span><br><span class="line-number">510</span><br><span class="line-number">511</span><br><span class="line-number">512</span><br><span class="line-number">513</span><br><span class="line-number">514</span><br><span class="line-number">515</span><br><span class="line-number">516</span><br><span class="line-number">517</span><br><span class="line-number">518</span><br><span class="line-number">519</span><br><span class="line-number">520</span><br><span class="line-number">521</span><br><span class="line-number">522</span><br><span class="line-number">523</span><br><span class="line-number">524</span><br><span class="line-number">525</span><br><span class="line-number">526</span><br><span class="line-number">527</span><br><span class="line-number">528</span><br><span class="line-number">529</span><br><span class="line-number">530</span><br><span class="line-number">531</span><br><span class="line-number">532</span><br><span class="line-number">533</span><br><span class="line-number">534</span><br><span class="line-number">535</span><br><span class="line-number">536</span><br><span class="line-number">537</span><br><span class="line-number">538</span><br><span class="line-number">539</span><br><span class="line-number">540</span><br><span class="line-number">541</span><br><span class="line-number">542</span><br><span class="line-number">543</span><br><span class="line-number">544</span><br><span class="line-number">545</span><br><span class="line-number">546</span><br><span class="line-number">547</span><br><span class="line-number">548</span><br><span class="line-number">549</span><br><span class="line-number">550</span><br><span class="line-number">551</span><br><span class="line-number">552</span><br><span class="line-number">553</span><br><span class="line-number">554</span><br><span class="line-number">555</span><br><span class="line-number">556</span><br><span class="line-number">557</span><br><span class="line-number">558</span><br><span class="line-number">559</span><br><span class="line-number">560</span><br><span class="line-number">561</span><br><span class="line-number">562</span><br><span class="line-number">563</span><br><span class="line-number">564</span><br><span class="line-number">565</span><br><span class="line-number">566</span><br><span class="line-number">567</span><br><span class="line-number">568</span><br><span class="line-number">569</span><br><span class="line-number">570</span><br><span class="line-number">571</span><br><span class="line-number">572</span><br><span class="line-number">573</span><br><span class="line-number">574</span><br><span class="line-number">575</span><br><span class="line-number">576</span><br><span class="line-number">577</span><br><span class="line-number">578</span><br><span class="line-number">579</span><br><span class="line-number">580</span><br><span class="line-number">581</span><br><span class="line-number">582</span><br><span class="line-number">583</span><br><span class="line-number">584</span><br><span class="line-number">585</span><br><span class="line-number">586</span><br><span class="line-number">587</span><br><span class="line-number">588</span><br><span class="line-number">589</span><br><span class="line-number">590</span><br><span class="line-number">591</span><br><span class="line-number">592</span><br><span class="line-number">593</span><br><span class="line-number">594</span><br><span class="line-number">595</span><br><span class="line-number">596</span><br><span class="line-number">597</span><br><span class="line-number">598</span><br><span class="line-number">599</span><br><span class="line-number">600</span><br><span class="line-number">601</span><br><span class="line-number">602</span><br><span class="line-number">603</span><br><span class="line-number">604</span><br><span class="line-number">605</span><br><span class="line-number">606</span><br><span class="line-number">607</span><br><span class="line-number">608</span><br><span class="line-number">609</span><br><span class="line-number">610</span><br><span class="line-number">611</span><br><span class="line-number">612</span><br><span class="line-number">613</span><br><span class="line-number">614</span><br><span class="line-number">615</span><br><span class="line-number">616</span><br><span class="line-number">617</span><br><span class="line-number">618</span><br><span class="line-number">619</span><br><span class="line-number">620</span><br><span class="line-number">621</span><br><span class="line-number">622</span><br><span class="line-number">623</span><br><span class="line-number">624</span><br><span class="line-number">625</span><br><span class="line-number">626</span><br><span class="line-number">627</span><br><span class="line-number">628</span><br><span class="line-number">629</span><br><span class="line-number">630</span><br><span class="line-number">631</span><br><span class="line-number">632</span><br><span class="line-number">633</span><br><span class="line-number">634</span><br><span class="line-number">635</span><br><span class="line-number">636</span><br><span class="line-number">637</span><br><span class="line-number">638</span><br><span class="line-number">639</span><br><span class="line-number">640</span><br><span class="line-number">641</span><br><span class="line-number">642</span><br><span class="line-number">643</span><br><span class="line-number">644</span><br><span class="line-number">645</span><br><span class="line-number">646</span><br><span class="line-number">647</span><br><span class="line-number">648</span><br><span class="line-number">649</span><br><span class="line-number">650</span><br><span class="line-number">651</span><br><span class="line-number">652</span><br><span class="line-number">653</span><br><span class="line-number">654</span><br><span class="line-number">655</span><br><span class="line-number">656</span><br><span class="line-number">657</span><br><span class="line-number">658</span><br><span class="line-number">659</span><br><span class="line-number">660</span><br><span class="line-number">661</span><br><span class="line-number">662</span><br><span class="line-number">663</span><br><span class="line-number">664</span><br><span class="line-number">665</span><br><span class="line-number">666</span><br><span class="line-number">667</span><br><span class="line-number">668</span><br><span class="line-number">669</span><br><span class="line-number">670</span><br><span class="line-number">671</span><br><span class="line-number">672</span><br><span class="line-number">673</span><br><span class="line-number">674</span><br><span class="line-number">675</span><br><span class="line-number">676</span><br><span class="line-number">677</span><br><span class="line-number">678</span><br><span class="line-number">679</span><br><span class="line-number">680</span><br><span class="line-number">681</span><br><span class="line-number">682</span><br><span class="line-number">683</span><br><span class="line-number">684</span><br><span class="line-number">685</span><br><span class="line-number">686</span><br><span class="line-number">687</span><br><span class="line-number">688</span><br><span class="line-number">689</span><br><span class="line-number">690</span><br><span class="line-number">691</span><br><span class="line-number">692</span><br><span class="line-number">693</span><br><span class="line-number">694</span><br><span class="line-number">695</span><br><span class="line-number">696</span><br><span class="line-number">697</span><br><span class="line-number">698</span><br><span class="line-number">699</span><br><span class="line-number">700</span><br><span class="line-number">701</span><br><span class="line-number">702</span><br><span class="line-number">703</span><br><span class="line-number">704</span><br><span class="line-number">705</span><br><span class="line-number">706</span><br><span class="line-number">707</span><br><span class="line-number">708</span><br><span class="line-number">709</span><br><span class="line-number">710</span><br><span class="line-number">711</span><br><span class="line-number">712</span><br><span class="line-number">713</span><br><span class="line-number">714</span><br><span class="line-number">715</span><br><span class="line-number">716</span><br><span class="line-number">717</span><br><span class="line-number">718</span><br><span class="line-number">719</span><br><span class="line-number">720</span><br><span class="line-number">721</span><br><span class="line-number">722</span><br><span class="line-number">723</span><br><span class="line-number">724</span><br><span class="line-number">725</span><br><span class="line-number">726</span><br><span class="line-number">727</span><br><span class="line-number">728</span><br><span class="line-number">729</span><br><span class="line-number">730</span><br><span class="line-number">731</span><br><span class="line-number">732</span><br><span class="line-number">733</span><br><span class="line-number">734</span><br><span class="line-number">735</span><br><span class="line-number">736</span><br><span class="line-number">737</span><br><span class="line-number">738</span><br><span class="line-number">739</span><br><span class="line-number">740</span><br><span class="line-number">741</span><br><span class="line-number">742</span><br><span class="line-number">743</span><br><span class="line-number">744</span><br><span class="line-number">745</span><br><span class="line-number">746</span><br><span class="line-number">747</span><br><span class="line-number">748</span><br><span class="line-number">749</span><br><span class="line-number">750</span><br><span class="line-number">751</span><br><span class="line-number">752</span><br><span class="line-number">753</span><br><span class="line-number">754</span><br><span class="line-number">755</span><br><span class="line-number">756</span><br><span class="line-number">757</span><br><span class="line-number">758</span><br><span class="line-number">759</span><br><span class="line-number">760</span><br><span class="line-number">761</span><br><span class="line-number">762</span><br><span class="line-number">763</span><br><span class="line-number">764</span><br><span class="line-number">765</span><br><span class="line-number">766</span><br><span class="line-number">767</span><br><span class="line-number">768</span><br><span class="line-number">769</span><br><span class="line-number">770</span><br><span class="line-number">771</span><br><span class="line-number">772</span><br><span class="line-number">773</span><br><span class="line-number">774</span><br><span class="line-number">775</span><br><span class="line-number">776</span><br><span class="line-number">777</span><br><span class="line-number">778</span><br><span class="line-number">779</span><br><span class="line-number">780</span><br><span class="line-number">781</span><br><span class="line-number">782</span><br><span class="line-number">783</span><br><span class="line-number">784</span><br><span class="line-number">785</span><br><span class="line-number">786</span><br><span class="line-number">787</span><br><span class="line-number">788</span><br><span class="line-number">789</span><br><span class="line-number">790</span><br><span class="line-number">791</span><br><span class="line-number">792</span><br><span class="line-number">793</span><br><span class="line-number">794</span><br><span class="line-number">795</span><br><span class="line-number">796</span><br><span class="line-number">797</span><br><span class="line-number">798</span><br><span class="line-number">799</span><br><span class="line-number">800</span><br><span class="line-number">801</span><br><span class="line-number">802</span><br><span class="line-number">803</span><br></div></div>`,14),r=[e];function t(c,o,i,b,C,A){return a(),n("div",null,r)}const _=s(p,[["render",t]]);export{d as __pageData,_ as default};
