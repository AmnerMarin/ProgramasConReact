import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Carrito() {

    const { carrito, totalEnCarrito, limpiarCarrito } = useContext(CartContext);
    return (
        <div className="container">
            <h1 className="main-title">
                Carrito
            </h1>

            {
                carrito.map((producto) => {
                    return (
                        <div key={producto.id}>
                            <br />
                            <h3>{producto.titulo}</h3>
                            <p>Precio Unitario: ${producto.precio}</p>
                            <p>Cantidad: {producto.cantidad}</p>
                            <p>Subtotal: ${producto.precio * producto.cantidad}</p>
                            <br />
                        </div>
                    )
                })
            }


            {
                carrito.length > 0 ?
                    <>
                        <h2>Total: ${totalEnCarrito()}</h2>
                        <button onClick={limpiarCarrito}>Limpiar Carrito</button>
                        <Link to="/checkout">Proceder al Checkout</Link>
                    </>
                    : <p>El carrito está vacío :(</p>
            }
        </div>
    );
}

export default Carrito;