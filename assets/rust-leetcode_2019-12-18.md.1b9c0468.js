import{_ as n,c as s,o as a,a as p}from"./app.4bbc222c.js";const d='{"title":"51. N\u7687\u540E","description":"","frontmatter":{"title":"51. N\u7687\u540E","date":"2019-12-17T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["\u6280\u672F\u76F8\u5173"],"plugins":["viz"]},"headers":[{"level":2,"title":"\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-12-18)","slug":"\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-12-18"},{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":2,"title":"\u89E3\u9898\u601D\u8DEF","slug":"\u89E3\u9898\u601D\u8DEF"},{"level":2,"title":"\u89E3\u9898\u8FC7\u7A0B","slug":"\u89E3\u9898\u8FC7\u7A0B"},{"level":2,"title":"\u4E00\u70B9\u611F\u609F","slug":"\u4E00\u70B9\u611F\u609F"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"rust-leetcode/2019-12-18.md"}',t={},e=p(`<h2 id="\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-12-18" tabindex="-1">\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-12-18) <a class="header-anchor" href="#\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-12-18" aria-hidden="true">#</a></h2><p>\u575A\u6301\u6BCF\u5929\u4E00\u9053\u9898,\u5237\u9898\u5B66\u4E60Rust.</p><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>n\xA0\u7687\u540E\u95EE\u9898\u7814\u7A76\u7684\u662F\u5982\u4F55\u5C06 n\xA0\u4E2A\u7687\u540E\u653E\u7F6E\u5728 n\xD7n \u7684\u68CB\u76D8\u4E0A\uFF0C\u5E76\u4E14\u4F7F\u7687\u540E\u5F7C\u6B64\u4E4B\u95F4\u4E0D\u80FD\u76F8\u4E92\u653B\u51FB\u3002</p><p>\u4E0A\u56FE\u4E3A 8 \u7687\u540E\u95EE\u9898\u7684\u4E00\u79CD\u89E3\u6CD5\u3002</p><p>\u7ED9\u5B9A\u4E00\u4E2A\u6574\u6570 n\uFF0C\u8FD4\u56DE\u6240\u6709\u4E0D\u540C\u7684\xA0n\xA0\u7687\u540E\u95EE\u9898\u7684\u89E3\u51B3\u65B9\u6848\u3002</p><p>\u6BCF\u4E00\u79CD\u89E3\u6CD5\u5305\u542B\u4E00\u4E2A\u660E\u786E\u7684\xA0n \u7687\u540E\u95EE\u9898\u7684\u68CB\u5B50\u653E\u7F6E\u65B9\u6848\uFF0C\u8BE5\u65B9\u6848\u4E2D &#39;Q&#39; \u548C &#39;.&#39; \u5206\u522B\u4EE3\u8868\u4E86\u7687\u540E\u548C\u7A7A\u4F4D\u3002</p><p>\u793A\u4F8B:</p><p>\u8F93\u5165: 4 \u8F93\u51FA: [ [&quot;.Q..&quot;, // \u89E3\u6CD5 1 &quot;...Q&quot;, &quot;Q...&quot;, &quot;..Q.&quot;],</p><p>[&quot;..Q.&quot;, // \u89E3\u6CD5 2 &quot;Q...&quot;, &quot;...Q&quot;, &quot;.Q..&quot;] ] \u89E3\u91CA: 4 \u7687\u540E\u95EE\u9898\u5B58\u5728\u4E24\u4E2A\u4E0D\u540C\u7684\u89E3\u6CD5\u3002</p><p>\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09 \u94FE\u63A5\uFF1A<a href="https://leetcode-cn.com/problems/n-queens" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/n-queens</a> \u8457\u4F5C\u6743\u5F52\u9886\u6263\u7F51\u7EDC\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u5B98\u65B9\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p><h2 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1">\u89E3\u9898\u601D\u8DEF <a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a></h2><p>\u5178\u578B\u7684\u9012\u5F52\u56DE\u6EAF\u95EE\u9898,\u66B4\u529B\u7A77\u4E3E\u5C31ok\u4E86</p><h2 id="\u89E3\u9898\u8FC7\u7A0B" tabindex="-1">\u89E3\u9898\u8FC7\u7A0B <a class="header-anchor" href="#\u89E3\u9898\u8FC7\u7A0B" aria-hidden="true">#</a></h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">solve_n_queens</span><span class="token punctuation">(</span>n<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token operator">&gt;&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> matrix <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> col <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>n <span class="token punctuation">{</span>
            <span class="token keyword">let</span> <span class="token keyword">mut</span> v <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            col<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>n <span class="token punctuation">{</span>
                v<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            matrix<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> result <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> n <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> matrix<span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> col<span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
        result
    <span class="token punctuation">}</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">check_diagonal</span><span class="token punctuation">(</span>row<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">,</span> col<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">,</span> n<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">,</span> matrix<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">bool</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u5411\u53F3\u4E0A\u68C0\u67E5\u5BF9\u89D2\u7EBF</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> r <span class="token operator">=</span> row<span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> c <span class="token operator">=</span> col<span class="token punctuation">;</span>

        <span class="token keyword">loop</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> matrix<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> r <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> c <span class="token operator">==</span> n <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">{</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            r <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            c <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//\u60F3\u5DE6\u4E0B\u68C0\u67E5\u5BF9\u89D2\u7EBF</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> r <span class="token operator">=</span> row<span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> c <span class="token operator">=</span> col<span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> found <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">loop</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> matrix<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> r <span class="token operator">==</span> n <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">||</span> c <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            r <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            c <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//\u5DE6\u4E0A\u68C0\u67E5\u5BF9\u89D2\u7EBF</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> r <span class="token operator">=</span> row<span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> c <span class="token operator">=</span> col<span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> found <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">loop</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> matrix<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> r <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> c <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            r <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            c <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//\u53F3\u4E0B\u68C0\u67E5\u5BF9\u89D2\u7EBF</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> r <span class="token operator">=</span> row<span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> c <span class="token operator">=</span> col<span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> found <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">loop</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> matrix<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> r <span class="token operator">==</span> n <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">||</span> c <span class="token operator">==</span> n <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">{</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            r <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            c <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">put</span><span class="token punctuation">(</span>
        row<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">,</span>
        n<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">,</span>
        matrix<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
        col<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">bool</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
        result<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> row <span class="token operator">==</span> matrix<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">matrix_to_string</span><span class="token punctuation">(</span>matrix<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>n <span class="token punctuation">{</span>
            <span class="token keyword">if</span> col<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token punctuation">{</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span> <span class="token comment">//\u8FD9\u4E00\u5217\u5DF2\u7ECF\u88AB\u5360\u7528\u4E86</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">check_diagonal</span><span class="token punctuation">(</span>row<span class="token punctuation">,</span> i<span class="token punctuation">,</span> n<span class="token punctuation">,</span> matrix<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">//\u5408\u683C</span>
            matrix<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            col<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">put</span><span class="token punctuation">(</span>row <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> n<span class="token punctuation">,</span> matrix<span class="token punctuation">,</span> col<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//\u590D\u539F,\u5C1D\u8BD5\u4E0B\u4E00\u4E2A\u4F4D\u7F6E</span>
            matrix<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            col<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">matrix_to_string</span><span class="token punctuation">(</span>matrix<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> vec <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> v <span class="token keyword">in</span> matrix <span class="token punctuation">{</span>
            <span class="token keyword">let</span> <span class="token keyword">mut</span> bytes <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> v2 <span class="token keyword">in</span> v <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token operator">*</span>v2 <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
                    bytes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token char">&#39;Q&#39;</span> <span class="token keyword">as</span> <span class="token keyword">u8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    bytes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token char">&#39;.&#39;</span> <span class="token keyword">as</span> <span class="token keyword">u8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            vec<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">unsafe</span> <span class="token punctuation">{</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from_utf8_unchecked</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        vec
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token attribute attr-name">#[cfg(test)]</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">test</span> <span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>share<span class="token punctuation">::</span></span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token attribute attr-name">#[test]</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">solve_n_queens</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> t <span class="token punctuation">{</span>
            <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;-----&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> j <span class="token keyword">in</span> i <span class="token punctuation">{</span>
                <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br></div></div><h2 id="\u4E00\u70B9\u611F\u609F" tabindex="-1">\u4E00\u70B9\u611F\u609F <a class="header-anchor" href="#\u4E00\u70B9\u611F\u609F" aria-hidden="true">#</a></h2><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u7684<a href="https://github.com/nkbai/rust-leetcode" target="_blank" rel="noopener noreferrer">github</a>,\u672C\u9879\u76EE\u6587\u7AE0\u6240\u6709\u4EE3\u7801\u90FD\u53EF\u4EE5\u627E\u5230.</p>`,18),o=[e];function c(l,u,r,k,i,b){return a(),s("div",null,o)}var w=n(t,[["render",c]]);export{d as __pageData,w as default};