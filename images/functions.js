var
	monthNames 				= new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"),
	weekdayNames			= new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");



	//	Open new window at right side of screen

	function openNewWindow(url, name, width, height, bRandomPosition) {
		try {
			if (typeof(name) == 'undefined') {
				name = url.replace(/\.html$/i, "");
			}
		
			name = name.replace(/[\/\-]/g, "");

			
			if (typeof(width) == 'undefined') {
				width = 380;

			} else if (width > window.screen.availWidth) {
				width = window.screen.availWidth;
			}
		
			
			
			if (typeof(height) == 'undefined') {
				height = 545;
			
			} else if (height > window.screen.availHeight) {
				height = window.screen.availHeight;
			}

			
			var
				wnd = window.open(url, 'newwindow_' + name, 'scrollbars=yes,width=' + width + ',height=' + height + (bRandomPosition == true ? '' : ',top=10,left=' + (window.screen.availWidth - width - 20)));

			wnd.focus();
			return false;
	
		} catch (e) {
			return true;
		}
	}
	
	
	
	//	Check e-mail address validity
	
	function CheckEmail(email) {
		if (email.search(/^[a-z0-9\'\-_]+[a-z\'0-9\-_.]*@[a-z0-9\-_]+[a-z0-9\-_.]*\.[a-z]{2,4}$/i) == -1) {
			return false;
		}

		return true;
	}
	
	
	//	Check phone number validity
	
	function CheckPhoneNumber(phoneNumber) {
		if (phoneNumber.search(/^\+?[\d\(\)\s\-]+$/) == -1) {
			return false;
		}
		
		return true;
	}
	


	function rtrim(str) {
		return str.replace(/\s+$/g,"");
	}

	function ltrim(str) {
		return str.replace(/^\s+/g, "");
	}

	function trim(str) {
		str += '';
		return str.replace(/\s+$|^\s+/g, "");
	}

	function externalLinkOpen(objLink) {
		try {
			window.open(objLink.getAttribute('newhRef'), "newexternawindow", "toolbar=1,location=1,status=1,scrollbars=1,resizable=1");
			return false;
		} catch (ee) {
			return true;
		}
	}


//	Flash detected

var
	requiredVersion					= 5, // Version the user needs to view site (max 7, min 2)
	
	flash2Installed					= false,
	flash3Installed					= false,
	flash4Installed					= false,
	flash5Installed					= false,
	flash6Installed					= false,
	flash7Installed					= false,
	
	maxVersion						= 7,
	actualVersion					= 0,
	
	isIE		= (navigator.appVersion.indexOf("MSIE") != -1)		? true : false,
	isWin		= (navigator.appVersion.indexOf("Windows") != -1)	? true : false,
	
	bFlashPresent					= false;
			
	if(isIE && isWin){
		document.write('<SCR' + 'IPT language="VBScript"\> \n');
		document.write('on error resume next \n');
		document.write('flash2Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.2"))) \n');
		document.write('flash3Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.3"))) \n');
		document.write('flash4Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.4"))) \n');
		document.write('flash5Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.5"))) \n');
		document.write('flash6Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.6"))) \n');
		document.write('flash7Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.7"))) \n');
		document.write('</SCR' + 'IPT\> \n');
	}
	
	function detectFlash() {  
		if (navigator.plugins) {
			if (
				navigator.plugins["Shockwave Flash 2.0"]
				||
				navigator.plugins["Shockwave Flash"]
			) {
				var
					isVersion2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "",
					flashDescription = navigator.plugins["Shockwave Flash" + isVersion2].description,
					flashVersion = parseInt(flashDescription.charAt(flashDescription.indexOf(".") - 1));
				
				// DEBUGGING: uncomment next line to see the actual description.
				//alert("Flash plugin description: " + flashDescription);
				
				flash2Installed = flashVersion == 2;
				flash3Installed = flashVersion == 3;
				flash4Installed = flashVersion == 4;
				flash5Installed = flashVersion == 5;
				flash6Installed = flashVersion == 6;
				flash7Installed = flashVersion >= 7;
			}
		}
		
		for (var i = 2; i <= maxVersion; i++) {	
			if (eval("flash" + i + "Installed") == true) actualVersion = i;
		}
		
		if(navigator.userAgent.indexOf("WebTV") != -1) actualVersion = 2;	
		
		//	uncomment next line to display flash version during testing
		//alert("version detected: " + actualVersion);
		
		if (actualVersion >= requiredVersion) {
			bFlashPresent = true;
		}
	}


	detectFlash();