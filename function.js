// function fruits(apple,graphes){
//     const juice =`The fruits ${apple} and ${graphes} its makes only heality food`;
//     return juice;
// }
// const appleJuice =fruits(24,14);
// console.log(appleJuice)

// const cutPices= function(fruit){
//     return cutPices *8;
//   }
//   const fruitProcess = function(apple,orange){
//     const applePices = cutPices(apple);
//     const orangePices = cutPices(orange);
//     const juice = `The fruit process ${apple} items apples and ${orange} items oranges in this mixing`;
//     return juice;
//   }
//   console.log(fruitProcess(3,6))

  const calAge=function(birthyear){
    return 2022-birthyear;
  }
  
  const retriementYear = function(birthyear,name){
    const age = calAge(birthyear);
    const retirement= 65-age;
    // return retirement;
    // return `${name } is retires in ${retirement} years`;
    if(retirement>0){
      console.log(`${name} is a retairs of ${retirement} in years`);
      return retirement
    }else{
      return-1;
          console.log(`${name} is a retairs of ${retirement} in years`);
    }
  }
  console.log(retriementYear(1994,'durga'))
  console.log(retriementYear(1965,'bobby'))
  