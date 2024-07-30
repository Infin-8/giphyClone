const styles = {
  gridContainer: () => ({
    display: "grid",
    gridTemplateRows: ".5fr 1fr 5fr",
    height: "100vh",
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
    color: actions ? "white" : "rgba(4, 209, 246, 1)",
    backgroundColor: "black",
    fontWeight: "bolder",
    fontSize: logo ? "50px" : "15px",
    position: logo ? "relative" : null,
    top: logo ? "10px" : null,
    borderRadius: "3px",
  }),
};

export default styles;
