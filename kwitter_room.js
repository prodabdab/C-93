
var firebaseConfig = {
      apiKey: "AIzaSyDs-sp97c_ePGt21SlXzBGAhhFgPMzzvE4",
      authDomain: "kwitter-376f2.firebaseapp.com",
      projectId: "kwitter-376f2",
      storageBucket: "kwitter-376f2.appspot.com",
      messagingSenderId: "72847565131",
      appId: "1:72847565131:web:681104a2fb58f7103f48ce"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


function Button_Logout() {
      localStorage.removeItem("Userame_of_the_prson_KK");
      window.location="Login_of_kwitter.html";
}