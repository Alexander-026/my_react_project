import React, { FC } from "react";
import styles from "./VideoComponent.module.scss";

// Define the props interface for VideoComponent
interface IVideoComponentProps {
  src: string; // Source URL of the video
  title: string; // Title of the video
  className?: string; // Optional additional class for styling
}

// Define the VideoComponent functional component
const VideoComponent: FC<IVideoComponentProps> = ({
  src,
  title,
  className,
}) => {
  return (
    <iframe
      className={`${styles.video} ${className}`} // Apply styles from module and additional class
      src={src} // Set the source URL of the video
      title={title} // Set the title of the video
    ></iframe>
  );
};

export default VideoComponent;
