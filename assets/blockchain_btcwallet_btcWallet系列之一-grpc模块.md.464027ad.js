import{o as n,c as s,e as a}from"./app.63f3ffeb.js";const t='{"title":"btcWallet系列之一-grpc模块","description":"","frontmatter":{"title":"btcWallet系列之一-grpc模块","date":"2019-05-19T01:46:15.071Z","draft":false,"markup":"mmark"},"headers":[{"level":2,"title":"Service分类","slug":"service分类"},{"level":3,"title":"VersionService","slug":"versionservice"},{"level":3,"title":"WalletLoaderService","slug":"walletloaderservice"},{"level":2,"title":"核心服务WalletService","slug":"核心服务walletservice"},{"level":3,"title":"接口","slug":"接口"},{"level":3,"title":"stream返回的实现","slug":"stream返回的实现"},{"level":2,"title":"其他: 与http rpc服务的简单比较","slug":"其他-与http-rpc服务的简单比较"}],"relativePath":"blockchain/btcwallet/btcWallet系列之一-grpc模块.md","lastUpdated":1561507892000}',e={},p=[a('<h1 id="btcwallet对外服务"><a class="header-anchor" href="#btcwallet对外服务" aria-hidden="true">#</a> btcwallet对外服务</h1><p>btcwallet除了像btcd对外提供rpc服务以外,还提供了grpc服务,同时grpc采用的是protobuf来实现. 这方便与不同语言进行交互,降低客户端代码编写量.</p><p>阅读这个模块,顺便了解一下proto的使用,更详细的细节问题.</p><h2 id="service分类"><a class="header-anchor" href="#service分类" aria-hidden="true">#</a> Service分类</h2><p>总共有三种Service,分别是VersionService,WalletService和WalletLoaderService, 从中可以看出</p><h3 id="versionservice"><a class="header-anchor" href="#versionservice" aria-hidden="true">#</a> VersionService</h3><p>只是提供版本查询服务,为什么会做成一个独立的服务,设计者是出于什么考虑的呢? 这里重点考察grpc服务的启动过程</p><ol><li>walletMain函数中传递wallet.Loader调用startRPCServers</li><li>配置grpc所需参数,包括证书</li><li>创建grpcServer</li><li>通过rpcserver.StartVersionService注册VersionService</li><li>通过pb.RegisterVersionServiceServer 注册versionServer 这里的RegisterVersionServiceServer是自动生成,</li><li>versionServer实现了Version接口,对外提供服务</li></ol><p>下面是proto自动生成的Service Description ,其中HandlerType为空,需要我们自己实现.</p><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">var</span> _VersionService_serviceDesc <span class="token operator">=</span> grpc<span class="token punctuation">.</span>ServiceDesc<span class="token punctuation">{</span>\n   ServiceName<span class="token punctuation">:</span> <span class="token string">&quot;walletrpc.VersionService&quot;</span><span class="token punctuation">,</span>\n   HandlerType<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token operator">*</span>VersionServiceServer<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n   Methods<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>grpc<span class="token punctuation">.</span>MethodDesc<span class="token punctuation">{</span>\n   \t<span class="token punctuation">{</span>\n   \t\tMethodName<span class="token punctuation">:</span> <span class="token string">&quot;Version&quot;</span><span class="token punctuation">,</span>\n   \t\tHandler<span class="token punctuation">:</span>    _VersionService_Version_Handler<span class="token punctuation">,</span>\n   \t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n   <span class="token punctuation">}</span><span class="token punctuation">,</span>\n   Streams<span class="token punctuation">:</span>  <span class="token punctuation">[</span><span class="token punctuation">]</span>grpc<span class="token punctuation">.</span>StreamDesc<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n   Metadata<span class="token punctuation">:</span> <span class="token string">&quot;api.proto&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h4 id="versionservice-client的实现"><a class="header-anchor" href="#versionservice-client的实现" aria-hidden="true">#</a> VersionService client的实现</h4><p>同时proto自动生成了客户端访问代码,</p><ol><li>通过NewVersionServiceClient创建VersionServiceClient</li><li>通过VersionServiceClient的Version来访问</li></ol><h4 id="相关参数"><a class="header-anchor" href="#相关参数" aria-hidden="true">#</a> 相关参数</h4><p>grpc调用的所有参数都是通过Message来定义, 可以看出,虽然VersionRequest什么都没偶,还是要定义</p><div class="language-proto line-numbers-mode"><pre><code>message VersionRequest {}\nmessage VersionResponse {\n\tstring version_string = 1;\n\tuint32 major = 2;\n\tuint32 minor = 3;\n\tuint32 patch = 4;\n\tstring prerelease = 5;\n\tstring build_metadata = 6;\n}\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="客户端和服务端的实现"><a class="header-anchor" href="#客户端和服务端的实现" aria-hidden="true">#</a> 客户端和服务端的实现</h4><p>客户端,由proto自动生成, 完全不用管理</p><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">type</span> VersionServiceClient <span class="token keyword">interface</span> <span class="token punctuation">{</span>\n\t<span class="token function">Version</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> in <span class="token operator">*</span>VersionRequest<span class="token punctuation">,</span> opts <span class="token operator">...</span>grpc<span class="token punctuation">.</span>CallOption<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>VersionResponse<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>versionServiceClient<span class="token punctuation">)</span> <span class="token function">Version</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> in <span class="token operator">*</span>VersionRequest<span class="token punctuation">,</span> opts <span class="token operator">...</span>grpc<span class="token punctuation">.</span>CallOption<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>VersionResponse<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\tout <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>VersionResponse<span class="token punctuation">)</span>\n\terr <span class="token operator">:=</span> grpc<span class="token punctuation">.</span><span class="token function">Invoke</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token string">&quot;/walletrpc.VersionService/Version&quot;</span><span class="token punctuation">,</span> in<span class="token punctuation">,</span> out<span class="token punctuation">,</span> c<span class="token punctuation">.</span>cc<span class="token punctuation">,</span> opts<span class="token operator">...</span><span class="token punctuation">)</span>\n\t<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err\n\t<span class="token punctuation">}</span>\n\t<span class="token keyword">return</span> out<span class="token punctuation">,</span> <span class="token boolean">nil</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>服务端</p><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">type</span> VersionServiceServer <span class="token keyword">interface</span> <span class="token punctuation">{</span>\n\t<span class="token function">Version</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> <span class="token operator">*</span>VersionRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>VersionResponse<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>versionServer<span class="token punctuation">)</span> <span class="token function">Version</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> req <span class="token operator">*</span>pb<span class="token punctuation">.</span>VersionRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>pb<span class="token punctuation">.</span>VersionResponse<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> <span class="token operator">&amp;</span>pb<span class="token punctuation">.</span>VersionResponse<span class="token punctuation">{</span>\n\t\tVersionString<span class="token punctuation">:</span> semverString<span class="token punctuation">,</span>\n\t\tMajor<span class="token punctuation">:</span>         semverMajor<span class="token punctuation">,</span>\n\t\tMinor<span class="token punctuation">:</span>         semverMinor<span class="token punctuation">,</span>\n\t\tPatch<span class="token punctuation">:</span>         semverPatch<span class="token punctuation">,</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>这里给的例子比较特殊,就是输入参数根本没用,不过看得出如何使用proto以及grpc了.</p><h3 id="walletloaderservice"><a class="header-anchor" href="#walletloaderservice" aria-hidden="true">#</a> WalletLoaderService</h3><p>此服务主要用于打开关闭钱包, StartConsensusRpc是在btcwallet启动的时候没有指定btcd的情形下,可以连接指定的btcd.</p><div class="language-proto line-numbers-mode"><pre><code>service WalletLoaderService {\n\trpc WalletExists (WalletExistsRequest) returns (WalletExistsResponse);\n\trpc CreateWallet (CreateWalletRequest) returns (CreateWalletResponse);\n\trpc OpenWallet (OpenWalletRequest) returns (OpenWalletResponse);\n\trpc CloseWallet (CloseWalletRequest) returns (CloseWalletResponse);\n\trpc StartConsensusRpc (StartConsensusRpcRequest) returns (StartConsensusRpcResponse);\n}\n\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>WalletLoaderService启动方式和VersionService完全一致.</p><p>我的问题: 钱包不存在的时候只能通过--create创建完成以后再启动,是否这个服务目前根本没用?</p><h2 id="核心服务walletservice"><a class="header-anchor" href="#核心服务walletservice" aria-hidden="true">#</a> 核心服务WalletService</h2><h3 id="接口"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h3><div class="language-proto line-numbers-mode"><pre><code>service WalletService {\n\t// Queries\n\trpc Ping (PingRequest) returns (PingResponse);\n\trpc Network (NetworkRequest) returns (NetworkResponse);\n\trpc AccountNumber (AccountNumberRequest) returns (AccountNumberResponse);\n\trpc Accounts (AccountsRequest) returns (AccountsResponse);\n\trpc Balance (BalanceRequest) returns (BalanceResponse);\n\trpc GetTransactions (GetTransactionsRequest) returns (GetTransactionsResponse);\n\n\t// Notifications\n\trpc TransactionNotifications (TransactionNotificationsRequest) returns (stream TransactionNotificationsResponse);\n\trpc SpentnessNotifications (SpentnessNotificationsRequest) returns (stream SpentnessNotificationsResponse);\n\trpc AccountNotifications (AccountNotificationsRequest) returns (stream AccountNotificationsResponse);\n\n\t// Control\n\trpc ChangePassphrase (ChangePassphraseRequest) returns (ChangePassphraseResponse);\n\trpc RenameAccount (RenameAccountRequest) returns (RenameAccountResponse);\n\trpc NextAccount (NextAccountRequest) returns (NextAccountResponse);\n\trpc NextAddress (NextAddressRequest) returns (NextAddressResponse);\n\trpc ImportPrivateKey (ImportPrivateKeyRequest) returns (ImportPrivateKeyResponse);\n\trpc FundTransaction (FundTransactionRequest) returns (FundTransactionResponse);\n\trpc SignTransaction (SignTransactionRequest) returns (SignTransactionResponse);\n\trpc PublishTransaction (PublishTransactionRequest) returns (PublishTransactionResponse);\n}\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>###启动过程</p><ol><li>walletMain中等待钱包打开以后获取到钱包句柄,然后调用startWalletRPCServices</li><li>注意startWalletRPCServices传递进去三个参数,一个是钱包句柄,一个是grpc server,另一个是普通的http rpc server</li><li>rpcserver.StartWalletService启动grpc WalletService</li><li>legacyServer.RegisterWallet 注册http rpc服务</li><li>pb.RegisterWalletServiceServer注册rpc.walletServer</li><li>rpc.walletServer实现了接口</li></ol><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">type</span> WalletServiceServer <span class="token keyword">interface</span> <span class="token punctuation">{</span>\n\t<span class="token comment">// Queries</span>\n\t<span class="token function">Ping</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> <span class="token operator">*</span>PingRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>PingResponse<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>\n\t<span class="token function">Network</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> <span class="token operator">*</span>NetworkRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>NetworkResponse<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>\n\t<span class="token function">AccountNumber</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> <span class="token operator">*</span>AccountNumberRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>AccountNumberResponse<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>\n\t<span class="token function">Accounts</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> <span class="token operator">*</span>AccountsRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>AccountsResponse<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>\n\t<span class="token function">Balance</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> <span class="token operator">*</span>BalanceRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>BalanceResponse<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>\n\t<span class="token function">GetTransactions</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> <span class="token operator">*</span>GetTransactionsRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>GetTransactionsResponse<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>\n\t<span class="token comment">// Notifications</span>\n\t<span class="token function">TransactionNotifications</span><span class="token punctuation">(</span><span class="token operator">*</span>TransactionNotificationsRequest<span class="token punctuation">,</span> WalletService_TransactionNotificationsServer<span class="token punctuation">)</span> <span class="token builtin">error</span>\n\t<span class="token function">SpentnessNotifications</span><span class="token punctuation">(</span><span class="token operator">*</span>SpentnessNotificationsRequest<span class="token punctuation">,</span> WalletService_SpentnessNotificationsServer<span class="token punctuation">)</span> <span class="token builtin">error</span>\n\t<span class="token function">AccountNotifications</span><span class="token punctuation">(</span><span class="token operator">*</span>AccountNotificationsRequest<span class="token punctuation">,</span> WalletService_AccountNotificationsServer<span class="token punctuation">)</span> <span class="token builtin">error</span>\n\t<span class="token comment">// Control</span>\n\t<span class="token function">ChangePassphrase</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> <span class="token operator">*</span>ChangePassphraseRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>ChangePassphraseResponse<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>\n\t<span class="token function">RenameAccount</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> <span class="token operator">*</span>RenameAccountRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>RenameAccountResponse<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>\n\t<span class="token function">NextAccount</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> <span class="token operator">*</span>NextAccountRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>NextAccountResponse<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>\n\t<span class="token function">NextAddress</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> <span class="token operator">*</span>NextAddressRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>NextAddressResponse<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>\n\t<span class="token function">ImportPrivateKey</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> <span class="token operator">*</span>ImportPrivateKeyRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>ImportPrivateKeyResponse<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>\n\t<span class="token function">FundTransaction</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> <span class="token operator">*</span>FundTransactionRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>FundTransactionResponse<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>\n\t<span class="token function">SignTransaction</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> <span class="token operator">*</span>SignTransactionRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>SignTransactionResponse<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>\n\t<span class="token function">PublishTransaction</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> <span class="token operator">*</span>PublishTransactionRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>PublishTransactionResponse<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="stream返回的实现"><a class="header-anchor" href="#stream返回的实现" aria-hidden="true">#</a> stream返回的实现</h3><p>stream就是持续不断的有返回的意思吧. <code> rpc TransactionNotifications (TransactionNotificationsRequest) returns (stream TransactionNotificationsResponse); </code> proto中的接口被转换成了<code> TransactionNotifications(*TransactionNotificationsRequest, WalletService_TransactionNotificationsServer) error </code> 其中<code>TransactionNotificationsResponse</code>被转换成了</p><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">type</span> WalletService_TransactionNotificationsServer <span class="token keyword">interface</span> <span class="token punctuation">{</span>\n\t<span class="token function">Send</span><span class="token punctuation">(</span><span class="token operator">*</span>TransactionNotificationsResponse<span class="token punctuation">)</span> <span class="token builtin">error</span>\n\tgrpc<span class="token punctuation">.</span>ServerStream\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>服务端TransactionNotifications实现</p><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>walletServer<span class="token punctuation">)</span> <span class="token function">TransactionNotifications</span><span class="token punctuation">(</span>req <span class="token operator">*</span>pb<span class="token punctuation">.</span>TransactionNotificationsRequest<span class="token punctuation">,</span>\n\tsvr pb<span class="token punctuation">.</span>WalletService_TransactionNotificationsServer<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>\n\n\tn <span class="token operator">:=</span> s<span class="token punctuation">.</span>wallet<span class="token punctuation">.</span>NtfnServer<span class="token punctuation">.</span><span class="token function">TransactionNotifications</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\t<span class="token keyword">defer</span> n<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n\tctxDone <span class="token operator">:=</span> svr<span class="token punctuation">.</span><span class="token function">Context</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\t<span class="token keyword">for</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">select</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">case</span> v <span class="token operator">:=</span> <span class="token operator">&lt;-</span>n<span class="token punctuation">.</span>C<span class="token punctuation">:</span>\n\t\t\tresp <span class="token operator">:=</span> pb<span class="token punctuation">.</span>TransactionNotificationsResponse<span class="token punctuation">{</span>\n\t\t\t\tAttachedBlocks<span class="token punctuation">:</span>           <span class="token function">marshalBlocks</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>AttachedBlocks<span class="token punctuation">)</span><span class="token punctuation">,</span>\n\t\t\t\tDetachedBlocks<span class="token punctuation">:</span>           <span class="token function">marshalHashes</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>DetachedBlocks<span class="token punctuation">)</span><span class="token punctuation">,</span>\n\t\t\t\tUnminedTransactions<span class="token punctuation">:</span>      <span class="token function">marshalTransactionDetails</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>UnminedTransactions<span class="token punctuation">)</span><span class="token punctuation">,</span>\n\t\t\t\tUnminedTransactionHashes<span class="token punctuation">:</span> <span class="token function">marshalHashes</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>UnminedTransactionHashes<span class="token punctuation">)</span><span class="token punctuation">,</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t\terr <span class="token operator">:=</span> svr<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>resp<span class="token punctuation">)</span>\n\t\t\t<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>\n\t\t\t\t<span class="token keyword">return</span> <span class="token function">translateError</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n\t\t\t<span class="token punctuation">}</span>\n\n\t\t<span class="token keyword">case</span> <span class="token operator">&lt;-</span>ctxDone<span class="token punctuation">:</span>\n\t\t\t<span class="token keyword">return</span> <span class="token boolean">nil</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="其他-与http-rpc服务的简单比较"><a class="header-anchor" href="#其他-与http-rpc服务的简单比较" aria-hidden="true">#</a> 其他: 与http rpc服务的简单比较</h2><p>通过代码实现对比就可以发现http rpc服务实现起来比较繁琐,各种客户端编解码需要自己处理, 不过从代码完善度来说,http接口明显更胜一筹,无论是注释还是测试case,包括api文档.</p><p>如果生产中使用,还是使用http rpc更好,如果熟悉代码的话,使用grpc更清晰.</p>',41)];e.render=function(a,t,e,o,c,r){return n(),s("div",null,p)};export{t as __pageData,e as default};
