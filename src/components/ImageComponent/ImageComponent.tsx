import { FC } from "react";
import styles from "./ImageComponent.module.scss";

// Define the props interface for ImageComponent
interface IImageComponentProps {
  src: string;        // Source of the image
  classname?: string; // Optional additional class for styling
  alt?: string;       // Alternative text for the image
}

// Define the ImageComponent functional component
const ImageComponent: FC<IImageComponentProps> = ({ src, classname = '', alt = '' }) => {
  return (
    <img
      className={`${styles.image} ${classname}`} // Apply styles from module and additional class
      src={src}         // Set the image source
      alt={alt}         // Set the alternative text for the image
    />
  );
};

export default ImageComponent;
