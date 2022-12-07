import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import Blogs from './components/Blog/Blog';

function App() {
  return (
    <div className='App'>
      <Nav></Nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blogs/:id' element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
