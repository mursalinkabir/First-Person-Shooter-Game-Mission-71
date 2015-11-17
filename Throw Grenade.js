var Grenade : Rigidbody;
var Spawn: Transform;
var Throw :String;
private var _MainCam : GameObject;
function Start () {
	_MainCam= GameObject.FindGameObjectWithTag("WeaponCamera");
}

function Update () {
	if(Input.GetButton("Grenade")){

	gameObject.animation.Play(Throw);
	gameObject.animation[Throw].speed = 1.5;
	_MainCam.GetComponent(ChooseEquipment).Primary.SetActiveRecursively(false);
	_MainCam.GetComponent(ChooseEquipment).Secondary.SetActiveRecursively(false);
		Toss();
	
	}
}
function Toss()
{
yield WaitForSeconds(1.00);

var gren:Rigidbody =Instantiate(Grenade,Spawn.position,Spawn.rotation);
gren.AddForce(transform.forward * 1000);

gameObject.SetActiveRecursively(false);
_MainCam.GetComponent(ChooseEquipment).Primary.SetActiveRecursively(true);
	_MainCam.GetComponent(ChooseEquipment).Secondary.SetActiveRecursively(true);

}