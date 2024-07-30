import styles from "../../util/styles";

const Search = () => {
  return (
    <div
      id="searchBarContainer"
      style={{
        width: "75vw",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="search-flex-unit" style={{ height: "100%", width: "94%" }}>
        <input type="text" style={{ width: "99.5%", height: "93%" }} />
      </div>

      <div className="search-flex-unit" style={{ width: "6%", height: "100%" }}>
        <button style={{width: "100%", height: "100%"}}>Search</button>
      </div>
    </div>
  );
};

export default Search;
