import React, { useState, useRef } from 'react';
import './main.css';
// import axios from 'axios';

const Main = ({currentOption, sidebarMenu, handleSlider, resetSidebarMenu}) => {
  const [selectedImage, setSelectedImage] = useState("https://w0.peakpx.com/wallpaper/765/827/HD-wallpaper-spider-man-far-from-home.jpg");
  // console.log(selectedImage);
  
  const updatedStyleProps = sidebarMenu.map(item => `${item.property}(${item.value}${item.unit})`).join(' ');
  
  const styles = {
    'filter' : updatedStyleProps
  }

  // const filteredImage = selectedImage && <img 
  //   src={selectedImage} 
  //   alt="" 
  //   style={styles}
  // />

  // const [currentImage, setCurrentImage] = useState(filteredImage);

  const fileUploaded = useRef(false); // to avoid page rerendering while updating the fileUploaded constant...

  console.log(fileUploaded);
  function handleFileChange(event) {
    const file = event.target.files[0]; // selects the first file selected...
    if (file) {
      fileUploaded.current = true;
      setSelectedImage(URL.createObjectURL(file));  // generates objectURL blob of the selected file with URL interface...
      resetSidebarMenu();
    }
    // setCurrentImage(filteredImage);
  }

  const canvasRef = useRef(null);

  const downloadImg = (e) => {
    const image = document.getElementById('image');
    const canvas = canvasRef.current;
    let imageUrl;

    if (image && image.complete && canvas) {
    const ctx = canvas.getContext('2d');
    console.log(image.width, image.height, canvas.width, canvas.height);
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.filter = styles.filter;
    

    ctx.drawImage(image, 0, 0, image.width, image.height);
    imageUrl = canvas.toDataURL();
  }

    if(imageUrl) {
        const downloadLink = document.querySelector('.download-link');
        downloadLink.href = imageUrl;
        downloadLink.download = "react-canvas.jpg";
    }
  }

  return (
    <main className='main'>
      {fileUploaded.current && <a href="" className='download-link' title='DOWNLOAD' onClick={downloadImg} download>
        <i className="fas fa-arrow-down"></i>
      </a>}
      <div className="img-container">
        <div className="overlay">
          <label htmlFor='upload_file' className='upload-btn'>
            Upload
          </label>
          <input 
            type="file" 
            id='upload_file' className='file-type-input'
            onChange={handleFileChange}  
          />
        </div>
        <canvas ref={canvasRef} style={{ display: 'none' }} />
        {selectedImage && <img src={selectedImage} id='image' alt="" style={styles}/>}
      </div>

        <input
        type="range"
        className="slider" 
        name="" 
        id="" 
        min={currentOption.range.min}
        max={currentOption.range.max}
        value={currentOption.value}
        onChange={handleSlider}
        />
    </main>
  )
}

export default Main;