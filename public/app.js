const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5XVOSIs9csW3SphEYcEaT7P4UM4kwDIY",
  authDomain: "influencersbr-4cff8.firebaseapp.com",
  databaseURL: "https://influencersbr-4cff8-default-rtdb.firebaseio.com",
  projectId: "influencersbr-4cff8",
  storageBucket: "influencersbr-4cff8.appspot.com",
  messagingSenderId: "6123015351",
  appId: "1:6123015351:web:8b017112827903f35f5132"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Get elements
  const signInForm = document.getElementById('sign-in-form');
  const signUpForm = document.getElementById('sign-up-form');
  
  // Sign in
  signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('sign-in-email').value;
    const password = document.getElementById('sign-in-password').value;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log('User signed in:', user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error('Error signing in:', errorCode, errorMessage);
      });
  });
  
  // Sign up
  signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('sign-up-email').value;
    const password = document.getElementById('sign-up-password').value;
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed up
        var user = userCredential.user;
        console.log('User signed up:', user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error('Error signing up:', errorCode, errorMessage);
      });
  });
  