import { useState } from "react";
import '../style/SocialMediaComponent.css'; // Create and import the CSS file for styling


interface SocialMediaIconProps {
  IconComponent: React.FC; // Assuming IconComponent is a React functional component
  link: string;
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({ IconComponent, link }) => {
  const [isClicked, setIsClicked] = useState(false);
  
    const handleClick = () => {
      setIsClicked(true);
      window.open(link, '_blank');
      setTimeout(() => setIsClicked(false), 300);
    };
  
    return (
      <div className={`social-media-icon ${isClicked ? 'icon-clicked' : ''}`} onClick={handleClick}>
        <IconComponent />
      </div>
    );
  };

  export default SocialMediaIcon;