import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from './assets/routes/Landing.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
