import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  const firebaseConfig = {
  apiKey: "AIzaSyCUp3pQQDUQi_GzxZoBS888B1lm2Z7KBko",
  authDomain: "projeto71-44921.firebaseapp.com",
  projectId: "projeto71-44921",
  storageBucket: "projeto71-44921.appspot.com",
  messagingSenderId: "677569538729",
  appId: "1:677569538729:web:a8481534156f2f699397b8"
}
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
