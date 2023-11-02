import React from 'react';
import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/pages/Layout';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Cards from './components/pages/Cards';
import Archive from './components/pages/Archive';
import Operate from './components/pages/Operate';
import RequireLogin from './components/hoc/RequireLogin';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout></Layout>}>
        <Route index element={<Home />}></Route>
        <Route path='cards' element={
        <RequireLogin>
          <Cards />
        </RequireLogin>
        }></Route>
        <Route path='archive' element={<Archive />}></Route>
        <Route path='operations/*' element={
        <RequireLogin>
          <Operate />
        </RequireLogin>
        }></Route>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>
  );
}

export default App;
