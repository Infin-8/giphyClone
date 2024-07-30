import styles from "../../util/styles";

const Nav = () => (
  <nav style={styles.navContainer()}>
    
    <div style={styles.navFlexUnits()} className="nav-unit"></div>
    <div style={styles.navFlexUnits(true, true)} className="nav-unit">
      GIPHY
    </div>
    {[
      {
        value: "Reactions",
        id: "gradient-bottom-0",
        className: "gradient-border",
      },
      {
        value: "Entertainment",
        id: "gradient-bottom-1",
        className: "gradient-border",
      },
      {
        value: "Sports",
        id: "gradient-bottom-2",
        className: "gradient-border",
      },
      {
        value: "Stickers",
        id: "gradient-bottom-3",
        className: "gradient-border",
      },
      {
        value: "Artists",
        id: "gradient-bottom-4",
        className: "gradient-border",
      },
      { value: ":", id: "gradient-bottom-5", className: "gradient-border" },
    ].map(({ value, id, className }, i) => (
      <div
        key={"grid-unit" + i}
        style={styles.navFlexUnits()}
        className={`nav-unit ${className}`}
        id={id}
      >
        {value}
      </div>
    ))}

    {[
      { value: "Upload", backgroundColor: "rgba(97, 87, 255, 1)" },
      { value: "Create", backgroundColor: "rgba(153, 51, 255, 1)" },
      { value: "Login", backgroundColor: "rgba(62, 62, 62, 1)" },
    ].map(({ value, backgroundColor }, i) => (
      <div
        key={"nav-actions" + i}
        style={{ ...styles.navFlexUnits(true), backgroundColor }}
        className="nav-unit"
      >
        {value}
      </div>
    ))}
  </nav>
);

export default Nav;
