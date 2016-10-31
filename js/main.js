var flag = false;
var name = "texts";
var docu = document.getElementsByClassName("titles");
var count = true;
function fun1() {
	if (flag) {
		document.getElementsByClassName("texts")[0].style.transform = "rotateY(0deg)";
		document.getElementsByClassName("photo")[0].style.transform = "rotateY(0deg)";
		document.getElementsByClassName("waiting")[0].style.transform = "rotateY(0deg)";
		document.getElementsByClassName("about")[0].style.transform = "rotateY(0deg)";	
	} else {
		document.getElementsByClassName("texts")[0].style.transform = "rotateY(90deg)";
		document.getElementsByClassName("photo")[0].style.transform = "rotateY(90deg)";
		document.getElementsByClassName("waiting")[0].style.transform = "rotateY(90deg)";
		document.getElementsByClassName("about")[0].style.transform = "rotateY(90deg)";
	}
	flag = !flag;
}
function fun(obj) {
	name = obj.className;
	fun2(name,docu);
}
function fun2(sName,doo) {
	for (var i = 1; i < doo.length;i++) {
		doo[i].style.backgroundColor = "rgba(142,142,142,0.5)";
		doo[i].style.color = "#000";
	}
	if (sName.indexOf("texts")>=0) {
		doo[1].style.backgroundColor = "rgba(255,255,255,0.6)";
		doo[1].style.color = "#9D0503";
		document.getElementsByClassName("container")[0].style.backgroundImage = "url(img/7.jpg)";
		document.getElementsByClassName("bodyer1")[0].style.transform = "rotateY(0deg)";
		document.getElementsByClassName("writer")[0].style.transform = "rotateY(0deg)";
		//document.getElementsByClassName("photowall")[0].style.transform = "rotateY(90deg)";//用这个会崩溃,改成diplay属性了
		document.getElementsByClassName("photowall")[0].style.display = "none";
		document.getElementsByClassName("wait")[0].style.transform = "rotateY(90deg)";
		document.getElementsByClassName("explain")[0].style.transform = "rotateY(90deg)";
		/*var boxs = document.getElementsByClassName("box");
		for (var i = 0; i <boxs.length;i++) {
			boxs[i].innerHTML = "";
			boxs[i].style.transform = "rotateY(90deg)";
		}
		document.getElementsByClassName("picture1")[0].style.transform = "rotateY(90deg)";
		document.getElementsByClassName("picture2")[0].style.transform = "rotateY(90deg)";
		document.getElementsByClassName("picture3")[0].style.transform = "rotateY(90deg)";*/
	} else if (sName.indexOf("photo")>=0) {
		doo[2].style.backgroundColor = "rgba(255,255,255,0.6)";
		doo[2].style.color = "#9D0503";
		document.getElementsByClassName("container")[0].style.backgroundImage = "url(img/16.jpg)";
		document.getElementsByClassName("bodyer1")[0].style.transform = "rotateY(90deg)";
		document.getElementsByClassName("writer")[0].style.transform = "rotateY(90deg)";
		//document.getElementsByClassName("photowall")[0].style.transform = "rotateY(0deg)";
		document.getElementsByClassName("photowall")[0].style.display = "block";
		document.getElementsByClassName("wait")[0].style.transform = "rotateY(90deg)";
		document.getElementsByClassName("explain")[0].style.transform = "rotateY(90deg)";
	} else if (sName.indexOf("waiting")>=0) {
		doo[3].style.backgroundColor = "rgba(255,255,255,0.6)";
		doo[3].style.color = "#9D0503";
		document.getElementsByClassName("container")[0].style.backgroundImage = "url(img/2.jpg)";
		document.getElementsByClassName("bodyer1")[0].style.transform = "rotateY(90deg)";
		document.getElementsByClassName("writer")[0].style.transform = "rotateY(90deg)";
		//document.getElementsByClassName("photowall")[0].style.transform = "rotateY(90deg)";
		document.getElementsByClassName("photowall")[0].style.display = "none";
		document.getElementsByClassName("wait")[0].style.transform = "rotateY(0deg)";
		document.getElementsByClassName("explain")[0].style.transform = "rotateY(90deg)";
	} else if (sName.indexOf("about")>=0) {
		doo[4].style.backgroundColor = "rgba(255,255,255,0.6)";
		doo[4].style.color = "#9D0503";
		document.getElementsByClassName("container")[0].style.backgroundImage = "url(img/3.jpg)";
		document.getElementsByClassName("bodyer1")[0].style.transform = "rotateY(90deg)";
		document.getElementsByClassName("writer")[0].style.transform = "rotateY(90deg)";
		//document.getElementsByClassName("photowall")[0].style.transform = "rotateY(90deg)";
		document.getElementsByClassName("photowall")[0].style.display = "none";
		document.getElementsByClassName("wait")[0].style.transform = "rotateY(90deg)";
		document.getElementsByClassName("explain")[0].style.transform = "rotateY(0deg)";
	}
}
function change1(obj) {
	if (count) {
		obj.style.width = "92%";
		obj.style.zIndex = "1";
		obj.style.backgroundImage = "url('img/17.gif')";
		document.getElementsByClassName("pic")[0].style.transform = "rotateY(0deg)";
		document.getElementsByClassName("picture2")[0].style.transform = "rotateY(90deg)";
		document.getElementsByClassName("picture3")[0].style.transform = "rotateY(90deg)";
		document.getElementsByClassName("cue1")[0].style.display = "none";
		document.getElementsByClassName("cue3")[0].style.display = "block";
		document.getElementsByClassName("cue2")[0].style.display = "block";
		reset(0);
	} else {
		obj.style.width = "30%";
		obj.style.zIndex = "0";
		obj.style.backgroundImage = "url('img/11.jpg')";
		document.getElementsByClassName("pic")[0].style.transform = "rotateY(90deg)";		
		document.getElementsByClassName("picture2")[0].style.transform = "rotateY(0deg)";
		document.getElementsByClassName("picture3")[0].style.transform = "rotateY(0deg)";
		document.getElementsByClassName("cue1")[0].style.display = "block";
		document.getElementsByClassName("cue3")[0].style.display = "none";
		document.getElementsByClassName("cue2")[0].style.display = "none";
		document.getElementsByClassName("pic")[0].innerHTML = "";
	}
	count = !count;
}
function change2(obj) {
	if (count) {
		obj.style.width = "92%";
		obj.style.zIndex = "1";
		obj.style.left = "0";
		obj.style.marginLeft = "4%";
		obj.style.backgroundImage = "url('img/17.gif')";
		document.getElementsByClassName("pic")[1].style.transform = "rotateY(0deg)";
		document.getElementsByClassName("picture1")[0].style.transform = "rotateY(90deg)";
		document.getElementsByClassName("picture3")[0].style.transform = "rotateY(90deg)";
		document.getElementsByClassName("cue1")[0].style.display = "none";
		document.getElementsByClassName("cue3")[0].style.display = "block";
		document.getElementsByClassName("cue2")[0].style.display = "block";	
		reset(1);
	} else {
		obj.style.width = "30%";
		obj.style.zIndex = "0";
		obj.style.marginLeft = "0";
		obj.style.left = "35%";
		obj.style.backgroundImage = "url('img/12.jpg')";
		document.getElementsByClassName("pic")[1].style.transform = "rotateY(90deg)";
		document.getElementsByClassName("picture1")[0].style.transform = "rotateY(0deg)";
		document.getElementsByClassName("picture3")[0].style.transform = "rotateY(0deg)";
		document.getElementsByClassName("cue1")[0].style.display = "block";
		document.getElementsByClassName("cue3")[0].style.display = "none";
		document.getElementsByClassName("cue2")[0].style.display = "none";
		document.getElementsByClassName("pic")[1].innerHTML = "";
	}
	count = !count;
}
function change3(obj) {
	if (count) {
		obj.style.width = "92%";
		obj.style.zIndex = "1";
		obj.style.left = "0";
		obj.style.marginLeft = "4%";
		obj.style.backgroundImage = "url('img/17.gif')";
		document.getElementsByClassName("pic")[2].style.transform = "rotateY(0deg)";
		document.getElementsByClassName("picture1")[0].style.transform = "rotateY(90deg)";
		document.getElementsByClassName("picture2")[0].style.transform = "rotateY(90deg)";
		document.getElementsByClassName("cue1")[0].style.display = "none";
		document.getElementsByClassName("cue3")[0].style.display = "block";
		document.getElementsByClassName("cue2")[0].style.display = "block";	
		reset(2);
	} else {
		obj.style.width = "30%";
		obj.style.zIndex = "0";
		obj.style.marginLeft = "0";
		obj.style.left = "66%";
		obj.style.backgroundImage = "url('img/8.jpg')";
		document.getElementsByClassName("pic")[2].style.transform = "rotateY(90deg)";
		document.getElementsByClassName("picture1")[0].style.transform = "rotateY(0deg)";
		document.getElementsByClassName("picture2")[0].style.transform = "rotateY(0deg)";
		document.getElementsByClassName("cue1")[0].style.display = "block";
		document.getElementsByClassName("cue3")[0].style.display = "none";
		document.getElementsByClassName("cue2")[0].style.display = "none";
		document.getElementsByClassName("pic")[2].innerHTML = "";
	}
	count = !count;
}
window.onresize = function(){
	document.getElementsByClassName("texts")[0].style.transform = "rotateY(0deg)";
	document.getElementsByClassName("photo")[0].style.transform = "rotateY(0deg)";
	document.getElementsByClassName("waiting")[0].style.transform = "rotateY(0deg)";
	document.getElementsByClassName("about")[0].style.transform = "rotateY(0deg)";
}
if (window.XMLHttpRequest){
	xmlhttp=new XMLHttpRequest();
}else{
	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.open("GET","xml/data.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;
var doc=xmlDoc.getElementsByTagName("user");
window.onload = function(){
	for (var i = 0; i<doc.length;i++) {
		var dm=document.createElement("div");
		dm.setAttribute("class","content");
		var userName = doc[i].getElementsByTagName("username")[0].childNodes[0].nodeValue;
		var userWords = doc[i].getElementsByTagName("userwords")[0].childNodes[0].nodeValue;
		var time = doc[i].getElementsByTagName("time")[0].childNodes[0].nodeValue;
		dm.innerHTML = "<h4>"+"id:"+userName+"</h4><h4>"+userWords+"</h4><h4>"+"Time:"+time+"</h4>";
		document.getElementById("wall").appendChild(dm);
	}
	var sh = window.outerHeight;
	document.getElementsByClassName("container")[0].style.height = sh+68+"px";
	fun2(name,docu);
}
