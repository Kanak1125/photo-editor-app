import React from 'react';
import './sidebar.css';

const Sidebar = ({menuItems, handleCurrentMenuItem}) => {
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
    </div>
  )
}

export default Sidebar