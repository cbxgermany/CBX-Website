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

    // home: film and shared strings
    'Watch the videos': '观看视频',
    'Select your option': '选择您的方式',
    'See how we take your brand to Europe<span class="dot">.</span>': '看看我们如何把您的品牌带到欧洲<span class="dot">。</span>',
    'Play video': '播放视频',
    'Play the video with sound': '有声播放视频',
    'CBX Germany video for the selected option, with sound': 'CBX Germany 所选方式的介绍视频（有声）',
    '0:17 · Sound on': '0:17 · 有声播放',
    'UGC creators': 'UGC达人',
    'Start': '开始',
    'Launch': '上线',
    '11 on the roster': '达人库共11位',

    // home V4: market entry partner (Chinese copy follows the CN version of the brand SOP)
    'Two options': '两种方式',
    'Compliance': '合规',
    'FAQ': '常见问题',
    'Contact us': '联系我们',
    'Option 1: Build &amp; Grow': '方式一：Build &amp; Grow',
    'Option 2: Connect &amp; Access': '方式二：Connect &amp; Access',
    'China to Europe': '从中国到欧洲',
    'CBX Germany, back to top': 'CBX Germany，返回顶部',
    'Email': '邮箱',
    'WeChat': '微信',
    'Enlarge the WhatsApp QR code': '放大 WhatsApp 二维码',
    'Scan with your phone camera to chat with us': '用手机相机扫码，与我们聊天',

    // home V4: hero and route map
    'Your market entry partner for Europe<span class="dot">.</span>': '您在欧洲的市场准入合作伙伴<span class="dot">。</span>',
    'Compare both options': '比较两种方式',
    '3 week pilot': '3周试点',
    'Ads': '广告',
    'Creators': '创作者',
    'Online store': '网店',
    'Warehouse': '仓储',

    // home V4: two options
    'Where does your brand stand today<span class="dot">?</span>': '您的品牌今天处在哪个阶段<span class="dot">？</span>',
    'Smaller brands want to find out first if there is demand for their products in Europe. Larger brands are already strong in China and ready to enter Europe right away. In the first call we find out together which option fits.': '中小品牌希望先了解自己的产品在欧洲是否有市场需求；较大的品牌在中国已经很强，准备直接进入欧洲。在第一次沟通中，我们会和您一起确定哪一种方式适合您的品牌。',
    'Option 1': '方式一',
    'Option 2': '方式二',
    'For smaller brands': '适合中小品牌',
    'For larger brands': '适合较大品牌',
    'We test whether there is demand in Europe, then build your brand with ads, creators and a store.': '我们先测试您的产品在欧洲是否有市场需求，再通过广告、创作者和店铺打造您的品牌。',
    'For': '适合',
    'We do': '我们做',
    'Cost': '费用',
    'After': '之后',
    'Benefit': '优势',
    'Small and mid sized Chinese brands with traction on Tmall, Douyin, Xiaohongshu or TikTok Shop. No big corporations or listed groups.': '在天猫、抖音、小红书或 TikTok Shop 上有成绩的中国中小品牌，不是大型集团或上市公司。',
    'A 3 week pilot with a landing page, ads, pixel tracking and a clear report on demand in Europe.': '3周试点：落地页、广告、像素追踪，以及关于欧洲需求的清晰报告。',
    'The pilot is free of charge. The ad budget is paid by the brand.': '试点服务由 CBX Germany 免费提供，广告预算由品牌自行承担。',
    'With good results we plan the next steps together, and Option 2 opens up later.': '结果良好时，我们一起规划下一步，之后可进入方式二。',
    'Exclusive access to Temu and TikTok Shop, with warehouse, fulfillment and compliance partners.': '通过专属合作伙伴对接 Temu 和 TikTok Shop，并配备仓储、履约和合规伙伴。',
    'Larger Chinese brands with strong sales in China, ready to invest in Europe now, with products at fair prices.': '在中国销售强劲、准备好现在投入欧洲市场、产品价格合理的中国较大品牌。',
    'Connection to our exclusive Temu and TikTok Shop partners, a dedicated agent and a direct line to the Head of Europe, plus warehouse, fulfillment and compliance partners.': '对接我们在 Temu 和 TikTok Shop 的专属合作伙伴、专属对接人、直通欧洲负责人，以及仓储、履约和合规伙伴。',
    'An exclusive contract and support that a normal sign up does not get.': '普通入驻无法获得的独家合同和支持。',
    'A one time introduction fee, on request.': '一次性引荐费，价格面议。',
    'See the full package': '查看全套服务',

    // home V4: option 1, build and grow
    'Optimize': '优化',
    'Ads <span class="pill">Our core work</span>': '广告 <span class="pill">我们的核心工作</span>',
    'Our European creators<span class="dot">.</span>': '我们的欧洲创作者<span class="dot">。</span>',
    'Every creator has a profile with photos and videos. You choose, we coordinate.': '每位创作者都有包含照片和视频的个人页面。您来挑选，我们来协调。',
    'See all 11 creators': '查看全部11位创作者',

    // home V4: option 2, connect and access
    'Exclusive access to Temu and TikTok Shop<span class="dot">.</span>': '通过专属合作伙伴对接 Temu 和 TikTok Shop<span class="dot">。</span>',
    'Your brand is strong in China and ready for Europe. Most brands sign up to Temu and TikTok Shop on their own and start as one seller among thousands. With CBX Germany your brand skips that line: we connect you directly with our exclusive partners at Temu and TikTok and set up everything you need to sell in Europe from day one.': '您的品牌在中国已经很强，并已准备好进入欧洲。大多数品牌自行入驻 Temu 和 TikTok Shop，作为成千上万卖家中的一员起步。通过 CBX Germany，您的品牌无需排队：我们直接为您对接我们在 Temu 和 TikTok 的专属合作伙伴，并为您从第一天起在欧洲销售做好一切准备。',
    'Exclusive Temu and TikTok Shop partners': '专属 Temu 和 TikTok Shop 合作伙伴渠道',
    'A direct connection to the partners we work with, not the standard sign up.': '直接对接我们的合作伙伴，而不是标准入驻。',
    'Your own dedicated agent': '您的专属对接人',
    'One person who takes care of your brand on the platform, from onboarding to growth.': '从入驻到增长，在平台上专门负责您品牌的人。',
    'A direct line to the Head of Europe': '直通欧洲负责人',
    'Access to the people who decide, which a brand on its own rarely gets.': '对接做决定的人，这是品牌自己很难获得的。',
    'An exclusive contract': '独家合同',
    'Better terms and closer support than a standard seller contract.': '比标准卖家合同更好的条款和更紧密的支持。',
    'Warehouse and fulfillment in Germany': '德国仓储与履约',
    'The German warehouse the platforms expect, through our fulfillment partners.': '通过我们的履约伙伴提供平台所需的德国仓库。',
    'Compliance partners': '合规伙伴',
    'EU rules on product, packaging and cosmetics.': '产品、包装和化妆品的欧盟规定。',
    '<strong>Why this matters.</strong> Without the right connection, a new brand on Temu and TikTok Shop starts alone. With CBX Germany it starts with its own agent, an exclusive contract and a team in Germany behind it.': '<strong>为什么这很重要。</strong>没有合适的对接，新品牌在 Temu 和 TikTok Shop 上只能独自起步。通过 CBX Germany，品牌一开始就拥有专属对接人、独家合同和一支在德国的团队。',
    'Check': '评估',
    'We look at your brand, products, prices and readiness for Europe, and whether you fit what Temu and TikTok are looking for right now.': '我们了解您的品牌、产品、价格和进入欧洲的准备情况，以及您是否符合 Temu 和 TikTok 当前寻找的方向。',
    'Agreement': '协议',
    'We sign a cooperation agreement with you before any introduction.': '在任何引荐之前，我们与您签订合作协议。',
    'Connection': '对接',
    'We connect you with our exclusive Temu and TikTok Shop partners, your agent and the partners for warehouse, fulfillment and compliance.': '我们为您对接 Temu 和 TikTok Shop 的专属合作伙伴、您的对接人以及仓储、履约和合规伙伴。',
    'We coordinate the partners and support the store opening on Temu and TikTok Shop.': '我们协调各方伙伴，并协助在 Temu 和 TikTok Shop 开店。',
    'Grow further': '继续增长',
    'On request we add creators, ads and live commerce for the new channels.': '如有需要，我们为新渠道提供创作者、广告和直播带货服务。',
    'Introduction fee': '引荐费',
    'On request': '面议',
    'One time, depending on the scope. Agreed in the cooperation agreement.': '一次性，视范围而定。在合作协议中约定。',
    'Included': '包含内容',
    'Exclusive connection to Temu and TikTok Shop': '通过专属合作伙伴对接 Temu 和 TikTok Shop',
    'Dedicated agent and direct line to the Head of Europe': '专属对接人及直通欧洲负责人',
    'Exclusive contract conditions': '独家合同条件',
    'Warehouse, fulfillment and compliance partners': '仓储、履约和合规伙伴',
    'Coordination of the launch': '协调上线流程',
    'Platform listings and approvals are decided by the platforms. CBX Germany makes the connection and supports the process, but cannot guarantee an approval. Partners are contracted and paid directly by you.': '平台上架和审核由平台决定。CBX Germany 负责对接并协助流程，但无法保证审核通过。合作伙伴由您直接签约并付费。',

    // home V4: network
    'Your brand': '您的品牌',
    'Seller and importer. Your store and ad accounts belong to you.': '卖家和进口商。店铺和广告账户归您所有。',
    'Warehouse and fulfillment': '仓储与履约',
    'German warehouse and fulfillment partners, the way the platforms expect it.': '符合平台要求的德国仓储与履约伙伴。',
    'Specialised European partners for packaging, product rules and cosmetics.': '负责包装、产品规定和化妆品的专业欧洲伙伴。',
    'You contract and pay the partners directly. CBX Germany introduces them and coordinates, without taking on operational responsibility.': '您直接与合作伙伴签约并付费。CBX Germany 负责引荐和协调，不承担运营责任。',

    // home V4: EU compliance

    // home V4: who pays for what

    // home V4: about
    'A team on the ground in Europe<span class="dot">.</span>': '一支扎根欧洲的团队<span class="dot">。</span>',
    'Founded': '成立',
    'Based in': '所在地',
    'Team': '团队',
    'Founders, creators and partners': '创始人、创作者和合作伙伴',
    'Market': '市场',
    'All of Europe': '全欧洲',
    'CBX Germany is a European growth and market access partner for Chinese brands. We do the work ourselves instead of only giving advice: we build landing pages and stores, create ads and work with European creators.': 'CBX Germany 是为中国品牌服务的欧洲增长与市场准入合作伙伴。我们亲自执行，而不只是提供建议：我们搭建落地页和店铺、制作广告并与欧洲创作者合作。',
    'For every brand, small or large, we use our personal network in the Temu and TikTok ecosystem and our service partners. Our team is based in Germany and works with creators and service partners across Europe. Before CBX Germany, our founders ran agencies in a niche close to influencer marketing.': '无论品牌大小，我们都借助在 Temu 和 TikTok 生态中的个人人脉以及我们的服务伙伴。我们的团队常驻德国，与欧洲各地的创作者和服务伙伴合作。创办 CBX Germany 之前，我们的创始人经营过与网红营销相近细分领域的代理公司。',
    'Why brands work with us': '品牌为什么选择我们',
    'The pilot service is free.': '试点服务免费。',
    'CBX Germany runs the 3 week pilot free of charge. The ad budget is paid by the brand through its own ad account.': '3周试点服务由 CBX Germany 免费提供，广告预算由品牌通过自己的广告账户自行承担。',
    'We have the contacts.': '我们有人脉。',
    'We are personally connected with people in the Temu and TikTok ecosystem in Europe and introduce brands that fit.': '我们与欧洲 Temu 和 TikTok 生态中的相关人员有个人联系，并引荐合适的品牌。',
    'We do the work.': '我们亲自执行。',
    'Landing pages, ads, creators and live commerce come from our team.': '落地页、广告、创作者和直播都由我们的团队完成。',
    'We follow the market.': '我们紧跟市场。',
    'We pick the categories where demand in Europe is growing right now, currently beauty, skincare and fragrance.': '我们选择欧洲需求正在增长的品类，目前是美妆、护肤和香水。',
    'We bring the faces.': '我们提供面孔。',
    'Our own pool of European creators makes your content.': '我们自己的欧洲创作者库为您制作内容。',

    // home V4: FAQ
    'What brands ask first<span class="dot">.</span>': '品牌方最先问的问题<span class="dot">。</span>',
    'Which option fits my brand?': '哪种方式适合我的品牌？',
    'Smaller brands start with Option 1. Larger brands that are ready for Europe go with Option 2. We decide together in the first call.': '中小品牌从方式一开始。准备好进入欧洲的较大品牌选择方式二。我们会在第一次沟通中一起决定。',
    'Is the pilot test really free?': '试点测试真的免费吗？',
    'Yes, our work during the 3 weeks is free of charge. You only pay the ad budget directly to Meta through your own ad account.': '是的，我们在3周内的工作不收费。您只需通过自己的广告账户直接向 Meta 支付广告预算。',
    'What happens after the pilot?': '试点之后会怎样？',
    'We go through the results with you. If there is demand, we propose next steps and agree scope and price individually. There is no obligation.': '我们和您一起分析结果。如果市场需求良好，我们会提出下一步，范围和价格单独约定。没有任何义务。',
    'Can you get us onto Temu or TikTok Shop?': '你们能帮我们入驻 Temu 或 TikTok Shop 吗？',
    'We connect fitting brands personally with our contacts and support the process. The final decision is made by the platform.': '我们亲自为合适的品牌对接联系人并协助流程。最终决定由平台做出。',
    'Who handles EU compliance?': '欧盟合规由谁负责？',
    'You carry the legal responsibility. We introduce you to specialised partners and add no markup.': '法律责任由您承担。我们为您引荐专业伙伴，且不加价。',
    'Are you a distributor?': '你们是分销商吗？',
    'No. We are a service provider. We do not buy or resell products. You stay the seller and importer.': '不是。我们是服务商，不采购也不转售。您仍是卖家和进口商。',
    'Who owns the store and ad accounts?': '店铺和广告账户归谁？',
    'You do. We only get the access we need for the agreed work.': '归您。我们只获得约定工作所需的权限。',
    'Can a brand move from Option 1 to Option 2?': '品牌可以从方式一转到方式二吗？',
    'Yes. Once your brand has grown and the numbers are right, we connect you with our Temu and TikTok Shop partners.': '可以。当您的品牌成长起来、数据合适时，我们为您对接我们的 Temu 和 TikTok Shop 合作伙伴。',

    // home V4: contact
    'Find out which option fits your brand<span class="dot">.</span>': '了解哪种方式适合您的品牌<span class="dot">。</span>',
    'Tell us about your brand and your products. In the first call we find out together which option fits.': '请告诉我们您的品牌和产品。在第一次沟通中，我们会和您一起确定哪种方式适合您。',
    'Which option sounds right?': '哪种方式听起来适合您？',
    'Not sure yet': '还不确定',
    'About your brand': '关于您的品牌',
    'Your brand, your products and where you sell today': '您的品牌、产品以及目前的销售渠道',
    'Send message': '发送消息',

    // home V5: ads first, full package
    'Full package': '全套服务',
    'CBX Germany brings Chinese brands to Europe. We run your ads with European creators and connect you with Temu, TikTok Shop and the right partners in Germany.': 'CBX Germany 把中国品牌带到欧洲。我们与欧洲创作者一起为您投放广告，并为您对接 Temu、TikTok Shop 以及德国的合适伙伴。',
    'We run your ads in Europe<span class="dot">.</span>': '我们在欧洲为您投放广告<span class="dot">。</span>',
    'Ads are our core work. Our team creates, launches and optimizes your campaigns on Meta and TikTok, with European creators in front of the camera.': '广告是我们的核心工作。我们的团队在 Meta 和 TikTok 上为您制作、投放并优化广告，由欧洲创作者出镜。',
    'Create': '制作',
    'We create the ads, brief the creators and have UGC produced.': '我们制作广告，向创作者下达简报，并制作 UGC。',
    'Your campaigns go live on Meta and TikTok.': '您的广告在 Meta 和 TikTok 上线。',
    'Analyse': '分析',
    'We read clicks, cost per click and visits for every ad.': '我们分析每条广告的点击、单次点击成本和访问量。',
    'We adjust audiences, messages and creatives based on the data.': '我们根据数据调整受众、文案和素材。',
    'You pay your ad budget directly through your own ad accounts.': '广告预算由您通过自己的广告账户直接支付。',
    'Your brand in Europe': '您的品牌在欧洲',
    'Sponsored': '赞助内容',
    'Shop now': '立即购买',
    'Video ad': '视频广告',
    'Photo ad': '图片广告',
    'Draft': '草稿',
    'Live': '投放中',
    'Best ad': '最佳广告',
    'Paused': '已暂停',
    'New version': '新版本',
    'Clicks': '点击',
    'Visits': '访问',
    'See how we run your ads': '看看我们如何投放广告',
    'What you get with Option 2': '选择方式二，您将获得',
    'One partner for your whole start in Europe<span class="dot">.</span>': '进入欧洲，一个合作伙伴就够了<span class="dot">。</span>',
    'Brands that want to enter Europe get the full package from CBX Germany. We do the work ourselves or bring in the right partner, and your brand talks to one team.': '想进入欧洲的品牌可以从 CBX Germany 获得全套服务。我们亲自执行，或为您引入合适的伙伴，您只需与一个团队沟通。',
    'One team in Germany, the full package': '一个德国团队，全套服务',
    'We create, run, analyse and optimize your Meta and TikTok campaigns.': '我们制作、投放、分析并优化您的 Meta 和 TikTok 广告。',
    'European creators make content with your product.': '欧洲创作者用您的产品制作内容。',
    'A store or landing page for European buyers, with pixel tracking.': '面向欧洲买家的网店或落地页，并配备像素追踪。',
    'Temu and TikTok Shop': 'Temu 和 TikTok Shop',
    'A dedicated agent and a direct line to the Head of Europe.': '专属对接人，以及欧洲业务负责人对接。',
    'Live commerce': '直播电商',
    'TikTok live sessions with a European host.': '由欧洲主播主持的 TikTok 直播。',
    'Your products in front of European buyers.': '让您的产品出现在欧洲买家面前。',

    // creators page
    '<b>UGC</b> / Creators': '<b>UGC</b> / 达人',
    'Our UGC <em class="accent">creators.</em>': '我们的UGC<em class="accent">达人。</em>',
    'Western creators who make product videos for brands that sell in Europe. You brief us and we handle the creator. All contact runs through CBX Germany.': '为在欧洲销售的品牌拍摄产品视频的西方达人。您把需求告诉我们，达人由我们来对接。所有沟通都通过CBX Germany进行。',
    'View more →': '查看更多 →',
    'UGC video': 'UGC视频',
    '<b>Start</b> / here': '<b>开始</b> / 咨询',
    'Reply by email': '邮件回复',
    'Tell us who you <em class="accent">need.</em>': '告诉我们您需要<em class="accent">哪位达人。</em>',
    'Creator': '达人',
    'General inquiry': '一般咨询',
    'Your email': '您的邮箱',
    'What do you need this creator for?': '您需要这位达人做什么？',
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
    'Family': '家庭',
    // origin and spoken languages
    'Germany': '德国',
    'Switzerland &amp; Ukraine': '瑞士与乌克兰',
    'Georgia': '格鲁吉亚',
    'Serbia': '塞尔维亚',
    'Spain &amp; Dubai': '西班牙与迪拜',
    'Switzerland &amp; Germany': '瑞士与德国',
    'Speaks English': '会说英语',
    'Speaks English, German': '会说英语、德语',
    'Speaks English, Georgian': '会说英语、格鲁吉亚语',
    'Speaks English, German, Italian': '会说英语、德语、意大利语',

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
    'UGC creator based in Dubai and Spain, focused on beauty and skincare, fashion, and lifestyle content, with a soft spot for wellness and travel. Makes product demonstrations, lifestyle videos, and social media ads that look aesthetic and feel natural. Experience with brands across different industries keeps every creative idea tied to a clear marketing goal.':
      '常驻迪拜和西班牙的UGC达人，专注美妆护肤、时尚与生活方式内容，也热爱健康生活和旅行。擅长产品演示、生活方式视频和社交媒体广告，画面有美感，观感自然。与不同行业品牌合作的经验，让每个创意都紧扣清晰的营销目标。',
    'Model and UGC creator based between Berlin and Hamburg, with over nine years of international modeling experience. Knows what a shoot needs and turns that polish into content that feels real, not staged, across beauty, fashion, lifestyle, and wellness. Films, styles, and edits everything personally and creates in German, English, and Italian. Has worked with brands such as Armedangels, Dior, Fendi, Levi\'s, Vogue, and Zalando.':
      '常驻柏林和汉堡的模特兼UGC达人，拥有九年以上的国际模特经验。深知拍摄需要什么，并把这份专业转化为真实自然、不刻意摆拍的内容，涵盖美妆、时尚、生活方式与健康生活。拍摄、造型和剪辑全部亲力亲为，可用德语、英语和意大利语创作。合作过的品牌包括Armedangels、Dior、Fendi、Levi\'s、Vogue和Zalando。',
    'UGC creator from Georgia focused on beauty, skincare, makeup, fashion, and interior and home content, with a knack for stepping fully into the target audience\'s world. Every piece is built to earn trust first and drive sales as a result.':
      '来自格鲁吉亚的UGC达人，专注美妆、护肤、彩妆、时尚和家居内容，善于真正站在目标受众的角度创作。每条内容都先建立信任，再带来销量。',
    'UGC creator living in Switzerland, right at the border of Constance, Germany with a second home in the Allgäu, a region in the alps of southern Germany. Focuses on beauty and skincare and films product showcases and hauls, try on and styling videos, mini vlogs, and voiceovers. Family content is possible too, with a young son whose face stays off camera. A background in international management and years in consulting and HR keep every video close to the brief. With the lake and the mountains right outside the door, outdoor content works in every season.':
      '居住在瑞士、紧邻德国康斯坦茨边境的UGC达人，在德国南部阿尔卑斯山区的阿尔高地区还有第二个住所。专注美妆护肤，拍摄产品展示与好物分享、试穿与穿搭视频、迷你Vlog和配音。也可以拍摄家庭内容，年幼的儿子可以出镜但不露脸。国际管理专业背景，加上多年咨询与人力资源工作经验，让每条视频都紧扣需求。湖泊和山脉就在家门口，一年四季都能拍户外内容。',

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
    'The page you are looking for does not exist or has moved.': '您要找的页面不存在或已移动。',
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
    'Your brand, the campaign and the timeline': '您的品牌、活动内容和时间安排',

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
    'Please add a short message.': '请简单写几句您的需求。',
    'Sending…': '发送中…',
    'Sent. We will get back to you soon.': '已发送，我们会尽快回复您。',
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
    'CBX Germany · Market entry partner for Chinese brands in Europe': 'CBX Germany · 中国品牌的欧洲市场准入合作伙伴',
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
  var SKIP = 'script,style,svg,noscript,.logo,[data-lang-toggle],[data-no-i18n],.legal .wrap > :not(.back)';
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
