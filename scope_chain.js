function parentProcess() {
    var speed = '100 miles an hour';

    function childProcess() {
        console.log("This car is running " + speed);
    }
    childProcess();
}

parentProcess();