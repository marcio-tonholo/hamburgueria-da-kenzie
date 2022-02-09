import "./style.css";

function CartProduct({ item, handleRemove }) {
  return (
    <li className="itemCart">
      <figure>
        <img src={item.img} alt={item.name} />
      </figure>
      <span>
        <h3>{item.name}</h3>
        <p>{item.category}</p>
      </span>
      <button onClick={() => handleRemove(item.id)}>Remover</button>
    </li>
  );
}

export default CartProduct;
