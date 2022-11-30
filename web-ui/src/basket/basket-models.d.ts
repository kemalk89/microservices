import { Product } from "../product/product-models";

export interface BasketState {
    loading: boolean;
    items: Product[];
    addToBasket: (product: Product) => Promise;
    removeFromBasket: () => Promise;
    fetchBasket: () => Promise;
}