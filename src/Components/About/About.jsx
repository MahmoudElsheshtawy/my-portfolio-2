
import './About.css'
import about from '../../photo/about.webp'

const About = () => {
  const onButtonClick = () => {
    const pdfUrl = "MahmoudElsheshtawyResume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "MahmoudElsheshtawyResume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
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
                <button onClick={onButtonClick} className="button-one" >
                <p className="text">
  Download Cv 
  </p>
                        <div className="svg">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-download" viewBox="0 0 16 16"> <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path> <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path> </svg>
                        </div>
                      </button>
                   
            </div>
          </div>
        
        
        
        </div>
  )
}

export default About