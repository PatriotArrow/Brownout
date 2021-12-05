
// consumer type 1. residential 2.commercial 3. industrial
//section (01 - 99)
//phase = (1- 2)
// total consumption , payable amount
var cusID;
function unitsConsumed(){ //in KWh 

    return (714 * .5 * Math.random());

}
function amountDue(){
    var unitPrice = 1;
    if (phase == 2){
        unitPrice = 1;
    }else if (phase == 2){
        unitPrice = 2;
    }



}


function randomNumber() { 
    var phase = 1;
    min = Math.ceil(1);
    max = Math.floor(3);
    phase = Math.floor(Math.random() * (max - min + 1)) + min;
    if(phase == 2){
        phase = 3
    }
    return phase ;
} 

function unitPrice(){
    if (phase==1){}



}

