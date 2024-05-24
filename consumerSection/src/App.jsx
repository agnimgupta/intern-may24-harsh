import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
import FindDoctor from './components/FindDoctor';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Sidebar from './components/Sidebar';
import Payment from './components/Payment';
import Chats from './components/Chats'
import Container from './components/Container';
import Routines from './components/Routines';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="relative">
          <Banner name="Priya" />

          <div className="wrapper w-[100%] flex justify-start items-start">
            <Sidebar />
            <Container >
              <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/find-doctor" element={<FindDoctor />} />
                <Route path="/routines" element={<Routines />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/chat" element={<Chats />} />

              </Routes>
            </Container>

          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
