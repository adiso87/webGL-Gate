//------ GUI ------


function startGUI(){
	alert('dupa');
	var gui = new dat.GUI({autoPlace: false});
	gui.add(text, 'message');
	gui.add(text, 'speed', -5, 5);
	gui.add(text, 'displayOutline');
	gui.add(text, 'explode');
	alert('dupa2');
	var general = document.getElementById("general");
	var createdDiv = document.createElement("div");
	createdDiv.appendChild(gui.domElement);
	general.appendChild(createdDiv);	

}
//------ EVENTS ------
startGUI();