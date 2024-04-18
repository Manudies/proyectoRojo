// ****
import {tipos, random} from "./tipos.js"


const containerPreferencesMenu_index = document.getElementById("containerPreferencesMenu_index");

const preferencesMenu_index = document.getElementById("preferencesMenu_index");

const preferencesToggle = document.getElementById("preferencesToggle");

const containerPreferenceBtnDescription_index = document.getElementById("containerPreferenceBtnDescription_index");

const preferenceBtnDescriptionTxt = document.getElementById("preferenceBtnDescriptionTxt");

const vamosBtn_index = document.getElementById("vamosBtn_index");

const backBtn_index = document.getElementById("backBtn_index");

const preferencesMenu_li = document.getElementById("preferencesMenu_li");

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

const ionIconSchool = document.getElementById("ionIconSchool");
const ionIconSad = document.getElementById("ionIconSad");
const ionIconMusicalNotes = document.getElementById("ionIconMusicalNotes");
const ionIconVideo = document.getElementById("ionIconVideo");
const ionIconOthers = document.getElementById("ionIconOthers");

let preference0Pressed = false;
let preference1Pressed = false;
let preference2Pressed = false;
let preference3Pressed = false;
let preference4Pressed = false;
let preference5Pressed = false;

const preferencesToggleIonIconSearch = document.getElementById("preferencesToggleIonIconSearch");

let togglePressed = false;


let preferencesMenuIsOnScreen = true;

const principal_card = document.getElementById("principal_card");

// ANIMATION TOGGLE BTN
const preferencesToggleIonIcon = document.getElementById("preferencesToggleIonIcon");

const intervalToggle = setInterval(() => {

  preferencesToggleIonIcon.style.fontSize = "2.7rem";

  setTimeout(() => {
    preferencesToggleIonIcon.style.fontSize = "3.5rem";
  }, "600");

}, 700);
// ***


// ***

backBtn_index.addEventListener("click", ()=>{
  if(preferencesMenuIsOnScreen == true){
    containerPreferencesMenu_index.style.display="none";
    principal_card.style.display="flex";

  }

  if(preferencesMenuIsOnScreen == false){
    containerPreferencesMenu_index.style.display="flex";
    principal_card.style.display="none";
    
  }

  backBtn_index.style.display="none";

});


// *** PREFERENCES TOGGLE BTN

preferencesToggle.addEventListener("mouseover", () => {
  preferencesToggle.style.transform = "rotate(1turn)";

});

// ***

preferencesToggle.addEventListener("mouseleave", () => {
  preferencesToggle.style.transform = "rotate(-1turn)";
});

// ***

// ****


preferencesToggle.addEventListener("click", () => {
  preferencesMenu_index.classList.toggle("active");
  ionIconSad.style.transform = "rotate(-80deg)";
  ionIconMusicalNotes.style.transform = "rotate(-100deg)";
  ionIconVideo.style.transform = "rotate(90deg)";
  ionIconOthers.style.transform = "rotate(80deg)";

  // PRIMERO VERIFICAMOS SI HAY ALGÚN TIPO DE ACTIVIDAD SELECCIONADO
  if (preference0Pressed == false || preference1Pressed == false || preference2Pressed == false || preference3Pressed == false || preference4Pressed == false) {

    //VERIFICAMOS SI EL BOTON TOGGLE NO HA SIDO PRESIONADO
    if (togglePressed == false) {
      preferenceBtnDescriptionTxt.style.display = "flex";
      containerPreferencesMenu_index.style.backgroundColor = "#8ecae67b";
      togglePressed = true;
    } else {
      preferenceBtnDescriptionTxt.style.display = "none";
      containerPreferencesMenu_index.style.backgroundColor = "#00000023";
      togglePressed = false;
    }
  }

  //VERIFICAMOS SI EL BOTON TOGGLE HA SIDO PRESIONADO
  if (preference0Pressed == true || preference1Pressed == true || preference2Pressed == true || preference3Pressed == true || preference4Pressed == true || preference5Pressed == true) {
    clearInterval(intervalToggle);

    setTimeout(() => {
      containerPreferencesMenu_index.style.display = "none";
    }, "100");

    // SOLICITUDES A LA API
    
    if (preference0Pressed === true) {
      ordenarEventos("formacion")
    }
    if (preference1Pressed === true) {
      ordenarEventos("teatro")
    }
    if (preference2Pressed === true) {
      ordenarEventos("musica")
    }
    if (preference3Pressed === true) {
      ordenarEventos("cine")
    }
    if (preference4Pressed === true) {
      ordenarEventos("otros")
    }
    if (preference5Pressed === true) {
      const randomNumber = getRandomIntInclusive(0,4);
      console.log(random[randomNumber])
      ordenarEventos(random[randomNumber])
    }

    backBtn_index.style.display="block";

    preferencesMenuIsOnScreen = false;

  }
});



