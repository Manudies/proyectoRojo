const containerPreferencesMenu_index = document.getElementById("containerPreferencesMenu_index");

const preferencesMenu_index = document.getElementById("preferencesMenu_index");

const preferencesToggle = document.getElementById("preferencesToggle");

const containerPreferenceBtnDescription_index = document.getElementById("containerPreferenceBtnDescription_index");

const preferenceBtnDescriptionTxt = document.getElementById("preferenceBtnDescriptionTxt");

const vamosBtn_index = document.getElementById("vamosBtn_index");


// ***
// CARGAR TARJETAS DE MUESTRA ALEATORIAS EN LA PÁGINA INICIAL
const systemDate = new Date();

  console.log("systemDate" + systemDate);
  console.log("Día: " + systemDate.getDate());
  console.log("Año: " + systemDate.getFullYear());
  console.log("Mes: " + systemDate.getMonth() + 1);


// window.addEventListener("load", (event) => {
  
// });


// *** PREFERENCES TOGGLE BTN
let togglePressed = false;

preferencesToggle.addEventListener("mouseover", ()=>{
  preferencesToggle.style.transform = "rotate(1turn)";

});

// ***

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
  if(togglePressed == false){
    preferenceBtnDescriptionTxt.style.display="flex";
    containerPreferencesMenu_index.style.backgroundColor="#8ecae67b";
    togglePressed=true;
  }else{
    preferenceBtnDescriptionTxt.style.display="none";
    containerPreferencesMenu_index.style.backgroundColor="#000";
    togglePressed=false;
  }

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


// ***

const preferenceRadioBtn0 = document.getElementById("preferenceRadioBtn0");
const preferenceRadioBtn1 = document.getElementById("preferenceRadioBtn1");
const preferenceRadioBtn2 = document.getElementById("preferenceRadioBtn2");
const preferenceRadioBtn3 = document.getElementById("preferenceRadioBtn3");
const preferenceRadioBtn4 = document.getElementById("preferenceRadioBtn4");
const preferenceRadioBtn5 = document.getElementById("preferenceRadioBtn5");

const strFormacion = " - Formaciones - Formaciones - ";
const strTeatro = " - Teatro - Teatro - Teatro ";
const strMusica = " - Música - Música - Música ";
const strCine = " - Cine - Cine - Cine -";
const strOtros = " - Otros - Otros - Otros -";
const strRandom = " - Random - Random - Random - "

// PREFERENCE BTNS ONCLICK EVENTS
// Agregamos los listener a los botones de las preferencias

let p0 = false;
preferenceRadioBtn0.addEventListener("click", ()=>{
  containerPreferenceBtnDescription_index.style.display="flex";
  
  preferenceBtnDescriptionTxt.innerText="";
  for(let i=0; i < strFormacion.length; i++){
    let span = document.createElement("span");
    span.innerHTML=strFormacion[i];
    span.setAttribute("class", "spanLetter");
    preferenceBtnDescriptionTxt.appendChild(span);
    span.style.transform=`rotate(${11 * i}deg)`;
  }
  //vamosBtn_index.classList.toggle("btnAnimation");
  vamosBtn_index.style.display="block";

  p0 = true;
});

// ***

let p1 = false;
preferenceRadioBtn1.addEventListener("click", ()=>{
  containerPreferenceBtnDescription_index.style.display="flex";
  
  preferenceBtnDescriptionTxt.innerText="";
  for(let i = 0; i < strTeatro.length; i++){
    let span = document.createElement("span");
    span.innerHTML=strTeatro[i];
    span.setAttribute("class", "spanLetter");
    preferenceBtnDescriptionTxt.appendChild(span); 
    span.style.transform=`rotate(${11 * i}deg)`;
  }

  vamosBtn_index.style.display="block";
  p1 = true;
});

// ***

let p2 = false;

preferenceRadioBtn2.addEventListener("click", ()=>{
  containerPreferenceBtnDescription_index.style.display="flex";

  preferenceBtnDescriptionTxt.innerText="";
  for(let i=0; i < strMusica.length; i++){
    let span = document.createElement("span");
    span.innerHTML=strMusica[i];
    span.setAttribute("class", "spanLetter");
    preferenceBtnDescriptionTxt.appendChild(span);
    
    span.style.transform=`rotate(${11 * i}deg)`;
  }

  vamosBtn_index.style.display="block";
  p2 = true;
});

// ***

let p3 = false;
preferenceRadioBtn3.addEventListener("click", ()=>{
  containerPreferenceBtnDescription_index.style.display="flex";

  preferenceBtnDescriptionTxt.innerText="";
  for(let i=0; i < strCine.length; i++){
    let span = document.createElement("span");
    span.innerHTML=strCine[i];
    span.setAttribute("class", "spanLetter");
    preferenceBtnDescriptionTxt.appendChild(span);
    
    span.style.transform=`rotate(${11 * i}deg)`;
  }

  vamosBtn_index.style.display="block";
  p3 = true;
});

