import React from 'react';
import Header from '../Header/Header';
import Main from './Main';
import Footer from '../Footer/Footer';


const Layout = () => {
  return (
    <div className="App" data-bs-theme="dark">
      <Header></Header>
      
      <Main></Main>

      <Footer></Footer>
    </div>
  );
};

export default Layout;