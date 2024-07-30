import Nav from "../Presentational/Nav";
import styles from "../../util/styles";
import Search from "../Presentational/Search";

function Home() {
  return (
    <div style={styles.gridContainer()}>
      <div className="main-grid unit" style={styles.navContainerUnit()}>
        <Nav />
      </div>

      <div className="main-grid-unit" style={styles.searchBarContainer()}>
        <Search />
      </div>
    </div>
  );
}

export default Home;
