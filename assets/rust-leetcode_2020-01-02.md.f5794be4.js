import{_ as n,c as s,o as a,a as p}from"./app.3dd4ae37.js";const d='{"title":"135. \u5206\u53D1\u7CD6\u679C","description":"","frontmatter":{"title":"135. \u5206\u53D1\u7CD6\u679C","date":"2020-01-01T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["\u6280\u672F\u76F8\u5173"],"plugins":["viz"]},"headers":[{"level":2,"title":"\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-01-02)","slug":"\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-01-02"},{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":2,"title":"\u89E3\u9898\u601D\u8DEF","slug":"\u89E3\u9898\u601D\u8DEF"},{"level":2,"title":"\u89E3\u9898\u8FC7\u7A0B","slug":"\u89E3\u9898\u8FC7\u7A0B"},{"level":2,"title":"\u4E00\u70B9\u611F\u609F","slug":"\u4E00\u70B9\u611F\u609F"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"rust-leetcode/2020-01-02.md"}',t={},e=p(`<h2 id="\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-01-02" tabindex="-1">\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-01-02) <a class="header-anchor" href="#\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-01-02" aria-hidden="true">#</a></h2><p>\u575A\u6301\u6BCF\u5929\u4E00\u9053\u9898,\u5237\u9898\u5B66\u4E60Rust.</p><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u8001\u5E08\u60F3\u7ED9\u5B69\u5B50\u4EEC\u5206\u53D1\u7CD6\u679C\uFF0C\u6709 N\xA0\u4E2A\u5B69\u5B50\u7AD9\u6210\u4E86\u4E00\u6761\u76F4\u7EBF\uFF0C\u8001\u5E08\u4F1A\u6839\u636E\u6BCF\u4E2A\u5B69\u5B50\u7684\u8868\u73B0\uFF0C\u9884\u5148\u7ED9\u4ED6\u4EEC\u8BC4\u5206\u3002</p><p>\u4F60\u9700\u8981\u6309\u7167\u4EE5\u4E0B\u8981\u6C42\uFF0C\u5E2E\u52A9\u8001\u5E08\u7ED9\u8FD9\u4E9B\u5B69\u5B50\u5206\u53D1\u7CD6\u679C\uFF1A</p><p>\u6BCF\u4E2A\u5B69\u5B50\u81F3\u5C11\u5206\u914D\u5230 1 \u4E2A\u7CD6\u679C\u3002 \u76F8\u90BB\u7684\u5B69\u5B50\u4E2D\uFF0C\u8BC4\u5206\u9AD8\u7684\u5B69\u5B50\u5FC5\u987B\u83B7\u5F97\u66F4\u591A\u7684\u7CD6\u679C\u3002 \u90A3\u4E48\u8FD9\u6837\u4E0B\u6765\uFF0C\u8001\u5E08\u81F3\u5C11\u9700\u8981\u51C6\u5907\u591A\u5C11\u9897\u7CD6\u679C\u5462\uFF1F</p><p>\u793A\u4F8B\xA01:</p><p>\u8F93\u5165: [1,0,2] \u8F93\u51FA: 5 \u89E3\u91CA: \u4F60\u53EF\u4EE5\u5206\u522B\u7ED9\u8FD9\u4E09\u4E2A\u5B69\u5B50\u5206\u53D1 2\u30011\u30012 \u9897\u7CD6\u679C\u3002 \u793A\u4F8B\xA02:</p><p>\u8F93\u5165: [1,2,2] \u8F93\u51FA: 4 \u89E3\u91CA: \u4F60\u53EF\u4EE5\u5206\u522B\u7ED9\u8FD9\u4E09\u4E2A\u5B69\u5B50\u5206\u53D1 1\u30012\u30011 \u9897\u7CD6\u679C\u3002 \u7B2C\u4E09\u4E2A\u5B69\u5B50\u53EA\u5F97\u5230 1 \u9897\u7CD6\u679C\uFF0C\u8FD9\u5DF2\u6EE1\u8DB3\u4E0A\u8FF0\u4E24\u4E2A\u6761\u4EF6\u3002</p><p>\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09 \u94FE\u63A5\uFF1A<a href="https://leetcode-cn.com/problems/candy" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/candy</a> \u8457\u4F5C\u6743\u5F52\u9886\u6263\u7F51\u7EDC\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u5B98\u65B9\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p><h2 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1">\u89E3\u9898\u601D\u8DEF <a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a></h2><p>\u601D\u8DEF: \u4E00\u904D\u904D\u5386\u6CD5:</p><ol><li>\u9996\u5148\u539F\u5219\u662F\u8D2A\u5FC3,\u5C3D\u53EF\u80FD\u7684\u5C11\u7ED9</li><li>\u5206\u6570\u770B\u6210\u4ECE\u4F4E\u5230\u9AD8,\u518D\u4ECE\u9AD8\u5230\u4F4E\u7684\u53D8\u5316\u8FC7\u7A0B</li><li>\u8981\u6C42\u6700\u9AD8\u70B9\u8981\u540C\u65F6\u6EE1\u8DB3\u5DE6\u53F3\u4E24\u8FB9\u7684\u9700\u6C42</li><li>\u5982\u679C\u78B0\u5230\u76F8\u7B49\u8FDE\u7EED\u76F8\u7B49\u7684\u591A\u4E2A\u6570,\u5219\u7B49\u5230\u6709\u53D8\u5316\u518D\u53C2\u4E0E\u8BA1\u7B97</li></ol><p>\u53EA\u9700\u8BA1\u6570\u5355\u8C03\u589E\u548C\u5355\u8C03\u51CF\u7684\u4E2A\u6570\u5373\u53EF,\u4E0D\u7528\u5173\u5FC3\u4ED6\u4EEC\u5F7C\u6B64\u7684\u5DEE\u8DDD. \u7279\u6B8A\u60C5\u51B5: \u5C31\u662F\u8FDE\u7EED\u76F8\u7B49\u7684\u60C5\u51B5 \u6BD4\u59821,2,3,3,3,2,1 \u5219\u5E94\u8BE5\u628A\u7B2C\u4E00\u4E2A3\u89C6\u4F5C\u5DE6\u8FB9\u7684,\u6700\u540E\u4E00\u4E2A3\u89C6\u4F5C\u53F3\u8FB9\u7684,\u4E2D\u95F4\u76843\u90FD\u8BBE\u7F6E\u4E3A1</p><h2 id="\u89E3\u9898\u8FC7\u7A0B" tabindex="-1">\u89E3\u9898\u8FC7\u7A0B <a class="header-anchor" href="#\u89E3\u9898\u8FC7\u7A0B" aria-hidden="true">#</a></h2><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cmp<span class="token punctuation">::</span></span><span class="token punctuation">{</span>max<span class="token punctuation">,</span> <span class="token class-name">Ordering</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token type-definition class-name">Solution</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">candy</span><span class="token punctuation">(</span>ratings<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> is_up <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">//0\u8868\u793A\u5411\u4E0A\u589E\u7684\u8D8B\u52BF,1\u8868\u793A\u5411\u4E0B\u7684\u8D8B\u52BF</span>
        <span class="token keyword">match</span> ratings<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token number">0</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token number">1</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token number">2</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> ratings<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> ratings<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token number">3</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            _ <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> ratings<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> ratings<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
                    is_up <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    is_up <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">//\u4E0D\u662F\u5347\u5E8F,\u76F4\u63A5\u5F53\u4F5C\u964D\u5E8F</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> up_count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> down_count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> equals <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> last <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> is_up <span class="token punctuation">{</span>
            last <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            last <span class="token operator">=</span> <span class="token namespace">std<span class="token punctuation">::</span></span><span class="token keyword">i32</span><span class="token punctuation">::</span><span class="token constant">MAX</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>ratings<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> order <span class="token operator">=</span> last<span class="token punctuation">.</span><span class="token function">cmp</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>ratings<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> order <span class="token operator">==</span> <span class="token class-name">Ordering</span><span class="token punctuation">::</span><span class="token class-name">Equal</span> <span class="token punctuation">{</span>
                equals <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            last <span class="token operator">=</span> ratings<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token comment">//            \u5DF2\u7ECF\u53D1\u751F\u4E86\u4E0D\u7B49,\u8FD9\u65F6\u5019\u5C31\u8981\u8003\u8651\u60F3\u7B49\u90E8\u5206\u5982\u4F55\u5904\u7406\u4E86</span>
            <span class="token keyword">if</span> equals <span class="token operator">&gt;=</span> <span class="token number">1</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> is_up <span class="token punctuation">{</span>
                    <span class="token keyword">let</span> c <span class="token operator">=</span> up_count <span class="token operator">*</span> <span class="token punctuation">(</span>up_count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">//\u628A\u7B2C\u4E00\u4E2A\u76F8\u7B49\u7B97\u5728\u8FD9\u4E2A\u8D8B\u52BF\u4E2D,\u53E6\u4E00\u4E2A\u7B97\u5728\u53E6\u4E00\u4E2A\u8D8B\u52BF\u4E2D</span>
                    total <span class="token operator">+=</span> c<span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token keyword">let</span> m <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>down_count<span class="token punctuation">,</span> up_count<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">let</span> c <span class="token operator">=</span> down_count <span class="token operator">*</span> <span class="token punctuation">(</span>down_count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
                    total <span class="token operator">+=</span> c<span class="token punctuation">;</span>
                    total <span class="token operator">+=</span> up_count <span class="token operator">*</span> <span class="token punctuation">(</span>up_count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
                    total <span class="token operator">+=</span> m<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                is_up <span class="token operator">=</span> <span class="token punctuation">(</span>order <span class="token operator">==</span> <span class="token class-name">Ordering</span><span class="token punctuation">::</span><span class="token class-name">Less</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> is_up <span class="token punctuation">{</span>
                    up_count <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
                    down_count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    down_count <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
                    up_count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                equals <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
                total <span class="token operator">+=</span> equals<span class="token punctuation">;</span> <span class="token comment">//\u4E2D\u95F4\u7684\u7B49\u6570\u90FD\u662F1</span>
                equals <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            equals <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> is_up <span class="token operator">==</span> <span class="token punctuation">(</span>order <span class="token operator">==</span> <span class="token class-name">Ordering</span><span class="token punctuation">::</span><span class="token class-name">Less</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> is_up <span class="token punctuation">{</span>
                    up_count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    down_count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">//\u8D8B\u52BF\u53D1\u751F\u4E86\u53D8\u5316</span>
                <span class="token keyword">if</span> is_up <span class="token punctuation">{</span>
                    <span class="token comment">//\u7531\u4E0A\u5347\u53D8\u4E3A\u4E0B\u964D,\u5148\u4E0D\u8BA1\u7B97,\u7B49\u7B49</span>
                    down_count <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token comment">//\u4E0B\u964D\u53D8\u4E3A\u4E86\u4E0A\u5347,\u5F00\u59CB\u8BA1\u7B97\u4E0A\u4E00\u6CE2\u7684\u4E0A\u5347\u5230\u4E0B\u964D</span>
                    <span class="token keyword">let</span> m <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>up_count<span class="token punctuation">,</span> down_count<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">let</span> c1 <span class="token operator">=</span> up_count <span class="token operator">*</span> <span class="token punctuation">(</span>up_count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
                    <span class="token keyword">let</span> c2 <span class="token operator">=</span> down_count <span class="token operator">*</span> <span class="token punctuation">(</span>down_count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
                    total <span class="token operator">+=</span> m<span class="token punctuation">;</span>
                    total <span class="token operator">+=</span> c1 <span class="token operator">+</span> c2 <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//\u6700\u540E\u4E00\u4E2A\u4E2A\u6570\u8BA1\u5165\u4E0B\u4E00\u4E2A\u8D8B\u52BF</span>
                    up_count <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
                    down_count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                is_up <span class="token operator">=</span> <span class="token operator">!</span>is_up<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> m <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>down_count<span class="token punctuation">,</span> up_count<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> c1 <span class="token operator">=</span> up_count <span class="token operator">*</span> <span class="token punctuation">(</span>up_count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> c2 <span class="token operator">=</span> down_count <span class="token operator">*</span> <span class="token punctuation">(</span>down_count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
        total <span class="token operator">+=</span> m<span class="token punctuation">;</span>
        total <span class="token operator">+=</span> c1 <span class="token operator">+</span> c2<span class="token punctuation">;</span>
        total <span class="token operator">+=</span> equals<span class="token punctuation">;</span> <span class="token comment">//\u8003\u8651\u5230\u6700\u540E\u4EE5\u76F8\u7B49\u7ED3\u5C3E</span>
        total
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token attribute attr-name">#[cfg(test)]</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">test</span> <span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>l135_candy<span class="token punctuation">::</span></span><span class="token class-name">Solution</span><span class="token punctuation">;</span>

    <span class="token attribute attr-name">#[test]</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">candy</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">candy</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">candy</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">candy</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">candy</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">candy</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token class-name">Solution</span><span class="token punctuation">::</span><span class="token function">candy</span><span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br></div></div><h2 id="\u4E00\u70B9\u611F\u609F" tabindex="-1">\u4E00\u70B9\u611F\u609F <a class="header-anchor" href="#\u4E00\u70B9\u611F\u609F" aria-hidden="true">#</a></h2><p>\u6709\u4E86\u5927\u81F4\u601D\u8DEF,\u60F3\u5FEB\u901F\u5199\u51FA\u6765\u6E05\u6670\u5E72\u51C0\u7684\u4EE3\u7801,\u8FD8\u6709\u6BB5\u8DDD\u79BB,\u6709\u5F85\u63D0\u9AD8.</p><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u7684<a href="https://github.com/nkbai/rust-leetcode" target="_blank" rel="noopener noreferrer">github</a>,\u672C\u9879\u76EE\u6587\u7AE0\u6240\u6709\u4EE3\u7801\u90FD\u53EF\u4EE5\u627E\u5230.</p>`,20),o=[e];function c(l,u,r,k,i,b){return a(),s("div",null,o)}var y=n(t,[["render",c]]);export{d as __pageData,y as default};