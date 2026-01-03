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

function loginUserMessage(username){
    if(!username) {
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage());
console.log(loginUserMessage("Pince"));



