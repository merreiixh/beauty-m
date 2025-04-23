import { useCart } from "../../context/CartContext";

function Productitem({product}) {

    const {addToCart} = useCart();
    

    function handleAddToCart(){
        addToCart(product)
    }


    return (
        <div class="product-item">
            <img src={product.image} alt={product.name} class="product-item__img" />
            <h3 class="product-item__title">{product.name}</h3>
            <p class="product-item__description">{product.description}</p>
            <p class="product-item__description">{product.category}</p>
            <div class="product-item__action">
                <strong class="product-item__title">{product.price.toLocaleString()}  &#8376;</strong>
                <button class="add-button" onClick={handleAddToCart}>
                    В корзину
                </button>
            </div>
        </div>
    );
}

export default Productitem;