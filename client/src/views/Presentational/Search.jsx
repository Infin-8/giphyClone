// import styles from "../../util/styles";

import styles from "../../util/styles";

const Search = ({ mini= false }) => {
  return (
    <div id="searchBarContainer" style={styles.searchBarFlexContainer(mini)}>
      <div
        className="search-flex-unit"
        style={styles.searchInputContainer(mini)}
      >
        <input
          type="text"
          style={styles.searchInput(mini)}
          placeholder={mini ? "Search Entertainment GIFs" : "Search all GIFs and Stickers"}
          id={mini ? null : "main-search"}
        />
      </div>

      <div className="search-flex-unit" style={styles.searchBtnContainer(mini)}>
        <i
          className="fa-solid fa-magnifying-glass"
          style={styles.searchBtn(mini)}
        />
      </div>
    </div>
  );
};

export default Search;
