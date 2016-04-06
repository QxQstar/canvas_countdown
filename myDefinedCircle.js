var R = 7;
var screentop = 10;
var sereenleft= 10;
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
	var H = 0;
	var M = 0;
	var S = 0;
	setInterval(function(){
	var time = new Date();
	H = time.getHours();
	M = time.getMinutes();
	S = time.getSeconds();
	context.clearRect(0,0,canvas.width,canvas.height);
	render(sereenleft,screentop,parseInt(H/10),context,canvas);
	render(15*(R+1)+sereenleft,screentop,parseInt(H%10),context,canvas);
	render(30*(R+1)+sereenleft,screentop,10,context,canvas);
	render(38*(R+1)+sereenleft,screentop,parseInt(M/10),context,canvas);
	render(53*(R+1)+sereenleft,screentop,parseInt(M%10),context,canvas);
	render(68*(R+1)+sereenleft,screentop,10,context,canvas);
	render(77*(R+1)+sereenleft,screentop,parseInt(S/10),context,canvas);
	render(92*(R+1)+sereenleft,screentop,parseInt(S%10),context,canvas);
	
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