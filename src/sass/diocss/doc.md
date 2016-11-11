# 参考 类：
.container
.top-gap, .top-gap-big, .top-gap-0
.flex-left, .flex-center, .flex-right, .flex-top, .flex-middle, .flex-bottom
.flex-vertical
.unit, .unit-1-2, .unit-1-3, .unit-1-4, .unit-2-3, .unit-3-4, .unit-0
.units-gap
.scroll-view
.hide-on-mobile, show-on-mobile
.text-left, .text-center, text-right
.table
.form

# 元素：
内容分区
文本内容
内联文本语义
多媒体
表格内容
表单
内容分区
布局

使用 .container 创建一个包含所有内容的容器。
#layout
    <body>
    <div class="flex-center">
        <div class="container">
        <h1>Mobi.css</h1>
        </div>
    </div>
    </body>

#layout-with-side
<body>
  <div class="flex-center">
    <div class="container">
      <h1>Mobi.css</h1>
    </div>
    <aside class="hide-on-mobile" style="padding:0 28px;">
      <p>扫描可在手机中查看</p>
      <img src="path/to/qrcode.png"/>
    </aside>
  </div>
</body>
使用 <article>, <aside>, <footer>, <header>, <nav> 和 <section> 布局：
 

使用 .top-gap, .top-gap-big 和 .top-gap-0 覆盖 margin-top：
div.top-gap
p.top-gap-0
section.top-gap-big
<div class="top-gap site-box">div.top-gap</div>
<p class="top-gap-0 site-box">p.top-gap-0</p>
<section class="top-gap-big site-box">section.top-gap-big</section>
使用 .scroll-view 让块级元素可滑动：
琵琶行
作者：白居易
浔阳江头夜送客，枫叶荻花秋瑟瑟。
主人下马客在船，举酒欲饮无管弦。
醉不成欢惨将别，别时茫茫江浸月。
忽闻水上琵琶声，主人忘归客不发。
寻声暗问弹者谁？琵琶声停欲语迟。
移船相近邀相见，添酒回灯重开宴。
千呼万唤始出来，犹抱琵琶半遮面。
转轴拨弦三两声，未成曲调先有情。
弦弦掩抑声声思，似诉平生不得志。
低眉信手续续弹，说尽心中无限事。
轻拢慢捻抹复挑，初为霓裳后六幺。
大弦嘈嘈如急雨，小弦切切如私语。
嘈嘈切切错杂弹，大珠小珠落玉盘。
间关莺语花底滑，幽咽泉流冰下难。
冰泉冷涩弦凝绝，凝绝不通声暂歇。
别有幽愁暗恨生，此时无声胜有声。
银瓶乍破水浆迸，铁骑突出刀枪鸣。
曲终收拨当心画，四弦一声如裂帛。
东船西舫悄无言，唯见江心秋月白。
沉吟放拨插弦中，整顿衣裳起敛容。
自言本是京城女，家在虾蟆陵下住。
十三学得琵琶成，名属教坊第一部。
曲罢曾教善才服，妆成每被秋娘妒。
五陵年少争缠头，一曲红绡不知数。
钿头银篦击节碎，血色罗裙翻酒污。
今年欢笑复明年，秋月春风等闲度。
弟走从军阿姨死，暮去朝来颜色故。
门前冷落鞍马稀，老大嫁作商人妇。
商人重利轻别离，前月浮梁买茶去。
去来江口守空船，绕船月明江水寒。
夜深忽梦少年事，梦啼妆泪红阑干。
我闻琵琶已叹息，又闻此语重唧唧。
同是天涯沦落人，相逢何必曾相识！
我从去年辞帝京，谪居卧病浔阳城。
浔阳地僻无音乐，终岁不闻丝竹声。
住近湓江地低湿，黄芦苦竹绕宅生。
其间旦暮闻何物？杜鹃啼血猿哀鸣。
春江花朝秋月夜，往往取酒还独倾。
岂无山歌与村笛？呕哑嘲哳难为听。
今夜闻君琵琶语，如听仙乐耳暂明。
莫辞更坐弹一曲，为君翻作琵琶行。
感我此言良久立，却坐促弦弦转急。
凄凄不似向前声，满座重闻皆掩泣。
座中泣下谁最多？江州司马青衫湿。
<div class="top-gap scroll-view" style="max-height:400px;">
  <h2>琵琶行</h2>
  <address>作者：白居易</address>
  <p>
    浔阳江头夜送客，枫叶荻花秋瑟瑟。<br/>
    主人下马客在船，举酒欲饮无管弦。<br/>
    醉不成欢惨将别，别时茫茫江浸月。<br/>
    忽闻水上琵琶声，主人忘归客不发。<br/>
    寻声暗问弹者谁？琵琶声停欲语迟。<br/>
    移船相近邀相见，添酒回灯重开宴。<br/>
    千呼万唤始出来，犹抱琵琶半遮面。<br/>
    转轴拨弦三两声，未成曲调先有情。<br/>
    弦弦掩抑声声思，似诉平生不得志。<br/>
    低眉信手续续弹，说尽心中无限事。<br/>
    轻拢慢捻抹复挑，初为霓裳后六幺。<br/>
    大弦嘈嘈如急雨，小弦切切如私语。<br/>
    嘈嘈切切错杂弹，大珠小珠落玉盘。<br/>
    间关莺语花底滑，幽咽泉流冰下难。<br/>
    冰泉冷涩弦凝绝，凝绝不通声暂歇。<br/>
    别有幽愁暗恨生，此时无声胜有声。<br/>
    银瓶乍破水浆迸，铁骑突出刀枪鸣。<br/>
    曲终收拨当心画，四弦一声如裂帛。<br/>
    东船西舫悄无言，唯见江心秋月白。<br/>
    沉吟放拨插弦中，整顿衣裳起敛容。<br/>
    自言本是京城女，家在虾蟆陵下住。<br/>
    十三学得琵琶成，名属教坊第一部。<br/>
    曲罢曾教善才服，妆成每被秋娘妒。<br/>
    五陵年少争缠头，一曲红绡不知数。<br/>
    钿头银篦击节碎，血色罗裙翻酒污。<br/>
    今年欢笑复明年，秋月春风等闲度。<br/>
    弟走从军阿姨死，暮去朝来颜色故。<br/>
    门前冷落鞍马稀，老大嫁作商人妇。<br/>
    商人重利轻别离，前月浮梁买茶去。<br/>
    去来江口守空船，绕船月明江水寒。<br/>
    夜深忽梦少年事，梦啼妆泪红阑干。<br/>
    我闻琵琶已叹息，又闻此语重唧唧。<br/>
    同是天涯沦落人，相逢何必曾相识！<br/>
    我从去年辞帝京，谪居卧病浔阳城。<br/>
    浔阳地僻无音乐，终岁不闻丝竹声。<br/>
    住近湓江地低湿，黄芦苦竹绕宅生。<br/>
    其间旦暮闻何物？杜鹃啼血猿哀鸣。<br/>
    春江花朝秋月夜，往往取酒还独倾。<br/>
    岂无山歌与村笛？呕哑嘲哳难为听。<br/>
    今夜闻君琵琶语，如听仙乐耳暂明。<br/>
    莫辞更坐弹一曲，为君翻作琵琶行。<br/>
    感我此言良久立，却坐促弦弦转急。<br/>
    凄凄不似向前声，满座重闻皆掩泣。<br/>
    座中泣下谁最多？江州司马青衫湿。
  </p>
