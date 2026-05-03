import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Header from './components/Header'
import Services from './Services'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <main className='grid-layout bg-accent'>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  )
}

export default App
