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
        placeholder="Digitar Pesquisa
"
      />
      <button type="submit">Pesquisar</button>
    </form>
  );
}

export default SearchBar;