</div>
              
<div class="top-gap scroll-view">
  <div style="width:1024px;">
    <i class="fa fa-adjust" style="font-size:6rem;"></i>
    <i class="fa fa-anchor" style="font-size:6rem;"></i>
    <i class="fa fa-archive" style="font-size:6rem;"></i>
    <i class="fa fa-area-chart" style="font-size:6rem;"></i>
    <i class="fa fa-arrows" style="font-size:6rem;"></i>
    <i class="fa fa-asterisk" style="font-size:6rem;"></i>
    <i class="fa fa-at" style="font-size:6rem;"></i>
    <i class="fa fa-automobile" style="font-size:6rem;"></i>
    <i class="fa fa-ban" style="font-size:6rem;"></i>
    <i class="fa fa-bank" style="font-size:6rem;"></i>
    <i class="fa fa-bar-chart" style="font-size:6rem;"></i>
    <i class="fa fa-battery-0" style="font-size:6rem;"></i>
    <i class="fa fa-beer" style="font-size:6rem;"></i>
    <i class="fa fa-bell" style="font-size:6rem;"></i>
    <i class="fa fa-bicycle" style="font-size:6rem;"></i>
  </div>
</div>
使用 hide-on-mobile 或 show-on-mobile 让元素在手机中隐藏或显示：
这部分会在手机上隐藏。
<p class="hide-on-mobile">这部分会在手机上隐藏。</p>
<p class="show-on-mobile">这部分只会在手机上显示。</p>
单元
使用 unit, unit-1-2, unit-1-3, unit-1-4, unit-2-3, unit-3-4 和 unit-0 实现网格系统：
.unit
.unit
.unit
.unit
.unit
.unit
.unit
.unit
.unit
.unit
.unit
.unit
.unit
.unit
.unit-1-2
.unit-1-2
.unit-1-3
.unit-2-3
.unit-1-4
.unit-3-4
.unit-1-2
.unit-1-4
.unit-0
.unit
.unit
.unit-0
<div class="flex-left top-gap">
  <div class="unit site-box">.unit</div>
  <div class="unit site-box">.unit</div>
