import Item from "./Item";

const ItemList = (props) => {
  return (
    <div>
      {props.productos.map((producto) => {
        return (
					<Item producto={producto}/>
        );
      })}
    </div>
  );
};

export default ItemList;
