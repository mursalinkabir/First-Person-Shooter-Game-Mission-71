#pragma strict
var WaitTime : float=3.0;
var Explosion : Transform;
function Start () {
HasThrown();
}

function HasThrown(){
yield new WaitForSeconds(WaitTime);
Instantiate(Explosion,transform.position,Quaternion.identity);
Destroy(gameObject);


}