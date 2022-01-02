import{o as e,c as r,e as a}from"./app.1f3c315f.js";const l='{"title":"btc跨链设计","description":"","frontmatter":{"title":"btc跨链设计","date":"2019-04-15T04:08:31.082Z","draft":false,"markup":"mmark"},"headers":[{"level":2,"title":"PrepareLockin过程","slug":"preparelockin过程"},{"level":3,"title":"1. 用户在主链构造PrepareLockin调用,将比特币锁定到指定的地址","slug":"_1-用户在主链构造preparelockin调用-将比特币锁定到指定的地址"},{"level":3,"title":"2. 等待确认块数以后,用户选取公证人在侧链做PrepareLockin.","slug":"_2-等待确认块数以后-用户选取公证人在侧链做preparelockin"},{"level":3,"title":"3. 公证人通过PBFT协商nonce,执行侧链PrepareLockin","slug":"_3-公证人通过pbft协商nonce-执行侧链preparelockin"},{"level":3,"title":"4. 用户在凭密码解锁侧链Lockin","slug":"_4-用户在凭密码解锁侧链lockin"},{"level":3,"title":"5.成功以后,发起分布式签名,在主链发起交易将PrepareLockin转换为普通UTXO.","slug":"_5-成功以后-发起分布式签名-在主链发起交易将preparelockin转换为普通utxo"},{"level":3,"title":"5. 用户和公证人取消的过程","slug":"_5-用户和公证人取消的过程"},{"level":2,"title":"PrepareLockout过程","slug":"preparelockout过程"},{"level":3,"title":"1. 用户在侧链调用合约PrepareLockout,将侧链币锁定.","slug":"_1-用户在侧链调用合约preparelockout-将侧链币锁定"},{"level":3,"title":"2. 待确认块数以后,用户选取公证人在主链做PrepareLockout.","slug":"_2-待确认块数以后-用户选取公证人在主链做preparelockout"},{"level":3,"title":"3. 公证人通过PBFT协商,选取合适的UTXO,执行主链PrepareLockout","slug":"_3-公证人通过pbft协商-选取合适的utxo-执行主链preparelockout"},{"level":3,"title":"4. 用户凭密码解锁主链Lockout,","slug":"_4-用户凭密码解锁主链lockout"},{"level":3,"title":"5. 第二部中的公证人检测到密码出现以后,在侧链执行lockout","slug":"_5-第二部中的公证人检测到密码出现以后-在侧链执行lockout"},{"level":3,"title":"6. 用户以及公证人在侧链主链取消lockout的过程","slug":"_6-用户以及公证人在侧链主链取消lockout的过程"},{"level":2,"title":"公证人以及用户如何知道btc主链上的与自己相关的UTXO","slug":"公证人以及用户如何知道btc主链上的与自己相关的utxo"}],"relativePath":"blockchain/ethereum/btc跨链设计.md","lastUpdated":1561553438000}',o={},t=[a('<h1 id="btc跨链设计"><a class="header-anchor" href="#btc跨链设计" aria-hidden="true">#</a> btc跨链设计</h1><p>凡是涉及到消费BTC UTXO的都需要分布式签名协商 凡是涉及到不确定消费BTC 哪个UTXO的都需要PBFT协商 因此进行PBFT协商,只有prepareLockout和原来的不一致.</p><h2 id="preparelockin过程"><a class="header-anchor" href="#preparelockin过程" aria-hidden="true">#</a> PrepareLockin过程</h2><h3 id="_1-用户在主链构造preparelockin调用-将比特币锁定到指定的地址"><a class="header-anchor" href="#_1-用户在主链构造preparelockin调用-将比特币锁定到指定的地址" aria-hidden="true">#</a> 1. 用户在主链构造PrepareLockin调用,将比特币锁定到指定的地址</h3><ol><li>如何构造脚本?</li><li>如何验证脚本?</li><li>发起交易用sendrawtransaction 需要尽快熟悉btcd代码,</li></ol><h3 id="_2-等待确认块数以后-用户选取公证人在侧链做preparelockin"><a class="header-anchor" href="#_2-等待确认块数以后-用户选取公证人在侧链做preparelockin" aria-hidden="true">#</a> 2. 等待确认块数以后,用户选取公证人在侧链做PrepareLockin.</h3><ol><li>注意区块时间的转换,留出充裕的时间 这里我觉得需要为每条链指定好相应的参数配置,参见chancfg/params.go</li></ol><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">type</span> Params <span class="token keyword">struct</span> <span class="token punctuation">{</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ol start="2"><li>hash密码机制要保持一致,能够验证.</li></ol><h3 id="_3-公证人通过pbft协商nonce-执行侧链preparelockin"><a class="header-anchor" href="#_3-公证人通过pbft协商nonce-执行侧链preparelockin" aria-hidden="true">#</a> 3. 公证人通过PBFT协商nonce,执行侧链PrepareLockin</h3><p>和以太坊一样,没有什么需要特殊处理</p><h3 id="_4-用户在凭密码解锁侧链lockin"><a class="header-anchor" href="#_4-用户在凭密码解锁侧链lockin" aria-hidden="true">#</a> 4. 用户在凭密码解锁侧链Lockin</h3><p>为用户提供和以太坊一样的服务就可以,dnc也不需要改动</p><h3 id="_5-成功以后-发起分布式签名-在主链发起交易将preparelockin转换为普通utxo"><a class="header-anchor" href="#_5-成功以后-发起分布式签名-在主链发起交易将preparelockin转换为普通utxo" aria-hidden="true">#</a> 5.成功以后,发起分布式签名,在主链发起交易将PrepareLockin转换为普通UTXO.</h3><ol><li>如何构建解锁脚本</li><li>其他公证人何验证脚本</li></ol><h3 id="_5-用户和公证人取消的过程"><a class="header-anchor" href="#_5-用户和公证人取消的过程" aria-hidden="true">#</a> 5. 用户和公证人取消的过程</h3><p>用户和公证人可以分别在主链侧链进行取消.</p><h2 id="preparelockout过程"><a class="header-anchor" href="#preparelockout过程" aria-hidden="true">#</a> PrepareLockout过程</h2><h3 id="_1-用户在侧链调用合约preparelockout-将侧链币锁定"><a class="header-anchor" href="#_1-用户在侧链调用合约preparelockout-将侧链币锁定" aria-hidden="true">#</a> 1. 用户在侧链调用合约PrepareLockout,将侧链币锁定.</h3><p>和以太坊一样,没什么变动</p><h3 id="_2-待确认块数以后-用户选取公证人在主链做preparelockout"><a class="header-anchor" href="#_2-待确认块数以后-用户选取公证人在主链做preparelockout" aria-hidden="true">#</a> 2. 待确认块数以后,用户选取公证人在主链做PrepareLockout.</h3><p>1.注意时间转换 2.</p><h3 id="_3-公证人通过pbft协商-选取合适的utxo-执行主链preparelockout"><a class="header-anchor" href="#_3-公证人通过pbft协商-选取合适的utxo-执行主链preparelockout" aria-hidden="true">#</a> 3. 公证人通过PBFT协商,选取合适的UTXO,执行主链PrepareLockout</h3><ol><li>如何构建脚本</li><li>公证人如何验证脚本</li><li>如何选取相关UTXO(一开始可以最简单粗暴匹配最合适的(一个in就够的那种))</li></ol><h3 id="_4-用户凭密码解锁主链lockout"><a class="header-anchor" href="#_4-用户凭密码解锁主链lockout" aria-hidden="true">#</a> 4. 用户凭密码解锁主链Lockout,</h3><ol><li>如何构建脚本,(DNC)</li></ol><h3 id="_5-第二部中的公证人检测到密码出现以后-在侧链执行lockout"><a class="header-anchor" href="#_5-第二部中的公证人检测到密码出现以后-在侧链执行lockout" aria-hidden="true">#</a> 5. 第二部中的公证人检测到密码出现以后,在侧链执行lockout</h3><p>PBFT nonce协商即可.</p><h3 id="_6-用户以及公证人在侧链主链取消lockout的过程"><a class="header-anchor" href="#_6-用户以及公证人在侧链主链取消lockout的过程" aria-hidden="true">#</a> 6. 用户以及公证人在侧链主链取消lockout的过程</h3><h2 id="公证人以及用户如何知道btc主链上的与自己相关的utxo"><a class="header-anchor" href="#公证人以及用户如何知道btc主链上的与自己相关的utxo" aria-hidden="true">#</a> 公证人以及用户如何知道btc主链上的与自己相关的UTXO</h2><p>公证人相关UTXO</p><ol><li>侧链preparelockin相关UTXO 当用户在侧链披露密码以后,公证人需要在主链进行lockin,此utxo来源为用户请求公证人在侧链进行preparelockin时记录</li><li>公证人主链lockin结果 消费步骤1中的utxo的输出.</li><li>主链preparelockout相关UTXO 此UTXO为用户在侧链执行preparelockout以后,公证人从步骤2中的utxo选取合适进行输出得到, 此UTXO正常一般是有两个输出,一个是找钱,一个是可以取消的output.</li><li>主链取消lockout的输出 步骤如果发生取消,那么需要更新相关utxo记录,取消的过程也需要公证人分布式协商签名</li></ol>',32)];o.render=function(a,l,o,i,c,p){return e(),r("div",null,t)};export{l as __pageData,o as default};
