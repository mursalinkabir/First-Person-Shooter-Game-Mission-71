var MoveSpeed: float=2;
var Player: Transform;
var number=3;
var wayPoints:Transform[];
var MaxDist=10;
var MinDist=20;
var Health: float=100;
var Range=30;
var currentIndex;
var prevIndex;
private var isWander=false;
var DeadReplacement: GameObject;
private var soldier: GameObject;
private var agent: NavMeshAgent;
private var anim : Animator;
function Start () {
	anim = GetComponent("Animator");
    //soldier = GameObject.Find("mixamorig:Hips");
    agent = GetComponent.<NavMeshAgent>();
    
    Wander();
}

function Update () {
	// checking if the target is close to range
    if(Vector3.Distance(transform.position,Player.position)<=Range){
        isWander=true;
       transform.LookAt(Vector3(Player.transform.position.x, transform.position.y, Player.transform.position.z));// find player in arena
	if(Vector3.Distance(transform.position,Player.position)>=MinDist){
	// if player is not closer to mindist run else stop
	//transform.position+= transform.forward*MoveSpeed*Time.deltaTime;
      agent.SetDestination(Player.position);
	//soldier.animation.CrossFade("Walking");
	//anim.SetFloat("vspeed",1);
	anim.SetFloat("hspeed",1);
	}
	else{
	//soldier.animation.CrossFade("stand");
	anim.SetFloat("hspeed",-1);
	anim.SetFloat("vspeed",0);
	
	}
    }else{
	//soldier.animation.CrossFade("stand");
        // if player goes far away the enemy will look at waypoint and go there and stand finally
        
        if(isWander){
        Wander();
        }
       
        isWander=false;
        if(Vector3.Distance(transform.position,wayPoints[currentIndex].position)>=MinDist){
            transform.LookAt(wayPoints[currentIndex]);
        //transform.position+= transform.forward*MoveSpeed*Time.deltaTime;
            agent.SetDestination(wayPoints[currentIndex].position);
        //soldier.animation.CrossFade("Walking");
        anim.SetFloat("hspeed",-1);
        anim.SetFloat("vspeed",1);
        }
        else {
        //soldier.animation.CrossFade("stand");
        anim.SetFloat("hspeed",-1);
        anim.SetFloat("vspeed",0);
           // Wander();
           isWander=true;
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
function Wander(){
    
      //getting a waypoint randomely       
    currentIndex = Random.Range(0,wayPoints.Length); 
    //checks if current waypoint of prev are same, if true it changes the waypoint
    while(currentIndex==prevIndex){
    if(currentIndex!=prevIndex){
        
           transform.LookAt(wayPoints[currentIndex]);
    }else{
    currentIndex = Random.Range(0,wayPoints.Length); 
    }
     
    }
     prevIndex=currentIndex;
    Debug.Log(currentIndex + " is current index ");
}