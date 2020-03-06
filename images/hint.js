var
	hint = false,
	overHint = false;

function showHint() {
	if (hint == true) {
		getElement("hint").className = "visible";
		getElement("hintName").className = "now";
	}
}

function closeHint() {
	if (hint == true && overHint == false) {
		getElement("hint").className = "hidden";
		getElement("hintName").className = "";
	}
}

function hintCoordinates() {
	hint = getCoordinates("hint");
	getElement("hint").style.marginTop = "-" + hint.height + "px";
	getElement("hint").style.top = "auto";
	getElement("hintSource").className = "on";
	hint = true;
}

getBody().onclick = function () {
	closeHint();
}

setOnload(hintCoordinates);