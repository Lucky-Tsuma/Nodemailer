const sendEmail = require('../config/mailer');
const eventDetails = require('../ical/calendar.ical');

module.exports = {

    homepage: (req, res) => {
        res.send("Nodemailer Homepage");
    },
    mailer: async (req, res) => {

        const message = {
    
            from: {
                name: 'Lucky Tsuma',
                address: 'luckytsumah@gmail.com'
            },
            to: 'tsumahmumba@gmail.com',
            cc: 'lucky.tsuma@thejitu.com',
            subject: 'MEET SOME OLD FRIENDS',
            text: 'This is a sample calendar invite sent using nodemailer.',
            icalEvent: {
                filename: 'invitation.ics',
                method: "REQUEST",
                content: eventDetails
            },
            html: 
            `<div>
            <h1>Friends meeting invite</h1>
            <br />
            <p>Take a break from your daily busy schedule and come meet some old friends.</p>
            <br />
            <h3>Life is better with friends</h3>
            <br />
            <img src="cid:uniqueID" alt"alt"/>
            <p font-style:italic>This was sent using nodemailer</p>
            </div>`,
            attachments: [
                {
                  filename: "friends.png",
                  path: "https://tinyurl.com/88t3d2z6",
                  cid: "uniqueID",
                }
            ]
        }
    
        try {
            await sendEmail(message);
            res.send('Email was sent successfully');
        } catch(error) {
            console.log(error);
            res.send("There was an error sending the email");
        }
    }
}