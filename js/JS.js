// This source is the javascript needed to build a simple moving
// cube in **three.js** based on this
// [example](https://raw.github.com/mrdoob/three.js/r44/examples/canvas_geometry_cube.html)
// It is the source about this [blog post](/blog/2011/08/06/lets-do-a-cube/).

// ## Now lets start

// declare a bunch of variable we will need later
var startTime = Date.now();
var canvas = document.getElementById('glCanvas');
var WIDTH = canvas.clientWidth;
var HEIGHT = canvas.clientHeight;
var canvas, renderer, stats;
var camera, scene, cube;
var keyboard;

// ## bootstrap functions

var gateMaterial = new THREE.MeshLambertMaterial( { color: 0x000F4, 
										combine: THREE.MixOperation, 
										reflectivity: 1,
										shading: THREE.SmoothShading } );;
var gateWireframe = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true } );
var gateModelView;
// initialiaze everything

init();

animate(new Date().getTime());

// ## Initialize everything
function init() {
	// test if webgl is supported
		if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
	//create RENDERER
		renderer = new THREE.WebGLRenderer({antialias: true});
		renderer.setSize(WIDTH, 
						 HEIGHT);
	//plug-in RENDERER
		canvas.appendChild(renderer.domElement);
	//set properties of RENDERER
		//renderer.setClearColorHex(0xEEEEEE, 1.0);
		//renderer.clear();
	//create SCENE
		scene = new THREE.Scene();
	//create CAMERA
		camera = new THREE.PerspectiveCamera(45, WIDTH/HEIGHT, 1, 10000);
		camera.position.z = 300;
	//add Ambient Light
		scene.add(new THREE.AmbientLight(0x202020));
	//add LIGHT1
		light1 = new THREE.DirectionalLight( 0xffffff );
		light1.position.set( 50, 200, 50 );
		light1.castShadow = true;
		scene.add( light1 );

		//light2 = new THREE.SpotLight();
		

		//scene.add(light2);


	//----MATERIALS ----
		var myColor = 0x197F94;
		var myMaterial;
		//myMaterial = new THREE.MeshBasicMaterial({color: myColor});
		myMaterial = gateMaterial;
		gateModelView = true;
	//myMaterial = ;
	//-------- DRAWNING -------
		//Słupki
		post1 = new THREE.Mesh(new THREE.CubeGeometry(40,200,40), 
							  myMaterial);
		post1.position.x = -200;
		post1.castShadow = true;
		scene.add(post1);
		post2 = new THREE.Mesh(new THREE.CubeGeometry(40,200,40), 
							  myMaterial);
		post2.position.x = 200;
		scene.add(post2);
		//poprzeczka
		horizontalBar1 = new THREE.Mesh(new THREE.CubeGeometry(360,8,8), 
							  myMaterial);
		horizontalBar1.position.y = -80;
		scene.add(horizontalBar1);
		//poprzeczka
		horizontalBar2 = new THREE.Mesh(new THREE.CubeGeometry(360,8,8), 
							  myMaterial);
		horizontalBar2.position.y = 80;
		scene.add(horizontalBar2);

		//prety
		var numberOfBars = 10;
		var bars = new Array(18);
		var position = -168;
		for (var i = 0; i <= bars.length -1; i++) {
			bars[i] = new THREE.Mesh(new THREE.CubeGeometry(4,200,4), 
							  myMaterial);
			bars[i].position.z=6;
			bars[i].position.x=position;
			position +=20;
			scene.add(bars[i]);
		};

	// Grid

				var line_material = new THREE.LineBasicMaterial( { color: 0xffffff, opacity: 0.2 } ),
					geometry = new THREE.Geometry(),
					floor = -75, step = 25;

				for ( var i = 0; i <= 40; i ++ ) {

					geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( - 500, floor, i * step - 500 ) ) );
					geometry.vertices.push( new THREE.Vertex( new THREE.Vector3(   500, floor, i * step - 500 ) ) );

					geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( i * step - 500, floor, -500 ) ) );
					geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( i * step - 500, floor,  500 ) ) );

				}

				var line = new THREE.Line( geometry, line_material, THREE.LinePieces );
				scene.add( line );



	//create PLANE
		var plane = new THREE.Mesh(new THREE.PlaneGeometry(1000,1000),
								   new THREE.MeshBasicMaterial({color: 0xDDDDDD}));
		plane.rotation.x = - 90 * (Math.PI / 180);
		plane.position.y = -150;
		plane.overdraw = true;
		plane.reciveShadow = true;
		scene.add(plane);
	//create Helper
		var object = new THREE.AxisHelper();
		object.position.set( 100, 0, -100 );
		object.scale.x = object.scale.y = object.scale.z = 0.5;
		scene.add( object );
	
	//KEYBOARD
	keyboard = new THREEx.KeyboardState();
}
	



function animate(t){
	// spin CAMERA
		
		camera.position.x = Math.sin(t/1000)*300;
		camera.position.y = 200;
		camera.position.z = Math.cos(t/1000)*300;

		camera.lookAt(scene.position);
		renderer.render(scene, camera);
		requestAnimationFrame(animate);
}





//HELPERS
function isArray(obj) {
    return obj.constructor == Array;
}
// ---- Events -----
function change(){
	
	var mat = null;
	if(gateModelView){
		mat = gateWireframe;
		gateModelView = false;
	}else{
		mat = gateMaterial;
		gateModelView = true;
	}	

	//	changeMaterial(scene.objects[1], mat);
	
	var len = scene.objects.length
	//alert(scene.objects.length);
	for (var i = 0; i< len-8; i++){
		
		changeMaterial(scene.objects[i], mat);
		scene.objects[i].reciveShadow = true;
		scene.objects[i].castShadow = true;
	}

}
function changeMaterial(a, mat){
	a.material = mat;

}
