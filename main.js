
var HP = 100;

function refreshStats(){
	document.getElementById("HP").innerHTML = HP;
}

function dig(){
	HP = HP - 1
	refreshStats();
}
