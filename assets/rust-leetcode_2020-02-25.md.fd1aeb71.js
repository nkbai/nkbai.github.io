import{_ as n,c as s,o as e,a}from"./app.3ef0f76b.js";const d='{"title":"897. \u9012\u589E\u987A\u5E8F\u67E5\u627E\u6811","description":"","frontmatter":{"title":"897. \u9012\u589E\u987A\u5E8F\u67E5\u627E\u6811","date":"2020-02-24T19:57:03.000Z","draft":false,"tags":["rust","leetcode"],"series":["leetcode"],"categories":["\u6280\u672F\u76F8\u5173"],"plugins":["viz"]},"headers":[{"level":2,"title":"\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2020-02-25)","slug":"\u6BCF\u5929\u4E00\u9053rust-leetcode-2020-02-25"},{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0"}],"relativePath":"rust-leetcode/2020-02-25.md"}',r={},l=a(`<h2 id="\u6BCF\u5929\u4E00\u9053rust-leetcode-2020-02-25" tabindex="-1">\u6BCF\u5929\u4E00\u9053Rust-LeetCode(2020-02-25) <a class="header-anchor" href="#\u6BCF\u5929\u4E00\u9053rust-leetcode-2020-02-25" aria-hidden="true">#</a></h2><p>\u575A\u6301\u6BCF\u5929\u4E00\u9053\u9898,\u5237\u9898\u5B66\u4E60Rust.</p><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u7ED9\u5B9A\u4E00\u4E2A\u6811\uFF0C\u6309\u4E2D\u5E8F\u904D\u5386\u91CD\u65B0\u6392\u5217\u6811\uFF0C\u4F7F\u6811\u4E2D\u6700\u5DE6\u8FB9\u7684\u7ED3\u70B9\u73B0\u5728\u662F\u6811\u7684\u6839\uFF0C\u5E76\u4E14\u6BCF\u4E2A\u7ED3\u70B9\u6CA1\u6709\u5DE6\u5B50\u7ED3\u70B9\uFF0C\u53EA\u6709\u4E00\u4E2A\u53F3\u5B50\u7ED3\u70B9\u3002</p><p>\u793A\u4F8B \uFF1A</p><div class="language-"><pre><code>\u8F93\u5165\uFF1A[5,3,6,2,4,null,8,1,null,null,null,7,9]

       5
      / \\
    3    6
   / \\    \\
  2   4    8
/        / \\
1        7   9
\`\`\`
\u8F93\u51FA\uFF1A[1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
\`\`\`
 1
\xA0 \\
\xA0  2
\xA0   \\
\xA0    3
\xA0     \\
\xA0      4
\xA0       \\
\xA0        5
\xA0         \\
\xA0          6
\xA0           \\
\xA0            7
\xA0             \\
\xA0              8
\xA0               \\
                 9  

 
\`\`\`
\u63D0\u793A\uFF1A

\u7ED9\u5B9A\u6811\u4E2D\u7684\u7ED3\u70B9\u6570\u4ECB\u4E8E 1 \u548C\xA0100 \u4E4B\u95F4\u3002
\u6BCF\u4E2A\u7ED3\u70B9\u90FD\u6709\u4E00\u4E2A\u4ECE 0 \u5230 1000 \u8303\u56F4\u5185\u7684\u552F\u4E00\u6574\u6570\u503C\u3002


## \u89E3\u9898\u601D\u8DEF
\u9012\u5F52\u4E2D\u5E8F\u904D\u5386,
1. \u5148\u904D\u5386\u5DE6\u5B50\u6811,
 \u5982\u679C\u5DE6\u5B50\u6811\u4E3A\u7A7A,\u5219\u76F4\u63A5\u8FFD\u52A0\u5728\u5F53\u524D\u6839\u4E0A,\u5426\u5219\u8FFD\u52A0\u5728\u5DE6\u5B50\u6811\u8FD4\u56DE\u7684\u53F3\u4E0B\u89D2\u8282\u70B9\u4E0A.
2. \u81EA\u5DF1\u6210\u4E3A\u65B0\u7684\u6839
3. \u5C06\u81EA\u5DF1\u4F5C\u4E3A\u65B0\u7684\u6839\u6765\u904D\u5386\u53F3\u5B50\u6811.
\u5982\u679C\u53F3\u5B50\u6811\u4E3A\u7A7A,\u65B0\u7684\u6839\u4ECD\u7136\u662F\u81EA\u5DF1,\u5426\u5219\u662F\u53F3\u5B50\u6811\u8FD4\u56DE\u8282\u70B9

## \u89E3\u9898\u8FC7\u7A0B

\`\`\`rust

struct Solution {}
use crate::share::TreeNode;
use std::cell::RefCell;
use std::rc::Rc;

impl Solution {
    pub fn increasing_bst(root: Option&lt;Rc&lt;RefCell&lt;TreeNode&gt;&gt;&gt;) -&gt; Option&lt;Rc&lt;RefCell&lt;TreeNode&gt;&gt;&gt; {
        let mut new_root = None;
        Self::inorder_traverse(&amp;mut new_root, root);
        new_root
    }
    pub fn inorder_traverse(
        new_root: &amp;mut Option&lt;Rc&lt;RefCell&lt;TreeNode&gt;&gt;&gt;,
        root: Option&lt;Rc&lt;RefCell&lt;TreeNode&gt;&gt;&gt;,
    ) -&gt; Option&lt;Rc&lt;RefCell&lt;TreeNode&gt;&gt;&gt; {
        if root.is_none() {
            return None;
        }
        let r = root.unwrap();
        println!(&quot;visit:{}&quot;, r.borrow().val);
        let left = r.borrow_mut().left.take();
        let mut r2 = Self::inorder_traverse(new_root, left);
        match r2 {
            None =&gt; {
                if new_root.is_none() {
                    *new_root = Some(r.clone());
                } else {
                    new_root.as_ref().unwrap().borrow_mut().right = Some(r.clone());
                }
            }
            Some(ref mut new_root) =&gt; {
                new_root.borrow_mut().right = Some(r.clone());
            }
        };
        let right = r.borrow_mut().right.take();
        let mut new_root = Some(r);
        let r3 = Self::inorder_traverse(&amp;mut new_root, right);
        if r3.is_none() {
            return new_root;
        } else {
            return r3;
        }
    }
}
#[cfg(test)]
mod test {
    use super::*;
    use crate::share::NULL;
    #[test]
    fn test() {
        let t = crate::share::build_tree_ignore_parent(&amp;vec![
            5, 3, 6, 2, 4, NULL, 8, 1, NULL, NULL, NULL, 7, 9,
        ]);
        println!(&quot;t={}&quot;, t.as_ref().unwrap().borrow().to_string());
        let r = Solution::increasing_bst(t);
        println!(&quot;r={}&quot;, r.unwrap().borrow().to_string());
        let r = Solution::increasing_bst(None);
        println!(&quot;r2={:?}&quot;, r);
    }
}
\`\`\`
## \u4E00\u70B9\u611F\u609F
\u8FD9\u4E2A\u9898,\u9012\u5F52,\u8981\u60F3\u6E05\u695A,\u5426\u5219\u5BB9\u6613\u7ED5\u8FDB\u53BB
## \u5176\u4ED6

\u6B22\u8FCE\u5173\u6CE8\u6211\u7684[github](https://github.com/nkbai/rust-leetcode),\u672C\u9879\u76EE\u6587\u7AE0\u6240\u6709\u4EE3\u7801\u90FD\u53EF\u4EE5\u627E\u5230.</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br></div></div>`,6),p=[l];function b(t,i,u,c,m,o){return e(),s("div",null,p)}var g=n(r,[["render",b]]);export{d as __pageData,g as default};
