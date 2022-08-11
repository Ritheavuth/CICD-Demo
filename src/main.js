import { createApp } from 'vue'
import App from './App.vue'
import initializeApp from 'firebase'
import './assets/main.css'

const firebaseConfig = {
    apiKey: "AIzaSyDHhHjCtw7hJZQ786a1hYjD5SPiX9R5T8I",
    authDomain: "fir-project-61d00.firebaseapp.com",
    projectId: "fir-project-61d00",
    storageBucket: "fir-project-61d00.appspot.com",
    messagingSenderId: "252583068254",
    appId: "1:252583068254:web:8507a0ce393a694f902acf"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
createApp(App).mount('#app')
