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
        console.log(`even numbers=${i}`)
    }
    else if(i%2!=0){
        console.log("Odd numbers=",i)
    }
}

let sum=0;
for(let i=1;i<=10;i++){
    if(i%2==0){
        sum+=i
    }
}
console.log("The sum of Even numebers is",sum)



function sumofeven(start,end){
    let sum=0;
for(let i=start;i<=end;i++){
    if(i%2==0){
        sum+=i
    }
}
 return(sum)
}
var result=sumofeven(1,10)
console.log("Sum of even numbers",result)


question="are you single?..."
var answer=("Question==yes")?"yes":"no"
console.log(answer)

const icecream=["orange","vennila","chocolate","mango","butterscotch"];
console.log(icecream)

//"for in" which is used to display the index value  
for(var items in icecream){
    console.log(items)
}

//"for of" which is used to display the key values of givena array
for(var flavour of icecream)
{
    console.log(flavour)
}

const details=[];
details[0]="name";
details[1]="roll no";
details[2]="class";
details[3]="phone no";
console.log(details)
console.log(details[0])
details[3]="mobile no";
//toString function
console.log(details.toString())
//length function
var length=details.length;
console.log("total length",length)

//key value pairs (obj)
var fav={color:"blue",actor:"vijay",cricket_tem:"csk",food:"biriyani"}
for(var favourite in fav){
     console.log(favourite)
     console.log(fav[favourite])
}

//char.at() function
 var cols=["blue","red","green","yellow","orange"];
 var colours=cols.at(3);
 console.log(colours)

 //spread operator
 var arr1=[10,20,30,40,50];
 var arr2=[...arr1,60,70];
 console.log(arr2)

 //destructuring operator 
 const movies=["Retro","GBU","Goat"];
 const [m1,m2,m3]=movies;
 console.log(m1)
 console.log(m2)
 console.log(m3)

 //call back function
 function sayhi(){
    console.log("hii")
 }
 function func(name,callback){
    console.log("hello"+" "+name)
    callback()
 }
 func("bro",sayhi);


const btn=document.getElementById("btn")
 btn.onclick=function(){
    alert("Welcome to Instagram \n nambi vaanga!..naasasma ponga!..")
    window.open("https://www.instagram.com")
 }

 const yt=document.getElementsByClassName(".yt")
  yt.onclick=function(){
    alert("Its Youtube Time..!")
    window.open("https://www.youtube.com")
  }