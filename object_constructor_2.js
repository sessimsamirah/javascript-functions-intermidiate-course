function Car(model, year, runs) {
    this.carModel = model;
    this.year = year; 
}

bmw = new Car('325i', '2020');
console.log(bmw.carModel); 

mercedes = new Car('c250', '2015');
console.log(mercedes.carModel); 