const calcTips= function(bill){
    return bill>=50 && bill<=300 ? bill *0.15 : bill *0.20;
}
const bills =[22,295,176,440, 37,105,10,1100,86,52];
const tips =[];
const totals =[];
for(i=0; i< bills.length; i++){
    const tip = calcTips(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i])
}
console.log(bills,tips,totals);

const calcAvg = function(arr){
    sum=0;
    for(i=0;i<arr.length;i++){
        sum+=arr[i];
    }
 return sum/arr.length;
}
console.log(calcAvg([2,4,8]));
console.log(calcAvg(tips));
console.log(calcAvg(totals))