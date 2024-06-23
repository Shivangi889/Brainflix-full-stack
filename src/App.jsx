import "./App.scss";
import { Navigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Hero from "./Pages/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar";
import Upload from "./Pages/Upload/Upload.jsx";

function App() {
  const [nextvideoDetails, setNextVideoDetails] = useState();
  const [videoData, setVideoData] = useState([]);

 

  return (
    <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route
            path="/home"
            element={
              <Hero
                nextvideoDetails={nextvideoDetails}
                setNextVideoDetails={setNextVideoDetails}
                videoData={videoData}
                setVideoData={setVideoData}
            
              />
            }
          />

          <Route path="/home/:id"
            element={
              <Hero
                nextvideoDetails={nextvideoDetails}
                setNextVideoDetails={setNextVideoDetails}
                videoData={videoData}
                setVideoData={setVideoData}
              />
            }
          />
          <Route path="/uploadVideo" element={<Upload />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
