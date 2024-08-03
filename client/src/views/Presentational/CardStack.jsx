import styles from "../../util/styles";

const CardStack = () => (
  <div id="stack-bottom" style={styles.featuredMain()}>
    <div style={styles.featuredSub(0)}></div>
    <div style={styles.featuredSub(1)}></div>
    <div style={styles.featuredSub(2)}></div>
  </div>
);

export default CardStack;
