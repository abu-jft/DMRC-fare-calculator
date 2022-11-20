// let a=document.querySelector("#station_from")
// let b=document.querySelector("#station_to");
// let card=document.querySelector("#payment_method");
// console.log(sFrom);
// console.log(sTo);
// console.log(sFrom);
// let a=5;
// let b=10;
// let card=true;

// let sf = document.getElementById("station_from")
// let a=sf.options[sf.selectedIndex]
// console.log(a);

    // console.log(sf.options[sf.selectedIndex]);

    // sf.addEventListener("change",()=>{
    // })


    window.onload=function(){
    let output=document.getElementById("output");
    let a=document.getElementById("station_from");
    let b=document.getElementById("station_to");
    let card=document.getElementById("payment_method");
    let button=document.getElementById("Calculate_Fare");

    button.onclick=function(){
let nos;
if(a>b){
    nos=a-b;
}else{
    nos=b-a;
}
let cost;
if(nos==0 || nos<5){
    cost=10;
}else if(nos<9){
    cost=20;
}else if(nos<13){
    cost=30;
}else if(nos<17){
    cost=40;
}else if(nos<21){
    cost=50;
}else{
    cost=60;
}

if(card==true){
    cost=cost-(cost*10)/100;
}

console.log(cost);
output.innerHTML=cost;
 }
}

