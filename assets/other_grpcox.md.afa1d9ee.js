import{o as n,c as s,e as a}from"./app.f7f738b8.js";const e='{"title":"grpcox教程","description":"","frontmatter":{"title":"grpcox教程","date":"2020-08-22T03:06:23.000Z","draft":false},"headers":[{"level":2,"title":"grpcox介绍","slug":"grpcox介绍"},{"level":2,"title":"使用教程","slug":"使用教程"},{"level":3,"title":"proto文件","slug":"proto文件"},{"level":3,"title":"grpcServer","slug":"grpcserver"},{"level":3,"title":"grpcox和greeter_server配合效果","slug":"grpcox和greeter-server配合效果"}],"relativePath":"other/grpcox.md","lastUpdated":1640138776324}',p={},t=[a('<p>grpc版本的postman使用教程</p><h2 id="grpcox介绍"><a class="header-anchor" href="#grpcox介绍" aria-hidden="true">#</a> grpcox介绍</h2><p><a href="https://github.com/gusaul/grpcox" target="_blank" rel="noopener noreferrer">grpcox</a>是一个非常棒的工具,类似postman一样,可以帮助人们调试grpc接口. 当然目前还不能做到像postman一样,实现很多自动化的功能,但是作为界面友好的调试助手已经足够了.</p><h2 id="使用教程"><a class="header-anchor" href="#使用教程" aria-hidden="true">#</a> 使用教程</h2><p>所有文件都位于<a href="https://github.com/nkbai/-grpcox-example" target="_blank" rel="noopener noreferrer">我的github</a></p><h3 id="proto文件"><a class="header-anchor" href="#proto文件" aria-hidden="true">#</a> proto文件</h3><h4 id="proto文件-1"><a class="header-anchor" href="#proto文件-1" aria-hidden="true">#</a> proto文件</h4><div class="language-proto line-numbers-mode"><pre><code>syntax = &quot;proto3&quot;;\n\n\n\npackage proto;\n\n\n// The greeting service definition.\nservice Greeter {\n    // Sends a greeting\n    rpc SayHello (HelloRequest) returns (HelloReply) {\n    }\n}\n\n// The request message containing the user&#39;s name.\nmessage HelloRequest {\n    string name = 1;\n}\n\n// The response message containing the greetings\nmessage HelloReply {\n    string message = 1;\n}\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h4 id="makefile"><a class="header-anchor" href="#makefile" aria-hidden="true">#</a> Makefile</h4><div class="language-Makefile line-numbers-mode"><pre><code><span class="token builtin">.PHONY</span><span class="token punctuation">:</span> gogen\n<span class="token symbol">gogen</span><span class="token punctuation">:</span>\n\tprotoc -I<span class="token operator">=</span>.    -I<span class="token operator">=</span><span class="token variable">$</span><span class="token punctuation">(</span>GOPATH<span class="token punctuation">)</span>/src   --go_out<span class="token operator">=</span>plugins<span class="token operator">=</span>grpc<span class="token punctuation">:</span>. ./*.proto\n\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="grpcserver"><a class="header-anchor" href="#grpcserver" aria-hidden="true">#</a> grpcServer</h3><p>按照grpcox文档中的说明,要求server必须支持reflection,对于go语言版本的grpc来说,支持的非常完善. 两行代码即可.</p><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">package</span> main\n\n<span class="token keyword">import</span> <span class="token punctuation">(</span>\n\t<span class="token string">&quot;log&quot;</span>\n\t<span class="token string">&quot;net&quot;</span>\n\n\tpb <span class="token string">&quot;github.com/nkbai/grpcox-example/proto&quot;</span>\n\n\t<span class="token string">&quot;golang.org/x/net/context&quot;</span>\n\t<span class="token string">&quot;google.golang.org/grpc&quot;</span>\n\t<span class="token string">&quot;google.golang.org/grpc/reflection&quot;</span> \n<span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">(</span>\n\tport <span class="token operator">=</span> <span class="token string">&quot;:50051&quot;</span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">type</span> Config <span class="token keyword">struct</span> <span class="token punctuation">{</span>\n\tIP   <span class="token builtin">string</span> <span class="token string">`json:&quot;ip&quot;`</span>\n\tPort <span class="token builtin">string</span> <span class="token string">`json:&quot;port&quot;`</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// server is used to implement helloworld.GreeterServer.</span>\n<span class="token keyword">type</span> server <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token comment">// SayHello implements helloworld.GreeterServer</span>\n<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>server<span class="token punctuation">)</span> <span class="token function">SayHello</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> in <span class="token operator">*</span>pb<span class="token punctuation">.</span>HelloRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>pb<span class="token punctuation">.</span>HelloReply<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n\tlog<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;get request&quot;</span><span class="token punctuation">)</span>\n\t<span class="token keyword">return</span> <span class="token operator">&amp;</span>pb<span class="token punctuation">.</span>HelloReply<span class="token punctuation">{</span>Message<span class="token punctuation">:</span> <span class="token string">&quot;Hello &quot;</span> <span class="token operator">+</span> in<span class="token punctuation">.</span>Name<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\tlis<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Listen</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;0.0.0.0:50051&quot;</span><span class="token punctuation">)</span>\n\t<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>\n\t\tlog<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;failed to listen: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>\n\t<span class="token punctuation">}</span>\n\ts <span class="token operator">:=</span> grpc<span class="token punctuation">.</span><span class="token function">NewServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\tpb<span class="token punctuation">.</span><span class="token function">RegisterGreeterServer</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token operator">&amp;</span>server<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n\t<span class="token comment">// Register reflection service on gRPC server.</span>\n\treflection<span class="token punctuation">.</span><span class="token function">Register</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>\n\t<span class="token keyword">if</span> err <span class="token operator">:=</span> s<span class="token punctuation">.</span><span class="token function">Serve</span><span class="token punctuation">(</span>lis<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>\n\t\tlog<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;failed to serve: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><p>其中重要的是<code> &quot;google.golang.org/grpc/reflection&quot; </code>和<code>reflection.Register(s)</code>两行.其他与普通的grpc server没有区别.</p><h3 id="grpcox和greeter-server配合效果"><a class="header-anchor" href="#grpcox和greeter-server配合效果" aria-hidden="true">#</a> grpcox和greeter_server配合效果</h3><div class="language-bash line-numbers-mode"><pre><code><span class="token builtin class-name">cd</span> <span class="token variable">$GOPATH</span>/github.com/nkbai/grpcox-example/greeter_server\ngo run main.go <span class="token operator">&amp;</span>\n<span class="token builtin class-name">cd</span> <span class="token variable">$GOPATH</span>/github.com/gusaul/grpcox\ngo run grpcox.go \n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>然后打开浏览器:</p><p><img alt="" data-src="img/grpcox.png" loading="lazy" class="lazy"></p>',18)];p.render=function(a,e,p,r,o,l){return n(),s("div",null,t)};export{e as __pageData,p as default};
