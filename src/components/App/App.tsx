import React from 'react';
import './app.scss';
import Header from '../subComponents/header/Header';
import Footer from '../subComponents/footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='app__hx'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
