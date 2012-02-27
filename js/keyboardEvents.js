
// ----- LISTENER -------
document.body.onkeypress=function(e){
		var e=window.event || e
		var keyunicode=e.charCode || e.keyCode
			if(keyunicode == 32){
				change();
			}
		}
// ----- EVENTS --------
