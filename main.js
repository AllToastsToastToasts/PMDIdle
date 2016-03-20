
var health = 100
var soil = 0;
var firstDig = 0
var firstDigtext = 'You are somewhere...'

function refreshStats(){
	document.getElementById("health").innerHTML = health
	        document.getElementById("soil").innerHTML = soil;
	document.getElementById("firstDig").innerHTML = firstDig
        document.getElementById("firstDigtext").innerHTML = firstDigtext
}

function dig(){
	if (health > 0){
	health -= 1
	soil += 0.1
	firstDig += 1
	        if(firstDig >= 1){
	firstDigtext = 'You started to dig...'
	        	}
	refreshStats();
	}
}

function rest(){
	health += 1
	refreshStats();
}

window.setInterval(function(){
	refreshStats();
}, 1000);
