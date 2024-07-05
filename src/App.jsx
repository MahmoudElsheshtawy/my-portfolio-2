
import { useEffect, useState } from 'react'
import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import Preloader from './Components/loding/Preloader'
import Navbar from './Components/Navbar/Navbar'
import Portofilolest from './Components/Portofilolest/Portofilolest'
// import Lod from './Components/loding/Lod'
// import Preloader from './Components/Preloader'


function App() {


  // const [loding,setloding]=useState(false)

  // useEffect(()=>{
  //    setloding(true);
  //    setTimeout(() => {
  //      setloding(false);
  //    }, 1000);  // this is the duration of loding time in ms 3000ms = 3 seconds  // you can change this value as per your requirement  // setTimeout is used for delaying the execution of a function.  // setTimeout(function, delay) // delay is in milliseconds.  // in this case, delay is 3000 milliseconds which is 3 seconds.
  // },[])

  return (
    <>
     <Preloader/>
    {/* {loding?<Lod/>: */}
    
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
 {/* } */}
     
    
    </>
  )
}

export default App
