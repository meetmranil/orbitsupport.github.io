$(document).ready(function(){
	var xmlhttp;
	if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else { // code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var text = xmlhttp.responseText;
			// Now convert it into array using regex
			versions = text.split('|');
			orbit_versions = versions[0].split(',');
			for(var i = 0; i < orbit_versions.length; i++){
				$("<option>").val(orbit_versions[i]).text(orbit_versions[i]).appendTo(".orbit-versions");
			}
			
			rwb_versions = versions[1].split(',');
			for(var i = 0; i < rwb_versions.length; i++){
				$("<option>").val(rwb_versions[i]).text(rwb_versions[i]).appendTo(".rwb-versions");
			}
		}
	}
	xmlhttp.open("GET", "versions.txt", true);
	xmlhttp.send();
});
