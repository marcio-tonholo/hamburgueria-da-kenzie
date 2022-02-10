import "./style.css";

function SearchBar({ showProducts }) {
  return (
    <form
      className="search"
      onSubmit={(e) => {
        e.preventDefault();
        showProducts(e.target.searchBar.value.toLowerCase());
      }}
    >
      <input
        type="text"
        name="searchBar"
        placeholder="Digitar Pesquisa"
        onKeyUp={(e) => {
          showProducts(e.target.value.toLowerCase());
        }}
      />
      <button type="submit">Pesquisar</button>
    </form>
  );
}

export default SearchBar;
