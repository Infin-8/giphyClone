import styles from "../../util/styles";

const GifGrid = ({ randomHeight = "100%", getGIFs }) => (
  <div id="main-gif-container" style={styles.gifMainContainer()}>
    {getGIFs().map((gif, i) => (
      <div
        key={"gif-" + i}
        className="main-gif-unit"
        style={styles.mainGifUnit(gif, randomHeight)}
      />
    ))}
  </div>
);

export default GifGrid;
