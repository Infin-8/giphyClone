const styles = {

    navContainer: () => ({
        display: "grid",
        gridTemplateColumns: ".5fr repeat(6, 1fr) .25fr repeat(2, 1fr) 2fr",
        height: "10vh"
    }),
    navFlexUnits: () => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        border: "1px solid red"

    })
}

export default styles