import styles from "../../util/styles";

const Nav = () => (
  <nav style={styles.navContainer()}>
    <div style={styles.navFlexUnits()} className="nav-unit"></div>
    <div style={styles.navFlexUnits()} className="nav-unit">
      GIPHY
    </div>
    {[
      { value: "Reactions" },
      { value: "Entertainment" },
      { value: "Sports" },
      { value: "Stickers" },
      { value: "Artists" },
      { value: ":" },
    ].map(({ value }, i) => (
      <div key={"grid-unit" + i} style={styles.navFlexUnits()} className="nav-unit">
        {value}
      </div>
    ))}

    {[{ value: "Upload" }, { value: "Create" }, { value: "Login" }].map(
      ({ value }, i) => (
        <div style={styles.navFlexUnits()} className="nav-unit">
          {value}
        </div>
      )
    )}
  </nav>
);

export default Nav;
