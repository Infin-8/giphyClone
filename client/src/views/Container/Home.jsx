import Nav from "../Presentational/Nav";
import styles from "../../util/styles";
import Search from "../Presentational/Search";
import { getTrending } from "../../util/helpers";
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
              <div className="stories-flex-unit" style={styles.storiesHeader()}>
                Stories{" "}
                <span>
                  <i
                    class="fa-solid fa-chevron-right"
                    style={{ fontSize: "small" }}
                  />
                </span>
              </div>
              <div
                className="stories-flex-unit"
                style={styles.storiesFlexItem(true)}
              >
                <i
                  className="fa-solid fa-chevron-left"
                  style={{ color: "white" }}
                />
                <i
                  className="fa-solid fa-chevron-right"
                  style={{ color: "white" }}
                />
              </div>
            </div>

            <div className="stories-unit">
              <div
                id="stories-images-grid-main"
                style={styles.storiesImageGrid()}
              >
                <div id="images-grid-main-unit" style={styles.imagesGridUnit()}>
                  <CardStack
                    src={
                      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGVrc3ptOTRmMnR3MGc0OHljYTR3djZrcG1qYnVwdW94bDB5aTFudSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oFzmjQnLXU2JBAC1q/giphy.gif"
                    }

                  />
                </div>

                <div id="images-grid-main-unit" style={styles.imagesGridUnit()}>
                  <CardStack
                   src={"https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGs1Zzd5NmdlZWk5YmZlMmt0MnBtMnFrczdteTIzNWJpZGEyZGx0NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEdv1yRZQ4jtfKnx6/giphy.gif"}
                   />
                </div>

                <div id="images-grid-main-unit" style={styles.imagesGridUnit()}>
                  <CardStack 
                  src={"https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTAzY3ZrdThtbjhnb2JoMWthMnNlb3Z1bmwwa2J1azRpM3o2MHlqMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTiTnGLxhB7NjOYBEs/giphy.gif"}
                  />
                </div>

                <div id="images-grid-main-unit" style={styles.imagesGridUnit()}>
                  <CardStack 
                  src={"https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2lsdWI0amZkdnF1YTdoa2g0d2JiM25kbTY0Z3IxZmh2b3ZnMzk0dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13hu4rVisIGF5S/giphy.gif"}
                  />
                </div>
              </div>
            </div>
          </div>

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
