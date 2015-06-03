var ical = require('ical-generator'),
    http = require('http'),
    //cal = ical({domain: 'desarrolloactivo.com', name: 'Mi primer horario programado de Platzi'});

    cal = ical({
        domain: 'desarrolloactivo.com',
        prodId: {company: 'desarrolloactivo.com', product: 'Platzi cursos'},
        name: 'Platzi cursos',
        timezone: 'Europe/Berlin'
    }),


// overwrite domain 
cal.domain('desarrolloactivo.com');

cal.createEvent({
    start: new Date(),
    end: new Date(new Date().getTime() + 3600000),
    summary: 'Curso de Frontend Profesional (testing)',
    description: 'Mi primer horario programado de Platzi',
    location: '',
    organizer: 'Esteban Fuster <estebanrfp@gmail.com>',
    url: 'http://desarrolloactivo.com/'
});

// cal.repeating({
//     freq: 'MONTHLY', // required 
//     count: 5,
//     interval: 2,
//     until: new Date('Jan 01 2014 00:00:00 UTC')
// });

// cal.attendees([
//     {email: 'estebanrfp@gmail.com', name: 'Person A'},
//     {email: 'agustin@icloud.com', name: 'Person B'}
// ]);
 
http.createServer(function(req, res) {
    cal.serve(res);
}).listen(3000, '127.0.0.1', function() {
    console.log('Server running at http://127.0.0.1:3000/');
});