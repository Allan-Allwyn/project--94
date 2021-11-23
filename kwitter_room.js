const firebaseConfig = {
      apiKey: "AIzaSyAJ4r8-IcDRPtfeBuw60fhhbPd3PgEWFUw",
      authDomain: "kwitter-2c3e9.firebaseapp.com",
      databaseURL: "https://kwitter-2c3e9-default-rtdb.firebaseio.com",
      projectId: "kwitter-2c3e9",
      storageBucket: "kwitter-2c3e9.appspot.com",
      messagingSenderId: "417918767849",
      appId: "1:417918767849:web:9a274c9e6b932e12401678"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

      function addRoom(){
            room_name = document.getElementById("room_name").value ;
            firebase.database().ref("/").child(room_name).update({
                  purpose : "adding room name"
            });
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html" ;


      }

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("rom_name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" +Room_names+ "</div> <hr>";
      document.getElementById("output").innerHTML += row; 
          
      //End code
      });});}
getData();


function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html"
}

function log_out(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location ="index.html"
}
