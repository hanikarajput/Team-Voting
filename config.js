import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
apikey:abc,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();