//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAg2eiJ-xLGgZFkwK0QNOo_YTPFDnLJ-a8",
    authDomain: "kwitter-c19d4.firebaseapp.com",
    databaseURL: "https://kwitter-c19d4-default-rtdb.firebaseio.com",
    projectId: "kwitter-c19d4",
    storageBucket: "kwitter-c19d4.appspot.com",
    messagingSenderId: "1068300458894",
    appId: "1:1068300458894:web:43f5eebfe088ffa1f7a2df"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
