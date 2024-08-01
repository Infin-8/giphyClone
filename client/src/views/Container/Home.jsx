import Nav from "../Presentational/Nav";
import styles from "../../util/styles";
import Search from "../Presentational/Search";
import { getTrending } from "../../util/helpers";

function Home() {
  return (
    <div style={styles.gridContainer()}>
      <div className="main-grid unit" style={styles.navContainerUnit()}>
        <Nav />
      </div>

      <div className="main-grid-unit" style={styles.searchBarContainer()}>
        <Search />
      </div>

      <div className="main-grid-unit" style={styles.mainImageContainer()}>
        <div className="sub-grid-unit" style={styles.subImageContainer(0)}>
          empty
        </div>
        <div
          className="sub-grid-unit"
          style={{ ...styles.subImageContainer(1), ...styles.addContainer() }}
        >
          <div className="add-unit" style={styles.addUnit()}>
            <img
              alt="homePic"
              src="https://media.giphy.com/avatars/entertainment/Poc7fb6dD9q5/200h.gif"
            />
            <p style={{ color: "rgba(125, 125, 125, 1)", width: "100%" }}>
              Get the latest GIFs from movies, TV, music, celebrities
            </p>

            <p style={{ color: "rgba(166, 166, 166, 1)", width: "100%" }}>
              Follow on:
            </p>

            <div className="add-unit" style={styles.quickFlex()}>
              <div className="add-flex-unit" style={styles.socialUnit()}>
                f
              </div>
              <div className="add-flex-unit" style={styles.socialUnit()}>
                X
              </div>
              <div className="add-flex-unit" style={styles.socialUnit()}>
                I
              </div>
              <div className="add-flex-unit" style={styles.socialUnit()}>
                TT
              </div>
            </div>
          </div>

          <div
            className="add-unit"
            style={{ ...styles.quickFlex(), flexDirection: "column" }}
          >
            <div
              className="add-flex-unit"
              style={{ ...styles.miniSearch(), marginBottom: "10%" }}
            >
              <Search mini />
            </div>
            <div className="add-flex-unit">
              <p style={{ color: "rgba(166, 166, 166, 1)" }}>Trending Now</p>
              {getTrending()
                .map((item) => "#" + item)
                .map((item, i) => (
                  <p key={"trending-" + i}>{item}</p>
                ))}
            </div>
          </div>
        </div>
        <div className="sub-grid-unit" style={styles.subImageContainer(2)}>
          {/* images here */}

          <div
            className="images-grid-unit"
            style={{ height: "100%", border: "1px solid red", paddingLeft: "5%" }}
          >
            <p style={{ fontFamily: "sans-serif", color: "white", fontSize: "xx-large", fontWeight: "bolder", width: "100%"}}>
              Entertainment GIFs
            </p>
            <p style={{ fontFamily: "helvetica", color: "rgba(166, 166, 166, 1)", fontSize: "small", position: "relative", top: "-20px", }}>
              @entertainment
            </p>
          </div>
          <div className="images-grid-unit"></div>
          <div className="images-grid-unit"></div>
          <div className="images-grid-unit"></div>
        </div>
        <div className="sub-grid-unit" style={styles.subImageContainer(4)}>
          empty here
        </div>
      </div>
    </div>
  );
}

export default Home;
