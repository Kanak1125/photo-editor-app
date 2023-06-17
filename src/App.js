import { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import { nanoid } from 'nanoid';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const menuItems = [
    {
      id: nanoid(),
      name: 'Brightness',
      property: 'brightness',
      isActive: true,
      value: 100,
      range: {
        min: 0,
        max: 200
      },
      unit: '%'
    },
    {
      id: nanoid(),
      name: 'Contrast',
      property: 'contrast',
      isActive: false,
      value: 100,
      range: {
        min: 0,
        max: 200
      },
      unit: '%'
    },
    {
      id: nanoid(),
      name: 'Saturation',
      property: 'saturate',
      isActive: false,
      value: 100,
      range: {
        min: 0,
        max: 200
      },
      unit: '%'
    },
    {
      id: nanoid(),
      name: 'Grayscale',
      property: 'grayscale',
      isActive: false,
      value: 0,
      range: {
        min: 0,
        max: 100
      },
      unit: '%'
    },
    {
      id: nanoid(),
      name: 'Sepia',
      property: 'sepia',
      isActive: false,
      value: 0,
      range: {
        min: 0,
        max: 100
      },
      unit: '%'
    },
    {
      id: nanoid(),
      name: 'Hue Rotate',
      property: 'hue-rotate',
      isActive: false,
      value: 0,
      range: {
        min: 0,
        max: 360
      },
      unit: 'deg'
    },
    {
      id: nanoid(),
      name: 'Blur',
      property: 'blur',
      isActive: false,
      value: 0,
      range: {
        min: 0,
        max: 10
      },
      unit: 'px'
    },
  ];
  
  const [sidebarMenu, setSidebarMenu] = useState(menuItems);
  const [currentOption, setCurrentOption] = useState(sidebarMenu[0]);

  function resetSidebarMenu() {
    setSidebarMenu(menuItems);
  }

  function handleSlider(e) {
    const currentValue = e.target.value;
    // setSlider(e.target.value);
    setCurrentOption(prevOption => ({
      ...prevOption,
      value: currentValue
    }))
    console.log(e.target.value);
  }

  const toggleDarkMode = () => {
    setDarkMode(mode => !mode);
    console.log(darkMode);
  }

  useEffect(() => {
    const bodyClass = document.body.classList;
    darkMode ? bodyClass.add('dark') : bodyClass.remove('dark');
  }, [darkMode])

  useEffect(() => {
    const activeOption = sidebarMenu.find(menu => menu.isActive); // returns the TRUE item whose condition is met...
   
    if (activeOption !== currentOption) { // only update the currentOption, if the activeOption is different than the currentOption to prevent infinite useEffect loop...
      setCurrentOption(activeOption);
    }
  }, [sidebarMenu])
  
  useEffect(() => {
    setSidebarMenu(prevSideMenu => prevSideMenu.map(menu => {
      return menu.id === currentOption.id ? currentOption : menu;
    }))
  }, [currentOption])
  
  function handleCurrentMenuItem(e) {
    const currentMenuText = e.target.textContent;
    setSidebarMenu(prevSideMenu => {
      return prevSideMenu.map(item => (
        {
          ...item,
          isActive: item.property === currentMenuText ? true : false
        }
      )
    )}
    )
  }

  return (
    <div className="editor-container" >
      <Main
        sidebarMenu={sidebarMenu}
        currentOption= {currentOption}
        handleSlider={(event) => handleSlider(event)}
        resetSidebarMenu={resetSidebarMenu}
      />
      <Sidebar
        darkMode={darkMode}
        menuItems={sidebarMenu}
        toggleDarkMode={toggleDarkMode}
        handleCurrentMenuItem={handleCurrentMenuItem}
      />
    </div>
  );
}

export default App;