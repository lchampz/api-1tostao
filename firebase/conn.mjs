import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'dotenv/config'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING,
  appId: process.env.ID_APP,
  measurementId: process.env.MEASUREMENT
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db 