
	function getElement(id) 
	{
		return document.getElementById(id);
	}

	function getHead() 
	{
		return document.getElementsByTagName("head")[0];
	}

	function getBody() 
	{
		return document.getElementsByTagName("body")[0];
	}

	function deleteElement(id) 
	{
		getElement(id).parentNode.removeChild(getElement(id));
	}

	function setOnload(f) 
	{
		var
			onloadPrevious = window.onload;

		if (typeof(window.onload) != "function") 
			window.onload = f;
		else 
			window.onload = function() {
				onloadPrevious();
				f();
			}
	}

	function searchCheck_Simple(searchStatus, searchField) 
	{
		if (!searchField) 
			var searchField = "searchInput_Field";
	
		if (getElement(searchField)) 
		{
			var searchInput_Field = getElement(searchField).value;

			if (
				trim(searchInput_Field) != ""
				&&
				searchInput_Field.toLowerCase() != (searchStatus ? searchStatus.toLowerCase() : "search")
			) {

				return true;

			} else {

				alert("Please, specify search string first and try again.");
				getElement(searchField).focus();
				return false;
			}
		}
	}

	function setCookie(name, value, expires, path, domain, secure) 
	{
		document.cookie = name + "=" + escape(value) +
			((expires) ? "; expires=" + expires : "") +
			((path) ? "; path=" + path : "") +
			((domain) ? "; domain=" + domain : "") +
			((secure) ? "; secure" : "");
	}

	function getCookie(name) 
	{
		var
			cookie = " " + document.cookie,
			search = " " + name + "=",
			setStr = null,
			offset = 0,
			end = 0;
	
		if (cookie.length > 0) 
		{
			offset = cookie.indexOf(search);

			if (offset != -1) 
			{
				offset += search.length;
				end = cookie.indexOf(";", offset)

				if (end == -1) 
					end = cookie.length;
	
				setStr = unescape(cookie.substring(offset, end));
			}
		}

		return(setStr);
	}


	function getCoordinates(id) 
	{
		var
			id = getElement(id),
			left = id.offsetLeft,
			top = id.offsetTop;
		
		for (var parent = id.offsetParent; parent; parent = parent.offsetParent) 
		{
			left += parent.offsetLeft - parent.scrollLeft;
			top += parent.offsetTop - parent.scrollTop;
		}
	
		return {
			width: id.offsetWidth,
			height: id.offsetHeight,
			left: left,
			top: top
		};
	}


	function addHandler(object, event, handler) 
	{
		if (typeof object.addEventListener != "undefined") 
		{
			object.addEventListener(event, handler, false);

		} else if (typeof object.attachEvent != "undefined") {

			object.attachEvent("on" + event, handler);

		} else {

			throw "Incompatible browser";
		}
	}


	function removeHandler(object, event, handler) 
	{
		if (typeof object.removeEventListener != "undefined") 
		{

			object.removeEventListener(event, handler, false);

		} else if (typeof object.detachEvent != "undefined") {
	
			object.detachEvent("on" + event, handler);

		} else {

			throw "Incompatible browser";
		}
	}


	function setAnchor() 
	{
		if (getBody().getElementsByTagName("a").length) 
		{
			var anchorArray = getBody().getElementsByTagName("a");

			for (var i = 0; i < anchorArray.length; i++) 
			{
				if (
					anchorArray[i].getAttribute("name") != ""
					&& 
					anchorArray[i].getAttribute("name") != null
					&&
					(
						anchorArray[i].getAttribute("href") == "" 
						||
						anchorArray[i].getAttribute("href") == null
					)
				) {
					anchorArray[i].className = (anchorArray[i].className == "") ? "anchor" : (anchorArray[i].className + " anchor");
				}
			}
		}
	}


	function classOver(object, classAppend) 
	{
		if (object) 
		{
			if (typeof(object) != "object" && getElement(object)) 
				object = getElement(object);
		
			var classAppend = classAppend || "over";
			var classPresent = new RegExp('(^|\\s+)' + classAppend + '(\\s+|$)', 'i');
			var curentClass = object.className + '';

			if (curentClass.match(classPresent)) 
				object.className = curentClass.replace(classPresent, '$2');
			else 
				object.className = curentClass + (curentClass ? ' ' : '') + classAppend;
		}
	}

	function deleteClassFromChilds(object, classAppend)
	{
		if (typeof(object) != "object" && getElement(object)) 
				object = getElement(object);

		var reg = new RegExp('(^|\\s+)' + classAppend + '(\\s+|$)', 'i');
		var childs = object.childNodes;

		for (var i = 0; i < childs.length; i++)
		{
			try 
			{
				var cl = childs[i].className + '';
				if (cl.match(reg))
				{
					childs[i].className = cl.replace(reg, '$2');
				}

				deleteClassFromChilds(childs[i], classAppend);
				
			} catch (e) {
			}
		}
	}

	function setFavorites() 
	{
		document.all ? window.external.addFavorite(window.location.href, document.title) : alert('Press CTRL and D to add a bookmark to:\n' + document.title);
		return false;
	}


	function checkInt(el)
	{
		var val = (el.value + '').replace(/^[^0-9]+|[^0-9]+$/g, '').replace(/^([0-9]+).*$/, '$1');
		if (el.value * 1 != val)
			el.value = val;
	}


	function checkMaxWords(el, count)
	{
	}


	function parseJson(text)
	{
		var res;

		try {
			res = eval('(' + text + ')');
		} catch(e) {
			res = false;
		}

		return res;
	}


