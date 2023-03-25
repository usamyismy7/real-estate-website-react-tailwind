import React from 'react';

import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import Home from './Components/Pages/Home';
import ScrollToTop from './Components/Pages/ScrollToTop/ScrollToTop';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
