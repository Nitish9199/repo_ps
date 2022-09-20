let  obj= {
  name: "Aman",
  age: 23,
  hobbies:["co","bab","mov"]
};
for(let i=0; i<=3; i++){
  obj["hobbies"].push(i*i);
}
console.log(obj.hobbies[5]);