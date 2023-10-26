import React from 'react';
import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/pages/Layout';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout></Layout>}>
        <Route index element={<Home />}></Route>
        <Route path='cards' element={<Home />}></Route>
        <Route path='archive' element={<Home />}></Route>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>
  );
}

export default App;
