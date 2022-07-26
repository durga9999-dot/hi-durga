// const calTip =function(bill){
//     return bill >=50 && bill <=300 ? bill*0.15 :bill*0.20; 
// }
// const bills =[122,155,44];
// const Tips = [calTip(bills[0]),calTip(bills[1]),calTip(bills[2])];
// console.log(Tips, bills);
// const total =[bills[0] + Tips[0] + bills[1] + Tips[1] + bills[2] + Tips[2]];
// console.log(total);

const durga ={
    firstName :'durgarao',
    lastName :'Sirisolla',
    age :28,
    birthYear:1994,
    job:'UI Developer',
    friends:['Aravind','Akhi','Eswar'],
    hasDrivingLicense :true,
    calAge:function(){
       this.age = 2022-this.birthYear
        return this.age;
    },
    Summary: function () {
        return`The ${this.firstName} is a ${this.calAge()} old his working on ${this.job} years and he is ${this.hasDrivingLicense ? 'a' :'no' }driving license`
    }
}
console.log(durga.Summary());
   console.log(durga.calAge());
   console.log(durga['calAge']())
console.log(durga);
console.log(durga.lastName);
console.log(durga['firstName'])
const nameKey ='Name';
console.log(durga[ 'first' + nameKey] )
console.log(durga['last' + nameKey]);
console.log(`${durga.firstName} has best friend ${durga.friends[1]}`);