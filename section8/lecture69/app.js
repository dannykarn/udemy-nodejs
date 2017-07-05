/*

require first looks into the Node core modules for a match if no '/', or any
variation, is entered before the module name.  If it doesn't find anything, it
will then look in the ../node_modules folder (and elsewhere).

*/
var moment = require('moment');
console.log(moment().format("ddd, hA"));
