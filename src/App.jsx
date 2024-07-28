

import Container from 'react-bootstrap/Container';
import TopModel from "./Components/TopModel";
import MiddleModel from './Components/MiddleModel';
import Cards from './Components/Cards';
import AboutMe from './Components/AboutMe';
import Details from './Components/Details';
import Skills from './Components/Skills';
import Contact from './Components/Form';
import Footer from './Components/Footer';
const App = () =>{
  return(
    <>
    <TopModel/>
    <AboutMe/>
    <Details/>
    <Cards/>
    <MiddleModel/>
    <Skills/>
    <Contact/>
    <Footer/>
    </>
  )
}
export default App;