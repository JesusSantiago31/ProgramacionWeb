import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClienteRouter from './modules/cliente/ClienteRouter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ClienteRouter />} />
      </Routes>
    </Router>
  );
}

export default App;
