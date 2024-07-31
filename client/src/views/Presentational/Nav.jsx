import styles from "../../util/styles";
import { navMainBtns, navActionBtns } from "../../util/helpers";
const Nav = () => (
  <nav style={styles.navContainer()}>
    <div style={styles.navFlexUnits()} className="nav-unit"></div>
    <div style={styles.navFlexUnits(false, true)} className="nav-unit">
      GIPHY
    </div>
    {navMainBtns().map(({ value, id, className }, i) => (
      <div
        key={"grid-unit" + i}
        style={styles.navFlexUnits()}
        className={`nav-unit ${className}`}
        id={id}
      >
        {value}
      </div>
    ))}

    {navActionBtns().map(({ value, backgroundColor }, i) => (
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
