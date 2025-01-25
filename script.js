type="text/javascript"
    function checkPswd() {
        var confirmPassword = "ada";
        var password = document.getElementById("pswd").value;
        console.log("Password entered:", password);
        if (password == confirmPassword) {
            window.location="life guide/index.html";
        }
        else{
            alert("Passwords do not match.");
        }
    }