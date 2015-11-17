var Spawn : Transform;
var Bullet: Rigidbody;
var BulletSpeed : float= 1000;
var ReloadTime : float=2;
private var CanFire = true;
var FireRate=0.1;
var Range=100;
var DirtImpact: Transform;
var ConcreteImpact: Transform;
var BulletHole: Transform;

function Start () {

}

function Update () {





//if full auto false then use buttondown , one by one

//fire1 means right mouse click

	
	
	
	//if no ammo then reload



}
function Fire(){
if(CanFire==true){
var bullet1:Rigidbody =Instantiate(Bullet,Spawn.position,Spawn.rotation);// bullet1 creates bullets instance with positon from spawn
 bullet1.AddForce(transform.forward * BulletSpeed);
	var hit : RaycastHit;
	var fwd= Spawn.TransformDirection(Vector3.forward);
	Debug.DrawRay(Spawn.position,fwd);


 CanFire=false;
 yield WaitForSeconds(FireRate);//number of second to wait after each bullet in fullauto mode
 CanFire=true;
  
 audio.Play();//sound of the bullet
 if(Physics.Raycast(Spawn.position,fwd,hit,Range)){
 	if(hit.collider.tag=="Dirt"){
 	Instantiate(DirtImpact,hit.point,Quaternion.FromToRotation(Vector3.forward,hit.normal)); 
 	Instantiate(BulletHole,hit.point,Quaternion.FromToRotation(Vector3.forward,hit.normal));
 	}
 	if(hit.collider.tag=="Concrete"){
 	Instantiate(ConcreteImpact,hit.point,Quaternion.FromToRotation(Vector3.forward,hit.normal)); 
 	Instantiate(BulletHole,hit.point,Quaternion.FromToRotation(Vector3.forward,hit.normal));
 }
 if(hit.collider.tag=="Player"){
 	Instantiate(ConcreteImpact,hit.point,Quaternion.FromToRotation(Vector3.forward,hit.normal)); 
 	
 }
}
}
}
