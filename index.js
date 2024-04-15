const preferencesMenu_index = document.getElementById("preferencesMenu_index");
const preferencesToggle = document.getElementById("preferencesToggle");
const containerPreferenceBtnDescription_index = document.getElementById("containerPreferenceBtnDescription_index");
const preferenceBtnDescriptionTxt = document.getElementById("preferenceBtnDescriptionTxt");
const vamosBtn_index = document.getElementById("vamosBtn_index");

// ***

preferencesToggle.addEventListener("mouseover", ()=>{
  preferencesToggle.style.transform = "rotate(1turn)";
});

preferencesToggle.addEventListener("mouseleave", ()=>{
  preferencesToggle.style.transform = "rotate(-1turn)";
});

// ***

const ionIconSchool = document.getElementById("ionIconSchool");
const ionIconSad = document.getElementById("ionIconSad");
const ionIconMusicalNotes = document.getElementById("ionIconMusicalNotes");
const ionIconVideo = document.getElementById("ionIconVideo");
const ionIconOthers = document.getElementById("ionIconOthers");

// ****

preferencesToggle.addEventListener("click", ()=>{
  preferencesMenu_index.classList.toggle("active");
  ionIconSad.style.transform="rotate(-80deg)";
  ionIconMusicalNotes.style.transform="rotate(-100deg)";
  ionIconVideo.style.transform="rotate(90deg)";
  ionIconOthers.style.transform="rotate(80deg)";
});

// ***

  // ANIMATION TOGGLE BTN
  const preferencesToggleIonIcon = document.getElementById("preferencesToggleIonIcon");
  const intervalToggle = setInterval(()=>{

  preferencesToggleIonIcon.style.fontSize="2.7rem";

  setTimeout(() => {
    preferencesToggleIonIcon.style.fontSize="3.5rem";
  }, "600");

}, 700);


// CLEAR INTERVAL ON CLICK 
// clearInterval(nIntervId);

// ***

const preferenceRadioBtn0 = document.getElementById("preferenceRadioBtn0");
const preferenceRadioBtn1 = document.getElementById("preferenceRadioBtn1");
const preferenceRadioBtn2 = document.getElementById("preferenceRadioBtn2");
const preferenceRadioBtn3 = document.getElementById("preferenceRadioBtn3");
const preferenceRadioBtn4 = document.getElementById("preferenceRadioBtn4");


// PREFERENCE BTNS ONCLICK EVENTS
preferenceRadioBtn0.addEventListener("click", ()=>{
  containerPreferenceBtnDescription_index.style.display="flex";
  preferenceBtnDescriptionTxt.innerText="FORMACIÓN";
  vamosBtn_index.style.display="block";
});


preferenceRadioBtn1.addEventListener("click", ()=>{
  containerPreferenceBtnDescription_index.style.display="flex";
  preferenceBtnDescriptionTxt.innerText="TEATRO";
  vamosBtn_index.style.display="block";
});

preferenceRadioBtn2.addEventListener("click", ()=>{
  containerPreferenceBtnDescription_index.style.display="flex";
  preferenceBtnDescriptionTxt.innerText="MÚSICA";
  vamosBtn_index.style.display="block";
});

preferenceRadioBtn3.addEventListener("click", ()=>{
  containerPreferenceBtnDescription_index.style.display="flex";
  preferenceBtnDescriptionTxt.innerText="CINE";
  vamosBtn_index.style.display="block";
});


preferenceRadioBtn4.addEventListener("click", ()=>{
  containerPreferenceBtnDescription_index.style.display="flex";
  preferenceBtnDescriptionTxt.innerText="OTROS";
  vamosBtn_index.style.display="block";
});

// Agregamos los listener a los botones de las preferencias
let p0=false;
preferenceRadioBtn0.addEventListener("click",  ()=>{
  namePreferenceTxt.innerText="¡MÚSICA!";
  p0 = true;
});

let p1 = false;
preferenceRadioBtn1.addEventListener("click",  ()=>{
  namePreferenceTxt.innerText="TEATRO";
  p1 = true;
});

let p2 = false;
preferenceRadioBtn2.addEventListener("click",  ()=>{
  namePreferenceTxt.innerText="CINE";
  preferenceRadioBtn2 = true;
});

let p3 = false;
preferenceRadioBtn3.addEventListener("click",  ()=>{
  namePreferenceTxt.innerText="FORMACIÓN";
  p3 = true;
});

let p4 = false
preferenceRadioBtn4.addEventListener("click",  ()=>{
  namePreferenceTxt.innerText="OTROS";
  p4 = true;
})


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
  if (p0===true){
     evenType(1)
     evenType(7)
     evenType(13)
     p0=false
  }
  if (p1===true){
    evenType(2)
    evenType(4)
    evenType(3)
    p1=false
  }
  if (p2===true){
    evenType(9)
    p2=false
  }
  if (p3===true){
    evenType(6)
    evenType(10)
    evenType(11)
    p3=false
  }
  if (p4===true){
    evenType(8)
    evenType(12)
    evenType(14)
    evenType(15)
    p4=false
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


