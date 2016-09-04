var names = ["kurt","ole","ib"];


function myforEach(arr,callback){
    for(var i =0; i < arr.length; i++){
        callback(arr[i]);
    }
}

function myFilter(arr,callback){
    for(var i =0; i < arr.length; i++){
        if(arr[i].length <= 3) {
            callback(arr[i]);

        }
    }
}

function myMap(arr,callback){
    for(var i =0; i < arr.length; i++){
        callback(arr[i].toUpperCase());
    }
}

console.log("opgave 2.1")
myforEach(names,function(name){
    console.log(name);

});

console.log("opgave 2.2")
myFilter(names,function(name){
    console.log(name);

});

console.log("opgave 2.3")
myMap(names,function(name){
    console.log(name);

});

function myforEach2(callback){
    for(var i =0; i < this.length; i++){
        callback(this[i]);
    }
}

function myFilter2(callback){
    for(var i =0; i < this.length; i++){
        if(this[i].length <= 3) {
            callback(this[i]);

        }
    }
}

function myMap2(callback){
    for(var i =0; i < this.length; i++){
        callback(this[i].toUpperCase());
    }
}

Array.prototype.myforEach = myforEach2;
Array.prototype.myFilter = myFilter2;
Array.prototype.myMap = myMap2;

console.log("opgave 3.1")
names.myforEach(function(name){
    console.log(name);

});

console.log("opgave 3.2")
names.myFilter(function(name){
    console.log(name);

});

console.log("opgave 3.3")
names.myMap(function(name){
    console.log(name);

});

console.log("opgave 4.1")

var a = [1,2,3];
var b = [1,2,3];


function handleNumArrays1(a, b, callback){
    var array = [];
    for(var i =0; i < a.length; i++){
        array.push(a[i] + b[i]);
    }
    callback(array);
}




handleNumArrays1(a,b,function(res){
    console.log(res.join(","));
})

console.log("opgave 4.2")
function handleNumArrays2(a, b, callback){
    var number = 0;
    for(var i =0; i < a.length; i++){
        number += a[i] + b[i];
    }
    callback(number);
}




handleNumArrays2(a,b,function(res){
    console.log(res);
})

console.log("opgave 4.3")
function handleNumArrays3(a, callback){
    var array = [];
    for(var i =0; i < a.length; i++){
        array.push(a[i] * 10);
    }
    callback(array);
}




handleNumArrays3(a,function(res){
    console.log(res.join(","));
})


console.log("Opgave 5, Hoisting (Hosting)");

var a2 = 5;


var hoisting = function(){
    var c2 = a2+b2;
    console.log("a2 is: " + a2 + " b2 is: " + b2 + " c2 is: " + c2)

}
hoisting();

var b2 = 4;

function HostHost(){
    llama();
    Spider();

    function llama(){
        console.log("I'm a llama");
    }


/*
    ///////// Her ser vi at en variables decleration er ikke komplet hoisted.
    var Spider = function(){
        console.log("And i'm spiderman");

    }
    */


     function Spider(){
        console.log("And i'm spiderman");
    }
}

HostHost();


function fff1()
{


    (function(){
        var txt = "Hello World";
        console.log(txt);  //OK
    })();

    // console.log(txt);  //Throws an error


    (function(){ // private function ?

        console.log("I can only be run ONCE bitch. " + a())
        function a ()
        {
          console.log("functions are also hoisted inside a IIFE")
            return "assllama";
        }


    })();
    console.log(a);



}

console.log(fff1())


console.log("Opgave 8 - Object (1)")
console.log("")

var object = {name: "lars", køn: "mand", smart: true, efternavn: "hello", tolvtaltileksammen : true}


for(var x in object)
{
    var y33 = object[x];
   console.log(y33);
}
console.log("")
delete object.smart
console.log("")
for(var x in object)
{
    var y33 = object[x];
    console.log(y33);
}
console.log("")
console.log(object.hasOwnProperty("smart"));
console.log("Opgave 8 - Object (2)")
function create(fn, ln, age)
{
var person = {firstname : fn, lastname : ln, age : age}
    return person;
}

var myperson = create("seb", "ryb", 50)
console.log("asdf - " + myperson.firstname)

function getpers(person) {

    for(var x in person)
    {
        var y33 = person[x];
        console.log(x + " - " + y33);
    }

}

getpers(myperson);


console.log("")

function listAllProperties(o) {
    var objectToInspect;
    var result = [];

    for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)){
        result = result.concat(Object.getOwnPropertyNames(objectToInspect));
    }

    return result;
}
console.log("")
console.log(listAllProperties(myperson));
console.log("")
delete myperson.age
console.log("")
console.log(listAllProperties(myperson));
console.log("")

var makeCounter = function() {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function() {changeBy(1);},
        decrement: function() {changeBy(-1);},
        value: function() { return privateCounter;}
    }
};
var counter1 = makeCounter();
var counter2 = makeCounter();
//counter1.increment();
//counter1.increment();
//lert(counter1.value()); /* Alerts 2 */