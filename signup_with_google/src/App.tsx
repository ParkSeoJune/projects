import { initializeApp } from "firebase/app";

function App() {
  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA1s8hXy5wmf8EUIJAE_Hcl5Q81IkGVpEI",
    authDomain: "signup-with-be4fa.firebaseapp.com",
    projectId: "signup-with-be4fa",
    storageBucket: "signup-with-be4fa.appspot.com",
    messagingSenderId: "780114290023",
    appId: "1:780114290023:web:eec44c60bbb27e8c8d3bc2",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  return <h1>Firebase 🔥</h1>;
}

export default App;
