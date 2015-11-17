var HipPose: Vector3;
var AimPose: Vector3;
private var MainCam : GameObject;
private var WeapCam : GameObject;

function Start () {
	transform.localPosition= HipPose;
	MainCam = GameObject.FindGameObjectWithTag("MainCamera") ;
	WeapCam = GameObject.FindGameObjectWithTag("WeaponCamera") ;
}

function Update () {
	if(Input.GetButton("Fire2")){
	transform.localPosition= AimPose;
	
	MainCam.camera.fieldOfView=50;
	WeapCam.camera.fieldOfView=50;
	 
	
	}
	if(!Input.GetButton("Fire2")){
	transform.localPosition= HipPose;
	
	MainCam.camera.fieldOfView=60;
	WeapCam.camera.fieldOfView=60;
	
	}
}