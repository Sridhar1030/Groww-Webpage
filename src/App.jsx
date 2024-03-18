import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs/AboutUs';
import SuccessStories from './AboutUs/SuccessStories';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/Success" element={<SuccessStories/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;