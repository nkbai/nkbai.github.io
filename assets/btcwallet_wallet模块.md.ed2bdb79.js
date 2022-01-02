import{o as a,c as e,e as s}from"./app.f7f738b8.js";const n='{"title":"wallet模块","description":"","frontmatter":{"title":"wallet模块","date":"2019-05-23T01:07:52.193Z","draft":false,"markup":"mmark"},"headers":[{"level":2,"title":"loader","slug":"loader"},{"level":2,"title":"Wallet 核心","slug":"wallet-核心"},{"level":3,"title":"http rpc的walletpassphrase接口","slug":"http-rpc的walletpassphrase接口"},{"level":2,"title":"Wallet.txCreator 事件循环","slug":"wallet-txcreator-事件循环"}],"relativePath":"btcwallet/wallet模块.md","lastUpdated":1561507892000}',l={},t=[s('<h1 id="wallet模块"><a class="header-anchor" href="#wallet模块" aria-hidden="true">#</a> wallet模块</h1><p>wallet是整个btcwallet的核心</p><h2 id="loader"><a class="header-anchor" href="#loader" aria-hidden="true">#</a> loader</h2><div class="language-go line-numbers-mode"><pre><code><span class="token comment">// Loader implements the creating of new and opening of existing wallets, while</span>\n<span class="token comment">// providing a callback system for other subsystems to handle the loading of a</span>\n<span class="token comment">// wallet.  This is primarily intended for use by the RPC servers, to enable</span>\n<span class="token comment">// methods and services which require the wallet when the wallet is loaded by</span>\n<span class="token comment">// another subsystem.</span>\n<span class="token comment">//</span>\n<span class="token comment">// Loader is safe for concurrent access.</span>\n<span class="token keyword">type</span> Loader <span class="token keyword">struct</span> <span class="token punctuation">{</span>\n\tcallbacks      <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token operator">*</span>Wallet<span class="token punctuation">)</span>\n\tchainParams    <span class="token operator">*</span>chaincfg<span class="token punctuation">.</span>Params\n\tdbDirPath      <span class="token builtin">string</span>\n\trecoveryWindow <span class="token builtin">uint32</span>\n\twallet         <span class="token operator">*</span>Wallet\n\tdb             walletdb<span class="token punctuation">.</span>DB\n\tmu             sync<span class="token punctuation">.</span>Mutex\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>Loader主要负责创建打开钱包<code>Wallet</code>,他会提供一些callback方法,让钱包打开以后自动调用这些callback. 主要是<code>onLoaded</code>和<code>RunAfterLoad</code></p><h2 id="wallet-核心"><a class="header-anchor" href="#wallet-核心" aria-hidden="true">#</a> Wallet 核心</h2><p>rpc接口简单封装以后,最后都是直接走到Wallet进行处理.Wallet内容非常丰富.</p><p>这里找一个简单rpc例子来介绍.</p><h3 id="http-rpc的walletpassphrase接口"><a class="header-anchor" href="#http-rpc的walletpassphrase接口" aria-hidden="true">#</a> http rpc的walletpassphrase接口</h3><ol><li>methods.go中的rpcHandlers进行注册<code> &quot;walletpassphrase&quot;: {handler: walletPassphrase},</code></li><li><code>func walletPassphrase(icmd interface{}, w *wallet.Wallet) (interface{}, error)</code>,</li><li><code>func (w *Wallet) Unlock(passphrase []byte, lock &lt;-chan time.Time) error </code> 进入Wallet</li><li>创建unlockRequest,发送给w.unlockRequests</li><li>进入Wallet.walletLocker 消息循环中,Wallet还有一个独立的消息循环txCreator</li><li>进入w.Manager.Unlock,Manager是waddrmgr.Manager类型</li><li>Unlock要做的工作有很多,首先将相关密码填充,这样下次需要解密的时候才能使用</li></ol><p>特别注意: 这里的timeout的用法, for,select组合的时候,一开始timeout完全没有准备好,只是在需要的时候准备好,用完了再次置为nil即可.</p><h2 id="wallet-txcreator-事件循环"><a class="header-anchor" href="#wallet-txcreator-事件循环" aria-hidden="true">#</a> Wallet.txCreator 事件循环</h2><p>主要是处理createTxRequest,在指定账户上,根据需要输出的金额一起其他要求,选择合适的UTXO,然后形成未签名的Tx</p>',13)];l.render=function(s,n,l,r,p,c){return a(),e("div",null,t)};export{n as __pageData,l as default};
