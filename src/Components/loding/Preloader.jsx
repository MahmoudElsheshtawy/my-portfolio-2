import { useEffect } from 'react'
import './Preloader.css'
import'./Lod.css'
import { preLoaderAnim } from '../../animations'

const Preloader = () => {
    useEffect(()=>{
      // setTimeout(()=>{
        preLoaderAnim()
      // }, 1000)
      
    
    },[])

  return (
    <div className="preloader">
       <div className="texts-container">
        <span></span>
        <div>
          
        <div className="jelly"></div>
<svg width="0" height="0" className="jelly-maker">
  <defs>
    <filter id="uib-jelly-ooze">
      <feGaussianBlur in="SourceGraphic" stdDeviation="6.25" result="blur"></feGaussianBlur>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="ooze"></feColorMatrix>
      <feBlend in="SourceGraphic" in2="ooze"></feBlend>
    </filter>
  </defs>
</svg>
        </div>
        <span></span>
        {/* <span>to_my</span> */}
        {/* <span>website</span> */}
        
        </div> 
       
        
        
        </div>
  )
}

export default Preloader