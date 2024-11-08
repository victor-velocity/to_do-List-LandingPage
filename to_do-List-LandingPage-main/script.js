document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("remember-me").checked;

    // Log details to the console
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);

    // Optional: Save to local storage if "Remember Me" is checked
    if (rememberMe) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password); // Not recommended for production use
    } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
    }

    // Simulate successful login or add further login logic here
    alert("Login details saved. Check console for output.");
});

function handleGoogleSignIn() {
    // Placeholder function for Google sign-in
    // You can integrate Firebase or another authentication provider here
    console.log("Google Sign-In button clicked.");
    alert("Redirecting to Google Sign-In...");
}

function redirectToSignUp() {
    // Placeholder for sign-up page redirection
    console.log("Redirecting to Sign-Up page...");
    alert("Redirecting to Sign-Up page...");
    // You can replace the alert with actual redirection, e.g.,
    // window.location.href = "signup.html";
}
