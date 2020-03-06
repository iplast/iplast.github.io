var
	bAdMode = false;

var
	theight		= 24,
	transtime	= 5000,
	borderw		= 0,
	pad_top		= 0,
	pad_top2	= 0,
	pad_left	= 0,
	pad_left2	= 0,
	borderd		= '',
	text_alignt	= 'left',
	text_alignh	= 'center',
	text_decort	= 'none',
	text_decorh	= 'none',
	fstylet		= 'normal',
	fstyleh		= 'normal',
	fweightt	= 'normal',
	fweighth	= 'bold',
	fontn		= 'Tahoma',
	bgcol		= '',
	bgcolh		= '#990000',
	txtcol		= 'blue',
	txthicol	= '#FF3030',
	txtcolh		= '#E9E9E9',
	border_color_str = '#000000',
	nstheight	= 0,
	nst2width	= 0;

var
	text = new Array(),
	header = new Array(),
	linka = new Array(),
	targa = new Array(),
	adsIDs = new Array();

	text[0] = 'Полистирол ПС';
	header[0] = '';
	linka[0] = 'http://www.bestplast.biz/material/';
	targa[0] = '_blank';
	adsIDs[0] = -1;
	text[1] = 'Поликарбонат ПК';
	header[1] = '';
	linka[1] = 'http://www.bestplast.biz/material/';
	targa[1] = '_blank';
	adsIDs[1] = -1;
	text[2] = 'Полиэтилен терефталат ПЭТ';
	header[2] = '';
	linka[2] = 'http://www.bestplast.biz/material/';
	targa[2] = '_blank';
	adsIDs[2] = -1;
	text[3] = 'Полиэтилен низкого давления ПНД';
	header[3] = '';
	linka[3] = 'http://www.bestplast.biz/material/';
	targa[3] = '_blank';
	adsIDs[3] = -1;
	text[4] = 'Полиэтилен высокого давления ПВД';
	header[4] = '';
	linka[4] = 'http://www.bestplast.biz/material/';
	targa[4] = '_blank';
	adsIDs[4] = -1;
	text[5] = 'Полипропилен ПП';
	header[5] = '';
	linka[5] = 'http://www.bestplast.biz/material/';
	targa[5] = '_blank';
	adsIDs[5] = -1;
	text[6] = 'Акрилонитрилбутадиенстирол АБС пластик';
	header[6] = '';
	linka[6] = 'http://www.bestplast.biz/material/';
	targa[6] = '_blank';
	adsIDs[6] = -1;
	text[7] = 'Полиметилметакрилат ПММА';
	header[7] = '';
	linka[7] = 'http://www.bestplast.biz/material/';
	targa[7] = '_blank';
	adsIDs[7] = -1;
	text[8] = 'Поливинилхлорид ПВХ';
	header[8] = '';
	linka[8] = 'http://www.bestplast.biz/material/';
	targa[8] = '_blank';
	adsIDs[8] = -1;
	text[9] = 'Продаем полимерные материалы в Москве';
	header[9] = '';
	linka[9] = 'http://www.bestplast.biz/material/';
	targa[9] = '_blank';
	adsIDs[9] = -1;

var
	divtext = new Array(),
	divh = new Array(),
	objst = new Array(),
	objs = new Array(),
	objsh = new Array(),
	IE4B = false,
	NS4B=false,
	NS6B=false,
	OP5B=false,
	NS4B = ((document.layers) ? true : false);
	IE4B = ((document.all) ? true : false);
	NS6B = ((document.getElementById) && (!IE4B)) ? true : false;
	uagent = window.navigator.userAgent.toLowerCase();
	IE5=false;
	IE4=false;
	IEold=false;
	IE5=(uagent.indexOf('msie 5.0') != -1)?true:false;
	IE4=(uagent.indexOf('msie 4') != -1)?true:false;
	if (IE5 || IE4){
		IEold=true;
	}

	OP5B = (uagent.indexOf('opera') != -1) ? true : false;
	
	if (OP5B == true) {
		IE4B=false;
		NS6B=true;
	}

	if (NS6B == true) {
		IE4B=false;
	}

