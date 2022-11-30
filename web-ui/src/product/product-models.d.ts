export type Product = {
    _id: string,
    name: string,
    price: number
};

export interface ProductState {
    loading: boolean;
    products: Product[];
    fetchProducts: () => Promise;
}