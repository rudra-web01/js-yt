 function SayMyName(){
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("N");
    console.log("C");
    console.log("E");
}
//SayMyName()

// function AddNumbers(a,b){ 
//     //here (a,b) is parameter
//     console.log(a+b);   
// }
// AddNumbers(5,"6") //56 // here(5,6) is arguments
// AddNumbers("5",6) //56
// AddNumbers("5","6") //56

//function AddNumbers(a,b){ 
    //here (a,b) is parameter
    // let result = a+b
    // return result 
// }
// const result= AddNumbers(4,5)
// console.log("result", result);

// function loginUserMessage(username) {
//     if(username === undefined){
//         console.log("Enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage())
// loginUserMessage("Prince") //will print nothing
// console.log(loginUserMessage("Prince"));//this will print


//alternate method

// function loginUserMessage(username){
//     if(!username) {
//         console.log("Please enter a username");
//         return
        
//     }
//     return `${username} just logged in`
// }

//console.log(loginUserMessage());
// console.log(loginUserMessage("Pince"));

function calculateCartPrice(...num1){
    return num1
} ///this is called rest operator(...) when their are unknown number of arguments then we use this. it return the output un the form of array.
// console.log(calculateCartPrice(2,3,4,6));

const user={
    username: "prince",
    price: 299
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)
handleObject({
    username: "Rudra",
    price: 477
})
 const nArr= [100,40,74,]
 function returnSecondValue(getArray) {
    return getArray[1]
 }
//  console.log(returnSecondValue(nArr));
console.log(returnSecondValue([100,40,74]));

 


