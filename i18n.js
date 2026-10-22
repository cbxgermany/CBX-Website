/* CBX Germany · English / Chinese switch.
   English lives in the HTML. Text blocks are matched by their exact HTML; patterns cover repeated strings.
   Runs before script.js so headlines are translated before they are split into animated words. */
(function () {
  'use strict';

  var ZH = {
    // navigation and shared
    'Skip to content': '跳到正文',
    'How we help': '我们的服务',
    'Contact': '联系我们',
    'Our UGC Creators': '我们的UGC达人',
    'Our UGC Creators <span class="label" aria-hidden="true">→</span>': '我们的UGC达人 <span class="label" aria-hidden="true">→</span>',
    'Our UGC Creators <span class="arrow" aria-hidden="true">→</span>': '我们的UGC达人 <span class="arrow" aria-hidden="true">→</span>',
    'How it works': '合作流程',
    'CN → DE / EU': '中国 → 德国 / 欧洲',
    'Ready to brief a creator?': '准备好对接达人了吗？',
    'Let\'s talk<span class="dot">.</span>': '我们聊聊<span class="dot">。</span>',
    'Scan with WeChat to add us': '用微信扫码添加我们',
    'China': '中国',
    'Europe': '欧洲',
    'CN': '中国',
    'EU': '欧洲',
    'DE / EU': '德国 / 欧洲',
    'Legal Notice': '法律声明',
    'Privacy Policy': '隐私政策',

    // home: hero
    'CBX Germany / Film': 'CBX Germany / 品牌影片',
    '<span class="spec">0:34 · </span>Sound on': '<span class="spec">0:34 · </span>有声播放',
    'Play film · 0:34': '播放影片 · 0:34',
    'We bring Chinese brands to <em class="accent">Europe.</em>': '我们帮中国品牌<br><em class="accent">走进欧洲。</em>',
    'Store, ads and UGC creators. One team, from China to your customer.': '店铺、广告与UGC达人。一个团队，从中国直达你的客户。',
    'Watch the film': '观看影片',
    'Meet our UGC creators <span class="arrow" aria-hidden="true">→</span>': '认识我们的UGC达人 <span class="arrow" aria-hidden="true">→</span>',

    'The film': '品牌影片',

    // home: problem
    'The problem': '问题所在',
    '<b>00</b> / The problem': '<b>00</b> / 问题所在',
    'CN → EU': '中国 → 欧洲',
    '<span class="soft">Your product is <em class="accent">great.</em></span> But Europe has no idea you exist<span class="dot">.</span>': '<span class="soft">你的产品<em class="accent">很出色。</em></span>但欧洲还不知道你的存在<span class="dot">。</span>',
    'Many Chinese brands make things people in Europe would buy. Without a local shop and faces people trust, nobody here gets to see them. We fix that.': '很多中国品牌的产品，欧洲消费者其实愿意购买。但没有本地店铺，也没有他们信任的面孔，这里根本没人看得到。我们来解决这个问题。',

    // home: services
    '<b>01</b> / How we help': '<b>01</b> / 我们的服务',
    'Store · Ads · Creators · Live': '店铺 · 广告 · 达人 · 直播',
    'Everything your brand needs to <em class="accent">sell</em> in Europe<span class="dot">.</span>': '品牌在欧洲<em class="accent">卖货</em>所需的一切<span class="dot">。</span>',
    'Four services. One team that runs them for you.': '四项服务，一个团队帮你全部搞定。',
    'Layer · Store': '图层 · 店铺',
    'Layer · Ads': '图层 · 广告',
    'Layer · Creators': '图层 · 达人',
    'Layer · Live': '图层 · 直播',
    'Online store': '线上店铺',
    'We set up your Shopify store and a landing page for European buyers. In German and English, with prices in euro and the payment methods people here use.': '我们为你搭建Shopify店铺和面向欧洲买家的落地页。德语和英语双语，欧元标价，支持当地常用的支付方式。',
    'Ads': '广告投放',
    'We plan, launch and run your ad campaigns. The money comes from your own ad budget, we do the work.': '我们负责策划、上线并运营你的广告活动。预算来自你自己的广告账户，执行工作交给我们。',
    'UGC creators': 'UGC达人',
    'Western creators film short videos with your product. People trust a real face more than a banner.': '西方达人用你的产品拍摄短视频。比起横幅广告，人们更信任一张真实的面孔。',
    'Meet the creators →': '认识我们的达人 →',
    'Live commerce <span class="tagbox tagbox--orange">New</span>': '直播带货 <span class="tagbox tagbox--orange">新</span>',
    'Selling through livestreams, the way it already works in China. We are building this offer right now.': '通过直播卖货，就像在中国早已成熟的模式。这项服务我们正在搭建中。',

    // home: process
    '<b>02</b> / How it works': '<b>02</b> / 合作流程',
    'Brief · Setup · Launch': '需求 · 搭建 · 上线',
    'From brief to <em class="accent">launch.</em>': '从需求到<em class="accent">上线。</em>',
    'Step': '步骤',
    'Brief': '需求',
    'Start': '开始',
    'Tell us about your brand and your product. Together we decide where to start.': '告诉我们你的品牌和产品，我们一起决定从哪里开始。',
    'Setup': '搭建',
    'Build': '执行',
    'We build the store, prepare the ads and choose the creators who fit your product.': '我们搭建店铺、准备广告，并挑选适合你产品的达人。',
    'Launch': '上线',
    'Live': '运营',
    'Your brand goes live in Europe. We keep working on it with you after the launch.': '你的品牌在欧洲正式上线。上线之后，我们会继续和你一起优化。',

    // home: creators teaser
    '<b>03</b> / UGC creators': '<b>03</b> / UGC达人',
    '8 on the roster': '达人库共8位',
    'Real Western <em class="accent">creators.</em>': '真实的西方<em class="accent">达人。</em>',
    'Content people actually believe. We check every creator ourselves, and all contact runs through us, never directly to the creator.': '真正让人信服的内容。每位达人都经过我们亲自审核，所有沟通都由我们负责，不会直接对接达人本人。',
    'Beauty · Lifestyle': '美妆 · 生活方式',
    'Fashion · Fitness': '时尚 · 健身',
    'Beauty · Fashion': '美妆 · 时尚',
    'Fashion · Travel': '时尚 · 旅行',
    'Beauty · Interior': '美妆 · 家居',
    'See all UGC creators <span class="arrow" aria-hidden="true">→</span>': '查看全部UGC达人 <span class="arrow" aria-hidden="true">→</span>',

    // home: reverse strip and contact
    'Western Faces, Cleared for <em class="accent">China &amp; APAC.</em>': '西方面孔，已为<em class="accent">中国与亚太市场</em>通关。',
    'It works the other way too. We also place Western creators with Chinese and Asian brands.': '反过来也可以。我们同样为中国及亚洲品牌对接西方达人。',
    'Talk to us →': '联系我们 →',
    '<b>04</b> / Contact': '<b>04</b> / 联系我们',
    'Germany · CN → DE / EU': '德国 · 中国 → 德国 / 欧洲',
    'Your brand, <em class="accent">cleared</em> for Europe<span class="dot">.</span>': '你的品牌，<em class="accent">通关</em>欧洲<span class="dot">。</span>',
    'Tell us about your brand and what you want to sell in Europe.': '告诉我们你的品牌，以及你想在欧洲销售什么。',

    // creators page
    '<b>UGC</b> / Creators': '<b>UGC</b> / 达人',
    'Our UGC <em class="accent">creators.</em>': '我们的UGC<em class="accent">达人。</em>',
    'Western creators who make product videos for brands that sell in Europe. You brief us and we handle the creator. All contact runs through CBX Germany.': '为在欧洲销售的品牌拍摄产品视频的西方达人。你把需求告诉我们，达人由我们来对接。所有沟通都通过CBX Germany进行。',
    'View more →': '查看更多 →',
    'UGC video': 'UGC视频',
    '<b>Start</b> / here': '<b>开始</b> / 咨询',
    'Reply by email': '邮件回复',
    'Tell us who you <em class="accent">need.</em>': '告诉我们你需要<em class="accent">哪位达人。</em>',
    'Creator': '达人',
    'General inquiry': '一般咨询',
    'Your email': '你的邮箱',
    'What do you need this creator for?': '你需要这位达人做什么？',
    'Send inquiry <span class="arrow" aria-hidden="true">→</span>': '发送咨询 <span class="arrow" aria-hidden="true">→</span>',
    'We usually reply within one or two business days.': '我们通常在一到两个工作日内回复。',

    // niches
    'Beauty &amp; Skincare': '美妆护肤',
    'Makeup': '彩妆',
    'Fashion': '时尚',
    'Lifestyle': '生活方式',
    'Tech &amp; Gadgets': '科技数码',
    'Beauty': '美妆',
    'Skincare': '护肤',
    'Fitness': '健身',
    'Home &amp; Interior': '家居',
    'Outdoor': '户外',
    'Sports': '运动',
    'Travel': '旅行',

    // bios
    'Swiss and Ukrainian, studying International Relations, with a background in music and modeling from Ukraine. Covers beauty &amp; skincare, makeup, fashion, and lifestyle content, with hands on skills across styling, filming, editing, singing, and dance for more concept driven shoots.':
      '拥有瑞士与乌克兰双重背景，国际关系专业在读，曾在乌克兰学习音乐与模特。内容涵盖美妆护肤、彩妆、时尚与生活方式，擅长造型、拍摄与剪辑，也会唱歌和跳舞，适合更有创意的概念拍摄。',
    'Professional UGC creator and creative strategist with over 12M views on Instagram Reels and 4M on TikTok, and single videos reaching 27M. Covers beauty &amp; skincare, makeup, fashion, lifestyle, and tech content, with hands on skills across scriptwriting, video editing, voiceovers, and ad creative strategy.':
      '专业UGC达人与创意策略师，作品在Instagram Reels累计播放超过1200万次，在TikTok超过400万次，单条视频最高达2700万次。内容涵盖美妆护肤、彩妆、时尚、生活方式与科技，擅长脚本撰写、视频剪辑、配音和广告创意策略。',
    'Psychology student and beauty focused creator making vlogs, everyday follow along videos, and product hauls for beauty, fashion, and lifestyle brands. A trained eye for photography and trend awareness keeps every video feeling like a real recommendation, not an ad.':
      '心理学专业学生，专注美妆内容，为美妆、时尚和生活方式品牌拍摄Vlog、日常跟拍和好物分享。专业的摄影眼光和敏锐的潮流嗅觉，让每支视频都像朋友的真实推荐，而不是广告。',
    'Works full time in the automotive industry and competes as a professional tennis player, with content spanning beauty, skincare, fashion, fitness, and lifestyle. Well traveled across 32 countries, and just as comfortable covering home and interior, outdoor, and sports content.':
      '全职从事汽车行业，同时是职业网球运动员，内容涵盖美妆、护肤、时尚、健身与生活方式。去过32个国家，同样擅长家居、户外和运动类内容。',
    'Law student with a sharp eye for detail and a natural talent for persuasive communication, creating premium yet relatable beauty, skincare, and fashion content built to perform on TikTok, Instagram, and ecommerce platforms like Amazon.':
      '法律专业学生，注重细节，擅长有说服力的表达，打造精致又亲切的美妆、护肤与时尚内容，专为TikTok、Instagram以及亚马逊等电商平台而做。',
    'Authentic, aesthetic driven creator covering fashion, beauty, fitness, and travel, with hands on skills across unboxing, try on content, voiceover, and product photography. Everything built natively for Reels and TikTok, from first frame to final cut.':
      '风格真实、注重美感的达人，内容涵盖时尚、美妆、健身与旅行，擅长开箱、试穿、配音和产品摄影。所有内容都为Reels和TikTok原生打造，从第一帧到最终成片。',
    'Lifestyle creator from Serbia, based in Belgrade and currently training to become a yoga teacher. Covers fitness, lifestyle, outdoor, and sports content, with hands on skills in aesthetic photo and video, yoga content, and visual storytelling. The style is minimal and natural, built around movement, natural light, and everyday moments.':
      '来自塞尔维亚的生活方式达人，现居贝尔格莱德，正在接受瑜伽教练培训。内容涵盖健身、生活方式、户外与运动，擅长有美感的照片和视频、瑜伽内容以及视觉叙事。风格简约自然，围绕身体律动、自然光和日常瞬间展开。',
    'UGC creator from Georgia focused on beauty, skincare, makeup, fashion, and interior and home content, with a knack for stepping fully into the target audience\'s world. Every piece is built to earn trust first and drive sales as a result.':
      '来自格鲁吉亚的UGC达人，专注美妆、护肤、彩妆、时尚和家居内容，善于真正站在目标受众的角度创作。每条内容都先建立信任，再带来销量。',

    // profile pages
    '← All creators': '← 全部达人',
    '<b>UGC</b> / Creator': '<b>UGC</b> / 达人',
    '<b>01</b> / <span id="photos-title">Photos</span>': '<b>01</b> / <span id="photos-title">照片</span>',
    '<b>02</b> / <span id="photos-title">Photos</span>': '<b>02</b> / <span id="photos-title">照片</span>',
    '<b>01</b> / <span id="videos-title">Videos</span>': '<b>01</b> / <span id="videos-title">视频</span>',
    '← Previous': '← 上一位',
    'All creators': '全部达人',
    'Next →': '下一位 →',

    // 404 and legal
    '← Back': '← 返回',
    '<b>404</b> / Not found': '<b>404</b> / 页面不存在',
    'This page is <em class="accent">missing.</em>': '这个页面<em class="accent">不见了。</em>',
    'The page you are looking for does not exist or has moved.': '你要找的页面不存在或已移动。',
    'Back to the start': '返回首页',

    // attributes
    'CBX Germany, home': 'CBX Germany 首页',
    'Main': '主导航',
    'Open menu': '打开菜单',
    'Close menu': '关闭菜单',
    'CBX Germany brand film, 34 seconds, with voice over': 'CBX Germany 品牌影片，34秒，含旁白',
    'Play the CBX Germany film with sound': '播放 CBX Germany 品牌影片（有声）',
    'Enlarge the WeChat QR code': '放大微信二维码',
    'Footer': '页脚',
    'Close': '关闭',
    'Jump to a creator': '跳转到达人',
    'Creator roster': '达人名单',
    'Niches': '内容领域',
    'More creators': '更多达人',
    'Photo viewer': '照片查看器',
    'Previous photo': '上一张',
    'Next photo': '下一张',
    'Your brand, the campaign and the timeline': '你的品牌、活动内容和时间安排',

    // strings used by script.js
    '00 / The problem': '00 / 问题所在',
    '01 / CBX Germany': '01 / CBX Germany',
    '02 / Route CN → EU': '02 / 路线 中国 → 欧洲',
    '03 / Store': '03 / 店铺',
    '04 / Ads': '04 / 广告',
    '05 / Creators': '05 / 达人',
    '06 / Live commerce': '06 / 直播带货',
    '07 / One team': '07 / 一个团队',
    '08 / Cleared': '08 / 通关',
    'Please enter a valid email address.': '请输入有效的邮箱地址。',
    'Please add a short message.': '请简单写几句你的需求。',
    'Sending…': '发送中…',
    'Sent. We will get back to you soon.': '已发送，我们会尽快回复你。',
    'Something went wrong. Please try again or email info@cbxgermany.de.': '出了点问题，请重试，或直接发邮件至 info@cbxgermany.de。'
  };

  var PATTERNS = [
    [/^<span class="visually-hidden">Height <\/span>(\d+) cm · <span class="visually-hidden">age <\/span>(\d+)$/, '<span class="visually-hidden">身高 </span>$1 cm · <span class="visually-hidden">年龄 </span>$2岁'],
    [/^(\d+) photos? · (\d+) videos?$/, '$1 张照片 · $2 个视频'],
    [/^(\d+) photos? · Tap to enlarge$/, '$1 张照片 · 点击放大'],
    [/^(\d+) videos? · Sound on$/, '$1 个视频 · 有声播放'],
    [/^(\d+) photos?$/, '$1 张照片'],
    [/^View more of (.+)$/, '查看 $1 的更多内容'],
    [/^(?:Second )?UGC video (?:\d+ )?by (.+)$/, '$1 的UGC视频'],
    [/^Open photo (\d+) of (\d+)$/, '打开第 $1 张照片，共 $2 张'],
    [/^(.+) · UGC Creator · CBX Germany$/, '$1 · UGC达人 · CBX Germany']
  ];

  var TITLES = {
    'CBX Germany · We bring Chinese brands to Europe': 'CBX Germany · 帮中国品牌走进欧洲',
    'Our UGC Creators · CBX Germany': '我们的UGC达人 · CBX Germany',
    'Page not found · CBX Germany': '页面不存在 · CBX Germany',
    'Legal Notice · CBX Germany': '法律声明 · CBX Germany',
    'Privacy Policy · CBX Germany': '隐私政策 · CBX Germany'
  };

  var norm = function (s) { return s.replace(/\s+/g, ' ').trim(); };
  var lookup = function (key) {
    if (Object.prototype.hasOwnProperty.call(ZH, key)) return ZH[key];
    for (var i = 0; i < PATTERNS.length; i++) if (PATTERNS[i][0].test(key)) return key.replace(PATTERNS[i][0], PATTERNS[i][1]);
    return null;
  };

  /* collect text blocks: elements with their own text, skipping legal body copy */
  var SKIP = 'script,style,svg,noscript,[data-lang-toggle],[data-no-i18n],.legal .wrap > :not(.back)';
  var units = [];
  (function walk(el) {
    for (var i = 0; i < el.children.length; i++) {
      var c = el.children[i];
      if (c.matches(SKIP)) continue;
      var direct = false;
      for (var k = 0; k < c.childNodes.length; k++) {
        var n = c.childNodes[k];
        if (n.nodeType === 3 && /\S/.test(n.nodeValue)) { direct = true; break; }
      }
      if (direct) { var key = norm(c.innerHTML); if (lookup(key) !== null) units.push({ el: c, en: c.innerHTML, key: key }); }
      else walk(c);
    }
  })(document.body);

  var attrUnits = [];
  document.querySelectorAll('[aria-label],[placeholder]').forEach(function (el) {
    if (el.closest('[data-lang-toggle]')) return;
    ['aria-label', 'placeholder'].forEach(function (a) {
      var v = el.getAttribute(a);
      if (v && lookup(norm(v)) !== null) attrUnits.push({ el: el, attr: a, en: v });
    });
  });
  var titleEn = document.title;

  var current = 'en';
  var toggles = document.querySelectorAll('[data-lang-toggle]');

  function apply(lang) {
    current = lang === 'zh' ? 'zh' : 'en';
    var zh = current === 'zh';
    document.documentElement.lang = zh ? 'zh-CN' : 'en';
    units.forEach(function (u) { u.el.innerHTML = zh ? lookup(u.key) : u.en; });
    attrUnits.forEach(function (u) { u.el.setAttribute(u.attr, zh ? lookup(norm(u.en)) : u.en); });
    document.title = zh ? (TITLES[titleEn] || lookup(titleEn) || titleEn) : titleEn;
    toggles.forEach(function (b) {
      b.textContent = zh ? 'EN' : '中文';
      b.setAttribute('lang', zh ? 'en' : 'zh-CN');
      b.setAttribute('aria-label', zh ? '切换到英文' : 'Switch language to Chinese');
    });
    try { localStorage.setItem('cbx-lang', current); } catch (e) {}
    document.documentElement.classList.remove('i18n-pending');
    document.dispatchEvent(new CustomEvent('cbx:lang', { detail: current }));
  }

  window.CBX_I18N = {
    get lang() { return current; },
    t: function (s) { return current === 'zh' ? (lookup(norm(s)) || s) : s; },
    set: apply
  };

  toggles.forEach(function (b) {
    b.addEventListener('click', function () { apply(current === 'zh' ? 'en' : 'zh'); });
  });

  var saved = null;
  try { saved = localStorage.getItem('cbx-lang'); } catch (e) {}
  var initial = saved || ((navigator.language || '').toLowerCase().indexOf('zh') === 0 ? 'zh' : 'en');
  if (initial === 'zh') apply('zh');
  else document.documentElement.classList.remove('i18n-pending');
})();
