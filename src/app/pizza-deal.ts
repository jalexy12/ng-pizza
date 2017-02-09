import { Ingredient } from '../ingredient'

export class PizzaDeal {
  id: number;
  name: string;
  basePrice: number;
  ingredients: Array<Ingredient>;
  image: string;
}
