import{_ as n,c as s,o as a,a as p}from"./app.8cf0e725.js";const m='{"title":"learningPythonV4","description":"","frontmatter":{"title":"learningPythonV4","date":"2018-10-08T09:48:12.000Z","draft":false,"markup":"mmark"},"headers":[{"level":2,"title":"\u57FA\u7840\u90E8\u5206","slug":"\u57FA\u7840\u90E8\u5206"},{"level":3,"title":"1. list","slug":"_1-list"},{"level":3,"title":"2. \u5B57\u5178","slug":"_2-\u5B57\u5178"},{"level":3,"title":"3.python\u7684\u7C7B\u578B\u5C42\u6B21","slug":"_3-python\u7684\u7C7B\u578B\u5C42\u6B21"},{"level":3,"title":"4. python\u8FD0\u7B97\u7B26\u91CD\u8F7D","slug":"_4-python\u8FD0\u7B97\u7B26\u91CD\u8F7D"},{"level":2,"title":"\u7C7B","slug":"\u7C7B"}],"relativePath":"other/learningPythonV4.md"}',t={},e=p(`<h1 id="python\u5B66\u4E60\u624B\u518C\u7B2C\u56DB\u7248\u5B66\u4E60\u7B14\u8BB0" tabindex="-1">python\u5B66\u4E60\u624B\u518C\u7B2C\u56DB\u7248\u5B66\u4E60\u7B14\u8BB0 <a class="header-anchor" href="#python\u5B66\u4E60\u624B\u518C\u7B2C\u56DB\u7248\u5B66\u4E60\u7B14\u8BB0" aria-hidden="true">#</a></h1><h2 id="\u57FA\u7840\u90E8\u5206" tabindex="-1">\u57FA\u7840\u90E8\u5206 <a class="header-anchor" href="#\u57FA\u7840\u90E8\u5206" aria-hidden="true">#</a></h2><h3 id="_1-list" tabindex="-1">1. list <a class="header-anchor" href="#_1-list" aria-hidden="true">#</a></h3><p><img alt="" data-src="https://img2018.cnblogs.com/blog/124391/201810/124391-20181008121746356-1567322406.png" loading="lazy" class="lazy"></p><h3 id="_2-\u5B57\u5178" tabindex="-1">2. \u5B57\u5178 <a class="header-anchor" href="#_2-\u5B57\u5178" aria-hidden="true">#</a></h3><p><img alt="" data-src="https://img2018.cnblogs.com/blog/124391/201810/124391-20181008121814420-1078075977.png" loading="lazy" class="lazy"></p><h3 id="_3-python\u7684\u7C7B\u578B\u5C42\u6B21" tabindex="-1">3.python\u7684\u7C7B\u578B\u5C42\u6B21 <a class="header-anchor" href="#_3-python\u7684\u7C7B\u578B\u5C42\u6B21" aria-hidden="true">#</a></h3><p><img alt="" data-src="https://img2018.cnblogs.com/blog/124391/201810/124391-20181008121837926-1026810780.png" loading="lazy" class="lazy"></p><h3 id="_4-python\u8FD0\u7B97\u7B26\u91CD\u8F7D" tabindex="-1">4. python\u8FD0\u7B97\u7B26\u91CD\u8F7D <a class="header-anchor" href="#_4-python\u8FD0\u7B97\u7B26\u91CD\u8F7D" aria-hidden="true">#</a></h3><p><img alt="" data-src="https://img2018.cnblogs.com/blog/124391/201810/124391-20181008121906516-924222475.png" loading="lazy" class="lazy"><img alt="" data-src="https://img2018.cnblogs.com/blog/124391/201810/124391-20181008121917580-1602821280.png" loading="lazy" class="lazy"></p><h2 id="\u7C7B" tabindex="-1">\u7C7B <a class="header-anchor" href="#\u7C7B" aria-hidden="true">#</a></h2><ol><li>__slots\u5C5E\u6027 \u7C7B\u4E2D\u7684\u8FD9\u4E2A\u5C5E\u6027\u4E3B\u8981\u662F\u7528\u6765\u9650\u5236\u7C7B\u7684\u5B9E\u4F8B\u4E0D\u80FD\u4EFB\u610F\u65B0\u589E\u5C5E\u6027,\u53EA\u6709\u5728\u5217\u8868\u4E2D\u7684\u6709\u6548, \u5982\u679C\u60F3\u5236\u5B9A\u4E86slots\u5C5E\u6027\u4EE5\u540E,\u5B9E\u4F8B\u8FD8\u53EF\u4EE5\u65B0\u589E\u5C5E\u6027,\u53EF\u4EE5\u6309\u7167\u4E0B\u9762\u7684\u65B9\u5F0F\u6765\u5199</li></ol><div class="language-python line-numbers-mode"><pre><code><span class="token keyword">class</span> <span class="token class-name">D</span><span class="token punctuation">:</span>
    __slots__  <span class="token operator">=</span>  <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;__dict__&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2"><li>\u88C5\u9970\u5668 \u88C5\u9970\u5668\u90FD\u662F\u4E00\u4E2A\u7C7B,\u6BCF\u6B21\u4F7F\u7528,\u90FD\u76F8\u5F53\u4E8E\u4E00\u6B21\u5B9E\u4F8B\u5316. \u6BD4\u5982</li></ol><div class="language-python line-numbers-mode"><pre><code><span class="token keyword">class</span> <span class="token class-name">tracer</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> func<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>calls <span class="token operator">=</span> <span class="token number">0</span>
        self<span class="token punctuation">.</span>func <span class="token operator">=</span> func

    <span class="token keyword">def</span> <span class="token function">__call__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>calls <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;call %s to %s&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>calls<span class="token punctuation">,</span> self<span class="token punctuation">.</span>func<span class="token punctuation">.</span>__name__<span class="token punctuation">)</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">)</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-python line-numbers-mode"><pre><code><span class="token decorator annotation punctuation">@tracer</span>
<span class="token keyword">def</span> <span class="token function">spam</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
<span class="token comment">#\u7B49\u6548\u4EE3\u7801</span>
<span class="token keyword">def</span> <span class="token function">spam</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">)</span>
spam<span class="token operator">=</span>tracer<span class="token punctuation">(</span>spam<span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u56E0\u6B64spam(3,4,5)\u8C03\u7528\u5B9E\u9645\u4E0A\u8C03\u7528\u7684\u662Ftracer\u5B9E\u4F8B\u7684__call__</p><ol start="3"><li>\u63CF\u8FF0\u7B26 \u56E0\u4E3APython\u662F\u4E00\u4E2A\u52A8\u6001\u7C7B\u578B\u89E3\u91CA\u6027\u8BED\u8A00\uFF0C\u4E0D\u50CFC/C++\u7B49\u9759\u6001\u7F16\u8BD1\u578B\u8BED\u8A00\uFF0C\u6570\u636E\u7C7B\u578B\u5728\u7F16\u8BD1\u65F6\u4FBF\u53EF\u4EE5\u8FDB\u884C\u9A8C\u8BC1\uFF0C\u800CPython\u4E2D\u5FC5\u987B\u6DFB\u52A0\u989D\u5916\u7684\u7C7B\u578B\u68C0\u67E5\u903B\u8F91\u4EE3\u7801\u624D\u80FD\u505A\u5230\u8FD9\u4E00\u70B9\uFF0C\u8FD9\u5C31\u662F\u63CF\u8FF0\u7B26\u7684\u521D\u8877\u3002\u6BD4\u5982\uFF0C\u6709\u4E00\u4E2A\u6D4B\u8BD5\u7C7BTest\uFF0C\u5176\u5177\u6709\u4E00\u4E2A\u7C7B\u5C5E\u6027name\u3002</li></ol><div class="language-python line-numbers-mode"><pre><code><span class="token keyword">class</span> <span class="token class-name">name_des</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>__name <span class="token operator">=</span> <span class="token boolean">None</span>
    <span class="token keyword">def</span>  <span class="token function">__get__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> instance<span class="token punctuation">,</span> owner<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;call __get__&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>__name
    <span class="token keyword">def</span>  <span class="token function">__set__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> instance<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;call __set__&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span>  <span class="token builtin">isinstance</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span><span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>__name <span class="token operator">=</span> value
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">raise</span> TypeError<span class="token punctuation">(</span><span class="token string">&quot;Must be an string&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">test</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    name <span class="token operator">=</span> name_des<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u90A3\u4E48\u6267\u884Ct.name=3\u5C06\u4F1A\u62A5\u9519,\u8FD9\u5C31\u662F\u63CF\u8FF0\u7B26\u7684\u4F5C\u7528,</p><ol start="4"><li>\u5C5E\u6027\u67E5\u627E\u8BBE\u7F6E\u4F2A\u4EE3\u7801</li></ol><div class="language-python line-numbers-mode"><pre><code>__getattribute__\u4F2A\u4EE3\u7801\uFF1A
   __getattribute__<span class="token punctuation">(</span><span class="token builtin">property</span><span class="token punctuation">)</span> logic<span class="token punctuation">:</span>
  <span class="token comment">#\u5148\u5728\u7C7B(\u5305\u62EC\u7236\u7C7B\u3001\u7956\u5148\u7C7B)\u7684__dict__\u5C5E\u6027\u4E2D\u67E5\u627E\u63CF\u8FF0\u7B26</span>
  descripter <span class="token operator">=</span> find first descripter <span class="token keyword">in</span> <span class="token keyword">class</span> <span class="token class-name">and</span> bases&#39;s <span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token builtin">property</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> descripter<span class="token punctuation">:</span><span class="token comment">#\u5982\u679C\u627E\u5230\u5C5E\u6027\u5E76\u4E14\u662F\u6570\u636E\u63CF\u8FF0\u7B26\uFF0C\u5C31\u76F4\u63A5\u8C03\u7528\u8BE5\u6570\u636E\u63CF\u8FF0\u7B26\u7684__get__\u65B9\u6CD5\u5E76\u5C06\u7ED3\u679C\u8FD4\u56DE</span>
      <span class="token keyword">return</span> descripter<span class="token punctuation">.</span>__get__<span class="token punctuation">(</span>instance<span class="token punctuation">,</span> instance<span class="token punctuation">.</span>__class__<span class="token punctuation">)</span>
  <span class="token keyword">else</span><span class="token punctuation">:</span><span class="token comment">#\u5982\u679C\u6CA1\u6709\u627E\u5230\u6216\u8005\u4E0D\u662F\u6570\u636E\u63CF\u8FF0\u7B26\uFF0C\u5C31\u53BB\u5B9E\u4F8B\u7684__dict__\u5C5E\u6027\u4E2D\u67E5\u627E\u5C5E\u6027\uFF0C\u5982\u679C\u627E\u5230\u4E86\u5C31\u76F4\u63A5\u8FD4\u56DE\u8FD9\u4E2A\u5C5E\u6027\u503C</span>
      <span class="token keyword">if</span> value <span class="token keyword">in</span> instance<span class="token punctuation">.</span>__dict__
          <span class="token keyword">return</span> value
      <span class="token comment">#\u7A0B\u5E8F\u6267\u884C\u5230\u8FD9\u91CC\uFF0C\u8BF4\u660E\u6CA1\u6709\u6570\u636E\u63CF\u8FF0\u7B26\u548C\u5B9E\u4F8B\u5C5E\u6027\uFF0C\u5219\u5728\u7C7B(\u7236\u7C7B\u3001\u7956\u5148\u7C7B)\u7684__dict__\u5C5E\u6027\u4E2D\u67E5\u627E\u975E\u6570\u636E\u63CF\u8FF0\u7B26</span>
      value <span class="token operator">=</span> find first value <span class="token keyword">in</span> <span class="token keyword">class</span> <span class="token class-name">and</span> bases&#39;s <span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token builtin">property</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> value <span class="token keyword">is</span> a function<span class="token punctuation">:</span><span class="token comment">#\u5982\u679C\u627E\u5230\u4E86\u5E76\u4E14\u8FD9\u4E2A\u5C5E\u6027\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u5C31\u8FD4\u56DE\u7ED1\u5B9A\u540E\u7684\u51FD\u6570</span>
         <span class="token keyword">return</span> bounded function<span class="token punctuation">(</span>value<span class="token punctuation">)</span>
      <span class="token keyword">else</span><span class="token punctuation">:</span><span class="token comment">#\u5426\u5219\u5C31\u76F4\u63A5\u8FD4\u56DE\u8FD9\u4E2A\u5C5E\u6027\u503C</span>
         <span class="token keyword">return</span> value
 <span class="token comment">#\u7A0B\u5E8F\u6267\u884C\u5230\u8FD9\u91CC\u8BF4\u660E\u6CA1\u6709\u627E\u5230\u8BE5\u5C5E\u6027\uFF0C\u5F15\u53D1\u5F02\u5E38\uFF0C__getattr__\u51FD\u6570\u4F1A\u88AB\u8C03\u7528</span>
 <span class="token keyword">raise</span> AttributeNotFundedException

 __setattr__\u4F2A\u4EE3\u7801\uFF1A
 __setattr__<span class="token punctuation">(</span><span class="token builtin">property</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>logic<span class="token punctuation">:</span>
 <span class="token comment">#\u5148\u5728\u7C7B(\u5305\u62EC\u7236\u7C7B\u3001\u7956\u5148\u7C7B)\u7684__dict__\u5C5E\u6027\u4E2D\u67E5\u627E\u63CF\u8FF0\u7B26</span>
 descripter <span class="token operator">=</span> find first descripter <span class="token keyword">in</span> <span class="token keyword">class</span> <span class="token class-name">and</span> bases&#39;s <span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token builtin">property</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> descripter<span class="token punctuation">:</span><span class="token comment">#\u5982\u679C\u627E\u5230\u4E86\u4E14\u662F\u6570\u636E\u63CF\u8FF0\u7B26\uFF0C\u5C31\u8C03\u7528\u63CF\u8FF0\u7B26\u7684__set__\u65B9\u6CD5</span>
     descripter<span class="token punctuation">.</span>__set__<span class="token punctuation">(</span>instance<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
 <span class="token keyword">else</span><span class="token punctuation">:</span><span class="token comment">#\u5426\u5219\u5C31\u662F\u7ED9\u5B9E\u4F8B\u5C5E\u6027\u8D4B\u503C</span>
     instance<span class="token punctuation">.</span>__dict__<span class="token punctuation">[</span><span class="token builtin">property</span><span class="token punctuation">]</span> <span class="token operator">=</span> value
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><ol start="5"><li>property</li></ol><div class="language-python line-numbers-mode"><pre><code><span class="token keyword">class</span> <span class="token class-name">test</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
\u3000<span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
\u3000\u3000self<span class="token punctuation">.</span>__x<span class="token operator">=</span><span class="token boolean">None</span>
\u3000
\u3000@<span class="token builtin">property</span>
\u3000<span class="token keyword">def</span> <span class="token function">x</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
\u3000\u3000<span class="token keyword">return</span> self<span class="token punctuation">.</span>__x
\u3000@x<span class="token punctuation">.</span>setter
\u3000<span class="token keyword">def</span> <span class="token function">x</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">:</span>
\u3000\u3000self<span class="token punctuation">.</span>__x<span class="token operator">=</span>value
\u3000@x<span class="token punctuation">.</span>deleter
\u3000<span class="token keyword">def</span> <span class="token function">x</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
\u3000\u3000<span class="token keyword">del</span> self<span class="token punctuation">.</span>__x
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u7528\u4F8B</p><div class="language-python line-numbers-mode"><pre><code>t<span class="token operator">=</span>test<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">#\u4F1A\u8C03\u7528def x(self)</span>
t<span class="token punctuation">.</span>x
<span class="token comment">#\u4F1A\u8C03\u7528def x(self,value)</span>
t<span class="token punctuation">.</span>x<span class="token operator">=</span><span class="token number">3</span>
<span class="token comment">#\u4F1A\u8C03\u7528def x(self)</span>
<span class="token keyword">del</span> t<span class="token punctuation">.</span>x
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,26),c=[e];function l(o,u,i,r,k,b){return a(),s("div",null,c)}var _=n(t,[["render",l]]);export{m as __pageData,_ as default};