import{o as e,c as n,e as t}from"./app.f7f738b8.js";const a='{"title":"闪电网络交易密钥","description":"","frontmatter":{"title":"闪电网络交易密钥","date":"2018-08-25T04:21:13.000Z","draft":false,"markup":"mmark"},"relativePath":"ethereum/闪电网络交易密钥.md","lastUpdated":1561553438000}',i={},r=[t('<h1 id="闪电网络交易秘钥的推导"><a class="header-anchor" href="#闪电网络交易秘钥的推导" aria-hidden="true">#</a> 闪电网络交易秘钥的推导</h1><div class="language-"><pre><code>pubkey = basepoint + SHA256(per_commitment_point || basepoint) * G\nprivkey = basepoint_secret + SHA256(per_commitment_point || basepoint)\nper_commitment_point = per_commitment_secret * G\nrevocationpubkey = revocation_basepoint * SHA256(revocation_basepoint || per_commitment_point) + per_commitment_point * SHA256(per_commitment_point || revocation_basepoint)\nrevocationprivkey = revocation_basepoint_secret * SHA256(revocation_basepoint || per_commitment_point) + per_commitment_secret * SHA256(per_commitment_point || revocation_basepoint)\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',2)];i.render=function(t,a,i,o,p,s){return e(),n("div",null,r)};export{a as __pageData,i as default};
