// Function to hide/show password \\
function pswdHide() {
    var x = document.getElementById("input");
    var y = document.getElementById("input2");
    var z = document.getElementById("input3");

    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }

    if (y.type === "password") {
      y.type = "text";
    } else {
      y.type = "password";
  }

  if (z.type === "password") {
    z.type = "text";
  } else {
    z.type = "password";
  }
}

// Switches between login and create account forms \\
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    
    document.querySelector("#linkCreateAccount").addEventListener("click", e => {  
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        createAccountForm.classList.add("form-hidden");
    });
})