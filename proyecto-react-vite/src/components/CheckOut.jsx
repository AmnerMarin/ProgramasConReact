import { useForm } from "react-hook-form";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

function CheckOut() {
    const [pedidoID, setPedidoID] = useState("");
    const { carrito, totalEnCarrito, limpiarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: totalEnCarrito()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "pedidos");
        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoID(doc.id)
            })
        limpiarCarrito();

    }

    if(pedidoID){
        return (
            <div className="container">
                <h1 className="main-title">Muchas gracias por tu compra</h1>
                <p>Tu número de pedido es {pedidoID}</p>
            </div>
        )
    }


    return (
        <div className="container">
            <h1 className="main-title">Checkout</h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>

                <input type="text" placeholder="Ingresa tu nombre"  {...register('nombre')} />

                <input type="email" placeholder="Ingresa tu email" {...register('email')} />

                <input type="number" placeholder="Ingresa tu telefono" {...register('telefono')} />

                <button className='enviar' type="submit">Comprar</button>
            </form>
        </div>
    );
}

export default CheckOut;