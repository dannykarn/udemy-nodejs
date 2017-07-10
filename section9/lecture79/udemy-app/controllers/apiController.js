var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

module.exports = function(app) {
    app.get('/api/person/:id', function(req, res) {
        // Get the person data from the database
        res.json({
            firstname: 'John',
            lastname: 'Doe'
        });
    });

    app.post('/api/person', jsonParser, function(req, res) {
        // Save person to the database
    });

    app.delete('/api/person/:id', function(req, res) {
        // Delete person from the database
    });
};
