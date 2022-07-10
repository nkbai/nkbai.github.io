import{_ as e,c as n,o as a,a as s}from"./app.dbcd9662.js";const h='{"title":"\u5982\u4F55\u4F7F\u7528 dlv \u8C03\u8BD5 smartraiden","description":"","frontmatter":{"title":"\u5982\u4F55\u4F7F\u7528 dlv \u8C03\u8BD5 smartraiden","date":"2018-08-27T02:48:47.000Z","draft":false,"markup":"mmark"},"headers":[{"level":2,"title":"\u4E00 \u6B63\u5E38\u542F\u52A8 smartraiden","slug":"\u4E00-\u6B63\u5E38\u542F\u52A8-smartraiden"},{"level":2,"title":"\u4E8C dlv \u8C03\u8BD5","slug":"\u4E8C-dlv-\u8C03\u8BD5"},{"level":3,"title":"\u4E09 dlv attach pid","slug":"\u4E09-dlv-attach-pid"}],"relativePath":"blockchain/ethereum/\u5982\u4F55\u4F7F\u7528 dlv \u8C03\u8BD5 smartraiden.md"}',t={},r=s(`<p>#\u4F7F\u7528 dlv \u8C03\u8BD5smartraiden</p><p>\u5BF9\u4E8E\u7A0B\u5E8F\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u78B0\u5230\u7684\u83AB\u540D\u5176\u5999\u7684\u95EE\u9898,\u6BD4\u5982\u4E0D\u660E\u539F\u56E0\u7684\u963B\u585E,\u547D\u4EE4\u884C dlv \u8C03\u8BD5\u53EF\u80FD\u6BD4 ide \u8C03\u8BD5\u6548\u679C\u66F4\u597D</p><h2 id="\u4E00-\u6B63\u5E38\u542F\u52A8-smartraiden" tabindex="-1">\u4E00 \u6B63\u5E38\u542F\u52A8 smartraiden <a class="header-anchor" href="#\u4E00-\u6B63\u5E38\u542F\u52A8-smartraiden" aria-hidden="true">#</a></h2><div class="language-"><pre><code>./smartraiden --datadir=.smartraiden --api-address=0.0.0.0:5001 --listen-address=127.0.0.1:40001  --address=&quot;0x292650fee408320D888e06ed89D938294Ea42f99&quot; --keystore-path ~/privnet3/keystore --registry-contract-address 0xf450955d87F23DF5DFc7297ed6DdDF4fb896Eff2  --password-file 123      --verbosity 5    --debug  --conditionquit &quot;{\\&quot;QuitEvent\\&quot;:\\&quot;EventSendRevealSecretBeforex\\&quot;}&quot; --debugcrash  --eth-rpc-endpoint ws://127.0.0.1:8546
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u4E8C-dlv-\u8C03\u8BD5" tabindex="-1">\u4E8C dlv \u8C03\u8BD5 <a class="header-anchor" href="#\u4E8C-dlv-\u8C03\u8BD5" aria-hidden="true">#</a></h2><ol><li>\u51FA\u4E86\u95EE\u9898,\u4F46\u662F\u6CA1\u6709\u5D29\u6E83,\u76F4\u63A5 attach \u5373\u53EF</li><li>\u51FA\u4E86\u95EE\u9898,\u4F46\u662F\u5D29\u6E83\u4E86,\u53EF\u4EE5\u63D0\u524D\u8BBE\u7F6E\u65AD\u70B9</li></ol><h3 id="\u4E09-dlv-attach-pid" tabindex="-1">\u4E09 dlv attach pid <a class="header-anchor" href="#\u4E09-dlv-attach-pid" aria-hidden="true">#</a></h3><p>attach \u6210\u529F\u4EE5\u540E,\u7A0B\u5E8F\u4F1A\u505C\u6B62\u8FD0\u884C</p><h4 id="goroutines-s-\u67E5\u770B\u6240\u6709-goroutine-\u7684\u6808" tabindex="-1">goroutines -s \u67E5\u770B\u6240\u6709 goroutine \u7684\u6808 <a class="header-anchor" href="#goroutines-s-\u67E5\u770B\u6240\u6709-goroutine-\u7684\u6808" aria-hidden="true">#</a></h4><h4 id="\u89E3\u51B3\u95EE\u9898" tabindex="-1">\u89E3\u51B3\u95EE\u9898 <a class="header-anchor" href="#\u89E3\u51B3\u95EE\u9898" aria-hidden="true">#</a></h4><ol><li>\u5982\u679C\u89C9\u5F97\u67D0\u4E2A goroutine \u6709\u95EE\u9898 <code>goroutine 108</code> \u5C31\u53EF\u4EE5\u5207\u6362\u5230\u8FD9\u4E2A goroutine, \u8FDB\u884C\u8C03\u8BD5</li><li>bt \u67E5\u770B\u5806\u6808</li></ol><div class="language-"><pre><code>(dlv) goroutine 108
Switched from 0 to 108 (thread 4644478)
(dlv) bt
0  0x000000000402f66a in runtime.gopark
  at /usr/local/go/src/runtime/proc.go:292
1  0x000000000403f150 in runtime.selectgo
  at /usr/local/go/src/runtime/select.go:392
2  0x0000000004608329 in github.com/SmartMeshFoundation/SmartRaiden/blockchain.(*Events).startListenEvent.func1
  at /Volumes/dev/smdev2/src/github.com/SmartMeshFoundation/SmartRaiden/blockchain/events.go:275
3  0x000000000405c3d1 in runtime.goexit
  at /usr/local/go/src/runtime/asm_amd64.s:2361
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="3"><li>\u5728\u6808\u4E4B\u95F4\u79FB\u52A8up/down</li></ol><div class="language-"><pre><code>up
up
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4F1A\u663E\u793A\u5F53\u524D\u53EF\u4EE5\u63A7\u5236\u7684\u6808</p><div class="language-"><pre><code>Frame 2: /Volumes/dev/smdev2/src/github.com/SmartMeshFoundation/SmartRaiden/blockchain/events.go:275 (PC: 4608329)
  270:			go func(name string) {
  271:				ch := be.LogChannelMap[name]
  272:				sub := be.Subscribes[name]
  273:				defer rpanic.PanicRecover(fmt.Sprintf(&quot;startListenEvent %s&quot;, name))
  274:				for {
=&gt; 275:					select {
  276:					case l, ok := &lt;-ch:
  277:						if !ok {
  278:							//channel closed
  279:							return
  280:						}
(dlv)
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ol start="4"><li>\u67E5\u770B\u5C40\u90E8\u53D8\u91CF <code>locals</code> \u53EF\u4EE5\u663E\u793A\u76EE\u524D\u6240\u6709\u7684\u5C40\u90E8\u53D8\u91CF,\u4E5F\u53EF\u4EE5\u901A\u8FC7p \u6765\u6253\u5370\u5177\u4F53\u7684\u5C40\u90E8\u53D8\u91CF\u548C\u5168\u5C40\u53D8\u91CF.</li></ol><div class="language-"><pre><code>(dlv) p ch
chan github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log {
	qcount: 0,
	dataqsiz: 10,
	buf: *[10]struct github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log [
		(*github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log)(0xc420335500),
		(*github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log)(0xc4203355a8),
		(*github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log)(0xc420335650),
		(*github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log)(0xc4203356f8),
		(*github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log)(0xc4203357a0),
		(*github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log)(0xc420335848),
		(*github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log)(0xc4203358f0),
		(*github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log)(0xc420335998),
		(*github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log)(0xc420335a40),
		(*github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log)(0xc420335ae8),
	],
	elemsize: 168,
	closed: 0,
	elemtype: *runtime._type {
		size: 168,
		ptrdata: 56,
		hash: 3390961113,
		tflag: tflagUncommon|tflagExtraStar|tflagNamed,
		align: 8,
		fieldalign: 8,
		kind: 25,
		alg: *(*runtime.typeAlg)(0x5218c40),
		gcdata: *72,
		str: 56993,
		ptrToThis: 1205856,},
	sendx: 0,
	recvx: 0,
	recvq: waitq&lt;github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log&gt; {
		first: *(*sudog&lt;github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log&gt;)(0xc4304ae4e0),
		last: *(*sudog&lt;github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log&gt;)(0xc4304ae4e0),},
	sendq: waitq&lt;github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log&gt; {
		first: *sudog&lt;github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log&gt; nil,
		last: *sudog&lt;github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log&gt; nil,},
	lock: runtime.mutex {key: 0},}
(dlv)
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230 ch \u8FD9\u4E2A chann\b \u76EE\u524D\u6CA1\u6709\u4EFB\u4F55\u6570\u636E,\u6240\u4EE5\u963B\u585E. 5. \u4E5F\u53EF\u4EE5\u67E5\u770B\u5168\u5C40\b\u53D8\u91CF.\u4E5F\u5C31\u662F\u5305\u7EA7\u522B\u7684\u53D8\u91CF.</p><div class="language-"><pre><code>(dlv) p &quot;github.com/SmartMeshFoundation/SmartRaiden/params&quot;.MobileMode
false
(dlv) p &quot;github.com/SmartMeshFoundation/SmartRaiden/params&quot;.ChainID
*math/big.Int {
	neg: false,
	abs: math/big.nat len: 1, cap: 5, [8888],}
(dlv)
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,20),i=[r];function l(o,c,u,m,p,d){return a(),n("div",null,i)}var g=e(t,[["render",l]]);export{h as __pageData,g as default};