// ***
let p4 = false;

preferenceRadioBtn4.addEventListener("click", ()=>{
  containerPreferenceBtnDescription_index.style.display="flex";

  preferenceBtnDescriptionTxt.innerText="";
  for(let i = 0; i < strOtros.length; i++){
    let span = document.createElement("span");
    span.innerHTML=strOtros[i];
    span.setAttribute("class", "spanLetter");
    preferenceBtnDescriptionTxt.appendChild(span); 
    span.style.transform=`rotate(${11 * i}deg)`;
  }

  vamosBtn_index.style.display="block";
  p4 = true;
});

let p5 = false;
preferenceRadioBtn5.addEventListener("click", ()=>{
  containerPreferenceBtnDescription_index.style.display="flex";

  preferenceBtnDescriptionTxt.innerText="";
  for(let i = 0; i < strRandom.length; i++){
    let span = document.createElement("span");
    span.innerHTML=strRandom[i];
    span.setAttribute("class", "spanLetter");
    preferenceBtnDescriptionTxt.appendChild(span); 
    span.style.transform=`rotate(${11 * i}deg)`;
  }

  vamosBtn_index.style.display="block";
  p5 = true;
});


// *** BOTON BUSCAR (vamosbTN)
let vamosBtnWasPressed = false;

vamosBtn_index-addEventListener("click", ()=>{

  // CLEAR INTERVAL TOGGLE BTN ON CLICK OF VAMOSBTN 
  clearInterval(intervalToggle);

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
  const principal_card = document.getElementById("principal_card");

    events.forEach((event,index) => {
      const mainContainer_card = document.createElement("div");
      mainContainer_card.setAttribute("class","mainContainer_card");
      mainContainer_card.setAttribute("id", "mainContainer_card");

      
      const container_title_card = document.createElement("div");
      container_title_card.setAttribute("class","container_title_card");
      container_title_card.setAttribute("id", "container_title_card");
    
      const title_card = document.createElement("p");
      title_card.setAttribute("class","title_card");
      title_card.setAttribute("id", "title_card");
      console.log(event.nameEs)
      title_card.innerText = event.nameEs;


      const place_card = document.createElement("div");
      place_card.setAttribute("class","place_card");
      place_card.setAttribute("id", "place_card");

      const p_place_card = document.createElement("p");
      p_place_card .setAttribute("class","p_place_card ");
      p_place_card .setAttribute("id", "p_place_card "); 
        // COMPROBAMOS SI PLACEES ESTÁ VACIO
      if (event.placeEs === undefined){
        p_place_card.innerText= event.municipalityEs
      }
      else{
        p_place_card.innerText = event.placeEs
      } 

      const container_fecha_button_card = document.createElement("div");
      container_fecha_button_card .setAttribute("class","container_fecha_button_card ");
      container_fecha_button_card .setAttribute("id", "container_fecha_button_card "); 

      const fecha_card = document.createElement("p");
      fecha_card .setAttribute("class","fecha_card ");
      fecha_card .setAttribute("id", "fecha_card "); 
      fecha_card.innerText = (event.startDate[8]+event.startDate[9]+event.startDate[7]+event.startDate[5]+event.startDate[6]+event.startDate[4]+event.startDate[0]+event.startDate[1]+event.startDate[2]+event.startDate[3])

      const button_card = document.createElement("button");
      button_card .setAttribute("class","button_card ");
      button_card .setAttribute("id", "button_card "); 

      const fav_card = document.createElement("button");
      fav_card .setAttribute("class","fav_card ");
      fav_card .setAttribute("id", "fav_card "); 

      

     principal_card.appendChild(mainContainer_card);
     mainContainer_card.appendChild(container_title_card);
     container_title_card.appendChild(title_card);
     mainContainer_card.appendChild(place_card);
     place_card.appendChild(p_place_card)
     mainContainer_card.appendChild(container_fecha_button_card);
     container_fecha_button_card.appendChild(fecha_card);
     container_fecha_button_card.appendChild(button_card);
     container_fecha_button_card.appendChild(fav_card);
  });
}

// Boton buscar
// la tiene declarada arriba: const vamosBtn_index = document.getElementById("vamosBtn_index");

vamosBtn_index.addEventListener("click",  ()=>{
const preferencesMenu_index = document.getElementById("preferencesMenu_index");
preferencesMenu_index.innerHTML=""
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
if (p5===true){
  evenType()

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


