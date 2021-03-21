var $y = 0;
function nextSlide(cardi){
	let $z = document.querySelectorAll('.sec3-wrap > div').length;
	if(cardi && $y < $z - 1){
		$y++;
		document.querySelector('.sec3-wrap').style.transform = "translateX(" + (-100 * $y) + "%)";
		document.querySelector(".icon2").style.display = "flex";
		if($y == $z - 1){
			document.querySelector(".icon1").style.display = "none";
		}
	}
	else if(!cardi && $y > 0){
		$y--;
		document.querySelector('.sec3-wrap').style.transform = "translateX(" + (-100 * $y) + "%)";
		document.querySelector(".icon1").style.display = "flex";
		if($y == 0){
			document.querySelector(".icon2").style.display = "none";
		}
	}
}



function show(){
	document.getElementById('signup-bg').style.display = "flex";
}

function showLinks(){
	document.querySelector('.mob-links').style.display = "flex";
	document.querySelector('#clo').style.display = "flex";
	document.querySelector('#ope').style.display = "none";
}

function closeLinks(){
	document.querySelector('.mob-links').style.display = "none";
	document.querySelector('#clo').style.display = "none";
	document.querySelector('#ope').style.display = "flex";
}

function esc(){
	document.getElementById('signup-bg').style.display = "none";
	document.getElementByquerySelector('#esca').style.background = "red";
}