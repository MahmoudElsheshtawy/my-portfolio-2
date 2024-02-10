
import './Portofilolest.css'
import Allprojects from '../../Allprojects.json'
import Portfolio from '../Portfolio/Portfolio'
const Portofilolest = () => {
  return (
  <>
  <div className="contanier"  style={{background:'#000' ,color:'#fff',paddingTop:"2rem"}} id='Portfolio'>
       <div className="header" style={{paddingTop:"3rem"}}>
        <h2 style={{marginBottom:'0'}}> {`< Projects />`}</h2>
        <h4 style={{marginTop:'0'}}>These are My Completed Projects.</h4>
        <div className="cards">


          {Allprojects.map((item)=>(
            <div key={item.id}>
              <Portfolio {...item}/>

            </div>

          ))}
        </div>
       </div>




  </div>
  </>
  )
}

export default Portofilolest
// no active
