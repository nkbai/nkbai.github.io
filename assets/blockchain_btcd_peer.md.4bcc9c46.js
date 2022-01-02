import{o as n,c as a,e as s,b as e}from"./app.1f3c315f.js";const p='{"title":"peer","description":"","frontmatter":{"title":"peer","date":"2018-11-30T04:24:21.000Z","draft":false,"markup":"mmark"},"relativePath":"blockchain/btcd/peer.md","lastUpdated":1561507892000}',t={},r=[s('<h1 id="peer模块"><a class="header-anchor" href="#peer模块" aria-hidden="true">#</a> peer模块</h1><p>peer模块主要是管理连接用的</p><p>看完peer模块,没啥感觉</p><p>peer主要是负责连接建立,然后进行一些基本的认证.</p><p>一个peer实际上就是一个一对一的连接, 如果是我主动与对方建立的连接,那么这个peer在我这里就是outbound peer. 如果是对方主动和我建立的连接,那么就是一个 inbound peer.</p><p>peer真正的使用者是btcd/server.go,哪里对一组peer进行管理.</p><p>这里的peer做的就是负责具体的发送消息,收到消息以后通过特定的接口通知上层(MessageListeners).</p><p>还有就是peer处理了连接并发操作问题,流量统计,连接保持(keep alive)等.</p><p>内部关键结构</p><div class="language-go line-numbers-mode"><pre><code><span class="token comment">// MessageListeners 负责如何处理收到的消息</span>\n<span class="token comment">//Config 是对peer的配置,创建时指定.</span>\n<span class="token comment">//Peer 这是最重要的,也是对外服务的出入口.</span>\n<span class="token comment">// 最重要的导出函数</span>\n<span class="token comment">// NewInboundPeer returns a new inbound bitcoin peer. Use Start to begin</span>\n<span class="token comment">// processing incoming and outgoing messages.</span>\n<span class="token keyword">func</span> <span class="token function">NewInboundPeer</span><span class="token punctuation">(</span>cfg <span class="token operator">*</span>Config<span class="token punctuation">)</span> <span class="token operator">*</span>Peer <span class="token punctuation">{</span>\n \n<span class="token comment">// NewOutboundPeer returns a new outbound bitcoin peer.</span>\n<span class="token keyword">func</span> <span class="token function">NewOutboundPeer</span><span class="token punctuation">(</span>cfg <span class="token operator">*</span>Config<span class="token punctuation">,</span> addr <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>Peer<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> \n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>',10),e("p",null,[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("mi",null,"α"),e("mi",{mathvariant:"normal"},"A"),e("mspace",{linebreak:"newline"}),e("mi",null,"β"),e("mi",{mathvariant:"normal"},"B"),e("mspace",{linebreak:"newline"}),e("mi",null,"γ"),e("mi",{mathvariant:"normal"},"Γ"),e("mspace",{linebreak:"newline"})]),e("annotation",{encoding:"application/x-tex"},"\\alpha \\Alpha \\\\ \\beta \\Beta \\\\ \\gamma \\Gamma \\\\ ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.68333em","vertical-align":"0em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.0037em"}},"α"),e("span",{class:"mord mathrm"},"A")]),e("span",{class:"mspace newline"}),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.05278em"}},"β"),e("span",{class:"mord mathrm"},"B")]),e("span",{class:"mspace newline"}),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.8777699999999999em","vertical-align":"-0.19444em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.05556em"}},"γ"),e("span",{class:"mord"},"Γ")]),e("span",{class:"mspace newline"})])])])],-1)];t.render=function(s,e,p,t,l,c){return n(),a("div",null,r)};export{p as __pageData,t as default};
