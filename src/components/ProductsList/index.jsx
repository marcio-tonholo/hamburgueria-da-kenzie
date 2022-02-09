import "./style.css";
import Product from "../Product";

function ProductsList({ filtredProducst, handleClick }) {
  return (
    <ul className="productsList">
      {filtredProducst.map((product) => {
        return (
          <Product
            product={product}
            key={product.id}
            handleClick={handleClick}
          />
        );
      })}
    </ul>
  );
}

export default ProductsList;
