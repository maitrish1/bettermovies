import './App.css';
import Main from './Components/Main';
import About from './Components/About'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router';
function App() {
  return (
    <div className='App'>
      
      <Routes>
         <Route path='/' element={<Main/>}/>
         <Route path='/about/:tmdbId' element={<About/>}/>
      </Routes>
          
    </div>
    

  );
}

export default App;
