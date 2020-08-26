// password choice variables

var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGIJKLMNOPQRSTUVWXYSZ";
var special = "!@#$%^&*()-_+={}[]|:<>?,.'";
var numbers = "1234567890";

var pwd = "";

var lowerSelection = false;
var upperSelection = false;
var speacialSelection = false;
var numberSelection = false;

// function to generate random password

function generate() {
    var confirmLength = "";
// user inputs how many numbers they want for password
    while (isNaN(confirmLength) || confirmLength < 8 || confirmLength > 128) {
        confirmLength = prompt("How many numbers would you like your password to contain (Between 8 - 128)");
        if (confirmLength === null) {
            break;
        }
    }
// user chooses which characters to use
    if (confirmLength) {
        if (confirm("Do you want lowercase characters?") == true) {
            lowerSelection = true
        }

        if (confirm("Do you want uppercase characters?") === true) {
            upperSelection = true
        }

        if (confirm("Do you want special characters?") === true) {
            speacialSelection = true
        }

        if (confirm("Do you want numerical characters?") === true) {
            numberSelection = true
        }
// if none are selected, alert user to choose at least one
        if (lowerSelection === false && upperSelection === false && speacialSelection === false && numberSelection === false) {
            alert("Must choose at least one character type")
        }     
    }
}    