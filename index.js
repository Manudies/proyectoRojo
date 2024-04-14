//Guardamos en variables los elementos preference, divEvents y preferencesContainer_index
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


// Agregamos los listener a los botones de las preferencias
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

// Creamos la funcion de consulta de la API de cultura y guardamos en JSON, llamamos a las funcion addEvents
async function getData(){
    const url = new URL("https://api.euskadi.eus/culture/events/v1.0/events")
    url.searchParams.append("_elements",500);
    const response = await fetch(url.toString());
    const data =  await response.json();
    // console.log(data)

    addEvents(data.items);
}
//Filtro por eventos
async function evenType(){
  const url = new URL("https://api.euskadi.eus/culture/events//v1.0/eventType")
  // url.searchParams.append("_elements",500);
  const response = await fetch(url.toString());
  const event =  await response.json();

  console.log (event)

  // addEvents(data.items);
}

//Filtro por mes
async function month(month){
  const url = new URL("https://api.euskadi.eus/culture/events/v1.0/events/byMonth/2024/0"+month+"?_elements=20&_page=1")
  // url.searchParams.append("_elements",500);
  const response = await fetch(url.toString());
  const eventmonth =  await response.json();
  console.log(eventmonth)

   // addEvents(data.items);
}

// Crea un array con tipos de eventos sin repetir
function addEvents(events){  
    let typeArray = [];
    // let name;

    for(let i=0; i < events.length; i++){
        typeArray[i] =  events[i].typeEs;
    }
    const ns = new Set(typeArray);
    const uniqueTypeArray = [...ns];
    // console.log(uniqueTypeArray);
// esta parte lo manda al HTML
    for(let j=0; j < uniqueTypeArray.length; j++){
      const name = document.createElement("p");
      name.innerText = uniqueTypeArray[j]; 
      divEvents.appendChild(name);
    }
}

// async function getData(){
//     const url = new URL("https://api.euskadi.eus/culture/events/v1.0/events")
//     url.searchParams.append("_elements",200);
//     console.log(url.toString());
    
  
//     const response = await fetch(url.toString());
//     //console.log(response);
//     const data =  await response.json();
//     console.log(data);
//     addEvents(data.items)

// }

// function addEvents(events){
//     const divEvents = document.getElementById("eventos");
//     events.forEach((event,index) => {
//         const name = document.createElement("h1");
//         name.innerText=index + "- "+event.nameEs
//         const typeEs = document.createElement("h2");
//         typeEs.innerText=index + "- "+event.typeEs
        
//         divEvents.appendChild(name);
//         divEvents.appendChild(typeEs);

//     });
// }

getData();
evenType();
month(5);