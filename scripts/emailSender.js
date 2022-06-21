function sendEmail() {
    Email.send({
        Host: "smtp-relay.sendinblue.com",
        Username: "ads.pixelswolf@gmail.com",
        Password: "V2ahZIGzJ563gqQv",
        To: "ads.pixelswolf@gmail.com",
        From: "sender@vetrinilavan.in",
        Body: "testing mail",
    }).then(() => {
        alert("message sent");
        console.log("sent");
    });
}

function writeFile() {
    
}