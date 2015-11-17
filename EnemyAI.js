var MoveSpeed: float=5;
var Player: Transform;
var MaxDist=10f;
var MinDist=2f;
var Health: float=100;
var DeadReplacement: GameObject;
private var soldier: GameObject;
function Start () {
soldier = GameObject.Find("Soldier");
}

function Update () {
	transform.LookAt(Player);// find player in arena
	if(Vector3.Distance(transform.position,Player.position)>=MinDist){
	// if player is not closer to mindist run else stop
	transform.position+= transform.forward*MoveSpeed*Time.deltaTime;
	soldier.animation.CrossFade("RunAim");
	}
	else{
	soldier.animation.CrossFade("StandingAim");
	
	}
	if(Vector3.Distance(transform.position,Player.position)<=MaxDist){
	//if player is within range of maxdist start firing
	gameObject.GetComponent(AIGun).Fire();
	
	}
	 
	if(Health<=0.0){
	
	Destroy(gameObject);
	Instantiate(DeadReplacement,soldier.transform.position,soldier.transform.rotation);
	}
}
function AdjustHealth(Adj : float){
	Health -= Adj;
	
}