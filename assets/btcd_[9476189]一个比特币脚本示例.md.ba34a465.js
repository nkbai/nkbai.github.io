import{o as t,c as e,e as a}from"./app.26819860.js";const s='{"title":"[9476189]一个比特币脚本示例","description":"","frontmatter":{"title":"[9476189]一个比特币脚本示例","date":"2018-08-18T06:02:04.000Z","draft":false,"markup":"mmark"},"relativePath":"btcd/[9476189]一个比特币脚本示例.md","lastUpdated":1561507892000}',d={},r=[a('<h1 id="pay-to-pubkey-hash解析"><a class="header-anchor" href="#pay-to-pubkey-hash解析" aria-hidden="true">#</a> pay-to-pubkey-hash解析</h1><p>本文主要译自<a href="https://en.bitcoin.it/wiki/Script" target="_blank" rel="noopener noreferrer">比特币 wiki</a></p><div class="language-"><pre><code>scriptPubKey: OP_DUP OP_HASH160 &lt;pubKeyHash&gt; OP_EQUALVERIFY OP_CHECKSIG\nscriptSig: &lt;sig&gt; &lt;pubKey&gt;\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>例如如下的raw scriptPubKey: 76A91489ABCDEFABBAABBAABBAABBAABBAABBAABBAABBA88AC 解析如下:</p><div class="language-"><pre><code>  76       A9             14\nOP_DUP OP_HASH160    Bytes to push\n\n89 AB CD EF AB BA AB BA AB BA AB BA AB BA AB BA AB BA AB BA   88         AC\n                      Data to push                     OP_EQUALVERIFY OP_CHECKSIG\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><table><thead><tr><th>Stack</th><th>Script</th><th>Description</th></tr></thead><tbody><tr><td>Empty.</td><td>&lt;sig&gt; &lt;pubKey&gt; OP_DUP OP_HASH160 &lt;pubKeyHash&gt; OP_EQUALVERIFY OP_CHECKSIG</td><td>scriptSig and scriptPubKey are combined.</td></tr><tr><td>&lt;sig&gt; &lt;pubKey&gt;</td><td>OP_DUP OP_HASH160 &lt;pubKeyHash&gt; OP_EQUALVERIFY OP_CHECKSIG</td><td>Constants are added to the stack.</td></tr><tr><td>&lt;sig&gt; &lt;pubKey&gt; &lt;pubKey&gt;</td><td>OP_HASH160 &lt;pubKeyHash&gt; OP_EQUALVERIFY OP_CHECKSIG</td><td>Top stack item is duplicated.</td></tr><tr><td>&lt;sig&gt; &lt;pubKey&gt; &lt;pubHashA&gt;</td><td>&lt;pubKeyHash&gt; OP_EQUALVERIFY OP_CHECKSIG</td><td>Top stack item is hashed.</td></tr><tr><td>&lt;sig&gt; &lt;pubKey&gt; &lt;pubHashA&gt; &lt;pubKeyHash&gt;</td><td>OP_EQUALVERIFY OP_CHECKSIG</td><td>Constant added.</td></tr><tr><td>&lt;sig&gt; &lt;pubKey&gt;</td><td>OP_CHECKSIG</td><td>Equality is checked between the top two stack items.</td></tr><tr><td>true</td><td>Empty.</td><td>Signature is checked for top two stack items.</td></tr></tbody></table>',6)];d.render=function(a,s,d,p,n,i){return t(),e("div",null,r)};export{s as __pageData,d as default};
