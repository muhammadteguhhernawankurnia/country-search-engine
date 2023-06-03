import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/Home';
import Result from './pages/Result';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/result' element={<Result />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