// PREFERENCE BTNS ONCLICK EVENTS
// Agregamos los listener a los botones de las preferencias
preferenceRadioBtn0.addEventListener("click", () => {

  preference0Pressed = true;
  preference1Pressed = false;
  preference2Pressed = false;
  preference3Pressed = false;
  preference4Pressed = false;
  preference5Pressed = false;

  containerPreferenceBtnDescription_index.style.display = "flex";
  preferencesToggleIonIconSearch.style.display = "block";
  preferencesToggleIonIcon.style.display = "none";

  preferenceBtnDescriptionTxt.innerText = "";
  for (let i = 0; i < strFormacion.length; i++) {
    let span = document.createElement("span");
    span.innerHTML = strFormacion[i];
    span.setAttribute("class", "spanLetter");
    preferenceBtnDescriptionTxt.appendChild(span);
    span.style.transform = `rotate(${11 * i}deg)`;
  }
});

// ***
preferenceRadioBtn1.addEventListener("click", () => {

  preference0Pressed = false;
  preference1Pressed = true;
  preference2Pressed = false;
  preference3Pressed = false;
  preference4Pressed = false;
  preference5Pressed = false;

  containerPreferenceBtnDescription_index.style.display = "flex";
  preferencesToggleIonIconSearch.style.display = "block";
  preferencesToggleIonIcon.style.display = "none";

  preferenceBtnDescriptionTxt.innerText = "";
  for (let i = 0; i < strTeatro.length; i++) {
    let span = document.createElement("span");
    span.innerHTML = strTeatro[i];
    span.setAttribute("class", "spanLetter");
    preferenceBtnDescriptionTxt.appendChild(span);
    span.style.transform = `rotate(${11 * i}deg)`;
  }

});

// ***
preferenceRadioBtn2.addEventListener("click", () => {

  preference0Pressed = false;
  preference1Pressed = false;
  preference2Pressed = true;
  preference3Pressed = false;
  preference4Pressed = false;
  preference5Pressed = false;

  containerPreferenceBtnDescription_index.style.display = "flex";
  preferencesToggleIonIconSearch.style.display = "block";
  preferencesToggleIonIcon.style.display = "none";

  preferenceBtnDescriptionTxt.innerText = "";
  for (let i = 0; i < strMusica.length; i++) {
    let span = document.createElement("span");
    span.innerHTML = strMusica[i];
    span.setAttribute("class", "spanLetter");
    preferenceBtnDescriptionTxt.appendChild(span);

    span.style.transform = `rotate(${11 * i}deg)`;
  }
});

// ***
preferenceRadioBtn3.addEventListener("click", () => {

  preference0Pressed = false;
  preference1Pressed = false;
  preference2Pressed = false;
  preference3Pressed = true;
  preference4Pressed = false;
  preference5Pressed = false;


  containerPreferenceBtnDescription_index.style.display = "flex";
  preferencesToggleIonIconSearch.style.display = "block";
  preferencesToggleIonIcon.style.display = "none";

  preferenceBtnDescriptionTxt.innerText = "";
  for (let i = 0; i < strCine.length; i++) {
    let span = document.createElement("span");
    span.innerHTML = strCine[i];
    span.setAttribute("class", "spanLetter");
    preferenceBtnDescriptionTxt.appendChild(span);

    span.style.transform = `rotate(${11 * i}deg)`;
  }
});

// ***
preferenceRadioBtn4.addEventListener("click", () => {

  preference0Pressed = false;
  preference1Pressed = false;
  preference2Pressed = false;
  preference3Pressed = false;
  preference4Pressed = true;
  preference5Pressed = false;


  containerPreferenceBtnDescription_index.style.display = "flex";
  preferencesToggleIonIconSearch.style.display = "block";
  preferencesToggleIonIcon.style.display = "none";

  preferenceBtnDescriptionTxt.innerText = "";
  for (let i = 0; i < strOtros.length; i++) {
    let span = document.createElement("span");
    span.innerHTML = strOtros[i];
    span.setAttribute("class", "spanLetter");
    preferenceBtnDescriptionTxt.appendChild(span);
    span.style.transform = `rotate(${11 * i}deg)`;
  }
});

