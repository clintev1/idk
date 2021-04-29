var room_name = localStorage.getItem(room_name)

var firebaseConfig = {
    apiKey: "AIzaSyCXZYUFC8MjWyptoS9qFU1D4fVJJlXcV8o",
    authDomain: "kwitter-meet.firebaseapp.com",
    databaseURL: "https://kwitter-meet-default-rtdb.firebaseio.com",
    projectId: "kwitter-meet",
    storageBucket: "kwitter-meet.appspot.com",
    messagingSenderId: "930738735575",
    appId: "1:930738735575:web:df91652f0de7c3f7d1a392",
    measurementId: "G-V1RWPVKC6Y"
};
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function checkRoom() {
    if (checkRoom == room_name) {
        console.log("Correct password/ID");
        window.location = "kwitter_page.html";
}    else if(checkRoom != room_name) {
         console.log("Incorrect password/ID please check the password, if still experinceing issue update your browser, then also you are experinceing issue then contanct us on - superspeechcreator@gmail.com");
         window.alert("Incorrect password/ID please check the password, if still experinceing issue update your browser, then also you are experinceing issue then contanct us on - superspeechcreator@gmail.com");
}}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}