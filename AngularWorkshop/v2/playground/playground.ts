var tester = "hey hi";

function newFunction() {
  var hello = "hello";
}
console.log(hello); // error: Cannot find name 'hello'

// Hoisting of var: Hoisting is a JavaScript mechanism where variables
// and function declarations are moved to the top of their scope before code execution.
console.log(greeter); // undefined
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
  console.log(hello); // "say Hello instead"
}
//console.log(hello) // hello is not defined

const greeting = "say Hi";
greeting = "say Hello instead"; // error: Attempt to assign to const or readonly variable

const greeting1 = {
  message: "say Hi",
  times: 4,
};

greeting1 = {
  words: "Hello",
  number: "five",
}; // error:  Attempt to assign to const or readonly variable

greeting1.message = "say Hello instead"; // okay
console.log(greeting1);

class Example {
  public readonly y = 6;
}

var e = new Example();

// Attempt to assign to const or readonly variable
e.y = 4;

function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

greet(42); // Argument of type 'number' is not assignable to parameter of type 'string'.

function getFavoriteNumber(): number {
  return 26;
}

// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

// Optional Properties
function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");

const x = "hello" as number;

// arrow function
let sum = (x: number, y: number) => x + y;

//Function Overloading
function add(a: string, b: string): string;
function add(a: number, b: number): number;

//spread operator
function Greet(greeting: string, ...names: string[]) {
  return greeting + " " + names.join(", ") + "!";
}
Greet("Hello", "Steve", "Bill"); // returns "Hello Steve, Bill!"

function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}
// 'a' gets value [10, 20, 30, 40]
const a = multiply(10, 1, 2, 3, 4);

var parts = ["shoulders", "knees"];
var lyrics = ["head", ...parts, "and", "toes"];
// ["head", "shoulders", "knees", "and", "toes"]

//destructer
let a, b, rest;
[a, b] = [10, 20];
[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]

function firstElement<Type>(arr: Type[]): Type {
  return arr[0];
}

// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);


function getArray<T>(items : T[] ) : T[] {
  return new Array<T>().concat(items);
}

let myNumArr = getArray<number>([100, 200, 300]);
let myStrArr = getArray<string>(["Hello", "World"]);

myNumArr.push(400); // OK