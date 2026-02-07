import ImageTextSection from "./ImageTextSection";
import visionImg from "../../assets/images/vision1.png";

const VisionSection = () => {
  return (
    <ImageTextSection
      image={visionImg}
      title="Vision"
      heading="Who we are"
      text="At Movement Studio, we're passionate about creating a supportive and inspiring environment for dancers of all levels. Whether you're a complete beginner eager to explore the world of modern dance, a seasoned performer looking to refine your technique, or simply someone who finds joy in moving, you'll find a home here."
      buttonText="About us"
      imagePosition="left"
    />
  );
};

export default VisionSection;