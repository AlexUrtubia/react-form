import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from '../src/components/Header'
import Card from '../src/components/Card'
import Formulario from '../src/components/Formulario'




function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Formulario/>} />
        <Route path="/card" element={<Card/>} />
      </Routes>
    </Router>
  );
}

export default App;
