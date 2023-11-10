import { Route, Routes, useParams } from 'react-router-dom';
import AllUsersPage from './pages/AllUsers';
import AddUserPage from './pages/AddUser';
import About from './pages/About';

import './App.css';
import MainNavigation from './components/layout/MainNavigation';
// import EditUser from './components/EditUserForm';
import EditUser from './pages/EditUser';


function App() {
  const params = useParams();


  return (

    <div>
      <MainNavigation />
      <Routes>
        <Route path='/' element={<AllUsersPage />} />
        <Route path='/add-user' element={<AddUserPage />} />
        <Route path='/about' element={<About />} />
        {/* <Route path="/edit/:userId" element={<EditUserForm />} /> */}

        <Route path="/edit/:userId" element={
          <EditUser userId={params.userId} />
        } />
      </Routes>
    </div>


  );
}

export default App;
