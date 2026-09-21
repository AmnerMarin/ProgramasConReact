import Item from './Item'
import { toUpper } from '../helpers/toUpper';

function ItemList({ productos, categoria}) {
    return (
        <div>
            <h2>{toUpper(categoria)}</h2>
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