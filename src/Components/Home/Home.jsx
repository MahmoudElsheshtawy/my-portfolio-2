import { useEffect } from 'react'
import 'boxicons'
// import { Typewriter } from 'react-simple-typewriter'
// import video from '../../assets/video.mp4'
import './Home.css'
import html from '../../photo/html.png'
import css from '../../photo/css.png'
import javascript from '../../photo/javascript.png'
import react from '../../photo/react.png'
import tillwend from '../../photo/tillwend.png'
import redux from '../../photo/redux.png'
import pin from '../../photo/pin.png'
import me from '../../assets/me.jpg'
import { GrLocationPin } from "react-icons/gr";
import { FaLocationPin } from "react-icons/fa6";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(()=>{
    Aos.init({duration:1500})
   })
  return (
    <div className='home' id='Home'>
                   
                    <div className="container-home"  >
                          <div className="right">
                            <div className="info">
                              <h1>Front-End React <br/> Developer  </h1>
                              <p>Hi I'm <i> Mahmoud Elsheshtawy </i> A passionate Front-end React<br/>
                                Developer based in : Al Buhayrah, Egypt<FaLocationPin className='pin' /> </p>
                            </div>

                         </div>
  
                   
                      <div  className="left"  >
                        <img className='img' src={me} alt="" />
                      </div>

                      

                    </div>   
                        <div className="My-Skils" style={{background:"#aaa"}}>
                              <h2>Tech Stack<span>|</span></h2>

                              <div  className="Skils">
                                    <img className='skil' src={html} alt="" />
                                    <img className='skil' src={css} alt="" />
                                    <img className='skil' src={javascript} alt="" />
                                    <img className='skil' src={react} alt="" />
                                    <img className='skil' src={redux} alt="" />

                                    <img className='skil' src={tillwend} alt="" />
                              </div>  
                        </div>  
                      
           </div>       

  )
}

export default Home


          
