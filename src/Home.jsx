// load stuff
import './App.css'
import getData from './utils/getData.js'
import { useState, useEffect } from 'react'; 
import About from './components/About.jsx';



// my component


function Home() {
  // set up state 
  // example - const[getter,setter] = useState(init);

  // boolean to determine load status
  const [aboutLoaded, setAboutLoaded] = useState(false);

  // data object
  const [about, setAbout] = useState();
  const [title, setTitle] = useState('Oliver Institute of Technology')
  // methods

  // use effect is called after each re-render, inlcuding first render
  // synchronize with outside data using fetch
  useEffect(()=>{

    getData('about/').then(
      (json) => {
        setAbout(json);
        setAboutLoaded(true);
      }
    )

    
  }, [])


  // conditional return, typically very first thing user sees when naviagating to the page
  if (!aboutLoaded) return (
    // spinner
    <>
    <div className='stick'>
      <h1>{title}</h1>
      <p>you know how sticky it get</p>
    </div>

      <h1>LOADING...</h1>
    </>
  )
 return(
  <>
    <h1>Welcome to the Oliver Insitute of Technology!</h1>
    <p>Home of the theorists, innovators, and trendsetters</p>
    
    <div className="App">
      <About data={about}/>
      {/* Enter Components Here */}

    
      
    </div>
  </>

 ) 
}

export default Home
