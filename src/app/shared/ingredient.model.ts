// Normal way to export and use propertys

// export class Ingredient {
//     public name: string;
//     public amount: number;

//     constructor(name: string, amount: number) {
//         this.name = name;
//         this.amount = amount;
//     }
// }

// Shortcut way, it has the same effect

export class Ingredient {
    constructor(public name: string, public amount: number) { }
}