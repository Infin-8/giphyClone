const Trending = ({ data }) => (
  <>
    <p style={{ color: "rgba(166, 166, 166, 1)" }}>Trending Now</p>
    {data
      .map((item) => "#" + item)
      .map((item, i) => (
        <p key={"trending-" + i}>{item}</p>
      ))}
  </>
);
export default Trending