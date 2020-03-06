
/*
	loading.js
	v0.4.1, 2013-04-08
	Alex Msc
*/

if (images && typeof(images) == "object" && images.length > 0) {
	var container = "";
	
	var loading = document.createElement("div");
	loading.id = "loading";
	loading.style.display = "none";
	loading.style.position = "absolute";
	loading.style.left = "-100000px";
	loading.style.top = "-100000px";
	loading.style.visibility = "hidden";
	document.getElementsByTagName("body")[0].appendChild(loading);
	
	var css = document.createElement("style");
	css.type = "text/css";
	css.media = "screen";
	var style = "#loading {display: block !important;}";
	if (css.styleSheet) {
		css.styleSheet.cssText = style;
	} else {
		css.appendChild(document.createTextNode(style));
	}
	document.getElementsByTagName("head")[0].appendChild(css);
	
	for (var i=0; i<images.length; i++) {
		container = container + '<img src="/images/' + images[i] + '" alt="" />';
	}
	
	loading.innerHTML = container;
	images = null;
}