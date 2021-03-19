import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/functions'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm7g3rygL8ekm0qNKSy6JQb3yTUSIwjQg",
  authDomain: "discord-oauth-test.firebaseapp.com",
  databaseURL: "https://discord-oauth-test-default-rtdb.firebaseio.com",
  projectId: "discord-oauth-test",
  storageBucket: "discord-oauth-test.appspot.com",
  messagingSenderId: "253355615051",
  appId: "1:253355615051:web:d5dcddf900a6da477e3ece",
  measurementId: "G-WQ070RDW8B"
};
firebase.initializeApp(firebaseConfig)

export const functions = firebase.functions()

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
