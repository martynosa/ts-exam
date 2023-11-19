import { Drink } from "./Drink";

export class VendingMachine {
  buttonCapacity: number;
  drinks: Drink[] = [];

  constructor(buttonCapacity: number) {
    this.buttonCapacity = buttonCapacity;
  }

  get getCount(): number {
    return this.drinks.length;
  }

  addDrink(drink: Drink): void {
    if (this.buttonCapacity > 0) {
      this.buttonCapacity--;
      this.drinks.push(drink);
    }
  }

  removeDrink(name: string): boolean {
    let drinkIndex = [...this.drinks].findIndex((d) => d.name === name);
    if (drinkIndex !== -1) {
      this.buttonCapacity++;
      this.drinks.splice(drinkIndex, 1);
      return true;
    }
    return false;
  }

  getLongest(): string {
    let sortedDrinks = [...this.drinks].sort((a, b) => a.volume - b.volume);
    if (sortedDrinks.length > 1) {
      return sortedDrinks[sortedDrinks.length - 1].toString();
    }
    return "No drinks available";
  }
  getCheapest(): string {
    let sortedDrinks = [...this.drinks].sort((a, b) => a.price - b.price);
    if (sortedDrinks.length > 1) {
      return sortedDrinks[0].toString();
    }
    return "No drinks available";
  }

  buyDrink(name: string): string {
    let drinkIndex = [...this.drinks].findIndex((d) => d.name === name);
    if (drinkIndex !== -1) {
      return this.drinks[drinkIndex].toString();
    }
    return "No drink found!";
  }

  report(): string {
    return `Drinks available:\n${this.drinks.join("\n")}`;
  }
}
