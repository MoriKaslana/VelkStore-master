import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNqhwnVZW4cmepCFUjlXROClwhrb0GO04",
    authDomain: "velkhana-store.firebaseapp.com",
    databaseURL: "https://velkhana-store-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "velkhana-store",
    storageBucket: "velkhana-store.appspot.com",
    messagingSenderId: "813151184155",
    appId: "1:813151184155:web:4a7f0d933d16efe3a89fbe",
    measurementId: "G-D25CS9PGFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessageDiv = document.getElementById('error-message');
    
    // Clear previous error messages
    errorMessageDiv.textContent = '';

    // Validate email and password
    if (!email || !password) {
        errorMessageDiv.textContent = 'Please fill out all fields.';
        return;
    }

    if (!emailRegex.test(email)) {
        errorMessageDiv.textContent = 'Please enter a valid email address.';
        return;
    }

    // Authenticate with Firebase
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert('Login successful!');
            window.location.href = './admin.page/adminHome.html';  // Redirect to adminHome.html
        })
        .catch((error) => {
            const errorMessage = error.message;
            errorMessageDiv.textContent = errorMessage;
        });
});


