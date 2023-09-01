import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Portfolio from './Pages/Portfolio/Portfolio';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" exact element={<About />} />
          <Route path="*" exact element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
