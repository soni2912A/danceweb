import ImageTextSection from "./ImageTextSection";
import classImg from "../../assets/images/class1.png";

const ClassesSection = () => {
  return (
    <ImageTextSection
      image={classImg}
      title="Classes"
      heading="Our Classes"
      text="Get your groove on with Hip Hop, find your rhythm in Jazz, and explore connection in Contact Improvisation. Movement Studio offers a diverse range of classes for every dancer."
      buttonText="Reserve your spot"
      imagePosition="right"
    />
  );
};

export default ClassesSection;