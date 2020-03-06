
	///
	///		Error Reporting System
	///
	///		client side JScript error tracking
	///		version 1.1
	///		18.07.2006
	///

	
	//
	//	Init System, add form and iframe to document, change error chandler
	//

	var
		bErrorSystemInitialized = false;
	
	function errorreportingsystem_init() {
		if (bErrorSystemInitialized) {
			return;
		}

		try {
			if (document.body && (document.readyState == 'complete')) {
				try {
					
				} catch (e) {
				}

				document.body.insertAdjacentHTML('AfterEnd', '<IFRAME style="display:none" src="about:blank" name="errorreportingsystemFrame"></IFRAME><FORM style="display:none" name="errorreportingsystemForm" target="errorreportingsystemFrame" action="/items/errorreporting-system-form.html"><INPUT type="hidden" name="details" value="" /></FORM>');
				window.onerror = errorreportingsystem_onerror;

				bErrorSystemInitialized = true;

			} else {
				window.setTimeout('errorreportingsystem_init()', 1000);
			}

		} catch (e) {
			window.setTimeout('errorreportingsystem_init()', 1000);
		}
	}


	//
	//	Handle error by filling form and submitting it
	//
	
	function errorreportingsystem_onerror(sMessage, sURL, sLine) {
	    sIgnoreMessages = Array(
	    	'ns6obj has no properties',
	    	'Unspecified error.',
	    	'Could not complete the operation due to error 80004002.',
	    	'Library not registered.',
	    	'Object expected',
	    	'null'
	    );
		
		
		for (i = 0; i < sIgnoreMessages.length; i++) {
			if (sIgnoreMessages[i] == sMessage) {
				return true;
			}
		}


		try {
			document.errorreportingsystemForm.details.value = "<H4>An error was thrown and caught</H4>";
			document.errorreportingsystemForm.details.value += "<P><B>Error:</B> " + sMessage + "</P>";
			document.errorreportingsystemForm.details.value += "<P><B>URL:</B> " + sURL + "</P>";
			document.errorreportingsystemForm.details.value += "<P><B>Line:</B> " + sLine + "</P>";
			document.errorreportingsystemForm.submit();

		} catch (e) {
			window.status = 'Warning: ' + message + ' | URL: ' + url + ' | Line: ' + lineno;
		}

		return true;
	}
	
//	errorreportingsystem_init();
