import { useEffect, useState } from "react";
import { pedirItemporID } from "../helpers/pedirDatos";
import ItemDetail from './ItemDetail'

function ItemDetailContainer({ id }) {

    const [item, setItem] = useState(null);

    useEffect(() => {
        pedirItemporID(id)
            .then((res) => {
                setItem(res);
            })
    }, [])

    return (
        <div>
            {
                item && <ItemDetail item={item} />
            }
        </div>
    );
}

export default ItemDetailContainer;
