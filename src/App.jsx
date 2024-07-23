import { BrowserRouter , Routes, Route } from 'react-router-dom';

import './App.css'
import Homepage from './Pages/Homepage/Homepage'
import About from './Pages/About/About';
import Layout from './Components/Layout/Layout';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          {/* <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App




