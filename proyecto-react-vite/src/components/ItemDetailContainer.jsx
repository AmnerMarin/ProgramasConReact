import { useEffect, useState } from "react";
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

function ItemDetailContainer() {

    const [item, setItem] = useState(null);
    const id = Number(useParams().id);


    useEffect(() => {

        const docRef = doc(db, "productos", id.toString());
        getDoc(docRef)
            .then((res) => {
                setItem({ ...res.data(), id: res.id });
            })
    }, [id])

    return (
        <div>
            {
                item && <ItemDetail item={item} />
            }
        </div>
    );
}

export default ItemDetailContainer;
