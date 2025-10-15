//----------------stack------------------
//stack memory use hoti he jab (Primitive) datatype use hota he
// stack jo he vo dataype ki copy return krti he 

//----------------Heap------------------
//heap memory use hoti he jab (non-Primitive) datatype use hota he
// heap jo he vo dataype ka reference return krta he 

let myName = "Krishna" ;

let myAnotherName = myName ;

myAnotherName = "Kanha";
console.log(myAnotherName);
console.log(myName);

// no changes in my name as that variable is stored in stack and only shared copy value

let user1 = {
    name: "Adam",
age : 21,
gender: "male"
}

let user2 = user1;

user2.name = "Eve";
console.log (user1);

//  value of user1 got changes as it was stored in heap , and its referenced value is shared and stored in user2 