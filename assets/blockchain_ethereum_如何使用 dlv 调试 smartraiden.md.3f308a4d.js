import{o as e,c as n,e as a}from"./app.63f3ffeb.js";const s='{"title":"如何使用 dlv 调试 smartraiden","description":"","frontmatter":{"title":"如何使用 dlv 调试 smartraiden","date":"2018-08-27T02:48:47.000Z","draft":false,"markup":"mmark"},"headers":[{"level":2,"title":"一 正常启动 smartraiden","slug":"一-正常启动-smartraiden"},{"level":2,"title":"二 dlv 调试","slug":"二-dlv-调试"},{"level":3,"title":"三 dlv attach pid","slug":"三-dlv-attach-pid"}],"relativePath":"blockchain/ethereum/如何使用 dlv 调试 smartraiden.md","lastUpdated":1640094810292}',t={},r=[a('<p>#使用 dlv 调试smartraiden</p><p>对于程序运行过程中碰到的莫名其妙的问题,比如不明原因的阻塞,命令行 dlv 调试可能比 ide 调试效果更好</p><h2 id="一-正常启动-smartraiden"><a class="header-anchor" href="#一-正常启动-smartraiden" aria-hidden="true">#</a> 一 正常启动 smartraiden</h2><div class="language-"><pre><code>./smartraiden --datadir=.smartraiden --api-address=0.0.0.0:5001 --listen-address=127.0.0.1:40001  --address=&quot;0x292650fee408320D888e06ed89D938294Ea42f99&quot; --keystore-path ~/privnet3/keystore --registry-contract-address 0xf450955d87F23DF5DFc7297ed6DdDF4fb896Eff2  --password-file 123      --verbosity 5    --debug  --conditionquit &quot;{\\&quot;QuitEvent\\&quot;:\\&quot;EventSendRevealSecretBeforex\\&quot;}&quot; --debugcrash  --eth-rpc-endpoint ws://127.0.0.1:8546\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="二-dlv-调试"><a class="header-anchor" href="#二-dlv-调试" aria-hidden="true">#</a> 二 dlv 调试</h2><ol><li>出了问题,但是没有崩溃,直接 attach 即可</li><li>出了问题,但是崩溃了,可以提前设置断点</li></ol><h3 id="三-dlv-attach-pid"><a class="header-anchor" href="#三-dlv-attach-pid" aria-hidden="true">#</a> 三 dlv attach pid</h3><p>attach 成功以后,程序会停止运行</p><h4 id="goroutines-s-查看所有-goroutine-的栈"><a class="header-anchor" href="#goroutines-s-查看所有-goroutine-的栈" aria-hidden="true">#</a> goroutines -s 查看所有 goroutine 的栈</h4><h4 id="解决问题"><a class="header-anchor" href="#解决问题" aria-hidden="true">#</a> 解决问题</h4><ol><li>如果觉得某个 goroutine 有问题 <code>goroutine 108</code> 就可以切换到这个 goroutine, 进行调试</li><li>bt 查看堆栈</li></ol><div class="language-"><pre><code>(dlv) goroutine 108\nSwitched from 0 to 108 (thread 4644478)\n(dlv) bt\n0  0x000000000402f66a in runtime.gopark\n  at /usr/local/go/src/runtime/proc.go:292\n1  0x000000000403f150 in runtime.selectgo\n  at /usr/local/go/src/runtime/select.go:392\n2  0x0000000004608329 in github.com/SmartMeshFoundation/SmartRaiden/blockchain.(*Events).startListenEvent.func1\n  at /Volumes/dev/smdev2/src/github.com/SmartMeshFoundation/SmartRaiden/blockchain/events.go:275\n3  0x000000000405c3d1 in runtime.goexit\n  at /usr/local/go/src/runtime/asm_amd64.s:2361\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="3"><li>在栈之间移动up/down</li></ol><div class="language-"><pre><code>up\nup\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>会显示当前可以控制的栈</p><div class="language-"><pre><code>Frame 2: /Volumes/dev/smdev2/src/github.com/SmartMeshFoundation/SmartRaiden/blockchain/events.go:275 (PC: 4608329)\n  270:\t\t\tgo func(name string) {\n  271:\t\t\t\tch := be.LogChannelMap[name]\n  272:\t\t\t\tsub := be.Subscribes[name]\n  273:\t\t\t\tdefer rpanic.PanicRecover(fmt.Sprintf(&quot;startListenEvent %s&quot;, name))\n  274:\t\t\t\tfor {\n=&gt; 275:\t\t\t\t\tselect {\n  276:\t\t\t\t\tcase l, ok := &lt;-ch:\n  277:\t\t\t\t\t\tif !ok {\n  278:\t\t\t\t\t\t\t//channel closed\n  279:\t\t\t\t\t\t\treturn\n  280:\t\t\t\t\t\t}\n(dlv)\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ol start="4"><li>查看局部变量 <code>locals</code> 可以显示目前所有的局部变量,也可以通过p 来打印具体的局部变量和全局变量.</li></ol><div class="language-"><pre><code>(dlv) p ch\nchan github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log {\n\tqcount: 0,\n\tdataqsiz: 10,\n\tbuf: *[10]struct github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log [\n\t\t(*github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log)(0xc420335500),\n\t\t(*github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log)(0xc4203355a8),\n\t\t(*github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log)(0xc420335650),\n\t\t(*github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log)(0xc4203356f8),\n\t\t(*github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log)(0xc4203357a0),\n\t\t(*github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log)(0xc420335848),\n\t\t(*github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log)(0xc4203358f0),\n\t\t(*github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log)(0xc420335998),\n\t\t(*github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log)(0xc420335a40),\n\t\t(*github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log)(0xc420335ae8),\n\t],\n\telemsize: 168,\n\tclosed: 0,\n\telemtype: *runtime._type {\n\t\tsize: 168,\n\t\tptrdata: 56,\n\t\thash: 3390961113,\n\t\ttflag: tflagUncommon|tflagExtraStar|tflagNamed,\n\t\talign: 8,\n\t\tfieldalign: 8,\n\t\tkind: 25,\n\t\talg: *(*runtime.typeAlg)(0x5218c40),\n\t\tgcdata: *72,\n\t\tstr: 56993,\n\t\tptrToThis: 1205856,},\n\tsendx: 0,\n\trecvx: 0,\n\trecvq: waitq&lt;github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log&gt; {\n\t\tfirst: *(*sudog&lt;github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log&gt;)(0xc4304ae4e0),\n\t\tlast: *(*sudog&lt;github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log&gt;)(0xc4304ae4e0),},\n\tsendq: waitq&lt;github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log&gt; {\n\t\tfirst: *sudog&lt;github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log&gt; nil,\n\t\tlast: *sudog&lt;github.com/SmartMeshFoundation/SmartRaiden/vendor/github.com/ethereum/go-ethereum/core/types.Log&gt; nil,},\n\tlock: runtime.mutex {key: 0},}\n(dlv)\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><p>可以看到 ch 这个 chann\b 目前没有任何数据,所以阻塞. 5. 也可以查看全局\b变量.也就是包级别的变量.</p><div class="language-"><pre><code>(dlv) p &quot;github.com/SmartMeshFoundation/SmartRaiden/params&quot;.MobileMode\nfalse\n(dlv) p &quot;github.com/SmartMeshFoundation/SmartRaiden/params&quot;.ChainID\n*math/big.Int {\n\tneg: false,\n\tabs: math/big.nat len: 1, cap: 5, [8888],}\n(dlv)\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',20)];t.render=function(a,s,t,i,l,o){return e(),n("div",null,r)};export{s as __pageData,t as default};
