module.exports = {
  title: "qun's blog",
  description: '我的个人网站',
  head: [['link', { rel: 'icon', href: '/images/facicon.jpg' }]],
  host: '192.168.1.168',
  port: 9292,
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    nav: [
      // 导航栏配置
      {
        text: '前端',
        items: [
          { text: '布局', link: '/web/css/' },
          { text: 'javascript', link: '/web/js/' },
          { text: 'vue', link: '/web/vue/' }
        ]
      },
      { text: '小说', link: '/fiction/' },
      { text: '电影', link: '/cinema/' },
      { text: 'github', link: 'https://github.com/zqmoons' }
    ],
    sidebar: {
      '/web/js/': getGuideSidebar([
        { title: '对象', children: ['', 'getting-started'] }
      ])
    },
    // sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 3 // 侧边栏显示3级
  }
}
function getGuideSidebar(arr) {
  var obj = []
  for ( var i = 0; i< arr.length; i++) {
    obj.push({
      title: arr[i].title,
      collapsable: false,
      children: arr[i].children
    })
  }
  console.log(obj, 'objs')
  return obj
}

