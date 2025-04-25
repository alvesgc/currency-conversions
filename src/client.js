class Client {
  constructor(name) {
    this.name = name;
    this.purchaseDayAgo = 0;
  }
  // Motivo de não funcionar: o this não é o mesmo do Client, mas sim do setInterval
  printNameFunction() {
    setInterval(function () {
      console.log(this.name); 
      console.log(this.purchaseDayAgo++); 
    }, 1000);
  }
// Motivo de funcionar: o this é o mesmo do Client, pois a função é uma arrow function

  printNameFunction2() {
    setInterval(() => {
      console.log(this.name); 
      console.log(this.purchaseDayAgo++); 
    }, 1000);
  }
}

c = new Client("Alisson");

c.printNameFunction2();