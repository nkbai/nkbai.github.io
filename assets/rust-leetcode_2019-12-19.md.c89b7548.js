import{_ as n,c as s,o as a,a as p}from"./app.e7435feb.js";const d='{"title":"1052. \u7231\u751F\u6C14\u7684\u4E66\u5E97\u8001\u677F","description":"","frontmatter":{"title":"1052. \u7231\u751F\u6C14\u7684\u4E66\u5E97\u8001\u677F","date":"2019-12-18T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["\u6280\u672F\u76F8\u5173"],"plugins":["viz"]},"headers":[{"level":2,"title":"\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-12-19)","slug":"\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-12-19"},{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":2,"title":"\u89E3\u9898\u601D\u8DEF","slug":"\u89E3\u9898\u601D\u8DEF"},{"level":2,"title":"\u89E3\u9898\u8FC7\u7A0B","slug":"\u89E3\u9898\u8FC7\u7A0B"},{"level":2,"title":"\u4E00\u70B9\u611F\u609F","slug":"\u4E00\u70B9\u611F\u609F"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"rust-leetcode/2019-12-19.md"}',t={},e=p(`<h2 id="\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-12-19" tabindex="-1">\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-12-19) <a class="header-anchor" href="#\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-12-19" aria-hidden="true">#</a></h2><p>\u575A\u6301\u6BCF\u5929\u4E00\u9053\u9898,\u5237\u9898\u5B66\u4E60Rust.</p><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u4ECA\u5929\uFF0C\u4E66\u5E97\u8001\u677F\u6709\u4E00\u5BB6\u5E97\u6253\u7B97\u8BD5\u8425\u4E1A\xA0customers.length\xA0\u5206\u949F\u3002\u6BCF\u5206\u949F\u90FD\u6709\u4E00\u4E9B\u987E\u5BA2\uFF08customers[i]\uFF09\u4F1A\u8FDB\u5165\u4E66\u5E97\uFF0C\u6240\u6709\u8FD9\u4E9B\u987E\u5BA2\u90FD\u4F1A\u5728\u90A3\u4E00\u5206\u949F\u7ED3\u675F\u540E\u79BB\u5F00\u3002</p><p>\u5728\u67D0\u4E9B\u65F6\u5019\uFF0C\u4E66\u5E97\u8001\u677F\u4F1A\u751F\u6C14\u3002 \u5982\u679C\u4E66\u5E97\u8001\u677F\u5728\u7B2C i \u5206\u949F\u751F\u6C14\uFF0C\u90A3\u4E48 grumpy[i] = 1\uFF0C\u5426\u5219 grumpy[i] = 0\u3002 \u5F53\u4E66\u5E97\u8001\u677F\u751F\u6C14\u65F6\uFF0C\u90A3\u4E00\u5206\u949F\u7684\u987E\u5BA2\u5C31\u4F1A\u4E0D\u6EE1\u610F\uFF0C\u4E0D\u751F\u6C14\u5219\u4ED6\u4EEC\u662F\u6EE1\u610F\u7684\u3002</p><p>\u4E66\u5E97\u8001\u677F\u77E5\u9053\u4E00\u4E2A\u79D8\u5BC6\u6280\u5DE7\uFF0C\u80FD\u6291\u5236\u81EA\u5DF1\u7684\u60C5\u7EEA\uFF0C\u53EF\u4EE5\u8BA9\u81EA\u5DF1\u8FDE\u7EED\xA0X \u5206\u949F\u4E0D\u751F\u6C14\uFF0C\u4F46\u5374\u53EA\u80FD\u4F7F\u7528\u4E00\u6B21\u3002</p><p>\u8BF7\u4F60\u8FD4\u56DE\u8FD9\u4E00\u5929\u8425\u4E1A\u4E0B\u6765\uFF0C\u6700\u591A\u6709\u591A\u5C11\u5BA2\u6237\u80FD\u591F\u611F\u5230\u6EE1\u610F\u7684\u6570\u91CF\u3002</p><p>\u793A\u4F8B\uFF1A</p><p>\u8F93\u5165\uFF1Acustomers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], X = 3 \u8F93\u51FA\uFF1A16 \u89E3\u91CA\uFF1A \u4E66\u5E97\u8001\u677F\u5728\u6700\u540E 3 \u5206\u949F\u4FDD\u6301\u51B7\u9759\u3002 \u611F\u5230\u6EE1\u610F\u7684\u6700\u5927\u5BA2\u6237\u6570\u91CF = 1 + 1 + 1 + 1 + 7 + 5 = 16.</p><p>\u63D0\u793A\uFF1A</p><p>1 &lt;= X &lt;=\xA0customers.length ==\xA0grumpy.length &lt;= 20000 0 &lt;=\xA0customers[i] &lt;= 1000 0 &lt;=\xA0grumpy[i] &lt;= 1</p><p>\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09 \u94FE\u63A5\uFF1A<a href="https://leetcode-cn.com/problems/grumpy-bookstore-owner" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/grumpy-bookstore-owner</a> \u8457\u4F5C\u6743\u5F52\u9886\u6263\u7F51\u7EDC\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u5B98\u65B9\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p><h2 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1">\u89E3\u9898\u601D\u8DEF <a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a></h2><p>\u7C97\u66B4\u7684\u65B9\u6CD5\u662FO(XN),\u4F18\u5316\u7684\u65B9\u6CD5\u662F \u4F7F\u7528\u4E09\u500D\u7684\u7A7A\u95F4\u5C06\u590D\u6742\u5EA6\u964D\u4F4E\u5230O(N) \u5206\u522B\u662F\u4ECE\u5DE6\u5F80\u53F3,\u6309\u7167\u4E66\u5E97\u8001\u677F\u662F\u5426\u751F\u6C14\u6C42\u7D2F\u52A0\u548C \u4ECE\u53F3\u5F80\u5DE6,\u6309\u7167\u4E66\u5E97\u8001\u677F\u662F\u5426\u751F\u6C14\u6C42\u7D2F\u52A0\u548C \u4ECE\u5DE6\u5F80\u53F3,\u4E0D\u8003\u8651\u4E66\u5E97\u8001\u677F\u662F\u5426\u751F\u6C14\u6C42\u7D2F\u52A0\u548C</p><h2 id="\u89E3\u9898\u8FC7\u7A0B" tabindex="-1">\u89E3\u9898\u8FC7\u7A0B <a class="header-anchor" href="#\u89E3\u9898\u8FC7\u7A0B" aria-hidden="true">#</a></h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">max_satisfied</span><span class="token punctuation">(</span>customers<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> grumpy<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> x<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> x <span class="token operator">=</span> x <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> left <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u4ECE0\u5230i\u7684\u548C</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> right <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u4ECEi\u5230\u6700\u540E\u7684\u548C</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> total <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u6C42\u5DE6\u8FB9</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>customers<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            right<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> <span class="token keyword">mut</span> last <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> i <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
                last <span class="token operator">=</span> left<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> grumpy<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
                left<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>last <span class="token operator">+</span> customers<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                left<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>last<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">..</span>customers<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rev</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> <span class="token keyword">mut</span> last <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> i <span class="token operator">&lt;</span> customers<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">{</span>
                last <span class="token operator">=</span> right<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> grumpy<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
                right<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> last <span class="token operator">+</span> customers<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                right<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> last<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//\u6C42\u5168\u90E8</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>customers<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            right<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> <span class="token keyword">mut</span> last <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> i <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
                last <span class="token operator">=</span> total<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            total<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>last <span class="token operator">+</span> customers<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>customers<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> x <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> <span class="token keyword">mut</span> v1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> <span class="token keyword">mut</span> v2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> i <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
                v1 <span class="token operator">=</span> left<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> i <span class="token operator">+</span> x <span class="token operator">&lt;=</span> customers<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">{</span>
                v2 <span class="token operator">=</span> right<span class="token punctuation">[</span>i <span class="token operator">+</span> x<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            v1 <span class="token operator">+=</span> total<span class="token punctuation">[</span>i <span class="token operator">+</span> x <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> total<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> customers<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> v1 <span class="token operator">+</span> v2 <span class="token operator">&gt;</span> max <span class="token punctuation">{</span>
                max <span class="token operator">=</span> v1 <span class="token operator">+</span> v2<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        max
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token attribute attr-name">#[cfg(test)]</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">test</span> <span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token attribute attr-name">#[test]</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">max_satisfied</span><span class="token punctuation">(</span>
            <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br></div></div><h2 id="\u4E00\u70B9\u611F\u609F" tabindex="-1">\u4E00\u70B9\u611F\u609F <a class="header-anchor" href="#\u4E00\u70B9\u611F\u609F" aria-hidden="true">#</a></h2><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u7684<a href="https://github.com/nkbai/rust-leetcode" target="_blank" rel="noopener noreferrer">github</a>,\u672C\u9879\u76EE\u6587\u7AE0\u6240\u6709\u4EE3\u7801\u90FD\u53EF\u4EE5\u627E\u5230.</p>`,19),o=[e];function c(l,u,r,k,i,b){return a(),s("div",null,o)}var y=n(t,[["render",c]]);export{d as __pageData,y as default};
