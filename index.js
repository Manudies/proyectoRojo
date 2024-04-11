

const namePreferenceTxt = document.getElementById("namePreferenceTxt");

const preference1 = document.getElementById("preference1");
const preference2 = document.getElementById("preference2");
const preference3 = document.getElementById("preference3");
const preference4 = document.getElementById("preference4");
const preference5 = document.getElementById("preference5");
const preference6 = document.getElementById("preference6");

const divEvents = document.getElementById("divEvents");

const preferencesContainer_index = document.getElementById("preferencesContainer_index");

//  ANIMACIÓN CONTENEDOR DE PREFERENCES

  setTimeout(() => {
    preferencesContainer_index.style.display="flex";
  }, "200");

  setTimeout(() => {
    preferencesContainer_index.style.transform="translateY(0%)";
  }, "500");

  setTimeout(() => {
    preferencesContainer_index.style.opacity="1";
  }, "400");








// *********

preference1.addEventListener("click",  ()=>{

  namePreferenceTxt.innerText="¡MARCHA!";

});

preference2.addEventListener("click",  ()=>{

  namePreferenceTxt.innerText="DE INTERIOR";

});

preference3.addEventListener("click",  ()=>{

  namePreferenceTxt.innerText="CULTURETA";

});

preference4.addEventListener("click",  ()=>{

  namePreferenceTxt.innerText="GASTROPINTXO";

});

preference5.addEventListener("click",  ()=>{

  namePreferenceTxt.innerText="AL SOLETE";

});

preference6.addEventListener("click",  ()=>{

  namePreferenceTxt.innerText="ARREJUNTAUS";

});

// *********


async function getData(){
  
    const url = new URL("https://api.euskadi.eus/culture/events/v1.0/events")
    
    url.searchParams.append("_elements",100);

    const response = await fetch(url.toString());
    
    const data =  await response.json();

    addEvents(data.items);

}

function addEvents(events){
    
    let typeArray = [];
    // let name;

    for(let i=0; i < events.length; i++){
    
        typeArray[i] =  events[i].typeEs;
        
    }

    const ns = new Set(typeArray);
    const uniqueTypeArray = [...ns];
    console.log(uniqueTypeArray);

    for(let j=0; j < uniqueTypeArray.length; j++){
      const name = document.createElement("p");
      name.innerText = uniqueTypeArray[j]; 
      divEvents.appendChild(name);
      
    }
    
}

getData();