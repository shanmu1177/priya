var a=10;
var b=20;
console.log(a)
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a==b)
console.log(a!=b)

function add(){
    var x=10;
    var y=5;
    console.log(x+y)
}
add()

function mul(m,n){
    console.log(m*n)
}
mul(5,4)

var food="dosa";
switch(food){
    case "idly":
        console.log("idly served")
        break;
    case "dosa":
        console.log("dosa served")
        break;
    case "vada":
         console.log("vada served")
         break;
    default:
        console.log("not available")
        break;
}

var sub=(a,b)=>{
    console.log(a-b)
}
sub(25,10)

var a="java"
var b="script"
console.log(a+b)
console.log(a==b)
console.log(a===b)
console.log(a!=b)
console.log(a>b)
console.log(a<b)
console.log((a==b)&&(a!=b))
console.log((a==b)||(a!=b))


let x = 5;
let y = 20;
console.log(`${x}+${y}=${x+y}`)

var backtick=`welcome`;
console.log(backtick)

var a=10;
var b='5';
console.log(a+b)

var a='thalapathy'
var b=`vijay`
console.log(a+" "+b)

var n=7;
if(n%2==0){
    console.log("even number")
}
else{
    console.log("odd number")
}

var age=18;
if(age>=18){
    console.log("eligible for vote")
}
else{
    console.log("not eligible for vote")
}


// var number=Number(prompt("Enter the number:"));
var number=7;
if(number>0){
    console.log("number is positive")
}
else if(number==0){
    console.log("number is zero")}
else { 
    console.log("number is negative")
}

var a=10,b=20;
var z=30;
if(a>b){
    if(a>z){
        console.log(a)
    }
    else{
        console.log(z)
    }
}
else{
    if(b>z){
        console.log(b)
    }
    else{
        console.log(z)
    }
}

for(var i=1;i<=10;i++){
    if(i%2==0){
        console.log("Even numbers",i)
    }
}

do{
    var i=1;
    console.log("numbers from 1 to 10:",i)
    i++;
}
while(i<=10);