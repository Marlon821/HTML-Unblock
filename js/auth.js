// ✅ Debugging Check
if (typeof firebase === "undefined") {
    console.error("❌ Firebase SDK not loaded. Check your script links in index.html.");
} else {
    console.log("✅ Firebase SDK Loaded Successfully");
}

// 🔹 Firebase Config (Replace with your keys)
const firebaseConfig = {
    apiKey: "AlZaSyB6QcZ4GzdQCHn_DEmF_YZnZqfX5expq8",
    authDomain: "authentication-a227b.firebaseapp.com",
    projectId: "authentication-a227b",
    storageBucket: "authentication-a227b.firebasestorage.app",
    messagingSenderId: "914910652238",
    appId: "1:914910652238:web:885f1db072264b2b44e01f"
};

// ✅ Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// ✅ Debugging
console.log("✅ Firebase Initialized:", firebase.apps.length);

// ✅ Login Function
window.login = function () {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("✅ Login successful!");
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            alert("❌ Login failed: " + error.message);
        });
};

// ✅ Register Function
window.register = function () {
    let email = document.getElementById("reg-email").value;
    let password = document.getElementById("reg-password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("✅ Account created successfully!");
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            alert("❌ Registration failed: " + error.message);
        });
};

// ✅ Logout Function
window.logout = function () {
    auth.signOut().then(() => {
        alert("✅ Logged out successfully.");
        window.location.href = "index.html";
    });
};

// ✅ Check if User is Logged In
auth.onAuthStateChanged((user) => {
    if (user) {
        let userEmail = user.email;
        let dashboardInfo = document.getElementById("dashboard-info");
        if (dashboardInfo) {
            dashboardInfo.innerHTML = `🎮 Welcome, ${userEmail}!`;
        }
    }
});
