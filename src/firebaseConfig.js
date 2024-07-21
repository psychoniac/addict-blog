import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyCOegzGOIpUXD_2gwRQcy2NvfZCs7O8oIU",
  authDomain: "mon-blog-e2406.firebaseapp.com",
  projectId: "mon-blog-e2406",
  storageBucket: "mon-blog-e2406.appspot.com",
  messagingSenderId: "223100744608",
  appId: "1:223100744608:web:95e03eaec2462c68032ac5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, db,storage }