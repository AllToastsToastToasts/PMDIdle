
var HP = 100;
var firstDig = 0;
var firstDigtext = 'You are somewhere...';
var Soil = 0 
var SoilYes = '';

function refreshStats(){
	document.getElementById("HP").innerHTML = HP;
	document.getElementById("firstDig").innerHTML = firstDig;
        document.getElementById("firstDigtext").innerHTML = firstDigtext;
}

function dig(){
	HP = HP - 1
	firstDig = firstDig + 1
	        if(firstDig >= 1){
	firstDigtext = 'You started to dig...';
	SoilYes= 'Soil:';}
	refreshStats();
}

function rest(){
	HP = HP + 1
	refreshStats();
}

window.setInterval(function(){
	refreshStats();
}, 1000);
