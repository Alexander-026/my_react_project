import React, { FC } from "react";

// Define the props interface for ParagraphsComponent
interface IParagraphsComponentProps {
  title1: string; // Title for the first heading (h1)
  title2: string; // Title for the second heading (h2)
  title3: string; // Title for the third heading (h3)
}

// Define the ParagraphsComponent functional component
const ParagraphsComponent: FC<IParagraphsComponentProps> = ({
  title1,
  title2,
  title3,
}) => {
  return (
    <>
      <h1>{title1}</h1>
      <h2>{title2}</h2>
      <h3>{title3}</h3>
    </>
  );
};

export default ParagraphsComponent;
