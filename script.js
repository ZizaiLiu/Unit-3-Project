/* Declare variables below to save the different sections (divs) of your story*/

let title= document.querySelector(".opening");
let button1= document.querySelector(".button-one");
let button2= document.querySelector(".button-two");
let option1= document.querySelector(".option1");
let option2= document.querySelector(".option2");
let option1end= document.querySelector(".option1-end");
let option2end= document.querySelector(".option2-end");
let img1= document.querySelector(".img1");
let img2= document.querySelector(".img2");
let o2e= document.querySelector(".o2e");
let o1e= document.querySelector(".o1e");
let h2=document.querySelector("h2");
let form=document.querySelector(".form");
let openbutton= document.querySelector(".ob");


//When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
button1.onclick=function(){
   option1 .style.display="block";
};

button2.onclick=function(){
   option2 .style.display="block";
};


img1.onclick=function(){
   option1end .style.display="block";
   o1e .innerHTML="You pressed the alarm button inside the elevator and wait until people come to save you. didn’t get out at last"
};
   
img2.onclick=function(){
   option2end .style.display="block";
   o2e .innerHTML="You went to a park and had a walk.";
};



//timer
setTimeout(() => {h2.innerHTML="How are you going to get downstairs?";}, 3000);


