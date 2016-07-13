Global Scope:
var z = 1;
function print_it(){
  console.log(z); 


Local Scope:
var z = 3;
function some_f(z){
  console.log(z);
}
some_f(10)
>>10
console.log(z);
>>3
or
var z = 3;
function some_f(){
  var z = 20;
  console.log(z);
}
some_f()
>>20
console.log(z);
>>3

Block Scope:
var c = 10;
function hello(){
  if(true){
var c = 2; }
  console.log(c);
  // returns 2, not the global value 10
  // implication: variables don't have a
  // separate scope within a block
}


Argument:
function haha(argument_uno){
  console.log(argument_uno);
}
haha("hello");
>>"hello"
console.log(argument_uno)


Testing:
"stringone" === "string two";
>false
  (10-5) == 5;
  (10-5) == "5";
  "stringone" !== "string two";
>true
5 > 10; > false


The if Statement:
if(5>10){
console.log("You'll never see this in the console because 5 is not greater than 10");
}
if(5<10){
  console.log("But you'll definitely see this");
}

The else Statement:
if(5>10){
  console.log("You'll never see this because 5 is not greater than 10");
} else{
  console.log("You will see this though, since 5 < 10 evaluates to false");
}


Functions:
function some_f(){
  var z = 20;
  console.log(z);
}




