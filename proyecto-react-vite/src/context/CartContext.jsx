import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();


const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

function CartProvider({ children }) {

    const [carrito, setCarrito] = useState(carritoInicial);

    const agregarAlCarrito = (item, cantidad) => {
        // console.log({...item,cantidad})
        const itemAgregado = { ...item, cantidad };
        const nuevoCarrito = carrito.slice();

        const itemExistente = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);


        if (itemExistente) {
            itemExistente.cantidad += cantidad;
        } else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito);
    }


    const cantidadEnCarrito = () => carrito.reduce((total, producto) => total + producto.cantidad, 0);
    const totalEnCarrito = () => carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0)
    const limpiarCarrito = () => setCarrito([]);

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);

    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, cantidadEnCarrito, totalEnCarrito, limpiarCarrito }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;