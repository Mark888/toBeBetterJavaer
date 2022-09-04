import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as p,c,a as n,b as o,e as l,d as a}from"./app.545bdd96.js";const i={},u=l(`<p>instanceof \u5173\u952E\u5B57\u7684\u7528\u6CD5\u5176\u5B9E\u5F88\u7B80\u5355\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token punctuation">(</span>object<span class="token punctuation">)</span> <span class="token keyword">instanceof</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7528\u610F\u4E5F\u975E\u5E38\u7B80\u5355\uFF0C\u5224\u65AD\u5BF9\u8C61\u662F\u5426\u7B26\u5408\u6307\u5B9A\u7684\u7C7B\u578B\uFF0C\u7ED3\u679C\u8981\u4E48\u662F true\uFF0C\u8981\u4E48\u662F false\u3002\u5728\u53CD\u5E8F\u5217\u5316\u7684\u65F6\u5019\uFF0Cinstanceof \u64CD\u4F5C\u7B26\u8FD8\u662F\u86EE\u5E38\u7528\u7684\uFF0C\u56E0\u4E3A\u8FD9\u65F6\u5019\u6211\u4EEC\u4E0D\u592A\u786E\u5B9A\u5BF9\u8C61\u5C5E\u4E0D\u5C5E\u4E8E\u6307\u5B9A\u7684\u7C7B\u578B\uFF0C\u5982\u679C\u4E0D\u8FDB\u884C\u5224\u65AD\u7684\u8BDD\uFF0C\u5C31\u5BB9\u6613\u629B\u51FA ClassCastException \u5F02\u5E38\u3002</p><p>\u6211\u4EEC\u6765\u5EFA\u8FD9\u6837\u4E00\u4E2A\u7B80\u5355\u7684\u7C7B Round\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Round</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u65B0\u589E\u4E00\u4E2A\u6269\u5C55\u7C7B Ring\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Ring</span> <span class="token keyword">extends</span> <span class="token class-name">Round</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u65F6\u5019\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u901A\u8FC7 instanceof \u6765\u68C0\u67E5 Ring \u5BF9\u8C61\u662F\u5426\u5C5E\u4E8E Round \u7C7B\u578B\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Ring</span> ring <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Ring</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ring <span class="token keyword">instanceof</span> <span class="token class-name">Round</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C\u4F1A\u8F93\u51FA true\uFF0C\u56E0\u4E3A Ring \u7EE7\u627F\u4E86 Round\uFF0C\u4E5F\u5C31\u610F\u5473\u7740 Ring \u548C Round \u7B26\u5408 <code> is-a</code> \u7684\u5173\u7CFB\uFF0C\u800C instanceof \u64CD\u4F5C\u7B26\u6B63\u662F\u57FA\u4E8E\u7C7B\u4E0E\u7C7B\u4E4B\u95F4\u7684\u7EE7\u627F\u5173\u7CFB\uFF0C\u4EE5\u53CA\u7C7B\u4E0E\u63A5\u53E3\u4E4B\u95F4\u7684\u5B9E\u73B0\u5173\u7CFB\u7684\u3002</p><p>\u6211\u4EEC\u518D\u6765\u65B0\u5EFA\u4E00\u4E2A\u63A5\u53E3 Shape\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">interface</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u65B0\u5EFA Circle \u7C7B\u5B9E\u73B0 Shape \u63A5\u53E3\u5E76\u7EE7\u627F Round \u7C7B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token keyword">extends</span> <span class="token class-name">Round</span> <span class="token keyword">implements</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u5BF9\u8C61\u662F\u7531\u8BE5\u7C7B\u521B\u5EFA\u7684\uFF0C\u90A3\u4E48 instanceof \u7684\u7ED3\u679C\u80AF\u5B9A\u4E3A true\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Circle</span> circle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>circle <span class="token keyword">instanceof</span> <span class="token class-name">Circle</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u80AF\u5B9A\u6CA1\u6BDB\u75C5\uFF0Cinstanceof \u5C31\u662F\u5E72\u8FD9\u4E2A\u6D3B\u7684\uFF0C\u5927\u5BB6\u4E5F\u5F88\u597D\u7406\u89E3\u3002\u90A3\u5982\u679C\u7C7B\u578B\u662F\u7236\u7C7B\u5462\uFF1F</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>circle <span class="token keyword">instanceof</span> <span class="token class-name">Round</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7ED3\u679C\u80AF\u5B9A\u8FD8\u662F true\uFF0C\u56E0\u4E3A\u4F9D\u7136\u7B26\u5408 <code>is-a</code> \u7684\u5173\u7CFB\u3002\u90A3\u5982\u679C\u7C7B\u578B\u4E3A\u63A5\u53E3\u5462\uFF1F</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>circle <span class="token keyword">instanceof</span> <span class="token class-name">Shape</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7ED3\u679C\u4ECD\u7136\u4E3A true\uFF0C \u56E0\u4E3A\u4E5F\u7B26\u5408 <code>is-a</code> \u7684\u5173\u7CFB\u3002\u5982\u679C\u8981\u6BD4\u8F83\u7684\u5BF9\u8C61\u548C\u8981\u6BD4\u8F83\u7684\u7C7B\u578B\u4E4B\u95F4\u6CA1\u6709\u5173\u7CFB\uFF0C\u5F53\u7136\u662F\u4E0D\u80FD\u4F7F\u7528 instanceof \u8FDB\u884C\u6BD4\u8F83\u7684\u3002</p><p>\u4E3A\u4E86\u9A8C\u8BC1\u8FD9\u4E00\u70B9\uFF0C\u6211\u4EEC\u6765\u521B\u5EFA\u4E00\u4E2A\u5B9E\u73B0\u4E86 Shape \u4F46\u4E0E Circle \u65E0\u5173\u7684 Triangle \u7C7B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Triangle</span> <span class="token keyword">implements</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u65F6\u5019\uFF0C\u518D\u4F7F\u7528 instanceof \u8FDB\u884C\u6BD4\u8F83\u7684\u8BDD\uFF0C\u7F16\u8BD1\u5668\u5C31\u62A5\u9519\u4E86\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>circle <span class="token keyword">instanceof</span> <span class="token class-name">Triangle</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9519\u8BEF\u4FE1\u606F\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Inconvertible types; cannot cast &#39;com.itwanger.twentyfour.instanceof1.Circle&#39; to &#39;com.itwanger.twentyfour.instanceof1.Triangle&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u610F\u601D\u5C31\u662F\u7C7B\u578B\u4E0D\u5339\u914D\uFF0C\u4E0D\u80FD\u8F6C\u6362\uFF0C\u6211\u4EEC\u4F7F\u7528 instanceof \u6BD4\u8F83\u7684\u76EE\u7684\uFF0C\u4E5F\u5C31\u662F\u5E0C\u671B\u5982\u679C\u7ED3\u679C\u4E3A true \u7684\u65F6\u5019\u80FD\u8FDB\u884C\u7C7B\u578B\u8F6C\u6362\u3002\u4F46\u663E\u7136 Circle \u4E0D\u80FD\u8F6C\u4E3A Triangle\u3002</p><p>\u7F16\u8BD1\u5668\u5DF2\u7ECF\u63D0\u524D\u5E2E\u6211\u4EEC\u9884\u77E5\u4E86\uFF0C\u5F88\u806A\u660E\u3002</p><p>Java \u662F\u4E00\u95E8\u9762\u5411\u5BF9\u8C61\u7684\u7F16\u7A0B\u8BED\u8A00\uFF0C\u4E5F\u5C31\u610F\u5473\u7740\u9664\u4E86\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF0C\u6240\u6709\u7684\u7C7B\u90FD\u4F1A\u9690\u5F0F\u7EE7\u627F Object \u7C7B\u3002\u6240\u4EE5\u4E0B\u9762\u7684\u7ED3\u679C\u80AF\u5B9A\u4E5F\u4F1A\u8F93\u51FA true\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Thread</span> thread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>thread <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u201C\u90A3\u5982\u679C\u5BF9\u8C61\u4E3A null \u5462\uFF1F\u201D\u4E09\u59B9\u8FD9\u65F6\u5019\u63D2\u8BDD\u4E86\u3002</p><p>\u201C\u8FD9\u4E2A\u8FD8\u771F\u7684\u662F\u4E00\u4E2A\u597D\u95EE\u9898\u554A\u3002\u201D\u6211\u5FCD\u4E0D\u4F4F\u5BF9\u4E09\u59B9\u7AD6\u4E86\u4E00\u4E2A\u5927\u62C7\u6307\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53EA\u6709\u5BF9\u8C61\u624D\u4F1A\u6709 null \u503C\uFF0C\u6240\u4EE5\u7F16\u8BD1\u5668\u662F\u4E0D\u4F1A\u62A5\u9519\u7684\uFF0C\u53EA\u4E0D\u8FC7\uFF0C\u5BF9\u4E8E null \u6765\u8BF4\uFF0Cinstanceof \u7684\u7ED3\u679C\u4E3A false\u3002\u56E0\u4E3A\u6240\u6709\u7684\u5BF9\u8C61\u90FD\u53EF\u4EE5\u4E3A null\uFF0C\u6240\u4EE5\u4E5F\u4E0D\u597D\u786E\u5B9A null \u5230\u5E95\u5C5E\u4E8E\u54EA\u4E00\u4E2A\u7C7B\u3002</p><p>\u901A\u5E38\uFF0C\u6211\u4EEC\u662F\u8FD9\u6837\u4F7F\u7528 instanceof \u64CD\u4F5C\u7B26\u7684\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u5148\u5224\u65AD\u7C7B\u578B</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7136\u540E\u5F3A\u5236\u8F6C\u6362</span>
    <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> obj<span class="token punctuation">;</span>
    <span class="token comment">// \u7136\u540E\u624D\u80FD\u4F7F\u7528</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5148\u7528 instanceof \u8FDB\u884C\u7C7B\u578B\u5224\u65AD\uFF0C\u7136\u540E\u518D\u628A obj \u5F3A\u5236\u8F6C\u6362\u6210\u6211\u4EEC\u671F\u671B\u7684\u7C7B\u578B\u518D\u8FDB\u884C\u4F7F\u7528\u3002</p><p>JDK 16 \u7684\u65F6\u5019\uFF0Cinstanceof \u6A21\u5F0F\u5339\u914D\u8F6C\u4E86\u6B63\uFF0C\u610F\u5473\u7740\u4F7F\u7528 instanceof \u7684\u65F6\u5019\u66F4\u4FBF\u6377\u4E86\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C\u7C7B\u578B\u5339\u914D \u76F4\u63A5\u4F7F\u7528 s</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u76F4\u63A5\u5728 if \u6761\u4EF6\u5224\u65AD\u7C7B\u578B\u7684\u65F6\u5019\u6DFB\u52A0\u4E00\u4E2A\u53D8\u91CF\uFF0C\u5C31\u4E0D\u9700\u8981\u518D\u5F3A\u8F6C\u548C\u58F0\u660E\u65B0\u7684\u53D8\u91CF\u4E86\u3002</p><p>\u201C\u54C7\uFF0C\u8FD9\u6837\u5C31\u7B80\u6D01\u4E86\u5440\uFF01\u201D\u4E09\u59B9\u4E0D\u4EC5\u60CA\u53F9\u5230\uFF01</p><p>\u597D\u4E86\uFF0C\u5173\u4E8E instanceof \u64CD\u4F5C\u7B26\u6211\u4EEC\u5C31\u5148\u8BB2\u5230\u8FD9\u5427\uFF0C\u96BE\u662F\u4E00\u70B9\u90FD\u4E0D\u96BE\uFF0C\u5E0C\u671B\u5404\u4F4D\u540C\u5B66\u4E5F\u80FD\u591F\u5F88\u597D\u7684\u638C\u63E1\u3002</p><hr>`,44),d=a("\u6700\u8FD1\u6574\u7406\u4E86\u4E00\u4EFD\u725B\u903C\u7684\u5B66\u4E60\u8D44\u6599\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8EJava\u57FA\u7840\u90E8\u5206\uFF08JVM\u3001Java\u96C6\u5408\u6846\u67B6\u3001\u591A\u7EBF\u7A0B\uFF09\uFF0C\u8FD8\u56CA\u62EC\u4E86 "),r=n("strong",null,"\u6570\u636E\u5E93\u3001\u8BA1\u7B97\u673A\u7F51\u7EDC\u3001\u7B97\u6CD5\u4E0E\u6570\u636E\u7ED3\u6784\u3001\u8BBE\u8BA1\u6A21\u5F0F\u3001\u6846\u67B6\u7C7BSpring\u3001Netty\u3001\u5FAE\u670D\u52A1\uFF08Dubbo\uFF0C\u6D88\u606F\u961F\u5217\uFF09 \u7F51\u5173",-1),v=a(" \u7B49\u7B49\u7B49\u7B49\u2026\u2026\u8BE6\u60C5\u6233\uFF1A"),k={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},m=a("\u53EF\u4EE5\u8BF4\u662F2022\u5E74\u5168\u7F51\u6700\u5168\u7684\u5B66\u4E60\u548C\u627E\u5DE5\u4F5C\u7684PDF\u8D44\u6E90\u4E86"),g=n("p",null,[a("\u5173\u6CE8\u4E8C\u54E5\u7684\u539F\u521B\u516C\u4F17\u53F7 "),n("strong",null,"\u6C89\u9ED8\u738B\u4E8C"),a("\uFF0C\u56DE\u590D"),n("strong",null,"111"),a(" \u5373\u53EF\u514D\u8D39\u9886\u53D6\u3002")],-1),b=n("p",null,[n("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:""})],-1);function j(f,h){const s=t("ExternalLinkIcon");return p(),c("div",null,[u,n("p",null,[d,r,v,n("a",k,[m,o(s)])]),g,b])}var _=e(i,[["render",j],["__file","instanceof.html.vue"]]);export{_ as default};
