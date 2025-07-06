import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Sidebar from './Pages/Sidebar';
import Signupteacher from './Pages/Signupteacher';
import Header from './Pages/Header';
import Addcts from './Pages/Addcts';
import Newsandannc from './Pages/Newsandannc';
import Allcourses from './Pages/Allcourses';
import Upcomeing from './Pages/Upcomeing';
import Viewcourses from './Pages/Viewcourses';
import Signupstudent from './Pages/Signupstudent';
import Setting from './Pages/Setting';
import Students from './Pages/Students';
import UserList from "./components/UserList";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Signupteacher' element={<Signupteacher />} />
        <Route path='/Signupstudent' element={<Signupstudent />} />
        <Route path='/Sidebar' element={<Sidebar />} />
        <Route path='/Header' element={<Header />} />
        <Route path='/Addcts' element={<Addcts />} />
        <Route path='/Newsandannc' element={<Newsandannc />} />
        <Route path='/Allcourses' element={<Allcourses />} />
        <Route path='/Upcomeing' element={<Upcomeing />} />
        <Route path='/Viewcourses' element={<Viewcourses />} />
        <Route path='/Setting' element={<Setting />} />
        <Route path='/Students' element={<Students />} />
        <Route path='/UserList' element={<UserList />} /> {/* ✅ Add this route */}
      </Routes>
    </HashRouter>
  );
}

export default App;
