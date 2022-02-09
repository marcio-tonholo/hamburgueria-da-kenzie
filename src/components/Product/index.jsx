import "./style.css";

function Product({ product, handleClick }) {
  return (
    <li className="cardProduct">
      <figure>
        <img src={product.img} alt={product.name} />
      </figure>
      <div>
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <span>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button
          id={product.id}
          onClick={(e) => {
            handleClick(e.target.id);
          }}
        >
          Adicionar
        </button>
      </div>
    </li>
  );
}

export default Product;
