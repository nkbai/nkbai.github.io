import{_ as a,c as e,o as r,a as t}from"./app.e7435feb.js";const u='{"title":"[9619946]\u5982\u4F55\u4E3A smartraiden \u8D21\u732E\u4EE3\u7801","description":"","frontmatter":{"title":"[9619946]\u5982\u4F55\u4E3A smartraiden \u8D21\u732E\u4EE3\u7801","date":"2018-09-13T00:45:47.000Z","draft":false,"markup":"mmark"},"headers":[{"level":2,"title":"1.Fork \u9879\u76EE","slug":"_1-fork-\u9879\u76EE"},{"level":2,"title":"2. Clone \u9879\u76EE\u5230\u672C\u5730","slug":"_2-clone-\u9879\u76EE\u5230\u672C\u5730"},{"level":2,"title":"3. \u63D0\u4EA4","slug":"_3-\u63D0\u4EA4"},{"level":2,"title":"4. \u4EE3\u7801\u540C\u6B65","slug":"_4-\u4EE3\u7801\u540C\u6B65"}],"relativePath":"blockchain/ethereum/\u5982\u4F55\u4E3A smartraiden \u8D21\u732E\u4EE3\u7801.md"}',n={},i=t(`<h1 id="\u5982\u4F55\u4E3A-smartraiden-\u8D21\u732E\u4EE3\u7801" tabindex="-1">\u5982\u4F55\u4E3A smartRaiden \u8D21\u732E\u4EE3\u7801 <a class="header-anchor" href="#\u5982\u4F55\u4E3A-smartraiden-\u8D21\u732E\u4EE3\u7801" aria-hidden="true">#</a></h1><h2 id="_1-fork-\u9879\u76EE" tabindex="-1">1.Fork \u9879\u76EE <a class="header-anchor" href="#_1-fork-\u9879\u76EE" aria-hidden="true">#</a></h2><p>\u767B\u5F55 github \u8D26\u53F7,\u5E76\u8BBF\u95EEhttps://github.com/SmartMeshFoundation/SmartRaiden,\u7136\u540E\u70B9\u51FB\u53F3\u4E0A\u89D2\u7684 fork \u6309\u94AE,\u7B49\u5F85\u51E0\u79D2\u949F\u4EE5\u540E\u5C31\u53EF\u4EE5\u5728\u4F60\u81EA\u5DF1\u7684 github \u8D26\u53F7\u4E0B\u770B\u5230 smartraiden.</p><h2 id="_2-clone-\u9879\u76EE\u5230\u672C\u5730" tabindex="-1">2. Clone \u9879\u76EE\u5230\u672C\u5730 <a class="header-anchor" href="#_2-clone-\u9879\u76EE\u5230\u672C\u5730" aria-hidden="true">#</a></h2><p>\u4F60\u5E94\u8BE5 clone\u81EA\u5DF1\u8D26\u53F7\u4E0B\u7684 SmartRaiden, \u5177\u4F53\u5230\u6211\u7684,\u5C31\u5E94\u8BE5\u662Fhttps://github.com/nkbai/SmartRaiden.git</p><div class="language-"><pre><code>cd $GOPATH/src/github.com/SmartMeshFoundation
git clone https://github.com/nkbai/SmartRaiden.git
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6CE8\u610F\u4EE3\u7801\u662F\u4E0D\u80FD\u653E\u5230 <a href="http://github.com/nkbai/SmartRaiden" target="_blank" rel="noopener noreferrer">github.com/nkbai/SmartRaiden</a> \u7684,\u5426\u5219 go \u4F1A\u7F16\u8BD1\u4E0D\u8FC7\u53BB</p><h2 id="_3-\u63D0\u4EA4" tabindex="-1">3. \u63D0\u4EA4 <a class="header-anchor" href="#_3-\u63D0\u4EA4" aria-hidden="true">#</a></h2><p>\u63A5\u4E0B\u6765\u4F60\u5C31\u53EF\u4EE5\u4FEE\u6539\u4EE3\u7801,\u7136\u540E\u63D0\u4EA4\u5230 github, \u8FD9\u8FC7\u7A0B\u548C\u7EF4\u62A4\u4F60\u81EA\u5DF1\u7684 github \u9879\u76EE\u6CA1\u6709\u4EC0\u4E48\u533A\u522B. \u4E00\u65E6 push \u5230 github, \u8FD9\u65F6\u5019\u4F60\u53EF\u4EE5\u521B\u5EFA PR. <img alt="" data-src="https://img2018.cnblogs.com/blog/124391/201809/124391-20180910123234918-451255451.png" loading="lazy" class="lazy"></p><h2 id="_4-\u4EE3\u7801\u540C\u6B65" tabindex="-1">4. \u4EE3\u7801\u540C\u6B65 <a class="header-anchor" href="#_4-\u4EE3\u7801\u540C\u6B65" aria-hidden="true">#</a></h2><p>\u9700\u8981\u6DFB\u52A0 remote, \u624D\u80FD\u4FDD\u6301SmartMeshFoundation/SmartRaiden\u548C nkbai/SmartRaiden \u7684\u540C\u6B65.</p><div class="language-"><pre><code>git remote add upstream https://github.com/SmartMeshFoundation/SmartRaiden.git
git remote -v
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u9700\u8981\u540C\u6B65\u4EE3\u7801\u65F6:</p><div class="language-"><pre><code>git fetch upstream
git merge upstream/master
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,14),s=[i];function d(l,o,c,h,p,m){return r(),e("div",null,s)}var b=a(n,[["render",d]]);export{u as __pageData,b as default};
