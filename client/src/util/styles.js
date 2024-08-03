const styles = {
  gridContainer: () => ({
    display: "grid",
    gridTemplateRows: ".5fr 7vh",
    height: "100vh",
  }),
  navContainerUnit: () => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px",
  }),
  navContainer: () => ({
    display: "grid",
    gridTemplateColumns: ".5fr repeat(6, 1fr) .25fr repeat(2, 1.5fr) 2fr",
    gap: "5px",
    height: "100%",
    width: "75vw",
    justifyContent: "center",
    alignItems: "center",
  }),
  navFlexUnits: (actions = false, logo = false) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "70%",
    color: logo || actions ? "white" : "rgba(4, 209, 246, 1)",
    backgroundColor: "black",
    fontWeight: logo ? 900 : 100,
    fontFamily: logo ? "Arial" : "sans-serif",
    fontSize: logo ? "40px" : "15px",
    position: logo ? "relative" : null,
    top: logo ? "8px" : null,
    borderRadius: "3px",
    fontStretch: logo ? "ultra-expanded" : "normal",
  }),
  searchBarContainer: () => ({
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  }),
  searchBarFlexContainer: (mini = false) => ({
    width: mini ? "100%" : "76%",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  }),
  searchInputContainer: (mini) => ({
    height: "100%",
    width: "94%",
  }),
  searchInput: (mini) => ({
    width: mini ? "95%" : "99.2%",
    height: "100%",
    borderRadius: "7px 0 0 7px",
  }),
  searchBtnContainer: (mini) => ({
    width: mini ? "25%" : "6%",
    height: "100%",
  }),
  searchBtn: (mini = false) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "105%",
    color: "white",
    backgroundColor: mini ? "rgba(33, 33, 33, 1)" : "rgba(217, 82, 165, 1)",
    borderRadius: mini ? "0 2px 2px 0" : "0 7px 7px 0",
    fontSize: mini ? "x-small" : "xx-large",
  }),
  mainImageContainer: () => ({
    display: "grid",
    gridTemplateColumns: ".34fr .45fr 1.7fr .34fr",
    height: "100%",
    marginTop: "3%",
  }),
  subImageContainer: (position) => ({
    height: "100%",
    display: position === 2 ? "grid" : "block",
    gridTemplateRows: position === 2 ? ".25fr .5fr .75fr auto" : null,
    alignItems: position === 2 ? "flex-end" : null,
  }),
  addContainer: () => ({
    display: "grid",
    gridTemplateRows: "4fr 4fr",
  }),
  addUnit: () => ({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    borderBottom: "1px solid gray",
  }),
  quickFlex: () => ({
    display: "flex",
    justifyContent: "spaceBetween",
    color: "white",
    width: "100%",
    height: "100%",
  }),
  socialUnit: () => ({
    width: "23%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10%",
  }),
  miniSearch: () => ({
    height: "10%",
    width: "100%",
    marginTop: "10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  }),
  storiesMain: () => ({
    display: "grid",
    gridTemplateRows: ".5fr 3fr",
    height: "100%",
  }),
  storiesMainContainer: () => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingLeft: "5%",
  }),
  storiesItem: () => ({
    height: "100%",
    paddingLeft: "5%",
  }),
  storiesHeader: () => ({
    width: "50%",
    color: "rgba(166, 166, 166, 1)",
    fontSize: "large",
  }),
  storiesFlexItem: (right) => ({
    width: "50%",
    justifyContent: "end",
    display: "flex",
    paddingRight: right ? "5%" : null,
  }),
  defaultImage: (mini = false) => ({
    padding: "5% 0 0 5%",
    height: mini ? "20%" : "100%",
    zIndex: mini ? Infinity : -Infinity,
    position: mini ? "relative" : null,
  }),
  mainHeadLine: () => ({
    color: "rgba(125, 125, 125, 1)",
    width: "100%",
  }),
  mainHeader: () => ({
    color: "rgba(166, 166, 166, 1)",
    width: "100%",
  }),
  imagesMainGrid: () => ({
    height: "100%",
    paddingLeft: "5%",
  }),
  imagesHeadLine: () => ({
    fontFamily: "sans-serif",
    color: "white",
    fontSize: "xx-large",
    fontWeight: "bolder",
    width: "100%",
  }),
  imagesSubLine: () => ({
    fontFamily: "helvetica",
    color: "rgba(166, 166, 166, 1)",
    fontSize: "small",
    position: "relative",
    top: "-20px",
  }),
  storiesImageGrid: () => ({
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    width: "100%",
    height: "100%",
  }),
  imagesGridUnit: () => ({
    border: "1px solid red",
  }),
  featuredMain: (position) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
    position: "relative",
    top: position === 0 ? "16%" : position === 1 ? "1%" : "20%",
    width: "100%",
    zIndex: position === 0 ? 3 : position === 1 ? 2 : 1,
  }),
  featuredSub: (position) => ({
    width: position === 0 ? "94%" : position === 1 ? "92%" : "90%",
    borderBottom:
      position === 3
        ? "10px solid rgba(73, 32, 113, 1)"
        : position === 2
        ? "7px solid rgba(99, 38, 161, 1)"
        : "7px solid rgba(125, 45, 208, 1)",
      position: "relative",

  }),
};

export default styles;
