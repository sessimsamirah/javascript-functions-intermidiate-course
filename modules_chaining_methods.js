var run = (function() {
    var DEFAULT = {
        topSpeed: '250 miles an hour',
        topHorsePower: '500 horse power'
    }; 

    return {
        speed: function() {
            var allArguments = arguments[0] || ''; 
            var myStatement = allArguments.topSpeed || DEFAULT.topSpeed;
            console.log(myStatement);
            return this;
        }, 
        horsePower: function() {
            var myAllArguments = arguments[0] || ''; 
            var topHorsePowerChecking = myAllArguments.topHorsePower || DEFAULT.topHorsePower;
            console.log(topHorsePowerChecking);
            return this; 
        }
    }
}) (); 