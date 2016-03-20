
var health = 100
var firstDig = 0
var firstDigtext = 'You are somewhere...'
var soil = 0;

function refreshStats(){
	document.getElementById("health").innerHTML = health
	document.getElementById("firstDig").innerHTML = firstDig
        document.getElementById("firstDigtext").innerHTML = firstDigtext
        document.getElementById("soil").innerHTML = soil;
}

function dig(){
	health -= 1
	soil += math.random(0.1, 0.5)
	firstDig += 1
	        if(firstDig >= 1){
	firstDigtext = 'You started to dig...'
	        	}
	refreshStats();
}

function rest(){
	health += 1
	refreshStats();
}

window.setInterval(function(){
	refreshStats();
}, 1000);
