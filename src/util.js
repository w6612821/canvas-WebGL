/*
 * @Author: jianwen.Wang
 * @Date: 2021-08-21 15:54:17
 * @LastEditTime: 2021-08-26 17:58:34
 * @LastEditors: jiawen.wang
 */
function WebGL(context, x, y, w, h, pw, ph, url) {
    context.width = w;
    context.height = h;
    this.x = x;
    this.y = y;
    this.url = url;
    this.pw = pw;
    this.ph = ph;
    this.ctx = context.getContext('2d');
    // this.ctx.fillStyle = "#000";
    // this.ctx.fillRect(0, 0, w, h);
}

WebGL.prototype.drawCardBack = function () {
    let backImg = new Image()
    backImg.src = this.url
    var that = this
    backImg.onload = function () {
        // 执行drawImage语句
        that.ctx.drawImage(backImg, that.x, that.y, that.pw, that.ph);
        // that.ctx.restore();
    }

}
WebGL.prototype.drawCardFront = function () {
    let backImg = new Image()
    backImg.src = this.url
    var that = this
    backImg.onload = function () {
        // 执行drawImage语句
        that.ctx.drawImage(backImg, that.x, that.y, that.pw, that.ph);
        // that.ctx.restore();
    }

}