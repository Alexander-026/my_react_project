import React from 'react';

// Define possible values for the header type
type HeaderType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

// Define the properties of the header component
interface HeaderProps {
  level: HeaderType; // The level of the header
  className?: string; // Additional class for styling
  text: string; // The text content of the header
}

// Create the header component
const DynamicHeader: React.FC<HeaderProps> = ({ level, className, text }) => {
  const HeaderTag = level; // Determine the type of header tag based on the 'level' property
  return <HeaderTag className={className}>{text}</HeaderTag>;
};

export default DynamicHeader;
