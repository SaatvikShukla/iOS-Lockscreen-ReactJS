import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './AppleSF.css';
import './App.css';
import image from './assets/images/wallpaper.webp'
import dayjs from "dayjs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock,faCamera } from '@fortawesome/free-solid-svg-icons'
import NotificationList  from './components/NotificationList'
// import Animated, {SlideIn, SlideInDown, SlideInUp} from 'react-native-reanimated';

function App() {
  const [date, setDate] = useState(dayjs());
  const [goFS, setGoFS] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(dayjs());
    }, 1000 * 60);

    return () => clearInterval(interval);
  }, []);

  // Find the right method, call on correct element
  function launchFullScreen(element) {
    if(element.requestFullScreen) {
      element.requestFullScreen();
    } else if(element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if(element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    }
  }
    
  function launchFS(){
    if(goFS){
      console.log("triggered")
      launchFullScreen(document.documentElement); // the whole page
      setGoFS(true);
    } else {
      
    }
  }
  return (
    <>
      <div id="appWrapper" >
        <div className="container" style={{ }}>

          {/* <Animated.View entering={SlideInDown} exiting={SlideInUp}>

          </Animated.View> */}
          <div id="header">
            <FontAwesomeIcon icon={faLock} style={{color: "#ffffff",}} />         
             <p id="date" style={{color: 'white'}}>{date.format("dddd, DD MMMM")}</p>
              <p id="time" style={{color: 'white'}}>{date.format("h:mm")}</p>
            </div>

            <div id='notificationSection'>
              {/* No Older Notifications */}
              <NotificationList />
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
