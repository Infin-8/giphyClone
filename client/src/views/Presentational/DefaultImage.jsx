import styles from "../../util/styles";

const DefaultImage = ({ mini = false }) => (
  <img
    alt="homePic"
    src="https://media.giphy.com/avatars/entertainment/Poc7fb6dD9q5/200h.gif"
    style={mini ? styles.defaultImage(mini) : null}
  />
);

export default DefaultImage