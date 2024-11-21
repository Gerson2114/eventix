function MobileSearch() {
  return (
    <section id="mobile-search" className="mobile-search">
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Buscar eventos"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Buscar
        </button>
      </form>
    </section>
  );
}

export default MobileSearch;
