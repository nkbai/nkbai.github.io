import{o as n,c as s,f as a,e as p,b as t,d as e}from"./app.f7f738b8.js";const o='{"title":"8.libra的mempool模块解读-3","description":"","frontmatter":{"title":"8.libra的mempool模块解读-3","date":"2019-07-04T03:00:34.000Z","draft":false,"tags":["rust","blockchain","libra"],"series":["libra"],"categories":["技术相关"]},"headers":[{"level":2,"title":"1. 启动过程","slug":"_1-启动过程"},{"level":3,"title":"1.1 startsharedmempool","slug":"_1-1-start-shared-mempool"},{"level":2,"title":"2. SharedMempool中的各个子任务","slug":"_2-sharedmempool中的各个子任务"},{"level":3,"title":"2.1 接受来自底层Network模块的信息推送","slug":"_2-1-接受来自底层network模块的信息推送"},{"level":3,"title":"2.2 向外广播来自AC的Tx","slug":"_2-2-向外广播来自ac的tx"},{"level":3,"title":"2.3 gc_task 过期交易回收机制","slug":"_2-3-gc-task-过期交易回收机制"},{"level":2,"title":"3. mempool之间的同步","slug":"_3-mempool之间的同步"},{"level":3,"title":"3.1 发现节点之间的链接方式","slug":"_3-1-发现节点之间的链接方式"},{"level":3,"title":"3.2 向指定Peer发送事件","slug":"_3-2-向指定peer发送事件"},{"level":3,"title":"3.3 接收Peer广播出来的Tx","slug":"_3-3-接收peer广播出来的tx"},{"level":3,"title":"3.3 一个基本测试case","slug":"_3-3-一个基本测试case"},{"level":2,"title":"4. 结束语","slug":"_4-结束语"}],"relativePath":"libra/8.libria_mempool_3.md","lastUpdated":1564531739000}',c={},l=p('',1),u=p('',17),i=t("p",null,[e("这个函数值得一说到就是他添加Tx到缓冲池中的方式是"),t("code",null,"TimelineState::NonQualified"),e(",这意味着这种Tx不会再被广播给其他节点. 好处当然是极大的降低了数据传输量. 这种方式在以太坊中肯定是不会采用的,因为这很不利于Tx的快速广播. 当然Libra采用这种方式有他的道理,他是联盟链,节点数量有限,他采用的假设应该是: 有N个节点的联盟链,这个N个节点彼此之间两两互连,总共有"),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mfrac",null,[t("mrow",null,[t("mi",null,"N"),t("mo",{stretchy:"false"},"("),t("mi",null,"N"),t("mo",null,"−"),t("mn",null,"1"),t("mo",{stretchy:"false"},")")]),t("mn",null,"2")])]),t("annotation",{encoding:"application/x-tex"},"\\frac {N(N-1)} 2")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"1.355em","vertical-align":"-0.345em"}}),t("span",{class:"mord"},[t("span",{class:"mopen nulldelimiter"}),t("span",{class:"mfrac"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"1.01em"}},[t("span",{style:{top:"-2.6550000000000002em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mtight"},[t("span",{class:"mord mtight"},"2")])])]),t("span",{style:{top:"-3.23em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),t("span",{style:{top:"-3.485em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mtight"},[t("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.10903em"}},"N"),t("span",{class:"mopen mtight"},"("),t("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.10903em"}},"N"),t("span",{class:"mbin mtight"},"−"),t("span",{class:"mord mtight"},"1"),t("span",{class:"mclose mtight"},")")])])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.345em"}},[t("span")])])])]),t("span",{class:"mclose nulldelimiter"})])])])]),e("个连接.")],-1),r=p('',29);c.render=function(p,t,e,o,c,k){return n(),s("div",null,[a(' @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} '),a(" code_chunk_output "),l,a(" /code_chunk_output "),u,i,r])};export{o as __pageData,c as default};
