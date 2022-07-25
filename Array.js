const calTip =function(bill){
    return bill >=50 && bill <=300 ? bill*0.15 :bill*0.20; 
}
const bills =[122,155,44];
const Tips = [calTip(bills[0]),calTip(bills[1]),calTip(bills[2])];
console.log(Tips, bills);
const total =[bills[0] + Tips[0] + bills[1] + Tips[1] + bills[2] + Tips[2]];
console.log(total);