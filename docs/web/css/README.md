---
sidebar: auto
---
# html和css
## 移动端布局的方式

1. viewport布局

``` html
<script type="text/javascript">
var phoneWidth = parseInt(window.screen.width);
var phoneScale = phoneWidth / 750;
var ua = navigator.userAgent; //浏览器类型
if (/Android (\d+\.\d+)/.test(ua)) { //判断是否是安卓系统
  var version = parseFloat(RegExp.$1); //安卓系统的版本号
  if (version > 2.3) {
    document.write('<meta name="viewport" content="width=750,user-scalable=no, minimum-scale = ' + phoneScale + ', maximum-scale = ' + (phoneScale) + ', target-densitydpi=device-dpi">');
  } else {
    document.write('<meta name="viewport" content="width=750,user-scalable=no, target-densitydpi=device-dpi">');
  }
} else {
  document.write('<meta name="viewport" content="width=750,user-scalable=no, target-densitydpi=device-dpi">');
}
</script>
```
2. rem布局
``` html
<script type="text/javascript">
var oHtml = document.documentElement
var imgWidth = 750
var font = 100
var timer = null
function getSize () {
  var screenWidth = oHtml.offsetWidth
  if (screenWidth > imgWidth) {
    oHtml.style.fontSize = '100px'
  } else if (screenWidth < 320) {
    oHtml.style.fontSize = '50px'
  } else {
    oHtml.style.fontSize = screenWidth / (imgWidth / font) + 'px'
  }
}
getSize()
window.addEventListener('resize', function () {
  clearTimeout(timer)
  timer = setTimeout(function () {
    getSize()
  }, 300)
})
</script>
```
3. 手淘的[flexible.js](https://github.com/amfe/lib-flexible)

