var Fire : String;
var Reload : String;


function Start () {

}
function Update(){
	

}
function FireAnim () {
	gameObject.animation.Play(Fire);
}
function ReloadAnim () {
	gameObject.animation[Reload].speed= (gameObject.animation[Reload].clip.length/ Gun.ReloadTTime);
	gameObject.animation.Play(Reload);
}