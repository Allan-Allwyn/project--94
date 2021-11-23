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

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name")

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message:msg,
            like:0
      });
                  
      document.getElementById("msg").value = "";

}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_Tag = "<h4>" + name + "<img class='user_tick' source='tick.png'> </h4>";

message_with_Tag="<h4 class='message_h4'>" + message + "</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_Tag="<span class='glyphicon glyphicon-thumbs-up'> like: "+ like+"</span> </button> <hr>";

row= name_with_Tag+message_with_Tag+like_button+span_with_Tag;
document.getElementById("output").innerHTML += row;

} });  }); }
getData();

function updateLike(message_id){
      console.log("click on like button - "+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value; 
      updated_Likes=Number(likes) + 1;
      console.log(updated_Likes);
      
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_Likes
      });

}



function log_out(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location ="index.html"
}




//End code
