var ical = require('ical-generator'),
	http = require('http'),
    // Create new Calendar and set optional fields
    cal = ical({
        domain: 'desarrolloactivo.com',
        prodId: {company: 'desarrolloactivo.com', product: 'Platzi cursos'},
        name: 'Platzi Cursos',
        timezone: 'Europe/Berlin'
    });

// You can also set values like this…
cal.domain('desarrolloactivo.com');

// create a new event
cal.createEvent({
    start: new Date(),
    end: new Date(new Date().getTime() + 3600000),
    summary: 'Example Event',
    description: 'It works ;)',
    location: 'my room',
    url: 'http://desarrolloactivo.com/'
});


// like above, you can also set/change values like this…
//event.summary('My Super Mega Awesome Event');

// get the iCal string
//cal.toString(); // --> "BEGIN:VCALENDAR…"


// You can also create events directly with ical()
cal = ical({
    domain: 'desarrolloactivo.com',
    prodId: '//superman-industries.com//ical-generator//EN',
    events: [
        {
            start: new Date(),
            end: new Date(new Date().getTime() + 3600000),
            timestamp: new Date(),
            summary: 'My Event 2',
            organizer: 'Esteban Fuster <estebanrfp@gmail.com>'
        },
        {
            start: new Date(),
            end: new Date(new Date().getTime() + 3600000),
            timestamp: new Date(),
            summary: 'My Event 3',
            organizer: 'Esteban Fuster <estebanrfp@gmail.com>'
        },
        {
            start: new Date(),
            end: new Date(new Date().getTime() + 3600000),
            timestamp: new Date(),
            summary: 'My Event 4',
            organizer: 'Esteban Fuster <estebanrfp@gmail.com>'
        }
    ]
});


http.createServer(function(req, res) {
    cal.serve(res);
}).listen(3000, '127.0.0.1', function() {
    console.log('Server running at http://127.0.0.1:3000/');
});