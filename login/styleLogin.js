// import { GoogleAuthProvider } from "firebase/auth";

// const provider = new GoogleAuthProvider();
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
// import { getAuth } from "firebase/auth";

// const auth = getAuth();
// auth.languageCode = 'it';
// // To apply the default browser preference instead of explicitly setting it.
// // firebase.auth().useDeviceLanguage();
// provider.setCustomParameters({
//     'login_hint': 'user@example.com'
// });
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// const auth = getAuth();
// signInWithPopup(auth, provider)
//     .then((result) => {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         // The signed-in user info.
//         const user = result.user;
//         // ...
//     }).catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.customData.email;
//         // The AuthCredential type that was used.
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         // ...
//     });
// import { getAuth, signInWithRedirect } from "firebase/auth";

// const auth = getAuth();
// signInWithRedirect(auth, provider);
// import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";

// const auth = getAuth();
// getRedirectResult(auth)
//     .then((result) => {
//         // This gives you a Google Access Token. You can use it to access Google APIs.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;

//         // The signed-in user info.
//         const user = result.user;
//     }).catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.customData.email;
//         // The AuthCredential type that was used.
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         // ...
//     });

//---------------------------------------
document.getElementById(' submit').addEventListener('click', handSunmit)
function handSunmit() {
    window.history.back();
}