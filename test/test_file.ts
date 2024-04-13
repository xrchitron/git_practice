// this is the git practice file
const theTestVar: number = 100;
const theStringVar: string = "This is a string";
const theBooleanVar: boolean = true;
const theArrayVar: number[] = [1, 2, 3, 4];

interface ITheObject {
  name: string;
  age: number;
}
const theObjectVar: ITheObject = { name: "John", age: 30 };

interface ITheFunction {
  (a: number, b: number): number;
}
const theFunctionVar: ITheFunction = (a, b) => a + b;

const theClassVar = class TheClass {
  constructor(public name: string, public age: number) {}
  public getDetails() {
    return `${this.name} is ${this.age} years old.`;
  }
};
