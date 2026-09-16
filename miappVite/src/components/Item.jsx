const Item = ({ producto }) => {
  return (
    <div key={producto.id}>
      <div>{producto.title}</div>
      <img src={producto.image} alt={producto.title} />
      <div>{producto.price}</div>
      <div>{producto.description}</div>
    </div>
  );
};

export default Item;
