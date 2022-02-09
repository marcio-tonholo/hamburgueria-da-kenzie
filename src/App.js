import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

import logo from "./logo.svg";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import SearchBar from "./components/SearchBar";

function App() {
  const [products, setProducts] = useState([]);
  const [filtredProducst, setFiltredProducst] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);

  const showProducts = (value) => {
    const newProducts = products.filter((item) => {
      if (
        item.name.toLowerCase().includes(value) ||
        item.category.toLowerCase().includes(value)
      ) {
        return item;
      }
    });
    setFiltredProducst(newProducts);
  };

  const handleClick = (productId) => {
    const productSale = products.find((item) => {
      return item.id == productId;
    });
    if (!currentSale.includes(productSale)) {
      setCurrentSale([...currentSale, productSale]);
    } else {
      console.log("item duplicado");
    }

    setIsEmpty(false);
  };

  const handleRemove = (productId) => {
    const removed = currentSale.filter((item) => {
      return item.id != productId;
    });
    setCurrentSale(removed);
    if (currentSale.length <= 1) {
      setIsEmpty(true);
    }
  };

  useEffect(() => {
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
      .then((res) => res.json())
      .then((res) => {
        return setProducts(res), setFiltredProducst(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <SearchBar showProducts={showProducts} />
      </header>
      <main className="App-main">
        <ProductsList
          filtredProducst={filtredProducst}
          handleClick={handleClick}
        />
        <Cart
          currentSale={currentSale}
          isEmpty={isEmpty}
          handleRemove={handleRemove}
          setCurrentSale={setCurrentSale}
          setIsEmpty={setIsEmpty}
        />
      </main>
    </div>
  );
}

export default App;
