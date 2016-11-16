// Laura Veerkamp
// 10361561

/* use this to test out your function */
window.onload = function() {
 	// changeColor();
	changeColor("nl", "orange")
	changeColor("ch", "red")
	changeColor("gb", "blue")
	changeColor("gre", "pink")
}

/* changeColor takes a path ID and a color (hex value)
   and changes that path's fill color */
function changeColor(id, color) {
    document.getElementById(id).setAttribute("fill", color)
}