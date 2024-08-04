import styles from "../../util/styles";
import DefaultImage from "./DefaultImage";

const CardStack = ({ src }) => (
  <div id="stack-bottom" style={styles.featuredMain()}>
    <div style={styles.featuredSub(0, src)}>
      <DefaultImage mini />
    </div>

    <div style={styles.featuredSub(1)} />
    <div style={styles.featuredSub(2)} />
  </div>
);

export default CardStack;
