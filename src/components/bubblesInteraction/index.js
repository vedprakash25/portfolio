import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particlesOptions } from "./particles";

function BubblesInteraction() {
  const particlesInit = (engine) => {
    loadFull(engine);
  };
  return (
    <div>
      <Particles init={particlesInit} options={particlesOptions} />
    </div>
  );
}

export default BubblesInteraction;
