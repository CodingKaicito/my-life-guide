type="text/javascript"
    function checkPswd() {
        var confirmPassword = "tips";
        var password = document.getElementById("pswd").value;
        if (password == confirmPassword) {
            window.location="life guide/index.html";
        }
        else{
            alert("Passwords do not match.");
        }
    }