var
	ns6obj	= null,
	headlineTimer = 0,
	str2	= '',
	msgw,
	msgh,
	mc=0,
	say		= 0,
	onceki	= 0;
	
	msgw = 750-0;
	mc = text.length;
	onceki = mc - 1;
	strpos = '';
	strvis = '';
	strpadding = '';
	strpadding2 ='';
	nsdiv='';
	nstheight = theight-borderw-borderw;
	nst2width = 750-borderw-borderw;
	pad_top = pad_top-borderw + 1;

	if (pad_top < 0) {
		pad_top=0;
	}
	
	pad_top2 = pad_top2-borderw;

	if (pad_top2 < 0) {
		pad_top2 = 0;
	}

	if (IE4B) {
		strpos = 'position:absolute;';
		strvis = '';
		strpadding = 'padding-top:' + pad_top + 'px;padding-left:' + pad_left + 'px;';
		strpadding2 = 'padding-top:' + pad_top2 + 'px;padding-left:' + pad_left2 + 'px;';

	} else if (NS6B) {
		strpos = 'position:absolute;';
		strvis = 'visibility:hidden;';
		strpadding = 'padding-top:' + pad_top + 'px;padding-left:' + pad_left + 'px;';
		strpadding2 = 'padding-top:' + pad_top2 + 'px;padding-left:' + pad_left2 + 'px;';
	}

	divtev1 = ' onmouseover="mdivmo(';
	divtev2 = ')" onmouseout ="restime(';
	divtev3 = ')" onclick="butclick(';
	divtev4 = ')"';

	for (i = 0; i < mc; i++) {
		if(IE4B) {
			divtext[i] = '<div id=d' + i + ' onmouseover="mdivmo(' + i +
				')" onmouseout ="restime(' + i + ')" style="' + strpos + strvis + strpadding +
				' left:' + 0 + '; top:0; width:500px; height:' + theight +
				'; overflow-y:hidden;text-align: ' + text_alignt + ';cursor: default;">';

		} else if(NS6B) {
			divtext[i] = '<div id=d' + i + ' onmouseover="mdivmo(' + i + ')" onmouseout ="restime(' + i +
				')" style="' + strpos + strvis + 'background:' + bgcol +
				'; COLOR: ' + txtcol + '; ' + strpadding + ' left: spage.left; top: spage.top; height:' +
				nstheight + ';' + 'margin:0px; overflow-y:hidden;text-align:' + text_alignt + ';cursor: default;">';
		}
	}

	function mdivmo(gnum) {
		if (NS6B)	{
			if (linka[gnum] != '') {
				objs[onceki].style.color = txthicol;
				objs[onceki].style.cursor = 'pointer';
				window.status = '' + linka[gnum];
			}
		}
	}

	function restime(gnum2) {
		if (IE4B) {
			objd = eval('d' + gnum2);
			objd.style.color = txtcol;
			window.status = '';
		} else if(NS6B) {
			objs[onceki].style.color = txtcol;
			window.status = '';
		}
	}

	function butclick(gnum3) {
		if (targa[gnum3] == '') {
			targa[gnum3] = '_self';
		}

		if (IE4B || NS6B) {
			window.location = linka[gnum3];
		}
	}

	if (IE4B) {
	} else if (NS6B) {
		str2='';

		for(i = 0; i < mc; i++) {
			if (bAdMode) {
				if (linka[i] != '') {
					str2 = str2 + divtext[i] + '<a onclick="this.href = \'?adsID=' + adsIDs[i] + '\'; return true;" class="headline" href="' + linka[i] + '">' + text[i] + '</a></div>';
				} else {
					str2 = str2 + divtext[i] + '<a onclick="return false;" class="headline" style="text-decoration: none !important; cursor: default !important;" >' + text[i] + '</a></div>';
				}
			} else {
				if (linka[i] != '') {
					str2 = str2 + divtext[i] + '<a class="headline"  href="' + linka[i] + '">' + text[i] + '</a></div>';
				} else {
					str2 = str2 + divtext[i] + '<a onclick="return false;" class="headline" style="text-decoration: none !important; cursor: default !important;"  >' + text[i] + '</a></div>';
				}
			}
		}

	} else if(NS4B) {
		document.write('<ilayer id="spagelayer" name="spagelayer" width="' + 750 + '" height="' + theight +
			'"></ilayer>');
	}

	function dotrans() 
	{
		if (document.getElementById('spage'))
		{
			if (IE4B) {
				try {
					if (IEold != true) {
						spage.filters[0].apply();
					}

					if (bAdMode) {
						if (linka[say] != '') {
							spage.innerHTML = '' + divtext[say] + '<a onclick="this.href = \'?adsID=' + adsIDs[say] + '\'; return true;" class=headline href="' + linka[say] + '">' + text[say] + '</a></div>';
						} else {
							spage.innerHTML = '' + divtext[say] + '<a onclick="return false;" class="headline" style="text-decoration: none !important; cursor: default !important;" >' + text[say] + '</a></div>';
						}
					} else {
						if (linka[say] != '') {
							spage.innerHTML = '' + divtext[say] + '<a class="headline" href="' + linka[say] + '">'+ text[say] + '</a></div>';
						} else {
							spage.innerHTML = '' + divtext[say] + '<a onclick="return false;" class="headline" style="text-decoration: none !important; cursor: default !important;"  >'+ text[say] + '</a></div>';
						}
					}

					if (IEold != true) {
						spage.filters[0].play();
					}

					headlineTimer = setTimeout('dotrans()', 3000 + transtime);
				} catch (e) {
				}

			} else if (NS6B) {
				objs[say].style.color = txtcol;
				objs[say].style.visibility = 'visible';
				objs[onceki].style.visibility = 'hidden';
				onceki=say;
			
				headlineTimer = setTimeout('dotrans()', 3000);
			}

			say++;
		
			if(say>=mc) {
				say=0;
			}
		}
	}

	function dofirst() {
		var
			i=0,
			str="";

		try {
    		for (i = 0; i < mc; i++) {
    			objs[i] = document.getElementById("d" + i);
    		}
		
    		objs[0].style.visibility = "visible";
    		
    		dotrans();
    	} catch (e) {
    	}
	}

	function initte() {
		if (document.getElementById('spage'))
		{
			if (IE4B) {
				spage.style.borderStyle = "solid";
				spage.style.borderWidth = "" + borderw + "px";
				spage.style.borderColor = border_color_str;

				if (bAdMode) {
					if (linka[say] != '') {
						spage.innerHTML = '' + divtext[say] + '<a onclick="this.href = \'?adsID=' + adsIDs[say] + '\'; return true;" class=headline href=' + linka[say] + '>' + text[say] + '</a></div>';
					} else {
						spage.innerHTML = '' + divtext[say] + '<a onclick="return false;" class="headline" style="text-decoration: none !important; cursor: default !important;" >' + text[say] + '</a></div>';
					}
				} else {
					if (linka[say] != '') {
						spage.innerHTML = '' + divtext[say] + '<a  class="headline" href="' + linka[say] + '">' + text[say] + '</a></div>';
					} else {
						spage.innerHTML = '' + divtext[say] + '<a onclick="return false;"  class="headline" style="text-decoration: none !important; cursor: default !important;" >' + text[say] + '</a></div>';
					}
				}
			
				say=1;

				headlineTimer = setTimeout('dotrans()', 3000);

			} else if (NS6B) {
				say = 0;
				ns6obj = document.getElementById('spage');
				ns6obj.innerHTML = str2;
				headlineTimer = setTimeout('dofirst()', 500);
			}
		}
	}

	window.onload = initte;