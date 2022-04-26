var nodemailer = require("nodemailer");

var path = require('path')
//var image = require('../mail/image.jpeg')

const mail = async(req,res)=>{ 

    console.log("mailer")
    console.log(__dirname)
    var sender = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'archita.eminence@gmail.com',
        pass: 'emiweb#@123'
    } 
});
 console.log(sender)
var mail = {
    from: 'archita.eminence@gmail.com',
    to: 'sharmaarchita563@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!',
    // html:
    // "<h1>GeeksforGeeks</h1>",
   // <p>I love geeksforgeeks</p>,

  attachments: [
        {
            filename: 'image.jpeg',
            path: path.join(__dirname ,'../mail/image.jpeg')
           // cid: 'uniq-mailtrap.png'
        }
    ]
 };

sender.sendMail(mail, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        res.send('Email sent successfully: '+ info.response);
        console.log('Email sent successfully: '+ info.response);
    }
});
}
module.exports = {
    mail
}