// ***
preferenceRadioBtn5.addEventListener("click", () => {
  preference0Pressed = false;
  preference1Pressed = false;
  preference2Pressed = false;
  preference3Pressed = false;
  preference4Pressed = false;
  preference5Pressed = true;

  containerPreferenceBtnDescription_index.style.display = "flex";
  preferencesToggleIonIconSearch.style.display = "block";
  preferencesToggleIonIcon.style.display = "none";

  preferenceBtnDescriptionTxt.innerText = "";
  for (let i = 0; i < strRandom.length; i++) {
    let span = document.createElement("span");
    span.innerHTML = strRandom[i];
    span.setAttribute("class", "spanLetter");
    preferenceBtnDescriptionTxt.appendChild(span);
    span.style.transform = `rotate(${11 * i}deg)`;
  }
});

// Creamos la funcion de consulta de la API de cultura y guardamos en JSON, llamamos a las funcion addEvents
async function getData() {
  const url = new URL("https://api.euskadi.eus/culture/events/v1.0/events")
  url.searchParams.append("_elements", 500);
  const response = await fetch(url.toString());
  const data = await response.json();

  addEvents(data.items);
}
//Filtro de los tipos de evconstentos existentes en la API
async function evenTypes() {
  const url = new URL("https://api.euskadi.eus/culture/events//v1.0/eventType")
  // url.searchParams.append("_elements",500);
  const response = await fetch(url.toString());
  const eventTypes = await response.json();
}

//Filtro por eventos
async function evenType(type, month = 4) {
  const url = new URL("https://api.euskadi.eus/culture/events/v1.0/events/byType/" + type + "/byMonth/2024/" + month + "?_elements=20&_page=1")
  const response = await fetch(url.toString());
  const event = await response.json();

  // addEvents(event.items);
  return event.items
}

//Filtro por mes
async function month(month) {
  const url = new URL("https://api.euskadi.eus/culture/events/v1.0/events/byMonth/2024/0" + month + "?_elements=20&_page=1")
  const response = await fetch(url.toString());
  const eventmonth = await response.json();
}

