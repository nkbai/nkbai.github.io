import{o as s,c as n,f as a,b as p,d as e,e as t}from"./app.63f3ffeb.js";const o='{"title":"从零实现消息中间件-server","description":"","frontmatter":{"title":"从零实现消息中间件-server","date":"2020-01-31T01:57:03.000Z","draft":false,"tags":["rust"],"categories":["技术相关"]},"headers":[{"level":2,"title":"presentation:\\n  width: 1024\\n  height: 800","slug":"presentation-width-1024height-800"}],"relativePath":"rust/rnats/ppt/从零实现消息中间件-server.md","lastUpdated":1582162586000}',l={},c=p("hr",null,null,-1),r=p("h2",{id:"presentation-width-1024height-800"},[p("a",{class:"header-anchor",href:"#presentation-width-1024height-800","aria-hidden":"true"},"#"),e(" presentation: width: 1024 height: 800")],-1),i=p("h1",{id:"需求"},[p("a",{class:"header-anchor",href:"#需求","aria-hidden":"true"},"#"),e(" 需求")],-1),u=p("ul",null,[p("li",null,"listen & accept"),p("li",null,"new client"),p("li",null,"其他暂不考虑")],-1),k=t('<h1 id="数据结构定义"><a class="header-anchor" href="#数据结构定义" aria-hidden="true">#</a> 数据结构定义</h1><div class="language-rust line-numbers-mode"><pre><code><span class="token attribute attr-name">#[derive(Debug, Default)]</span>\n<span class="token keyword">pub</span> <span class="token keyword">struct</span> <span class="token type-definition class-name">Server</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token punctuation">:</span> <span class="token class-name">SubListTrait</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>\n    state<span class="token punctuation">:</span> <span class="token class-name">Arc</span><span class="token operator">&lt;</span><span class="token class-name">Mutex</span><span class="token operator">&lt;</span><span class="token class-name">ServerState</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n<span class="token attribute attr-name">#[derive(Debug, Default)]</span>\n<span class="token keyword">pub</span> <span class="token keyword">struct</span> <span class="token type-definition class-name">ServerState</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token punctuation">:</span> <span class="token class-name">SubListTrait</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>\n    clients<span class="token punctuation">:</span> <span class="token class-name">HashMap</span><span class="token operator">&lt;</span><span class="token keyword">u64</span><span class="token punctuation">,</span> <span class="token class-name">Arc</span><span class="token operator">&lt;</span><span class="token class-name">Mutex</span><span class="token operator">&lt;</span><span class="token class-name">ClientMessageSender</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>\n    <span class="token keyword">pub</span> sublist<span class="token punctuation">:</span> <span class="token class-name">T</span><span class="token punctuation">,</span>\n    <span class="token keyword">pub</span> gen_cid<span class="token punctuation">:</span> <span class="token keyword">u64</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>',2),d=t('<h1 id="泛型-async"><a class="header-anchor" href="#泛型-async" aria-hidden="true">#</a> 泛型 &amp; async</h1><ol><li>使用async</li><li>在task之间传送</li></ol><div class="language-rust line-numbers-mode"><pre><code> <span class="token keyword">impl</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token punctuation">:</span> <span class="token class-name">SubListTrait</span> <span class="token operator">+</span> <span class="token class-name">Send</span> <span class="token operator">+</span> <span class="token lifetime-annotation symbol">&#39;static</span><span class="token operator">&gt;</span> <span class="token class-name">Server</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>\n <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',3),m=t('<h1 id="实现"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h1><ul><li>start 主要任务就是listen &amp; accept</li><li>new_client则是调用Client的process_connection 创建Client实例, 并保存.</li></ul><div class="language-rust line-numbers-mode"><pre><code> <span class="token keyword">impl</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token punctuation">:</span> <span class="token class-name">SubListTrait</span> <span class="token operator">+</span> <span class="token class-name">Send</span> <span class="token operator">+</span> <span class="token lifetime-annotation symbol">&#39;static</span><span class="token operator">&gt;</span> <span class="token class-name">Server</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>\n      <span class="token keyword">pub</span> <span class="token keyword">async</span> <span class="token keyword">fn</span> <span class="token function-definition function">start</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Box</span><span class="token operator">&lt;</span><span class="token keyword">dyn</span> <span class="token class-name">Error</span><span class="token operator">&gt;&gt;</span> <span class="token punctuation">{</span>\n\n    <span class="token punctuation">}</span>\n    <span class="token keyword">async</span> <span class="token keyword">fn</span> <span class="token function-definition function">new_client</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">,</span> conn<span class="token punctuation">:</span> <span class="token class-name">TcpStream</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">}</span>\n <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',3),b=t('<h1 id="使用"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h1><div class="language-rust line-numbers-mode"><pre><code><span class="token attribute attr-name">#[tokio::main]</span>\n<span class="token keyword">async</span> <span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Box</span><span class="token operator">&lt;</span><span class="token keyword">dyn</span> <span class="token class-name">Error</span><span class="token operator">&gt;&gt;</span> <span class="token punctuation">{</span>\n    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;server start..&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> s<span class="token punctuation">:</span> <span class="token class-name">Server</span><span class="token operator">&lt;</span><span class="token class-name">SimpleSubList</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token class-name">Server</span><span class="token punctuation">::</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    s<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">await</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>',2);l.render=function(p,e,t,o,l,h){return s(),n("div",null,[c,r,a(" slide "),i,u,a(" slide "),k,a(" slide "),d,a(" slide "),m,a(" slide "),b])};export{o as __pageData,l as default};
