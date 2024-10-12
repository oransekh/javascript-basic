// Es Feautures

//template literals
let name = "oran";
let age = "19+";
let gender = "male";


// this code not esey to understand  
console.log("my name is " + name + " and my age " + age + " gender " + gender);
// so we are using template literals 
console.log(`my name is ${name} and my age ${age} and gender ${gender}`);

//Destructicing aggignment

//arr destructcing 
let arr = [1,2,3,4,5];
console.log(arr[0]);
console.log(arr[1]);

[a,b,c,d,e] = arr;

console.log(a+d)

// object destructing
const person = {
    name: "oran",
    age: 21,
    gender: "male"
};

const {gender, name, age} = person;
console.log(name + gender + age)





// // Rest and spread operators
//its for arr
const arr = [1,2,3,4];
const newArry = [...arr];


const otherArr = [5,6,7,8];

const jointAryy = [...newArry, ...otherArr];
console.log(jointAryy)


// its for objects
const num1 = {
    a:1,
    b:2,
    c:3,
    d:4,

};
const num2 ={
    e:5,
    f:6,
    g:7,
    h:8
};

console.log({...num1,...num2})



function sum(...nambers){
    let sum = 0;
    for(let i = 0; i < nambers.length; i++){
    sum += nambers[i];
    }
    return sum;
}

console.log(sum(1,2,3,4,5,6,7))



//let and const declarations
const name = "Tonny stark";
let age = 19;

console.log(name + age)