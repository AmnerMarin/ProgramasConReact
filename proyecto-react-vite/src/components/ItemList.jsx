import Item from './Item'

function ItemList({ productos }) {
    return (
        <div>
            <h2>Productos</h2>
            <div className="productos">
                {
                    productos.map((producto) => [
                        <Item
                            key={producto.id}
                            producto={producto} />
                    ])
                }
            </div>
        </div>
    );
}

export default ItemList;