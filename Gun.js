var Bullet: Rigidbody;
var Spawn : Transform;
var BulletSpeed : float= 1000;
var ReloadTime : float=2;
var AmmoInMag: float=30;
var IsFullAuto= true;
var Walk: String ;
var Idle: String ;
var crossHair:Texture;
static var AmmoLeft:float;
static var ReloadTTime:float;
static var IsReloading=false;
private var CanFire = true;

var FireRate=0.1;


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
var bullet1:Rigidbody =Instantiate(Bullet,Spawn.position,Spawn.rotation);// bullet1 creates bullets instance with positon from spawn
 bullet1.AddForce(transform.forward * BulletSpeed);// bullet is forced forward
 CanFire=false;
 yield WaitForSeconds(FireRate);//number of second to wait after each bullet in fullauto mode
 CanFire=true;
 AmmoLeft -=1; 
 audio.Play();//sound of the bullet
}
}
function Reload(){
CanFire=false;
IsReloading=true;
BroadcastMessage("ReloadAnim");
yield WaitForSeconds(ReloadTime);
IsReloading=false;
CanFire=true;
AmmoLeft= AmmoInMag;
}