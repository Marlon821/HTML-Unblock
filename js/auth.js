// ✅ Ensure Firebase is Loaded
if (typeof firebaseAuth === "undefined") {
    console.error("❌ Firebase SDK not loaded! Check script order.");
} else {
    console.log("✅ Firebase SDK Loaded!");
}

// 🔹 Login Function
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebaseAuth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            console.log("✅ Login Successful!", userCredential.user);
            showSection('home');
        })
        .catch(error => console.error("❌ Login Failed:", error.message));
}

// 🔹 Register Function
function register() {
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;

    firebaseAuth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            console.log("✅ Registration Successful!", userCredential.user);
            showSection('home');
        })
        .catch(error => console.error("❌ Registration Failed:", error.message));
}

// 🔹 Logout Function
function logout() {
    firebaseAuth.signOut().then(() => {
        console.log("✅ Logged out!");
        showSection("auth-section");
    }).catch(error => console.error("❌ Logout Failed:", error.message));
}
