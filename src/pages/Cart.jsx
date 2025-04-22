import { Link, useNavigate } from "react-router-dom";
import { CHECKOUT, HOME } from "../utils/const";
import { useCart } from "../context/CartContext";

function Cart(){
    const navigate = useNavigate();

    const {
        cartItems,
        totalPrice,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
    } = useCart();

    function handleCheckout() {
        if (cartItems.length === 0) {
            alert("Ваша корзина пуста. Добавьте товары перед оформлением заказа");
            return;
        }
        navigate(CHECKOUT);
    }

    return (
        <>
        {cartItems.length === 0 ? <>
            <section className="block">
                <div className="container">
                    <Link to={HOME} class="back-btn">Назад</Link>
                    <h1 class="title">Моя корзина</h1>
                    <p className="alert-danger">Ваша корзина пуста, добовляйте и заказывайте товары для получени е скидок и бонусов!</p>
                </div>
            </section>
        </>: <>
        <section class="block">
            <div class="container">
                <Link to={HOME} class="back-btn">Назад</Link>
                <h1 class="title">Моя корзина</h1>
                <table class="cart-table">
                    <thead>
                        <tr>
                            <th>Наименование продукта</th>
                            <th>Фото</th>
                            <th>Цена</th>
                            <th>Количество</th>
                            <th>Всего</th>
                            <th>Действие</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item => (
                        <tr key={item}>
                            <td>{item.name}</td>
                            <td>
                                <img src={item.image}
                                    class="cart-img" alt={item.name} />
                            </td>
                            <td>{item.price.toLocaleString()} &#8376;</td>
                            <td>
                                <div class="counter">
                                    <button class="circle" onClick={() => decreaseQuantity(item.id)} disabled={item.quantity <= 1}>-</button>
                                    <span>{item.quantity}</span>
                                    <button class="circle" onClick={() => increaseQuantity(item.id)}>+</button>
                                </div>
                            </td>
                            <td>Итого:{(item.price * item.quantity).toLocaleString()} &#8376;</td>
                            <td><button onClick={() => removeFromCart(item.id)} class="delete-btn">Удалить</button></td>
                        </tr>
                        )))}
                    </tbody>
                </table>
                <h3 class="total-price">Итого: {totalPrice.toLocaleString()} &#8376;</h3>
                <div class="cart-action">
                    <button onClick={handleCheckout} class="cart-action__btn">Оформление заказа</button>
                    <Link to={HOME} class="cart-action__btn">Продолжить покупку</Link>
                </div>
            </div>
        </section>
        </>}
        </>
    );
}

export default Cart;