var ical = require('ical-generator'),
    http = require('http'),
    cal = ical({domain: 'github.com', name: 'my first iCal'});
 
// overwrite domain 
cal.domain('desarrolloactivo.com');
 
cal.createEvent({
    start: new Date(),
    end: new Date(new Date().getTime() + 3600000),
    summary: 'Example Event',
    description: 'It works ;)',
    location: 'my room',
    organizer: 'Esteban Fuster <estebanrfp@gmail.com>'
    url: 'http://desarrolloactivo.com/'
});

cal.repeating({
    freq: 'MONTHLY', // required 
    count: 5,
    interval: 2,
    until: new Date('Jan 01 2014 00:00:00 UTC')
});

cal.attendees([
    {email: 'estebanrfp@gmail.com', name: 'Person A'},
    {email: 'agustin@icloud.com', name: 'Person B'}
]);
 
http.createServer(function(req, res) {
    cal.serve(res);
}).listen(3000, '127.0.0.1', function() {
    console.log('Server running at http://127.0.0.1:3000/');
});