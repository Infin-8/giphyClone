const styles = {
  gridContainer: () => ({
    display: "grid",
    gridTemplateRows: ".5fr .5fr 5fr",
    height: "100vh",
  }),
  navContainerUnit: () => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px"
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
    fontStretch: logo ? "ultra-expanded" : "normal"
  }),
  searchBarContainer: () => ({
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  }),
  searchBarFlexContainer: () => ({
    width: "75vw",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  }),
  searchInputContainer: () => ({
    height: "100%",
    width: "94%",
  }),
  searchInput: () => ({
    width: "99.2%",
    height: "95%",
    borderRadius: "7px 0 0 7px",
  }),
  searchBtnContainer: () => ({
    width: "6%",
    height: "100%",

  }),
  searchBtn: () => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "105%",
    color: "white",
    backgroundColor: "rgba(217, 82, 165, 1)",
    borderRadius: "0 7px 7px 0",
    fontSize: "xx-large",
  }),
};

export default styles;
