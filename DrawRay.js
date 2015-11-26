#pragma strict

function Start () {
OnDrawGizmosSelected ();
}

function Update () {

	
}
function OnDrawGizmosSelected () {
		// Draws a 5 meter long red line in front of the object
		Gizmos.color = Color.red;
		var direction : Vector3 = transform.TransformDirection (Vector3.forward) * 5;
		Gizmos.DrawRay (transform.position, direction);
	}