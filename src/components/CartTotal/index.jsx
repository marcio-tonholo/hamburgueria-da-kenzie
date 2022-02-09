import "./style.css";

function CartTotal({ currentSale, setCurrentSale, setIsEmpty }) {
  return (
    <div className="cartTotal">
      <span>
        <h4>Total</h4>
        <p>
          {currentSale
            .reduce((a, b) => {
              return a + b.price;
            }, 0)
            .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        </p>
      </span>
      <button
        onClick={() => {
          setCurrentSale([]);
          setIsEmpty(true);
        }}
      >
        Remover todos
      </button>
    </div>
  );
}
export default CartTotal;
