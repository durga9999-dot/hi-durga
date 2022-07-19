const hasDrivingLicense =true;
const hasGoodVision=falae;
const language = true;
console.log(hasDrivingLicens && hasGoodVision)
if(hasDrivingLicense && hasGoodVision){
  console.log("durga able to driving")
}else{
  console.log("durga unable to driving")
}

const english=true;
const population =true;
const isIsland=false;
const country =true;
if(language===english && population < 50 && !isIsland){
  console.log(`sahara live in ${country} :)` )
}else{
  console.log(`sahara does n't live in ${country} :)`);
}



const scoreDolphins = (96+108+89)/3;
const scoreKoalas   =(89+91+110)/3;
console.log(scoreDolphins,scoreKoalas);
if(scoreDolphins>scoreKoalas){
  console.log("trophy win Dolphins");}
  else if(scoreKoalas>scoreDolphins){
    console.log("trophy win koalas");
  }else if(scoreDolphins===scoreKoalas){
    console.log("both same stuff");
  }