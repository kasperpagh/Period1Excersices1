/**
 * Created by kasper pagh on 04-09-2016.
 */


//Explain the use of: "use strict"

/*
    Vi bruger "use stickt" for at gøre javascript mere sikkert at arbejde med, så man ikke eksempelvis kan lave en type-0 i et variabel navn.
    Strict gør nemlig at undeclared variabler giver fejl, hvis man prøver bruge at dem. Det vil altså sige at følgende kode ikke virker:

 "use strict";
 myFunction();

 function myFunction()
 {
 y = 3.14;   // This will cause an error (y is not defined)
 }

 følgende kode virker:
 */

function myFunction()
{
    var y = 3.14;   // This will cause an error (y is not defined)
    console.log("Jeg virker! y = " + y)
}

myFunction();




//Explain the use of: Variable/function-Hoisting

/*
Hosting beteger hvorledes variabler og funktioner af JS løftes op i toppen af dokumentet, og derved kan tilgås af alle members, selvom de er dekleret efter deres anvendelse. Variabler er dog ikke komplet hoisted, f.eks giver følgende kode denne fejl:
 "a2 is: 5 b2 is: undefined c2 is: NaN"

 var a2 = 5;


 var hoisting = function(){
 var c2 = a2+b2;
 console.log("a2 is: " + a2 + " b2 is: " + b2 + " c2 is: " + c2)

 }
 hoisting();

 var b2 = 4; //Variable ikke hosited!

 Funktioner er dog helt hoisted derfor kan man følgende:
 */

function hosthost() {
    llama(); //Begge funktioner kan kaldes selvom de først er defineret på en senere linje end kaldet til dem.
    Spider();

    function llama() {
        console.log("I'm a llama");
    };
    function Spider(){
        console.log("And i'm spiderman");
    };
}
hosthost();


//THIS in JS vs Java.

/*
    This i javascript referer som regel til det gobale objekt (I strict mode er global this per default undefined). Kaldes this dog inden for et objekts memberfunction, holder den værdien af det object metoden er en member af.
    Rent konkret referer this i JS altid til et objekt, defineret at den såkaldte ThisBinding, som er en property på alle metoder og objekter.


 */

var person =
{
    firstName: "Penelope",
    lastName: "Barrymore",
    fullName: function()
    {
        console.log(this.firstName + " " + this.lastName); // Fordi full name er en member i person objektet, referer this til person i fullNames context.
        console.log(person.firstName + " " + person.lastName); //ækvivalent til ovenstående linie.
    }

};

person.fullName();


// Function Closures and the JavaScript Module Pattern

/*
    Wannabe private variabler ved brug af closures. JS module patterns er brugen af understående til at opnå sikker kode.
 */
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

add();
add();
add();
//counter ender på tre!


//Immediately-Invoked Function Expressions (IIFE)
/*
    IIFE er når en funktions deklereres og ekekveres på samme tid. Følgende er et eksempler derpå.
 */

(function ()
{
    console.log("Jeg er et eksempel på IIFE!");
})();


//JavaScript Prototyping
/*
    I JS er en prototype en constructor til et objekt. Navnet er fordi en constructor kan ses som prototypen for alle objcter af samme type!
 */


//User defined Callback Functions

/*
    Er en helt almindelig callback funktion, der kan defineres således:
 */

function ikkeCallBack(callback)
{
    if (callback && typeof(callback) === "function")
    {
        callback();
    }
};


function callback()
{
    console.log("Skrevet af en callback funktion!");
};

ikkeCallBack(callback);


//Explain generally about node.js and NPM.
/*
Node.js er omskrukturering af javascript til en sådan grad, at det kan betragetes som et serverside sprog på linie med PHP. Det fungere ved, at lade os udvikle servere og apps meget nemt. Derefter kan vi extende disse apps med
nogle af de mange modules, der er blevet lavet - såkaldte node modules. EKsempelvis er der modules til: I/O, HTTPm kryptografi mv.

NPM er en helt almindelig package manager, så linje med RPM (red hat package manager), apt-get (buntu-familien), RubyGems mv. Den indeholder modules (og meget andet funky stuff).
 */


//Explain about the Event Loop in Node.js

/*
    Event loop baserer sig på callbacks. Hver gang der eksekveres en asynkon operations O1, er det eventloopet der kalder O1s callback (ofte baseret på udfaldet af O1s opgave). Node forsøger at undgå at bruge tråde,
     dog bliver node nødt til at bruge flere i praksis, da event loopet bliver nødt til at køre uafbrudt for at lytte på callbacks. Se billed på link: http://softwareengineeringdaily.com/wp-content/uploads/2015/07/event-loop.jpg
 */


//Provide examples of user defined reusable modules implemented in Node.js

/*
express er et module der simplificerer server kodning, til et punkt hvor du kan skrive express().createServer();
socket.io er et module der tillader dig at lave socket programmering i node.js.
mysql er en MYSQL driver skrevet til node, i node.
bower er en alternativ package manager.
 */