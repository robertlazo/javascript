function calculate() {
	// Purpose:  calculate volume of a sphere
	// Author:  Bob Lazo
	// Date:  16 February 2013
	'use strict';
	
	
	
	
	var volume;
	
	
	var radius = document.getElementById('radius').value;
	
	
	radius=Math.abs(radius);
	
	
	volume = (4/3) * Math.PI * Math.pow(radius, 3);
	
	volume = volume.toFixed(4);
	
	document.getElementById('volume').value = volume;
	
	return false;
	
	}//End of calculate() function.
	
	function init() {
		'use strict';
		document.getElementById('theForm').onsubmit = calculate;
	} //End of init() function.
	
	window.onload = init;	
		
		
		