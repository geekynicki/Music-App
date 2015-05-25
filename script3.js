
var scales = ["A major", "E major", "B major", "B&#9837 major", "E&#9837 major", "B minor", "G minor", "C minor"];

var contScales = ["A major", "A harmonic minor"];
	
var chroScales = ["A&#9837", "C"];

var arpeggios = [	"A major (hands together)", "G minor (hands together)", "E major (hands separately)", 
					"B major (hands separately)", "B&#9837 major (hands separately)", "E&#9837 major (hands separately)", 
					"B minor (hands separately)", "C minor (hands separately)"];
						
function generateTest(type){

	switch(type){
		case "scale":
			if (scales.length > 0){
				var scaleIndex = Math.floor((Math.random() * scales.length));
				document.getElementById("scale").innerHTML = scales[scaleIndex];
				scales.splice(scaleIndex, 1);
			}else{
				document.getElementById("scale").innerHTML = "Finished!";
			}
			break;
		case "contScale":
			if (contScales.length > 0){
				var contScaleIndex = Math.floor((Math.random() * contScales.length));
				document.getElementById("contScale").innerHTML = contScales[contScaleIndex];
				contScales.splice(contScaleIndex, 1);
			}else{
				document.getElementById("contScale").innerHTML = "Finished!";
			}
			break;
		case "chroScale":
			if (chroScales.length > 0){
				var chroScaleIndex = Math.floor((Math.random() * chroScales.length));
				document.getElementById("chroScale").innerHTML = chroScales[chroScaleIndex];
				chroScales.splice(chroScaleIndex, 1);
			}else{
				document.getElementById("chroScale").innerHTML = "Finished!";
			}
			break;
		case "arpeggio":
			if (arpeggios.length > 0){
				var arpeggioIndex = Math.floor((Math.random() * arpeggios.length));
				document.getElementById("arpeggio").innerHTML = arpeggios[arpeggioIndex];
				arpeggios.splice(arpeggioIndex, 1);
			}else{
				document.getElementById("arpeggio").innerHTML = "Finished!";
			}
			break;		
	}
}

