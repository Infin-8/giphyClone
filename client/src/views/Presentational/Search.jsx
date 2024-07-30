// import styles from "../../util/styles";

import styles from "../../util/styles";

const Search = () => {
  return (
    <div id="searchBarContainer" style={styles.searchBarFlexContainer()}>
      <div className="search-flex-unit" style={styles.searchInputContainer()}>
        <input
          type="text"
          style={styles.searchInput()}
          placeholder="Search all GIFs and Stickers"
          id="main-search"
        />
      </div>

      <div className="search-flex-unit" style={styles.searchBtnContainer()}>
        <i
          className="fa-solid fa-magnifying-glass"
          style={styles.searchBtn()}
        />
      </div>
    </div>
  );
};

export default Search;