</div>
<div class="flex-left">
  <div class="unit site-box">.unit</div>
  <div class="unit site-box">.unit</div>
  <div class="unit site-box">.unit</div>
</div>
<div class="flex-left">
  <div class="unit site-box">.unit</div>
  <div class="unit site-box">.unit</div>
  <div class="unit site-box">.unit</div>
  <div class="unit site-box">.unit</div>
</div>
<div class="flex-left">
  <div class="unit site-box">.unit</div>
  <div class="unit site-box">.unit</div>
  <div class="unit site-box">.unit</div>
  <div class="unit site-box">.unit</div>
  <div class="unit site-box">.unit</div>
</div>
<div class="flex-left top-gap">
  <div class="unit-1-2 site-box">.unit-1-2</div>
  <div class="unit-1-2 site-box">.unit-1-2</div>
</div>
<div class="flex-left">
  <div class="unit-1-3 site-box">.unit-1-3</div>
  <div class="unit-2-3 site-box">.unit-2-3</div>
</div>
<div class="flex-left">
  <div class="unit-1-4 site-box">.unit-1-4</div>
  <div class="unit-3-4 site-box">.unit-3-4</div>
</div>
<div class="flex-left">
  <div class="unit-1-2 site-box">.unit-1-2</div>
  <div class="unit-1-4 site-box">.unit-1-4</div>
</div>
<div class="flex-left top-gap">
  <div class="unit-0 site-box">.unit-0</div>
  <div class="unit site-box">.unit</div>
</div>
<div class="flex-left">
  <div class="unit site-box">.unit</div>
  <div class="unit-0 site-box">.unit-0</div>
</div>
使用 units-gap 在 unit 之间添加空隙：
.unit-0
.unit
.unit
.unit-0
<div class="flex-left units-gap top-gap">
  <div class="unit-0 site-box">.unit-0</div>
  <div class="unit site-box">.unit</div>
</div>
<div class="flex-left units-gap">
  <div class="unit site-box">.unit</div>
  <div class="unit-0 site-box">.unit-0</div>
</div>
如果父元素中没有 units-gap 类，则无论子元素使不使用 unit-0 表现都将一致：
.unit-0
.unit
.unit
.unit-0
empty div
.unit
.unit
empty div
<div class="flex-left top-gap">
  <div class="unit-0 site-box">.unit-0</div>
  <div class="unit site-box">.unit</div>
