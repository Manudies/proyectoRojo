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
let p1=false;
preference1.addEventListener("click",  ()=>{
  namePreferenceTxt.innerText="¡MÚSICA!";
  p1 = true;
});

let p2 = false;
preference2.addEventListener("click",  ()=>{
  namePreferenceTxt.innerText="TEATRO";
  p2 = true;
});

let p3 = false;
preference3.addEventListener("click",  ()=>{
  namePreferenceTxt.innerText="CINE";
  p3 = true;
});

let p4 = false;
preference4.addEventListener("click",  ()=>{
  namePreferenceTxt.innerText="FORMACIÓN";
  p4 = true;
});

let p5 = false
preference5.addEventListener("click",  ()=>{
  namePreferenceTxt.innerText="OTROS";
  p5 = true;
});


// preference6.addEventListener("click",  ()=>{
//   namePreferenceTxt.innerText="ARREJUNTAUS";
// });

// Creamos la funcion de consulta de la API de cultura y guardamos en JSON, llamamos a las funcion addEvents
async function getData(){
    const url = new URL("https://api.euskadi.eus/culture/events/v1.0/events")
    url.searchParams.append("_elements",500);
    const response = await fetch(url.toString());
    const data =  await response.json();
    // console.log(data)

    addEvents(data.items);
}
//Filtro de los tipos de evconstentos existentes en la API
async function evenTypes(){
  const url = new URL("https://api.euskadi.eus/culture/events//v1.0/eventType")
  // url.searchParams.append("_elements",500);
  const response = await fetch(url.toString());
  const eventTypes =  await response.json();

  console.log (eventTypes)

  // addEvents(data.items);
}

//Filtro por eventos

async function evenType(type, month=4){
  // const url = new URL("https://api.euskadi.eus/culture/events/v1.0/events/byType/"+type+"?_elements=20&_page=1")
  const url = new URL("https://api.euskadi.eus/culture/events/v1.0/events/byType/"+type+"/byMonth/2024/"+month+"?_elements=20&_page=1")
  const response = await fetch(url.toString());
  const event =  await response.json();

  addEvents(event.items);
  // return event.items
}

//Filtro por mes
async function month(month){
  const url = new URL("https://api.euskadi.eus/culture/events/v1.0/events/byMonth/2024/0"+month+"?_elements=20&_page=1")
  const response = await fetch(url.toString());
  const eventmonth =  await response.json();
  // console.log(eventmonth)

   // addEvents(data.items);
}

function addEvents(events){
    console.log(events)
    const divEvents = document.getElementById("divEvents");
    events.forEach((event,index) => {
        const contenedorEvento = document.createElement("div")
        contenedorEvento.setAttribute("class","contenedorEvento")
        const name = document.createElement("h1");
        name.innerText = event.nameEs;
        const typeEs = document.createElement("h2");
        typeEs.innerText = event.typeEs
        const place = document.createElement("p");
        //  COMPROBAMOS SI PLACEES ESTÁ VACIO
        if (event.placeEs === undefined){
          place.innerText=""
        }
        else{
          place.innerText = event.placeEs
        } 
        
        const fecha = document.createElement("p");
        fecha.innerText = (event.startDate[8]+event.startDate[9]+event.startDate[7]+event.startDate[5]+event.startDate[6]+event.startDate[4]+event.startDate[0]+event.startDate[1]+event.startDate[2]+event.startDate[3])
        const masInformacion = document.createElement("div")
        masInformacion.innerText=("+")
        
        divEvents.appendChild(contenedorEvento)
        contenedorEvento.appendChild(typeEs);
        contenedorEvento.appendChild(name);
        contenedorEvento.appendChild(place)
        contenedorEvento.appendChild(fecha)
        contenedorEvento.appendChild(masInformacion)
    });
}

// Boton buscar
const savePreferencesButton = document.getElementById("savePreferencesButton");

savePreferencesButton.addEventListener("click",  ()=>{
  const divEvents = document.getElementById("divEvents");
  divEvents.innerHTML=""
  if (p1===true){
     evenType(1)
     evenType(7)
     evenType(13)
     p1=false
  }
  if (p2===true){
    evenType(2)
    evenType(4)
    evenType(3)
    p2=false
  }
  if (p3===true){
    evenType(9)
    p3=false
  }
  if (p4===true){
    evenType(6)
    evenType(10)
    evenType(11)
    p4=false
  }
  if (p5===true){
    evenType(8)
    evenType(12)
    evenType(14)
    evenType(15)
    p5=false
  }

  // if(divEvents==""){
  //   const mensajeError = document.createElement("p");
  //       mensajeError.innerText = ("NO HAY EVENTOS DE ESE TIPO")
  //       divEvents.appendChild(mensajeError)
        
  // }
  })



// getData();
// evenTypes();
// month(5);
//evenType(1)


