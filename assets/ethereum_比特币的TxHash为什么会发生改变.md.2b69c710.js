import{o as e,c as a,e as i}from"./app.f7f738b8.js";const t='{"title":"比特币的TxHash为什么会发生改变","description":"","frontmatter":{"title":"比特币的TxHash为什么会发生改变","date":"2019-02-11T09:26:27.497Z","draft":false,"markup":"mmark"},"headers":[{"level":2,"title":"交易可延展性","slug":"交易可延展性"},{"level":2,"title":"签名可延展性","slug":"签名可延展性"},{"level":2,"title":"scriptSig Malleability","slug":"scriptsig-malleability"},{"level":2,"title":"BIP62","slug":"bip62"},{"level":2,"title":"Segwit","slug":"segwit"}],"relativePath":"ethereum/比特币的TxHash为什么会发生改变.md","lastUpdated":1561553438000}',r={},l=[i('<h1 id="比特币中txhash为什么会变化"><a class="header-anchor" href="#比特币中txhash为什么会变化" aria-hidden="true">#</a> 比特币中TxHash为什么会变化?</h1><p>一直不理解比特币的Tx在被打包确认之前TxHash为什么会发生变化,这次终于找到了依据.</p><h2 id="交易可延展性"><a class="header-anchor" href="#交易可延展性" aria-hidden="true">#</a> 交易可延展性</h2><p>虽然交易签名后，签名当前不会覆盖经过哈希处理以创建事务哈希的事务中的所有数据。因此，虽然不常见，但网络上的节点可能会以散列无效的方式更改您发送的事务。请注意，这只会更改哈希值; 交易的输出保持不变，比特币将转到他们的预期收件人。然而，这确实意味着，例如，在任何情况下接受一系列确认块数不够的交易是不安全的，因为后来的交易将取决于先前交易的哈希值，并且这些哈希值可以被更改，直到它们在链上被确认为止。</p><h2 id="签名可延展性"><a class="header-anchor" href="#签名可延展性" aria-hidden="true">#</a> 签名可延展性</h2><p>可延展性的第一种形式是签名本身。每个签名都只有一个DER编码的ASN.1八位位组表示，但OpenSSL不会强制执行此操作，只要签名没有严重错误，它就会被接受。[1]此外，对于每个ECDSA签名（r，s），签名（r，-s（mod N））是同一消息的有效签名。[2]</p><p>从块<a href="https://en.bitcoin.it/wiki/Transaction_malleability#cite_note-3" target="_blank" rel="noopener noreferrer">363724开始</a>，BIP66软分叉使得块链中的所有新事务都必须严格遵循DER编码的ASN.1标准。目前仍在努力关闭DER签名中其他可能的延展性。</p><p>任何有权访问相应私钥的人都可以更改签名。 这句话的意思是私钥拥有者<strong>对同一笔交易反复签名,他们每次签名都不一样,但是都是有效的.</strong></p><h2 id="scriptsig-malleability"><a class="header-anchor" href="#scriptsig-malleability" aria-hidden="true">#</a> scriptSig Malleability</h2><p>比特币中使用的签名算法不会签署全部的scriptSig来创建签名。虽然签署整个scriptSig是不可能的 - 签名本身就是签名 - 这意味着可以添加额外的数据,然后再将所需的签名和公钥推送到栈上。比如可以添加OP_DROP,执行效果和完全没有添加一样。</p><p>正在考虑防止scriptSig延展性。当前在其scriptSig中具有除数据推送操作之外的任何操作的事务被认为是非标准的并且不会被广播，并且最终该规则可以扩展为强制执行后堆栈具有恰好一个项目。但这样做可能会影响以后对比特币的扩展。</p><h2 id="bip62"><a class="header-anchor" href="#bip62" aria-hidden="true">#</a> BIP62</h2><p>BIP_0062是2014年初提出的比特币改进方案，旨在解决延展性问题。它旨在找到所有可能的延展性方法并逐一修复它们。BIP被撤销，因为发现这对于延展性阻止的用例（例如[闪电网络](<a href="https://en.bitcoin.it/wiki/Payment_channels%EF%BC%89%E6%98%AF%E4%B8%8D%E5%A4%9F%E7%9A%84" target="_blank" rel="noopener noreferrer">https://en.bitcoin.it/wiki/Payment_channels）是不够的</a><a href="https://en.bitcoin.it/wiki/Transaction_malleability#cite_note-4" target="_blank" rel="noopener noreferrer">4</a> <a href="https://en.bitcoin.it/wiki/Transaction_malleability#cite_note-5" target="_blank" rel="noopener noreferrer">5</a> <a href="https://en.bitcoin.it/wiki/Transaction_malleability#cite_note-6" target="_blank" rel="noopener noreferrer">6</a> BIP文件本身包含作者可以想到的所有延展性方法。</p><h2 id="segwit"><a class="header-anchor" href="#segwit" aria-hidden="true">#</a> Segwit</h2><p>隔离见证是对比特币的更新，其目的之一是修复所有形式的可塑性。仅花费segwit输出的交易不易受延展性影响。</p>',15)];r.render=function(i,t,r,n,s,h){return e(),a("div",null,l)};export{t as __pageData,r as default};
