import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAr3jVy613QB8ejxqFr1vRH2bHqjy_-lNQ",
    authDomain: "cooking-ashu-site.firebaseapp.com",
    projectId: "cooking-ashu-site",
    storageBucket: "cooking-ashu-site.appspot.com",
    messagingSenderId: "865462310613",
    appId: "1:865462310613:web:18c115f774769ee550f45c"
}

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()

export { projectFirestore }