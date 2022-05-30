import{_ as n,c as s,o as a,a as e}from"./app.8e8e8923.js";const d='{"title":"\u6211\u5BF9 smartplasma \u7684\u7406\u89E3","description":"","frontmatter":{"title":"\u6211\u5BF9 smartplasma \u7684\u7406\u89E3","date":"2018-09-19T06:08:37.000Z","draft":false,"markup":"mmark"},"headers":[{"level":2,"title":"1. \u5408\u7EA6\u4EE3\u7801","slug":"_1-\u5408\u7EA6\u4EE3\u7801"},{"level":2,"title":"2. \u5408\u7EA6\u6587\u4EF6\u7B80\u5355\u4ECB\u7ECD","slug":"_2-\u5408\u7EA6\u6587\u4EF6\u7B80\u5355\u4ECB\u7ECD"},{"level":2,"title":"3. Plasma Cash \u7684\u57FA\u7840\u6570\u636E\u7ED3\u6784","slug":"_3-plasma-cash-\u7684\u57FA\u7840\u6570\u636E\u7ED3\u6784"},{"level":3,"title":"3.1 Plasma Cash \u4E2D\u7684\u8D44\u4EA7","slug":"_3-1-plasma-cash-\u4E2D\u7684\u8D44\u4EA7"},{"level":3,"title":"3.2 Plasma Cash\u4E2D\u7684\u4EA4\u6613","slug":"_3-2-plasma-cash\u4E2D\u7684\u4EA4\u6613"},{"level":3,"title":"3.3 Plasma Cash \u4E2D\u7684 Block","slug":"_3-3-plasma-cash-\u4E2D\u7684-block"},{"level":3,"title":"3.4 Plasma Cash \u4E2D\u8D44\u4EA7\u7684\u56DE\u5F52\u4E3B\u94FE\u4EE5\u592A\u574A","slug":"_3-4-plasma-cash-\u4E2D\u8D44\u4EA7\u7684\u56DE\u5F52\u4E3B\u94FE\u4EE5\u592A\u574A"},{"level":2,"title":"4. Plasma Cash \u4E2D\u7684\u9000\u51FA\u793A\u4F8B","slug":"_4-plasma-cash-\u4E2D\u7684\u9000\u51FA\u793A\u4F8B"},{"level":2,"title":"5. \u5176\u4ED6\u95EE\u9898","slug":"_5-\u5176\u4ED6\u95EE\u9898"}],"relativePath":"blockchain/ethereum/\u6211\u5BF9 smartplasma \u7684\u7406\u89E3.md"}',p={},t=e(`<h1 id="plasma-cash-\u5408\u7EA6\u89E3\u8BFB" tabindex="-1">Plasma Cash \u5408\u7EA6\u89E3\u8BFB <a class="header-anchor" href="#plasma-cash-\u5408\u7EA6\u89E3\u8BFB" aria-hidden="true">#</a></h1><ul><li><a href="#plasma-cash-%E5%90%88%E7%BA%A6%E8%A7%A3%E8%AF%BB">Plasma Cash \u5408\u7EA6\u89E3\u8BFB</a><ul><li><a href="#1-%E5%90%88%E7%BA%A6%E4%BB%A3%E7%A0%81">1. \u5408\u7EA6\u4EE3\u7801</a></li><li><a href="#2-%E5%90%88%E7%BA%A6%E6%96%87%E4%BB%B6%E7%AE%80%E5%8D%95%E4%BB%8B%E7%BB%8D">2. \u5408\u7EA6\u6587\u4EF6\u7B80\u5355\u4ECB\u7ECD</a></li><li><a href="#3-plasma-cash-%E7%9A%84%E5%9F%BA%E7%A1%80%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84">3. Plasma Cash \u7684\u57FA\u7840\u6570\u636E\u7ED3\u6784</a><ul><li><a href="#31-plasma-cash-%E4%B8%AD%E7%9A%84%E8%B5%84%E4%BA%A7">3.1 Plasma Cash \u4E2D\u7684\u8D44\u4EA7</a></li><li><a href="#32-plasma-cash%E4%B8%AD%E7%9A%84%E4%BA%A4%E6%98%93">3.2 Plasma Cash\u4E2D\u7684\u4EA4\u6613</a></li><li><a href="#33-plasma-cash-%E4%B8%AD%E7%9A%84-block">3.3 Plasma Cash \u4E2D\u7684 Block</a></li><li><a href="#34-plasma-cash-%E4%B8%AD%E8%B5%84%E4%BA%A7%E7%9A%84%E5%9B%9E%E5%BD%92%E4%B8%BB%E9%93%BE%E4%BB%A5%E5%A4%AA%E5%9D%8A">3.4 Plasma Cash \u4E2D\u8D44\u4EA7\u7684\u56DE\u5F52\u4E3B\u94FE\u4EE5\u592A\u574A</a><ul><li><a href="#341-%08%E8%B5%84%E4%BA%A7%E6%8B%A5%E6%9C%89%E8%AF%81%E6%98%8E">3.4.1 \b\u8D44\u4EA7\u62E5\u6709\u8BC1\u660E</a></li><li><a href="#342-%E7%AD%89%E5%BE%85%E5%85%B6%E4%BB%96%E4%BA%BA%E6%9D%A5%E6%8C%91%E6%88%98%E6%88%91">3.4.2 \u7B49\u5F85\u5176\u4ED6\u4EBA\u6765\u6311\u6218\u6211</a></li><li><a href="#343-%E6%8C%91%E6%88%98%E6%9C%9F%E8%BF%87%E4%BA%86-bob-%E6%8B%BF%E5%9B%9E%E8%B5%84%E4%BA%A7-uid">3.4.3 \u6311\u6218\u671F\u8FC7\u4E86, Bob \u62FF\u56DE\u8D44\u4EA7 uid</a></li></ul></li></ul></li><li><a href="#4-plasma-cash-%E4%B8%AD%E7%9A%84%E9%80%80%E5%87%BA%E7%A4%BA%E4%BE%8B">4. Plasma Cash \u4E2D\u7684\u9000\u51FA\u793A\u4F8B</a></li><li><a href="#5-%E5%85%B6%E4%BB%96%E9%97%AE%E9%A2%98">5. \u5176\u4ED6\u95EE\u9898</a> Plasma \u7531 V \u795E\u57282017\u5E748\u6708\u63D0\u51FA,\u5E0C\u671B\u901A\u8FC7\u94FE\u4E0B\u4EA4\u6613\u6765\u5927\u5E45\u63D0\u9AD8\u4EE5\u592A\u574A\u7684 TPS.</li></ul></li></ul><p>\u6BCF\u6761 Plasma \u94FE\u90FD\u4F1A\u5C06\u6709\u5173\u4EA4\u6613\u987A\u5E8F\u7684\u6D88\u606F\u6362\u7B97\u6210\u4E00\u4E2A\u54C8\u5E0C\u503C\u5B58\u50A8\u5728\u6839\u94FE\u4E0A\u3002\u6BD4\u7279\u5E01\u548C\u4EE5\u592A\u574A\u90FD\u5C5E\u4E8E\u6839\u94FE\u2014\u2014\u8FD9\u4E24\u6761\u533A\u5757\u94FE\u5177\u6709\u5F88\u9AD8\u7684\u5B89\u5168\u6027\uFF0C\u5E76\u4E14\u901A\u8FC7\u53BB\u4E2D\u5FC3\u5316\u4FDD\u8BC1\u4E86\uFF08\u5B89\u5168\u6027\u548C\u6D3B\u6027\uFF09\u3002</p><p>Plasma \u8BBE\u8BA1\u6A21\u578B\u6709\u4E24\u4E2A\u4E3B\u8981\u7684\u5206\u652F\uFF1APlasma MVP \u548C Plasma Cash \u3002\u8FD9\u91CC\u6211\u4EEC\u6765\u7814\u7A76 SmartPlasma \u5B9E\u73B0\u7684 Plasma Cash \u5408\u7EA6,\u5E76\u901A\u8FC7\u5408\u7EA6\u5206\u6790\u6765\u56DE\u7B54\u5927\u5BB6\u5173\u4E8E Plasma Cash \u7684\u4E00\u7CFB\u5217\u7591\u95EE.</p><h2 id="_1-\u5408\u7EA6\u4EE3\u7801" tabindex="-1">1. \u5408\u7EA6\u4EE3\u7801 <a class="header-anchor" href="#_1-\u5408\u7EA6\u4EE3\u7801" aria-hidden="true">#</a></h2><p>SmartPlasma\u7684\u5408\u7EA6\u4EE3\u7801\u80AF\u5B9A\u4F1A\u4E0D\u65AD\u5347\u7EA7,\u6211\u9488\u5BF9\u4ED6\u4EEC\u5728\u4ECA\u5929(2018-09-14)\u6700\u65B0\u7248\u672C\u8FDB\u884C\u5206\u6790,\u8FD9\u4EFD\u4EE3\u7801\u76EE\u524D\u4FDD\u5B58\u5728\u6211\u7684 github \u4E0A<a href="https://github.com/nkbai/blog/tree/master/smartplasma/contracts" target="_blank" rel="noopener noreferrer"> plasma cash</a>.</p><h2 id="_2-\u5408\u7EA6\u6587\u4EF6\u7B80\u5355\u4ECB\u7ECD" tabindex="-1">2. \u5408\u7EA6\u6587\u4EF6\u7B80\u5355\u4ECB\u7ECD <a class="header-anchor" href="#_2-\u5408\u7EA6\u6587\u4EF6\u7B80\u5355\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>\u6587\u4EF6\u5939\u4E2D\u6709\u4E0D\u5C11\u4E0E Plasma Cash \u65E0\u5173\u7684\u5408\u7EA6,\u8FD9\u91CC\u53EA\u5173\u6CE8\u76F4\u63A5\u4E0E Plasma Cash \u76F8\u5173\u5408\u7EA6,\u50CF ERC20Token \u76F8\u5173\u5408\u7EA6\u5C31\u5FFD\u7565,\u81EA\u884C\u67E5\u770B.</p><ul><li>Mediator.sol \u662F Plasma Cash \u94FE\u4E2D\u8D44\u4EA7\u7684\u8FDB\u51FA\u53E3</li><li>RootChain.sol \u5904\u7406 Plasma Cash \u5B50\u94FE(\u76F8\u5BF9\u4E8E\u4EE5\u592A\u574A\u800C\u8A00)\u4E2D\u7684\u4EA4\u6613\u4EE5\u53CA\u6253\u5305\u7B49</li><li>libraries/MerkleProof.sol \u662F\u5B50\u94FE\u4E2D\u4EA4\u6613\u7528\u5230\u7684\u9ED8\u514B\u5C14\u6811,\u7528\u4E8E\u5B50\u94FE\u53C2\u4E0E\u65B9\u8FDB\u884C\u6B3A\u8BC8\u8BC1\u660E fraud proof.</li><li>libraris/RLP.sol RLP\u7F16\u7801\u652F\u6301,\u53EF\u4EE5\u6682\u65F6\u5FFD\u7565,\u5B50\u94FE\u4E2D\u6240\u6709\u7684\u4EA4\u6613\u90FD\u662F\u7528RLP \u7F16\u7801\u7684.</li><li>libraries/PlasmaLib.sol \u751F\u6210 uid \u7684\u8F85\u52A9\u51FD\u6570</li><li>ECRecovery.sol \u7B7E\u540D\u9A8C\u8BC1</li><li>datastructures/Transaction.sol \u63CF\u8FF0\u4EA4\u6613\u7684\u6570\u636E\u7ED3\u6784</li></ul><h2 id="_3-plasma-cash-\u7684\u57FA\u7840\u6570\u636E\u7ED3\u6784" tabindex="-1">3. Plasma Cash \u7684\u57FA\u7840\u6570\u636E\u7ED3\u6784 <a class="header-anchor" href="#_3-plasma-cash-\u7684\u57FA\u7840\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a></h2><p>Plasma Cash \u662F\u4E00\u79CD\u5B50\u94FE\u7ED3\u6784,\u53EF\u4EE5\u8BA4\u4E3A Plasma Cash \u662F\u4EE5\u592A\u574A\u7684\u4E00\u4E2A\u662F\u57FA\u4E8E =\u4E00\u79CD\u7B80\u5316\u7684UTXO\u6A21\u578B\u7684\u5B50\u94FE.</p><h3 id="_3-1-plasma-cash-\u4E2D\u7684\u8D44\u4EA7" tabindex="-1">3.1 Plasma Cash \u4E2D\u7684\u8D44\u4EA7 <a class="header-anchor" href="#_3-1-plasma-cash-\u4E2D\u7684\u8D44\u4EA7" aria-hidden="true">#</a></h3><p>Plasma Cash \u4E2D\u7684\u8D44\u4EA7\u90FD\u6765\u81EA\u4E8E\u4EE5\u592A\u574A,\u4F46\u662F\u4E00\u65E6\u8FDB\u5165 Plasma Cash \u5C31\u4F1A\u62E5\u6709\u552F\u4E00\u7684 ID,\u5E76\u4E14\u4E0D\u53EF\u5206\u5272. \u53EF\u4EE5\u53C2\u8003 <a href="https://github.com/nkbai/blog/blob/master/smartplasma/contracts/Mediator.sol" target="_blank" rel="noopener noreferrer">Mediator.sol</a>\u7684deposit\u51FD\u6570. Mediator\u5C31\u662F Plasma Cash \u8D44\u4EA7\u5B58\u653E\u7684\u5730\u65B9.</p><div class="language-solidity line-numbers-mode"><pre><code>        <span class="token comment">/** @dev Adds deposits on Smart Plasma.
     *  @param currency Currency address.
     *  @param amount Amount amount of currency.
     */</span>
    <span class="token keyword">function</span> <span class="token function">deposit</span><span class="token punctuation">(</span><span class="token builtin">address</span> currency<span class="token punctuation">,</span> <span class="token builtin">uint</span> amount<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>amount <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        Token token <span class="token operator">=</span> <span class="token function">Token</span><span class="token punctuation">(</span>currency<span class="token punctuation">)</span><span class="token punctuation">;</span>
        token<span class="token punctuation">.</span><span class="token function">transferFrom</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">,</span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/// deposit test1</span>

        <span class="token builtin">bytes32</span> uid <span class="token operator">=</span> rootChain<span class="token punctuation">.</span><span class="token function">deposit</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> currency<span class="token punctuation">,</span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/// deposit test2</span>
        cash<span class="token punctuation">[</span>uid<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">entry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            currency<span class="token punctuation">:</span> currency<span class="token punctuation">,</span>
            amount<span class="token punctuation">:</span> amount
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u901A\u8FC7\u5408\u7EA6\u53EF\u4EE5\u770B\u51FA\u8FDB\u5165 Plasma Cash \u7684\u8D44\u4EA7\u5FC5\u987B\u662F ERC20 Token,\u8FD9\u4E9B\u8D44\u4EA7\u5B9E\u9645\u4E0A\u662F\u5B58\u5728 Mediator \u8FD9\u4E2A\u5408\u7EA6\u4E0A,\u7136\u540E\u7531 RootChain \u4E3A\u5176\u5206\u914D\u4E00\u4E2A\u552F\u4E00\u7684 ID, \u4E5F\u5C31\u662F uid. \u8FD9\u4E2A uid \u4EE3\u8868\u7740\u4EC0\u4E48 token, \u6709\u591A\u5C11\u4E2A.</p><h3 id="_3-2-plasma-cash\u4E2D\u7684\u4EA4\u6613" tabindex="-1">3.2 Plasma Cash\u4E2D\u7684\u4EA4\u6613 <a class="header-anchor" href="#_3-2-plasma-cash\u4E2D\u7684\u4EA4\u6613" aria-hidden="true">#</a></h3><p>\u5173\u952E\u4EE3\u7801\u5728<a href="https://github.com/nkbai/blog/blob/master/smartplasma/contracts/libraries/datastructures/Transaction.sol" target="_blank" rel="noopener noreferrer"> Transaction.sol</a>\u4E2D.</p><div class="language-solidity line-numbers-mode"><pre><code>    <span class="token keyword">struct</span> <span class="token class-name">Tx</span> <span class="token punctuation">{</span>
        <span class="token builtin">uint</span> prevBlock<span class="token punctuation">;</span>
        <span class="token builtin">uint</span> uid<span class="token punctuation">;</span>
        <span class="token builtin">uint</span> amount<span class="token punctuation">;</span>
        <span class="token builtin">address</span> newOwner<span class="token punctuation">;</span>
        <span class="token builtin">uint</span> nonce<span class="token punctuation">;</span>
        <span class="token builtin">address</span> signer<span class="token punctuation">;</span>
        <span class="token builtin">bytes32</span> hash<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u8FD9\u91CC\u53EF\u80FD\u4E0D\u592A\u660E\u663E,\u9700\u8981\u89E3\u91CA\u624D\u80FD\u770B\u51FA\u6765\u8FD9\u662F\u4E00\u4E2A UTXO \u4EA4\u6613\u7684\u6A21\u578B. \u8FD9\u91CC\u9762\u7684amount \u548C hash \u5B9E\u9645\u4E0A\u90FD\u6709\u70B9\u5570\u5506,\u53EF\u4EE5\u5FFD\u7565. \u90A3\u4E48\u5269\u4E0B\u7684\u6210\u5458\u9700\u8981\u6765\u89E3\u91CA.</p><p><code>prevBlock</code>\u5C31\u662F UTXO \u4E2D\u7684\u8F93\u5165,\u6765\u81EA\u4E8E\u54EA\u5757. \u81F3\u4E8E\u4E3A\u4EC0\u4E48\u6CA1\u6709\u50CF\u6BD4\u7279\u5E01\u4E00\u6837\u7684OutPoint \u7ED3\u6784,\u4E5F\u5C31\u662F TxHash+Index, \u540E\u7EED\u4F1A\u8BB2\u5230. <code>uid</code> \u5C31\u662F\u4EA4\u6613\u7684\u8D44\u4EA7 ID <code>newOwner</code> \u4EA4\u6613\u8F93\u51FA\u7ED9\u8C01, \u8FD9\u91CC\u4E5F\u4E0D\u652F\u6301\u50CF \u6BD4\u7279\u5E01\u4E00\u6837\u7684\u811A\u672C. <code>nonce</code> \u662F\u8FD9\u7B14\u8D44\u4EA7\u7684\u7B2C\u591A\u5C11\u6B21\u4EA4\u6613,\u5728\u53CC\u82B1\u8BC1\u660E\u4E2D\u6709\u91CD\u8981\u4F5C\u7528. <code>signer</code>\u5FC5\u987B\u7531\u8D44\u4EA7\u539F\u62E5\u6709\u8005\u7684\u7B7E\u540D.</p><p><code>amount</code> \u4E0D\u91CD\u8981,\u662F\u56E0\u4E3A\u8D44\u4EA7\u4E0D\u53EF\u5206\u5272,\u5BFC\u81F4\u8FD9\u91CC\u7684 Amount \u4E0D\u4F1A\u968F\u4EA4\u6613\u53D1\u751F\u800C\u53D1\u751F\u53D8\u5316. \u800C <code>hash</code> \u5219\u662F\u53EF\u4EE5\u76F4\u63A5\u8BA1\u7B97\u51FA\u6765.</p><h3 id="_3-3-plasma-cash-\u4E2D\u7684-block" tabindex="-1">3.3 Plasma Cash \u4E2D\u7684 Block <a class="header-anchor" href="#_3-3-plasma-cash-\u4E2D\u7684-block" aria-hidden="true">#</a></h3><p>\u5982\u679C\u4E00\u822C\u533A\u5757\u94FE\u4E2D\u7684 Block \u4E00\u6837,\u4ED6\u662F\u4EA4\u6613\u7684\u96C6\u5408.\u4F46\u662F\u4E0D\u540C\u4E8E\u4E00\u822C\u94FE\u7684\u662F,\u8FD9\u91CC\u9762\u7684\u77FF\u5DE5(\u4E0D\u4E00\u5B9A\u662F Operator)\u4E0D\u4EC5\u9700\u8981\u7EF4\u62A4\u597D\u5B50\u94FE,\u8FD8\u9700\u8981\u5468\u671F\u6027\u7684\u5C06\u6BCF\u4E00\u4E2A Block \u5BF9\u5E94\u7684\u9ED8\u514B\u5C14\u6811\u6839\u4FDD\u5B58\u5230\u4EE5\u592A\u574A\u4E2D,\u8FD9\u4E2A\u5DE5\u4F5C\u53EA\u80FD\u6709 Operator \u6765\u5B8C\u6210. \u5177\u4F53\u4EE3\u7801\u53EF\u89C1<a href="https://github.com/nkbai/blog/blob/master/smartplasma/contracts/RootChain.sol" target="_blank" rel="noopener noreferrer"> RootChain.sol</a>\u7684.</p><div class="language-solidity line-numbers-mode"><pre><code>    <span class="token keyword">function</span> <span class="token function">newBlock</span><span class="token punctuation">(</span><span class="token builtin">bytes32</span> hash<span class="token punctuation">)</span> <span class="token keyword">public</span> onlyOperator <span class="token punctuation">{</span>
        blockNumber <span class="token operator">=</span> blockNumber<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        childChain<span class="token punctuation">[</span>blockNumber<span class="token punctuation">]</span> <span class="token operator">=</span> hash<span class="token punctuation">;</span>

        <span class="token function">NewBlock</span><span class="token punctuation">(</span>hash<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4EA4\u6613\u8BC1\u636E\u63D0\u4EA4\u8005\u53EA\u80FD\u662F Operator, \u4E5F\u5C31\u662F\u5408\u7EA6\u7684\u521B\u5EFA\u8005. \u8FD9\u4E2A Operator \u65E2\u53EF\u4EE5\u662F\u666E\u901A\u8D26\u6237,\u8FD9\u65F6\u4ED6\u5C31\u662F\u8FD9\u4E2A\u5B50\u94FE\u7684\u7BA1\u7406\u5458.\u4E5F\u53EF\u4EE5\u662F\u4E00\u4EFD\u5408\u7EA6,\u90A3\u4E48\u5C31\u53EF\u4EE5\u901A\u8FC7\u5408\u7EA6\u6765\u89C4\u5B9A\u5B50\u94FE\u7684\u51FA\u5757\u89C4\u5219.</p><h3 id="_3-4-plasma-cash-\u4E2D\u8D44\u4EA7\u7684\u56DE\u5F52\u4E3B\u94FE\u4EE5\u592A\u574A" tabindex="-1">3.4 Plasma Cash \u4E2D\u8D44\u4EA7\u7684\u56DE\u5F52\u4E3B\u94FE\u4EE5\u592A\u574A <a class="header-anchor" href="#_3-4-plasma-cash-\u4E2D\u8D44\u4EA7\u7684\u56DE\u5F52\u4E3B\u94FE\u4EE5\u592A\u574A" aria-hidden="true">#</a></h3><p>\u5F53\u8D44\u4EA7\u5728 Plasma \u4E2D\u4EA4\u6613\u4E00\u6BB5\u65F6\u95F4\u4EE5\u540E,\u6301\u6709\u8005Bob\u5982\u679C\u60F3\u9000\u51FAPlasma Cash \u5B50\u94FE,\u90A3\u4E48\b\u5C31\u9700\u8981\u5411\u4EE5\u592A\u574A\u5408\u7EA6\u4E5F\u5C31\u662F RootChain\b\u8BC1\u660E,\u4ED6\u786E\u5B9E\u62E5\u6709\u8FD9\u4E00\u7B14\b\b\u8D44\u4EA7.</p><h4 id="_3-4-1-\u8D44\u4EA7\u62E5\u6709\u8BC1\u660E" tabindex="-1">3.4.1 \b\u8D44\u4EA7\u62E5\u6709\u8BC1\u660E <a class="header-anchor" href="#_3-4-1-\u8D44\u4EA7\u62E5\u6709\u8BC1\u660E" aria-hidden="true">#</a></h4><p>\u8FD9\u4E2A\u601D\u8DEF\u548C UTXO \u7684\u601D\u8DEF\u662F\u4E00\u6837\u7684,Bob\u80FD\u8BC1\u660E\u8FD9\u7B14\u8D44\u4EA7\u662F\u4ECE\u54EA\u91CC\u8F6C\u7ED9\u6211\u7684\u5373\u53EF.\b\u5177\u4F53\u89C1<a href="./.html">RootChain.sol</a>\u4E2D\u7684<code>startExit</code>\u51FD\u6570. \u5176\u601D\u8DEF\u975E\u5E38\u7B80\u5355,\u8BC1\u660E</p><ul><li>\u8FD9\u7B14\u8D44\u4EA7\u6765\u81EA\u54EA\u91CC(\u5728\u54EA M\u5757\u4E2D\u8F6C\u79FB\u5230\u4E86 Alice \u624B\u4E2D)</li><li>\u7ECF\u8FC7 Alice \u7B7E\u540D\u8F6C\u79FB\u7ED9\u4E86Bob(\u5728N\u5757\u4E2D Alice \u505A\u4E86\u7B7E\u540D\u7ED9\u6211) \u5177\u4F53\u770B\u4EE3\u7801 startExit</li></ul><div class="language-solidity line-numbers-mode"><pre><code><span class="token comment">/** @dev Starts the procedure for withdrawal of the deposit from the system.
     *  @param previousTx Penultimate deposit transaction.
     *  @param previousTxProof Proof of inclusion of a penultimate transaction in a Smart Plasma block.
     *  @param previousTxBlockNum The number of the block in which the penultimate transaction is included.
     *  @param lastTx Last deposit transaction.
     *  @param lastTxProof Proof of inclusion of a last transaction in a Smart Plasma block.
     *  @param lastTxBlockNum The number of the block in which the last transaction is included.
     */</span>
    <span class="token keyword">function</span> <span class="token function">startExit</span><span class="token punctuation">(</span>
        <span class="token builtin">bytes</span> previousTx<span class="token punctuation">,</span>
        <span class="token builtin">bytes</span> previousTxProof<span class="token punctuation">,</span>
        <span class="token builtin">uint256</span> previousTxBlockNum<span class="token punctuation">,</span>
        <span class="token builtin">bytes</span> lastTx<span class="token punctuation">,</span>
        <span class="token builtin">bytes</span> lastTxProof<span class="token punctuation">,</span>
        <span class="token builtin">uint256</span> lastTxBlockNum
    <span class="token punctuation">)</span>
        <span class="token keyword">public</span>
    <span class="token punctuation">{</span>
        Transaction<span class="token punctuation">.</span>Tx <span class="token keyword">memory</span> prevDecodedTx <span class="token operator">=</span> previousTx<span class="token punctuation">.</span><span class="token function">createTx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        Transaction<span class="token punctuation">.</span>Tx <span class="token keyword">memory</span> decodedTx <span class="token operator">=</span> lastTx<span class="token punctuation">.</span><span class="token function">createTx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u8BC1\u660E\u5728 prevBlock\u7684\u65F6\u5019 Alice \u62E5\u6709\u8D44\u4EA7 uid</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>previousTxBlockNum <span class="token operator">==</span> decodedTx<span class="token punctuation">.</span>prevBlock<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>prevDecodedTx<span class="token punctuation">.</span>uid <span class="token operator">==</span> decodedTx<span class="token punctuation">.</span>uid<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//amount \u4E0D\u53D8,\u8BC1\u660E\b\u8D44\u4EA7\u4E0D\u53EF\u5206\u5272</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>prevDecodedTx<span class="token punctuation">.</span>amount <span class="token operator">==</span> decodedTx<span class="token punctuation">.</span>amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//Alice \u786E\u5B9E\u7B7E\u540D\u8F6C\u79FB\u7ED9\u4E86\u6211,\u5E76\u4E14\u4EA4\u6613\u662F\u76F8\u90BB\u7684\u4E24\u7B14\u4EA4\u6613</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>prevDecodedTx<span class="token punctuation">.</span>newOwner <span class="token operator">==</span> decodedTx<span class="token punctuation">.</span>signer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>decodedTx<span class="token punctuation">.</span>nonce <span class="token operator">==</span> prevDecodedTx<span class="token punctuation">.</span>nonce<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u7D27\u6328\u7740\u7684\u4E24\u7B14\u4EA4\u6613</span>
        <span class="token comment">//\u6211\u662F Bob, \u6211\u8981\u6765\u62FF\u8D70\u8FD9\u7B14\u8D44\u4EA7</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender <span class="token operator">==</span> decodedTx<span class="token punctuation">.</span>newOwner<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>wallet<span class="token punctuation">[</span><span class="token builtin">bytes32</span><span class="token punctuation">(</span>decodedTx<span class="token punctuation">.</span>uid<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token builtin">bytes32</span> prevTxHash <span class="token operator">=</span> prevDecodedTx<span class="token punctuation">.</span>hash<span class="token punctuation">;</span>
        <span class="token builtin">bytes32</span> prevBlockRoot <span class="token operator">=</span> childChain<span class="token punctuation">[</span>previousTxBlockNum<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token builtin">bytes32</span> txHash <span class="token operator">=</span> decodedTx<span class="token punctuation">.</span>hash<span class="token punctuation">;</span>
        <span class="token builtin">bytes32</span> blockRoot <span class="token operator">=</span> childChain<span class="token punctuation">[</span>lastTxBlockNum<span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">require</span><span class="token punctuation">(</span>
            prevTxHash<span class="token punctuation">.</span><span class="token function">verifyProof</span><span class="token punctuation">(</span>
                prevDecodedTx<span class="token punctuation">.</span>uid<span class="token punctuation">,</span>
                prevBlockRoot<span class="token punctuation">,</span>
                previousTxProof
            <span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>
            txHash<span class="token punctuation">.</span><span class="token function">verifyProof</span><span class="token punctuation">(</span>
                decodedTx<span class="token punctuation">.</span>uid<span class="token punctuation">,</span>
                blockRoot<span class="token punctuation">,</span>
                lastTxProof
            <span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">/// Record the exit tx.</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>exits<span class="token punctuation">[</span>decodedTx<span class="token punctuation">.</span>uid<span class="token punctuation">]</span><span class="token punctuation">.</span>state <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token function">challengesLength</span><span class="token punctuation">(</span>decodedTx<span class="token punctuation">.</span>uid<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        exits<span class="token punctuation">[</span>decodedTx<span class="token punctuation">.</span>uid<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">exit</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            state<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            exitTime<span class="token punctuation">:</span> now<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>challengePeriod<span class="token punctuation">)</span><span class="token punctuation">,</span>
            exitTxBlkNum<span class="token punctuation">:</span> lastTxBlockNum<span class="token punctuation">,</span>
            exitTx<span class="token punctuation">:</span> lastTx<span class="token punctuation">,</span>
            txBeforeExitTxBlkNum<span class="token punctuation">:</span> previousTxBlockNum<span class="token punctuation">,</span>
            txBeforeExitTx<span class="token punctuation">:</span> previousTx
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">StartExit</span><span class="token punctuation">(</span>prevDecodedTx<span class="token punctuation">.</span>uid<span class="token punctuation">,</span> previousTxBlockNum<span class="token punctuation">,</span> lastTxBlockNum<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br></div></div><p>\u4EE3\u7801\u7684\u524D\u4E00\u534A\u90FD\u662F\u5728\u7528\u6765\u8BC1\u660E\u5728<code>lastTxBlockNum</code>\u7684\u65F6\u5019,\u8D44\u4EA7 uid \u5F52B\bob\u6240\u6709. \u7136\u540E\u540E\u4E00\u534A\u5C31\u662F\u63D0\u51FA\u6765,Bob\u60F3\u628A\u8D44\u4EA7 uid \u63D0\u8D70. \u6211\u7684\u8FD9\u4E2A\u60F3\u6CD5\u4F1A\u6682\u65F6\u4FDD\u5B58\u5728\u5408\u7EA6\u4E2D,\u7B49\u5F85\u522B\u4EBA\u6765\u6311\u6218.</p><h4 id="_3-4-2-\u7B49\u5F85\u5176\u4ED6\u4EBA\u6765\u6311\u6218\u6211" tabindex="-1">3.4.2 \u7B49\u5F85\u5176\u4ED6\u4EBA\u6765\u6311\u6218\u6211 <a class="header-anchor" href="#_3-4-2-\u7B49\u5F85\u5176\u4ED6\u4EBA\u6765\u6311\u6218\u6211" aria-hidden="true">#</a></h4><p>\u6709\u4E86\u4EE5\u4E0A\u4FE1\u606F, \u5C31\u53EF\u4EE5\u8BC1\u660E\u5728 N \u5757\u65F6,\u8FD9\u7B14\u8D44\u4EA7\u5F52Bob\u6240\u7528.\u4F46\u662F\u8FD9\u80AF\u5B9A\u4E0D\u591F,\u65E0\u6CD5\u8BC1\u660E\u73B0\u5728\u8D44\u4EA7\u4ECD\u7136\u5C5E\u4E8EBob,\u4E5F\u65E0\u6CD5\u8BC1\u660EAlice \u6CA1\u6709\u5728 M \u5757\u4EE5\u540E\u518D\u7ED9\u522B\u4EBA. \u66F4\u52A0\u4E0D\u80FD\u8BC1\u660E\u5728 M \u5757\u7684\u65F6\u5019 Alice \u771F\u7684\u662F uid \u7684\u62E5\u6709\u8005? \u8FD9\u4E9B\u95EE\u9898,\b\u770B\u8D77\u6765\u5F88\u96BE\u56DE\u7B54,\u5176\u5B9E\u601D\u8DEF\u4E5F\u5F88\u7B80\u5355. \u8FD9\u4E2A\u601D\u8DEF\u548C\b\u96F7\u7535\u7F51\u7EDC\u4E2D\u89E3\u51B3\u95EE\u9898\u7684\u529E\u6CD5\u662F\u4E00\u6837\u7684, \u8BA9\u8FD9\u7B14\u8D44\u4EA7\u7684\u5229\u76CA\u6538\u5173\u8005\u7AD9\u51FA\u6765\u4E3E\u8BC1. \u6BD4\u5982: \u5982\u679C Carol\u80FD\u591F\u4E3E\u8BC1\u8FD9\u7B14\u8D44\u4EA7Bob \u540E\u6765\u53C8\u8F6C\u79FB\u7ED9\u4E86 Carol, \u90A3\u4E48\u5B9E\u9645\u4E0A Bob \u5C31\u662F\u5728\u53CC\u82B1. \u5177\u4F53\u7684\u6311\u6218\u4EE5\u53CA\u8FCE\u6218\u4EE3\u7801\u6BD4\u8F83\u590D\u6742,\u4F46\u662F\u8FD9\u4E5F\u662F Plasma Cash \u7684\u6838\u5FC3\u5B89\u5168\u6027\u6240\u5728.\u5982\u679C\u6CA1\u6709\u8FD9\u4E9B,\u6240\u6709\u7684\u53C2\u4E0E\u8005\u90FD\u5C06\u65E0\u6CD5\u4FDD\u8BC1\u81EA\u5DF1\u7684\u6743\u76CA.</p><div class="language-"><pre><code>//challengeExit \u6311\u6218\u8D44\u4EA7uid \u5176\u5B9E\u4E0D\u5C5E\u4E8E Bob
  /** @dev Challenges a exit.
     *  @param uid Unique identifier of a deposit.
     *  @param challengeTx Transaction that disputes an exit.
     *  @param proof Proof of inclusion of the transaction in a Smart Plasma block.
     *  @param challengeBlockNum The number of the block in which the transaction is included.
     */
    function challengeExit(
        uint256 uid,
        bytes challengeTx,
        bytes proof,
        uint256 challengeBlockNum
    )
        public
    {
        require(exits[uid].state == 2);

        Transaction.Tx memory exitDecodedTx = (exits[uid].exitTx).createTx();
        Transaction.Tx memory beforeExitDecodedTx = (exits[uid].txBeforeExitTx).createTx();
        Transaction.Tx memory challengeDecodedTx = challengeTx.createTx();

        require(exitDecodedTx.uid == challengeDecodedTx.uid);
        require(exitDecodedTx.amount == challengeDecodedTx.amount);

        bytes32 txHash = challengeDecodedTx.hash;
        bytes32 blockRoot = childChain[challengeBlockNum];

        require(txHash.verifyProof(uid, blockRoot, proof));

        // test challenge #1 &amp; test challenge #2 \u6700\u540E\u4E00\u7B14\u4EA4\u6613\u540E\u9762\u53C8\u8FDB\u884C\u4E86\u5176\u4ED6\u4EA4\u6613, Bob \u5728\u8FDB\u884C\u53CC\u82B1
        if (exitDecodedTx.newOwner == challengeDecodedTx.signer &amp;&amp;
        exitDecodedTx.nonce &lt; challengeDecodedTx.nonce) {
            delete exits[uid];
            return;
        }

        // test challenge #3, \u53CC\u82B1\u4E86,  Alice \u7ED9\u4E86\u4E24\u4E2A\u4EBA,\u5E76\u4E14\b\u6311\u6218\u8005 Carol\u7684BlockNumer \u66F4\u5C0F,\u4E5F\u5C31\u662F\u53D1\u751F\u7684\u66F4\u65E9.
        if (challengeBlockNum &lt; exits[uid].exitTxBlkNum &amp;&amp;
            (beforeExitDecodedTx.newOwner == challengeDecodedTx.signer &amp;&amp;
            challengeDecodedTx.nonce &gt; beforeExitDecodedTx.nonce)) {
            delete exits[uid];
            return;
        }

        // test challenge #4   \u5728 M\u5757\u4E4B\u524D,\u8FD8\u6709\u4E00\u7B14\u4EA4\u6613,Alice \u9700\u8981\u8BC1\u660E\u81EA\u5DF1\u5728 M \u5757\u786E\u5B9E\u62E5\u6709 uid
        // \u8FD9\u4E2A\u66F4\u591A\u7684\u662F\u9632\u6B62\u8FD9\u79CD\u60C5\u51B5 The operator can even start a withdrawal from an output created by an invalid transaction.
        // \u4E5F\u5C31\u662F Operator \u65E0\u4E2D\u751F\u6709\u4EA7\u751F\u4E86\u4E00\u4E2A Tx, \u7136\u540E\u82B1\u8D39\u6B64 Tx
        // \u800C\u8FD9\u5B9E\u9645\u4E0A\u4F1A\u4F24\u5BB3\u5230 uid \u771F\u6B63\u6301\u6709\u4EBA\u7684\u5229\u76CA,\u4ED6\u4E00\u5B9A\u4F1A\u7AD9\u51FA\u6765\u8BF4\u660E\u6B64\u4E8B
        if (challengeBlockNum &lt; exits[uid].txBeforeExitTxBlkNum ) {
            exits[uid].state = 1;
            addChallenge(uid, challengeTx, challengeBlockNum);
        }

        require(exits[uid].state == 1);

        ChallengeExit(uid);
    }

/*
\u8FD9\u4E2A\u5185\u5BB9,\u6211\u4EEC\u663E\u7136\u6CA1\u6709,\u5982\u4F55\u89E3\u51B3\u5462  plasma mvp
Confirmation Signatures
Now what happens if a transaction gets included after the bad transaction? This can totally happen if a user makes a transaction, the transaction is sent to the operator, and the operator puts an invalid transaction before the user\u2019s valid transaction. Users could try to exit from the inputs to the transaction, but that exit could be challenged by revealing the signed spend.

We deal with this scenario by requiring that transactions are invalid until they\u2019re signed twice. Whenever a user makes a transaction, they\u2019ll sign a first signature to have that transaction included in a block. Then, once the transaction is included in a valid block, the user will sign a second signature, called a confirmation signature. Users correctly following this rule will never sign a confirmation signature unless they know that their transaction was included in a valid block.

We add an extra rule that exit challenges also have to provide the confirmation signature. Now, if the operator includes a user\u2019s transaction after their invalid transaction, the user simply won\u2019t sign a confirmation signature. A transaction included after an invalid transaction won\u2019t have a confirmation signature, and therefore won\u2019t be valid. Every correctly behaving user can therefore get their funds back.
*/
//Bob\u5E94\u6218,\u518D\u6B21\u4E3E\u8BC1,\u5B9E\u9645\u4E0A\u8FD9\u4E2A\u8FC7\u7A0B\u5C31\u662F\u8981\u4E0D\u65AD\u7684\u8FFD\u52A0\u8BC1\u636E,\u5C06\u6240\u6709\u7684\u4EA4\u6613\u8FDE\u8D77\u6765,\u6700\u7EC8\u8BC1\u660E Alice \u5728 M\u5757\u786E\u5B9E\u62E5\u6709 uid
 /** @dev Answers a challenge exit.
     *  @param uid Unique identifier of a deposit.
     *  @param challengeTx Transaction that disputes an exit.
     *  @param respondTx Transaction that answers to a dispute transaction.
     *  @param proof Proof of inclusion of the respond transaction in a Smart Plasma block.
     *  @param blockNum The number of the block in which the respond transaction is included.
     */
    function respondChallengeExit(
        uint256 uid,
        bytes challengeTx,
        bytes respondTx,
        bytes proof,
        uint blockNum
    )
        public
    {
        require(challengeExists(uid, challengeTx));
        require(exits[uid].state == 1);

        Transaction.Tx memory challengeDecodedTx = challengeTx.createTx();
        Transaction.Tx memory respondDecodedTx = respondTx.createTx();

        require(challengeDecodedTx.uid == respondDecodedTx.uid);
        require(challengeDecodedTx.amount == respondDecodedTx.amount);
        require(challengeDecodedTx.newOwner == respondDecodedTx.signer);
        require(challengeDecodedTx.nonce.add(uint256(1)) == respondDecodedTx.nonce);
        require(blockNum &lt; exits[uid].txBeforeExitTxBlkNum);

        bytes32 txHash = respondDecodedTx.hash;
        bytes32 blockRoot = childChain[blockNum];

        require(txHash.verifyProof(uid, blockRoot, proof));

        removeChallenge(uid, challengeTx);

        if (challengesLength(uid) == 0) {
            exits[uid].state = 2;
        }

        RespondChallengeExit(uid);
    }
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br></div></div><h4 id="_3-4-3-\u6311\u6218\u671F\u8FC7\u4E86-bob-\u62FF\u56DE\u8D44\u4EA7-uid" tabindex="-1">3.4.3 \u6311\u6218\u671F\u8FC7\u4E86, Bob \u62FF\u56DE\u8D44\u4EA7 uid <a class="header-anchor" href="#_3-4-3-\u6311\u6218\u671F\u8FC7\u4E86-bob-\u62FF\u56DE\u8D44\u4EA7-uid" aria-hidden="true">#</a></h4><p>\u6311\u6218\u671F\u8FC7\u540E,Bob \u5728Mediator.sol \u4E2D\u63D0\u51FA\u5C06\u8D44\u4EA7\u9000\u56DE\u5230\u4EE5\u592A\u574A\u4E2D</p><div class="language-solidity line-numbers-mode"><pre><code> <span class="token comment">/** @dev withdraws deposit from Smart Plasma.
     *  @param prevTx Penultimate deposit transaction.
     *  @param prevTxProof Proof of inclusion of a penultimate transaction in a Smart Plasma block.
     *  @param prevTxBlkNum The number of the block in which the penultimate transaction is included.
     *  @param txRaw lastTx Last deposit transaction.
     *  @param txProof Proof of inclusion of a last transaction in a Smart Plasma block.
     *  @param txBlkNum The number of the block in which the last transaction is included.
     */</span>
    <span class="token keyword">function</span> <span class="token function">withdraw</span><span class="token punctuation">(</span>
        <span class="token builtin">bytes</span> prevTx<span class="token punctuation">,</span>
        <span class="token builtin">bytes</span> prevTxProof<span class="token punctuation">,</span>
        <span class="token builtin">uint</span> prevTxBlkNum<span class="token punctuation">,</span>
        <span class="token builtin">bytes</span> txRaw<span class="token punctuation">,</span>
        <span class="token builtin">bytes</span> txProof<span class="token punctuation">,</span>
        <span class="token builtin">uint</span> txBlkNum
    <span class="token punctuation">)</span>
        <span class="token keyword">public</span>
    <span class="token punctuation">{</span>
        <span class="token builtin">bytes32</span> uid <span class="token operator">=</span> rootChain<span class="token punctuation">.</span><span class="token function">finishExit</span><span class="token punctuation">(</span>
            msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span>
            prevTx<span class="token punctuation">,</span>
            prevTxProof<span class="token punctuation">,</span>
            prevTxBlkNum<span class="token punctuation">,</span>
            txRaw<span class="token punctuation">,</span>
            txProof<span class="token punctuation">,</span>
            txBlkNum
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

        entry invoice <span class="token operator">=</span> cash<span class="token punctuation">[</span>uid<span class="token punctuation">]</span><span class="token punctuation">;</span>

        Token token <span class="token operator">=</span> <span class="token function">Token</span><span class="token punctuation">(</span>invoice<span class="token punctuation">.</span>currency<span class="token punctuation">)</span><span class="token punctuation">;</span>
        token<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> invoice<span class="token punctuation">.</span>amount<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/// \u771F\u6B63\u7684\u8D44\u4EA7\u8F6C\u79FB</span>

        <span class="token keyword">delete</span><span class="token punctuation">(</span>cash<span class="token punctuation">[</span>uid<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>RootChain \u518D\u6B21\u9A8C\u8BC1</p><div class="language-solidity line-numbers-mode"><pre><code> <span class="token comment">/** @dev Finishes the procedure for withdrawal of the deposit from the system.
     *       Can only call the owner. Usually the owner is the mediator contract.
     *  @param account Account that initialized the deposit withdrawal.
     *  @param previousTx Penultimate deposit transaction.
     *  @param previousTxProof Proof of inclusion of a penultimate transaction in a Smart Plasma block.
     *  @param previousTxBlockNum The number of the block in which the penultimate transaction is included.
     *  @param lastTx Last deposit transaction.
     *  @param lastTxProof Proof of inclusion of a last transaction in a Smart Plasma block.
     *  @param lastTxBlockNum The number of the block in which the last transaction is included.
     */</span>
    <span class="token keyword">function</span> <span class="token function">finishExit</span><span class="token punctuation">(</span>
        <span class="token builtin">address</span> account<span class="token punctuation">,</span>
        <span class="token builtin">bytes</span> previousTx<span class="token punctuation">,</span>
        <span class="token builtin">bytes</span> previousTxProof<span class="token punctuation">,</span>
        <span class="token builtin">uint256</span> previousTxBlockNum<span class="token punctuation">,</span>
        <span class="token builtin">bytes</span> lastTx<span class="token punctuation">,</span>
        <span class="token builtin">bytes</span> lastTxProof<span class="token punctuation">,</span>
        <span class="token builtin">uint256</span> lastTxBlockNum
    <span class="token punctuation">)</span>
        <span class="token keyword">public</span>
        onlyOwner
        <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bytes32</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Transaction<span class="token punctuation">.</span>Tx <span class="token keyword">memory</span> prevDecodedTx <span class="token operator">=</span> previousTx<span class="token punctuation">.</span><span class="token function">createTx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        Transaction<span class="token punctuation">.</span>Tx <span class="token keyword">memory</span> decodedTx <span class="token operator">=</span> lastTx<span class="token punctuation">.</span><span class="token function">createTx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">require</span><span class="token punctuation">(</span>previousTxBlockNum <span class="token operator">==</span> decodedTx<span class="token punctuation">.</span>prevBlock<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>prevDecodedTx<span class="token punctuation">.</span>uid <span class="token operator">==</span> decodedTx<span class="token punctuation">.</span>uid<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>prevDecodedTx<span class="token punctuation">.</span>amount <span class="token operator">==</span> decodedTx<span class="token punctuation">.</span>amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>prevDecodedTx<span class="token punctuation">.</span>newOwner <span class="token operator">==</span> decodedTx<span class="token punctuation">.</span>signer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>account <span class="token operator">==</span> decodedTx<span class="token punctuation">.</span>newOwner<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token builtin">bytes32</span> prevTxHash <span class="token operator">=</span> prevDecodedTx<span class="token punctuation">.</span>hash<span class="token punctuation">;</span>
        <span class="token builtin">bytes32</span> prevBlockRoot <span class="token operator">=</span> childChain<span class="token punctuation">[</span>previousTxBlockNum<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token builtin">bytes32</span> txHash <span class="token operator">=</span> decodedTx<span class="token punctuation">.</span>hash<span class="token punctuation">;</span>
        <span class="token builtin">bytes32</span> blockRoot <span class="token operator">=</span> childChain<span class="token punctuation">[</span>lastTxBlockNum<span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">require</span><span class="token punctuation">(</span>
            prevTxHash<span class="token punctuation">.</span><span class="token function">verifyProof</span><span class="token punctuation">(</span>
                prevDecodedTx<span class="token punctuation">.</span>uid<span class="token punctuation">,</span>
                prevBlockRoot<span class="token punctuation">,</span>
                previousTxProof
            <span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">require</span><span class="token punctuation">(</span>
            txHash<span class="token punctuation">.</span><span class="token function">verifyProof</span><span class="token punctuation">(</span>
                decodedTx<span class="token punctuation">.</span>uid<span class="token punctuation">,</span>
                blockRoot<span class="token punctuation">,</span>
                lastTxProof
            <span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">require</span><span class="token punctuation">(</span>exits<span class="token punctuation">[</span>decodedTx<span class="token punctuation">.</span>uid<span class="token punctuation">]</span><span class="token punctuation">.</span>exitTime <span class="token operator">&lt;</span> now<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u6311\u6218\u671F\u8FC7\u4E86</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>exits<span class="token punctuation">[</span>decodedTx<span class="token punctuation">.</span>uid<span class="token punctuation">]</span><span class="token punctuation">.</span>state <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5E76\u4E14\u6CA1\u6709\u4EBA\u6311\u6218\u6216\u8005\u6211\u90FD\u7ED9\u51FA\u4E86\u5408\u9002\u7684\u8BC1\u636E</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token function">challengesLength</span><span class="token punctuation">(</span>decodedTx<span class="token punctuation">.</span>uid<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        exits<span class="token punctuation">[</span>decodedTx<span class="token punctuation">.</span>uid<span class="token punctuation">]</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

        <span class="token keyword">delete</span><span class="token punctuation">(</span>wallet<span class="token punctuation">[</span><span class="token builtin">bytes32</span><span class="token punctuation">(</span>decodedTx<span class="token punctuation">.</span>uid<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">FinishExit</span><span class="token punctuation">(</span>decodedTx<span class="token punctuation">.</span>uid<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token builtin">bytes32</span><span class="token punctuation">(</span>decodedTx<span class="token punctuation">.</span>uid<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br></div></div><h2 id="_4-plasma-cash-\u4E2D\u7684\u9000\u51FA\u793A\u4F8B" tabindex="-1">4. Plasma Cash \u4E2D\u7684\u9000\u51FA\u793A\u4F8B <a class="header-anchor" href="#_4-plasma-cash-\u4E2D\u7684\u9000\u51FA\u793A\u4F8B" aria-hidden="true">#</a></h2><pre class="mermaid loading">sequenceDiagram
participant o as operator
participant u1 as alice
participant u2 as bob
participant u3 as carol
participant u4 as david
u1-&gt;&gt;rootchain: deposit asset to RootChain, get unique id asset1
o-&gt;&gt;rootchain: \u751F\u6210 NewBlock 3, \u8BB0\u5F55\u6B64\u7B14\u8D44\u4EA7
u1-&gt;&gt;u2: transfer asset1 to bob
o-&gt;&gt;rootchain: \u751F\u6210 NewBlock 7, \u8BB0\u5F55\u6B64\u7B14\u4EA4\u6613
u1-&gt;&gt;u3: transfer asset1 to carol
o-&gt;&gt;rootchain: \u751F\u6210 Newblock 11 \u8BB0\u5F55\u6B64\u7B14\u4EA4\u6613
u3-&gt;&gt;rootchain: \u6211\u8981\u63D0\u73B0asset1\u5230\u4E3B\u94FE,\u63D0\u4F9Basset1\u6765\u81EA alice,\u7531 alice\u7B7E\u540D,\u53D1\u751F\u5728 11
u2-&gt;&gt;rootchain:  \u63D0\u51FA\u6311\u6218,asset1\u5E94\u8BE5\u5C5E\u4E8E\u6211,\u63D0\u4F9B asset1 \u6765\u81EA alice,\u7531 aice\u7B7E\u540D,\u53D1\u751F\u5728 7,rootchain \u5224\u5B9Abob\u8BC1\u636E\u6709\u6548,\u62D2\u7EDDcarol\u63D0\u73B0
u2-&gt;&gt;u4: transfer asset1 to devid
o-&gt;&gt;rootchain:\u751F\u6210 Newblock 27,  \u8BB0\u5F55\u6B64\u7B14\u4EA4\u6613
u4-&gt;&gt;rootchain:\u63D0\u73B0 asset1,\u6765\u81EA bob,\u6709 bob\u7684\u7B7E\u540D,\u53D1\u751F\u5728 27
loop david wait for challenge
u4-&gt;&gt;u4:\u7B49\u5F85\u6311\u6218\u671F\u4E24\u5468\u65F6\u95F4
end
u4-&gt;&gt; rootchain: withdraw,\u63D0\u73B0,\u5C06asset1\u4ECErootchain \u8F6C\u8D70</pre><p>@ import</p><h2 id="_5-\u5176\u4ED6\u95EE\u9898" tabindex="-1">5. \u5176\u4ED6\u95EE\u9898 <a class="header-anchor" href="#_5-\u5176\u4ED6\u95EE\u9898" aria-hidden="true">#</a></h2><ul><li><ol><li>\u4E3A\u4EC0\u4E48 Plasma Cash \u4E2D\u7684\u8D44\u4EA7\u662F\u4E0D\u53EF\u5206\u5272\u7684? <br> \u8FDB\u5165 rootchain \u7684\u8D44\u4EA7\u7C7B\u4F3C\u4E8E\u6BD4\u7279\u5E01\u7684 UTXO \u6A21\u578B,\u4F46\u662F\u662F\u4E0D\u53EF\u5206\u5272\u7684,\u8FD9\u4E2A\u53EF\u4EE5\u901A\u8FC7\u4EA4\u6613\u9A8C\u8BC1\u65F6\u6BCF\u6B21\u90FD\u8981\u6C42 amount \u4E0D\u53D8\u53EF\u4EE5\u5F97\u51FA.</li></ol></li><li><ol start="2"><li>operator \u7684\u4F5C\u7528\u662F\u4EC0\u4E48? <br> operator \u8D1F\u8D23\u5C06\u5B50\u94FE\u4E2D\u7684\u4EA4\u6613\u8BC1\u636E(\u9ED8\u514B\u5C14\u6811)\u63D0\u4EA4\u8BC1\u660E\u5230\u4EE5\u592A\u574A\u4E3B\u94FE\u4E2D.</li></ol></li><li><ol start="3"><li>operator \u662F\u5426\u5FC5\u987B\u53EF\u4FE1\u4EFB\u7684? <br> \u662F\u7684. \u867D\u7136 operator \u4E0D\u80FD\u5C06\u4ED6\u4EBA\u8D44\u4EA7\u968F\u610F\u8F6C\u79FB,\u4F46\u662F\u5374\u53EF\u4EE5\u963B\u6B62\u4ED6\u4EBA\u8D44\u4EA7\u8F6C\u79FB.\u4E5F\u5C31\u662F\u8BF4\u65E0\u6CD5\u4ECE Plasma \u5B50\u94FE\u4E2D\u9000\u56DE\u5230\u4EE5\u592A\u574A\u4E2D. \u5F53\u7136\u8FD9\u90E8\u5206\u662F\u53EF\u4EE5\u6539\u8FDB,\u964D\u4F4E operator \u4F5C\u6076\u5E26\u6765\u7684\u98CE\u9669.</li></ol></li><li><ol start="4"><li>operator \u662F\u5426\u53EF\u4EE5\u662F\u4E00\u4E2A\u5408\u7EA6\u5462? <br> \u662F\u7684. \u5982\u679C operator \u662F\u4E00\u4E2A Pos \u5171\u8BC6\u5408\u7EA6,\u90A3\u4E48\u53EF\u4EE5\u964D\u4F4E\u95EE\u98983\u4E2D\u7684\u98CE\u9669</li></ol></li></ul>`,45),l=[t];function o(c,i,r,u,b,k){return a(),s("div",null,l)}var h=n(p,[["render",o]]);export{d as __pageData,h as default};
