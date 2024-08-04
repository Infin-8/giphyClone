import styles from "../../util/styles";

const StoriesHeader = () => (
  <div className="stories-flex-unit" style={styles.storiesHeader()}>
    Stories{" "}
    <span>
      <i className="fa-solid fa-chevron-right" style={{ fontSize: "small" }} />
    </span>
  </div>
);

export default StoriesHeader;
