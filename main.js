
var HP = 0;

function refreshStats(){
	document.getElementById("HP").innerHTML = HP;
}

function dig(){
	HP = HP - 1
	refreshStats();
}
