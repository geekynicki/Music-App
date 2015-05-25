
var scales = ["G major", "D major", "A major", "F major", "E minor", "D minor", "G minor"];

var contScales = ["C major", "E major"];
	
var arpeggios = ["G major", "D major", "A major", "D minor", "G minor"];
						
var broChords = ["F major", "E major"];

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
		case "arpeggio":
			if (arpeggios.length > 0){
				var arpeggioIndex = Math.floor((Math.random() * arpeggios.length));
				document.getElementById("arpeggio").innerHTML = arpeggios[arpeggioIndex];
				arpeggios.splice(arpeggioIndex, 1);
			}else{
				document.getElementById("arpeggio").innerHTML = "Finished!";
			}
			break;	
		case "broChord":
			if (broChords.length > 0){
				var broChordIndex = Math.floor((Math.random() * broChords.length));
				document.getElementById("broChord").innerHTML = broChords[broChordIndex];
				broChords.splice(broChordIndex, 1);
			}else{
				document.getElementById("broChord").innerHTML = "Finished!";
			}
			break;				
	}
}

