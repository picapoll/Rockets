//Fake DB
var rocketOneName='32WESSDS';
var rocketTwoName: string;
var rocketOnePower = [0, 0, 0];
var rocketOnePowerMax = [10, 30, 80];
var rocketTwoPower = [0, 0, 0, 0, 0, 0];
var rocketTwoPowerMax = [30,40,50,50,30,10];
var rocketTwo:string;

//Rockets Names 
var rocket: Rocket; 
var power:number=10;
var rocketSpeedOne:number;
var rocketSpeedTwo:number;

//Launch Rocket 1
function startRocket1() {
   rocket= new Rocket(rocketOneName)
   for (let index = 0; index < rocketOnePower.length; index++) {
    rocket.addEngine(new Engine(rocketOnePower[index]));
   }
    
    rocketSpeedOne=0;
 
    document.getElementById("rocket1Name").innerHTML = "Rocket: "+rocketOneName +" is ready with "+rocketOnePowerMax+" PH, Current Speed: " +rocketSpeedOne;
    rocketOneGph(); 
};
    
//Accelerete Button
function accelerateRocketOne() {
    rocketSpeedOne=0;
    for (var i = 0; i < rocketOnePower.length; i++) {
        if (rocketOnePowerMax[i] > rocketOnePower[i]) {
            rocketOnePower[i] = power + rocketOnePower[i]
        } else {
            console.log("Skip Value")
        }

    }
    if (rocketOnePower >= rocketOnePowerMax) {
        alert("max power")
    }

    for (var i = 0; i < rocketOnePower.length; i++) {
        rocketSpeedOne += rocketOnePower[i]
    }
 
    document.getElementById("rocket1Name").innerHTML = "Rocket: " + rocketOneName + " is ready with " + rocketOnePower + " PH, Current Speed: " + rocketSpeedOne;
    rocketOneGph(); 
}

function decelereteRocketOne(){
    power=+10;
    
    for (var i = 0; i < rocketOnePower.length; i++) {
        console.log("1rst for loop Position-> " + [i]);
        if (0 < rocketOnePower[i]) {
            rocketOnePower[i] =  rocketOnePower[i] -power
            console.log("loop secon  if. Position: " + [i] + ", Power: " + rocketOnePower[i] + ", PowerMax: " + rocketOnePowerMax[i]);
        } else {
           console.log("Motor: "+[i] +" a  0!")
         }
    }

    rocketSpeedOne =0;
    for (var i = 0; i < rocketOnePower.length; i++) {
        rocketSpeedOne += rocketOnePower[i]       
    }
  
  
    document.getElementById("rocket1Name").innerHTML = "Rocket: " + rocketOneName + " is ready with " + rocketOnePower + " PH, Current Speed: " + rocketSpeedOne;
    if (rocketSpeedOne ==0) {
        alert("Rocket Landing"); 
    }
    rocketOneGph(); 
}
 
//Launch Rocket 2
function startRocket2() {

    rocketTwo = 'LDSFJA32';
    rocketSpeedTwo=0;

    document.getElementById("rocket2Name").innerHTML = "Rocket: "+rocketTwo +" is ready with "+rocketTwoPowerMax+" PH, Current Speed: " +rocketSpeedTwo;
    rocketTwoGph();
};

function accelerateRocketTwo() {
    rocketSpeedTwo=0;
    for (var i = 0; i < rocketTwoPower.length; i++) {
        if (rocketTwoPowerMax[i] > rocketTwoPower[i]) {
            rocketTwoPower[i] = power + rocketTwoPower[i]
        } else {
            console.log("Skip Value")
        }

    }
    if (rocketTwoPower >= rocketTwoPowerMax) {
        alert("max power")
    }

    for (var i = 0; i < rocketTwoPower.length; i++) {
        rocketSpeedTwo += rocketTwoPower[i]
    }

    document.getElementById("rocket2Name").innerHTML = "Rocket: " + rocketTwo + " is using " + rocketTwoPower +"of the "+ rocketTwoPowerMax+ " PH, Current Speed: " + rocketSpeedTwo;
    rocketTwoGph();
}



function decelereteRocketTwo(){
    power=10;
    
    for (var i = 0; i < rocketTwoPower.length; i++) {
        console.log("1rst for loop Position-> " + [i]);
        if (0 < rocketTwoPower[i]) {
            rocketTwoPower[i] =  rocketTwoPower[i] -power
        } else {
           console.log("Motor: "+[i] +" a  0!")
         }
    }

    rocketSpeedTwo =0;
    for (var i = 0; i < rocketTwoPower.length; i++) {
        rocketSpeedTwo += rocketTwoPower[i]   
    }
    
    document.getElementById("rocket2Name").innerHTML = "Rocket: " + rocketTwo + " is using " + rocketTwoPower +" of the "+ rocketTwoPowerMax+ " PH, Current Speed: " + rocketSpeedTwo);
    if (rocketSpeedTwo ==0) {
        alert("Rocket Landing")
        //Deshabilitar boto
    }
    rocketTwoGph();
}