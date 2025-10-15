// basic conversion
console.log(2> 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2!= 1);
console.log(2>= 1);
console.log(2 <= 1);

//  complicated conversions
// ---------------------( just for reasing , we usually avoids this type of conversions)------------------ 

console.log(null > 0);  //false
  console.log(null == 0);  //false
  console.log(null >= 0); //true
  
  //   reason is "equality check == "  and  " comparisons > < >= <= " works differently
// comparison converts null to a number , treating it as 0.


  console.log(undefined == 0); //false
  console.log(undefined > 0); //false
  console.log(undefined < 0); //false
//   undefined sabme false deta he , chahe kisise bhi comparison karo


  console.log("2" === 0); 