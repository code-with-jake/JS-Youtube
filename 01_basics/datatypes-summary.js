// primitive

// 7 types : String , Number , Boolearn , null , undefined , Symbol , BigInt


/*const score = 100
const scoreValue = 100.69

const isLoggedIn = False 
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
*/
// console.log(id === anotherId);

// const bigNumber = 7456723461923785n

// Reference (non primitive)

// array , objects , Functions

/*
const heros = ["iron man ","thor","hulk"];
let myObj ={
    name : "keval jadhav",
    age :20, 
}

const myfunction = function () {
    // console.log("Hello motherfucker");
    
}
*/
// console.log(typeof bigNumber);



// *****************************************


// Stack  (Primitive), Heap (Non - Primitive)

let myYoutubename = "hiteshchoudharydotcom"

let  anothername = myYoutubename
anothername = "chaiorbhok"


// console.log(myYoutubename);
// console.log(anothername);


let userOne ={
    email : "keval@gmail.com",
    upi : "diko@bob"
}


let usertwo = userOne

usertwo.email = "mohan@gmail.com"

console.log(userOne.email);
console.log(usertwo.email);
