import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import './AppleSF.css';
import image from './assets/images/wallpaper.webp'
import dayjs from "dayjs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock,faCamera } from '@fortawesome/free-solid-svg-icons'



function App() {
  const [date, setDate] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(dayjs());
    }, 1000 * 60);

    return () => clearInterval(interval);
  }, []);

  // const Header = useMemo(
  //   () => {return (
  //     <div id="header">
  //       {/* <Ionicons name="ios-lock-closed" size={20} color="white" /> */}
  //       <p id="date" style={{color: 'white'}}>{date.format("dddd, DD MMMM")}</p>
  //       <p id="time" style={{color: 'white'}}>{date.format("hh:mm")}</p>
  //     </div>
  //   )},
  //   [date]
  // );
    
  return (
    <>
      <div id="appWrapper">
        <div className="container" style={{ }}>

          <div id="header">
            <FontAwesomeIcon icon={faLock} style={{color: "#ffffff",}} />         
             <p id="date" style={{color: 'white'}}>{date.format("dddd, DD MMMM")}</p>
              <p id="time" style={{color: 'white'}}>{date.format("hh:mm")}</p>
            </div>

            <div id='notificationSection'>
              No Older Notifications
            </div>
          </div>

          <div id='footer'>
            <span className='LockIconWrapper'>
              {/* <FontAwesomeIcon icon="fa-solid fa-flashlight" rotation={270} style={{color: "#ffffff",}} /> */}
              <FontAwesomeIcon icon={faCamera} style={{color: "#ffffff",}} />
            </span>

            <div className='LockIconWrapper'>
              <FontAwesomeIcon icon={faCamera} style={{color: "#ffffff",}} />
            </div>

            <div id="gestureControl"></div>
          </div>    
      </div>

    </>
  )
}

export default App
