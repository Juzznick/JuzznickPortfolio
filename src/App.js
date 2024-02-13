import Hero from './hero'
import About from './about'
import Project from './project'
import Skill from './skills'
import Contact from './contact'
import './App.css';
import { BrowseRouter, Routes, Route, Link, NavLink, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='navbar'>
        <ul>
          <li><NavLink to="home">home</NavLink></li>
          <li><NavLink to="about">about</NavLink></li>
          <li><NavLink to="project">projects</NavLink></li>
          <li><NavLink to="skills">skills</NavLink></li>
          <li><NavLink to="contact">contact</NavLink></li>
        </ul>
      </div>

      <main>
        <Routes>
          <Route index element={<Hero />} />
          <Route path="home" element={<Hero />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="skills" element={<Skill />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>

  );


}

export default App;
