import React from 'react';
import Header from '../Header/Header';
import Main from './Main';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import { Modal } from '../UI';


const Layout = () => {
  return (
    <div className="App" data-bs-theme="dark">
      <Header></Header>
      
      <Main></Main>

      <Login></Login>

      <Modal></Modal>

      <Footer></Footer>
    </div>
  );
};

export default Layout;