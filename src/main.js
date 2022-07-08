import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'material-icons/iconfont/material-icons.css'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import './registerServiceWorker'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


Vue.use(Vuesax,{
  colors:{
    primary:'#ffd534'
  }
})

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyA8Wgi7RyYd9voBgAmksC2j9bRX_bp02tA",
  authDomain: "library-test-9432.firebaseapp.com",
  projectId: "library-test-9432",
  storageBucket: "library-test-9432.appspot.com",
  messagingSenderId: "684994442881",
  appId: "1:684994442881:web:7e8ab21c6902cc8483bf80",
  measurementId: "G-52X3Z3VTZQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 new Vue({
        router,
        render: h => h(App)
      }).$mount('#app')
