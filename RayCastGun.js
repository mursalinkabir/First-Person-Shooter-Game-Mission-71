

var Spawn : Transform;
var ReloadTime : float=2;
var AmmoInMag: float=30;
var IsFullAuto= true;
var Damage: float=10;

static var AmmoLeft:float;
static var ReloadTTime:float;
static var IsReloading=false;
private var CanFire = true;
var FireRate=0.1;
var Range=100;
var DirtImpact: Transform;
var ConcreteImpact: Transform;
var BulletHole: Transform;

function Start () {
AmmoLeft= AmmoInMag;
ReloadTTime= ReloadTime;
}

function Update () {





//if full auto false then use buttondown , one by one
if(IsFullAuto==false) {
//fire1 means right mouse click
if(Input.GetButtonDown("Fire1")){
//if ammo is present play anim n call fire function
	if(AmmoLeft>0){
	BroadcastMessage("FireAnim");
	Fire();
	}
	}
	}
	//if full auto is true then fire all roung with one click so no button down
	else{
	if(Input.GetButton("Fire1")){
	if(AmmoLeft>0){
	BroadcastMessage("FireAnim");
	Fire();
	}
	}
	
	}
	
	
	
	//if no ammo then reload
	if(AmmoLeft==0){
	Reload();
	}
	if(AmmoLeft<0){
	AmmoLeft=0;
	}


}
function Fire(){
if(CanFire==true && IsReloading==false){
	var hit : RaycastHit;
	var fwd= Spawn.TransformDirection(Vector3.forward);
	Debug.DrawRay(Spawn.position,fwd);


 CanFire=false;
 yield WaitForSeconds(FireRate);//number of second to wait after each bullet in fullauto mode
 CanFire=true;
 AmmoLeft -=1; 
 audio.Play();//sound of the bullet
 if(Physics.Raycast(Spawn.position,fwd,hit,Range)){
 	if(hit.collider.tag=="Dirt"){
 	Instantiate(DirtImpact,hit.point,Quaternion.FromToRotation(Vector3.forward,hit.normal)); //dirt object animation
 	Instantiate(BulletHole,hit.point,Quaternion.FromToRotation(Vector3.forward,hit.normal));// bullethole creation
 	}
 	if(hit.collider.tag=="Concrete"){
 	Instantiate(ConcreteImpact,hit.point,Quaternion.FromToRotation(Vector3.forward,hit.normal)); 
 	Instantiate(BulletHole,hit.point,Quaternion.FromToRotation(Vector3.forward,hit.normal));
 }
 if(hit.collider.tag=="Player"){
 print("Enemy Got Hit");
 	//Instantiate(ConcreteImpact,hit.point,Quaternion.FromToRotation(Vector3.forward,hit.normal)); 
 	hit.collider.SendMessageUpwards("AdjustHealth",Damage,SendMessageOptions.DontRequireReceiver);
 }
}
}
}
function Reload(){

IsReloading=true;
BroadcastMessage("ReloadAnim");
yield WaitForSeconds(ReloadTime);
IsReloading=false;

AmmoLeft= AmmoInMag;
}