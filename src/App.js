import './css/App.css';
import Navigationbar from './Components/Navbar';
import Animation from './Components/Animation';
import Maintext from './Components/Maintext';
import { useStateContext} from './ContextProvider/ContextProvider';
import { useEffect } from 'react';
function App() {
  const {scrollPos, setScrollPos}= useStateContext();
  useEffect(()=>{
    const time = setInterval(() => {
        setScrollPos(document.documentElement.scrollTop);
    }, 0);
    console.log(scrollPos);
    return () => clearInterval(time);
})

  return (
    <div className="Navbar">
      <Navigationbar/>
      <Maintext/>
      <Animation/>
    </div>
  );
}

export default App;
