
//window.onload="initialise()";

var scales = [	"B major", "B&#9837 major", "E&#9837 major", "A&#9837 major", "D&#9837 major",
					"C# minor", "G# minor", "C minor", "F minor"];

var contScales = ["F major", "E&#9837 major", "D minor", "C minor"];
	
var chroScales = ["C", "C# or D&#9837", "D", "D# or E&#9837", "F", "F# or G&#9837", "G", "G# or A&#9837", "A", "A# or B&#9837", "B"]

var arpeggios = [	"B major", "B&#9837 major", "E&#9837 major", "A&#9837 major", "D&#9837 major",
						"C# minor", "G# minor", "C minor", "F minor"];
						


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

