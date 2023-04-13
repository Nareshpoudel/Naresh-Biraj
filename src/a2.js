var loginForm = document.getElementById("contact-us");

    var firstName = document.getElementById("firstname")
    var lastName = document.getElementById("lastname")
    var phone = document.getElementById("phone")
    var email = document.getElementById("email")
    var message = document.getElementById("message")

 function validate5(field){
 var fname = field.value;
if(fname.length < 5){

 alert("please enter a 5 character name");

 return false;

 }

 return true;

}

function lvalidate5(field){
    var lname=field.value;
    if(lname.length < 5){
        alert("please enter a 5 character last name");

        return false;
    }
    return true;
}

function mvalidate(field){
    var msg = field.value;
    if (msg.length < 50){
        alert("50 character message is required");

        return false;
    }
    return true;
}

function phnvalidate(field){
    var phn = field.value;

    if(phn.length == 10){
        return true
    }
        alert("Please enter a 10 digit phone number.")

        return false;
}






