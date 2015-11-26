
var MoveSpeed=5;
var MoveAmount=2;
private var DefaultPos:Vector3;
private var NewPos:Vector3;
private var MoveOnX: float;
private var MoveOnY:float;
function Start () {
DefaultPos = transform.localPosition;
}

function Update () {
MoveOnX= Input.GetAxis("Mouse X")*Time.deltaTime*-MoveAmount;
MoveOnY= Input.GetAxis("Mouse Y")*Time.deltaTime*-MoveAmount;
NewPos= Vector3(DefaultPos.x+MoveOnX,DefaultPos.y+MoveOnY,DefaultPos.z);
transform.localPosition= Vector3.Lerp(DefaultPos,NewPos,MoveSpeed*Time.deltaTime);

}