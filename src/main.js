import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
Vue.config.productionTip = false


const firebaseConfig = {
  apiKey: "AIzaSyDhTP6sNSs3c4n55V69tM1dH--pBgEjUtE",
  authDomain: "soft-kudos.firebaseapp.com",
  projectId: "soft-kudos",
  storageBucket: "soft-kudos.appspot.com",
  messagingSenderId: "272127081098",
  appId: "1:272127081098:web:622bb52ed1aaf7c8f20b73"
};
firebase.initializeApp(firebaseConfig);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },

  template: '<App/>'
})