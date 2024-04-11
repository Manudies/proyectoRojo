

const namePreferenceTxt = document.getElementById("namePreferenceTxt");

const preference1 = document.getElementById("preference1");
const preference2 = document.getElementById("preference2");
const preference3 = document.getElementById("preference3");
const preference4 = document.getElementById("preference4");
const preference5 = document.getElementById("preference5");
const preference6 = document.getElementById("preference6");


preference1.addEventListener("click",  ()=>{

  namePreferenceTxt.innerText="FIESTA";

});

preference2.addEventListener("click",  ()=>{

  namePreferenceTxt.innerText="INTERIOR";

});

preference3.addEventListener("click",  ()=>{

  namePreferenceTxt.innerText="CULTURAL";

});

preference4.addEventListener("click",  ()=>{

  namePreferenceTxt.innerText="GASTRONOMÍA";

});

preference5.addEventListener("click",  ()=>{

  namePreferenceTxt.innerText="AIRE LIBRE";

});

preference6.addEventListener("click",  ()=>{

  namePreferenceTxt.innerText="GRUPOS";

});