function addEvents(events) {
  const principal_card = document.getElementById("principal_card");
  principal_card.style.paddingLeft = "1rem";
  principal_card.style.width = "100%";
  principal_card.style.paddingRight = "1rem";

  events.forEach((event, index) => {
    const mainContainer_card = document.createElement("div");
    mainContainer_card.setAttribute("class", "mainContainer_card");
    mainContainer_card.setAttribute("id", "mainContainer_card");
    mainContainer_card.style.display = "flex";
    mainContainer_card.style.marginBottom = "1rem";
    mainContainer_card.style.alignContent = "center";
    mainContainer_card.style.justifyContent = "center";
    mainContainer_card.style.flexDirection = "column";

    //ICONO DE TARJETA
    const activityIcon_card = document.createElement("span");
    activityIcon_card.setAttribute("class", "activityIcon_card");
    activityIcon_card.setAttribute("id", "activityIcon_card");

    //SE INTRODUCE UN ICONO EN LA TARJETA SEGÚN EL TIPO DE EVENTO
    const container_title_card = document.createElement("div");
    container_title_card.setAttribute("class", "container_title_card");
    container_title_card.setAttribute("id", "container_title_card");
    const title_card = document.createElement("p");
    title_card.setAttribute("class", "title_card");
    title_card.setAttribute("id", "title_card");
    title_card.innerText = event.nameEs;

    if (preference0Pressed == true) {
      activityIcon_card.innerHTML = '<ion-icon name="school-outline"></ion-icon>';
      title_card.appendChild(activityIcon_card);
    }
    if (preference1Pressed == true) {
      activityIcon_card.innerHTML = '<ion-icon name="sad-outline"></ion-icon>';
      title_card.appendChild(activityIcon_card);
    }
    if (preference2Pressed == true) {
      activityIcon_card.innerHTML = '<ion-icon name="musical-notes"></ion-icon>';
      title_card.appendChild(activityIcon_card);
    }
    if (preference3Pressed == true) {
      activityIcon_card.innerHTML = '<ion-icon name="ticket-outline"></ion-icon>';
      title_card.appendChild(activityIcon_card);
    }
    if (preference4Pressed == true) {
      activityIcon_card.innerHTML = '<ion-icon name="accessibility-outline"></ion-icon>';
      title_card.appendChild(activityIcon_card);
    }
    if (preference5Pressed == true) {
      activityIcon_card.innerHTML = '<ion-icon  name="flash-outline"></ion-icon>';
      title_card.appendChild(activityIcon_card);
    }
    const place_card = document.createElement("div");
    place_card.setAttribute("class", "place_card");
    place_card.setAttribute("id", "place_card");

    const p_place_card = document.createElement("p");
    p_place_card.setAttribute("class", "p_place_card ");
    p_place_card.setAttribute("id", "p_place_card ");
    p_place_card.style.textAlign = "center";

    // COMPROBAMOS SI PLACEES ESTÁ VACIO
    if (event.placeEs === undefined) {
      p_place_card.innerText = event.municipalityEs
    }
    else {
      p_place_card.innerText = event.placeEs;
    }
    const container_fecha_button_card = document.createElement("div");
    container_fecha_button_card.setAttribute("class", "container_fecha_button_card ");
    container_fecha_button_card.setAttribute("id", "container_fecha_button_card ");
    container_fecha_button_card.style.display = "inline-flex";
    container_fecha_button_card.style.gap = "1rem";
    container_fecha_button_card.style.justifyContent = "space-between";

    const fecha_card = document.createElement("p");
    fecha_card.setAttribute("class", "fecha_card ");
    fecha_card.setAttribute("id", "fecha_card ");
    fecha_card.innerText = (event.startDate[8] + event.startDate[9] + event.startDate[7] + event.startDate[5] + event.startDate[6] + event.startDate[4] + event.startDate[0] + event.startDate[1] + event.startDate[2] + event.startDate[3])


    const button_card = document.createElement("button");
    button_card.setAttribute("class", "button_card ");
    button_card.setAttribute("id", "button_card ");
    button_card.innerHTML = '<ion-icon name="add"></ion-icon>';

    const fav_card = document.createElement("button");
    fav_card.setAttribute("class", "fav_card ");
    fav_card.setAttribute("id", "fav_card ");
    fav_card.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';

    principal_card.appendChild(mainContainer_card);
    mainContainer_card.appendChild(container_title_card);
    container_title_card.appendChild(title_card);
    mainContainer_card.appendChild(place_card);
    place_card.appendChild(p_place_card)
    mainContainer_card.appendChild(container_fecha_button_card);
    container_fecha_button_card.appendChild(fecha_card);
    container_fecha_button_card.appendChild(button_card);
    container_fecha_button_card.appendChild(fav_card);

    let fav_card_click = false;

    // Función para manejar el clic en el ícono de corazón
    function handleFavoriteClick(eventId) {
      // Verificar si el evento ya está en favoritos
      let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      const index = favorites.indexOf(eventId);
      // Si no está en favoritos, agregarlo; de lo contrario, quitarlo
      if (index === -1) {
        favorites.push(eventId);
      } else {
        favorites.splice(index, 1);
      }
      // Guardar los favoritos actualizados en el localStorage
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    // En el bloque donde creas el elemento fav_card y agregas el evento click:
    fav_card.addEventListener("click", () => {
      // Obtener el ID del evento asociado a este elemento fav_card
      const eventId = event; // Reemplaza event.id con la propiedad adecuada que identifica el evento

      // Cambiar el ícono del corazón y manejar el estado de favoritos
      if (fav_card_click === false) {
        fav_card.innerHTML = '<ion-icon name="heart"></ion-icon>';
        handleFavoriteClick(eventId);
        fav_card_click = true;
      } else {
        fav_card.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';
        handleFavoriteClick(eventId);
        fav_card_click = false;
      }
    });
  });
}

//FUNCIÓN PARA ORDENAR LOS EVENTO POR FECHA
async function ordenarEventos(nombreTipo){
  const numerosTipos = tipos[nombreTipo] || [];
  //Llama a la API, esperamos la respuesta, y la guardamos en un array
  const response = await Promise.all(numerosTipos.map(numero=> evenType(numero)))
  let resultado = [];
  response.forEach(typeArray=>{resultado=resultado.concat(typeArray)})
  //Usamos .sort para comparar las fechas y ordenarlas
  resultado.sort((evento1,evento2)=>{
    const fecha1 = new Date (evento1.startDate)
    const fecha2 = new Date (evento2.startDate)
    return fecha1-fecha2
  })
  //Llamamos a addEvents con el resultado ordenado
  addEvents(resultado)

}

//FUNCION NUMERO RANDOM
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}