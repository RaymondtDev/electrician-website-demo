import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Header from './components/Header'
import Services from './Services'
import Footer from './components/Footer'
import { useEffect } from 'react'

const Wrapper = ({children}) => {
  const location = useLocation();

  useEffect(() => {
    window.scroll({top: 0, left: 0, behavior: "instant"});
  }, [location.pathname]);

  return children;
};
  
function App() {
  return (
    <BrowserRouter>
      <main className='grid-layout bg-accent'>
        <Header/>
        <Wrapper>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        </Wrapper>
        <Footer />
      </main>
    </BrowserRouter>
  )
}

export default App
