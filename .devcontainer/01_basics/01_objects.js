//singleton
//literal se singleton nhi bsnega or constructor se banega
//object literals
const mysym= Symbol("key1")
const jsUser={
    name: "Prince",
    "Full Name" : "Prince Mishra",
    [mysym]: "mykey1",
    age: 20,
    loc: "gzb",
    mail : "prince@gmai.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturday"]
}
// console.log(jsUser.mail);
// console.log(jsUser["mail"]);
// console.log(jsUser["Full Name"]);
// console.log(jsUser[mysym]);

//to change the object
jsUser.mail="prince@web.com"
//freeze the object
// Object.freeze(jsUser)
 
// jsUser.greeting = function() {
//     console.log("Hello user");  
// }
// jsUser.greeting2 = function() {
//     console.log(`Hello user ${this["Full Name"]}`);  
// }
// console.log(jsUser.greeting2());
// console.log(jsUser.greeting());


