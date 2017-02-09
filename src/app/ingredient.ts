export class Ingredient {
  id: number;
  name: string;
  price: number;
  calories: number;
}

export class IngredientClass implements Ingredient {
  constructor(public id: number, public name: string, public price: number, public calories: number) {}
}
