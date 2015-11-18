var MoveSpeed: float=2;
var Player: Transform;
var number=3;
var wayPoint: Transform;
var wayPoints:Transform[];
var MaxDist=10;
var MinDist=20;
var Health: float=100;
var Range=30;
var currentIndex;
var DeadReplacement: GameObject;
private var soldier: GameObject;
function Start () {
    soldier = GameObject.Find("mixamorig:Hips");
}

function Update () {
	
    if(Vector3.Distance(transform.position,Player.position)<=Range){
       //Chasing Player code
        transform.LookAt(Player);// find player in arena
	if(Vector3.Distance(transform.position,Player.position)>=MinDist){
	// if player is not closer to mindist run else stop
	transform.position+= transform.forward*MoveSpeed*Time.deltaTime;
	soldier.animation.CrossFade("Walking");
	}
	else{
	soldier.animation.CrossFade("stand");
	
	}
    }else{
	
        // if player goes far away the enemy will look at waypoint and go there and stand finally
        //currentIndex = Random.Range(0,wayPoints.Length);
        transform.LookAt(wayPoints[0]);
        if(Vector3.Distance(transform.position,wayPoints[0].position)>=MinDist){
        transform.position+= transform.forward*MoveSpeed*Time.deltaTime;
        soldier.animation.CrossFade("Walking");
        }
        
       else {
        soldier.animation.CrossFade("stand");
//            currentIndex = Random.Range(0,wayPoints.Length);
//           transform.LookAt(wayPoints[currentIndex]);
           
        }
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