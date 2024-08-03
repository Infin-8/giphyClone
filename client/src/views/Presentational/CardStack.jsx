import styles from "../../util/styles";
import DefaultImage from "./DefaultImage";

const CardStack = ({ src }) => (
  <div id="stack-bottom" style={styles.featuredMain()}>
    <div
      style={{
        ...styles.featuredSub(0),
        height: "100%",
        backgroundImage: `url(${src})`
      }}
    >
      <DefaultImage mini />
    </div>

    <div style={styles.featuredSub(1)}></div>
    <div style={styles.featuredSub(2)}></div>
  </div>
);

export default CardStack;
