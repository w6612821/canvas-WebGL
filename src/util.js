/*
 * @Author: jianwen.Wang
 * @Date: 2021-08-21 15:54:17
 * @LastEditTime: 2021-08-27 10:54:32
 * @LastEditors: jiawen.wang
 */
let canvas = document.getElementById('myCanvas')
canvas.width = 500;
canvas.height = 500;
this.ctx = canvas.getContext('2d');
function WebGL(x, y, w, h, pw, ph, url) {
    this.x = x;
    this.y = y;
    this.url = url;
    this.pw = pw;
    this.ph = ph;

}
let ballArr = []
WebGL.prototype.drawBall = function () {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, 500, 500);
    // ball.drawCircle()
    ctx.beginPath()
    ctx.arc(this.x, this.y, 1, Math.PI * 2, false)
    ctx.roate = Math.PI * 2
    ctx.fillStyle = 'red';
    ctx.fill()
    ballArr.push(this)
}
WebGL.prototype.drawCircle = drawCircle
function drawCircle() {
    ctx.beginPath()
    ctx.arc(250, 250, 200, 0, Math.PI * 2 / 9, false)
    ctx.strokeStyle = 'green';
    ctx.stroke()
}
drawCircle()

// for (let i = 0; i < 9; i++) {
//     ball.drawCircle()

// }
// setInterval(() => {
//     // ctx.clearRect(0, 0, 500, 500);
//     ball.drawBall()

//     ballArr[0].x += 1
//     ballArr[0].y += 1
//     console.log(ballArr[0])
// }, 100);


WebGL.prototype.drawCardBack = function () {
    let backImg = new Image()
    backImg.src = this.url
    backImg.onload = function () {
        // 执行drawImage语句
        that.ctx.drawImage("./img/back.png", 50, 50, 84, 126);
        // that.ctx.restore();
    }

}
WebGL.prototype.drawCardFront = function () {
    let backImg = new Image()
    backImg.src = this.url
    backImg.onload = function () {
        // 执行drawImage语句
        that.ctx.drawImage(backImg, that.x, that.y, that.pw, that.ph);
        // that.ctx.restore();
    }

}