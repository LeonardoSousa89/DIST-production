import { initializeApp } from "firebase/app";
import { getFirestore }  from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

import {API_KEY,
        AUTH_DOMAIN,
        DATABASE_URL,
        PROJECT_ID,
        STORAGE_BUCKET,
        MESSAGING_SENDER_ID,
        APP_ID,
        MEASUREMENT_ID  
} from '../../../.env.json'

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
};

const app=initializeApp(firebaseConfig);

const db=getFirestore(app)
const auth=getAuth(app)
const storage=getStorage(app)

export { db, auth, storage }

