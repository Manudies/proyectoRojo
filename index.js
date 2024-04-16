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
  vamosBtn_index.classList.toggle("btnAnimation");
  // vamosBtn_index.style.="block";

});

// ***

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
});

// ***

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
});

// ***

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
});

// ***

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
});

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
});


// *** BOTON BUSCAR (vamosbTN)
let vamosBtnWasPressed = false;

vamosBtn_index-addEventListener("click", ()=>{

  // CLEAR INTERVAL TOGGLE BTN ON CLICK OF VAMOSBTN 
  clearInterval(intervalToggle);

});

