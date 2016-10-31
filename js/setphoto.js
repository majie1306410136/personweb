//var img = new Image();
var width;
var height;
var x;
var y;
var rows;
var col;
var divArr;
var posArr;
var pArr;
var bArr;
var num = 10;
function reset(index){
	//width = img.width;
	//height = img.height;
	//rows = height/num;
	//col = width/num;
	//img.src = url;
	document.getElementsByClassName('pic')[index].onmousemove=function(event){
		x = event.offsetX+event.target.offsetLeft;
		y = event.offsetY+event.target.offsetTop;
	}	
	rows = 400/num;
	col = 300/num;
	divArr = [];
	posArr = [];
	pArr = [];
	bArr = [];
	for (var i = 0; i < rows; i++) {
		divArr[i] = [];
		posArr[i] = [];
		pArr[i] = [];
		bArr[i] = [];
		for (var j = 0; j < col; j++) {
			var div = document.createElement("div");
			div.setAttribute("class","box");
			posArr[i][j]=[j*num+300,i*num+1];
			pArr[i][j] = [10+Math.random()*900,10+Math.random()*300];
			div.style.backgroundPosition = (-j)*num+"px "+(-i)*num+"px"; 	
			divArr[i][j] = div;
			bArr[i][j] = true;
			document.getElementsByClassName("pic")[index].appendChild(div);
		}				 
	}
	for (var i = 0; i <rows; i++) {
		for (var j = 0; j<col; j++) {
			divArr[i][j].style.left = pArr[i][j][0]+"px";
			divArr[i][j].style.top = pArr[i][j][1]+"px";
		}
	}
	setTimeout(update,800);
}
function update(){
	for (var i = 0; i <rows; i++) {
		for (var j = 0; j<col; j++) {
			if (Math.abs(posArr[i][j][0]-x)<=40&&Math.abs(posArr[i][j][1]-y)<=40) {
				pArr[i][j][0] = posArr[i][j][0] + Math.random()*600-300;
				pArr[i][j][1] = posArr[i][j][1] + Math.random()*600-300;
				bArr[i][j] = true;
			}
		}
	}
	for (var i = 0; i <rows; i++) {
		for (var j = 0; j<col; j++) {
			divArr[i][j].style.left = pArr[i][j][0]+"px";
			divArr[i][j].style.top = pArr[i][j][1]+"px";
		}
	}
	for (var i = 0; i <rows; i++) {
		for (var j = 0; j <col; j++) {
			if(bArr[i][j]) {
				var xDistance = pArr[i][j][0]-posArr[i][j][0];
				var yDistance = pArr[i][j][1]-posArr[i][j][1];
				if(Math.abs(xDistance) <=10&&Math.abs(yDistance)<=10) {
					pArr[i][j][0] = posArr[i][j][0];
					pArr[i][j][1] = posArr[i][j][1];
					bArr[i][j] = false;
				} else {
					pArr[i][j][0] = divArr[i][j].offsetLeft - xDistance/20;
					pArr[i][j][1] =  divArr[i][j].offsetTop - yDistance/20;
				}
			}
		}
	}
	requestAnimationFrame(update);
}
