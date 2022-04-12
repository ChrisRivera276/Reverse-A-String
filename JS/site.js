// Step One - controller accept request
function getMessage() {
    let msg = document.getElementById("txtmessage").value;
    
    // validate if the msg not equal to empty string
    if (msg != '') {
       msg = msg.toLowerCase();
        let revMessage = reverseMessageB(msg);
        displayMessage(revMessage);
        
    } else {
       alert("You must enter a string")
    }
}



function reverseMessageA(msg) {
    let revMessage = "";

    // decrimenting loop
    // 0 1 2 3 4
    // B o b b y
    for (let index = msg.length - 1; index >= 0; index--) {
        let char = msg[index];
        revMessage += char;
    }

    return revMessage;
}

function reverseMessageB(msg){

    let revMessage = "";
    revMessage = msg.split("").reverse().join("");
    
    return revMessage;
}





// Final Step - view
function displayMessage(message) {

    //fist get ol element from page
    element = document.getElementById("results");
    element.innerHTML = message;
}