</div>
<div class="flex-left">
  <div class="unit site-box">.unit</div>
  <div class="unit-0 site-box">.unit-0</div>
</div>
<div class="flex-left top-gap">
  <div class="site-box">empty div</div>
  <div class="unit site-box">.unit</div>
</div>
<div class="flex-left">
  <div class="unit site-box">.unit</div>
  <div class="site-box">empty div</div>
</div>
Flexbox
使用 flex-left, flex-center, flex-right, flex-top, flex-middle 和 flex-bottom 对齐块级元素：
.unit-1-3
.unit-1-3
.unit-1-3
.unit-1-3
.unit-1-3
.unit-1-3
.unit-1-3
<div class="flex-left site-box top-gap">
  <div class="unit-1-3 site-box">.unit-1-3</div>
</div>
<div class="flex-center site-box">
  <div class="unit-1-3 site-box">.unit-1-3</div>
</div>
<div class="flex-right site-box">
  <div class="unit-1-3 site-box">.unit-1-3</div>
</div>
<div class="flex-top site-box" style="height:60px;">
  <div class="unit-1-3 site-box">.unit-1-3</div>
</div>
<div class="flex-middle site-box" style="height:60px;">
  <div class="unit-1-3 site-box">.unit-1-3</div>
</div>
<div class="flex-bottom site-box" style="height:60px;">
  <div class="unit-1-3 site-box">.unit-1-3</div>
</div>
<div class="flex-center flex-middle site-box" style="height:60px;">
  <div class="unit-1-3 site-box">.unit-1-3</div>
</div>
使用 flex-vertical 实现垂直布局：
.unit-0
.unit
.unit-1-4
<div class="flex-vertical site-box top-gap" style="height:300px;">
  <div class="unit-0 site-box">.unit-0</div>
  <div class="unit site-box">.unit</div>
  <div class="unit-1-4 site-box">.unit-1-4</div>
</div>
对齐的功能也适用于垂直布局：
.unit-1-3
.unit-1-3
.unit-1-3
.unit-1-3
.unit-1-3
.unit-1-3
<div class="flex-vertical flex-left site-box top-gap" style="height:200px;">
  <div class="unit-1-3 site-box">.unit-1-3</div>
</div>
<div class="flex-vertical flex-center site-box" style="height:200px;">
  <div class="unit-1-3 site-box">.unit-1-3</div>
</div>
<div class="flex-vertical flex-right site-box" style="height:200px;">
  <div class="unit-1-3 site-box">.unit-1-3</div>
</div>
<div class="flex-vertical flex-top site-box" style="height:200px;">
  <div class="unit-1-3 site-box">.unit-1-3</div>
</div>
<div class="flex-vertical flex-middle site-box" style="height:200px;">
  <div class="unit-1-3 site-box">.unit-1-3</div>
</div>
<div class="flex-vertical flex-bottom site-box" style="height:200px;">
  <div class="unit-1-3 site-box">.unit-1-3</div>
</div>
标题
h1. Mobi.css
h2. Mobi.css
h3. Mobi.css
h4. Mobi.css
h5. Mobi.css
h6. Mobi.css
文本内容
无序列表
无序列表
嵌套
子无序列表
子无序列表
有序列表
有序列表
嵌套
子有序列表
子有序列表
Mobi.css
轻量灵活的移动端 CSS 框架。
Bootstrap
全世界最流行的移动端优先的响应式布局的前端框架。
<dl>
  <dt>Mobi.css</dt>
  <dd>轻量灵活的移动端 CSS 框架。</dd>
  <dt>Bootstrap</dt>
  <dd>全世界最流行的移动端优先的响应式布局的前端框架。</dd>
</dl>
// 使用 <pre><code></code></pre> 创建块级代码片段。
document.write('你好，世界');
使用 <blockquote> 创建块级引用。
<blockquote>
  <p>使用 &lt;blockquote&gt; 创建块级引用。</p>
