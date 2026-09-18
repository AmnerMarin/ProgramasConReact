function Item({ key, producto }) {
    return (
        <div className="producto">
            <img src={producto.imagen} alt={producto.titulo} />
            <div>
                <h4>{producto.titulo}</h4>
                <p>Precio: ${producto.precio}</p>
                <p>Categoria: {producto.categoria}</p>
                <p>{producto.descripcion}</p>
                <a href={`/item/${producto.id}`} className='ver-mas'>Ver más</a>
            </div>
        </div>
    );
}

export default Item;