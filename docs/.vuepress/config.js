module.exports = {
  title: '悦生活之友',
  description: '沧州悦生活平台用户之家',
  head:[   // 配置头部
          [
              ['link', {rel:'icon', href:"/logo.png"}],
              ['meta', {'name':'viewport', content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;"}]
          ]
      ],
  themeConfig: {
		logo:"/logo.png",
		nav: [
			{ text: '主页', link: '/' },
			{ text: '目录', link: '/catalog/' },
			],

	  }
	
}