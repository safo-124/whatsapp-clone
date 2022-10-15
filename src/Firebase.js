import firebase from "firebase";
import "firebase/firestore";
 


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpu7XpV2BL-VTMjSE_hYofDohPLIxuiKM",
  authDomain: "whatsapp-clone-8394c.firebaseapp.com",
  projectId: "whatsapp-clone-8394c",
  storageBucket: "whatsapp-clone-8394c.appspot.com",
  messagingSenderId: "162699546767",
  appId: "1:162699546767:web:9efe10d59fe7a59ad860fa"
};

firebase.initializeApp(firebaseConfig);

export default firebase