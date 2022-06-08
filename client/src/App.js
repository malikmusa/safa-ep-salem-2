import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Formulaire from './views/Form/Formulaire';
import Quiz from './views/Quiz/Quiz';
import { ScoreProvider } from './views/Helpers/scoreContext';

function App() {
  return (
    <BrowserRouter>
      <ScoreProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Formulaire />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </ScoreProvider>
    </BrowserRouter>
  );
}

export default App;
