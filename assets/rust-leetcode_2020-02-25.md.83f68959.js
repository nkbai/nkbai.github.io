import{_ as s,c as n,o as a,N as l}from"./chunks/framework.3a9190c5.js";const m=JSON.parse('{"title":"897. 递增顺序查找树","description":"","frontmatter":{"title":"897. 递增顺序查找树","date":"2020-02-24T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["技术相关"],"plugins":["viz"]},"headers":[],"relativePath":"rust-leetcode/2020-02-25.md"}'),p={name:"rust-leetcode/2020-02-25.md"},e=l(`<h2 id="每天一道rust-leetcode-2020-02-25" tabindex="-1">每天一道Rust-LeetCode(2020-02-25) <a class="header-anchor" href="#每天一道rust-leetcode-2020-02-25" aria-label="Permalink to &quot;每天一道Rust-LeetCode(2020-02-25)&quot;">​</a></h2><p>坚持每天一道题,刷题学习Rust.</p><h2 id="题目描述" tabindex="-1">题目描述 <a class="header-anchor" href="#题目描述" aria-label="Permalink to &quot;题目描述&quot;">​</a></h2><p>给定一个树，按中序遍历重新排列树，使树中最左边的结点现在是树的根，并且每个结点没有左子结点，只有一个右子结点。</p><p>示例 ：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">输入：[5,3,6,2,4,null,8,1,null,null,null,7,9]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">       5</span></span>
<span class="line"><span style="color:#A6ACCD;">      / \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    3    6</span></span>
<span class="line"><span style="color:#A6ACCD;">   / \\    \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  2   4    8</span></span>
<span class="line"><span style="color:#A6ACCD;">/        / \\</span></span>
<span class="line"><span style="color:#A6ACCD;">1        7   9</span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;">输出：[1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]</span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;"> 1</span></span>
<span class="line"><span style="color:#A6ACCD;">  \\</span></span>
<span class="line"><span style="color:#A6ACCD;">   2</span></span>
<span class="line"><span style="color:#A6ACCD;">    \\</span></span>
<span class="line"><span style="color:#A6ACCD;">     3</span></span>
<span class="line"><span style="color:#A6ACCD;">      \\</span></span>
<span class="line"><span style="color:#A6ACCD;">       4</span></span>
<span class="line"><span style="color:#A6ACCD;">        \\</span></span>
<span class="line"><span style="color:#A6ACCD;">         5</span></span>
<span class="line"><span style="color:#A6ACCD;">          \\</span></span>
<span class="line"><span style="color:#A6ACCD;">           6</span></span>
<span class="line"><span style="color:#A6ACCD;">            \\</span></span>
<span class="line"><span style="color:#A6ACCD;">             7</span></span>
<span class="line"><span style="color:#A6ACCD;">              \\</span></span>
<span class="line"><span style="color:#A6ACCD;">               8</span></span>
<span class="line"><span style="color:#A6ACCD;">                \\</span></span>
<span class="line"><span style="color:#A6ACCD;">                 9  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;">提示：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">给定树中的结点数介于 1 和 100 之间。</span></span>
<span class="line"><span style="color:#A6ACCD;">每个结点都有一个从 0 到 1000 范围内的唯一整数值。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">## 解题思路</span></span>
<span class="line"><span style="color:#A6ACCD;">递归中序遍历,</span></span>
<span class="line"><span style="color:#A6ACCD;">1. 先遍历左子树,</span></span>
<span class="line"><span style="color:#A6ACCD;"> 如果左子树为空,则直接追加在当前根上,否则追加在左子树返回的右下角节点上.</span></span>
<span class="line"><span style="color:#A6ACCD;">2. 自己成为新的根</span></span>
<span class="line"><span style="color:#A6ACCD;">3. 将自己作为新的根来遍历右子树.</span></span>
<span class="line"><span style="color:#A6ACCD;">如果右子树为空,新的根仍然是自己,否则是右子树返回节点</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">## 解题过程</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`rust</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">struct Solution {}</span></span>
<span class="line"><span style="color:#A6ACCD;">use crate::share::TreeNode;</span></span>
<span class="line"><span style="color:#A6ACCD;">use std::cell::RefCell;</span></span>
<span class="line"><span style="color:#A6ACCD;">use std::rc::Rc;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">impl Solution {</span></span>
<span class="line"><span style="color:#A6ACCD;">    pub fn increasing_bst(root: Option&lt;Rc&lt;RefCell&lt;TreeNode&gt;&gt;&gt;) -&gt; Option&lt;Rc&lt;RefCell&lt;TreeNode&gt;&gt;&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let mut new_root = None;</span></span>
<span class="line"><span style="color:#A6ACCD;">        Self::inorder_traverse(&amp;mut new_root, root);</span></span>
<span class="line"><span style="color:#A6ACCD;">        new_root</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    pub fn inorder_traverse(</span></span>
<span class="line"><span style="color:#A6ACCD;">        new_root: &amp;mut Option&lt;Rc&lt;RefCell&lt;TreeNode&gt;&gt;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        root: Option&lt;Rc&lt;RefCell&lt;TreeNode&gt;&gt;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    ) -&gt; Option&lt;Rc&lt;RefCell&lt;TreeNode&gt;&gt;&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if root.is_none() {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return None;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        let r = root.unwrap();</span></span>
<span class="line"><span style="color:#A6ACCD;">        println!(&quot;visit:{}&quot;, r.borrow().val);</span></span>
<span class="line"><span style="color:#A6ACCD;">        let left = r.borrow_mut().left.take();</span></span>
<span class="line"><span style="color:#A6ACCD;">        let mut r2 = Self::inorder_traverse(new_root, left);</span></span>
<span class="line"><span style="color:#A6ACCD;">        match r2 {</span></span>
<span class="line"><span style="color:#A6ACCD;">            None =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                if new_root.is_none() {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    *new_root = Some(r.clone());</span></span>
<span class="line"><span style="color:#A6ACCD;">                } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    new_root.as_ref().unwrap().borrow_mut().right = Some(r.clone());</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            Some(ref mut new_root) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                new_root.borrow_mut().right = Some(r.clone());</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        };</span></span>
<span class="line"><span style="color:#A6ACCD;">        let right = r.borrow_mut().right.take();</span></span>
<span class="line"><span style="color:#A6ACCD;">        let mut new_root = Some(r);</span></span>
<span class="line"><span style="color:#A6ACCD;">        let r3 = Self::inorder_traverse(&amp;mut new_root, right);</span></span>
<span class="line"><span style="color:#A6ACCD;">        if r3.is_none() {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return new_root;</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return r3;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">#[cfg(test)]</span></span>
<span class="line"><span style="color:#A6ACCD;">mod test {</span></span>
<span class="line"><span style="color:#A6ACCD;">    use super::*;</span></span>
<span class="line"><span style="color:#A6ACCD;">    use crate::share::NULL;</span></span>
<span class="line"><span style="color:#A6ACCD;">    #[test]</span></span>
<span class="line"><span style="color:#A6ACCD;">    fn test() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let t = crate::share::build_tree_ignore_parent(&amp;vec![</span></span>
<span class="line"><span style="color:#A6ACCD;">            5, 3, 6, 2, 4, NULL, 8, 1, NULL, NULL, NULL, 7, 9,</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]);</span></span>
<span class="line"><span style="color:#A6ACCD;">        println!(&quot;t={}&quot;, t.as_ref().unwrap().borrow().to_string());</span></span>
<span class="line"><span style="color:#A6ACCD;">        let r = Solution::increasing_bst(t);</span></span>
<span class="line"><span style="color:#A6ACCD;">        println!(&quot;r={}&quot;, r.unwrap().borrow().to_string());</span></span>
<span class="line"><span style="color:#A6ACCD;">        let r = Solution::increasing_bst(None);</span></span>
<span class="line"><span style="color:#A6ACCD;">        println!(&quot;r2={:?}&quot;, r);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;">## 一点感悟</span></span>
<span class="line"><span style="color:#A6ACCD;">这个题,递归,要想清楚,否则容易绕进去</span></span>
<span class="line"><span style="color:#A6ACCD;">## 其他</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">欢迎关注我的[github](https://github.com/nkbai/rust-leetcode),本项目文章所有代码都可以找到.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br></div></div>`,6),r=[e];function c(o,t,i,b,C,A){return a(),n("div",null,r)}const y=s(p,[["render",c]]);export{m as __pageData,y as default};
