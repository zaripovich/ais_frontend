import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./App.css"
import Main from './pages/main/main';
import About from './pages/about_project/about';
import OrderKeeper from './pages/OrderKeeper/orderKeeper';




function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='*' element = {<Main/>} />
            <Route path='/info' element = {<About/>} />
            <Route path='/ais' element = {<OrderKeeper/>} />
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
