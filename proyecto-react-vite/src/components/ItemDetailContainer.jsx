import { useEffect, useState } from "react";
import { pedirItemporID } from "../helpers/pedirDatos";
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom";

function ItemDetailContainer() {

    const [item, setItem] = useState(null);
    const id = Number(useParams().id);


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
