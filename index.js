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
    console.log(url.toString());

    
    const data =  await response.json();

    addEvents(data.items);
    addMunicipio(data.items);
    addName(data.items);

}

function addEvents(events){
    
    let typeArray = [];
    // let name;

    for(let i=0; i < events.length; i++){
    
        typeArray[i] =  events[i].typeEs;
        
    }

    const ns = new Set(typeArray);
    const uniqueTypeArrayEvents = [...ns];
    console.log(uniqueTypeArrayEvents);

    for(let j=0; j < uniqueTypeArrayEvents.length; j++){
      const name = document.createElement("p");
      name.innerText = uniqueTypeArrayEvents[j]; 
      divEvents.appendChild(name);  
    }
    
};


function addMunicipio (municipio){
    
  let typeArray = [];
  // let name;

  for(let i=0; i < municipio.length; i++){
  
      typeArray[i] =  municipio[i].municipalityEs;
      
  }

  const ns = new Set(typeArray);
  const uniqueTypeArrayMunicipality = [...ns];
  console.log(uniqueTypeArrayMunicipality);

  for(let j=0; j < uniqueTypeArrayMunicipality.length; j++){
    const name = document.createElement("p");
    name.innerText = uniqueTypeArrayMunicipality[j]; 
    divMunicipalityEs.appendChild(name);
    
  }
  
};


function addName (name){
    
  let typeArray = [];
  // let name;

  for(let i=0; i < name.length; i++){
  
      typeArray[i] =  name[i].nameEs;
      
  }

  const ns = new Set(typeArray);
  const uniqueTypeArrayName = [...ns];
  console.log(uniqueTypeArrayName);

  for(let j=0; j < uniqueTypeArrayName.length; j++){
    const name = document.createElement("p");
    name.innerText = uniqueTypeArrayName[j]; 
    divNameEs.appendChild(name);
    
  }
  
};




getData();