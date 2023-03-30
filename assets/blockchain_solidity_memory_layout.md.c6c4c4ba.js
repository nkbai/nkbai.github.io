import{_ as e,c as a,o as s,a as t}from"./app.3dd4ae37.js";const m='{"title":"Solidity\u7684\u5185\u5B58\u5E03\u5C40","description":"","frontmatter":{"title":"Solidity\u7684\u5185\u5B58\u5E03\u5C40","date":"2022-07-11T01:45:03.000Z","draft":false,"tags":["ethereum","blockchain","solidity"],"categories":["\u6280\u672F\u76F8\u5173"]},"headers":[{"level":2,"title":"\u56FA\u5B9A\u5E03\u5C40","slug":"\u56FA\u5B9A\u5E03\u5C40"},{"level":2,"title":"\u5185\u5B58\u53EA\u5206\u914D,\u4E0D\u91CA\u653E","slug":"\u5185\u5B58\u53EA\u5206\u914D-\u4E0D\u91CA\u653E"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"},{"level":2,"title":"\u5185\u5B58\u5E03\u5C40\u4E0Estorage\u4E2D\u7684\u5DEE\u5F02","slug":"\u5185\u5B58\u5E03\u5C40\u4E0Estorage\u4E2D\u7684\u5DEE\u5F02"}],"relativePath":"blockchain/solidity/memory_layout.md"}',r={},i=t(`<p>solidity\u7ECF\u8FC7\u7F16\u8BD1\u540E\u751F\u6210\u76F8\u5E94\u7684evm\u673A\u5668\u7801,\u76F8\u5F53\u4E8E\u76F4\u63A5\u5728\u4E00\u4E2A\u88F8\u673A\u4E0A\u8FD0\u884C\u4E00\u6BB5\u7A0B\u5E8F. \u5E76\u4E14\u7531\u4E8E\u5408\u7EA6\u76F8\u5BF9\u6CA1\u6709\u90A3\u4E48\u590D\u6742(\u6BD4\u5982\u8FDB\u7A0B\u4E4B\u7C7B\u7684\u6982\u5FF5),\u56E0\u6B64\u5176\u5185\u5B58\u7BA1\u7406\u673A\u5236\u5C31\u76F8\u5F53\u4E8E\u4E00\u4E2A\u7B80\u5355\u7684bootloader\u4E00\u6837.</p><h2 id="\u56FA\u5B9A\u5E03\u5C40" tabindex="-1">\u56FA\u5B9A\u5E03\u5C40 <a class="header-anchor" href="#\u56FA\u5B9A\u5E03\u5C40" aria-hidden="true">#</a></h2><ul><li>0x00-0x3f \u524D\u516D\u5341\u56DB\u4E2A\u5B57\u8282,\u4E34\u65F6\u7F13\u51B2\u533A,\u6BD4\u5982\u8BA1\u7B97hash\u65F6\u4F7F\u7528</li><li>0x40-0x5f \u517132\u4E2A\u5B57\u8282,\u5F53\u524D\u5DF2\u7ECF\u5206\u914D\u4E86\u591A\u5C11\u5185\u5B58,\u540C\u65F6\u4E5F\u6307\u5411\u4E86\u4E0B\u6B21\u53EF\u5206\u914D\u7684\u5185\u5B58\u7A7A\u95F4</li><li>0x60-0x7f zero slot \u6C38\u8FDC\u662F0,\u4E0D\u5E94\u8BE5\u5199\u5165</li></ul><h2 id="\u5185\u5B58\u53EA\u5206\u914D-\u4E0D\u91CA\u653E" tabindex="-1">\u5185\u5B58\u53EA\u5206\u914D,\u4E0D\u91CA\u653E <a class="header-anchor" href="#\u5185\u5B58\u53EA\u5206\u914D-\u4E0D\u91CA\u653E" aria-hidden="true">#</a></h2><p>\u548C\u666E\u901A\u7684\u7F16\u7A0B\u8BED\u8A00\u4E0D\u4E00\u6837\u7684\u662F,solidity\u53EA\u7BA1\u5185\u5B58\u5206\u914D,\u6C38\u8FDC\u4E0D\u91CA\u653E. \u56E0\u4E3A\u5176\u5730\u5740\u7A7A\u95F4\u67092^256,\u53EF\u4EE5\u8BF4\u662F\u7528\u4E4B\u4E0D\u5C3D.</p><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><p>\u5982\u679C\u4E34\u65F6\u9700\u8981\u4F7F\u7528\u8D85\u8FC764\u5B57\u8282\u7684\u7A7A\u95F4,\u90A3\u4E48\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u672A\u5206\u914D\u7A7A\u95F4,\u5177\u4F53\u5C31\u662F0x40-0x5f\u6307\u5411\u7684\u5730\u5740,\u540C\u65F6\u4E5F\u662Fmsize()\u7684\u8FD4\u56DE\u503C. <strong>\u56E0\u6B64\u4EE3\u7801\u4E0D\u5E94\u5047\u5B9A\u5206\u914D\u5230\u7684\u5185\u5B58\u90FD\u662F\u521D\u59CB\u5316\u4E3A0</strong></p><h2 id="\u5185\u5B58\u5E03\u5C40\u4E0Estorage\u4E2D\u7684\u5DEE\u5F02" tabindex="-1">\u5185\u5B58\u5E03\u5C40\u4E0Estorage\u4E2D\u7684\u5DEE\u5F02 <a class="header-anchor" href="#\u5185\u5B58\u5E03\u5C40\u4E0Estorage\u4E2D\u7684\u5DEE\u5F02" aria-hidden="true">#</a></h2><p>\u56E0\u4E3Astorage\u4E2D\u8BFB\u5199\u975E\u5E38\u6602\u8D35,\u56E0\u6B64\u4F1A\u5C3D\u53EF\u80FD\u7684\u7D27\u51D1,\u800C\u5185\u5B58\u5219\u65E0\u9700\u8FD9\u4E48\u590D\u6742.</p><p>\u56E0\u4E3A\u7D27\u51D1\u7684\u5185\u5B58,\u4F1A\u5E26\u6765\u4E0D\u5FC5\u8981\u7684\u64CD\u4F5C\u590D\u6742\u5EA6. \u6BD5\u7ADFevm\u4E2D\u6307\u4EE4\u7684\u64CD\u4F5C\u6570\u90FD\u662F32\u5B57\u8282(256\u4F4D).</p><p>\u6BD4\u5982:</p><p><code>uint8[4] a; </code> \u5728memory\u4E2D,\u4F1A\u5360\u7528128\u5B57\u8282,\u800Cstorage\u4E2D,\u5219\u53EA\u670932\u5B57\u8282.</p><p>\u518D\u6BD4\u5982:</p><div class="language-"><pre><code>struct S {
    uint a;
    uint b;
    uint8 c;
    uint8 d;
}
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>storage\u4E2D\u65E0\u9700\u5BF9\u9F50(\u8FD9\u662F\u73B0\u4EE3risc cpu\u7684\u57FA\u672C\u8981\u6C42),\u6240\u4EE5\u5728memory\u4E2D\u662F32*4=128\u5B57\u8282,\u800C\u5728storage\u4E2D\u5219\u53EA\u670996\u5B57\u8282.</p>`,15),n=[i];function l(o,d,c,p,h,u){return s(),a("div",null,n)}var b=e(r,[["render",l]]);export{m as __pageData,b as default};