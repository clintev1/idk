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

function login(){
    Webcam.set({
        width:350,
        height:300,
        image_format : 'png',
        png_quality:999
});

    camera = document.getElementById("camera");

    Webcam.attach( '#camera' )
}

    user_name = localStorage.getItem("user_name");
  	room_name = localStorage.getItem("room_name");

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}
