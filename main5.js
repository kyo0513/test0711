//canvas取得(画用紙)
const cvs=document.getElementById('cvs');
//2dコンテキスト取得(筆&絵の具)
const ctx=cvs.getContext('2d');

//キャンバスの大きさ設定
cvs.width=800;
cvs.height=500;

//キャンバスの背景色設定
ctx.fillStyle="#ddd";  //S大文字
ctx.fillRect(0,0,cvs.width,cvs.height);

/*
//青の四角を作ったあと周りを黄色で塗っている
ctx.fillStyle="blue";
ctx.lineCap="round"
ctx.fillRect(30,20,500,100);
*/

/*
ctx.strokeStyle="yellow";
ctx.lineWidth=4;
ctx.strokeRect(30,20,150,100);
*/

/*
//紫の線
ctx.strokeStyle="purple";
//ctx.lineCap="round";

ctx.beginPath();
ctx.moveTo(50,200);
ctx.lineTo(150,250);
ctx.stroke();

//青三角を作成して周りを紫で囲む
ctx.beginPath();
ctx.moveTo(50,300);
ctx.lineTo(180,300);
ctx.lineTo(200,450);
ctx.closePath();
ctx.fill();
ctx.stroke();
*/

ctx.beginPath();
ctx.moveTo(200,150,);
ctx.lineTo(400,150);
ctx.stroke();

ctx.beginPath();
ctx.arc(400,200,50,0,Math.PI*2);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200,250,);
ctx.lineTo(400,250);
ctx.stroke();

ctx.beginPath();
ctx.arc(200,200,50,0,Math.PI*2);
ctx.closePath();
ctx.stroke()