function getXmlHttpObject()
{
	if (window.XMLHttpRequest)
	{
		// code for IE7+, Firefox, Chrome, Opera, Safari
		try {
			return new XMLHttpRequest();

		} catch (e) {

			// code for IE6, IE5
			return new ActiveXObject("Microsoft.XMLHTTP");
		}

	} else {

		// code for IE6, IE5
		return new ActiveXObject("Microsoft.XMLHTTP");
	}

	return null;
}

function checkMaxlength(tag) 
{
	if (tag.getAttribute("maxlength")) 
	{
		var maxlength = parseInt(tag.getAttribute("maxlength"));
		if (tag.value.length > maxlength) 
			tag.value = tag.value.substring(0, maxlength);
	}
}

function round(val, precision, mode) 
{
    // *     example 1: round(1241757, -3);
    // *     returns 1: 1242000
   	// *     example 2: round(3.6);
    // *     returns 2: 4
   	// *     example 3: round(2.835, 2);
    // *     returns 3: 2.84
   	// *     example 4: round(1.1749999999999, 2);
    // *     returns 4: 1.17
   	// *     example 5: round(1.17499999999999, 2);
    // *     returns 5: 1.18

	var retVal = 0, v = '', integer = '', decimal = '', decp = 0, negative = false;
	var _round_half_oe = function (dtR, dtLa, even) 
	{
		// round to odd or even
		if (even === true) 
		{
			if (dtLa === 50) 
			{
				if ((dtR % 2) === 1) 
					dtR += dtLa >= 5 ? 1 : -1;

			} else if (dtLa >= 5) {
				dtR++;
			}

		} else {

			if (dtLa === 5) 
			{
				if ((dtR % 2) === 0) 
					dtR += dtLa >= 5 ? 1 : -1;

            } else if (dtLa >= 5) {
   	            dtR++;
       	    }
        }

		return dtR;
	};

	var _round_half_ud = function (dtR, dtLa, up) 
	{ 
		// round up or down
		dtR += (dtLa > 5) || (up === true && dtLa == 5) ? 1 : 0;
        return dtR;
   	};

   	var _round_half = function (val, decplaces, mode) 
	{
       	var v = val.toString(), vlen = 0, vlenDif = 0;
        var decp = v.indexOf('.');
   	    var digitToRound = 0, digitToLookAt = 0;
       	var integer = '', decimal = '';
        var round = null, bool = false;

        switch (mode) 
		{
       	    case 'up':
           	    bool = true;
               	// Fall-through
            case 'down':
   	            round = _round_half_ud;
       	        break;
            case 'even':
   	            bool = true;
       	        // Fall-through
            case 'odd':
   	            round = _round_half_oe;
       	        break;
        }

           if (decplaces < 0) 
		{ 
			// Int round
       	    vlen = v.length;
           
               decplaces = vlen + decplaces;
       	    digitToLookAt = Number(v.charAt(decplaces));
               digitToRound  = Number(v.charAt(decplaces - 1));
       	    digitToRound  = round(digitToRound, digitToLookAt, bool);
       	    v = v.slice(0, decplaces - 1);
               vlenDif = vlen - v.length - 1;
           
               if (digitToRound === 10) {
       	        v = String(Number(v) + 1) + '0';
               } else {
                   v += digitToRound;
       	    }
           
               v = Number(v) * (Math.pow(10, vlenDif));

       	} else if (decplaces > 0) {

               integer = v.slice(0, decp);
               decimal = v.slice(decp + 1);
       	    digitToLookAt = Number(decimal.charAt(decplaces));
      
           	digitToRound  = Number(decimal.charAt(decplaces - 1));
            digitToRound  = round(digitToRound, digitToLookAt, bool);
   	        decimal = decimal.slice(0, decplaces - 1);
       	    if (digitToRound === 10) 
			{
           	    v = Number(integer + '.' + decimal) + (1 * (Math.pow(10, (0 - decimal.length))));
            } else {
   	            v = Number(integer + '.' + decimal + digitToRound);
       	    }

        } else { // 0 decimal places

   	        integer = v.slice(0, decp);
       	    decimal = v.slice(decp + 1);
           	digitToLookAt = Number(decimal.charAt(decplaces));
            digitToRound = Number(integer.charAt(integer.length - 1));
   	        digitToRound = round(digitToRound, digitToLookAt, bool);
       	    decimal = '0';
           	integer = integer.slice(0, integer.length - 1);
            if (digitToRound === 10) {
   	            v = Number((Number(integer) + 1) + decimal); // Need to add extra 0 since passing 10
       	    } else {
           	    v = Number(integer + digitToRound);
            }
   	    }

       	return v;
    };

    // precision optional - defaults 0
   	if (typeof precision === 'undefined') 
        precision = 0;
   
   	// mode optional - defaults round half up
    if (typeof mode === 'undefined') 
		mode = 'PHP_ROUND_HALF_UP';

   	negative = val < 0; // Remember if val is negative

  		v = Math.abs(val).toString(); // Take a string representation of val
  		decp = v.indexOf('.');        // And locate the decimal point

   	if (decp === -1 && precision >= 0) 
	{
        return val;

   	} else {

       	if (decp === -1) 
		{
            // There are no decimals so integer=V and decimal=0
   	        integer = v;
       	    decimal = '0';

        } else {

            // Otherwise we have to split the decimals from the integer
   	        integer = v.slice(0, decp);
       	    if (precision >= 0) 
			{
           	    // If the precision is greater than 0 then split the decimals from the integer
               	// We truncate the decimals to a number of places equal to the precision requested+1
               	decimal = v.substr(decp + 1, precision + 1);
            } else {
   	            // If the precision is less than 0 ignore the decimals - set to 0
       	        decimal = '0';
           	}
       	}

        if (precision > 0 && precision >= decimal.length) 
		{
            /*
   	        * If the precision requested is more decimal places than already exist
       	    * there is no need to round - return val
           	*/
            return val;
   	    } else if (precision < 0 && Math.abs(precision) >= integer.length){
       	   /*
           	* If the precison is less than 0, and is greater than than the
            * number of digits in integer, return 0 - mimics PHP
   	        */
       	    return 0;
        }

        if (decimal === '0') 
   	        return Number(integer);
       
       	val = Number(integer + '.' + decimal); // After sanitizing, recreate val
    }

    // Call approriate function based on passed mode, fall through for integer constants
   	switch (mode) 
	{
       	case 0: case 'PHP_ROUND_HALF_UP':
           	retVal = _round_half(val, precision, 'up');
            break;
   	    case 1:  case 'PHP_ROUND_HALF_DOWN':
       	    retVal = _round_half(val, precision, 'down');
           	break;
        case 2: case 'PHP_ROUND_HALF_EVEN':
   	        retVal = _round_half(val, precision, 'even');
       	    break;
        case 3: case 'PHP_ROUND_HALF_ODD':
   	        retVal = _round_half(val, precision, 'odd');
       	    break;
    }

   	return negative ? 0 - retVal : retVal;
}

try {
	Number.prototype._toFixed = Number.prototype.toFixed;
	Number.prototype.toFixed = function (n){return round(this,n)._toFixed(n);};
} catch (e) {
}
