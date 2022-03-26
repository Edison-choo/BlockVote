import './App.css';
import { Route, Routes, Outlet } from 'react-router-dom';

//pages
import PublicVote from './pages/Public/PublicVote';
import Home from './pages/Home';
import Success from './pages/Public/Success';
import Results from './pages/Public/Results';
import AllResults from './pages/Public/AllResults';
import Sessions from './pages/Private/Sessions';
import PrivateVote from './pages/Private/PrivateVote';
import Login from './pages/Login';
import FileUpload from './pages/Admin/FileUpload';
import AdminResults from './pages/Admin/Results';

//Layout
import MainLayout from './layouts/mainLayout';

const Main = () => {
  return (
    <Routes>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/' element={<MainLayout/>}>
          <Route path='/'  element={<Home/>}></Route>
          <Route path='/PublicVote' element={<PublicVote/>}></Route>
          <Route path='/Success' element={<Success />}></Route>
          <Route path='/Results' element={<Results />}></Route>
          <Route path='/AllResults' element={<AllResults />}></Route>
          <Route path='/Sessions' element={<Sessions />}></Route>
          <Route path='/PrivateVote' element={<PrivateVote />}></Route>
          <Route path='/FileUpload' element={<FileUpload />}></Route>
          <Route path='/AdminResults' element={<AdminResults />}></Route>
        </Route>
        
        
      </Routes>
  )
}

export default Main