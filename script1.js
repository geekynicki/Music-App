
var scales = ["C major", "G major", "D major", "F major", "A minor", "D minor"];

var broChords = ["C major", "G major", "D major", "F major", "A minor", "D minor"];
						


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

