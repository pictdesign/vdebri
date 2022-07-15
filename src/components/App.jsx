import React from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';
import './App.scss';
import Footer from './Footer.jsx';

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
