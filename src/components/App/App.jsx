import React from 'react';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import './App.scss';
import Footer from '../Footer/Footer.jsx';

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Main />
      <Footer />
    </div>
  );
};

export default App;
