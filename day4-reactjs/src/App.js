
import "./app.scss"
import Topbar from "./components/topbar/Topbar"
import Works from "./components/works/Works"
import Intro from "./components/intro/Intro"
import Contact from "./components/contact/Contact"
import { useState } from "react"
import Menu  from './components/menu/Menu'

function App() {
  const [openMenu,setOpenMenu] = useState(false)

  return (
    <div className="app">
      <Topbar isOpen={openMenu} setOpen={setOpenMenu} />
      <Menu isOpen={openMenu} setOpen={setOpenMenu} />
      <div className='session' >
        <Works/>
        <Intro/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
