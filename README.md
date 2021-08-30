canvas用(width，height)设置宽高，不能用css样式设置，会造成画布失真。

```javascript
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
ctx.fillStyle = "#000";
let x="";//图形x轴坐标位置
let y="";//图形y轴坐标位置
let width="";//图形宽度
let height="";//图形高度
ctx.fillRect(x, y,width, height);
```

# 1.2 canvas编程思想

canvas像素化

canvas图形绘制成功之后就像素化了他们，我们没有能力再次得到、修改已经在画布上的内容。这就是为什么比flash轻量的原因。

所以我们要canvas动画就需要清屏，更新和渲染，就是重新在画布上重新绘制。

# 1.3 canvas动画思想

canvas上的图形被像素化了，所以不能用style改变图形的位置

实际上动画的生成就是相关静态图形连续

我们把每次静态进行绘制为一帧，时间的间隔（定时器）的间隔就是帧的间隔

# 1.4 面向对象编程

因为canvas不能获得已经上屏的对象，所以我们用面向对象来进行编程，因为我们可以通过使用面向对象的方式来维持canvas所需要的属性和状态。

动画过程在主定时器里，每一帧都会调用实例的更新和渲染方法。

```javascript
function 
```

# 二、canvas绘制

绘制矩形

```javascript
ctx.fillStyle = "blue";
ctx.fillRect(x,y,width,height);
```

绘制边框

```javascript
ctx.strokeStyle = 'blue';
ctx.strokeRect(x,y,width,height)
```

清除

```javascript
ctx.clearRect()
```

绘制路径

1绘制路径的起点

```javascript
ctx.beginPath(x,y)
```

2使用绘图的路径

```javascript
ctx.moveTo(x,y)
ctx.lineTo(x,y)
```

3封闭路径

```javascript
ctx.closePath()
```

4绘制已经封闭路径的形状

```javascript
ctx.strokeStyle = "green"
ctx.stroke()
```

5填充

```javascript
ctx.fill()
```

# 2.3绘制圆弧

圆弧也是绘制路径的一种也需要beginPath

```javascript
ctx.arc(x,y,r,弧度绘制开始，弧度绘制结束，anticlockwise)
//anticlockwise == false 顺时针；anticlockwise==true 逆时针
```

一个圆的弧度为Math.PI() * 2或7顺时针大于7

透明度

```javascript
ctx.globalAlpha = n (n = 0-1)
```

# 2.5线形

通过linewidth设线型

```javascript
ctx.lineWidth = w
```

lineCap调整线末端属性

```javascript
ctx.lineCap = "butt""round""square"//butt默认直角round圆角aquare和圆角一样长的直角
```

lineJoin决定两段线连接处的样式

```javascript
ctx.lineJoin = 'bevel',"round","miter"//1设置矩形拐角2圆形拐角3默认尖拐角
```

setLineDash设置虚线样式，数组原始为奇数数组元素会被复制为偶数

```javascript
ctx.setLineDash(Array)//[2,3][2,3,2]=>[2,3,2,2,3,2]
```

lineDashOffset设置虚线的起始偏移量

```javascript
ctx.lineDashOffset = 10
```

# 2.6文本绘制

通过font设置文本样式

```javascript
ctx.font='30px 宋体' 
```

通过strokeText、fillText绘制文字

```javascript
ctx.strokeText('文本',x,y);//文字描边
ctx.fillText('文本',x,y);//填充文字
```

通过textAlign设置文字对齐样式

```javascript
ctx.textAlign = 'left''center''right'
```

# 3图片

通过drawImage在画布上绘制图片，图片必须在window.onload里载入

```javascript
ctx.drawImage(img,x,y,w,h)//四个参数绘制图整张图片
ctx.drawImage(img,x,y,w,h,qx,qy,qw,qh)//八个参数绘制图片切片，前四个参数为图片切割的位置与大小，后四个为切割出的切片在画布的位置和大小
```

# 4资源管理器

# 5变形

canvas是可已变形的，但变形的是ctx，所以需要用save()和restore()保存和恢复ctx

# 6合成

合成就是常见的蒙版状态