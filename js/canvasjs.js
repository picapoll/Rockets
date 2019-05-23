
function rocketOneGph () {
console.log("Convas Onload "+rocketOnePower)


var dps = [];
for(var element in rocketOnePower) {
	dps.push({label: element, y: rocketOnePower[element]});
}

var chart = new CanvasJS.Chart("chartContainer",
{        
	data: [
	{
		type: "column",
		dataPoints: dps
	}					
	]
});

chart.render();
}


function rocketTwoGph() {
	
	var dps = [];
	for(var element in rocketTwoPower) {
		dps.push({label: element, y: rocketTwoPower[element]});
	}
	
	var chart = new CanvasJS.Chart("chartContainer2",
	{        
		data: [
		{
			type: "column",
			dataPoints: dps
		}					
		]
	});
	
	chart.render();
	}
	

