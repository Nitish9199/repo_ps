let upp="NITISH";
let lower="nitish";
let str= "t";
let bag="";
for(let i=0; i<str.length; i++){
  for(let j=0; j<upp.length;j++){
    if(str[i] ==lower[j]){
    bag+=upp[j]
    }
  }
}
console.log(bag)