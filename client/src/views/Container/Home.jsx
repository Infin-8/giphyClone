import Nav from "../Presentational/Nav";
import styles from "../../util/styles";

function Home() {
    
  return (
    <div style={styles.gridContainer()}>
      <div
        className="main-grid unit"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Nav />
      </div>
    </div>
  );
}

export default Home;
