import{_ as n,c as s,o as a,a as p}from"./app.e7435feb.js";const d='{"title":"622. \u8BBE\u8BA1\u5FAA\u73AF\u961F\u5217","description":"","frontmatter":{"title":"622. \u8BBE\u8BA1\u5FAA\u73AF\u961F\u5217","date":"2019-06-07T03:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["\u6280\u672F\u76F8\u5173"]},"headers":[{"level":2,"title":"\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-06-07) 622. \u8BBE\u8BA1\u5FAA\u73AF\u961F\u5217","slug":"\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-06-07-622-\u8BBE\u8BA1\u5FAA\u73AF\u961F\u5217"},{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"},{"level":2,"title":"\u89E3\u9898\u8FC7\u7A0B","slug":"\u89E3\u9898\u8FC7\u7A0B"},{"level":2,"title":"\u4E00\u70B9\u611F\u609F","slug":"\u4E00\u70B9\u611F\u609F"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"rust-leetcode/2019-06-07.md"}',e={},t=p(`<h2 id="\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-06-07-622-\u8BBE\u8BA1\u5FAA\u73AF\u961F\u5217" tabindex="-1">\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2019-06-07) 622. \u8BBE\u8BA1\u5FAA\u73AF\u961F\u5217 <a class="header-anchor" href="#\u6BCF\u5929\u4E00\u9053rust-leetcode-2019-06-07-622-\u8BBE\u8BA1\u5FAA\u73AF\u961F\u5217" aria-hidden="true">#</a></h2><p>\u575A\u6301\u6BCF\u5929\u4E00\u9053\u9898,\u5237\u9898\u5B66\u4E60Rust. <a href="https://leetcode-cn.com/problems/design-circular-queue/" target="_blank" rel="noopener noreferrer">\u539F\u9898</a></p><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u8BBE\u8BA1\u4F60\u7684\u5FAA\u73AF\u961F\u5217\u5B9E\u73B0\u3002 \u5FAA\u73AF\u961F\u5217\u662F\u4E00\u79CD\u7EBF\u6027\u6570\u636E\u7ED3\u6784\uFF0C\u5176\u64CD\u4F5C\u8868\u73B0\u57FA\u4E8E FIFO\uFF08\u5148\u8FDB\u5148\u51FA\uFF09\u539F\u5219\u5E76\u4E14\u961F\u5C3E\u88AB\u8FDE\u63A5\u5728\u961F\u9996\u4E4B\u540E\u4EE5\u5F62\u6210\u4E00\u4E2A\u5FAA\u73AF\u3002\u5B83\u4E5F\u88AB\u79F0\u4E3A\u201C\u73AF\u5F62\u7F13\u51B2\u5668\u201D\u3002</p><p>\u5FAA\u73AF\u961F\u5217\u7684\u4E00\u4E2A\u597D\u5904\u662F\u6211\u4EEC\u53EF\u4EE5\u5229\u7528\u8FD9\u4E2A\u961F\u5217\u4E4B\u524D\u7528\u8FC7\u7684\u7A7A\u95F4\u3002\u5728\u4E00\u4E2A\u666E\u901A\u961F\u5217\u91CC\uFF0C\u4E00\u65E6\u4E00\u4E2A\u961F\u5217\u6EE1\u4E86\uFF0C\u6211\u4EEC\u5C31\u4E0D\u80FD\u63D2\u5165\u4E0B\u4E00\u4E2A\u5143\u7D20\uFF0C\u5373\u4F7F\u5728\u961F\u5217\u524D\u9762\u4ECD\u6709\u7A7A\u95F4\u3002\u4F46\u662F\u4F7F\u7528\u5FAA\u73AF\u961F\u5217\uFF0C\u6211\u4EEC\u80FD\u4F7F\u7528\u8FD9\u4E9B\u7A7A\u95F4\u53BB\u5B58\u50A8\u65B0\u7684\u503C\u3002</p><p>\u4F60\u7684\u5B9E\u73B0\u5E94\u8BE5\u652F\u6301\u5982\u4E0B\u64CD\u4F5C\uFF1A</p><p>MyCircularQueue(k): \u6784\u9020\u5668\uFF0C\u8BBE\u7F6E\u961F\u5217\u957F\u5EA6\u4E3A k \u3002 Front: \u4ECE\u961F\u9996\u83B7\u53D6\u5143\u7D20\u3002\u5982\u679C\u961F\u5217\u4E3A\u7A7A\uFF0C\u8FD4\u56DE -1 \u3002 Rear: \u83B7\u53D6\u961F\u5C3E\u5143\u7D20\u3002\u5982\u679C\u961F\u5217\u4E3A\u7A7A\uFF0C\u8FD4\u56DE -1 \u3002 enQueue(value): \u5411\u5FAA\u73AF\u961F\u5217\u63D2\u5165\u4E00\u4E2A\u5143\u7D20\u3002\u5982\u679C\u6210\u529F\u63D2\u5165\u5219\u8FD4\u56DE\u771F\u3002 deQueue(): \u4ECE\u5FAA\u73AF\u961F\u5217\u4E2D\u5220\u9664\u4E00\u4E2A\u5143\u7D20\u3002\u5982\u679C\u6210\u529F\u5220\u9664\u5219\u8FD4\u56DE\u771F\u3002 isEmpty(): \u68C0\u67E5\u5FAA\u73AF\u961F\u5217\u662F\u5426\u4E3A\u7A7A\u3002 isFull(): \u68C0\u67E5\u5FAA\u73AF\u961F\u5217\u662F\u5426\u5DF2\u6EE1\u3002</p><p>\u793A\u4F8B\uFF1A</p><div class="language-"><pre><code>MyCircularQueue circularQueue = new MycircularQueue(3); // \u8BBE\u7F6E\u957F\u5EA6\u4E3A 3

circularQueue.enQueue(1); \xA0// \u8FD4\u56DE true

circularQueue.enQueue(2); \xA0// \u8FD4\u56DE true

circularQueue.enQueue(3); \xA0// \u8FD4\u56DE true

circularQueue.enQueue(4); \xA0// \u8FD4\u56DE false\uFF0C\u961F\u5217\u5DF2\u6EE1

circularQueue.Rear(); \xA0// \u8FD4\u56DE 3

circularQueue.isFull(); \xA0// \u8FD4\u56DE true

circularQueue.deQueue(); \xA0// \u8FD4\u56DE true

circularQueue.enQueue(4); \xA0// \u8FD4\u56DE true

circularQueue.Rear(); \xA0// \u8FD4\u56DE 4
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u63D0\u793A\uFF1A</p><p>\u6240\u6709\u7684\u503C\u90FD\u5728 0\xA0\u81F3 1000 \u7684\u8303\u56F4\u5185\uFF1B \u64CD\u4F5C\u6570\u5C06\u5728 1 \u81F3 1000 \u7684\u8303\u56F4\u5185\uFF1B \u8BF7\u4E0D\u8981\u4F7F\u7528\u5185\u7F6E\u7684\u961F\u5217\u5E93\u3002</p><h2 id="\u89E3\u9898\u8FC7\u7A0B" tabindex="-1">\u89E3\u9898\u8FC7\u7A0B <a class="header-anchor" href="#\u89E3\u9898\u8FC7\u7A0B" aria-hidden="true">#</a></h2><p>\u601D\u8DEF: \u8FD9\u4E2A\u9898\u6BD4\u8F83\u7B80\u5355,\u5C31\u662F\u4E00\u4E2A\u94FE\u8868, \u6709\u9996\u6709\u5C3E \u4E0D\u8FC7<code>\u4F46\u662F\u4F7F\u7528\u5FAA\u73AF\u961F\u5217\uFF0C\u6211\u4EEC\u80FD\u4F7F\u7528\u8FD9\u4E9B\u7A7A\u95F4\u53BB\u5B58\u50A8\u65B0\u7684\u503C\u3002</code>\u8FD9\u53E5\u8BDD\u4E0D\u6EE1\u8DB3. \u5982\u679C\u662F\u8F83\u5927\u7684\u5BF9\u8C61,\u5E94\u8BE5\u8003\u8651\u652F\u6301\u7A7A\u95F4\u53CD\u590D\u5229\u7528.\u5982\u679C\u662F\u4ECE\u8FD9\u4E2A\u89D2\u5EA6,\u90A3\u4E48\u5C31\u4E0D\u5E94\u8BE5\u505A\u6210\u94FE\u8868, \u76F4\u63A5\u4F7F\u7528Vector\u6700\u597D</p><div class="language-rust line-numbers-mode"><pre><code><span class="token keyword">struct</span> <span class="token type-definition class-name">MyCircularQueue</span> <span class="token punctuation">{</span>
    v<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    head<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span> <span class="token comment">//-1\u8868\u793A\u6CA1\u6709\u4EFB\u4F55\u6570\u636E</span>
    tail<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span> <span class="token comment">//-1\u8868\u793A\u6CA1\u6709\u4EFB\u4F55\u6570\u636E,\u5176\u4ED6\u60C5\u51B5\u6307\u5411\u4E0B\u4E00\u4E2A\u53EF\u7528\u4E0B\u6807</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \`&amp;self\` means the method takes an immutable reference.
 * If you need a mutable reference, change it to \`&amp;mut self\` instead.
 */</span>
<span class="token keyword">impl</span> <span class="token class-name">MyCircularQueue</span> <span class="token punctuation">{</span>
    <span class="token comment">/** Initialize your data structure here. Set the size of the queue to be k. */</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">new</span><span class="token punctuation">(</span>k<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">Self</span> <span class="token punctuation">{</span>
        <span class="token class-name">MyCircularQueue</span> <span class="token punctuation">{</span>
            v<span class="token punctuation">:</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">;</span> k <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            head<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
            tail<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/** Insert an element into the circular queue. Return true if the operation is successful. */</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">en_queue</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">self</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">bool</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">is_full</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">is_empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">self</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">self</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">self</span><span class="token punctuation">.</span>v<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">self</span><span class="token punctuation">.</span>v<span class="token punctuation">[</span><span class="token keyword">self</span><span class="token punctuation">.</span>tail <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
            <span class="token keyword">self</span><span class="token punctuation">.</span>tail <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token keyword">self</span><span class="token punctuation">.</span>tail <span class="token operator">&gt;=</span> <span class="token keyword">self</span><span class="token punctuation">.</span>v<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>
                <span class="token keyword">self</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token boolean">true</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/** Delete an element from the circular queue. Return true if the operation is successful. \u4ECE\u524D\u5F80\u540E\u5220 */</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">de_queue</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">bool</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">is_empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>head <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token keyword">self</span><span class="token punctuation">.</span>head <span class="token operator">&gt;=</span> <span class="token keyword">self</span><span class="token punctuation">.</span>v<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>
            <span class="token keyword">self</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token keyword">self</span><span class="token punctuation">.</span>tail <span class="token operator">==</span> <span class="token keyword">self</span><span class="token punctuation">.</span>head <span class="token punctuation">{</span>
            <span class="token keyword">self</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">self</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//\u6CA1\u6709\u6570\u636E\u4E86,\u90FD\u8BB0\u4E3A-1</span>
        <span class="token punctuation">}</span>
        <span class="token boolean">true</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/** Get the front item from the queue. */</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">front</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">is_empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">self</span><span class="token punctuation">.</span>v<span class="token punctuation">[</span><span class="token keyword">self</span><span class="token punctuation">.</span>head <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/** Get the last item from the queue. */</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">rear</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">is_empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> l <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span>tail <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> l <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            l <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">.</span>v<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token keyword">i32</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>v<span class="token punctuation">[</span>l <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/** Checks whether the circular queue is empty or not. */</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">is_empty</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">bool</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">self</span><span class="token punctuation">.</span>head <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">self</span><span class="token punctuation">.</span>tail <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/** Checks whether the circular queue is full or not. */</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">is_full</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">bool</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">self</span><span class="token punctuation">.</span>head <span class="token operator">==</span> <span class="token keyword">self</span><span class="token punctuation">.</span>tail <span class="token operator">&amp;&amp;</span> <span class="token keyword">self</span><span class="token punctuation">.</span>tail <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * let obj = MyCircularQueue::new(k);
 * let ret_1: bool = obj.en_queue(value);
 * let ret_2: bool = obj.de_queue();
 * let ret_3: i32 = obj.front();
 * let ret_4: i32 = obj.rear();
 * let ret_5: bool = obj.is_empty();
 * let ret_6: bool = obj.is_full();
 */</span>

<span class="token attribute attr-name">#[cfg(test)]</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">test</span> <span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>
    <span class="token attribute attr-name">#[test]</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">test_design</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> obj <span class="token operator">=</span> <span class="token class-name">MyCircularQueue</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> obj<span class="token punctuation">.</span><span class="token function">en_queue</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> obj<span class="token punctuation">.</span><span class="token function">en_queue</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> obj<span class="token punctuation">.</span><span class="token function">en_queue</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> obj<span class="token punctuation">.</span><span class="token function">en_queue</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> obj<span class="token punctuation">.</span><span class="token function">rear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> obj<span class="token punctuation">.</span><span class="token function">is_full</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> obj<span class="token punctuation">.</span><span class="token function">de_queue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> obj<span class="token punctuation">.</span><span class="token function">en_queue</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> obj<span class="token punctuation">.</span><span class="token function">rear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//        [&quot;MyCircularQueue&quot;,&quot;enQueue&quot;,&quot;enQueue&quot;,&quot;enQueue&quot;,&quot;enQueue&quot;,&quot;deQueue&quot;,&quot;deQueue&quot;,&quot;isEmpty&quot;,&quot;isEmpty&quot;,&quot;Rear&quot;,&quot;Rear&quot;,&quot;deQueue&quot;]</span>
        <span class="token comment">//        [[8],[3],[9],[5],[0],[],[],[],[],[],[],[]]</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> obj <span class="token operator">=</span> <span class="token class-name">MyCircularQueue</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> obj<span class="token punctuation">.</span><span class="token function">en_queue</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> obj<span class="token punctuation">.</span><span class="token function">en_queue</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> obj<span class="token punctuation">.</span><span class="token function">en_queue</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> obj<span class="token punctuation">.</span><span class="token function">en_queue</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> obj<span class="token punctuation">.</span><span class="token function">de_queue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> obj<span class="token punctuation">.</span><span class="token function">de_queue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> obj<span class="token punctuation">.</span><span class="token function">is_empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> obj<span class="token punctuation">.</span><span class="token function">is_empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> obj<span class="token punctuation">.</span><span class="token function">rear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> obj<span class="token punctuation">.</span><span class="token function">rear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> obj<span class="token punctuation">.</span><span class="token function">de_queue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br></div></div><h2 id="\u4E00\u70B9\u611F\u609F" tabindex="-1">\u4E00\u70B9\u611F\u609F <a class="header-anchor" href="#\u4E00\u70B9\u611F\u609F" aria-hidden="true">#</a></h2><p>\u539F\u9898\u7ED9\u7684en_queue,de_queue\u90FD\u662F&amp;self\u501F\u7528,\u8FD9\u4E2A\u5BFC\u81F4\u65E0\u6CD5\u4FEE\u6539,\u5982\u679C\u60F3\u4FEE\u6539\u5185\u5BB9\u53EA\u80FD\u7528RefCell\u4E4B\u7C7B\u7684\u6280\u672F. \u8FD9\u4E2A\u5E26\u6765\u4E0D\u5FC5\u8981\u7684\u56F0\u6270,\u56E0\u6B64\u4FEE\u6539\u4E86\u63A5\u53E3. \u5E94\u8BE5\u662F\u9898\u76EE\u7ED9\u7684\u63A5\u53E3\u8BBE\u8BA1\u6709\u95EE\u9898,\u6216\u8005\u4ED6\u5C31\u662F\u60F3\u8BA9\u7528RefCell\u8FD9\u7C7B\u6280\u672F.</p><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u7684<a href="https://github.com/nkbai" target="_blank" rel="noopener noreferrer">github</a>,\u672C\u9879\u76EE\u6587\u7AE0\u6240\u6709\u4EE3\u7801\u90FD\u53EF\u4EE5\u627E\u5230.</p>`,18),o=[t];function c(u,l,r,k,i,b){return a(),s("div",null,o)}var f=n(e,[["render",c]]);export{d as __pageData,f as default};
