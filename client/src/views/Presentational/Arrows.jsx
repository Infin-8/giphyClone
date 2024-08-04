import styles from "../../util/styles";

const Arrows = () => (
  <div className="stories-flex-unit" style={styles.storiesFlexItem(true)}>
    <i className="fa-solid fa-chevron-left" style={styles.storiesArrow()} />
    <i className="fa-solid fa-chevron-right" style={styles.storiesArrow()} />
  </div>
);

export default Arrows;
