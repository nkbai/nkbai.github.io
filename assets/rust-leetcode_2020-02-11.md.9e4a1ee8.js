import{_ as n,c as s,o as a,a as p}from"./app.8cf0e725.js";const d='{"title":"673. \u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217\u7684\u4E2A\u6570","description":"","frontmatter":{"title":"673. \u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217\u7684\u4E2A\u6570","date":"2020-02-10T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["\u6280\u672F\u76F8\u5173"],"plugins":["viz"]},"headers":[{"level":2,"title":"\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2020-02-11)","slug":"\u6BCF\u5929\u4E00\u9053rust-leetcode-2020-02-11"},{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":2,"title":"\u89E3\u9898\u601D\u8DEF","slug":"\u89E3\u9898\u601D\u8DEF"},{"level":2,"title":"\u89E3\u9898\u8FC7\u7A0B","slug":"\u89E3\u9898\u8FC7\u7A0B"},{"level":2,"title":"\u4E00\u70B9\u611F\u609F","slug":"\u4E00\u70B9\u611F\u609F"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"rust-leetcode/2020-02-11.md"}',t={},e=p(`<h2 id="\u6BCF\u5929\u4E00\u9053rust-leetcode-2020-02-11" tabindex="-1">\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2020-02-11) <a class="header-anchor" href="#\u6BCF\u5929\u4E00\u9053rust-leetcode-2020-02-11" aria-hidden="true">#</a></h2><p>\u575A\u6301\u6BCF\u5929\u4E00\u9053\u9898,\u5237\u9898\u5B66\u4E60Rust.</p><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u7ED9\u5B9A\u4E00\u4E2A\u672A\u6392\u5E8F\u7684\u6574\u6570\u6570\u7EC4\uFF0C\u627E\u5230\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217\u7684\u4E2A\u6570\u3002</p><p>\u793A\u4F8B 1:</p><p>\u8F93\u5165: [1,3,5,4,7] \u8F93\u51FA: 2 \u89E3\u91CA: \u6709\u4E24\u4E2A\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217\uFF0C\u5206\u522B\u662F [1, 3, 4, 7] \u548C[1, 3, 5, 7]\u3002 \u793A\u4F8B 2:</p><p>\u8F93\u5165: [2,2,2,2,2] \u8F93\u51FA: 5 \u89E3\u91CA: \u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217\u7684\u957F\u5EA6\u662F1\uFF0C\u5E76\u4E14\u5B58\u57285\u4E2A\u5B50\u5E8F\u5217\u7684\u957F\u5EA6\u4E3A1\uFF0C\u56E0\u6B64\u8F93\u51FA5\u3002 \u6CE8\u610F:\xA0\u7ED9\u5B9A\u7684\u6570\u7EC4\u957F\u5EA6\u4E0D\u8D85\u8FC7 2000 \u5E76\u4E14\u7ED3\u679C\u4E00\u5B9A\u662F32\u4F4D\u6709\u7B26\u53F7\u6574\u6570\u3002</p><p>\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09 \u94FE\u63A5\uFF1A<a href="https://leetcode-cn.com/problems/number-of-longest-increasing-subsequence" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/number-of-longest-increasing-subsequence</a> \u8457\u4F5C\u6743\u5F52\u9886\u6263\u7F51\u7EDC\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u5B98\u65B9\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p><h2 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1">\u89E3\u9898\u601D\u8DEF <a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a></h2><p>dp[i]\u8868\u793A\u4EE5i\u7ED3\u5C3E\u7684\u9012\u589E\u5B50\u5E8F\u5217\u7684\u6700\u5927\u957F\u5EA6\u4EE5\u53CA\u4EE5\u53CA\u4E2A\u6570 \u6BD4\u5982 2 1 3 4 5 dp[0]={1,1} dp[1]={1,1} dp[2]={2,2} dp[4]={4,2} \u90A3\u4E48dp[j]= \u904D\u53860..j\u4E4B\u95F4\u6240\u6709\u7684\u5B50\u5E8F\u5217,\u5982\u679Ca[i]&lt;a[j],\u5219\u53D6\u5176\u6700\u5927\u503C+1,\u540C\u65F6\u7D2F\u52A0\u76F8\u5173\u4E2A\u6570 \u7136\u540E\u4ECE\u5934\u904D\u5386,\u7EDF\u8BA1\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217\u5BF9\u5E94\u7684\u4E2A\u6570</p><h2 id="\u89E3\u9898\u8FC7\u7A0B" tabindex="-1">\u89E3\u9898\u8FC7\u7A0B <a class="header-anchor" href="#\u89E3\u9898\u8FC7\u7A0B" aria-hidden="true">#</a></h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">find_number_of_lis</span><span class="token punctuation">(</span>nums<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> nums<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> max_len <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> dp <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token number">1</span><span class="token punctuation">..</span>nums<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> nj <span class="token operator">=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> <span class="token keyword">mut</span> current_max <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> <span class="token keyword">mut</span> current_max_count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>j <span class="token punctuation">{</span>
                <span class="token keyword">let</span> cmax <span class="token operator">=</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token number">0</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> nj <span class="token operator">&amp;&amp;</span> cmax <span class="token operator">&gt;=</span> current_max <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> cmax <span class="token operator">==</span> current_max <span class="token punctuation">{</span>
                        current_max_count <span class="token operator">+=</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//\u76F8\u540C\u7684\u957F\u5EA6\u8981\u7D2F\u52A0</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                        current_max <span class="token operator">=</span> cmax<span class="token punctuation">;</span>
                        current_max_count <span class="token operator">=</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token number">1</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token macro property">println!</span><span class="token punctuation">(</span>
                <span class="token string">&quot;current={},current_max={},current_max_count={}&quot;</span><span class="token punctuation">,</span>
                nj<span class="token punctuation">,</span> current_max<span class="token punctuation">,</span> current_max_count
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
            dp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span>current_max<span class="token punctuation">,</span> current_max_count<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> max_len <span class="token operator">&lt;</span> current_max <span class="token punctuation">{</span>
                max_len <span class="token operator">=</span> current_max<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>max<span class="token punctuation">,</span> c<span class="token punctuation">)</span> <span class="token keyword">in</span> dp <span class="token punctuation">{</span>
            <span class="token keyword">if</span> max <span class="token operator">==</span> max_len <span class="token punctuation">{</span>
                count <span class="token operator">+=</span> c<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        count
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token attribute attr-name">#[cfg(test)]</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">tests</span> <span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token attribute attr-name">#[test]</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">find_number_of_lis</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">find_number_of_lis</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><h2 id="\u4E00\u70B9\u611F\u609F" tabindex="-1">\u4E00\u70B9\u611F\u609F <a class="header-anchor" href="#\u4E00\u70B9\u611F\u609F" aria-hidden="true">#</a></h2><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u7684<a href="https://github.com/nkbai/rust-leetcode" target="_blank" rel="noopener noreferrer">github</a>,\u672C\u9879\u76EE\u6587\u7AE0\u6240\u6709\u4EE3\u7801\u90FD\u53EF\u4EE5\u627E\u5230.</p>`,15),o=[e];function c(l,u,r,i,k,b){return a(),s("div",null,o)}var _=n(t,[["render",c]]);export{d as __pageData,_ as default};