import{o as n,c as s,e as a}from"./app.26819860.js";const p='{"title":"golang_plugin","description":"","frontmatter":{"title":"golang_plugin","date":"2018-10-14T05:05:37.000Z","draft":false,"markup":"mmark"},"headers":[{"level":2,"title":"简单插件","slug":"简单插件"},{"level":3,"title":"1.主程序","slug":"_1-主程序"},{"level":3,"title":"2. plugin代码","slug":"_2-plugin代码"},{"level":3,"title":"3. plugin编译方法","slug":"_3-plugin编译方法"},{"level":3,"title":"4. 运行结果","slug":"_4-运行结果"},{"level":2,"title":"插件与主程序依赖第三方库的问题","slug":"插件与主程序依赖第三方库的问题"},{"level":3,"title":"1. 同时依赖的第三方库","slug":"_1-同时依赖的第三方库"},{"level":3,"title":"2. 运行结果","slug":"_2-运行结果"},{"level":2,"title":"引入了vendor的问题","slug":"引入了vendor的问题"},{"level":2,"title":"完整的代码","slug":"完整的代码"},{"level":3,"title":"main.go","slug":"main-go"},{"level":3,"title":"plugin eng.go","slug":"plugin-eng-go"},{"level":3,"title":"第三方依赖库 anotherlib.go","slug":"第三方依赖库-anotherlib-go"}],"relativePath":"ethereum/golang_plugin.md","lastUpdated":1561553438000}',t={},e=[a('<h1 id="golang-plugin的依赖问题"><a class="header-anchor" href="#golang-plugin的依赖问题" aria-hidden="true">#</a> golang plugin的依赖问题</h1><p>此文中涉及的plugin运行环境为mac 10.14,go版本为1.11 主要是想讨论一下插件依赖的第三方库的问题. 例子是在https://github.com/vladimirvivien/go-plugin-example一文基础之上.</p><h2 id="简单插件"><a class="header-anchor" href="#简单插件" aria-hidden="true">#</a> 简单插件</h2><h3 id="_1-主程序"><a class="header-anchor" href="#_1-主程序" aria-hidden="true">#</a> 1.主程序</h3><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">package</span> main\n\n<span class="token keyword">import</span> <span class="token punctuation">(</span>\n\t<span class="token string">&quot;fmt&quot;</span>\n\t<span class="token string">&quot;os&quot;</span>\n\t<span class="token string">&quot;plugin&quot;</span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">type</span> Greeter <span class="token keyword">interface</span> <span class="token punctuation">{</span>\n\t<span class="token function">Greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token comment">// load module</span>\n\t<span class="token comment">// 1. open the so file to load the symbols</span>\n\tplug<span class="token punctuation">,</span> err <span class="token operator">:=</span> plugin<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;./eng/eng.so&quot;</span><span class="token punctuation">)</span>\n\t<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>\n\t\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n\t\tos<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token comment">// 2. look up a symbol (an exported function or variable)</span>\n\t<span class="token comment">// in this case, variable Greeter</span>\n\tsymGreeter<span class="token punctuation">,</span> err <span class="token operator">:=</span> plug<span class="token punctuation">.</span><span class="token function">Lookup</span><span class="token punctuation">(</span><span class="token string">&quot;Greeter&quot;</span><span class="token punctuation">)</span>\n\t<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>\n\t\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n\t\tos<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token comment">// 3. Assert that loaded symbol is of a desired type</span>\n\t<span class="token comment">// in this case interface type Greeter (defined above)</span>\n\t<span class="token keyword">var</span> greeter Greeter\n\tgreeter<span class="token punctuation">,</span> ok <span class="token operator">:=</span> symGreeter<span class="token punctuation">.</span><span class="token punctuation">(</span>Greeter<span class="token punctuation">)</span>\n\t<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>\n\t\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;unexpected type from module symbol&quot;</span><span class="token punctuation">)</span>\n\t\tos<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token comment">// 4. use the module</span>\n\tgreeter<span class="token punctuation">.</span><span class="token function">Greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><h3 id="_2-plugin代码"><a class="header-anchor" href="#_2-plugin代码" aria-hidden="true">#</a> 2. plugin代码</h3><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">package</span> main\n\n<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>\n\n<span class="token keyword">type</span> greeting <span class="token builtin">string</span>\n\n<span class="token keyword">func</span> <span class="token punctuation">(</span>g greeting<span class="token punctuation">)</span> <span class="token function">Greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Universe&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// exported</span>\n<span class="token keyword">var</span> Greeter greeting\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="_3-plugin编译方法"><a class="header-anchor" href="#_3-plugin编译方法" aria-hidden="true">#</a> 3. plugin编译方法</h3><div class="language-bash line-numbers-mode"><pre><code>go build -buildmode<span class="token operator">=</span>plugin -o eng/eng.so eng/greeter.go\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="_4-运行结果"><a class="header-anchor" href="#_4-运行结果" aria-hidden="true">#</a> 4. 运行结果</h3><div class="language-"><pre><code>go run main.go\nHello Universe\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="插件与主程序依赖第三方库的问题"><a class="header-anchor" href="#插件与主程序依赖第三方库的问题" aria-hidden="true">#</a> 插件与主程序依赖第三方库的问题</h2><p>如果主程序和插件都依赖第三方库会有什么问题呢?\b他们是共享一份代码?还是完全独立的copy呢? 这就类似于c语言动态链接库的依赖,但是应该又不一样. 以实验结果说话吧.</p><h3 id="_1-同时依赖的第三方库"><a class="header-anchor" href="#_1-同时依赖的第三方库" aria-hidden="true">#</a> 1. 同时依赖的第三方库</h3><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">package</span> anotherlib\n<span class="token keyword">var</span> ShareVariable <span class="token operator">=</span><span class="token number">7</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_2-运行结果"><a class="header-anchor" href="#_2-运行结果" aria-hidden="true">#</a> 2. 运行结果</h3><p>和平时常见的动态库行为一致,也就是说主程序和插件共享了一份运行代码,也共享了一份运行变量.</p><h2 id="引入了vendor的问题"><a class="header-anchor" href="#引入了vendor的问题" aria-hidden="true">#</a> 引入了vendor的问题</h2><p>实际项目中,可能代码都会使用vendor来管理自己的第三方依赖库. 这时候就会出现不一致的情况.也就是说因为主程序使用了vendor或者插件使用了vendor, 那么这时候go runtime就会认为插件和主程序用的不是同一个第三方依赖库,这时候就会出现和预期不一致的情况.</p><h2 id="完整的代码"><a class="header-anchor" href="#完整的代码" aria-hidden="true">#</a> 完整的代码</h2><p>我已经把代码放在<a href="https://github.com/nkbai/blog/tree/master/goplugin" target="_blank" rel="noopener noreferrer">github</a>,刚兴趣可以下载运行,</p><h3 id="main-go"><a class="header-anchor" href="#main-go" aria-hidden="true">#</a> main.go</h3><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">package</span> main\n\n<span class="token keyword">import</span> <span class="token punctuation">(</span>\n\t<span class="token string">&quot;fmt&quot;</span>\n\t<span class="token string">&quot;os&quot;</span>\n\t<span class="token string">&quot;plugin&quot;</span>\n\t<span class="token string">&quot;github.com/nkbai/blog/goplugin/anotherlib&quot;</span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">type</span> Greeter <span class="token keyword">interface</span> <span class="token punctuation">{</span>\n\t<span class="token function">Greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\t<span class="token function">GetShareVariable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token comment">// load module</span>\n\t<span class="token comment">// 1. open the so file to load the symbols</span>\n\tplug<span class="token punctuation">,</span> err <span class="token operator">:=</span> plugin<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;./eng/eng.so&quot;</span><span class="token punctuation">)</span>\n\t<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>\n\t\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n\t\tos<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token comment">// 2. look up a symbol (an exported function or variable)</span>\n\t<span class="token comment">// in this case, variable Greeter</span>\n\tsymGreeter<span class="token punctuation">,</span> err <span class="token operator">:=</span> plug<span class="token punctuation">.</span><span class="token function">Lookup</span><span class="token punctuation">(</span><span class="token string">&quot;Greeter&quot;</span><span class="token punctuation">)</span>\n\t<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>\n\t\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n\t\tos<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token comment">// 3. Assert that loaded symbol is of a desired type</span>\n\t<span class="token comment">// in this case interface type Greeter (defined above)</span>\n\t<span class="token keyword">var</span> greeter Greeter\n\tgreeter<span class="token punctuation">,</span> ok <span class="token operator">:=</span> symGreeter<span class="token punctuation">.</span><span class="token punctuation">(</span>Greeter<span class="token punctuation">)</span>\n\t<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>\n\t\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;unexpected type from module symbol&quot;</span><span class="token punctuation">)</span>\n\t\tos<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token comment">// 4. use the module</span>\n\tgreeter<span class="token punctuation">.</span><span class="token function">Greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;anotherlib in main&quot;</span><span class="token punctuation">)</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>anotherlib<span class="token punctuation">.</span>ShareVariable<span class="token punctuation">)</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;plugin anotherlib =%d\\n&quot;</span><span class="token punctuation">,</span>greeter<span class="token punctuation">.</span><span class="token function">GetShareVariable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;change anotherlib&#39;s variable&quot;</span><span class="token punctuation">)</span>\n\tanotherlib<span class="token punctuation">.</span>ShareVariable<span class="token operator">=</span><span class="token number">5</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;main share=%d,plugin share=%d\\n&quot;</span><span class="token punctuation">,</span>anotherlib<span class="token punctuation">.</span>ShareVariable<span class="token punctuation">,</span>greeter<span class="token punctuation">.</span><span class="token function">GetShareVariable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\t<span class="token comment">//可以看到输出都是5</span>\n\n\t<span class="token comment">//下面这种情况将会出现不一致的情况</span>\n\t<span class="token function">testpluginvendor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token function">testpluginvendor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t\t<span class="token comment">// load module</span>\n\t<span class="token comment">// 1. open the so file to load the symbols</span>\n\tplug<span class="token punctuation">,</span> err <span class="token operator">:=</span> plugin<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;pluginwithvendor/eng.so&quot;</span><span class="token punctuation">)</span>\n\t<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>\n\t\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n\t\tos<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token comment">// 2. look up a symbol (an exported function or variable)</span>\n\t<span class="token comment">// in this case, variable Greeter</span>\n\tsymGreeter<span class="token punctuation">,</span> err <span class="token operator">:=</span> plug<span class="token punctuation">.</span><span class="token function">Lookup</span><span class="token punctuation">(</span><span class="token string">&quot;Greeter&quot;</span><span class="token punctuation">)</span>\n\t<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>\n\t\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n\t\tos<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token comment">// 3. Assert that loaded symbol is of a desired type</span>\n\t<span class="token comment">// in this case interface type Greeter (defined above)</span>\n\t<span class="token keyword">var</span> greeter Greeter\n\tgreeter<span class="token punctuation">,</span> ok <span class="token operator">:=</span> symGreeter<span class="token punctuation">.</span><span class="token punctuation">(</span>Greeter<span class="token punctuation">)</span>\n\t<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>\n\t\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;unexpected type from module symbol&quot;</span><span class="token punctuation">)</span>\n\t\tos<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token comment">// 4. use the module</span>\n\tgreeter<span class="token punctuation">.</span><span class="token function">Greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;call plugin withvendor&quot;</span><span class="token punctuation">)</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;anotherlib in main&quot;</span><span class="token punctuation">)</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>anotherlib<span class="token punctuation">.</span>ShareVariable<span class="token punctuation">)</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;plugin anotherlib =%d\\n&quot;</span><span class="token punctuation">,</span>greeter<span class="token punctuation">.</span><span class="token function">GetShareVariable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;change anotherlib&#39;s variable&quot;</span><span class="token punctuation">)</span>\n\tanotherlib<span class="token punctuation">.</span>ShareVariable<span class="token operator">=</span><span class="token number">5</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;main share=%d,plugin share=%d\\n&quot;</span><span class="token punctuation">,</span>anotherlib<span class="token punctuation">.</span>ShareVariable<span class="token punctuation">,</span>greeter<span class="token punctuation">.</span><span class="token function">GetShareVariable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\t<span class="token comment">//可以看到输出并不一致</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br></div></div><h3 id="plugin-eng-go"><a class="header-anchor" href="#plugin-eng-go" aria-hidden="true">#</a> plugin eng.go</h3><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">package</span> main\n\n<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>\n<span class="token keyword">import</span> <span class="token string">&quot;github.com/nkbai/blog/goplugin/anotherlib&quot;</span>\n\n<span class="token keyword">type</span> greeting <span class="token builtin">string</span>\n\n<span class="token keyword">func</span> <span class="token punctuation">(</span>g greeting<span class="token punctuation">)</span> <span class="token function">Greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Universe&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">func</span> <span class="token punctuation">(</span>g greeting<span class="token punctuation">)</span> <span class="token function">GetShareVariable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span><span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> anotherlib<span class="token punctuation">.</span>ShareVariable\n<span class="token punctuation">}</span>\n<span class="token comment">// exported</span>\n<span class="token keyword">var</span> Greeter greeting\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="第三方依赖库-anotherlib-go"><a class="header-anchor" href="#第三方依赖库-anotherlib-go" aria-hidden="true">#</a> 第三方依赖库 anotherlib.go</h3><div class="language-go line-numbers-mode"><pre><code><span class="token keyword">package</span> anotherlib\n<span class="token keyword">var</span> ShareVariable <span class="token operator">=</span><span class="token number">7</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',27)];t.render=function(a,p,t,o,l,c){return n(),s("div",null,e)};export{p as __pageData,t as default};
