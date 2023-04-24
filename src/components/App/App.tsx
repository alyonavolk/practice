import React from 'react';
import './app.scss';
import Header from '../subComponents/header/Header';
import Footer from '../subComponents/footer/Footer';
import RoutesPage from '../RoutesPage/RoutesPage';

function App() {
  return (
    <div className="app">
      <Header />
      <RoutesPage />
      <Footer />
    </div>
  );
}

export default App;
