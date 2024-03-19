import React from 'react';
import './content.css'; // Import your CSS file

interface ContentProps {
  videoUrls?: string[];
}

const Content: React.FC<ContentProps> = ({ videoUrls }) => {
  return (
    <div id="content">
      <div className="Content"></div>
      
      <div className="grow"></div>
      <button className="content-button"><a href="https://www.instagram.com/reel/Cn9ANvWAJgE/?hl=en">Prime Video - Daisy Jones (2023)</a></button>
      <br />
      <button className="content-button">
        <a href="https://www.instagram.com/reel/CmDlx5Tv9Kz/?hl=en">Prime Video - Christmas Faves (2022)</a></button>
      <br />
      <button className="content-button">
        <a href="https://www.instagram.com/primevideoaunz/reel/ClwyW6MBJZr/?hl=en">Amazon Prime Video Buff (2022)</a>
      </button>
      <button className="content-button">
        <a href="https://www.instagram.com/reel/CnGmX5kJ0v-/?hl=en">Whats On January</a>
      </button>
      <button className='content-button'>
      <a href="https://instagram.com/reel/CoQagUsr13o/?hl=en">Whats on February</a>
      </button>
    </div>


  );
}

export default Content;
