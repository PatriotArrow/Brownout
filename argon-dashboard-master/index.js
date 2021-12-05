

//section (01 - 99)
//phase = (1- 2)
// total consumption , payable amount
// var cusID;
// function unitsConsumed(){ //in KWh 

//     return (714 * .5 * Math.random());

// }
// function amountDue(){
//     var amountDue = unitPrice * Units 


var phase;
var unitPrice;
var consumerType;
var unitsConsumed;
var amountDue;
// }
function randomNumber(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function phasef() { 
     phase = 1;
    if(consumerType== 2 || consumerType==3){
        return 3;
    }
    min = Math.ceil(1);
    max = Math.floor(3);
    phase = Math.floor(Math.random() * (max - min + 1)) + min;
    if(phase == 2){
        phase = 3
    }
    return phase ;
} 

function unitPricef(){
    phase = phasef();
    
    if (phase == 1 ){
        unitPrice = 1;

    }
    else unitPrice = 1.25;
    return unitPrice;



}
function consumerTypef() { // consumer type 1. residential 2.commercial 3. industrial
    min = Math.ceil(1);
    max = Math.floor(3); 
    consumerType =  Math.floor(Math.random() * (max - min + 1)) + min;
    if (consumerType== 1){
        return "Residential"
    }else if (consumerType == 2){
        return "Commercial";
    }else return "Industrial";
}

function unitsConsumedf(){

    if (consumerType== 1){
        unitsConsumed=randomNumber(700,900);
    }
    else if (consumerType==2){
        unitsConsumed= randomNumber(800,1000);        
    }
    else unitsConsumed = randomNumber(1200,3000);
    return unitsConsumed;
}

function amountDuef(){
    amountDue = unitsConsumed * unitPrice;
    return amountDue;
}

function dataMonth(){
    var dataMonth = new Array();
    for (let i = 0; i < 7; i++) {
        dataMonth[i] = unitsConsumedf();

        
    }
    dataMonth[7] = unitsConsumed;
    return dataMonth;

}