import{o as e,c as a,e as r}from"./app.26819860.js";const s='{"title":"如何在mac上使用wireshark对安卓设备进行抓包","description":"","frontmatter":{"title":"如何在mac上使用wireshark对安卓设备进行抓包","date":"2019-06-27T23:06:23.000Z","draft":false},"headers":[{"level":2,"title":"依赖工具","slug":"依赖工具"},{"level":2,"title":"安卓上运行","slug":"安卓上运行"},{"level":2,"title":"mac上运行","slug":"mac上运行"}],"relativePath":"other/capture_with_wireshark_for_android.md","lastUpdated":1594034275000}',n={},i=[r('<h2 id="依赖工具"><a class="header-anchor" href="#依赖工具" aria-hidden="true">#</a> 依赖工具</h2><ul><li>tcpdump</li><li>netcat</li><li>wireshark</li></ul><h2 id="安卓上运行"><a class="header-anchor" href="#安卓上运行" aria-hidden="true">#</a> 安卓上运行</h2><div class="language-"><pre><code>tcpdump -w -  | nc -l -p 31337\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="mac上运行"><a class="header-anchor" href="#mac上运行" aria-hidden="true">#</a> mac上运行</h2><div class="language-"><pre><code>adb forward tcp:12345 tcp:31337\nmkfifo /tmp/remote \nnc nc 127.0.0.1 12345 &gt; /tmp/remote\nwireshark -k -i /tmp/remote\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>nc确实很强大,很好用. 通过这种组合,就避免了安卓屏幕小的尴尬了.</p>',7)];n.render=function(r,s,n,l,t,c){return e(),a("div",null,i)};export{s as __pageData,n as default};
