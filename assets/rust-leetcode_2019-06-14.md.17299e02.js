import{_ as n,c as s,o as a,a as p}from"./app.e7435feb.js";const b='{"title":"380. \u5E38\u6570\u65F6\u95F4\u63D2\u5165\u3001\u5220\u9664\u548C\u83B7\u53D6\u968F\u673A\u5143\u7D20","description":"","frontmatter":{"title":"380. \u5E38\u6570\u65F6\u95F4\u63D2\u5165\u3001\u5220\u9664\u548C\u83B7\u53D6\u968F\u673A\u5143\u7D20","date":"2019-06-14T03:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["\u6280\u672F\u76F8\u5173"]},"headers":[{"level":2,"title":"\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-06-14)","slug":"\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-06-14"},{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":2,"title":"\u89E3\u9898\u8FC7\u7A0B","slug":"\u89E3\u9898\u8FC7\u7A0B"},{"level":2,"title":"\u4E00\u70B9\u611F\u609F","slug":"\u4E00\u70B9\u611F\u609F"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"rust-leetcode/2019-06-14.md"}',t={},e=p(`<h2 id="\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-06-14" tabindex="-1">\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-06-14) <a class="header-anchor" href="#\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-06-14" aria-hidden="true">#</a></h2><p>\u575A\u6301\u6BCF\u5929\u4E00\u9053\u9898,\u5237\u9898\u5B66\u4E60Rust.</p><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p><a href="https://leetcode-cn.com/problems/insert-delete-getrandom-o1/" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/insert-delete-getrandom-o1/</a> \u8BBE\u8BA1\u4E00\u4E2A\u652F\u6301\u5728\u5E73\u5747\xA0\u65F6\u95F4\u590D\u6742\u5EA6 O(1)\xA0\u4E0B\uFF0C\u6267\u884C\u4EE5\u4E0B\u64CD\u4F5C\u7684\u6570\u636E\u7ED3\u6784\u3002</p><p>insert(val)\uFF1A\u5F53\u5143\u7D20 val \u4E0D\u5B58\u5728\u65F6\uFF0C\u5411\u96C6\u5408\u4E2D\u63D2\u5165\u8BE5\u9879\u3002 remove(val)\uFF1A\u5143\u7D20 val \u5B58\u5728\u65F6\uFF0C\u4ECE\u96C6\u5408\u4E2D\u79FB\u9664\u8BE5\u9879\u3002 getRandom\uFF1A\u968F\u673A\u8FD4\u56DE\u73B0\u6709\u96C6\u5408\u4E2D\u7684\u4E00\u9879\u3002\u6BCF\u4E2A\u5143\u7D20\u5E94\u8BE5\u6709\u76F8\u540C\u7684\u6982\u7387\u88AB\u8FD4\u56DE\u3002 \u793A\u4F8B :</p><p>// \u521D\u59CB\u5316\u4E00\u4E2A\u7A7A\u7684\u96C6\u5408\u3002 RandomizedSet randomSet = new RandomizedSet();</p><p>// \u5411\u96C6\u5408\u4E2D\u63D2\u5165 1 \u3002\u8FD4\u56DE true \u8868\u793A 1 \u88AB\u6210\u529F\u5730\u63D2\u5165\u3002 randomSet.insert(1);</p><p>// \u8FD4\u56DE false \uFF0C\u8868\u793A\u96C6\u5408\u4E2D\u4E0D\u5B58\u5728 2 \u3002 randomSet.remove(2);</p><p>// \u5411\u96C6\u5408\u4E2D\u63D2\u5165 2 \u3002\u8FD4\u56DE true \u3002\u96C6\u5408\u73B0\u5728\u5305\u542B [1,2] \u3002 randomSet.insert(2);</p><p>// getRandom \u5E94\u968F\u673A\u8FD4\u56DE 1 \u6216 2 \u3002 randomSet.getRandom();</p><p>// \u4ECE\u96C6\u5408\u4E2D\u79FB\u9664 1 \uFF0C\u8FD4\u56DE true \u3002\u96C6\u5408\u73B0\u5728\u5305\u542B [2] \u3002 randomSet.remove(1);</p><p>// 2 \u5DF2\u5728\u96C6\u5408\u4E2D\uFF0C\u6240\u4EE5\u8FD4\u56DE false \u3002 randomSet.insert(2);</p><p>// \u7531\u4E8E 2 \u662F\u96C6\u5408\u4E2D\u552F\u4E00\u7684\u6570\u5B57\uFF0CgetRandom \u603B\u662F\u8FD4\u56DE 2 \u3002 randomSet.getRandom();</p><h2 id="\u89E3\u9898\u8FC7\u7A0B" tabindex="-1">\u89E3\u9898\u8FC7\u7A0B <a class="header-anchor" href="#\u89E3\u9898\u8FC7\u7A0B" aria-hidden="true">#</a></h2><p>\u601D\u8DEF\uFF1A1.\u7528slice\u5B58\u503C\uFF0C\u7528map\u4FDD\u5B58\u503C\u5728slice\u4E2D\u7684index\uFF1B 2.\u6BCF\u6B21\u5220\u9664\u65F6\uFF0C\u4E3A\u4E86\u907F\u514D\u79FB\u52A8\u5143\u7D20\uFF0C\u7528\u6570\u7EC4\u672B\u5C3E\u5143\u7D20\u8986\u76D6\u9700\u8981\u5220\u9664\u7684\u5143\u7D20\uFF0C\u7136\u540E\u5220\u9664\u6570\u7EC4\u672B\u5C3E\u5143\u7D20\uFF1B</p><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">extern</span> <span class="token keyword">crate</span> <span class="token module-declaration namespace">rand</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">rand<span class="token punctuation">::</span></span><span class="token class-name">Rng</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>collections<span class="token punctuation">::</span></span><span class="token class-name">HashMap</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>collections<span class="token punctuation">::</span></span><span class="token class-name">HashSet</span><span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token type-definition class-name">RandomizedSet</span> <span class="token punctuation">{</span>
    m<span class="token punctuation">:</span> <span class="token class-name">HashMap</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token punctuation">,</span> <span class="token keyword">usize</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    v<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \`&amp;self\` means the method takes an immutable reference.
 * If you need a mutable reference, change it to \`&amp;mut self\` instead.
 */</span>
<span class="token keyword">impl</span> <span class="token class-name">RandomizedSet</span> <span class="token punctuation">{</span>
    <span class="token comment">/** Initialize your data structure here. */</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">Self</span> <span class="token punctuation">{</span>
        <span class="token class-name">RandomizedSet</span> <span class="token punctuation">{</span>
            m<span class="token punctuation">:</span> <span class="token class-name">HashMap</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            v<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/** Inserts a value to the set. Returns true if the set did not already contain the specified element. */</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">insert</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">self</span><span class="token punctuation">,</span> val<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">bool</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token keyword">self</span><span class="token punctuation">.</span>m<span class="token punctuation">.</span><span class="token function">contains_key</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span>m<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token keyword">self</span><span class="token punctuation">.</span>v<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> i <span class="token punctuation">{</span>
            <span class="token comment">//\u7ECF\u8FC7\u5220\u9664\u4EE5\u540Ev\u91CC\u9762\u7A7A\u95F4\u53EF\u80FD\u975E\u5E38\u5BCC\u88D5,\u76F4\u63A5\u7528\u73B0\u6709\u7684\u624D\u5BF9</span>
            <span class="token keyword">self</span><span class="token punctuation">.</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> val<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">self</span><span class="token punctuation">.</span>v<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>m<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/** Removes a value from the set. Returns true if the set contained the specified element. */</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">remove</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">self</span><span class="token punctuation">,</span> val<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">bool</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token operator">!</span><span class="token keyword">self</span><span class="token punctuation">.</span>m<span class="token punctuation">.</span><span class="token function">contains_key</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token operator">*</span><span class="token keyword">self</span><span class="token punctuation">.</span>m<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>val<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">expect</span><span class="token punctuation">(</span><span class="token string">&quot;must ok&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> i <span class="token operator">!=</span> <span class="token keyword">self</span><span class="token punctuation">.</span>m<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">{</span>
            <span class="token comment">//\u5982\u679C\u662F\u6700\u540E\u4E00\u4E2A,\u5C31\u4E0D\u7528\u8C03\u6574\u4E86</span>
            <span class="token keyword">self</span><span class="token punctuation">.</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span>v<span class="token punctuation">[</span><span class="token keyword">self</span><span class="token punctuation">.</span>m<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//\u6700\u540E\u4E00\u4E2A\u503C\u586B\u5145\u5230i</span>
            <span class="token keyword">self</span><span class="token punctuation">.</span>m<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">.</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>m<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/** Get a random element from the set. */</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">get_random</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> rng <span class="token operator">=</span> <span class="token namespace">rand<span class="token punctuation">::</span></span><span class="token function">thread_rng</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> i<span class="token punctuation">:</span> <span class="token keyword">usize</span> <span class="token operator">=</span> rng<span class="token punctuation">.</span><span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        i <span class="token operator">=</span> i <span class="token operator">%</span> <span class="token keyword">self</span><span class="token punctuation">.</span>m<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">self</span><span class="token punctuation">.</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div><h2 id="\u4E00\u70B9\u611F\u609F" tabindex="-1">\u4E00\u70B9\u611F\u609F <a class="header-anchor" href="#\u4E00\u70B9\u611F\u609F" aria-hidden="true">#</a></h2><p>rust\u6807\u51C6\u5E93\u4E2D\u5C45\u7136\u6CA1\u6709\u968F\u673A\u6570\u751F\u6210\u5668.</p><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u7684<a href="https://github.com/nkbai" target="_blank" rel="noopener noreferrer">github</a>,\u672C\u9879\u76EE\u6587\u7AE0\u6240\u6709\u4EE3\u7801\u90FD\u53EF\u4EE5\u627E\u5230.</p>`,20),o=[e];function c(l,u,r,i,k,m){return a(),s("div",null,o)}var f=n(t,[["render",c]]);export{b as __pageData,f as default};
