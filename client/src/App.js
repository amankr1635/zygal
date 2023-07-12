import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route ,useParams} from "react-router-dom";
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/logIn" element={<LoginPage />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
