var ical = require('ical-generator'),
 
    // Create new Calendar and set optional fields 
    cal = ical({
        domain: 'desarrolloactivo.com',
        prodId: {company: 'platzicursos-desarrolloactivo.com', product: 'ical-generator'},
        name: 'My Testfeed',
        timezone: 'Europe/Berlin'
    });
 
// You can also set values like this… 
cal.domain('desarrolloactivo.com');
 
// … or get values 
cal.domain(); // --> "sebbo.net" 
 
// create a new event 
var event = cal.createEvent({
    start: new Date(),
    end: new Date(new Date().getTime() + 3600000),
    timestamp: new Date(),
    summary: 'My Event',
    organizer: 'Esteban Fuster <estebanrfp@gmail.com>'
});
 
// like above, you can also set/change values like this… 
event.summary('My Super Mega Awesome Event');
 
// get the iCal string 
cal.toString(); // --> "BEGIN:VCALENDAR…" 
 
 
// You can also create events directly with ical() 
cal = ical({
    domain: 'desarrolloactivo.com',
    prodId: '//superman-industries.com//ical-generator//EN',
    events: [
        {
            start: new Date(),
            end: new Date(new Date().getTime() + 3600000),
            timestamp: new Date(),
            summary: 'My Event',
            organizer: 'Esteban Fuster <estebanrfp@gmail.com>'
        }
    ]
}).toString();