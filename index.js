const config = {
    apiKey: "AIzaSyB8qtM-TPsOpthQsFBPLPA5F4PDC-Tm2k4",
    authDomain: "potenciometro-c8c82.firebaseapp.com",
    databaseURL: "https://potenciometro-c8c82-default-rtdb.firebaseio.com",
    storageBucket: "potenciometro-c8c82.appspot.com",
  };

firebase.initializeApp(config);

const preObject=document.getElementById('/potenciometro-c8c82-default-rtdb/-MZVOIH6t-8L5PniD_o8');

const dbRefObject=firebase.database().ref().child('/potenciometro-c8c82-default-rtdb/-MZVOIH6t-8L5PniD_o8');

dbRefObject.on('value',snap=>{
    preObject.innerText=JSON.stringify(snap.val(),3)});

    