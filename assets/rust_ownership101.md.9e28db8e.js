import{_ as s,c as e,o as l,N as a}from"./chunks/framework.3a9190c5.js";const y=JSON.parse('{"title":"Ownership 101","description":"","frontmatter":{"title":"Ownership 101","date":"2019-05-01T03:57:03.000Z","draft":false,"tags":["rust"],"categories":["技术相关"]},"headers":[],"relativePath":"rust/ownership101.md"}'),n={name:"rust/ownership101.md"},o=a(`<p>methods就是第一个参数是self的函数 比如:</p><div class="language-rust line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> arg2</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Type2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ReturnType</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // body</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>self有三种形式,主要是有关所有权的:</p><ul><li><code>self</code> - Value 完全的所有权</li><li><code>&amp;mut self</code> - mutable reference 可修改引用</li><li><code>&amp;self</code> - shared reference 共享引用</li></ul><ul><li>对于拥有所有权的变量,你可以做: 移动所有权,借出所有权,销毁,修改,访问内容</li><li>对于可修改引用</li></ul><ol><li>首先没有所有权,只是引用</li><li>可修改,可以访问内容,但是不可移动所有权,借出所有权,销毁 (在链表中尤其要注意这个事情)</li><li>第二点一句话概括,就是不能让这个变量处于无效状态</li></ol><ul><li>对于共享引用(shared reference)</li></ul><ol><li>只能访问内容</li><li>其他所有权限都没有</li><li>可以同时存在多个共享引用,只能同时存在一个可修改引用(mutable reference)</li><li>但是对于共享引用,我们有手段绕开这个限制,对其进行修改,所以共享引用,不称之为不可修改引用( <em>immutable</em> references)</li></ol>`,8),p=[o];function t(r,i,c,d,u,_){return l(),e("div",null,p)}const f=s(n,[["render",t]]);export{y as __pageData,f as default};
