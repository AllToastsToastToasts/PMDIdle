
var HP = 100;
var firstDig = 0;

function refreshStats(){
	document.getElementById("HP").innerHTML = HP;
	document.getElementById("firstDig").innerHTML = firstDig;
	document.getElementbyId("firstDigtext").innerHTML = firstDigtext;
}

function dig(){
	HP = HP - 1
	firstDig = firstDig + 1
	refreshStats();
        if(firstDig >= 95){
	firstDigtext = You started to dig...
        }
}

function rest(){
	HP = HP + 1
	refreshStats();
}
