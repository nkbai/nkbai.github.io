import{_ as n,c as s,o as a,a as p}from"./app.4bbc222c.js";const d='{"title":"5. \u6700\u957F\u56DE\u6587\u5B50\u4E32","description":"","frontmatter":{"title":"5. \u6700\u957F\u56DE\u6587\u5B50\u4E32","date":"2019-06-04T03:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["\u6280\u672F\u76F8\u5173"]},"headers":[{"level":2,"title":"\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-06-04) \u6700\u957F\u56DE\u6587\u5B50\u4E32","slug":"\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-06-04-\u6700\u957F\u56DE\u6587\u5B50\u4E32"},{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":2,"title":"\u89E3\u9898\u8FC7\u7A0B","slug":"\u89E3\u9898\u8FC7\u7A0B"},{"level":2,"title":"\u4E00\u70B9\u611F\u609F","slug":"\u4E00\u70B9\u611F\u609F"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"rust-leetcode/2019-06-04.md"}',t={},o=p(`<h2 id="\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-06-04-\u6700\u957F\u56DE\u6587\u5B50\u4E32" tabindex="-1">\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-06-04) \u6700\u957F\u56DE\u6587\u5B50\u4E32 <a class="header-anchor" href="#\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-06-04-\u6700\u957F\u56DE\u6587\u5B50\u4E32" aria-hidden="true">#</a></h2><p>\u575A\u6301\u6BCF\u5929\u4E00\u9053\u9898,\u5237\u9898\u5B66\u4E60Rust. <a href="https://leetcode-cn.com/problems/longest-palindromic-substring/" target="_blank" rel="noopener noreferrer">\u539F\u9898</a></p><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u7ED9\u5B9A\u4E00\u4E2A\u5B57\u7B26\u4E32 s\uFF0C\u627E\u5230 s \u4E2D\u6700\u957F\u7684\u56DE\u6587\u5B50\u4E32\u3002\u4F60\u53EF\u4EE5\u5047\u8BBE s \u7684\u6700\u5927\u957F\u5EA6\u4E3A 1000\u3002</p><p>\u793A\u4F8B 1\uFF1A</p><p>\u8F93\u5165: &quot;babad&quot; \u8F93\u51FA: &quot;bab&quot; \u6CE8\u610F: &quot;aba&quot; \u4E5F\u662F\u4E00\u4E2A\u6709\u6548\u7B54\u6848\u3002 \u793A\u4F8B 2\uFF1A</p><p>\u8F93\u5165: &quot;cbbd&quot; \u8F93\u51FA: &quot;bb&quot;</p><h2 id="\u89E3\u9898\u8FC7\u7A0B" tabindex="-1">\u89E3\u9898\u8FC7\u7A0B <a class="header-anchor" href="#\u89E3\u9898\u8FC7\u7A0B" aria-hidden="true">#</a></h2><p>\u601D\u8DEF: \u600E\u4E48\u628A\u89C4\u6A21\u5927\u7684\u95EE\u9898\u5316\u6210\u89C4\u6A21\u5C0F\u7684\u95EE\u9898\u8FDB\u884C\u89E3\u51B3 \u5047\u8BBE\u7528m[i][j]\u8868\u793A\u4ECEi\u5230j\u662F\u56DE\u6587\u7684\u957F\u5EA6 \u90A3\u4E48\u53EA\u6709\u4E24\u79CD\u60C5\u51B5\u53EF\u4EE5\u6269\u5C55\u51FA\u56DE\u6587 m[i][j]\u662F\u56DE\u6587,\u5F53\u4E14\u4EC5\u5F53:</p><ol><li>m[i][j-1]\u662F\u56DE\u6587,\u5E76\u4E14m[i][j-1]\u957F\u5EA6\u662F1,\u5E76\u4E14m[j-1]==m[j]</li><li>m[i+1][j-1]\u662F\u56DE\u6587,\u5E76\u4E14m[i]==m[j] \u904D\u5386\u7684\u8FC7\u7A0B\u4E2D\u8BB0\u4E00\u4E2A\u6700\u957F\u5B57\u7B26\u4E32\u5373\u53EF.</li></ol><p>\u8FD8\u6709\u53E6\u5916\u4E00\u79CD\u601D\u8DEF: \u4ECE\u4E2D\u95F4\u5411\u4E24\u8FB9\u6269\u5C55 \u9488\u5BF9\u6BCF\u4E2A\u5B57\u7B26,\u4E0D\u65AD\u5411\u4E24\u8FB9\u6269\u5C55\u4EE5\u4E24\u79CD\u5F62\u5F0Faa,a\u5411\u5916\u6269\u5C55 \u7B2C\u4E00\u79CD\u601D\u8DEF\u662FO(n^2)\u590D\u6742\u5EA6 \u7B2C\u4E8C\u79CD\u5DEE\u4E0D\u591A\u4E5F\u662FO(n^2)\u590D\u6742\u5EA6,\u8003\u8651\u5230\u526A\u679D\u6548\u679C,\u4F1A\u9AD8\u51E0\u500D \u4F46\u662F\u6839\u636E\u522B\u4EBA\u63D0\u4EA4</p><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">longest_palindrome</span><span class="token punctuation">(</span>s<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> s<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> s<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> ss <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">as_bytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> m <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">;</span> ss<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span> ss<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token comment">//        for i in 0..m.len() {</span>
        <span class="token comment">//            m[i] = Vec::with_capacity(s.len());</span>
        <span class="token comment">//        }</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>m<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            m<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//\u81EA\u8EAB\u80AF\u5B9A\u662F\u4E00\u4E2A\u56DE\u6587</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> longest <span class="token operator">=</span> <span class="token operator">&amp;</span>ss<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">..</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">//step</span>
        <span class="token keyword">for</span> k <span class="token keyword">in</span> <span class="token number">1</span><span class="token punctuation">..</span>s<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//\u5143\u7D20\u4E0B\u6807</span>
            <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>s<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> k<span class="token punctuation">)</span> <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> m<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>i <span class="token operator">+</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> ss<span class="token punctuation">[</span>i <span class="token operator">+</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> ss<span class="token punctuation">[</span>i <span class="token operator">+</span> k<span class="token punctuation">]</span> <span class="token punctuation">{</span>
                    m<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>i <span class="token operator">+</span> k<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> longest<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> k <span class="token punctuation">{</span>
                        longest <span class="token operator">=</span> <span class="token operator">&amp;</span>ss<span class="token punctuation">[</span>i<span class="token punctuation">..</span><span class="token punctuation">(</span>i <span class="token operator">+</span> k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//\u5305\u542B\u6700\u540E\u4E00\u4F4D</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token keyword">let</span> s <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                    <span class="token keyword">let</span> e <span class="token operator">=</span> i <span class="token operator">+</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> i <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&gt;=</span> m<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> i <span class="token operator">+</span> k <span class="token operator">&gt;=</span> m<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">continue</span><span class="token punctuation">;</span> <span class="token comment">//\u8D8A\u754C\u7684\u4E0D\u8003\u8651</span>
                    <span class="token punctuation">}</span>
                    <span class="token keyword">if</span> m<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>i <span class="token operator">+</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> ss<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> ss<span class="token punctuation">[</span>i <span class="token operator">+</span> k<span class="token punctuation">]</span> <span class="token punctuation">{</span>
                        m<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>i <span class="token operator">+</span> k<span class="token punctuation">]</span> <span class="token operator">=</span> m<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>i <span class="token operator">+</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">//\u5411\u5468\u8FB9\u6269\u5C55\u4E86\u4E24\u4F4D</span>
                        <span class="token keyword">if</span> longest<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> k <span class="token punctuation">{</span>
                            longest <span class="token operator">=</span> <span class="token operator">&amp;</span>ss<span class="token punctuation">[</span>i<span class="token punctuation">..</span><span class="token punctuation">(</span>i <span class="token operator">+</span> k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//\u5305\u542B\u6700\u540E\u4E00\u4F4D</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from_utf8</span><span class="token punctuation">(</span><span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span>longest<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token attribute attr-name">#[cfg(test)]</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">test</span> <span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token attribute attr-name">#[test]</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">test_longest_palindrome</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">longest_palindrome</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;babad&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;bab&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">longest_palindrome</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;babba&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;abba&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">longest_palindrome</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;abcdef&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">longest_palindrome</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">longest_palindrome</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;abbcd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;bb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><h2 id="\u4E00\u70B9\u611F\u609F" tabindex="-1">\u4E00\u70B9\u611F\u609F <a class="header-anchor" href="#\u4E00\u70B9\u611F\u609F" aria-hidden="true">#</a></h2><pre><code> \`String::from_utf8(Vec::from(longest)).ok().unwrap() \`\u5B57\u7B26\u4E32\u4E4B\u95F4\u7684\u8F6C\u6362\u8FD8\u662F\u4E0D\u592A\u719F\u6089,
 \u57FA\u672C\u5DE5\u5177\u4F7F\u7528\u4E0D\u591F\u719F\u7EC3
</code></pre><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u7684<a href="https://github.com/nkbai" target="_blank" rel="noopener noreferrer">github</a>,\u672C\u9879\u76EE\u6587\u7AE0\u6240\u6709\u4EE3\u7801\u90FD\u53EF\u4EE5\u627E\u5230.</p>`,16),e=[o];function c(l,u,i,k,r,m){return a(),s("div",null,e)}var f=n(t,[["render",c]]);export{d as __pageData,f as default};