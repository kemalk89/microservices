import create from 'zustand';
import { ProductState } from './product-models';

export const useProductStore = create<ProductState>((set) => ({
    products: [],
    loading: false,
    fetchProducts: async () => {
        set({ loading: true });
        const res = await fetch('/api/products');
        const list = await res.json();
        set({ products: list, loading: false });
    }
}));