</blockquote>
使用 <hr> 创建水平线分隔：
使用 <figure> 和 <figcaption> 创建相关联的图片和说明：
Mobi.css Logo
图片说明：Mobi.css 的标志
<figure>
  <img src="/assets/img/mobi-logo-512.png" alt="Mobi.css Logo"/>
  <figcaption>图片说明：Mobi.css 的标志</figcaption>
</figure>
内联文本语义
使用 class="text-left", class="text-center" 或 class="text-right" 对齐文本：
我是小雨
我愛你
你愛我嗎？
<div class="text-left top-gap">我是小雨</div>
<div class="text-center">我愛你</div>
<div class="text-right">你愛我嗎？</div>
使用 <a> 创建超链接。
使用 <strong> 创建重要的文本。
使用 <b> 创建粗体文本。
使用 <em> 创建强调的文本。
使用 <i> 创建斜体文本。
使用 <del> 创建从文档中被删除的文本。
使用 <s> 创建带中划线的文本。
使用 <ins> 创建从文档中被添加的文本。
使用 <u> 创建带下划线的文本。
使用 <small> 创建缩小的文本。
使用 <sub> 创建下标。
使用 <sup> 创建上标。
使用 <code> 创建行内代码片段：alert(‘你好，世界’);。
使用 <kbd> 创建键盘输入：Ctrl + D。
使用 <samp> 创建计算机输出的内容：Build passed!。
使用 <br/> 创建换
行。
使用 <span> 创建行内容器：我爱 Mobi.css。
使用 <abbr> 创建缩写。
使用 `<abbr>` 创建<abbr title="abbr 元素表示缩写，可以包含一段对齐的描述">缩写</abbr>。
使用 <cite> 创建引用的元素：Mobi.css。
<cite><a href="http://getmobicss.com">Mobi.css</a></cite>
使用 <data> 关联一段文本和一个计算机能识别的值：Beijing。
<data value="100000">Beijing</data>
使用 <time> 创建时间：九月三十日。
<time datetime="2016-09-30T00:00">九月三十日</time>
使用 <q> 行内引用：我爱 Mobi.css，xcatliu 说到。
<q>我爱 Mobi.css</q>，xcatliu 说到。
使用 <ruby>, <rp>, <rt> 创建带音标的文本：
我 lǎn 去 de 洗 lǐ 澡 nǐ 了 le
<ruby>
  我 <rp>(</rp><rt>lǎn</rt><rp>)</rp>
  去 <rp>(</rp><rt>de</rt><rp>)</rp>
  洗 <rp>(</rp><rt>lǐ</rt><rp>)</rp>
  澡 <rp>(</rp><rt>nǐ</rt><rp>)</rp>
  了 <rp>(</rp><rt>le</rt><rp>)</rp>
</ruby>
使用 <bdi> 创建与外界不同方向的文本。
使用 <bdo> 覆盖当前文本方向。
与外界<bdi>不同方向</bdi>的文本。  
<bdo dir="rtl">覆盖</bdo>当前文本方向。
<bdi> 在 iOS 和 Chrome 中都不可用。请不要在你的项目中使用它。可以使用 <bdo>。
使用 <dfn> 创建对一个概念的定义：
Mobi.css 是一个轻量灵活的移动端 CSS 框架。
什么是 Mobi.css？你可以在这里找到定义。
<dfn id="dfn-mobicss">Mobi.css</dfn> 是一个轻量灵活的移动端 CSS 框架。  
什么是 Mobi.css？你可以在<a href="#dfn-mobicss">这里</a>找到定义。
使用 <var> 创建数学表达式或者程序中的变量：
一个简单的等式：x = y + 2
一个简单的等式：<var>x</var> = <var>y</var> + 2
使用 <wbr/> 创建允许浏览器断行的占位符：
这是一段很长很长很长很长很长非常长非常长非常长非常长非常长长的无可救药长的无可救药长的无可救药长的无可救药长的无可救药的话。
这是一段很长<wbr/>很长<wbr/>很长<wbr/>很长<wbr/>很长<wbr/>非常长<wbr/>非常长<wbr/>非常长<wbr/>非常长<wbr/>非常长<wbr/>长的无可救药<wbr/>长的无可救药<wbr/>长的无可救药<wbr/>长的无可救药<wbr/>长的无可救药的话。
多媒体
Mobi.css Logo

