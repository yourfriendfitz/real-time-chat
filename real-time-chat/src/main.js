import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import firebase from "firebase";

// Required for side-effects
require("firebase/firestore");
var firebaseConfig = {
  apiKey: "AIzaSyC2j4yMZ__UGjs8AvEA4GD2DS9VQPOEteo",
  authDomain: "fitz-chat.firebaseapp.com",
  databaseURL: "https://fitz-chat.firebaseio.com",
  projectId: "fitz-chat",
  storageBucket: "",
  messagingSenderId: "875055938594",
  appId: "1:875055938594:web:05dd3c215d5133b6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

// access the variable throughout
window.db = db;

Vue.config.productionTip = false;

const prod = process.env.NODE_ENV === "production";
const shouldSW = "serviceWorker" in navigator && prod;
if (shouldSW) {
  navigator.serviceWorker.register("/service-worker.js").then(() => {
    console.log("Service Worker Registered!");
  });
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
