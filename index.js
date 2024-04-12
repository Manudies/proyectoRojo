
const containerNamePage_index = document.getElementById("containerNamePage_index");

const namePreferenceTxt = document.getElementById("namePreferenceTxt");

// const preference1 = document.getElementById("preference1");
// const preference2 = document.getElementById("preference2");
// const preference3 = document.getElementById("preference3");
// const preference4 = document.getElementById("preference4");
// const preference5 = document.getElementById("preference5");
// const preference6 = document.getElementById("preference6");
// const preference7 = document.getElementById("preference7");
// const preference8 = document.getElementById("preference8");


const divEvents = document.getElementById("divEvents");

const preferencesContainer_index = document.getElementById("preferencesContainer_index");

const showPreferencesButton = document.getElementById("showPreferencesButton");


//  ANIMACIÓN CONTENEDOR DE PREFERENCES

  setTimeout(() => {
    preferencesContainer_index.style.display="flex";
    containerNamePage_index.style.display="flex";
    showPreferencesButton.style.opacity="1";
    
  }, "200");

  setTimeout(() => {
    preferencesContainer_index.style.transform="translateY(0%)";
    showPreferencesButton.style.display="flex";
  }, "500");

  setTimeout(() => {
    preferencesContainer_index.style.opacity="1";
    containerNamePage_index.style.opacity="1";
    
  }, "400");


// *********

preference1.addEventListener("click",  ()=>{

  namePreferenceTxt.innerText="¡FIESTA!";
  
});

preference2.addEventListener("click",  ()=>{

  namePreferenceTxt.innerText="ARTE";

});

preference3.addEventListener("click",  ()=>{

  namePreferenceTxt.innerText="MÚSICA";

});

preference4.addEventListener("click",  ()=>{

  namePreferenceTxt.innerText="GASTRONOMÍA";

});

preference5.addEventListener("click",  ()=>{

  namePreferenceTxt.innerText="AL AIRE LIBRE";

});

preference6.addEventListener("click",  ()=>{

  namePreferenceTxt.innerText="DEPORTES";

});

preference7.addEventListener("click",  ()=>{

  namePreferenceTxt.innerText="ALTERNATIVO";

});

preference8.addEventListener("click",  ()=>{

  namePreferenceTxt.innerText="RANDOM";
  
});

// *********

showPreferencesButton.addEventListener("click", ()=>{

  setTimeout(() => {
    preferencesContainer_index.style.display="none";
    showPreferencesButton.style.opacity="0";
  }, "400");

  setTimeout(() => {
    preferencesContainer_index.style.transform="translateY(30%)";
  }, "200");

  setTimeout(() => {
    preferencesContainer_index.style.opacity="0";
    containerNamePage_index.style.opacity="0";
    containerNamePage_index.style.display="none";
    showPreferencesButton.style.display="none";
  }, "200");

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