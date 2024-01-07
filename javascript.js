function myFunction() {
    let x = document.forms["myForm"]["name"].value;
    let y = document.forms["myForm"]["email"].value;
    let z = document.forms["myForm"]["message"].value;
    if((x == "") || (y == "") || (z == "")) {
        alert("Please fill out every field");
    } else {
        alert("Your message has been sent successfully!");
    }
}
