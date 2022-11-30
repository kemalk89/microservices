import { useEffect } from "react";
import shallow from "zustand/shallow";
import { useBasketStore } from "../basket/basket-state";
import { useProductStore } from "./product-state";

export function ProductList() {
    const [products, loading, fetchProducts] = useProductStore(
        (state) => [state.products, state.loading, state.fetchProducts],
        shallow
    );

    const addToBasket = useBasketStore((state) => state.addToBasket);

    useEffect(() => {
        fetchProducts();
    }, []);

    const renderLoading = () => {
        return (<div>Loading...</div>);
    }

    const renderNoProductsFound = () => {
        return (<div>No products found...</div>);
    };

    const renderProductList = () => {
        if (products.length === 0) {
            return renderNoProductsFound();
        }

        const items = products.map((p, i) => {
            return (
                <li key={`key-${i}`}>
                    {p.name} - {p.price} EUR
                    <button onClick={() => addToBasket(p)}>Add to basket</button>
                </li>
            );
        })

        return (
            <ul>{items}</ul>
        );
    };

    return (
        <div className="App">
            <h1>
                Products
            </h1>

            {loading ? renderLoading() : renderProductList()}
        </div>
    )
}