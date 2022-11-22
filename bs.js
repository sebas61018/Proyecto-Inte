
const firebaseConfig = {
  apiKey: "AIzaSyDeuCII2k6_jho-YOjtYGXix-w6RAKJu2s",
  authDomain: "proyecto-i-10458.firebaseapp.com",
  projectId: "proyecto-i-10458",
  storageBucket: "proyecto-i-10458.appspot.com",
  messagingSenderId: "665120524781",
  appId: "1:665120524781:web:906f82373e40cdd4e53fe4"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// agregar usurios a la base de datos
// function guardar(){
//     db.collection("usuarAdmin").add({
//         username : document.getElementById("Username").value,
//         password : document.getElementById("Password").value,
//     })
//     .then((docRef) => {
//         alert("Registro Exitoso")
//     })
//     .catch((error) => {
//         alert("Fallido")
//     });
// }

// consulta a la base de datos
 
function consulta(){

    let user = document.getElementById("Username").value
    let pass = document.getElementById("Password").value

    if(user == "admin"){
    
    db.collection("usuarAdmin").where("username","==", user).where("password", "==", pass)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            window.location.href="admin.html";
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        })
    })

    }else{
        db.collection("usuarAdmin").where("userU","==", user).where("password", "==", pass)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                window.location.href="userU.html";
            });
        })
    }

    
}

