/*
 * @Author: jianwen.Wang
 * @Date: 2021-08-21 15:52:55
 * @LastEditTime: 2021-08-26 17:59:04
 * @LastEditors: jiawen.wang
 */
let cardBig = { width: 500, height: 800, imgWidth: 84, imgHeight: 126 }
let speed = cardBig.imgWidth * 0.1
let start;
let mainBack = new WebGL($('#myCanvas')[0], 0, 0, 500, 800, 84, 126, "./img/back.png");
let mainFront0 = new WebGL($('#myCanvas')[0], 84, 0, 500, 800, 84, 126, "./img/0.png");

mainBack.drawCardBack()
mainFront0.drawCardFront()

let big = function (timestamp) {
    if (start === undefined)
        start = timestamp;
    const elapsed = timestamp - start;

    //     cardBig.imgWidth = cardBig.imgWidth + Math.min(0.01 * elapsed, 3.48)
    //     cardBig.imgHeight = cardBig.imgHeight + Math.min(0.01 * elapsed, 5.21)

    //     main.drawCardBack()

    if (elapsed < 1300) { // 在两秒后停止动画
        window.requestAnimationFrame(big);
    }
}

let btn = document.getElementById('big-btn')
btn.onclick = function () {
    ctx = $('#myCanvas')[0].getContext('2d');
    ctx.clearRect(0, 0, 100, 100)
}

