
var HP = 100;
var firstDig = 0;

function refreshStats(){
	document.getElementById("HP").innerHTML = HP;
	document.getElementById("firstDig").innerHTML = firstDig;
}

function dig(){
	HP = HP - 1
	firstDig = firstDig + 1
	refreshStats();
}

function rest(){
	HP = HP + 1
	refreshStats();
}
