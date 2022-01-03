import{o as s,c as n,f as a,b as t,d as p,e}from"./app.735ab1d2.js";const l='{"title":"椭圆曲线签名算法原理","description":"","frontmatter":{},"headers":[{"level":2,"title":"title: \\"ECC签名中随机数不随机的危害\\"\\ndate: 2020-09-03T08:57:03+08:00\\ndraft: false\\nmarkup: mmark","slug":"title-ecc签名中随机数不随机的危害-date-2020-09-03t08-57-03-08-00draft-falsemarkup-mmark"},{"level":3,"title":"椭圆曲线签名算法原理","slug":"椭圆曲线签名算法原理"},{"level":3,"title":"go实现的签名","slug":"go实现的签名"},{"level":3,"title":"go实现的签名验证过程","slug":"go实现的签名验证过程"},{"level":3,"title":"使用了相同的随机数n,为什么能推出私钥","slug":"使用了相同的随机数n-为什么能推出私钥"},{"level":3,"title":"验证","slug":"验证"}],"relativePath":"blockchain/block_chain_core/ecc_signature_random.md","lastUpdated":1602742827000}',c={},o=t("hr",null,null,-1),u=t("h2",{id:"title-ecc签名中随机数不随机的危害-date-2020-09-03t08-57-03-08-00draft-falsemarkup-mmark"},[t("a",{class:"header-anchor",href:"#title-ecc签名中随机数不随机的危害-date-2020-09-03t08-57-03-08-00draft-falsemarkup-mmark","aria-hidden":"true"},"#"),p(' title: "ECC签名中随机数不随机的危害" date: 2020-09-03T08:57:03+08:00 draft: false markup: mmark')],-1),i=e('',1),r=t("p",null,"如果使用了相同的随机数,为什么会泄露私钥.",-1),m=t("h3",{id:"椭圆曲线签名算法原理"},[t("a",{class:"header-anchor",href:"#椭圆曲线签名算法原理","aria-hidden":"true"},"#"),p(" 椭圆曲线签名算法原理")],-1),k=t("p",null,[p("假设私钥为k,那么公钥"),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mi",null,"K"),t("mo",null,"="),t("mi",null,"k"),t("mi",null,"G")]),t("annotation",{encoding:"application/x-tex"},"K=kG")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.68333em","vertical-align":"0em"}}),t("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"K"),t("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}}),t("span",{class:"mrel"},"="),t("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.69444em","vertical-align":"0em"}}),t("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),t("span",{class:"mord mathnormal"},"G")])])]),p(",其中G为G点(就是椭圆曲线的公共参数,可以忽略). 签名的过程如下:")],-1),b=t("ol",null,[t("li",null,[p("选择随机数n,计算"),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mi",null,"P"),t("mo",null,"="),t("mi",null,"n"),t("mi",null,"G")]),t("annotation",{encoding:"application/x-tex"},"P=nG")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.68333em","vertical-align":"0em"}}),t("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),t("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}}),t("span",{class:"mrel"},"="),t("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.68333em","vertical-align":"0em"}}),t("span",{class:"mord mathnormal"},"n"),t("span",{class:"mord mathnormal"},"G")])])]),p(",P实际上就是曲线上的一个点")]),t("li",null,[p("计算"),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mi",null,"s"),t("mo",null,"="),t("mfrac",null,[t("mrow",null,[t("mi",null,"m"),t("mo",null,"+"),t("mi",null,"k"),t("mi",null,"r")]),t("mi",null,"n")])]),t("annotation",{encoding:"application/x-tex"},"s=\\frac {m+kr} n")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.43056em","vertical-align":"0em"}}),t("span",{class:"mord mathnormal"},"s"),t("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}}),t("span",{class:"mrel"},"="),t("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"1.2251079999999999em","vertical-align":"-0.345em"}}),t("span",{class:"mord"},[t("span",{class:"mopen nulldelimiter"}),t("span",{class:"mfrac"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.8801079999999999em"}},[t("span",{style:{top:"-2.6550000000000002em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mtight"},[t("span",{class:"mord mathnormal mtight"},"n")])])]),t("span",{style:{top:"-3.23em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),t("span",{style:{top:"-3.394em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mtight"},[t("span",{class:"mord mathnormal mtight"},"m"),t("span",{class:"mbin mtight"},"+"),t("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03148em"}},"k"),t("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.345em"}},[t("span")])])])]),t("span",{class:"mclose nulldelimiter"})])])])]),p(",其中m就是公共信息,比如是一个以太坊交易的Hash值. 这里的r是P的x坐标.")]),t("li",null,"将消息m和签名{r,s}发送给接收方 接收方在事先知道公钥K的情况下,就很容易验证签名和m是否是对应关系. 验证签名的过程: 计算$\\frac {mG} s + \\frac {rK} s $,然后与nG比较,如果相等说明是对应关系.其中r是nG这个点的x坐标")],-1),h=t("p",null,"为什么这样可以呢,来看一下简单的推导过程:",-1),g=p(" \\begin{eqnarray} & \\frac {mG} s + \\frac {rK} s \\\\ =& \\frac {mG} s + \\frac {r(kG)} s \\\\ =& \\frac {(m+rk)G} s \\\\ =& \\frac {n(m+rk)G} {m+kr} \\\\ =& nG \\end{eqnarray} "),d=t("p",null,[t("strong",null,[p("注意: "),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mi",null,"s"),t("mo",null,"="),t("mfrac",null,[t("mrow",null,[t("mi",null,"m"),t("mo",null,"+"),t("mi",null,"k"),t("mi",null,"r")]),t("mi",null,"n")])]),t("annotation",{encoding:"application/x-tex"},"s=\\frac {m+kr} n")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.43056em","vertical-align":"0em"}}),t("span",{class:"mord mathnormal"},"s"),t("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}}),t("span",{class:"mrel"},"="),t("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"1.2251079999999999em","vertical-align":"-0.345em"}}),t("span",{class:"mord"},[t("span",{class:"mopen nulldelimiter"}),t("span",{class:"mfrac"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.8801079999999999em"}},[t("span",{style:{top:"-2.6550000000000002em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mtight"},[t("span",{class:"mord mathnormal mtight"},"n")])])]),t("span",{style:{top:"-3.23em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),t("span",{style:{top:"-3.394em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mtight"},[t("span",{class:"mord mathnormal mtight"},"m"),t("span",{class:"mbin mtight"},"+"),t("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03148em"}},"k"),t("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.345em"}},[t("span")])])])]),t("span",{class:"mclose nulldelimiter"})])])])])])],-1),y=e('',8),f=t("p",null,[t("span",{class:"katex-display"},[t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("semantics",null,[t("mrow",null,[t("msub",null,[t("mi",null,"s"),t("mn",null,"1")]),t("mo",null,"="),t("mfrac",null,[t("mrow",null,[t("msub",null,[t("mi",null,"m"),t("mn",null,"1")]),t("mo",null,"+"),t("mi",null,"k"),t("mi",null,"r")]),t("mi",null,"n")]),t("mspace",{linebreak:"newline"}),t("msub",null,[t("mi",null,"s"),t("mn",null,"2")]),t("mo",null,"="),t("mfrac",null,[t("mrow",null,[t("msub",null,[t("mi",null,"m"),t("mn",null,"2")]),t("mo",null,"+"),t("mi",null,"k"),t("mi",null,"r")]),t("mi",null,"n")]),t("mspace",{linebreak:"newline"}),t("msub",null,[t("mi",null,"s"),t("mn",null,"1")]),t("mo",null,"−"),t("msub",null,[t("mi",null,"s"),t("mn",null,"2")]),t("mo",null,"="),t("mfrac",null,[t("mrow",null,[t("msub",null,[t("mi",null,"m"),t("mn",null,"1")]),t("mo",null,"−"),t("msub",null,[t("mi",null,"m"),t("mn",null,"2")])]),t("mi",null,"n")]),t("mspace",{linebreak:"newline"}),t("mi",null,"n"),t("mo",null,"="),t("mfrac",null,[t("mrow",null,[t("msub",null,[t("mi",null,"m"),t("mn",null,"1")]),t("mo",null,"−"),t("msub",null,[t("mi",null,"m"),t("mn",null,"2")])]),t("mrow",null,[t("msub",null,[t("mi",null,"s"),t("mn",null,"1")]),t("mo",null,"−"),t("msub",null,[t("mi",null,"s"),t("mn",null,"2")])])])]),t("annotation",{encoding:"application/x-tex"},"s_1=\\frac {m_1+kr} n \\\\ s_2=\\frac {m_2+kr} n \\\\ s_1-s_2= \\frac {m_1-m_2} n \\\\ n=\\frac {m_1-m_2} {s_1-s_2} ")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.58056em","vertical-align":"-0.15em"}}),t("span",{class:"mord"},[t("span",{class:"mord mathnormal"},"s"),t("span",{class:"msupsub"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.30110799999999993em"}},[t("span",{style:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[t("span",{class:"pstrut",style:{height:"2.7em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mtight"},"1")])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.15em"}},[t("span")])])])])]),t("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}}),t("span",{class:"mrel"},"="),t("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"2.05744em","vertical-align":"-0.686em"}}),t("span",{class:"mord"},[t("span",{class:"mopen nulldelimiter"}),t("span",{class:"mfrac"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"1.37144em"}},[t("span",{style:{top:"-2.314em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"mord"},[t("span",{class:"mord mathnormal"},"n")])]),t("span",{style:{top:"-3.23em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),t("span",{style:{top:"-3.677em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"mord"},[t("span",{class:"mord"},[t("span",{class:"mord mathnormal"},"m"),t("span",{class:"msupsub"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.30110799999999993em"}},[t("span",{style:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[t("span",{class:"pstrut",style:{height:"2.7em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mtight"},"1")])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.15em"}},[t("span")])])])])]),t("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),t("span",{class:"mbin"},"+"),t("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),t("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),t("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r")])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.686em"}},[t("span")])])])]),t("span",{class:"mclose nulldelimiter"})])]),t("span",{class:"mspace newline"}),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.58056em","vertical-align":"-0.15em"}}),t("span",{class:"mord"},[t("span",{class:"mord mathnormal"},"s"),t("span",{class:"msupsub"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.30110799999999993em"}},[t("span",{style:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[t("span",{class:"pstrut",style:{height:"2.7em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mtight"},"2")])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.15em"}},[t("span")])])])])]),t("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}}),t("span",{class:"mrel"},"="),t("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"2.05744em","vertical-align":"-0.686em"}}),t("span",{class:"mord"},[t("span",{class:"mopen nulldelimiter"}),t("span",{class:"mfrac"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"1.37144em"}},[t("span",{style:{top:"-2.314em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"mord"},[t("span",{class:"mord mathnormal"},"n")])]),t("span",{style:{top:"-3.23em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),t("span",{style:{top:"-3.677em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"mord"},[t("span",{class:"mord"},[t("span",{class:"mord mathnormal"},"m"),t("span",{class:"msupsub"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.30110799999999993em"}},[t("span",{style:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[t("span",{class:"pstrut",style:{height:"2.7em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mtight"},"2")])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.15em"}},[t("span")])])])])]),t("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),t("span",{class:"mbin"},"+"),t("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),t("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),t("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r")])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.686em"}},[t("span")])])])]),t("span",{class:"mclose nulldelimiter"})])]),t("span",{class:"mspace newline"}),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.73333em","vertical-align":"-0.15em"}}),t("span",{class:"mord"},[t("span",{class:"mord mathnormal"},"s"),t("span",{class:"msupsub"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.30110799999999993em"}},[t("span",{style:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[t("span",{class:"pstrut",style:{height:"2.7em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mtight"},"1")])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.15em"}},[t("span")])])])])]),t("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),t("span",{class:"mbin"},"−"),t("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.58056em","vertical-align":"-0.15em"}}),t("span",{class:"mord"},[t("span",{class:"mord mathnormal"},"s"),t("span",{class:"msupsub"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.30110799999999993em"}},[t("span",{style:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[t("span",{class:"pstrut",style:{height:"2.7em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mtight"},"2")])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.15em"}},[t("span")])])])])]),t("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}}),t("span",{class:"mrel"},"="),t("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"1.9463300000000001em","vertical-align":"-0.686em"}}),t("span",{class:"mord"},[t("span",{class:"mopen nulldelimiter"}),t("span",{class:"mfrac"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"1.2603300000000002em"}},[t("span",{style:{top:"-2.314em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"mord"},[t("span",{class:"mord mathnormal"},"n")])]),t("span",{style:{top:"-3.23em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),t("span",{style:{top:"-3.677em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"mord"},[t("span",{class:"mord"},[t("span",{class:"mord mathnormal"},"m"),t("span",{class:"msupsub"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.30110799999999993em"}},[t("span",{style:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[t("span",{class:"pstrut",style:{height:"2.7em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mtight"},"1")])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.15em"}},[t("span")])])])])]),t("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),t("span",{class:"mbin"},"−"),t("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),t("span",{class:"mord"},[t("span",{class:"mord mathnormal"},"m"),t("span",{class:"msupsub"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.30110799999999993em"}},[t("span",{style:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[t("span",{class:"pstrut",style:{height:"2.7em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mtight"},"2")])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.15em"}},[t("span")])])])])])])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.686em"}},[t("span")])])])]),t("span",{class:"mclose nulldelimiter"})])]),t("span",{class:"mspace newline"}),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.43056em","vertical-align":"0em"}}),t("span",{class:"mord mathnormal"},"n"),t("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}}),t("span",{class:"mrel"},"="),t("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"2.09633em","vertical-align":"-0.8360000000000001em"}}),t("span",{class:"mord"},[t("span",{class:"mopen nulldelimiter"}),t("span",{class:"mfrac"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"1.2603300000000002em"}},[t("span",{style:{top:"-2.3139999999999996em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"mord"},[t("span",{class:"mord"},[t("span",{class:"mord mathnormal"},"s"),t("span",{class:"msupsub"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.30110799999999993em"}},[t("span",{style:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[t("span",{class:"pstrut",style:{height:"2.7em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mtight"},"1")])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.15em"}},[t("span")])])])])]),t("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),t("span",{class:"mbin"},"−"),t("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),t("span",{class:"mord"},[t("span",{class:"mord mathnormal"},"s"),t("span",{class:"msupsub"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.30110799999999993em"}},[t("span",{style:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[t("span",{class:"pstrut",style:{height:"2.7em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mtight"},"2")])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.15em"}},[t("span")])])])])])])]),t("span",{style:{top:"-3.23em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),t("span",{style:{top:"-3.677em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"mord"},[t("span",{class:"mord"},[t("span",{class:"mord mathnormal"},"m"),t("span",{class:"msupsub"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.30110799999999993em"}},[t("span",{style:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[t("span",{class:"pstrut",style:{height:"2.7em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mtight"},"1")])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.15em"}},[t("span")])])])])]),t("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),t("span",{class:"mbin"},"−"),t("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),t("span",{class:"mord"},[t("span",{class:"mord mathnormal"},"m"),t("span",{class:"msupsub"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.30110799999999993em"}},[t("span",{style:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[t("span",{class:"pstrut",style:{height:"2.7em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mtight"},"2")])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.15em"}},[t("span")])])])])])])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.8360000000000001em"}},[t("span")])])])]),t("span",{class:"mclose nulldelimiter"})])])])])])],-1),v=t("p",null,"有了n以后,那么来看一下k的计算过程:",-1),w=t("p",null,[t("span",{class:"katex-display"},[t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("semantics",null,[t("mrow",null,[t("mi",null,"s"),t("mo",null,"="),t("mfrac",null,[t("mrow",null,[t("mi",null,"m"),t("mo",null,"+"),t("mi",null,"k"),t("mi",null,"r")]),t("mi",null,"n")]),t("mspace",{linebreak:"newline"}),t("mi",null,"k"),t("mo",null,"="),t("mfrac",null,[t("mrow",null,[t("mi",null,"s"),t("mi",null,"n"),t("mo",null,"−"),t("mi",null,"m")]),t("mi",null,"r")])]),t("annotation",{encoding:"application/x-tex"},"s=\\frac {m+kr} n \\\\ k=\\frac {sn-m} r ")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.43056em","vertical-align":"0em"}}),t("span",{class:"mord mathnormal"},"s"),t("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}}),t("span",{class:"mrel"},"="),t("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"2.05744em","vertical-align":"-0.686em"}}),t("span",{class:"mord"},[t("span",{class:"mopen nulldelimiter"}),t("span",{class:"mfrac"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"1.37144em"}},[t("span",{style:{top:"-2.314em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"mord"},[t("span",{class:"mord mathnormal"},"n")])]),t("span",{style:{top:"-3.23em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),t("span",{style:{top:"-3.677em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"mord"},[t("span",{class:"mord mathnormal"},"m"),t("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),t("span",{class:"mbin"},"+"),t("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),t("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),t("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r")])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.686em"}},[t("span")])])])]),t("span",{class:"mclose nulldelimiter"})])]),t("span",{class:"mspace newline"}),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.69444em","vertical-align":"0em"}}),t("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),t("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}}),t("span",{class:"mrel"},"="),t("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"1.9463300000000001em","vertical-align":"-0.686em"}}),t("span",{class:"mord"},[t("span",{class:"mopen nulldelimiter"}),t("span",{class:"mfrac"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"1.2603300000000002em"}},[t("span",{style:{top:"-2.314em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"mord"},[t("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r")])]),t("span",{style:{top:"-3.23em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),t("span",{style:{top:"-3.677em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"mord"},[t("span",{class:"mord mathnormal"},"s"),t("span",{class:"mord mathnormal"},"n"),t("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),t("span",{class:"mbin"},"−"),t("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),t("span",{class:"mord mathnormal"},"m")])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.686em"}},[t("span")])])])]),t("span",{class:"mclose nulldelimiter"})])])])])])],-1),x=e('',3);c.render=function(t,p,e,l,c,E){return s(),n("div",null,[o,u,a(' @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} '),a(" code_chunk_output "),i,a(" /code_chunk_output "),r,m,k,b,h,g,d,y,f,v,w,x])};export{l as __pageData,c as default};