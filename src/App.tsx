
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MicroFrontend1 from './MicroFrontend1';
import MicroFrontend2 from './MicroFrontend2';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/micro-frontend-1" element={<MicroFrontend1 />} />
        <Route path="/micro-frontend-2" element={<MicroFrontend2 />} />
      </Routes>
    </Router>
  );
};

export default App;
