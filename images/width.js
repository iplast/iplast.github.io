/*
	width.js
	2010-11-13, Alx
*/
if (getBody().getElementsByTagName("table").length) {
	getBody().getElementsByTagName("table")[0].setAttribute("id", "page");
}

var
	width,
	widthPrevious,
	page = getElement("page"),
	widthResize = true;

if (widthResize && getCookie("widthModified")) {
	page.setAttribute("width", getCookie("widthModified"));
}

if (getCookie("widthClass")) {
	page.className = getCookie("widthClass");
}

function setWidth() {
	width = (!document.all) ? window.innerWidth : getBody().offsetWidth;

	if (widthPrevious != width) {
		widthPrevious = width;
	} else {
		return;
	}

	var
		className = "",
		widthModified = (width > 1280) ? "1255" : "100%";

	if (widthResize && page.getAttribute("width") != widthModified) {
		page.setAttribute("width", widthModified);
		setCookie("widthModified", widthModified , "", "/");
	}
	
	if (width <= 1024) {
		className = "screen1024";
	} else {
		className = (width >= 1280) ? "screen1280" : "";
	}
	
	if (page.className != className) {
		page.className = className;
		setCookie("widthClass", className , "", "/");
	}
}
window.setInterval("setWidth()", 100);

if (widthResize) {
	var
		css = document.createElement("style");
	css.type = "text/css";
	css.media = "print";
	var
		style = "#page {width: 100% !important; height: auto !important;}";
	if (css.styleSheet) {
		css.styleSheet.cssText = style;
	} else {
		css.appendChild(document.createTextNode(style));
	}
	getHead().appendChild(css);
}