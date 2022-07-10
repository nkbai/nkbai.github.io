import{_ as n,c as s,o as a,a as e}from"./app.7ecda22b.js";const m='{"title":"grpcox\u6559\u7A0B","description":"","frontmatter":{"title":"grpcox\u6559\u7A0B","date":"2020-08-22T03:06:23.000Z","draft":false},"headers":[{"level":2,"title":"grpcox\u4ECB\u7ECD","slug":"grpcox\u4ECB\u7ECD"},{"level":2,"title":"\u4F7F\u7528\u6559\u7A0B","slug":"\u4F7F\u7528\u6559\u7A0B"},{"level":3,"title":"proto\u6587\u4EF6","slug":"proto\u6587\u4EF6"},{"level":3,"title":"grpcServer","slug":"grpcserver"},{"level":3,"title":"grpcox\u548Cgreeter_server\u914D\u5408\u6548\u679C","slug":"grpcox\u548Cgreeter-server\u914D\u5408\u6548\u679C"}],"relativePath":"other/grpcox.md"}',p={},t=e(`<p>grpc\u7248\u672C\u7684postman\u4F7F\u7528\u6559\u7A0B</p><h2 id="grpcox\u4ECB\u7ECD" tabindex="-1">grpcox\u4ECB\u7ECD <a class="header-anchor" href="#grpcox\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p><a href="https://github.com/gusaul/grpcox" target="_blank" rel="noopener noreferrer">grpcox</a>\u662F\u4E00\u4E2A\u975E\u5E38\u68D2\u7684\u5DE5\u5177,\u7C7B\u4F3Cpostman\u4E00\u6837,\u53EF\u4EE5\u5E2E\u52A9\u4EBA\u4EEC\u8C03\u8BD5grpc\u63A5\u53E3. \u5F53\u7136\u76EE\u524D\u8FD8\u4E0D\u80FD\u505A\u5230\u50CFpostman\u4E00\u6837,\u5B9E\u73B0\u5F88\u591A\u81EA\u52A8\u5316\u7684\u529F\u80FD,\u4F46\u662F\u4F5C\u4E3A\u754C\u9762\u53CB\u597D\u7684\u8C03\u8BD5\u52A9\u624B\u5DF2\u7ECF\u8DB3\u591F\u4E86.</p><h2 id="\u4F7F\u7528\u6559\u7A0B" tabindex="-1">\u4F7F\u7528\u6559\u7A0B <a class="header-anchor" href="#\u4F7F\u7528\u6559\u7A0B" aria-hidden="true">#</a></h2><p>\u6240\u6709\u6587\u4EF6\u90FD\u4F4D\u4E8E<a href="https://github.com/nkbai/-grpcox-example" target="_blank" rel="noopener noreferrer">\u6211\u7684github</a></p><h3 id="proto\u6587\u4EF6" tabindex="-1">proto\u6587\u4EF6 <a class="header-anchor" href="#proto\u6587\u4EF6" aria-hidden="true">#</a></h3><h4 id="proto\u6587\u4EF6-1" tabindex="-1">proto\u6587\u4EF6 <a class="header-anchor" href="#proto\u6587\u4EF6-1" aria-hidden="true">#</a></h4><div class="language-proto line-numbers-mode"><pre><code>syntax = &quot;proto3&quot;;



package proto;


// The greeting service definition.
service Greeter {
    // Sends a greeting
    rpc SayHello (HelloRequest) returns (HelloReply) {
    }
}

// The request message containing the user&#39;s name.
message HelloRequest {
    string name = 1;
}

// The response message containing the greetings
message HelloReply {
    string message = 1;
}
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h4 id="makefile" tabindex="-1">Makefile <a class="header-anchor" href="#makefile" aria-hidden="true">#</a></h4><div class="language-Makefile line-numbers-mode"><pre><code><span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> gogen
<span class="token target symbol">gogen</span><span class="token punctuation">:</span>
	protoc -I<span class="token operator">=</span>.    -I<span class="token operator">=</span><span class="token variable">$</span><span class="token punctuation">(</span>GOPATH<span class="token punctuation">)</span>/src   --go_out<span class="token operator">=</span>plugins<span class="token operator">=</span>grpc<span class="token punctuation">:</span>. ./*.proto

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="grpcserver" tabindex="-1">grpcServer <a class="header-anchor" href="#grpcserver" aria-hidden="true">#</a></h3><p>\u6309\u7167grpcox\u6587\u6863\u4E2D\u7684\u8BF4\u660E,\u8981\u6C42server\u5FC5\u987B\u652F\u6301reflection,\u5BF9\u4E8Ego\u8BED\u8A00\u7248\u672C\u7684grpc\u6765\u8BF4,\u652F\u6301\u7684\u975E\u5E38\u5B8C\u5584. \u4E24\u884C\u4EE3\u7801\u5373\u53EF.</p><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;net&quot;</span>

	pb <span class="token string">&quot;github.com/nkbai/grpcox-example/proto&quot;</span>

	<span class="token string">&quot;golang.org/x/net/context&quot;</span>
	<span class="token string">&quot;google.golang.org/grpc&quot;</span>
	<span class="token string">&quot;google.golang.org/grpc/reflection&quot;</span> 
<span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
	port <span class="token operator">=</span> <span class="token string">&quot;:50051&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Config <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	IP   <span class="token builtin">string</span> <span class="token string">\`json:&quot;ip&quot;\`</span>
	Port <span class="token builtin">string</span> <span class="token string">\`json:&quot;port&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token comment">// server is used to implement helloworld.GreeterServer.</span>
<span class="token keyword">type</span> server <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// SayHello implements helloworld.GreeterServer</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>server<span class="token punctuation">)</span> <span class="token function">SayHello</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> in <span class="token operator">*</span>pb<span class="token punctuation">.</span>HelloRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>pb<span class="token punctuation">.</span>HelloReply<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;get request&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>pb<span class="token punctuation">.</span>HelloReply<span class="token punctuation">{</span>Message<span class="token punctuation">:</span> <span class="token string">&quot;Hello &quot;</span> <span class="token operator">+</span> in<span class="token punctuation">.</span>Name<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	lis<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Listen</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;0.0.0.0:50051&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;failed to listen: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	s <span class="token operator">:=</span> grpc<span class="token punctuation">.</span><span class="token function">NewServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	pb<span class="token punctuation">.</span><span class="token function">RegisterGreeterServer</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token operator">&amp;</span>server<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token comment">// Register reflection service on gRPC server.</span>
	reflection<span class="token punctuation">.</span><span class="token function">Register</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">:=</span> s<span class="token punctuation">.</span><span class="token function">Serve</span><span class="token punctuation">(</span>lis<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;failed to serve: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><p>\u5176\u4E2D\u91CD\u8981\u7684\u662F<code> &quot;google.golang.org/grpc/reflection&quot; </code>\u548C<code>reflection.Register(s)</code>\u4E24\u884C.\u5176\u4ED6\u4E0E\u666E\u901A\u7684grpc server\u6CA1\u6709\u533A\u522B.</p><h3 id="grpcox\u548Cgreeter-server\u914D\u5408\u6548\u679C" tabindex="-1">grpcox\u548Cgreeter_server\u914D\u5408\u6548\u679C <a class="header-anchor" href="#grpcox\u548Cgreeter-server\u914D\u5408\u6548\u679C" aria-hidden="true">#</a></h3><div class="language-bash line-numbers-mode"><pre><code><span class="token builtin class-name">cd</span> <span class="token variable">$GOPATH</span>/github.com/nkbai/grpcox-example/greeter_server
go run main.go <span class="token operator">&amp;</span>
<span class="token builtin class-name">cd</span> <span class="token variable">$GOPATH</span>/github.com/gusaul/grpcox
go run grpcox.go 
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u7136\u540E\u6253\u5F00\u6D4F\u89C8\u5668:</p><p><img alt="" data-src="img/grpcox.png" loading="lazy" class="lazy"></p>`,18),o=[t];function r(l,c,i,u,b,k){return a(),s("div",null,o)}var d=n(p,[["render",r]]);export{m as __pageData,d as default};
