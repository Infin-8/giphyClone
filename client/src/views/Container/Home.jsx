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

      <div className="main-grid-unit" style={styles.mainImageContainer()}>
        <div className="sub-grid-unit" style={styles.subImageContainer(0)}>
          empty
        </div>
        <div className="sub-grid-unit" style={styles.subImageContainer(1)}>
          adds here
        </div>
        <div className="sub-grid-unit" style={styles.subImageContainer(2)}>
          images here
        </div>
        <div className="sub-grid-unit" style={styles.subImageContainer(4)}>
          empty here
        </div>
      </div>
    </div>
  );
}

export default Home;
