
import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import Preloader from './Components/loding/Preloader'
import Navbar from './Components/Navbar/Navbar'
import Portofilolest from './Components/Portofilolest/Portofilolest'


function App() {


  return (
    <>
      <Preloader/>
       <div className="App">
       
       <Navbar/>
       <div className="Sections">
         <Home />
         <About/>
         {/* <Portfolio/> */}
         <Portofilolest/>
         <Contact/>
       </div>
    </div>
    </>
  )
}

export default App
