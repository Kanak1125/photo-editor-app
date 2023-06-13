import React from 'react';
import './main.css';

const Main = ({currentOption, sidebarMenu, handleSlider}) => {
  const updatedStyleProps = sidebarMenu.map(item => `${item.property}(${item.value}${item.unit})`).join(' ');
  
  const styles = {
    'filter' : updatedStyleProps
  }
  
  return (
    <main className='main'>
        <img 
        src="https://w0.peakpx.com/wallpaper/687/438/HD-wallpaper-fortnite-astronomical.jpg" 
        alt="" 
        style={styles}
        />

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