import{_ as a,c as l,o as e,N as t}from"./chunks/framework.3a9190c5.js";const _=JSON.parse('{"title":"mempool","description":"","frontmatter":{"title":"mempool","date":"2018-12-21T03:53:45.000Z","draft":false,"markup":"mmark"},"headers":[],"relativePath":"blockchain/btcd/mempool.md"}'),i={name:"blockchain/btcd/mempool.md"},o=t('<h1 id="btcd-mempool模块" tabindex="-1">btcd/mempool模块 <a class="header-anchor" href="#btcd-mempool模块" aria-label="Permalink to &quot;btcd/mempool模块&quot;">​</a></h1><p>mempool 对应的就是以太坊中的txpool,就是那些还没有进入到block的Tx的管理.</p><ul><li>交易有效性管理 <ul><li>拒绝non-fully-spent duplicate Tx</li><li>忽略coinbase Tx</li><li>忽略双花交易</li><li>预先执行Tx并验证有效</li><li>可以查询无效交易</li></ul></li><li>孤儿交易管理 没有对应output的Tx <ul><li>可以配置上限数量</li><li>根据交易变化,自动移动到有效交易中</li><li>可以查询孤儿交易</li></ul></li><li>可配置 <ul><li>接受哪些交易,拒绝哪些交易</li><li>最低费用</li><li>其他</li></ul></li></ul><h2 id="一些限制参数" tabindex="-1">一些限制参数 <a class="header-anchor" href="#一些限制参数" aria-label="Permalink to &quot;一些限制参数&quot;">​</a></h2><h3 id="maxstandardmultisigkeys-3" tabindex="-1">maxStandardMultiSigKeys =3 <a class="header-anchor" href="#maxstandardmultisigkeys-3" aria-label="Permalink to &quot;maxStandardMultiSigKeys =3&quot;">​</a></h3><p>多重签名,最大参与方个数为3 目前比特币只支持m of n多种签名,其中m&lt;=3? 这个限制好像太小了</p><h3 id="交易费" tabindex="-1">交易费 <a class="header-anchor" href="#交易费" aria-label="Permalink to &quot;交易费&quot;">​</a></h3><p>DefaultMinRelayTxFee = btcutil.Amount(1000) 最小交易费不超过1000 maxStandardTxWeight =400000 最大交易费,限制每个交易的字节数量</p>',8),r=[o];function m(n,d,c,s,u,p){return e(),l("div",null,r)}const x=a(i,[["render",m]]);export{_ as __pageData,x as default};
