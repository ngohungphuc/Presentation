var tester = "hey hi";

function newFunction() {
    var hello = "hello";
}
console.log(hello); // error: Cannot find name 'hello'

// Hoisting of var: Hoisting is a JavaScript mechanism where variables
// and function declarations are moved to the top of their scope before code execution.
console.log (greeter); // undefined
var greeter = "say hello";

// var variables can be re-declared and updated
var a = 1;
var a = 2;
console.log(a);

let b = 5;
//let b = 10; // error Cannot redeclare block-scoped variable 'b'

let greeting = "say Hi";
let times = 4;

if (times > 3) {
    let hello = "say Hello instead";
    console.log(hello);// "say Hello instead"
}
//console.log(hello) // hello is not defined

const greeting = "say Hi";
greeting = "say Hello instead";// error: Attempt to assign to const or readonly variable

const greeting1 = {
    message: "say Hi",
    times: 4
}

greeting1 = {
     words: "Hello",
     number: "five"
} // error:  Attempt to assign to const or readonly variable

greeting1.message = "say Hello instead"; // okay
console.log(greeting1)


class Example {
    public readonly y = 6;
}

var e = new Example();

// Attempt to assign to const or readonly variable
e.y = 4;