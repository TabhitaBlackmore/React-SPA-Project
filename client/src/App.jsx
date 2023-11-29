import { Route, Routes } from 'react-router-dom'

import Home from './components/home/Home'
import About from './components/about/About'
import Contacts from './components/contacts/Contacts'
import Navigation from './components/navigation/Navigation'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import CrystalCreate from './components/create/CrystalCreate'
import RawGems from './components/posts/raw-gems/RawGems'
import ShapedGems from './components/posts/shaped-gems/ShapedGems'
import TumbledGems from './components/posts/tumbled-gems/TumbledGems'

function App() {

  return (
    <>
      <Navigation />

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/create-post' element={<CrystalCreate />} />
        <Route path='/raw-gems' element={<RawGems />} />
        <Route path='/tumbled-gems' element={<TumbledGems />} />
        <Route path='/shaped-gems' element={<ShapedGems />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
