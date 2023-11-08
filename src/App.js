import { Route, Routes } from 'react-router-dom';
import AllUsersPage from './pages/AllUsers';
import AddUserPage from './pages/AddUser';
import About from './pages/About';

import './App.css';
import Form from './components/Form';
import MainNavigation from './components/layout/MainNavigation';


function App() {
  return (

    <div>
      <MainNavigation />
      <Routes>
        <Route path='/' element={<AllUsersPage />} />
        <Route path='/add-user' element={<AddUserPage />} />
        <Route path='/about' element={<About />} />

      </Routes>
    </div>


  );
}

export default App;
