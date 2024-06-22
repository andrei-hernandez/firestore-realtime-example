import { initializeApp } from 'firebase/app'
import { getDatabase } from '@firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyAD7xkWR4HsUlDwII88x1pdKtugqwXNjgk',
  authDomain: 'ansa-auth.firebaseapp.com',
  databaseURL: 'https://ansa-auth-default-rtdb.firebaseio.com',
  projectId: 'ansa-auth',
  storageBucket: 'ansa-auth.appspot.com',
  messagingSenderId: '569826174696',
  appId: '1:569826174696:web:c44c9093f606d464e28b5d',
  measurementId: 'G-Z6E691T8B4'
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

export { database }

