import styles from "../../util/styles";
import { getTrending, getGIFs } from "../../util/helpers";
import Nav from "../Presentational/Nav";
import Search from "../Presentational/Search";
import DefaultImage from "../Presentational/DefaultImage";
import MainHeadLine from "../Presentational/MainHeadLine";
import MainHeader from "../Presentational/MainHeader";
import Facebook from "../Presentational/Facebook";
import Twitter from "../Presentational/Twitter";
import Instagram from "../Presentational/Instagram";
import TikTok from "../Presentational/TikTok";
import Trending from "../Presentational/Trending";
import ImagesHeadLine from "../Presentational/ImagesHeadLine";
import CardStack from "../Presentational/CardStack";
import Arrows from "../Presentational/Arrows";
import StoriesHeader from "../Presentational/StoriesHeader";

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
        <div className="sub-grid-unit" style={styles.subImageContainer(0)} />

        <div
          className="sub-grid-unit"
          style={{ ...styles.subImageContainer(1), ...styles.addContainer() }}
        >
          <div className="add-unit" style={styles.addUnit()}>
            <DefaultImage />

            <MainHeadLine />

            <MainHeader />

            <div className="add-unit" style={styles.quickFlex()}>
              <div className="add-flex-unit" style={styles.socialUnit()}>
                <Facebook />
              </div>
              <div className="add-flex-unit" style={styles.socialUnit()}>
                <Twitter />
              </div>
              <div className="add-flex-unit" style={styles.socialUnit()}>
                <Instagram />
              </div>
              <div className="add-flex-unit" style={styles.socialUnit()}>
                <TikTok />
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
              <Trending data={getTrending()} />
            </div>
          </div>
        </div>

        <div className="sub-grid-unit" style={styles.subImageContainer(2)}>
          <div className="images-grid-unit" style={styles.imagesMainGrid()}>
            <ImagesHeadLine />
          </div>

          <div className="images-grid-unit" style={styles.storiesMain()}>
            <div className="stories-unit" style={styles.storiesMainContainer()}>
              <StoriesHeader />
              <Arrows />
            </div>
            <div className="stories-unit">
              <div
                id="stories-images-grid-main"
                style={styles.storiesImageGrid()}
              >
                {getGIFs().map((src, i) => (
                  <div
                    key={"gif" + i}
                    id="images-grid-main-unit"
                    style={styles.imagesGridUnit()}
                  >
                    <CardStack src={src} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="images-grid-unit" />
          <div className="images-grid-unit" />
        </div>
        <div className="sub-grid-unit" style={styles.subImageContainer(4)} />
      </div>
    </div>
  );
}

export default Home;
