
//@ts-nocheck
import { StickyNavbar } from './components/navbar.tsx'
//import  Flex  from './components/flex.tsx'
import  Footer from './components/footer.tsx'
import './App.css'
import './index.css'
import './assets/MajorMonoDisplay-Regular.ttf'
import Flex from './components/flex.tsx'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import All from './assets/smokefullheight.jpg'
function App(){
  return (
  
      <>
    <div style={{backgroundImage: `url(${All})`}} >
    <StickyNavbar/>
    <Flex/>
    <Footer />
    </div>  
    </>
    
  )
}

export default App
