import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function CartWidget() {

    const {cantidadEnCarrito} =  useContext(CartContext);
    return (
        <div>
            <Link className="menu-link" to="/carrito">Carrito<span> {cantidadEnCarrito()}</span></Link>
        </div>
    );
}

export default CartWidget;