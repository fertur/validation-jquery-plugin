$(document).ready(function () {

    var regform = $("#contact_form");
    var user = $("#user");
    var userinfo = $("#userInfo");
    var password = $("#password");
    var passwordinfo = $("#passwordInfo");
    var confirmpassword = $("#confirmpassword");    
    var confirmpasswordinfo = $("#confirmpasswordInfo");
    var name = $("#name");
    var nameinfo = $("#nameInfo");
    var lastname = $("#lastname");
    var lastnameinfo = $("#lastnameInfo");    
    var email = $("#email");
    var emailinfo = $("#emailInfo");
    
    user.blur(validateUser);
    password.blur(validatepassword);
    confirmpassword.blur(validateconfirmpassword);    
    name.blur(validateName);
    lastname.blur(validateLastname);    
    email.blur(validateEmail);
    
    regform.submit(function () {

        if (validateUser() &  validatepassword() & validateconfirmpassword() & validateName() & validateLastname() & validateEmail()) {
            return true;
        } else {
            return false;
        }
    });
    
//Input validate functions
    function validateUser() {

        var a = $("#user").val();
        var regexp = /^[a-z\d]{3,15}$/i;

        if (a == 0) {
            user.addClass("error");
            userinfo.text("The username can't be empty.");
            return false;
        } else if (!regexp.test(a)) {
            user.addClass("error");
            userinfo.text("Can only contain letters and numbers and 3-15 digits.");
            return false;
        } else {
            user.removeClass("error");
            userinfo.text("");
            $('#userInfo').prepend('<img  src="img/tick.gif" />')
            return true;
        }
    }

    function validatepassword() {

        var a = $("#password").val();        
        var regexp = /^(?=.*\d).{6,12}$/;

        if (a == 0) {
            password.addClass("error");
            passwordinfo.text("The password can't be empty.");
            return false;
        } else if (!regexp.test(a)) {
            password.addClass("error");
            passwordinfo.text("The password must contain 6-12 digits and include a number and a capital letter at least.");
            return false;
        } else {
            password.removeClass("error");
            passwordinfo.text("");
            $('#passwordInfo').prepend('<img  src="img/tick.gif" />')
            return true;
        }
    }

    function validateconfirmpassword() {

        var a = $("#confirmpassword").val();
        var regexp = /^(?=.*\d).{6,12}$/;

        if (!regexp.test(a)) {
            confirmpassword.addClass("error");
            confirmpasswordinfo.text("The password confirmation can't be empty.");
            return false;
        } else if (confirmpassword.val() != password.val()) {
            confirmpassword.addClass("error");
            confirmpasswordinfo.text("Passwords do not match.");
            return false;
        } else {
            confirmpassword.removeClass("error");
            confirmpasswordinfo.text("");
            $('#confirmpasswordInfo').prepend('<img  src="img/tick.gif" />')
            return true;
        }
    }

    function validateName() {

        var a = $("#name").val();
        var regexp = /^[a-z ,.'-]+$/i;
       
        if (a == 0) {
            name.addClass("error");
            nameinfo.text("Write your name");
            nameinfo.removeClass("validate");
            return false;
        } else if (!regexp.test(a)) {
            name.addClass("error");
            nameinfo.text("Enter a correct name.");
            nameinfo.removeClass("validate");
            return false;
        } else {
            name.removeClass("error");
            nameinfo.text("");
            $('#nameInfo').prepend('<img  src="img/tick.gif" />');
            return true;
        }
    }

    function validateLastname() {

        var a = $("#lastname").val();
        var regexp = /^[a-z ,.'-]+$/i;
        
        if (a == 0) {
            lastname.addClass("error");
            lastnameinfo.text("Write your last name");
            lastnameinfo.removeClass("validate");
            return false;
        } else if (!regexp.test(a)) {
            lastname.addClass("error");
            lastnameinfo.text("Enter a correct last name.");
            lastnameinfo.removeClass("validate");
            return false;
        } else {
            lastname.removeClass("error");
            lastnameinfo.text("");
            $('#lastnameInfo').prepend('<img  src="img/tick.gif" />')
            return true;
        }
    }

    function validateEmail() {

        var a = $("#email").val();
        var regexp = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_­-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9­]+.[a-z]{2,4}$/;

        if (a == 0) {
            email.addClass("error");
            emailinfo.text("Write your email.");
            return false;
        } else if (!regexp.test(a)) {
            email.addClass("error");
            emailinfo.text("Enter a valid email address please.");
            return false;
        } else {
            email.removeClass("error");            
            emailinfo.text("");
            $('#emailInfo').prepend('<img  src="img/tick.gif" />')
            return true;
        }
    }
});
