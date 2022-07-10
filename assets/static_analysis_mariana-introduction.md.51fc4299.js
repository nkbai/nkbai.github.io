import{_ as n,c as a,o as s,a as e}from"./app.eda6f95c.js";const h='{"title":"mariana\u5B89\u5353\u9759\u6001\u5206\u6790\u5DE5\u5177\u7B80\u4ECB","description":"","frontmatter":{"title":"mariana\u5B89\u5353\u9759\u6001\u5206\u6790\u5DE5\u5177\u7B80\u4ECB","date":"2021-11-14T03:57:03.000Z","draft":false,"tags":["android","\u9759\u6001\u5206\u6790"],"series":["\u9759\u6001\u5206\u6790"],"categories":["\u6280\u672F\u76F8\u5173"]},"headers":[{"level":2,"title":"\u5DE5\u4F5C\u539F\u7406","slug":"\u5DE5\u4F5C\u539F\u7406"},{"level":3,"title":"\u4EC0\u4E48\u662FModel","slug":"\u4EC0\u4E48\u662Fmodel"}],"relativePath":"static_analysis/mariana-introduction.md"}',r={},t=e(`<h2 id="\u5DE5\u4F5C\u539F\u7406" tabindex="-1">\u5DE5\u4F5C\u539F\u7406 <a class="header-anchor" href="#\u5DE5\u4F5C\u539F\u7406" aria-hidden="true">#</a></h2><h3 id="\u4EC0\u4E48\u662Fmodel" tabindex="-1">\u4EC0\u4E48\u662FModel <a class="header-anchor" href="#\u4EC0\u4E48\u662Fmodel" aria-hidden="true">#</a></h3><p>\u4E3A\u6BCF\u4E00\u4E2A\u51FD\u6570\u90FD\u5EFA\u7ACB\u4E00\u4E2Amodel\uFF0C\u5305\u62EC\u5E93\u51FD\u6570\uFF0C\u63CF\u8FF0\uFF1A</p><ul><li>\u5339\u914D\u5230\u4E86\u54EA\u4E9Bsink\u70B9</li><li>\u5339\u914D\u5230\u4E86\u54EA\u4E9Bsource\u70B9</li><li>\u6C61\u70B9\u600E\u4E48\u4ECE\u53D8\u91CF\u4F20\u64AD\u5230\u8FD4\u56DE\u503C\uFF0Cthis\uFF0C\u9759\u6001\u53D8\u91CF\u7B49 \u8FED\u4EE3\u6C42\u89E3\uFF1A \u6BD4\u5982foo\u8C03\u7528\u4E86bar\u3002 Iteration 1\uFF1A \u6C42foo\u7684model\uFF0C\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u6CA1\u6709\u8C03\u7528\u8005 \u6C42bar\u7684model\uFF0C\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u5C06bar\u7684\u8C03\u7528\u8005foo\u52A0\u5165\u4E0B\u4E00\u8F6E\u6C42\u89E3\u96C6\u5408\u4E2D Iteration 2: \u5728bar\u7684model\u57FA\u7840\u4E0A\u7EE7\u7EED\u6C42\u89E3foo\u7684model</li></ul><p>\u4EC0\u4E48\u662FModel \u6E90\u7801\u4E2D\u7684\u8BF4\u6CD5</p><div class="language-c line-numbers-mode"><pre><code><span class="token comment">/**
 * A \`Model\` is a summary of what we know about a method. A \`Model\` should
 * contain the properties we are interested in, such as *generations*,
 * *propagations* and *sinks*.
 *
 * A *mode* describes a specific behavior of a model. See \`Model::Mode\`.
 *
 * A *generation* describes the property that the method either
 * returns a tainted value or mutates (and hence taints) a reference type
 * argument, regardless of whether parameters are tainted.
 *
 * A *parameter source* of a method describes the property that the method
 * receives a tainted value on a given parameter.
 *
 * A *propagation* describes how taint may flow through a method. More
 * specifically, how taint may flow from a parameter to the method&#39;s return
 * value or another parameters. A *propagation* will only propagate the taint
 * if the parameter is tainted. See \`Propagation\`.
 *
 * A *global sanitizer* sanitizes all sources, sinks or propagations flowing
 * through the method that have a kind dictated by its kinds field
 *
 * *Attach to sources* automatically adds features to all sources flowing out of
 * the method.
 *
 * *Attach to sinks* automatically adds features to all sources flowing in
 * the method.
 *
 * *Attach to propagations* automatically adds features to all propagations from
 * or to a given argument or return value.
 *
 * *Add features to arguments* automatically adds features to all taint that
 * might flow in or out of a given argument. This is equivalent to *attach to
 * sources/sinks/propagations*, but also adds features even when there is no
 * inferred propagation. E.g,
 * \`\`\`
 * List&lt;String&gt; x;
 * f(x);
 * // Here x has the feature, regardless of the propagations of f.
 * \`\`\`
 *
 * *inline as* is either top, bottom or an argument access path that will be
 * used to inline the method at call sites.
 */</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p>\u6700\u7B80\u5355\u7684Model</p><div class="language-json line-numbers-mode"><pre><code>
<span class="token punctuation">{</span>
    <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Lcom/security/bvaa/MainActivity;.f:()V&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;line&quot;</span><span class="token operator">:</span> <span class="token number">44</span><span class="token punctuation">,</span>
        <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com/security/bvaa/MainActivity.java&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,8),l=[t];function p(o,i,c,u,b,m){return s(),a("div",null,l)}var f=n(r,[["render",p]]);export{h as __pageData,f as default};
