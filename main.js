
var health = 100;
var firstDig = 0;
var firstDigtext = 'You are somewhere...';
var soil = 0;

function refreshStats(){
	document.getElementById("health").innerHTML = health;
	document.getElementById("firstDig").innerHTML = firstDig;
        document.getElementById("firstDigtext").innerHTML = firstDigtext;
        document.getElementById("soil").innerHTML = soil;
}

function dig(){
	health = health - 1
	soil = soil + 0.1
	firstDig = firstDig + 1
	        if(firstDig >= 1){
	firstDigtext = 'You started to dig...';
	        	}
	refreshStats();
}

function rest(){
	health = health + 1
	refreshStats();
}

window.setInterval(function(){
	refreshStats();
}, 1000);
