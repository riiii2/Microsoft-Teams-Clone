
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD3W0YS3wqWOlWGI3mGRaAy1yGan66SvhE",
    authDomain: "teams-fb099.firebaseapp.com",
    projectId: "teams-fb099",
    storageBucket: "teams-fb099.appspot.com",
    messagingSenderId: "384850262017",
    appId: "1:384850262017:web:fff83be0caa9194f962800"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    promise.catch(e => alert(e.message));
      
    alert("Signed Up");
}


  function signIn(){
      
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    window.location="https//www.google.com";

    
  }
//   function signOut(){
//     auth.signOut();
//     alert("signed")
// }

  auth.onAuthStateChanged((user)=>{
    if(user){
        var email = user.email;
        alert("Active User " +email);
    }else{
        alert("No Active User")
    }
})
