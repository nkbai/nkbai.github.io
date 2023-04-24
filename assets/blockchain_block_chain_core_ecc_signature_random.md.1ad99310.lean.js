import{_ as l,c as p,o,N as a,x as s,a as n}from"./chunks/framework.3a9190c5.js";const x=JSON.parse('{"title":"ECC签名中随机数不随机的危害","description":"","frontmatter":{"title":"ECC签名中随机数不随机的危害","date":"2020-09-03T00:57:03.000Z","draft":false,"markup":"mmark"},"headers":[],"relativePath":"blockchain/block_chain_core/ecc_signature_random.md"}'),e={name:"blockchain/block_chain_core/ecc_signature_random.md"},t=a("",3),r=s("p",null,[n("假设私钥为k,那么公钥"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("mi",null,"K"),s("mo",null,"="),s("mi",null,"k"),s("mi",null,"G")]),s("annotation",{encoding:"application/x-tex"},"K=kG")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0.69444em"}}),s("span",{class:"strut bottom",style:{height:"0.69444em","vertical-align":"0em"}}),s("span",{class:"base textstyle uncramped"},[s("span",{class:"mord mathit",style:{"margin-right":"0.07153em"}},"K"),s("span",{class:"mrel"},"="),s("span",{class:"mord mathit",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"mord mathit"},"G")])])]),n(",其中G为G点(就是椭圆曲线的公共参数,可以忽略). 签名的过程如下:")],-1),c=s("ol",null,[s("li",null,[n("选择随机数n,计算"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("mi",null,"P"),s("mo",null,"="),s("mi",null,"n"),s("mi",null,"G")]),s("annotation",{encoding:"application/x-tex"},"P=nG")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0.68333em"}}),s("span",{class:"strut bottom",style:{height:"0.68333em","vertical-align":"0em"}}),s("span",{class:"base textstyle uncramped"},[s("span",{class:"mord mathit",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mrel"},"="),s("span",{class:"mord mathit"},"n"),s("span",{class:"mord mathit"},"G")])])]),n(",P实际上就是曲线上的一个点")]),s("li",null,[n("计算"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("mi",null,"s"),s("mo",null,"="),s("mfrac",null,[s("mrow",null,[s("mi",null,"m"),s("mo",null,"+"),s("mi",null,"k"),s("mi",null,"r")]),s("mi",null,"n")])]),s("annotation",{encoding:"application/x-tex"},"s=\\frac {m+kr} n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0.8801079999999999em"}}),s("span",{class:"strut bottom",style:{height:"1.2251079999999999em","vertical-align":"-0.345em"}}),s("span",{class:"base textstyle uncramped"},[s("span",{class:"mord mathit"},"s"),s("span",{class:"mrel"},"="),s("span",{class:"mord reset-textstyle textstyle uncramped"},[s("span",{class:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist"},[s("span",{style:{top:"0.345em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle cramped"},[s("span",{class:"mord mathit"},"n")])]),s("span",{style:{top:"-0.22999999999999998em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle textstyle uncramped frac-line"})]),s("span",{style:{top:"-0.394em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle uncramped"},[s("span",{class:"mord scriptstyle uncramped"},[s("span",{class:"mord mathit"},"m"),s("span",{class:"mbin"},"+"),s("span",{class:"mord mathit",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"mord mathit",style:{"margin-right":"0.02778em"}},"r")])])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),n("​")])])]),s("span",{class:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})])])])]),n(",其中m就是公共信息,比如是一个以太坊交易的Hash值. 这里的r是P的x坐标.")]),s("li",null,"将消息m和签名{r,s}发送给接收方 接收方在事先知道公钥K的情况下,就很容易验证签名和m是否是对应关系. 验证签名的过程: 计算$\\frac {mG} s + \\frac {rK} s $,然后与nG比较,如果相等说明是对应关系.其中r是nG这个点的x坐标")],-1),D=s("p",null,"为什么这样可以呢,来看一下简单的推导过程:",-1),y=n(" \\begin{eqnarray} & \\frac {mG} s + \\frac {rK} s \\\\ =& \\frac {mG} s + \\frac {r(kG)} s \\\\ =& \\frac {(m+rk)G} s \\\\ =& \\frac {n(m+rk)G} {m+kr} \\\\ =& nG \\end{eqnarray} "),F=s("p",null,[s("strong",null,[n("注意: "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("mi",null,"s"),s("mo",null,"="),s("mfrac",null,[s("mrow",null,[s("mi",null,"m"),s("mo",null,"+"),s("mi",null,"k"),s("mi",null,"r")]),s("mi",null,"n")])]),s("annotation",{encoding:"application/x-tex"},"s=\\frac {m+kr} n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0.8801079999999999em"}}),s("span",{class:"strut bottom",style:{height:"1.2251079999999999em","vertical-align":"-0.345em"}}),s("span",{class:"base textstyle uncramped"},[s("span",{class:"mord mathit"},"s"),s("span",{class:"mrel"},"="),s("span",{class:"mord reset-textstyle textstyle uncramped"},[s("span",{class:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist"},[s("span",{style:{top:"0.345em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle cramped"},[s("span",{class:"mord mathit"},"n")])]),s("span",{style:{top:"-0.22999999999999998em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle textstyle uncramped frac-line"})]),s("span",{style:{top:"-0.394em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle uncramped"},[s("span",{class:"mord scriptstyle uncramped"},[s("span",{class:"mord mathit"},"m"),s("span",{class:"mbin"},"+"),s("span",{class:"mord mathit",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"mord mathit",style:{"margin-right":"0.02778em"}},"r")])])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),n("​")])])]),s("span",{class:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})])])])])])],-1),A=a("",14),C=[t,r,c,D,y,F,A];function i(b,u,m,d,f,h){return o(),p("div",null,C)}const k=l(e,[["render",i]]);export{x as __pageData,k as default};