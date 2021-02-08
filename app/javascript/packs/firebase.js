function hello() {
  let greeting = "Hello JS!";
  console.log(greeting);
  alert(greeting);
}

document.addEventListener('turbolinks:load', () => {
  const clickButton = document.getElementById("hello-js");
  clickButton.addEventListener('click', (event) => {
      hello()
  });
});


const authenticate = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithRedirect(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
  
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;

      console.log(`token: ${token}
      credential: ${credential}
      user: ${user}`)
      // ...
    }).catch((error) => {

      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      console.log('ERROR')
    });
}

document.addEventListener('turbolinks:load', () => {
  const clickButton2 = document.getElementById("fbase-auth");
  clickButton2.addEventListener('click', (event) => {
      authenticate()
  });
});

