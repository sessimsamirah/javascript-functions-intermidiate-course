function speed(miles) {
    console.log(miles); 
}

function Car(model, year, runs) {
    this.carModel = model;
    this.year = year; 
}

Car.prototype.speed = speed; 
bmw = new Car('325i', '2020');
bmw.speed('100'); 
