import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyATC2TulxdcJaxaVabRk7Yex7-dhy0VOsk",
    authDomain: "appproducts-dc5a9.firebaseapp.com",
    projectId: "appproducts-dc5a9",
    storageBucket: "appproducts-dc5a9.appspot.com",
    messagingSenderId: "883107980591",
    appId: "1:883107980591:web:e731fe2f6ffa1a24a5adda"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);