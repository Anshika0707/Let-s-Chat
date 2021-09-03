var firebaseConfig = {
    apiKey: "AIzaSyABUv-JL800-p_Co4HHSXfdiq1OWUCx1ys",
  authDomain: "let-s-chat-4517d.firebaseapp.com",
  projectId: "let-s-chat-4517d",
  storageBucket: "let-s-chat-4517d.appspot.com",
  messagingSenderId: "436485132302",
  appId: "1:436485132302:web:8505efd0b73329dfc1ac5f",
  measurementId: "G-JNCGGRPYWN"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
