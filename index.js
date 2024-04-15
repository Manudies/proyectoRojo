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
// const preferenceRadioBtn5 = document.getElementById("preferenceRadioBtn5");
// const preferenceRadioBtn6 = document.getElementById("preferenceRadioBtn6");
// const preferenceRadioBtn7 = document.getElementById("preferenceRadioBtn7");
// const preferenceRadioBtn8 = document.getElementById("preferenceRadioBtn8");

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

// preferenceRadioBtn5.addEventListener("click", ()=>{
//   containerPreferenceBtnDescription_index.style.display="flex";
//   preferenceBtnDescriptionTxt.innerText="DEPORTE";
//   vamosBtn_index.style.display="block";
// });

// preferenceRadioBtn6.addEventListener("click", ()=>{
//   containerPreferenceBtnDescription_index.style.display="flex";
//   preferenceBtnDescriptionTxt.innerText="ALTERNATIVO";
//   vamosBtn_index.style.display="block";
// });

// preferenceRadioBtn7.addEventListener("click", ()=>{
//   containerPreferenceBtnDescription_index.style.display="flex";
//   preferenceBtnDescriptionTxt.innerText="¡FIESTA!";
//   vamosBtn_index.style.display="block";
// });

// preferenceRadioBtn8.addEventListener("click", ()=>{
//   containerPreferenceBtnDescription_index.style.display="flex";
//   preferenceBtnDescriptionTxt.innerText="AL AIRE LIBRE";
//   vamosBtn_index.style.display="block";
// });

// ***
