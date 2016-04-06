var R = 7;
var screentop = 10;
var sereenleft= 10;
var endTime = new Date(2016,3,6,10,27,0);
function addLoadEvent(func){
	var oldLoad = window.onload;
	if( typeof oldLoad !='function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldLoad();
			func();
		};
	}
}
function myCanvas(){
	var canvas = document.getElementById('canvas');
	var context  = canvas.getContext('2d');
	var mistiming = 0;
	 var IntervalID = setInterval(function(){
		var nowTime = new Date();
		var endMS = endTime.getTime();
		var nowMS = nowTime.getTime();
		if(endMS >= nowMS){
		var mistiming = Math.round((endMS-nowMS)/1000);//得到当前时间与截止时间的时间差，单位为秒
		var H = parseInt(mistiming/3600);
		var M = parseInt((mistiming-H*3600)/60);
		var S = parseInt(mistiming%60);
		context.clearRect(0,0,canvas.width,canvas.height);
		render(sereenleft,screentop,parseInt(H/10),context,canvas);
		render(15*(R+1)+sereenleft,screentop,parseInt(H%10),context,canvas);
		render(30*(R+1)+sereenleft,screentop,10,context,canvas);
		render(38*(R+1)+sereenleft,screentop,parseInt(M/10),context,canvas);
		render(53*(R+1)+sereenleft,screentop,parseInt(M%10),context,canvas);
		render(68*(R+1)+sereenleft,screentop,10,context,canvas);
		render(77*(R+1)+sereenleft,screentop,parseInt(S/10),context,canvas);
		render(92*(R+1)+sereenleft,screentop,parseInt(S%10),context,canvas);
		}else{
			context.clearRect(0,0,canvas.width,canvas.height);
			context.font = '20px impact';
			context.textBaseline = 'top';
			context.fillStyle = '#369AA2'
			context.fillText('时间到',10,10);
			clearInterval(IntervalID);
		}
	},10);
}
function render(x,y,num,cont,canv){
	cont.fillStyle = '#369AA2';
	// cont.clearRect(0,0,canv.width,canv.height);
	for(var i = 0;i<digit[num].length;i++){
		for(var j = 0;j<digit[num][i].length;j++){
			if(digit[num][i][j] == 1){
				cont.beginPath();
				cont.arc(x+2*j*(R+1)+(R+1),y+2*i*(R+1)+(R+1),R,0,2*Math.PI,false);
				cont.closePath();
				cont.fill();
			}
		}
	}
}
addLoadEvent(myCanvas);