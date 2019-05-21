//Rockets Names 
var rocketOne:string ;
var rocketTwo:string ;

var rocketOnePower = [0,0,0];
var rocketOnePowerMax = [10,30,80];
var rocketTwoPower = [0,0,0,0,0,0];


//Launch Rocket 1
function startRocket1(){
  
    var power = 10;
    for(var i=0;i<rocketOnePower.length;i++){                                                                                                                        
         console.log("for loop1: "+ [i])                                                                    
       for( var j=0; j<rocketOnePowerMax.length; j++ ){                                                                     
            if(rocketOnePowerMax[j] > rocketOnePower[i]){                                          
                  rocketOnePower[i]=power + rocketOnePower[i] 
                console.log("loop segon if: "+[i] +", Power: "+ rocketOnePower[i] +", PowerMax: "+rocketOnePowerMax[j]);                                                                  
            }                                                                                         
            else{                                                                                     
               console.log("Else")                                                                             
            } 
        }                                                                                                                                                                                     
    }



    console.log("button startRocket1: ");
    rocketOne ='32WESSDS';
   
   
    
 //Accelerate Rocket   
    /* rocketOnePower.forEach((n, index) => {  
        rocketOnePower[index] = n + power;
    });     */
    
/*     rocketOnePower = rocketOnePower.map(num=> num + power);
    console.log("Result-> rocketOnePower >10:  "+rocketOnePower)
  //  rocketOnePower.filter(item =>rocketOnePower[0] <10).map(num=> num + power);
    console.log("Result 1rst IF-> rocketOnePower >10:  "+rocketOnePower) */




 
 //Result
    console.log("Result-> "+rocketOnePower)





 

   
    document.getElementById("rocket1Name").innerHTML = rocketOne + ": 10,30,80";
   

}


//Launch Rocket 2
function startRocket2(){

    rocketTwo='LDSFJA32';
   

    console.log(rocketTwo);
    document.getElementById("rocket2Name").innerHTML = rocketTwo + ": 30,40,50,50,30,10";
  

}