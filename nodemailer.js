const nodemailer = require('nodemailer');




// emailkaage ii passwordkaaga email wax laga diri rabo 
const email = "example@mail.com"
const password = "password" //app-password isticmaal badalka passworka

let transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: email, 
        pass: password, 
    }
});

export const SendMyEmail=(data)=>{
    let mailOptions = {
        from: password, 
        to: data.email, 
        subject: "Lacagta canshuur bixinta",
        html: `<b>Lacata canshuurta waa ${data.amount} bixi walaal</b>`, 
    };
    
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Error occurred: ' + error.message);
        }
        console.log('Email sent: %s', info.messageId);
    });
    
}


// example usage
// canshuur bixiyaasha
const people = [
    {
        email:"daudkim6793@gmail.com",
        amount: 50,
    },
    {
        email:"faadumo652@gmail.com",
        amount: 100,
    },
    {
        email:"liibanashraf09@gmail.com",
        amount: 76,
    }

]

// loop thought and pass each persons data 
people.map(person=>{
    SendMyEmail(person)
})

