//Given an array find out the count of such numbers which are greater than both its neighbors.
let arr=[2,5,6,3,8,4,50,60,80];
let count=0;
for(let i=1; i<=arr.length-1;i++){
  if(arr[i]>arr[i-1] && arr[i]>arr[i+1]){
    count++
  }
}
console.log(count)