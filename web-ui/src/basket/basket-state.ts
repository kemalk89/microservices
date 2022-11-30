import create from 'zustand';
import { Product } from '../product/product-models';
import { BasketState } from './basket-models';

export const useBasketStore = create<BasketState>((set, get) => ({
    items: [],
    loading: false,
    fetchBasket: async () => {
    },
    addToBasket: async (product: Product) => {
        const res = await fetch('/api/basket', {
            method: 'POST',
            body: JSON.stringify({
                productId: product._id
            })
        });

        const item = await res.json();

        const newItems = [...get().items];
        newItems.push(item);

        set({ items: newItems });

    },
    removeFromBasket: async () => {

    }
}));