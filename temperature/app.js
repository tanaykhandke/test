let convert = {}
cToF =function(celsius) {
    if(!Number.isInteger(celsius)) return undefined;
    return celsius * 9 / 5 + 32;
}

fToC = function(fahrenheit) {
    if (!Number.isInteger(fahrenheit)) return undefined;
    return (fahrenheit - 32) * 5 /9
}

module.exports=convert;


/*At the end of app.js we’re going to expose our convert object using module.exports. 
If you’ve never used it before, module.exports is how we tell JavaScript what object to return as the result of a require
 */