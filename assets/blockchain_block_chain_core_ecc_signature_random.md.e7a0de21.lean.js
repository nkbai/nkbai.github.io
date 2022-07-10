import{_ as t,c as p,o as e,a,d as s,e as n}from"./app.eccc2abf.js";const z='{"title":"ECC\u7B7E\u540D\u4E2D\u968F\u673A\u6570\u4E0D\u968F\u673A\u7684\u5371\u5BB3","description":"","frontmatter":{"title":"ECC\u7B7E\u540D\u4E2D\u968F\u673A\u6570\u4E0D\u968F\u673A\u7684\u5371\u5BB3","date":"2020-09-03T00:57:03.000Z","draft":false,"markup":"mmark"},"headers":[{"level":3,"title":"\u692D\u5706\u66F2\u7EBF\u7B7E\u540D\u7B97\u6CD5\u539F\u7406","slug":"\u692D\u5706\u66F2\u7EBF\u7B7E\u540D\u7B97\u6CD5\u539F\u7406"},{"level":3,"title":"go\u5B9E\u73B0\u7684\u7B7E\u540D","slug":"go\u5B9E\u73B0\u7684\u7B7E\u540D"},{"level":3,"title":"go\u5B9E\u73B0\u7684\u7B7E\u540D\u9A8C\u8BC1\u8FC7\u7A0B","slug":"go\u5B9E\u73B0\u7684\u7B7E\u540D\u9A8C\u8BC1\u8FC7\u7A0B"},{"level":3,"title":"\u4F7F\u7528\u4E86\u76F8\u540C\u7684\u968F\u673A\u6570n,\u4E3A\u4EC0\u4E48\u80FD\u63A8\u51FA\u79C1\u94A5","slug":"\u4F7F\u7528\u4E86\u76F8\u540C\u7684\u968F\u673A\u6570n-\u4E3A\u4EC0\u4E48\u80FD\u63A8\u51FA\u79C1\u94A5"},{"level":3,"title":"\u9A8C\u8BC1","slug":"\u9A8C\u8BC1"}],"relativePath":"blockchain/block_chain_core/ecc_signature_random.md"}',l={},c=a("",3),o=s("p",null,[n("\u5047\u8BBE\u79C1\u94A5\u4E3Ak,\u90A3\u4E48\u516C\u94A5"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"K"),s("mo",null,"="),s("mi",null,"k"),s("mi",null,"G")]),s("annotation",{encoding:"application/x-tex"},"K=kG")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.68333em","vertical-align":"0em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"K"),s("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.69444em","vertical-align":"0em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"mord mathnormal"},"G")])])]),n(",\u5176\u4E2DG\u4E3AG\u70B9(\u5C31\u662F\u692D\u5706\u66F2\u7EBF\u7684\u516C\u5171\u53C2\u6570,\u53EF\u4EE5\u5FFD\u7565). \u7B7E\u540D\u7684\u8FC7\u7A0B\u5982\u4E0B:")],-1),u=s("ol",null,[s("li",null,[n("\u9009\u62E9\u968F\u673A\u6570n,\u8BA1\u7B97"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"P"),s("mo",null,"="),s("mi",null,"n"),s("mi",null,"G")]),s("annotation",{encoding:"application/x-tex"},"P=nG")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.68333em","vertical-align":"0em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.68333em","vertical-align":"0em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mord mathnormal"},"G")])])]),n(",P\u5B9E\u9645\u4E0A\u5C31\u662F\u66F2\u7EBF\u4E0A\u7684\u4E00\u4E2A\u70B9")]),s("li",null,[n("\u8BA1\u7B97"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"s"),s("mo",null,"="),s("mfrac",null,[s("mrow",null,[s("mi",null,"m"),s("mo",null,"+"),s("mi",null,"k"),s("mi",null,"r")]),s("mi",null,"n")])]),s("annotation",{encoding:"application/x-tex"},"s=\\frac {m+kr} n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.43056em","vertical-align":"0em"}}),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.2251079999999999em","vertical-align":"-0.345em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8801079999999999em"}},[s("span",{style:{top:"-2.6550000000000002em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"m"),s("span",{class:"mbin mtight"},"+"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])]),n(",\u5176\u4E2Dm\u5C31\u662F\u516C\u5171\u4FE1\u606F,\u6BD4\u5982\u662F\u4E00\u4E2A\u4EE5\u592A\u574A\u4EA4\u6613\u7684Hash\u503C. \u8FD9\u91CC\u7684r\u662FP\u7684x\u5750\u6807.")]),s("li",null,"\u5C06\u6D88\u606Fm\u548C\u7B7E\u540D{r,s}\u53D1\u9001\u7ED9\u63A5\u6536\u65B9 \u63A5\u6536\u65B9\u5728\u4E8B\u5148\u77E5\u9053\u516C\u94A5K\u7684\u60C5\u51B5\u4E0B,\u5C31\u5F88\u5BB9\u6613\u9A8C\u8BC1\u7B7E\u540D\u548Cm\u662F\u5426\u662F\u5BF9\u5E94\u5173\u7CFB. \u9A8C\u8BC1\u7B7E\u540D\u7684\u8FC7\u7A0B: \u8BA1\u7B97$\\frac {mG} s + \\frac {rK} s $,\u7136\u540E\u4E0EnG\u6BD4\u8F83,\u5982\u679C\u76F8\u7B49\u8BF4\u660E\u662F\u5BF9\u5E94\u5173\u7CFB.\u5176\u4E2Dr\u662FnG\u8FD9\u4E2A\u70B9\u7684x\u5750\u6807")],-1),i=s("p",null,"\u4E3A\u4EC0\u4E48\u8FD9\u6837\u53EF\u4EE5\u5462,\u6765\u770B\u4E00\u4E0B\u7B80\u5355\u7684\u63A8\u5BFC\u8FC7\u7A0B:",-1),r=n(" \\begin{eqnarray} & \\frac {mG} s + \\frac {rK} s \\\\ =& \\frac {mG} s + \\frac {r(kG)} s \\\\ =& \\frac {(m+rk)G} s \\\\ =& \\frac {n(m+rk)G} {m+kr} \\\\ =& nG \\end{eqnarray} "),m=s("p",null,[s("strong",null,[n("\u6CE8\u610F: "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"s"),s("mo",null,"="),s("mfrac",null,[s("mrow",null,[s("mi",null,"m"),s("mo",null,"+"),s("mi",null,"k"),s("mi",null,"r")]),s("mi",null,"n")])]),s("annotation",{encoding:"application/x-tex"},"s=\\frac {m+kr} n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.43056em","vertical-align":"0em"}}),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.2251079999999999em","vertical-align":"-0.345em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8801079999999999em"}},[s("span",{style:{top:"-2.6550000000000002em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"m"),s("span",{class:"mbin mtight"},"+"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])])],-1),k=a("",8),b=s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"s"),s("mn",null,"1")]),s("mo",null,"="),s("mfrac",null,[s("mrow",null,[s("msub",null,[s("mi",null,"m"),s("mn",null,"1")]),s("mo",null,"+"),s("mi",null,"k"),s("mi",null,"r")]),s("mi",null,"n")]),s("mspace",{linebreak:"newline"}),s("msub",null,[s("mi",null,"s"),s("mn",null,"2")]),s("mo",null,"="),s("mfrac",null,[s("mrow",null,[s("msub",null,[s("mi",null,"m"),s("mn",null,"2")]),s("mo",null,"+"),s("mi",null,"k"),s("mi",null,"r")]),s("mi",null,"n")]),s("mspace",{linebreak:"newline"}),s("msub",null,[s("mi",null,"s"),s("mn",null,"1")]),s("mo",null,"\u2212"),s("msub",null,[s("mi",null,"s"),s("mn",null,"2")]),s("mo",null,"="),s("mfrac",null,[s("mrow",null,[s("msub",null,[s("mi",null,"m"),s("mn",null,"1")]),s("mo",null,"\u2212"),s("msub",null,[s("mi",null,"m"),s("mn",null,"2")])]),s("mi",null,"n")]),s("mspace",{linebreak:"newline"}),s("mi",null,"n"),s("mo",null,"="),s("mfrac",null,[s("mrow",null,[s("msub",null,[s("mi",null,"m"),s("mn",null,"1")]),s("mo",null,"\u2212"),s("msub",null,[s("mi",null,"m"),s("mn",null,"2")])]),s("mrow",null,[s("msub",null,[s("mi",null,"s"),s("mn",null,"1")]),s("mo",null,"\u2212"),s("msub",null,[s("mi",null,"s"),s("mn",null,"2")])])])]),s("annotation",{encoding:"application/x-tex"},"s_1=\\frac {m_1+kr} n \\\\ s_2=\\frac {m_2+kr} n \\\\ s_1-s_2= \\frac {m_1-m_2} n \\\\ n=\\frac {m_1-m_2} {s_1-s_2} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.58056em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"s"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.30110799999999993em"}},[s("span",{style:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.05744em","vertical-align":"-0.686em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.37144em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"m"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.30110799999999993em"}},[s("span",{style:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r")])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])]),s("span",{class:"mspace newline"}),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.58056em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"s"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.30110799999999993em"}},[s("span",{style:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.05744em","vertical-align":"-0.686em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.37144em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"m"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.30110799999999993em"}},[s("span",{style:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r")])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])]),s("span",{class:"mspace newline"}),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.73333em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"s"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.30110799999999993em"}},[s("span",{style:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),s("span",{class:"mbin"},"\u2212"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.58056em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"s"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.30110799999999993em"}},[s("span",{style:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.9463300000000001em","vertical-align":"-0.686em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.2603300000000002em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"m"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.30110799999999993em"}},[s("span",{style:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),s("span",{class:"mbin"},"\u2212"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"m"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.30110799999999993em"}},[s("span",{style:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])]),s("span",{class:"mspace newline"}),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.43056em","vertical-align":"0em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.09633em","vertical-align":"-0.8360000000000001em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.2603300000000002em"}},[s("span",{style:{top:"-2.3139999999999996em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"s"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.30110799999999993em"}},[s("span",{style:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),s("span",{class:"mbin"},"\u2212"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"s"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.30110799999999993em"}},[s("span",{style:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"m"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.30110799999999993em"}},[s("span",{style:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),s("span",{class:"mbin"},"\u2212"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"m"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.30110799999999993em"}},[s("span",{style:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8360000000000001em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])])],-1),h=s("p",null,"\u6709\u4E86n\u4EE5\u540E,\u90A3\u4E48\u6765\u770B\u4E00\u4E0Bk\u7684\u8BA1\u7B97\u8FC7\u7A0B:",-1),g=s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"s"),s("mo",null,"="),s("mfrac",null,[s("mrow",null,[s("mi",null,"m"),s("mo",null,"+"),s("mi",null,"k"),s("mi",null,"r")]),s("mi",null,"n")]),s("mspace",{linebreak:"newline"}),s("mi",null,"k"),s("mo",null,"="),s("mfrac",null,[s("mrow",null,[s("mi",null,"s"),s("mi",null,"n"),s("mo",null,"\u2212"),s("mi",null,"m")]),s("mi",null,"r")])]),s("annotation",{encoding:"application/x-tex"},"s=\\frac {m+kr} n \\\\ k=\\frac {sn-m} r ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.43056em","vertical-align":"0em"}}),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.05744em","vertical-align":"-0.686em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.37144em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"m"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r")])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])]),s("span",{class:"mspace newline"}),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.69444em","vertical-align":"0em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2777777777777778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.9463300000000001em","vertical-align":"-0.686em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.2603300000000002em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),s("span",{class:"mbin"},"\u2212"),s("span",{class:"mspace",style:{"margin-right":"0.2222222222222222em"}}),s("span",{class:"mord mathnormal"},"m")])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])])],-1),d=a("",3),y=[c,o,u,i,r,m,k,b,h,g,d];function f(v,w,_,x,E,S){return e(),p("div",null,y)}var A=t(l,[["render",f]]);export{z as __pageData,A as default};
