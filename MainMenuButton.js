#pragma strict
var panelInfoCanvas:Canvas;
var infoOpen=false;
function Start () {

}

function Update () {

}
function StartGame(){
Application.LoadLevel("Village Level");
}
function ExitGame(){
Application.Quit();
}
function InfoPanel(){
if(infoOpen==false){
infoOpen=true;
panelInfoCanvas.enabled=true;

}
else if(infoOpen==true){
infoOpen=false;
panelInfoCanvas.enabled=false;

}


}
function openWebsite(){
Application.OpenURL("google.com");
}