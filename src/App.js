
import './App.css';

import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNavigation from './components/Navigation/TopNavigation';






// function App() {
//   return (
//     <div className="App">
      
//       <Home/>
//       <About/>
//       <Contact/>
//       <Projects/>
//     </div>
//   );
// }

const App = () => {
  return (
  
      <Router>
        <TopNavigation></TopNavigation>
          <Routes>
            <Route exact path ='/' element={<Home/>} />
            <Route path ='/about' element={<About/>} />
            <Route path ='/contact' element={<Contact/>} />
            <Route path ='/projects' element={<Projects/>} />
        
          </Routes>

       
        
     </Router>
 
  );
};

export default App;
