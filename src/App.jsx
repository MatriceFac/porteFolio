import About from './components/About'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projet from './components/Projet'
import Experience from './Experience'


export default function App() {
  return (<>
      <div className='p-5 md:px-[15%]'>
      <Navbar/>
      <Home/>
    </div>
    <About/>
    <div className='p-5 md:px-[15%]' >
    <Experience  />
    <Projet/>
    </div>
    <Footer/>
  
  </>

  )
}