0:00
/ 0:22


 <audio controls>
  <source src="/assets/croatian-rhapsody.mp3" type="audio/mpeg">
  你的浏览器不支持 audio 元素。
</audio>

0:00
/ 0:10



 <video controls>
  <source src="/assets/big-buck-bunny.mp4" type="video/mp4">
  你的浏览器不支持 video 元素。
</video>

<iframe width="100%" height="240" src="http://player.youku.com/embed/XNDM5ODk1NzUy" frameborder="0" allowfullscreen></iframe>
表格内容
名称	作者	开发语言	大小	特性	GitHub
Mobi.css	xcatliu	Sass	3.6kb		Mobi.css GitHub
Skeleton	Dave Gamache	Css	3.2kb		Skeleton GitHub
Pure.css	Yahoo Inc.	Css	4.6kb		Pure.css GitHub
Bootstrap v4	Twitter	Sass, JavaScript	20.1kb		Bootstrap v4 GitHub
Ratchet	这个项目即将死亡。
<div class="scroll-view">
  <table class="table">
    <thead>
      <tr><th>名称</th><th>作者</th><th>开发语言</th><th>大小</th><th>特性</th><th>GitHub</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="http://getmobicss.com/">Mobi.css</a></td>
        <td><a href="https://github.com/xcatliu">xcatliu</a></td>
        <td>Sass</td>
        <td>3.6kb</td>
        <td><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></td>
        <td><a href="https://github.com/xcatliu/mobi.css">Mobi.css GitHub</a></td>
      </tr>
      <tr>
        <td><a href="http://getskeleton.com/">Skeleton</a></td>
        <td><a href="https://github.com/dhg">Dave Gamache</a></td>
        <td>Css</td>
        <td>3.2kb</td>
        <td><i class="fa fa-star"></i></td>
        <td><a href="https://github.com/dhg/Skeleton/">Skeleton GitHub</a></td>
      </tr>
      <tr>
        <td><a href="http://purecss.io/">Pure.css</a></td>
        <td><a href="https://github.com/yahoo">Yahoo Inc.</a></td>
        <td>Css</td>
        <td>4.6kb</td>
        <td><i class="fa fa-star"></i><i class="fa fa-star"></i></td>
        <td><a href="https://github.com/yahoo/pure/">Pure.css GitHub</a></td>
      </tr>
      <tr>
        <td><a href="http://v4-alpha.getbootstrap.com/">Bootstrap v4</a></td>
        <td><a href="https://github.com/twbs">Twitter</a></td>
        <td>Sass, JavaScript</td>
        <td>20.1kb</td>
        <td><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></td>
        <td><a href="https://github.com/twbs/bootstrap/tree/v4-dev">Bootstrap v4 GitHub</a></td>
      </tr>
      <tr>
        <td><a href="http://goratchet.com/"><s>Ratchet</s></a></td>
        <td colspan="5"><a href="https://github.com/twbs/ratchet/issues/792"><s>这个项目即将死亡。</s></a></td>
      </tr>
    </tbody>
  </table>
</div>
表格标题
头部 1	头部 2	头部 3
1.1	1.2	1.3
2.1	2.2	2.3
尾部 1	尾部 2	尾部 3
<div class="scroll-view">
  <table class="table">
    <caption>表格标题</caption>
    <colgroup>
      <unit style="background-color:rgba(255, 0, 0, 0.1);"/>
      <unit span="2" style="background-color:rgba(255, 255, 0, 0.1);"/>
    </colgroup>
    <thead>
      <tr>
        <th>头部 1</th>
        <th>头部 2</th>
        <th>头部 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1.1</td>
        <td>1.2</td>
        <td>1.3</td>
      </tr>
      <tr>
        <td>2.1</td>
        <td>2.2</td>
        <td>2.3</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>尾部 1</td>
        <td>尾部 2</td>
        <td>尾部 3</td>
      </tr>
    </tfoot>
  </table>
