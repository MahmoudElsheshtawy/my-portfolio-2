
import './About.css'
import about from '../../photo/about.webp'

const About = () => {
  return (
    <div className='about' id='About'>  
          <div className="contianer">
            <div className="right">
         <img src={about} alt="" />
            </div>
            <div className="left">
                <h1>ABOUT <span> ME</span></h1>
                <h3>A dedicated Front-end Developer based in Al Buhayrah, egypt.</h3>
                <p>
                        As a Junior Front-End Developer, I possess an impressive arsenal of 
                        skills in HTML, CSS, JavaScript. React.
                        Tailwind. I excel in designing and maintaining responsive websites 
                        that offer a smooth user experience. My expertise
                        lies in crafting dynamic, engaging interfaces through writing cle and
                        optimized code and utilizing cutting edgeFRONTdevelopment tools
                        and techniques I am also a team player who thrives in collaborating
                        with cross-functional teams toproduce outstanding web applications
                </p>
                   
            </div>
          </div>
        
        
        
        </div>
  )
}

export default About