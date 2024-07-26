function verifyEmail() {
    let email1 =  document.getElementById("email")
    let email2 = document.getElementById("emailConf")

    if (email1 == email2) {
        return true;
    }
    else {
        alert("Emails do not match.");
    }

}