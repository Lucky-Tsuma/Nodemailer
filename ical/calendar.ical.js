const ical = require("ical-generator");
const moment = require("moment");


const eventDetails = ical({
	  domain: "google.com",
    method: "REQUEST",
    prodId: "//Google Inc//Google Calendar 70.9054//EN",
    timezone: "UTC/GMT +3 hours",
    scale: "GREGORIAN",
    events: [
        {
          start: moment(),
          status: "CONFIRMED",
          end: moment().add(1, "hour"),
          summary: "Calendar Invite",
          transparency: "OPAQUE",
          organizer: {
            name: "Lucky Tsuma",
            email: "luckymumba89@gmail.com"
          },
          location: "Nyeri",
          attendees: [
            {
              email: "tsumahmumba@gmail.com",
              name: "Tsuma Mumba",
              status: "NEEDS-ACTION",
              rsvp: true,
              type: "INDIVIDUAL",
              role: "REQ-PARTICIPANT"
            },
            {
              email: "lucky.tsuma@thejitu.com",
              name: "Lucky Tsuma",
              status: "NEEDS-ACTION",
              rsvp: true,
              type: "INDIVIDUAL",
              role: "REQ-PARTICIPANT"
            }
        ]
    }]
	
}).toString();

module.exports = eventDetails;