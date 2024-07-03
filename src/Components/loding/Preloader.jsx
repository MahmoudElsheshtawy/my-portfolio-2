import { useEffect } from 'react'
import './Preloader.css'
import { preLoaderAnim } from '../../animations'

const Preloader = () => {
    useEffect(()=>{
        preLoaderAnim()
    },[])

  return (
    <div className="preloader">
       <div className="texts-container">
        <span>welcome</span>
        <span>to_my</span>
        <span>website</span>
        
        </div> 
       
        
        
        </div>
  )
}

export default Preloader