</div>
表单
文本输入框

input[type=text]

input[type=password]

input[type=email]

input[type=search]

input[type=url]

input[type=tel]

input[type=number]

textarea
<input type="text" placeholder="input[type=text]"/>
<input type="password" placeholder="input[type=password]"/>
<input type="email" placeholder="input[type=email]"/>
<input type="search" placeholder="input[type=search]"/>
<input type="url" placeholder="input[type=url]"/>
<input type="tel" placeholder="input[type=tel]"/>
<input type="number" placeholder="input[type=number]"/>
<textarea placeholder="textarea"></textarea>
单选框和复选框
男
女
我同意条款。
<label class="flex-middle"><input type="radio" name="gender"/>男</label>
<label class="flex-middle"><input type="radio" name="gender"/>女</label>
<label class="flex-middle"><input type="checkbox"/>我同意条款。</label>
选择框

<select>
  <option disabled selected value> -- 请选择 -- </option>
  <option>中国</option>
  <option>美国</option>
</select>

<select>
  <optgroup label="中国">
    <option>北京</option>
    <option>上海</option>
  </optgroup>
  <optgroup label="美国">
    <option>三藩市</option>
    <option>西雅图</option>
    <option>纽约</option>
  </optgroup>
</select>

中国
北京上海
美国
三藩市西雅图纽约
<select multiple>
  <optgroup label="中国">
    <option>北京</option>
    <option>上海</option>
  </optgroup>
  <optgroup label="美国">
    <option>三藩市</option>
    <option>西雅图</option>
    <option>纽约</option>
  </optgroup>
</select>
数据列表
请选择一个浏览器： 
<datalist> 在 iOS 中不支持。不要使用它。
文件上传
选择文件
<input type="file"/>
按钮
.btn
.btn.btn-primary
.btn.btn-danger
<input type="button" class="btn" value=".btn"/>
<input type="button" class="btn btn-primary" value=".btn.btn-primary"/>
<input type="button" class="btn btn-danger" value=".btn.btn-danger"/>
.btn
.btn.btn-primary
.btn.btn-danger
<input type="reset" class="btn" value=".btn"/>
<input type="reset" class="btn btn-primary" value=".btn.btn-primary"/>
<input type="reset" class="btn btn-danger" value=".btn.btn-danger"/>
.btn
.btn.btn-primary
.btn.btn-danger
<input type="submit" class="btn" value=".btn"/>
<input type="submit" class="btn btn-primary" value=".btn.btn-primary"/>
<input type="submit" class="btn btn-danger" value=".btn.btn-danger"/>
.btn
.btn.btn-primary
.btn.btn-danger
<button type="button" class="btn">.btn</button>
<button type="button" class="btn btn-primary">.btn.btn-primary</button>
<button type="button" class="btn btn-danger">.btn.btn-danger</button>
.btn
.btn.btn-primary
.btn.btn-danger
<button type="reset" class="btn">.btn</button>
<button type="reset" class="btn btn-primary">.btn.btn-primary</button>
<button type="reset" class="btn btn-danger">.btn.btn-danger</button>
.btn
.btn.btn-primary
.btn.btn-danger>
<button type="submit" class="btn">.btn</button>
<button type="submit" class="btn btn-primary">.btn.btn-primary</button>
<button type="submit" class="btn btn-danger">.btn.btn-danger></button>
.btn
.btn.btn-primary
.btn.btn-danger
<a href="javascript:void(0);" class="btn">.btn</a>
<a href="javascript:void(0);" class="btn btn-primary">.btn.btn-primary</a>
<a href="javascript:void(0);" class="btn btn-danger">.btn.btn-danger</a>
日期输入框

