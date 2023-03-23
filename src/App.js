import React from 'react';
import './App.css';
import Header from './Pages/Header';
import Navbar from './Pages/Navbar';
import Content from './Pages/Content';
import Sidebar from './Pages/Sidebar';
import Footer from './Pages/Footer';
import Form from './Pages/Form';

function App() {
  return (
    <div>
      {/* <Header />
      <Navbar />
      <div className="row">
        <Content />
        <Sidebar />
      </div>
      <Footer /> */}
      <Form />
    </div>
  );
}

export default App;