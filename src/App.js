import { Route, Routes } from 'react-router-dom';
import AllUsersPage from './pages/AllUsers';
import AddUserPage from './pages/AddUser';
import About from './pages/About';

import './App.css';
import MainNavigation from './components/layout/MainNavigation';
import EditUserForm from './components/EditUserForm';


function App() {



  return (

    <div>
      <MainNavigation />
      <Routes>
        <Route path='/' element={<AllUsersPage />} />
        <Route path='/add-user' element={<AddUserPage />} />
        <Route path='/about' element={<About />} />
        {/* <Route path="/edit/:userId" element={<EditUserForm />} /> */}

        <Route path="/edit/:userId" render={({ match }) => (
          <EditUserForm userId={match.params.userId} />
        )} />
      </Routes>
    </div>


  );
}

export default App;
