import{o as e,c as r,e as a}from"./app.26819860.js";const t='{"title":"synapse代码阅读","description":"","frontmatter":{"title":"synapse代码阅读","date":"2018-10-22T13:09:09.000Z","draft":false,"markup":"mmark"},"headers":[{"level":2,"title":"HomeServer中的get_xx找不到","slug":"homeserver中的get-xx找不到"},{"level":2,"title":"http服务的总入口","slug":"http服务的总入口"},{"level":2,"title":"http模块","slug":"http模块"},{"level":2,"title":"handlers模块","slug":"handlers模块"},{"level":3,"title":"变量类型映射","slug":"变量类型映射"},{"level":3,"title":"app service 注册问题","slug":"app-service-注册问题"},{"level":3,"title":"可否通过app service注册用户呢?","slug":"可否通过app-service注册用户呢"}],"relativePath":"ethereum/synapse代码阅读.md","lastUpdated":1561553438000}',i={},s=[a('<h1 id="synapse代码阅读的一点体会"><a class="header-anchor" href="#synapse代码阅读的一点体会" aria-hidden="true">#</a> synapse代码阅读的一点体会</h1><h2 id="homeserver中的get-xx找不到"><a class="header-anchor" href="#homeserver中的get-xx找不到" aria-hidden="true">#</a> HomeServer中的get_xx找不到</h2><p>实际上是通过setattr DEPENDENCIES动态设置的, 以federation_client为例. get_federation_client 是在初始化的时候通过<code>_make_dependency_method</code>构造的. _make_dependency_method最终会调用build_federation_client来构造实例,</p><p>至于为什么这么做,我猜可能是为了延迟实例初始化.避免不避免的构建.</p><h2 id="http服务的总入口"><a class="header-anchor" href="#http服务的总入口" aria-hidden="true">#</a> http服务的总入口</h2><p>SynapseHomeServer的_listener_http关联到SynapseSite SynapseSite是按照twisted框架导出真实服务接口的地方.</p><p>SynapseHomeServer的_configure_named_resource是加载相应的resource的入口 在这里可以看到配置文件如何影响加载</p><p>ClientRestResource这是目前client-server api的总入口. TransportLayerServer这是fedoration 服务的总入口</p><h2 id="http模块"><a class="header-anchor" href="#http模块" aria-hidden="true">#</a> http模块</h2><ol><li><a href="http://site.py" target="_blank" rel="noopener noreferrer">site.py</a> 构建了基于twisted的服务处理流程. SynapseSite,提供SynapseRequestFactory,SynapseRequestFactory创建SynapseRequest</li><li>additional_resource.py 暂时完全用不着,因为目前配置文件这部分为空</li><li><a href="http://client.py" target="_blank" rel="noopener noreferrer">client.py</a> SimpleHttpClient 是让synapse向其他服务器发起http请求用,比如</li></ol><ul><li>CaptchaServerHttpClient用于captcha验证</li><li>HomeServer get_simple_http_client 调用创建的用于Identity,fedoration请求等等.</li></ul><ol start="4"><li><a href="http://matrixfederationclient.py" target="_blank" rel="noopener noreferrer">matrixfederationclient.py</a> 主要用于创建到fedoration的http链接,我猜应该是因为@\balice:domain.com,这里的domain.com解析比较复杂,synapse有专门的说明,在dns解析中,需要有特殊支持.</li><li>request_metrics.py 用于测量每次请求的花费</li><li>server.py主要提供JsonResource,其他各种handler都基于这个.</li></ol><h2 id="handlers模块"><a class="header-anchor" href="#handlers模块" aria-hidden="true">#</a> handlers模块</h2><p>client-server ,fedoration,admin等等服务端最终的handler都在这里. 其中最复杂的莫过于sync.py中负责/sync的api</p><h3 id="变量类型映射"><a class="header-anchor" href="#变量类型映射" aria-hidden="true">#</a> 变量类型映射</h3><p>txn_ctrl--&gt; _TransactionController txn AppServiceTransaction</p><h3 id="app-service-注册问题"><a class="header-anchor" href="#app-service-注册问题" aria-hidden="true">#</a> app service 注册问题</h3><p>LoginType.APPLICATION_SERVICE 通过他可以跟踪到 application service 如何新注册用户</p><p>v1_only/register.py 1. on_POST 就算是禁止注册,也可以通过application service注册用户 2. _do_app_service 进行注册 3. appservice_register url中的access_token以及userId传进去. storage/appservice.py: 1. 如果这个access_token能够找到对应的service,则允许注册,否则不允许 我觉得这里的service应该是在配置文件homeserver.yaml app_service_config_files 2. application_service提供了一一系列验证,如果可以将此用户写入数据库中 3. 问题是如何登陆呢?这种方式也没法控制用户注册, 因为他并不会转到application service,让他们来处理这个事情.</p><h3 id="可否通过app-service注册用户呢"><a class="header-anchor" href="#可否通过app-service注册用户呢" aria-hidden="true">#</a> 可否通过app service注册用户呢?</h3>',20)];i.render=function(a,t,i,p,n,l){return e(),r("div",null,s)};export{t as __pageData,i as default};
