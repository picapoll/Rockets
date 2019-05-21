class Car{
    name:string;
    maxPower:string;
    engines:engine[]=new Array();
    
    constructor(name:string,maxPower:string){
        this.name=name;
        this.maxPower=maxPower;
        
    }
    
    addEngine(engine:engine):void{
        this.engines.push(engine);
    }
}