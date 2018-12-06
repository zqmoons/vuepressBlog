module.exports = {
  title: "qun's blog",
  description: '我的个人网站',
  head: [['link', { rel: 'icon', href: '/images/facicon.jpg' }]],
  host: '192.168.1.168',
  port: 9292,
  // head: [ // 注入到当前页面的 HTML <head> 中的标签
  //   ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  // ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    nav: [
      // 导航栏配置
      { text: 'vue', link: '/vue/' },
      { text: '小说', link: '/fiction/' },
      { text: '电影', link: '/cinema/' },
      { text: 'github', link: 'https://github.com/zqmoons' }
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2 // 侧边栏显示2级
  }
}
