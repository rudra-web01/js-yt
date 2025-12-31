//objects singleton
//const tinderUser= new Object() //singleton object
const tinderUser= {} //non-singleton object

tinderUser.id= "prince07"
tinderUser.name= "prince"
tinderUser.isLoggedIn= false

// console.log(tinderUser);

const regularUser= {
    mail : "someone@gmail.com",
    fullname : {
        userfullname : {
            firstname:"Prince",
            lastname : "Mishra"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

//const obj3 = { obj1, obj2 }
//const obj3=Object.assign({},obj1,obj2,obj4)
const obj3={...obj1, ...obj2}
//console.log(obj3);

const users= [

    {
        id:1,
        email: "p@gmail.com",

    },
    {
        id:1,
        email: "p@gmail.com",

    },
    {
        id:1,
        email: "p@gmail.com",

    }
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

