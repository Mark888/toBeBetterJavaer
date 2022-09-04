import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o,c,a as n,b as p,d as s,e as l}from"./app.545bdd96.js";const i={},u=s("\u5728Java\u4E2D\uFF0C\u6211\u4EEC\u4E00\u822C\u90FD\u4F1A\u4F7F\u7528\u5230Map\uFF0C\u6BD4\u5982"),k={href:"https://tobebetterjavaer.com/collection/hashmap.html",target:"_blank",rel:"noopener noreferrer"},r=s("HashMap"),d=s("\u8FD9\u6837\u7684\u5177\u4F53\u5B9E\u73B0\u3002\u66F4\u9AD8\u7EA7\u4E00\u70B9\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u4F7F\u7528WeakHashMap\u3002"),m=l(`<p>WeakHashMap\u5176\u5B9E\u548CHashMap\u5927\u591A\u6570\u884C\u4E3A\u662F\u4E00\u6837\u7684\uFF0C\u53EA\u662FWeakHashMap\u4E0D\u4F1A\u963B\u6B62GC\u56DE\u6536key\u5BF9\u8C61\uFF08\u4E0D\u662Fvalue\uFF09\uFF0C\u90A3\u4E48WeakHashMap\u662F\u600E\u4E48\u505A\u5230\u7684\u5462\uFF0C\u8FD9\u5C31\u662F\u6211\u4EEC\u7814\u7A76\u7684\u4E3B\u8981\u95EE\u9898\u3002</p><p>\u5728\u5F00\u59CBWeakHashMap\u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u8981\u5BF9\u5F31\u5F15\u7528\u6709\u4E00\u5B9A\u7684\u4E86\u89E3\u3002</p><p>\u5728Java\u4E2D\uFF0C\u6709\u56DB\u79CD\u5F15\u7528\u7C7B\u578B</p><ul><li>\u5F3A\u5F15\u7528(Strong Reference)\uFF0C\u6211\u4EEC\u6B63\u5E38\u7F16\u7801\u65F6\u9ED8\u8BA4\u7684\u5F15\u7528\u7C7B\u578B\uFF0C\u5F3A\u5E94\u7528\u4E4B\u6240\u4EE5\u4E3A\u5F3A\uFF0C\u662F\u56E0\u4E3A\u5982\u679C\u4E00\u4E2A\u5BF9\u8C61\u5230GC Roots\u5F3A\u5F15\u7528\u53EF\u5230\u8FBE\uFF0C\u5C31\u53EF\u4EE5\u963B\u6B62GC\u56DE\u6536\u8BE5\u5BF9\u8C61</li><li>\u8F6F\u5F15\u7528\uFF08Soft Reference\uFF09\u963B\u6B62GC\u56DE\u6536\u7684\u80FD\u529B\u76F8\u5BF9\u5F31\u4E00\u4E9B\uFF0C\u5982\u679C\u662F\u8F6F\u5F15\u7528\u53EF\u4EE5\u5230\u8FBE\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u5BF9\u8C61\u4F1A\u505C\u7559\u5728\u5185\u5B58\u66F4\u65F6\u95F4\u4E0A\u957F\u4E00\u4E9B\u3002\u5F53\u5185\u5B58\u4E0D\u8DB3\u65F6\u5783\u573E\u56DE\u6536\u5668\u624D\u4F1A\u56DE\u6536\u8FD9\u4E9B\u8F6F\u5F15\u7528\u53EF\u5230\u8FBE\u7684\u5BF9\u8C61</li><li>\u5F31\u5F15\u7528\uFF08WeakReference\uFF09\u65E0\u6CD5\u963B\u6B62GC\u56DE\u6536\uFF0C\u5982\u679C\u4E00\u4E2A\u5BF9\u8C61\u65F6\u5F31\u5F15\u7528\u53EF\u5230\u8FBE\uFF0C\u90A3\u4E48\u5728\u4E0B\u4E00\u4E2AGC\u56DE\u6536\u6267\u884C\u65F6\uFF0C\u8BE5\u5BF9\u8C61\u5C31\u4F1A\u88AB\u56DE\u6536\u6389\u3002</li><li>\u865A\u5F15\u7528\uFF08Phantom Reference\uFF09\u5341\u5206\u8106\u5F31\uFF0C\u5B83\u7684\u552F\u4E00\u4F5C\u7528\u5C31\u662F\u5F53\u5176\u6307\u5411\u7684\u5BF9\u8C61\u88AB\u56DE\u6536\u4E4B\u540E\uFF0C\u81EA\u5DF1\u88AB\u52A0\u5165\u5230\u5F15\u7528\u961F\u5217\uFF0C\u7528\u4F5C\u8BB0\u5F55\u8BE5\u5F15\u7528\u6307\u5411\u7684\u5BF9\u8C61\u5DF2\u88AB\u9500\u6BC1</li></ul><p>\u8FD9\u5176\u4E2D\u8FD8\u6709\u4E00\u4E2A\u6982\u5FF5\u53EB\u505A\u5F15\u7528\u961F\u5217(Reference Queue)</p><ul><li>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u4E00\u4E2A\u5BF9\u8C61\u6807\u8BB0\u4E3A\u5783\u573E\uFF08\u5E76\u4E0D\u4EE3\u8868\u56DE\u6536\u4E86\uFF09\u540E\uFF0C\u4F1A\u52A0\u5165\u5230\u5F15\u7528\u961F\u5217\u3002</li><li>\u5BF9\u4E8E\u865A\u5F15\u7528\u6765\u8BF4\uFF0C\u5B83\u6307\u5411\u7684\u5BF9\u8C61\u4F1A\u53EA\u6709\u88AB\u56DE\u6536\u540E\u624D\u4F1A\u52A0\u5165\u5F15\u7528\u961F\u5217\uFF0C\u6240\u4EE5\u53EF\u4EE5\u7528\u4F5C\u8BB0\u5F55\u8BE5\u5F15\u7528\u6307\u5411\u7684\u5BF9\u8C61\u662F\u5426\u56DE\u6536\u3002</li></ul><h2 id="weakhashmap\u5982\u4F55\u4E0D\u963B\u6B62\u5BF9\u8C61\u56DE\u6536\u5462" tabindex="-1"><a class="header-anchor" href="#weakhashmap\u5982\u4F55\u4E0D\u963B\u6B62\u5BF9\u8C61\u56DE\u6536\u5462" aria-hidden="true">#</a> WeakHashMap\u5982\u4F55\u4E0D\u963B\u6B62\u5BF9\u8C61\u56DE\u6536\u5462</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">WeakReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span>
  <span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> hash<span class="token punctuation">;</span>
  <span class="token keyword">boolean</span> isNull<span class="token punctuation">;</span>
  <span class="token class-name">V</span> value<span class="token punctuation">;</span>
  <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> next<span class="token punctuation">;</span>
  <span class="token keyword">interface</span> <span class="token class-name">Type</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">R</span><span class="token punctuation">,</span> <span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token class-name">R</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> entry<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token class-name">Entry</span><span class="token punctuation">(</span><span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token class-name">V</span> object<span class="token punctuation">,</span> <span class="token class-name">ReferenceQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">&gt;</span></span> queue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> queue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  isNull <span class="token operator">=</span> key <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  hash <span class="token operator">=</span> isNull <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> key<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  value <span class="token operator">=</span> object<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u6E90\u7801\u6240\u793A\uFF0C</p><ul><li>WeakHashMap\u7684Entry\u7EE7\u627F\u4E86WeakReference\u3002</li><li>\u5176\u4E2DKey\u4F5C\u4E3A\u4E86WeakReference\u6307\u5411\u7684\u5BF9\u8C61</li><li>\u56E0\u6B64WeakHashMap\u5229\u7528\u4E86WeakReference\u7684\u673A\u5236\u6765\u5B9E\u73B0\u4E0D\u963B\u6B62GC\u56DE\u6536Key</li></ul><h2 id="\u5982\u4F55\u5220\u9664\u88AB\u56DE\u6536\u7684key\u6570\u636E\u5462" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5220\u9664\u88AB\u56DE\u6536\u7684key\u6570\u636E\u5462" aria-hidden="true">#</a> \u5982\u4F55\u5220\u9664\u88AB\u56DE\u6536\u7684key\u6570\u636E\u5462</h2><p>\u5728Javadoc\u4E2D\u5173\u4E8EWeakHashMap\u6709\u8FD9\u6837\u7684\u63CF\u8FF0\uFF0C\u5F53key\u4E0D\u518D\u5F15\u7528\u65F6\uFF0C\u5176\u5BF9\u5E94\u7684key/value\u4E5F\u4F1A\u88AB\u79FB\u9664\u3002</p><p>\u90A3\u4E48\u662F\u5982\u4F55\u79FB\u9664\u7684\u5462\uFF0C\u8FD9\u91CC\u6211\u4EEC\u901A\u5E38\u6709\u4E24\u79CD\u5047\u8BBE\u7B56\u7565</p><ul><li>\u5F53\u5BF9\u8C61\u88AB\u56DE\u6536\u7684\u65F6\u5019\uFF0C\u8FDB\u884C\u901A\u77E5</li><li>WeakHashMap\u8F6E\u8BE2\u5904\u7406\u65F6\u6548\u7684Entry</li></ul><p>\u800CWeakHashMap\u91C7\u7528\u7684\u662F\u8F6E\u8BE2\u7684\u5F62\u5F0F\uFF0C\u5728\u5176put/get/size\u7B49\u65B9\u6CD5\u8C03\u7528\u7684\u65F6\u5019\u90FD\u4F1A\u9884\u5148\u8C03\u7528\u4E00\u4E2Apoll\u7684\u65B9\u6CD5\uFF0C\u6765\u68C0\u67E5\u5E76\u5220\u9664\u5931\u6548\u7684Entry</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> toRemove<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>toRemove <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span> referenceQueue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">removeEntry</span><span class="token punctuation">(</span>toRemove<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">d</span><span class="token punctuation">(</span>LOGTAG<span class="token punctuation">,</span> <span class="token string">&quot;removeEntry=&quot;</span> <span class="token operator">+</span> toRemove<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3A\u4EC0\u4E48\u6CA1\u6709\u4F7F\u7528\u770B\u4F3C\u66F4\u597D\u7684\u901A\u77E5\u5462\uFF0C\u6211\u60F3\u662F\u56E0\u4E3A\u5728Java\u4E2D\u6CA1\u6709\u4E00\u4E2A\u53EF\u9760\u7684\u901A\u77E5\u56DE\u8C03\uFF0C\u6BD4\u5982\u5927\u5BB6\u5E38\u8BF4\u7684finalize\u65B9\u6CD5\uFF0C\u5176\u5B9E\u4E5F\u4E0D\u662F\u6807\u51C6\u7684\uFF0C\u4E0D\u540C\u7684JVM\u53EF\u4EE5\u5B9E\u73B0\u4E0D\u540C\uFF0C\u751A\u81F3\u662F\u4E0D\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\u3002</p><p>\u5F53\u7136\u9664\u4E86\u5355\u7EAF\u7684\u770B\u6E90\u7801\uFF0C\u8FDB\u884C\u5408\u7406\u7684\u9A8C\u8BC1\u662F\u68C0\u9A8C\u5206\u6790\u6B63\u786E\u7684\u4E00\u4E2A\u91CD\u8981\u65B9\u6CD5\u3002</p><p>\u8FD9\u91CC\u9996\u5148\uFF0C\u6211\u4EEC\u5B9A\u4E49\u4E00\u4E2AMyObject\u7C7B\uFF0C\u5904\u7406\u4E00\u4E0Bfinalize\u65B9\u6CD5\uFF08\u5728\u6211\u7684\u6D4B\u8BD5\u673A\u4E0A\u53EF\u4EE5\u6B63\u5E38\u8C03\u7528\uFF0C\u4EC5\u4EC5\u505A\u4E3A\u8F85\u52A9\u9A8C\u8BC1\u624B\u6BB5\uFF09</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">MyObject</span><span class="token punctuation">(</span>val id<span class="token operator">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token class-name">Any</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">protected</span> fun <span class="token function">finalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">i</span><span class="token punctuation">(</span><span class="token string">&quot;MainActivity&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Object($id) finalize method is called&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u662F\u8C03\u7528\u8005\u7684\u4EE3\u7801\uFF0C\u5982\u4E0B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">private</span> val weakHashMap <span class="token operator">=</span> <span class="token class-name">WeakHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Any</span><span class="token punctuation">,</span> <span class="token class-name">Int</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token keyword">var</span> count <span class="token operator">:</span> <span class="token class-name">Int</span> <span class="token operator">=</span> <span class="token number">0</span>
 override fun <span class="token function">onCreate</span><span class="token punctuation">(</span>savedInstanceState<span class="token operator">:</span> <span class="token class-name">Bundle</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onCreate</span><span class="token punctuation">(</span>savedInstanceState<span class="token punctuation">)</span>
  <span class="token function">setContentView</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>layout<span class="token punctuation">.</span>activity_main<span class="token punctuation">)</span>
  <span class="token function">setSupportActionBar</span><span class="token punctuation">(</span>toolbar<span class="token punctuation">)</span>
  <span class="token function">dumpWeakInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  fab<span class="token punctuation">.</span>setOnClickListener <span class="token punctuation">{</span> view <span class="token operator">-&gt;</span>
  <span class="token comment">//System.gc()// this seldom works use Android studio force gc stop</span>
  weakHashMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">MyObject</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span>
  count <span class="token operator">++</span>
  <span class="token function">dumpWeakInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token class-name">Snackbar</span><span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span>view<span class="token punctuation">,</span> <span class="token string">&quot;Replace with your own action&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Snackbar</span><span class="token punctuation">.</span>LENGTH_LONG<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">setAction</span><span class="token punctuation">(</span><span class="token string">&quot;Action&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
  fun <span class="token function">dumpWeakInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">i</span><span class="token punctuation">(</span><span class="token string">&quot;MainActivity&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dumpWeakInfo weakInfo.size=\${weakHashMap.size}&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u6309\u7167\u5982\u4E0B\u64CD\u4F5C</p><ul><li>\u70B9\u51FBfab\u63A7\u4EF6\uFF0C\u6BCF\u6B21\u5BF9WeakhashMap\u5BF9\u8C61\u589E\u52A0\u4E00\u4E2AEntry\uFF0C\u5E76\u6253\u5370WeakHashMap\u7684size \u6267\u884C3\u6B64</li><li>\u5728\u6CA1\u6709\u5F3A\u5236\u89E6\u53D1GC\u65F6\uFF0CWeakHashMap\u5BF9\u8C61size\u4E00\u76F4\u4F1A\u589E\u52A0</li><li>\u624B\u52A8\u51FA\u53D1Force GC\uFF0C\u6211\u4EEC\u4F1A\u770B\u5230MyObject\u6709finalize\u65B9\u6CD5\u88AB\u8C03\u7528</li><li>\u518D\u6B21\u70B9\u51FBfab\u7A7A\u95F4\uFF0C\u7136\u540E\u8F93\u51FA\u7684WeakHashMap size\u6025\u5267\u51CF\u5C11\u3002</li><li>\u540C\u6837\u6211\u4EEC\u6536\u5230\u5728WeakHashMap\u589E\u52A0\u7684\u65E5\u5FD7\u4E5F\u4F1A\u8F93\u51FA</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">I</span><span class="token operator">/</span><span class="token class-name">MainActivity</span><span class="token punctuation">(</span><span class="token number">10202</span><span class="token punctuation">)</span><span class="token operator">:</span> dumpWeakInfo weakInfo<span class="token punctuation">.</span>size<span class="token operator">=</span><span class="token number">1</span>
 <span class="token class-name">I</span><span class="token operator">/</span><span class="token class-name">MainActivity</span><span class="token punctuation">(</span><span class="token number">10202</span><span class="token punctuation">)</span><span class="token operator">:</span> dumpWeakInfo weakInfo<span class="token punctuation">.</span>size<span class="token operator">=</span><span class="token number">2</span>
 <span class="token class-name">I</span><span class="token operator">/</span><span class="token class-name">MainActivity</span><span class="token punctuation">(</span><span class="token number">10202</span><span class="token punctuation">)</span><span class="token operator">:</span> dumpWeakInfo weakInfo<span class="token punctuation">.</span>size<span class="token operator">=</span><span class="token number">3</span>
 <span class="token class-name">I</span><span class="token operator">/</span><span class="token class-name">MainActivity</span><span class="token punctuation">(</span><span class="token number">10202</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> finalize method is called
 <span class="token class-name">I</span><span class="token operator">/</span><span class="token class-name">MainActivity</span><span class="token punctuation">(</span><span class="token number">10202</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> finalize method is called
 <span class="token class-name">I</span><span class="token operator">/</span><span class="token class-name">MainActivity</span><span class="token punctuation">(</span><span class="token number">10202</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> finalize method is called
 <span class="token class-name">I</span><span class="token operator">/</span><span class="token class-name">WeakHashMap</span><span class="token punctuation">(</span><span class="token number">10202</span><span class="token punctuation">)</span><span class="token operator">:</span> removeEntry<span class="token operator">=</span><span class="token number">2</span>
 <span class="token class-name">I</span><span class="token operator">/</span><span class="token class-name">WeakHashMap</span><span class="token punctuation">(</span><span class="token number">10202</span><span class="token punctuation">)</span><span class="token operator">:</span> removeEntry<span class="token operator">=</span><span class="token number">0</span>
 <span class="token class-name">I</span><span class="token operator">/</span><span class="token class-name">WeakHashMap</span><span class="token punctuation">(</span><span class="token number">10202</span><span class="token punctuation">)</span><span class="token operator">:</span> removeEntry<span class="token operator">=</span><span class="token number">1</span>
 <span class="token class-name">I</span><span class="token operator">/</span><span class="token class-name">MainActivity</span><span class="token punctuation">(</span><span class="token number">10202</span><span class="token punctuation">)</span><span class="token operator">:</span> dumpWeakInfo weakInfo<span class="token punctuation">.</span>size<span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF1ASystem.gc()\u5E76\u4E0D\u4E00\u5B9A\u53EF\u4EE5\u5DE5\u4F5C,\u5EFA\u8BAE\u4F7F\u7528Android Studio\u7684Force GC</p>`,26),v=s("\u5B8C\u6574\u7684\u6D4B\u8BD5\u4EE3\u7801\u53EF\u4EE5\u8BBF\u95EE\u8FD9\u91CC "),b={href:"https://github.com/androidyue/WeakHashMapSample",target:"_blank",rel:"noopener noreferrer"},h=s("https://github.com/androidyue/WeakHashMapSample"),f=n("hr",null,null,-1),g=s("\u6700\u8FD1\u6574\u7406\u4E86\u4E00\u4EFD\u725B\u903C\u7684\u5B66\u4E60\u8D44\u6599\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8EJava\u57FA\u7840\u90E8\u5206\uFF08JVM\u3001Java\u96C6\u5408\u6846\u67B6\u3001\u591A\u7EBF\u7A0B\uFF09\uFF0C\u8FD8\u56CA\u62EC\u4E86 "),y=n("strong",null,"\u6570\u636E\u5E93\u3001\u8BA1\u7B97\u673A\u7F51\u7EDC\u3001\u7B97\u6CD5\u4E0E\u6570\u636E\u7ED3\u6784\u3001\u8BBE\u8BA1\u6A21\u5F0F\u3001\u6846\u67B6\u7C7BSpring\u3001Netty\u3001\u5FAE\u670D\u52A1\uFF08Dubbo\uFF0C\u6D88\u606F\u961F\u5217\uFF09 \u7F51\u5173",-1),_=s(" \u7B49\u7B49\u7B49\u7B49\u2026\u2026\u8BE6\u60C5\u6233\uFF1A"),M={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},w=s("\u53EF\u4EE5\u8BF4\u662F2022\u5E74\u5168\u7F51\u6700\u5168\u7684\u5B66\u4E60\u548C\u627E\u5DE5\u4F5C\u7684PDF\u8D44\u6E90\u4E86"),W=n("p",null,[s("\u5173\u6CE8\u4E8C\u54E5\u7684\u539F\u521B\u516C\u4F17\u53F7 "),n("strong",null,"\u6C89\u9ED8\u738B\u4E8C"),s("\uFF0C\u56DE\u590D"),n("strong",null,"111"),s(" \u5373\u53EF\u514D\u8D39\u9886\u53D6\u3002")],-1),j=n("p",null,[n("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:""})],-1);function H(I,E){const a=t("ExternalLinkIcon");return o(),c("div",null,[n("p",null,[u,n("a",k,[r,p(a)]),d]),m,n("p",null,[v,n("a",b,[h,p(a)])]),f,n("p",null,[g,y,_,n("a",M,[w,p(a)])]),W,j])}var A=e(i,[["render",H],["__file","WeakHashMap.html.vue"]]);export{A as default};
