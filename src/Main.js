import './App.css';
import { Route, Routes, Outlet } from 'react-router-dom';

//pages
import PublicVote from './pages/Public/PublicVote';
import Home from './pages/Home';
import Success from './pages/Public/Success';
import Results from './pages/Public/Results';
import AllResults from './pages/Public/AllResults';

import PrivateAllResults from './pages/Private/AllResults';
import Sessions from './pages/Private/Sessions';
import PrivateVote from './pages/Private/PrivateVote';
import OwnVote from './pages/Private/OwnVote';
import PrivateSuccess from './pages/Private/Success';
import PrivateResultsSessions from './pages/Private/ResultsSessions';
import PrivateProxyAssigned from './pages/Private/ProxyAssigned';
import PrivateAssignSuccess from './pages/Private/AssignSuccess';

import Login from './pages/Login';
import LoginVote from './pages/LoginVote';
import ReleaseSuccess from './pages/AdminPrivate/ReleaseSuccess';
import CreateSuccess from './pages/AdminPrivate/CreateSuccess';

import PublicFileUpload from './pages/AdminPublic/FileUpload';
import PublicAdminResults from './pages/AdminPublic/Results';
import PublicReleaseVote from './pages/AdminPublic/ReleaseVote';
import PhotoUpload from './pages/AdminPublic/PhotoUpload';

import PrivateFileUpload from './pages/AdminPrivate/FileUpload';
import PrivateAdminResults from './pages/AdminPrivate/Results';
import PrivateReleaseVote from './pages/AdminPrivate/ReleaseVote';
import PrivateSelectTime from './pages/AdminPrivate/SelectTIme';
import PrivateAttendance from './pages/AdminPrivate/Attendance';

//Layout
import MainLayout from './layouts/mainLayout';
import LoginLayout from './layouts/LoginLayout';

const Main = () => {
  return (
    <Routes>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/LoginVote' element={<LoginVote/>}></Route>
        
        <Route path='/' element={<MainLayout/>}>
          <Route path='/'  element={<Home/>}></Route>
        </Route>
        <Route path='/' element={<LoginLayout/>}>
          <Route path='/'  element={<Home/>}></Route>
          {/* Public Client */}
          <Route path='/PublicVote' element={<PublicVote/>}></Route>
          <Route path='/Success' element={<Success />}></Route>
          <Route path='/Results' element={<Results />}></Route>
          <Route path='/AllResults' element={<AllResults />}></Route>

          {/* Private Client */}
          <Route path='/PrivateAllResults' element={<PrivateAllResults />}></Route>
          <Route path='/Sessions' element={<Sessions />}></Route>
          <Route path='/PrivateVote' element={<PrivateVote />}></Route>
          <Route path='/OwnVote' element={<OwnVote />}></Route>
          <Route path='/PrivateSuccess' element={<PrivateSuccess />}></Route>
          <Route path='/PrivateResultsSessions' element={<PrivateResultsSessions />}></Route>
          <Route path='/PrivateProxyAssigned' element={<PrivateProxyAssigned />}></Route>
          <Route path='/PrivateAssignSuccess' element={<PrivateAssignSuccess />}></Route>

          {/* Public Admin */}
          <Route path='/PublicFileUpload' element={<PublicFileUpload />}></Route>
          <Route path='/PublicAdminResults' element={<PublicAdminResults />}></Route>
          <Route path='/PublicReleaseVote' element={<PublicReleaseVote />}></Route>
          <Route path='/PublicPhotoUpload' element={<PhotoUpload />}></Route>

          {/* Private Admin */}
          <Route path='/PrivateFileUpload' element={<PrivateFileUpload />}></Route>
          <Route path='/PrivateAdminResults' element={<PrivateAdminResults />}></Route>
          <Route path='/PrivateReleaseVote' element={<PrivateReleaseVote />}></Route>
          <Route path='/PrivateReleaseSuccess' element={<ReleaseSuccess/>}></Route>
        <Route path='/PrivateCreateSuccess' element={<CreateSuccess/>}></Route>
        <Route path='/PrivateSelectTime' element={<PrivateSelectTime/>}></Route>
        <Route path='/PrivateAttendance' element={<PrivateAttendance/>}></Route>
        </Route>
        
        
      </Routes>
  )
}

export default Main