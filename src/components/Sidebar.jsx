import React from 'react';
import './sidebar.css';

const Sidebar = ({darkMode, menuItems, toggleDarkMode, handleCurrentMenuItem}) => {
  const menu = menuItems.map(item => 
    <li 
    key={item.id}
    className={item.isActive ? 'active' : ''}
    onClick={handleCurrentMenuItem}
    >{item.property}</li>
  )

  return (
    <div className='sidebar'>
        <ul>
            {/* <li className='active'>Brightness</li> */}
            {menu}
        </ul>
        <button 
        className='btn toggle-dark-mode-btn' 
        onClick={toggleDarkMode}
        >{darkMode ? 'Light' : 'Dark'}</button>
    </div>
  )
}

export default Sidebar