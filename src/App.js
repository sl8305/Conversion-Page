import React from 'react';
import PageNavbar from './components/PageNavbar/PageNavbar';
import PageFooter from './components/PageFooter/PageFooter';
import Intro from './components/Intro/Intro';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">

      <PageNavbar />
      <Intro />
      <PageFooter />

    </div>
  );
}

export default App;
