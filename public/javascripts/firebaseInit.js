
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDuF_jIadMOlQ_GLWzSbFpeCHE54_AfcaU",
    authDomain: "fir-e4a9b.firebaseapp.com",
    projectId: "fir-e4a9b",
    storageBucket: "fir-e4a9b.appspot.com",
    messagingSenderId: "975265535267",
    appId: "1:975265535267:web:ebc927245df49ef59c6896",
    measurementId: "G-MF9DHWMR3Q"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
