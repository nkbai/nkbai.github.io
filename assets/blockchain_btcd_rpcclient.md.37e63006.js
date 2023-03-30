import{_ as n,c as s,o as a,a as t}from"./app.3dd4ae37.js";const d='{"title":"rpcclient","description":"","frontmatter":{"title":"rpcclient","date":"2018-11-29T03:57:26.000Z","draft":false,"markup":"mmark"},"headers":[{"level":2,"title":"\u521B\u5EFAclient","slug":"\u521B\u5EFAclient"},{"level":2,"title":"http \u8C03\u7528\u5206\u6790","slug":"http-\u8C03\u7528\u5206\u6790"},{"level":2,"title":"websocket\u8FDE\u63A5\u7684\u4E8B\u4EF6\u63A8\u9001","slug":"websocket\u8FDE\u63A5\u7684\u4E8B\u4EF6\u63A8\u9001"}],"relativePath":"blockchain/btcd/rpcclient.md"}',e={},p=t(`<h1 id="rpc-client-\u6A21\u5757" tabindex="-1">rpc client \u6A21\u5757 <a class="header-anchor" href="#rpc-client-\u6A21\u5757" aria-hidden="true">#</a></h1><p>\u8FD9\u4E2A\u6A21\u5757\u662F\u8FDB\u884Crpc\u8C03\u7528\u7684\u5165\u53E3\u6A21\u5757,\u662F\u4E3A\u4E86\u5E2E\u52A9btcd\u7684\u5BA2\u6237\u7AEF\u7A0B\u5E8F\u5B9E\u73B0\u800C\u8BBE\u8BA1\u7684\u6A21\u5757,\u6CE8\u610Fbtcctl\u5E76\u6CA1\u6709\u7528\u6B64\u6A21\u5757,\u5B83\u76F4\u63A5\u7528\u7684\u662Fbtcjson.</p><p>\u8FD9\u4E2A\u6A21\u5757\u5F0F\u5728btcjson\u4E0A\u9762\u518D\u6B21\u5C01\u88C5,\u65B9\u4FBF\u8C03\u7528</p><h2 id="\u521B\u5EFAclient" tabindex="-1">\u521B\u5EFAclient <a class="header-anchor" href="#\u521B\u5EFAclient" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><pre><code>connCfg <span class="token operator">:=</span> <span class="token operator">&amp;</span>rpcclient<span class="token punctuation">.</span>ConnConfig<span class="token punctuation">{</span>
		Host<span class="token punctuation">:</span>         <span class="token string">&quot;192.168.124.13:18334&quot;</span><span class="token punctuation">,</span>
		User<span class="token punctuation">:</span>         <span class="token string">&quot;bai&quot;</span><span class="token punctuation">,</span>
		Pass<span class="token punctuation">:</span>         <span class="token string">&quot;bai&quot;</span><span class="token punctuation">,</span>
		HTTPPostMode<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Bitcoin core only supports HTTP POST mode</span>
		DisableTLS<span class="token punctuation">:</span>   <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// Bitcoin core does not provide TLS by default,</span>
		Certificates<span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">\`-----BEGIN CERTIFICATE-----
MIICTzCCAbGgAwIBAgIQLZMB/bcvEeMIuQSobOhvcTAKBggqhkjOPQQDBDAhMREw
DwYDVQQKEwhnZW5jZXJ0czEMMAoGA1UEAxMDZXRoMB4XDTE4MTEyNzA2MzYxMFoX
DTI4MTEyNTA2MzYxMFowITERMA8GA1UEChMIZ2VuY2VydHMxDDAKBgNVBAMTA2V0
aDCBmzAQBgcqhkjOPQIBBgUrgQQAIwOBhgAEAD5A5+3tRK2UDwmIUYfkWPzXtS67
zjgToegCMGkgzEwWrOJvaPj2uFy95v5hsozmfyh5cZY1o2FHOGrYnVNQcxE+AW9Z
Oofsgz+4SPY7W8bTkZka6670ejZ1EMfPwFio7ObyVEZt4eFe7xVQ9pJEwg3XWM2c
YdT6xpn0gQAQ9canuWa8o4GHMIGEMA4GA1UdDwEB/wQEAwICpDAPBgNVHRMBAf8E
BTADAQH/MGEGA1UdEQRaMFiCA2V0aIIJbG9jYWxob3N0hwR/AAABhxAAAAAAAAAA
AAAAAAAAAAABhwTAqHwNhwQKAABkhxD+gAAAAAAAADrVR//+ALeGhxD+gAAAAAAA
ALj9/f/+anOwMAoGCCqGSM49BAMEA4GLADCBhwJBU0neT5MZvmRwXnUXUdorOojt
B2sqIW1eZkb6xZzZTnbjLaU+EFdMsdHYxXcM9eAHSbtKbRmsCh+DBL7sWuMNiJYC
QgFRgh2wZofvEBFVLXGTgawWv8qIqgneOflIcl4cukbA7PLLZ5nfHCO/iC7oP6JH
bkGHJJz1CYKS12HU4jzSZYq7eQ==
-----END CERTIFICATE-----\`</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// Notice the notification parameter is nil since notifications are</span>
	<span class="token comment">// not supported in HTTP POST mode.</span>
	client<span class="token punctuation">,</span> err <span class="token operator">:=</span> rpcclient<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>connCfg<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>\u5982\u679C\u8981\u8C03\u7528\u5728\u53E6\u4E00\u53F0\u7535\u8111\u4E0A\u8FD0\u884C\u7684btcd,\u5C31\u5FC5\u987B\u6307\u5B9A\u6B63\u786E\u7684\u8BC1\u4E66,\u5426\u5219\u65E0\u6CD5\u5EFA\u7ACB\u6709\u6548\u8FDE\u63A5.</p><h2 id="http-\u8C03\u7528\u5206\u6790" tabindex="-1">http \u8C03\u7528\u5206\u6790 <a class="header-anchor" href="#http-\u8C03\u7528\u5206\u6790" aria-hidden="true">#</a></h2><p>\u4EE5GetBlockCount\u4E3A\u4F8B\u8FDB\u884C\u5206\u6790</p><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Client<span class="token punctuation">)</span> <span class="token function">GetBlockCountAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span> FutureGetBlockCountResult <span class="token punctuation">{</span>
	cmd <span class="token operator">:=</span> btcjson<span class="token punctuation">.</span><span class="token function">NewGetBlockCountCmd</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> c<span class="token punctuation">.</span><span class="token function">sendCmd</span><span class="token punctuation">(</span>cmd<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// GetBlockCount returns the number of blocks in the longest block chain.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Client<span class="token punctuation">)</span> <span class="token function">GetBlockCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int64</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> c<span class="token punctuation">.</span><span class="token function">GetBlockCountAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Receive</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u771F\u6B63\u901A\u7528\u90E8\u5206\u7684\u5904\u7406\u90FD\u5728infrastructure.go\u4E2D,\u8BE5\u6587\u4EF6\u5904\u7406\u4E86\u5982\u4F55\u53D1\u9001\u548C\u6D3E\u53D1\u6D88\u606F,\u517C\u987Ehttp\u548Cwebsocket\u4E24\u79CD\u8FDE\u63A5\u65B9\u5F0F.</p><div class="language-go line-numbers-mode"><pre><code><span class="token comment">// start begins processing input and output messages.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Client<span class="token punctuation">)</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	log<span class="token punctuation">.</span><span class="token function">Tracef</span><span class="token punctuation">(</span><span class="token string">&quot;Starting RPC client %s&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">.</span>config<span class="token punctuation">.</span>Host<span class="token punctuation">)</span>

	<span class="token comment">// Start the I/O processing handlers depending on whether the client is</span>
	<span class="token comment">// in HTTP POST mode or the default websocket mode.</span>
	<span class="token keyword">if</span> c<span class="token punctuation">.</span>config<span class="token punctuation">.</span>HTTPPostMode <span class="token punctuation">{</span>
		c<span class="token punctuation">.</span>wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> c<span class="token punctuation">.</span><span class="token function">sendPostHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		c<span class="token punctuation">.</span>wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> c<span class="token punctuation">.</span>ntfnHandlers <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> c<span class="token punctuation">.</span>ntfnHandlers<span class="token punctuation">.</span>OnClientConnected <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
					c<span class="token punctuation">.</span>ntfnHandlers<span class="token punctuation">.</span><span class="token function">OnClientConnected</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
			c<span class="token punctuation">.</span>wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> c<span class="token punctuation">.</span><span class="token function">wsInHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> c<span class="token punctuation">.</span><span class="token function">wsOutHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u542F\u52A8\u8FC7\u7A0B\u5C31\u53EF\u4EE5\u770B\u51FA\u6765,\u5BF9\u4E8Ehttp\u5C31\u662F\u542F\u52A8\u4E00\u4E2A\u63A5\u53D7\u4E0A\u5C42\u53D1\u8D77post\u8BF7\u6C42\u7684chan\u5C31\u53EF\u4EE5\u4E86. \u4F46\u662Fwebsocket\u662F\u4E24\u4E2A,\u4E00\u4E2A\u662F\u63A5\u53D7\u4E0A\u5C42\u53D1\u9001\u6D88\u606F\u8BF7\u6C42,\u4E00\u4E2A\u662F\u63A5\u53D7\u670D\u52A1\u5668\u4E3B\u52A8\u53D1\u9001\u6765\u7684\u6D88\u606F. \u4E5F\u5C31\u662F\u8BF4\u5728websocket\u65B9\u5F0F\u4E0B,\u6240\u6709\u7684\u6D88\u606F\u8D70\u7684\u90FD\u662Fwebsocket\u6D88\u606F.</p><p>\u76F8\u5BF9http\u6765\u8BF4,\u6536\u5230\u7684\u6D88\u606F\u660E\u786E\u77E5\u9053\u6D3E\u53D1\u5230\u54EA\u4E2AResponse,\u4F46\u662Fwebsocket\u5C31\u5FC5\u987B\u901A\u8FC7id\u6765\u5904\u7406.\u56E0\u6B64\u5904\u7406http\u6D88\u606F\u7684\u662FhandleSendPostMessage,\u800C\u5904\u7406websocket\u6D88\u606F\u7684\u662FhandleMessage</p><p>\u56E0\u6B64\u6700\u7EC8\u5728handleSendPostMessage\u4E2DFutureGetBlockCountResult\u7684Receive\u6536\u5230\u6570\u636E,\u5E76\u8FDB\u884C\u89E3\u6790,\u7136\u540E\u8FD4\u56DE.</p><h2 id="websocket\u8FDE\u63A5\u7684\u4E8B\u4EF6\u63A8\u9001" tabindex="-1">websocket\u8FDE\u63A5\u7684\u4E8B\u4EF6\u63A8\u9001 <a class="header-anchor" href="#websocket\u8FDE\u63A5\u7684\u4E8B\u4EF6\u63A8\u9001" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><pre><code><span class="token comment">// handleMessage is the main handler for incoming notifications and responses.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Client<span class="token punctuation">)</span> <span class="token function">handleMessage</span><span class="token punctuation">(</span>msg <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// Attempt to unmarshal the message as either a notification or</span>
	<span class="token comment">// response.</span>
	<span class="token keyword">var</span> in inMessage
	json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span>msg<span class="token punctuation">,</span> <span class="token operator">&amp;</span>in<span class="token punctuation">)</span>
 
	<span class="token comment">// JSON-RPC 1.0 notifications are requests with a null id.</span>
	<span class="token keyword">if</span> in<span class="token punctuation">.</span>ID <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		ntfn <span class="token operator">:=</span> in<span class="token punctuation">.</span>rawNotification
		<span class="token comment">// Deliver the notification.</span>
		log<span class="token punctuation">.</span><span class="token function">Tracef</span><span class="token punctuation">(</span><span class="token string">&quot;Received notification [%s]&quot;</span><span class="token punctuation">,</span> in<span class="token punctuation">.</span>Method<span class="token punctuation">)</span>
		c<span class="token punctuation">.</span><span class="token function">handleNotification</span><span class="token punctuation">(</span>in<span class="token punctuation">.</span>rawNotification<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	id <span class="token operator">:=</span> <span class="token function">uint64</span><span class="token punctuation">(</span><span class="token operator">*</span>in<span class="token punctuation">.</span>ID<span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">Tracef</span><span class="token punctuation">(</span><span class="token string">&quot;Received response for id %d (result %s)&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">,</span> in<span class="token punctuation">.</span>Result<span class="token punctuation">)</span>
	request <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">removeRequest</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>

	<span class="token comment">// Nothing more to do if there is no request associated with this reply.</span>
	<span class="token keyword">if</span> request <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token operator">||</span> request<span class="token punctuation">.</span>responseChan <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Warnf</span><span class="token punctuation">(</span><span class="token string">&quot;Received unexpected reply: %s (id %d)&quot;</span><span class="token punctuation">,</span> in<span class="token punctuation">.</span>Result<span class="token punctuation">,</span>
			id<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// Since the command was successful, examine it to see if it&#39;s a</span>
	<span class="token comment">// notification, and if is, add it to the notification state so it</span>
	<span class="token comment">// can automatically be re-established on reconnect.</span>
	c<span class="token punctuation">.</span><span class="token function">trackRegisteredNtfns</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>cmd<span class="token punctuation">)</span>

	<span class="token comment">// Deliver the response.</span>
	result<span class="token punctuation">,</span> err <span class="token operator">:=</span> in<span class="token punctuation">.</span>rawResponse<span class="token punctuation">.</span><span class="token function">result</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	request<span class="token punctuation">.</span>responseChan <span class="token operator">&lt;-</span> <span class="token operator">&amp;</span>response<span class="token punctuation">{</span>result<span class="token punctuation">:</span> result<span class="token punctuation">,</span> err<span class="token punctuation">:</span> err<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>\u670D\u52A1\u5668\u7684\u4E3B\u52A8\u63A8\u9001\u7684Notification,\u6D88\u606F\u4E2D\u662F\u6CA1\u6709ID\u4E00\u9879\u7684,\u5982\u679C\u662F\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\u6D88\u606F,\u670D\u52A1\u5668\u63A8\u9001\u6D88\u606F\u80AF\u5B9A\u5305\u542BID.</p><p>\u4EE5\u4E0B\u662F\u670D\u52A1\u5668\u53EF\u4EE5\u4E3B\u52A8\u63A8\u9001\u7684\u4E8B\u4EF6.</p><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
	<span class="token comment">// BlockConnectedNtfnMethod is the legacy, deprecated method used for</span>
	<span class="token comment">// notifications from the chain server that a block has been connected.</span>
	<span class="token comment">//</span>
	<span class="token comment">// NOTE: Deprecated. Use FilteredBlockConnectedNtfnMethod instead.</span>
	BlockConnectedNtfnMethod <span class="token operator">=</span> <span class="token string">&quot;blockconnected&quot;</span>

	<span class="token comment">// BlockDisconnectedNtfnMethod is the legacy, deprecated method used for</span>
	<span class="token comment">// notifications from the chain server that a block has been</span>
	<span class="token comment">// disconnected.</span>
	<span class="token comment">//</span>
	<span class="token comment">// NOTE: Deprecated. Use FilteredBlockDisconnectedNtfnMethod instead.</span>
	BlockDisconnectedNtfnMethod <span class="token operator">=</span> <span class="token string">&quot;blockdisconnected&quot;</span>

	<span class="token comment">// FilteredBlockConnectedNtfnMethod is the new method used for</span>
	<span class="token comment">// notifications from the chain server that a block has been connected.</span>
	FilteredBlockConnectedNtfnMethod <span class="token operator">=</span> <span class="token string">&quot;filteredblockconnected&quot;</span>

	<span class="token comment">// FilteredBlockDisconnectedNtfnMethod is the new method used for</span>
	<span class="token comment">// notifications from the chain server that a block has been</span>
	<span class="token comment">// disconnected.</span>
	FilteredBlockDisconnectedNtfnMethod <span class="token operator">=</span> <span class="token string">&quot;filteredblockdisconnected&quot;</span>

	<span class="token comment">// RecvTxNtfnMethod is the legacy, deprecated method used for</span>
	<span class="token comment">// notifications from the chain server that a transaction which pays to</span>
	<span class="token comment">// a registered address has been processed.</span>
	<span class="token comment">//</span>
	<span class="token comment">// NOTE: Deprecated. Use RelevantTxAcceptedNtfnMethod and</span>
	<span class="token comment">// FilteredBlockConnectedNtfnMethod instead.</span>
	RecvTxNtfnMethod <span class="token operator">=</span> <span class="token string">&quot;recvtx&quot;</span>

	<span class="token comment">// RedeemingTxNtfnMethod is the legacy, deprecated method used for</span>
	<span class="token comment">// notifications from the chain server that a transaction which spends a</span>
	<span class="token comment">// registered outpoint has been processed.</span>
	<span class="token comment">//</span>
	<span class="token comment">// NOTE: Deprecated. Use RelevantTxAcceptedNtfnMethod and</span>
	<span class="token comment">// FilteredBlockConnectedNtfnMethod instead.</span>
	RedeemingTxNtfnMethod <span class="token operator">=</span> <span class="token string">&quot;redeemingtx&quot;</span>

	<span class="token comment">// RescanFinishedNtfnMethod is the legacy, deprecated method used for</span>
	<span class="token comment">// notifications from the chain server that a legacy, deprecated rescan</span>
	<span class="token comment">// operation has finished.</span>
	<span class="token comment">//</span>
	<span class="token comment">// NOTE: Deprecated. Not used with rescanblocks command.</span>
	RescanFinishedNtfnMethod <span class="token operator">=</span> <span class="token string">&quot;rescanfinished&quot;</span>

	<span class="token comment">// RescanProgressNtfnMethod is the legacy, deprecated method used for</span>
	<span class="token comment">// notifications from the chain server that a legacy, deprecated rescan</span>
	<span class="token comment">// operation this is underway has made progress.</span>
	<span class="token comment">//</span>
	<span class="token comment">// NOTE: Deprecated. Not used with rescanblocks command.</span>
	RescanProgressNtfnMethod <span class="token operator">=</span> <span class="token string">&quot;rescanprogress&quot;</span>

	<span class="token comment">// TxAcceptedNtfnMethod is the method used for notifications from the</span>
	<span class="token comment">// chain server that a transaction has been accepted into the mempool.</span>
	TxAcceptedNtfnMethod <span class="token operator">=</span> <span class="token string">&quot;txaccepted&quot;</span>

	<span class="token comment">// TxAcceptedVerboseNtfnMethod is the method used for notifications from</span>
	<span class="token comment">// the chain server that a transaction has been accepted into the</span>
	<span class="token comment">// mempool.  This differs from TxAcceptedNtfnMethod in that it provides</span>
	<span class="token comment">// more details in the notification.</span>
	TxAcceptedVerboseNtfnMethod <span class="token operator">=</span> <span class="token string">&quot;txacceptedverbose&quot;</span>

	<span class="token comment">// RelevantTxAcceptedNtfnMethod is the new method used for notifications</span>
	<span class="token comment">// from the chain server that inform a client that a transaction that</span>
	<span class="token comment">// matches the loaded filter was accepted by the mempool.</span>
	RelevantTxAcceptedNtfnMethod <span class="token operator">=</span> <span class="token string">&quot;relevanttxaccepted&quot;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br></div></div>`,19),c=[p];function o(l,r,i,u,k,b){return a(),s("div",null,c)}var h=n(e,[["render",o]]);export{d as __pageData,h as default};
