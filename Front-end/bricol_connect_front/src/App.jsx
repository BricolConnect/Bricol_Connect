import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil_Visiteur from './pages/Accueil_Visiteur';

function App() {

  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path='/' element={<Accueil_Visiteur />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
