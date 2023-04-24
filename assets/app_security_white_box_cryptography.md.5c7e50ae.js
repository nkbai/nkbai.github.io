import{_ as t,c as s,o as i,N as e,x as a,a as l}from"./chunks/framework.3a9190c5.js";const y=JSON.parse('{"title":"白盒密码学简介","description":"","frontmatter":{"title":"白盒密码学简介","date":"2022-07-28T00:57:03.000Z","draft":false,"tags":["security","app"],"categories":["技术相关"]},"headers":[],"relativePath":"app_security/white_box_cryptography.md"}'),n={name:"app_security/white_box_cryptography.md"},r=e('<p>首先声明,这是我个人阅读上海交大林婷婷的博士论文的笔记.</p><h2 id="白盒密码学研究的是什么" tabindex="-1">白盒密码学研究的是什么 <a class="header-anchor" href="#白盒密码学研究的是什么" aria-label="Permalink to &quot;白盒密码学研究的是什么&quot;">​</a></h2><p>现代密码学所描述的密码系统的模型,有一个基本的假设,就是密码算法程序的执行环境是可信的,无论是对称的AES,DES,还是非对称的RSA,ECC. 而攻击者只能在通信的信道上进行观测,干扰,修改,重发等. 这种假设可以称之为黑盒模型. 而白盒密码学则假定密码算法执行的环境是不可信的,<strong>攻击者可以完全掌控整个密码算法的运行环境,不仅可以对算法进行静态分析,还可以调试,修改算法的每一条指令.</strong></p><h3 id="黑盒攻击" tabindex="-1">黑盒攻击 <a class="header-anchor" href="#黑盒攻击" aria-label="Permalink to &quot;黑盒攻击&quot;">​</a></h3><p><img alt="image-20220728103724334" data-src="img/black_box_attack.png" loading="lazy" class="lazy"></p><h3 id="灰盒攻击" tabindex="-1">灰盒攻击 <a class="header-anchor" href="#灰盒攻击" aria-label="Permalink to &quot;灰盒攻击&quot;">​</a></h3><p><img alt="image-20220728103800047" data-src="img/grey_box_attack.png" loading="lazy" class="lazy"></p><h3 id="白盒攻击" tabindex="-1">白盒攻击 <a class="header-anchor" href="#白盒攻击" aria-label="Permalink to &quot;白盒攻击&quot;">​</a></h3><p><img alt="image-20220728103821349" data-src="img/white_box_attack.png" loading="lazy" class="lazy"></p><h2 id="白盒密码学的应用场景" tabindex="-1">白盒密码学的应用场景 <a class="header-anchor" href="#白盒密码学的应用场景" aria-label="Permalink to &quot;白盒密码学的应用场景&quot;">​</a></h2><ul><li><ol><li><p>云计算</p><p>大家对于公有云提供商的环境是否足够信任呢,是否担心你运行在上面的程序,存储在上面的数据会被云服务商监控,盗窃,修改? 如果可以证明我的算法,就算是云服务商可以监控,可以修改也不能获取到我的机密信息,那么云服务商岂不是高兴坏了.</p></li><li><p>无线传感器网络</p><p>比如在军事领域应用的无线传感器网络,节点很容易落入敌方之手,被反编译,被调试,被修改,那么怎么能保证机密信息不被窃取呢? 怎么阻止敌方分析后,伪装成合法节点干扰传感器网络的运行?</p></li></ol></li></ul><h2 id="白盒密码学现在有可行的方案么" tabindex="-1">白盒密码学现在有可行的方案么? <a class="header-anchor" href="#白盒密码学现在有可行的方案么" aria-label="Permalink to &quot;白盒密码学现在有可行的方案么?&quot;">​</a></h2><p>简单来说,没有. 因为如果有了以后,现在大家正在研究的难题,都将不再是问题:</p><ul><li>软件防篡改</li><li>同态加密</li><li>安全多方计算MPC</li><li>零知识证明</li></ul><h2 id="白盒密码学的现状" tabindex="-1">白盒密码学的现状 <a class="header-anchor" href="#白盒密码学的现状" aria-label="Permalink to &quot;白盒密码学的现状&quot;">​</a></h2>',15),o=a("ol",null,[a("li",null,"Saxena 等人通过“白盒性”这个概念提出了一个白盒密码 的基本模型。在这个模型下，他们证明了对于一个程序，不存在能够满足所有安全概念的混淆器(否定结论)。从另一方面，他们证明了确实存在能够满足某些 安全概念的混淆器(肯定结论)"),a("li",null,[l("2009年肖雅莹等人提出了SMS4算法的白盒实现,但是被作者以低于"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",null,[a("semantics",null,[a("mrow",null,[a("mi",null,"O"),a("mo",null,"("),a("msup",null,[a("mn",null,"2"),a("mrow",null,[a("mn",null,"4"),a("mn",null,"7")])]),a("mo",null,")")]),a("annotation",{encoding:"application/x-tex"},"O(2^{47})")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"strut",style:{height:"0.8141079999999999em"}}),a("span",{class:"strut bottom",style:{height:"1.064108em","vertical-align":"-0.25em"}}),a("span",{class:"base textstyle uncramped"},[a("span",{class:"mord mathit",style:{"margin-right":"0.02778em"}},"O"),a("span",{class:"mopen"},"("),a("span",{class:"mord"},[a("span",{class:"mord mathrm"},"2"),a("span",{class:"vlist"},[a("span",{style:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{class:"fontsize-ensurer reset-size5 size5"},[a("span",{style:{"font-size":"0em"}},"​")]),a("span",{class:"reset-textstyle scriptstyle uncramped"},[a("span",{class:"mord scriptstyle uncramped"},[a("span",{class:"mord mathrm"},"4"),a("span",{class:"mord mathrm"},"7")])])]),a("span",{class:"baseline-fix"},[a("span",{class:"fontsize-ensurer reset-size5 size5"},[a("span",{style:{"font-size":"0em"}},"​")]),l("​")])])]),a("span",{class:"mclose"},")")])])]),l("复杂度,找出了秘钥")]),a("li",null,"白盒密码算法需要额外的存储空间来存储查找表,从几百KB到20GB不等.")],-1),c=e('<h2 id="密码学的其他知识" tabindex="-1">密码学的其他知识 <a class="header-anchor" href="#密码学的其他知识" aria-label="Permalink to &quot;密码学的其他知识&quot;">​</a></h2><h3 id="cia三原则" tabindex="-1">CIA三原则 <a class="header-anchor" href="#cia三原则" aria-label="Permalink to &quot;CIA三原则&quot;">​</a></h3><ul><li>机密性 Confidentiality</li><li>完整性 Integirity</li><li>可认证性 Authentication 还是可用性 Availability?</li></ul><h3 id="常见的安全性要求" tabindex="-1">常见的安全性要求 <a class="header-anchor" href="#常见的安全性要求" aria-label="Permalink to &quot;常见的安全性要求&quot;">​</a></h3><ul><li>完全攻破 可以恢复出完整的秘钥</li><li>全局推导 攻击者构造出一个与原算法功能等价的替代算法,不使用密钥也可以恢复出与密文相对应的明文</li><li>实例推导 攻击者仅从锁获得的密文中恢复相应的明文</li><li>信息推导 攻击者仅能恢复不符密钥的信息或者目标明文的信息</li></ul><h3 id="攻击手段的分类" tabindex="-1">攻击手段的分类 <a class="header-anchor" href="#攻击手段的分类" aria-label="Permalink to &quot;攻击手段的分类&quot;">​</a></h3><ul><li>仅密文攻击 攻击者只能在信道上截获到密文</li><li>已知明文攻击 攻击者拥有一定数量的密文以及某些密文对应的明文</li><li>选择明文攻击 攻击者可以指定明文,也能获取到这些明文对应的密文</li><li>选择密文攻击 攻击者可以获得其指定密文对应的明文,可以通过试验不同特征的密文,分析节后的结果.</li></ul><p>以上四种方式,攻击者的能力是逐渐递增的,如果一个密码系统能够抵御后一级的攻击,一定可以抵御前面所有级别的攻击.</p>',8),h=[r,o,c];function p(m,d,u,_,b,g){return i(),s("div",null,h)}const f=t(n,[["render",p]]);export{y as __pageData,f as default};