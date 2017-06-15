// jshint esversion: 6
var obj = {
    name: 'John Doe',
    greet: function() {
        console.log(`Hello ${this.name}`);
    }
};

obj.greet();

// .call invokes the method but whatever is passed as a parameter is used as the
// 'this'.  Additional parameters are passed as a comma delimited list
//
//          obj.greet.call({name: 'Jane Doe'}, param1, param2, ..., paramN);
obj.greet.call({
    name: 'Jane Doe'
});

// .apply works similarly, but if you want to pass parameters, you pass them as
// an array
//
//          obj.greet.call({name: 'Jane Doe'}, [param1, param2, ..., paramN]);
