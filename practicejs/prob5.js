let arr=[1,2,3,4,5,6,7,8,5,2,1,4,3,5,64,25,65,85,96,85];
let count=0;
for(let i=0; i<=arr.length-1;i++){
  if((arr[i]%2==1)&&(arr[i-1]==i**2 || arr[i+1]==i**2)){
    count++
  }
}
console.log(count)