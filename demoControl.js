#pragma strict

var anim : Animator;
var Player: Transform;
function Start () 
{
    anim = GetComponent("Animator");
}
function Update () 
{
transform.LookAt(Player);
anim.SetFloat("vspeed", 1);

}