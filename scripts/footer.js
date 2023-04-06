var footerEmail = document.getElementById("footerEmail")
    email = "arnassiusa@gmail.com";

function sendEmail() {
    console.log("clicked");
    document.location = "mailto:"+email+"?subject="+"&body=";
}