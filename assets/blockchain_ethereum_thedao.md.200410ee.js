import{_ as n,c as a,o as e,a as s}from"./app.be400e50.js";const h='{"title":"TheDao \u7B80\u5316\u7248\u89E3\u91CA","description":"","frontmatter":{"title":"TheDao \u7B80\u5316\u7248\u89E3\u91CA","date":"2018-04-25T03:06:23.000Z","hide":false},"headers":[{"level":2,"title":"the Dao \u5408\u7EA6","slug":"the-dao-\u5408\u7EA6"}],"relativePath":"blockchain/ethereum/thedao.md"}',r={},l=s(`<h1 id="thedao-\u7B80\u5316\u7248\u89E3\u91CA" tabindex="-1">TheDao \u7B80\u5316\u7248\u89E3\u91CA <a class="header-anchor" href="#thedao-\u7B80\u5316\u7248\u89E3\u91CA" aria-hidden="true">#</a></h1><h2 id="the-dao-\u5408\u7EA6" tabindex="-1">the Dao \u5408\u7EA6 <a class="header-anchor" href="#the-dao-\u5408\u7EA6" aria-hidden="true">#</a></h2><div class="language-"><pre><code>contract f1{
    function transfer()
    {
        if (acccount[m]&gt;=100) {
            m.send(100)
            account[m]-=100
        }
 
    }
}
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h1 id="send-\u4F1A\u8C03\u7528-m-\u7684-fallback-\u51FD\u6570" tabindex="-1">send \u4F1A\u8C03\u7528 m \u7684 fallback \u51FD\u6570 <a class="header-anchor" href="#send-\u4F1A\u8C03\u7528-m-\u7684-fallback-\u51FD\u6570" aria-hidden="true">#</a></h1><p>\u4F46\u662F m \u4E0D\u662F\u4E00\u4E2A\u666E\u901A\u7684\u5730\u5740,\u800C\u662F\u4E0B\u9762\u7684\u5408\u7EA6</p><div class="language-"><pre><code>contract m {
    //fallback function
    function ()payable{
        f1.f()
    }
}
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h1 id="\u7ED3\u8BBA" tabindex="-1">\u7ED3\u8BBA <a class="header-anchor" href="#\u7ED3\u8BBA" aria-hidden="true">#</a></h1><p>\u5148\u6263\u94B1\u518D\u8F6C\u8F6C</p><div class="language-"><pre><code>contract f2{
    function transfer()
    {
        if (acccount[m]&gt;=100) {
            account[m]-=100
            m.send(100)
        }
 
    }
}
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,9),c=[l];function i(p,t,b,d,o,u){return e(),a("div",null,c)}var f=n(r,[["render",i]]);export{h as __pageData,f as default};
