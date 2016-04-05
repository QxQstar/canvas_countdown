var screenW = 1624;
var screenH = 728;
var R = 6;
var Top = 60;
var Left = 30;
const endTime = new Date(2016,3,5,17,30,0);
var curShowTimeSeconds = 0;
function addLoadEvent(func){
	var oldload = window.onload;
	if(typeof oldload != 'function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldload();
			func();
		};
	}
}
function myCanvas(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	canvas.width = screenW;
	canvas.height = screenH;
	curShowTimeSeconds = getCurShowTimeSeconds();
	setInterval(function(){
		render(context);
		update();
	},1000);
	// render(context);
}
function getCurShowTimeSeconds(){
	var curTime = new Date();
	var ret = endTime.getTime()-curTime.getTime();
	ret = Math.round(ret/1000);
	if(ret>0){
		return ret;}else{
		return 0;
	}
}
function update(){
	nextShowTimeSeconds = getCurShowTimeSeconds();
	var nextH = parseInt(nextShowTimeSeconds/3600);
	var nextM = parseInt((nextShowTimeSeconds-H*3600)/60);
	var nextS = parseInt(nextShowTimeSeconds%60);


	var curH = parseInt(curShowTimeSeconds/3600);
	var curM = parseInt((curShowTimeSeconds-H*3600)/60);
	var curS = parseInt(curShowTimeSeconds%60);
	if(nextS != curS){
		curShowTimeSeconds  = nextShowTimeSeconds;
	}
}
function render(cont){
	cont.clearRect(0,0,screenW,screenH);
	var H = parseInt(curShowTimeSeconds/3600);
	var M = parseInt((curShowTimeSeconds-H*3600)/60);
	var S = parseInt(curShowTimeSeconds%60);
	renderDigit(Left,Top,parseInt(H/10),cont);
	renderDigit(8*2*(R+1)+Left,Top,parseInt(H%10),cont);
	renderDigit(16*2*(R+1)+Left,Top,10,cont);
	renderDigit(20*2*(R+1)+Left,Top,parseInt(M/10),cont);
	renderDigit(28*2*(R+1)+Left,Top,parseInt(M%10),cont);
	renderDigit(36*2*(R+1)+Left,Top,10,cont);
	renderDigit(40*2*(R+1)+Left,Top,parseInt(S/10),cont);
	renderDigit(48*2*(R+1)+Left,Top,parseInt(S%10),cont);
}
function renderDigit(x,y,num,cont){
	cont.fillStyle = '#7171BB';
	for(var i=0;i < digit[num].length;i++){
		for(var j=0;j < digit[num][i].length;j++){
			if(digit[num][i][j]==1){
				cont.beginPath();
				cont.arc(x+j*2*(R+1)+(R+1),y+i*2*(R+1)+(R+1),R,0,2*Math.PI,false);
				cont.closePath();
				cont.fill();
			}
		}
	}
}
addLoadEvent(myCanvas);