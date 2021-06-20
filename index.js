const config = {
    apiKey: "AIzaSyB8qtM-TPsOpthQsFBPLPA5F4PDC-Tm2k4",
    authDomain: "potenciometro-c8c82.firebaseapp.com",
    databaseURL: "https://potenciometro-c8c82-default-rtdb.firebaseio.com",
    storageBucket: "potenciometro-c8c82.appspot.com",
  };

firebase.initializeApp(config);

const preObject=document.getElementById('/potenciometro-c8c82-default-rtdb/-McX-cUorfzvL5abGQk_');
const preObject1=document.getElementById('/potenciometro-c8c82-default-rtdb/-McawCGboopt4arIqaDk');
const preObject2=document.getElementById('/potenciometro-c8c82-default-rtdb/-Mcay7Haxxqn7BMiSChE');

const dbRefObject=firebase.database().ref().child('/potenciometro-c8c82-default-rtdb/-McX-cUorfzvL5abGQk_');
const dbRefObject1=firebase.database().ref().child('/potenciometro-c8c82-default-rtdb/-McawCGboopt4arIqaDk');
const dbRefObject2=firebase.database().ref().child('/potenciometro-c8c82-default-rtdb/-Mcay7Haxxqn7BMiSChE');

dbRefObject.on('value',snap=>{
    preObject.innerText=JSON.stringify(snap.val(),3)});

dbRefObject1.on('value',snap=>{
    preObject1.innerText=JSON.stringify(snap.val(),3)});
      
dbRefObject2.on('value',snap=>{
    preObject2.innerText=JSON.stringify(snap.val(),3)});

    