import { Drink } from "./Drink";
import { VendingMachine } from "./VendingMachine";

// execution

// const hell = new Drink("hell", 2, 999);
// const cola = new Drink("cola", 1, 350);
// const pepsi = new Drink("pepsi", 4, 250);
// const fanta = new Drink("fanta", 6, 450);

// const machine = new VendingMachine(6);

// machine.addDrink(hell);
// machine.addDrink(cola);
// machine.addDrink(pepsi);
// machine.addDrink(fanta);

// console.log(machine.buttonCapacity);
// console.log(machine.drinks);

// console.log(machine.getLongest());
// console.log(machine.getCheapest());
// console.log(machine.report());

function main() {
  //Initialize the repository (VendingMachine)
  const vendingMachine = new VendingMachine(6); //Initialize Entity (Drink)
  const tea = new Drink("Tea", 1.5, 300);
  const coffee = new Drink("Coffee", 2.0, 120);
  const hotChocolate = new Drink("Hot Chocolate", 2.5, 200);
  const latte = new Drink("Latte", 3.5, 220);
  const cappuccino = new Drink("Cappuccino", 2.8, 180);
  const mocha = new Drink("Mocha", 2.1, 150);
  const herbalTea = new Drink("Herbal Tea", 1.75, 300);
  //Get Count
  console.log(vendingMachine.getCount);
  //0
  //Add Drinks
  vendingMachine.addDrink(tea);
  vendingMachine.addDrink(coffee);
  vendingMachine.addDrink(hotChocolate);
  vendingMachine.addDrink(latte);
  vendingMachine.addDrink(cappuccino);
  vendingMachine.addDrink(mocha);
  //Try to add drinks when the capacity is full
  vendingMachine.addDrink(herbalTea);
  //Get Count
  console.log(vendingMachine.getCount);
  //6
  //Remove Drink
  console.log(vendingMachine.removeDrink("Herbal Tea"));
  //false
  console.log(vendingMachine.removeDrink("Tea"));
  //true
  //Get Longest Drink
  console.log(vendingMachine.getLongest());
  //Name: Latte, Price: $3.5, Volume: 220 ml
  //Get Cheapest Drink
  console.log(vendingMachine.getCheapest());

  //Name: Coffee, Price: $2.0, Volume: 120 ml
  //Buy a specific Drink
  console.log(vendingMachine.buyDrink("Cappuccino"));
  //Name: Cappuccino, Price: $2.8, Volume: 180 ml
  //Drinks Report
  console.log(vendingMachine.report());
  //Drinks available:
  //Name: Coffee, Price: $2.0, Volume: 120 ml
  //Name: Hot Chocolate, Price: $2.5, Volume: 200 ml
  //Name: Latte, Price: $3.5, Volume: 220 ml
  //Name: Cappuccino, Price: $2.8, Volume: 180 ml
  //Name: Mocha, Price: $2.1, Volume: 150 ml
}
main();
