import Home from "@/components/Home";
import "../styles/globals.css";
import 'rsuite/dist/rsuite.min.css'
import Contact from "@/components/Contact";
import About from "@/components/About";
import Projects from "@/components/Projects";
import { useState } from "react";
import { Tooltip, Whisper } from "rsuite";
import { BiHomeHeart } from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";
import { MdOutlineContactPage } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";

function MyApp() {
  const [activeComponent, setActiveComponent] = useState('home')

  const renderComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      case 'contact':
        return <Contact />
      case 'projects':
        return <Projects />
      default:
        return <Home />;
    }
  }

  return (
    <div>
      <div className='w-24 lg:fixed hidden min-h-screen bg-black lg:flex justify-center items-center text-white border-r'>
        <ul className='space-y-14 bg-black'>
          <Whisper onClick={() => setActiveComponent('home')} followCursor speaker={<Tooltip>Home</Tooltip>}>
            <li className="cursor-pointer"><BiHomeHeart size={20} /></li>
          </Whisper>
          <Whisper onClick={() => setActiveComponent('about')} followCursor speaker={<Tooltip>About</Tooltip>}>
            <li className="cursor-pointer"><IoIosInformationCircleOutline size={20} /></li>
          </Whisper>
          <Whisper onClick={() => setActiveComponent('projects')} followCursor speaker={<Tooltip>Projects</Tooltip>}>
            <li className="cursor-pointer"><AiOutlineProject size={20} /></li>
          </Whisper>
          <Whisper onClick={() => setActiveComponent('contact')} followCursor speaker={<Tooltip>Contact</Tooltip>}>
            <li className="cursor-pointer"><MdOutlineContactPage size={20} /></li>
          </Whisper>
        </ul>
      </div>
      <div className="w-full fixed lg:hidden bg-black text-white z-50">
        <ul className="flex justify-around items-center h-14">
          <Whisper onClick={() => setActiveComponent('home')} followCursor speaker={<Tooltip>Home</Tooltip>}>
            <li className="cursor-pointer"><BiHomeHeart size={28} /></li>
          </Whisper>
          <Whisper onClick={() => setActiveComponent('about')} followCursor speaker={<Tooltip>About</Tooltip>}>
            <li className="cursor-pointer"><IoIosInformationCircleOutline size={28} /></li>
          </Whisper>
          <Whisper onClick={() => setActiveComponent('projects')} followCursor speaker={<Tooltip>Projects</Tooltip>}>
            <li className="cursor-pointer"><AiOutlineProject size={28} /></li>
          </Whisper>
          <Whisper onClick={() => setActiveComponent('contact')} followCursor speaker={<Tooltip>Contact</Tooltip>}>
            <li className="cursor-pointer"><MdOutlineContactPage size={28} /></li>
          </Whisper>
        </ul>
      </div>
      <div className='lg:ml-24'>
        {renderComponent()}
      </div>
    </div>
  )
}

export default MyApp;