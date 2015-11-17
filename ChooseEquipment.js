//first gun AR, SMG, ETC
var Primary : GameObject;
// Second Gun  Pistol,etc
var Secondary: GameObject;

var GrenadeObj : GameObject;
function Start () {
	Secondary.SetActiveRecursively(false);
	Primary.SetActiveRecursively(true);
	GrenadeObj.SetActiveRecursively(false);
}

function Update () {
	if(Input.GetKeyDown("1")&& Secondary.active==true){
		Primary.SetActiveRecursively(true);
		Secondary.SetActiveRecursively(false);
		
	}
	if(Input.GetKeyDown("2") && Primary.active==true){
		Primary.SetActiveRecursively(false);
		Secondary.SetActiveRecursively(true);
		
	}
	if(Input.GetButtonDown("Grenade"))
	{
	GrenadeObj.SetActiveRecursively(true);
	
	}
}