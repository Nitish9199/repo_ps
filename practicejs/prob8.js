//Given a string, fing out if the string has any vowels in if.
  //if yes print yes else No
let num="masai school";
flag="No"
for(i=0; i<=num.length-1;i++){
  if(num[i]=="a"|| num[i]=="e"|| num[i]=="i"|| num[i]=="o"|| num[i]=="u"){
    flag="Yes"
  }
}
console.log(flag)