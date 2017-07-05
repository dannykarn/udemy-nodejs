//jshint esversion:6

function greet(callback) {
    console.log('Hello!');

    var data = {
        name: 'John Doe'
    };

    callback(data);
}

greet(function(data) {
    console.log(`The callback was invoked by ${data.name}!`);
});

greet(function(data) {
    console.log(`A different callback was invoked by ${data.name}!`);
});
