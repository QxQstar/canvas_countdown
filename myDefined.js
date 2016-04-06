//nowTime.getTime()获取当前距离1079年1月1日0点0分0秒的毫秒数
//endTime.getTime()获取截止时间距离1079年1月1日0点0分0秒的毫秒数
//将它们相差的毫秒数转化成小时，分钟，秒，即可完成倒计时
var screenW = 1680;
var screenH = 726;
var endTime = new Date(2016,3,5,17,33,0);
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
	setInterval(function(){
		var mistiming = getMistiming();
		if(mistiming!=0){
		render(context,mistiming);
	 }
	//else{
	// 	cont.font = '20px impact';
	// 	cont.textBaseline = 'top';
	// 	cont.fillStyle = 'red';
	// 	cont.fillText('时间到',100,100);}
	},1000);
	
}
function render(cont,misTime){
	cont.clearRect(0,0,screenW,screenH);
	var H = parseInt(misTime/3600);
	var M = parseInt((misTime-H*3600)/60);
	var S = parseInt(misTime%60);
	var HString = H.toString();
	var HArr = HString.split('');
	if(HArr.length == 1){
		HString = '0'+HString;
	}
	var MString = M.toString();
	var MArr = MString.split('');
	if(MArr.length == 1){
		MString = '0'+MString;
	}
	var SString = S.toString();
	var SArr = SString.split('');
	if(SArr.length == 1){
		SString = '0'+SString;
	}
	var timgString = HString + ':' + MString +':' +SString;
	cont.font = '20px impact';
	cont.textBaseline = 'top';
	cont.fillStyle = 'red';
	cont.fillText(timgString,100,100);

}
function getMistiming(){
	var nowTime = new Date();
	var ret = Math.round((endTime.getTime()-nowTime.getTime())/1000);
	return ret;
}
addLoadEvent(myCanvas);