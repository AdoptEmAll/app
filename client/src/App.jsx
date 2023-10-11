import './App.css'
import { Toaster } from 'react-hot-toast';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import ShelterList from './pages/Shelter/ShelterList';

function App() {


  return (
    <BrowserRouter>
    <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path='shelter'>
          <Route path='list' element={<ShelterList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
