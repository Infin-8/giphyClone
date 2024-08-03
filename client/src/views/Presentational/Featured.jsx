import DefaultImage from "./DefaultImage";
import CardStack from "./CardStack";

const Featured = ({ position }) => (
  <>
    <DefaultImage mini />
    <CardStack position={position} />
  </>
);

export default Featured;
