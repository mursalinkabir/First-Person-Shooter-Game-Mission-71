var MaxHealth=100;
var CurHealth=0;
function Start () {
CurHealth=MaxHealth;
}

function Update () {
if(CurHealth<=0){
Application.LoadLevel(Application.loadedLevel);
}
}
function AdjustHealth(Adj : float){
    CurHealth -= Adj;
	Debug.Log("Current Health of player "+CurHealth);
}