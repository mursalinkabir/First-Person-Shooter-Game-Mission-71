#pragma strict
var pauseCanvas : Canvas;
var optionCanvas : Canvas;
function Start () {
Screen.lockCursor=false;
Screen.showCursor=false;
}

function Update () {
if(Input.GetKeyDown(KeyCode.Escape)){
(gameObject.Find("First Person Controller").GetComponent("MouseLook") as MonoBehaviour).enabled=false;
(gameObject.Find("Main Camera").GetComponent("MouseLook") as MonoBehaviour).enabled=false;
pauseCanvas.enabled=true;
Time.timeScale=0;
Screen.lockCursor=true;
Screen.showCursor=true;
}
}
function ResumeGame(){
(gameObject.Find("First Person Controller").GetComponent("MouseLook") as MonoBehaviour).enabled=true;
(gameObject.Find("Main Camera").GetComponent("MouseLook") as MonoBehaviour).enabled=true;
pauseCanvas.enabled=false;
Time.timeScale=1;
Screen.lockCursor=false;
Screen.showCursor=false; 
}
function PauseOptions(){
pauseCanvas.enabled=!pauseCanvas.enabled;
optionCanvas.enabled=!optionCanvas.enabled;
}
function ExitGame(){
Application.Quit();
}
function MainMenuLoad(){
Application.LoadLevel("Main Menu");
}