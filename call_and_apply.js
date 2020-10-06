var run = function(speed) {
    console.log(speed); 
    console.log(this.firstSpeed);
}

var speedUpgrade = {
    firstSpeed: '50 more miles per hour', 
    secondSpeed: '200 miles per hour'
};

run.apply(speedUpgrade, ['500 miles per hour']);

//run.call(speedUpgrade, speedUpgrade.secondSpeed);
//run('100 miles an hour');