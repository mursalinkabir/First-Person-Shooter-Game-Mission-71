var MoveSpeed: float=2;
var Player: Transform;
var Companion: Transform;
var number=3;
var wayPoint:Transform;
var MaxDist=10;
var MinDist=5;
var Health: float=100;
var Range=30;

var prevIndex;

var DeadReplacement: GameObject;
private var soldier: GameObject;
private var agent: NavMeshAgent;
private var anim : Animator;
private var curDistance;
private var currentIndex;
function Start () {
	anim = GetComponent("Animator");
    //soldier = GameObject.Find("mixamorig:Hips");
    agent = GetComponent.<NavMeshAgent>();
    
    
}

function Update () {
	// checking if the target is close to range
    if(Vector3.Distance(transform.position,Player.position)<=Range){
       
       transform.LookAt(Vector3(Player.transform.position.x, transform.position.y, Player.transform.position.z));// find player in arena
	if(Vector3.Distance(transform.position,Player.position)>=MinDist){
	// if player is not closer to mindist run else stop
	//transform.position+= transform.forward*MoveSpeed*Time.deltaTime;
      agent.SetDestination(Player.position);
	//soldier.animation.CrossFade("Walking");
	anim.SetFloat("hspeed",-1);
	anim.SetFloat("vspeed",1);
	curDistance=Vector3.Distance(transform.position,Player.position);
	//Debug.Log(curDistance + " is current Distance ");
	}
	else {
	//soldier.animation.CrossFade("stand");
	//agent.SetDestination(Player.position);
	anim.SetFloat("hspeed",1);
	curDistance=Vector3.Distance(transform.position,Player.position);
	//Debug.Log(curDistance + " is  Distance is else cond ");
	
	}
    }else{
	//soldier.animation.CrossFade("stand");
        // if player goes far away the enemy will look at waypoint and go there and stand finally
        
   
       
       
        if(Vector3.Distance(transform.position,wayPoint.position)>=MinDist){
            transform.LookAt(wayPoint);
        //transform.position+= transform.forward*MoveSpeed*Time.deltaTime;
            agent.SetDestination(wayPoint.position);
        //soldier.animation.CrossFade("Walking");
        anim.SetFloat("hspeed",-1);
        anim.SetFloat("vspeed",1);
        }
        else {
        //in waypoint
        //soldier.animation.CrossFade("stand");
       
        anim.SetFloat("hspeed",-1);
        anim.SetFloat("vspeed",0);
         if(Vector3.Distance(transform.position,Companion.position)<7){
         transform.LookAt(Companion);
         }
           // Wander();
          
        }
    }
	if(Vector3.Distance(transform.position,Player.position)<=MaxDist){
	
	//if player is within range of maxdist start firing
	
	gameObject.GetComponent(AIGun).Fire();
	
	}
	 
	if(Health<=0.0){
	
	Destroy(gameObject);
	Instantiate(DeadReplacement,transform.position,transform.rotation);
	//anim.SetBool("dead",true);
	}
}
function AdjustHealth(Adj : float){
	Health -= Adj;
	
}
