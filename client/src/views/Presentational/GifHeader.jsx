import styles from "../../util/styles";

const GifHeader = () => (
  <div
    id="sub-gif-container"
    style={{
      ...styles.quickFlex(),
      justifyContent: "space-evenly",
    }}
  >
    <div className="gif-header-flex-unit" style={styles.gifHeaderContainer()}>
      <p style={{ color: "rgba(166, 166, 166, 1)" }}>All Entertainment GIFs</p>
    </div>
    <div className="gif-header-flex-unit" style={styles.gifHeaderContainer()}>
      {/* grid icon  */}
      {/* threeline icon */}
    </div>
  </div>
);

export default GifHeader;
