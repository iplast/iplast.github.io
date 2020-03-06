function pngfix(element) {
	if (/MSIE (5\.5|6).+Win/.test(navigator.userAgent)) {
		var blank = "/images/blank.gif";
		var url;
		if (element.tagName=='IMG') {
			if (/\.png$/.test(element.src)) {
				url = element.src;
				element.src = blank;
			}
		}
		else {
			url = element.currentStyle.backgroundImage.match(/url\("(.+\.png)"\)/i);
			if (url) {
				url = url[1];
				element.runtimeStyle.backgroundImage="none";
			}
		}
		if (url) element.runtimeStyle.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + url + "',sizingMethod='crop')"; //scale
	}
}