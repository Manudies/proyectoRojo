

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



async function getData(){
    const url = new URL("https://api.euskadi.eus/culture/events/v1.0/events")
    url.searchParams.append("_elements",200);
    console.log(url.toString());
    
  
    const response = await fetch(url.toString());
    //console.log(response);
    const data =  await response.json();
    console.log(data);
    addEvents(data.items)

}

function addEvents(events){
    const divEvents = document.getElementById("eventos");
    events.forEach((event,index) => {
        const name = document.createElement("h1");
        name.innerText=index + "- "+event.nameEs
        const typeEs = document.createElement("h2");
        typeEs.innerText=index + "- "+event.typeEs
        
        divEvents.appendChild(name);
        divEvents.appendChild(typeEs);

    });
}

getData();