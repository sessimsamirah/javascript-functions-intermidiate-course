var run = (function() {
    var DEFAULT = {
        topSpeed: '250 miles an hour'
    }; 

    return {
        speed: function() {
            var allArguments = arguments[0] || ''; 
            var myStatement = allArguments.topSpeed || DEFAULT.topSpeed;
            console.log(myStatement);
        }
    }
}) (); 