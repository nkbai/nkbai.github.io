import{_ as e,c as a,o as s,N as n}from"./chunks/framework.3a9190c5.js";const u=JSON.parse('{"title":"如何在Mac中Hook:改造Rest以适应工作需求","description":"","frontmatter":{"title":"如何在Mac中Hook:改造Rest以适应工作需求","date":"2022-02-16T13:57:03.000Z","draft":false,"tags":["security","mac","objectc"],"categories":["技术相关"]},"headers":[],"relativePath":"app_security/hook_rest_for_work.md"}'),l={name:"app_security/hook_rest_for_work.md"},r=n(`<h2 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h2><p>先说一下背景,Rest是一个在Mac上用的休息提醒工具,可以在AppStore中购买(<strong>不免费</strong>). 本来一直用的好好的,但是现在公司要求离开工位必须锁屏,这就导致我在休息的时候只能在工位边上,否则上个厕所回来,休息结束了,桌面就直接暴露出来了. 简单看了一下Rest是用ObjectC编写的,基本满足我的要求,主要有以下问题:</p><ol><li>休息的时候,必须钩上<code>Prevent me from working during beaks</code>,否则如果有多个虚拟桌面,就会导致暴露桌面内容.</li><li>休息结束后不能自动锁屏</li><li>针对问题1,如果开启了<code>Prevent me from working during beaks</code>,在休息时,如果万一有应急工作,就不能立即响应了.</li></ol><h2 id="工具收集" tabindex="-1">工具收集 <a class="header-anchor" href="#工具收集" aria-label="Permalink to &quot;工具收集&quot;">​</a></h2><h3 id="_1-如何注入一个dylib" tabindex="-1">1. 如何注入一个dylib <a class="header-anchor" href="#_1-如何注入一个dylib" aria-label="Permalink to &quot;1. 如何注入一个dylib&quot;">​</a></h3><p>主要有两种方式,一种是动态注入,一种是持久注入. 如果是动态注入,因为不需要远程注入,所以很简单的,通过DYLD_INSERT_LIBRARIES启动即可,具体来说:</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">DYLD_INSERT_LIBRARIES</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">libmyinjectlib.dylib</span><span style="color:#A6ACCD;"> ./Res</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>另一种就麻烦一点,可以通过类似<a href="https://github.com/gengjf/insert_dylib" target="_blank" rel="noreferrer">inject_dylib</a>这样的工具静态注入, 但是我尝试后发现修改后的程序无法运行,所以暂用动态注入的方式,这种方式至少可以满足我的要求,只需要一个启动脚本即可.</p><h3 id="_2-如何进行hook" tabindex="-1">2. 如何进行hook <a class="header-anchor" href="#_2-如何进行hook" aria-label="Permalink to &quot;2. 如何进行hook&quot;">​</a></h3><p>这个要依赖的工具就是<a href="https://github.com/rpetrich/CaptainHook.git" target="_blank" rel="noreferrer">CaptainHook</a>,只有一个头文件,用起来也比较简单.</p><h2 id="注入点分析" tabindex="-1">注入点分析 <a class="header-anchor" href="#注入点分析" aria-label="Permalink to &quot;注入点分析&quot;">​</a></h2><p>休息窗口的特点是一个全屏的窗口,并且该窗口要在所有窗口之前. 因此NSWindow的setLevel就是一个比较好的入口点,经过搜索发现,该调用只有一处<code>-[AppDelegate setBreakScreens](AppDelegate *self, SEL a2)</code>. 经过对该函数的分析,可以发现这个就是启动休息的函数.</p><p>注意到里面的<code>removeBreakScreens</code>,按照名字提示,应该是结束休息的函数. 所以对以上两个函数进行hook,应该可以达到我们的目的:</p><ol><li>hook <code>removeBreakScreens</code>,结束的时候进行锁屏.</li><li>hook <code>setBreakScreens</code> 可以在里面注册一个快捷键(不是全局的),这样万一有工作的时候,可以立即结束休息.</li></ol><h2 id="注入" tabindex="-1">注入 <a class="header-anchor" href="#注入" aria-label="Permalink to &quot;注入&quot;">​</a></h2><p>有了注入点,剩下就是用CaptainHook进行注入了.</p><div class="language-objectc line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">objectc</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">CHDeclareClass(AppDelegate)</span></span>
<span class="line"><span style="color:#A6ACCD;">CHOptimizedMethod0(self, void, AppDelegate, removeBreakScreens) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    NSLog(@&quot;removeBreakScreens called&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    CHSuper0(AppDelegate, removeBreakScreens);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">CHOptimizedMethod0(self, void, AppDelegate, setBreakScreens) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    NSLog(@&quot;setBreakScreens called&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    CHSuper0(AppDelegate, setBreakScreens);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">CHConstructor {</span></span>
<span class="line"><span style="color:#A6ACCD;">    CHLoadLateClass(AppDelegate);</span></span>
<span class="line"><span style="color:#A6ACCD;">    CHClassHook0(AppDelegate, removeBreakScreens);</span></span>
<span class="line"><span style="color:#A6ACCD;">    CHClassHook0(AppDelegate, setBreakScreens);</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>经过验证,确实每次启动休息都会调用<code>setBreakScreens</code>,而无论是正常结束休息,还是点击<code>let me work</code>都会调用<code>removeBreakScreens</code>.</p><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><p>这是首次在Mac上成功修改一个程序的逻辑,以前搞过Windows和Linux,Mac还是首次,ObjectC和C/C++比起来,运行时要复杂的多,特别适合注入. 完整的程序已经放在<a href="https://github.com/nkbai/objectc_practices" target="_blank" rel="noreferrer">我的github</a>,欢迎试用.如果你们公司也有锁屏要求的话.</p>`,20),o=[r];function p(t,c,i,d,b,h){return s(),a("div",null,o)}const m=e(l,[["render",p]]);export{u as __pageData,m as default};
