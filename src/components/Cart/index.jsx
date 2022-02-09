import "./style.css";
import CartTotal from "../CartTotal";
import CartProduct from "../CartProduct";

function Cart({
  currentSale,
  isEmpty,
  handleRemove,
  setCurrentSale,
  setIsEmpty,
}) {
  return (
    <aside className="cart">
      <div>
        <h3 className="cartTitle">Carrinho de compras</h3>
        {isEmpty ? (
          <div className="empty">
            <h3>Sua sacola está vazia</h3>
            <p>Adicione itens</p>
          </div>
        ) : (
          <div className="full">
            <ul>
              {currentSale.map((item) => {
                return (
                  <CartProduct
                    key={item.id}
                    item={item}
                    handleRemove={handleRemove}
                  />
                );
              })}
            </ul>
            <CartTotal
              setCurrentSale={setCurrentSale}
              currentSale={currentSale}
              setIsEmpty={setIsEmpty}
            />
          </div>
        )}
      </div>
    </aside>
  );
}
export default Cart;
