const years =[1991,1994,1996,1998,2003];
const ages=[];
for(let i=0; i<years.length;i++){
  ages.push(2022-years[i])  
}
console.log(ages,typeof years)


const names=[
    'firstName',
    'lastName',
    'age',
    'hobbies',
    'habits'
    ]
for(i=names.length-1; i>=0;i--){
    console.log(names[i])
}
for(let durga=1; durga<4; durga++){
    console.log(`$$$$$$$$this is the ${durga} first loop$$$$$`)
    for(let bobby=1; bobby<5; bobby++){
        console.log(`********this the second${bobby} loop******* `)
    }
}