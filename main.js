function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("AIzaSyDeWKCfdNql_xJseO6XOtr0d_C9N9iGBFg").child("user_name").update({
    purpose : "adding user"    
    });
}

function addRoom()
{
    romm_name = document.getElementById("room_name").value;

    firebase.database().ref("AIzaSyDeWKCfdNql_xJseO6XOtr0d_C9N9iGBFg").child(room_name).udate({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name" , room_name);

window.location = "kwitter_page.html";
}

function getData(){firebase.database().ref("AIzaSyDeWKCfdNql_xJseO6XOtr0d_C9N9iGBFg").on('value' , function(snapshot) {document.getElementById("output").innerHTML
Room_names = childKey;

console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.ad)' >#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML +=row;
});};