--:--

---- 年第 -- 周

----年--月

 年 /月/日

 年 /月/日 --:--
<input type="time"/>
<input type="week"/>
<input type="month"/>
<input type="date"/>
<input type="datetime-local"/>
所有日期输入框在 iOS 中都很丑陋，并且他们的样式无法修改，使用需谨慎。不建议在你的项目中使用它们。
[type=week] 在 iOS 中不支持。不要使用它。
其他输入框


xcatliu
<input type="color"/>
<input type="range" min="1" max="99" step="2"/>
<input type="image" src="/assets/img/xcatliu.png" alt="xcatliu" width="64"/>
<input type="hidden"/>
[type=color] 在 iOS 中不支持。不要使用它。

 <meter min="0" max="100" value="37">37 度</meter>
<meter> 在 iOS 中不支持。不要使用它。

+

10
=
60
<form class="form" oninput="result.value=parseInt(a.value)+parseInt(b.value)">
  <div class="flex-left top-gap">
    <div class="unit flex-middle">
      <input class="top-gap-0" type="range" name="b" value="50" max="80" />
    </div>
    <div class="flex-middle">+</div>
    <div class="unit flex-middle">
      <input class="top-gap-0" type="number" name="a" value="10" />
    </div>
    <div class="flex-middle">=</div>
    <div class="flex-middle" style="padding:0 15px 0 7px;"><output name="result">60</output></div>
  </div>
</form>

<progress class="top-gap" value="70" max="100">70 %</progress>
禁用和只读

input[disabled]

input[readonly]

textarea[disabled]

textarea[readonly]
<input type="text" disabled placeholder="input[disabled]"/>
<input type="text" readonly value="input[readonly]"/>
<textarea disabled placeholder="textarea[disabled]"></textarea>
<textarea readonly>textarea[readonly]</textarea>
男
女
我同意条款。
<label class="flex-middle"><input type="radio" name="gender" checked disabled/><span disabled>男</span></label>
<label class="flex-middle"><input type="radio" name="gender" disabled/><span disabled>女</span></label>
<label class="flex-middle"><input type="checkbox" disabled/><span disabled>我同意条款。</span></label>
单选框和复选框不能设置为只读。

<select disabled>
  <option disabled selected value> -- 请选择 -- </option>
  <option>中国</option>
  <option>美国</option>
</select>
选择框不能设置为只读。
选择文件
<input type="file" disabled/>
文件上传控件不能设置为只读。
.btn
.btn.btn-primary
.btn.btn-danger
<input type="button" class="btn" value=".btn" disabled/>
<input type="button" class="btn btn-primary" value=".btn.btn-primary" disabled/>
<input type="button" class="btn btn-danger" value=".btn.btn-danger" disabled/>
.btn
.btn.btn-primary
.btn.btn-danger
<a href="javascript:void(0);" class="btn" disabled>.btn</a>
<a href="javascript:void(0);" class="btn btn-primary" disabled>.btn.btn-primary</a>
<a href="javascript:void(0);" class="btn btn-danger" disabled>.btn.btn-danger</a>
按钮不能设置为只读。

 年 /月/日 --:--

2016/12/31 12:59
<input type="datetime-local" disabled/>
<input type="datetime-local" readonly value="2016-12-31T12:59"/>


xcatliu

<input type="color" disabled/>
<input type="range" min="1" max="99" step="2" disabled/>
<input type="image" src="/assets/img/xcatliu.png" alt="xcatliu" width="64" disabled/>
<input type="hidden" disabled/>
<input type="range" min="1" max="99" step="2" value="15" readonly/>
[type=image], [type=color] 和 [type=hidden] 不能设置为只读。
表单中的字段集
基本信息

姓名

年龄
<fieldset>
  <legend>基本信息</legend>
  <input type="text" placeholder="姓名">
  <input type="number" placeholder="年龄">
</fieldset>