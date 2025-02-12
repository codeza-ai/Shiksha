import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import StartTest from "./pages/StartTest";
import SectionPage from "./pages/SectionPage";
import QuestionPage from "./pages/QuestionPage";
import Register from './pages/Register'

function App() {
  return (
    <div className="font-poppins">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/test" element={<StartTest />} />
        <Route path="/test/section/:sectionName" element={<SectionPage />} />
        <Route path="/test/section/:sectionName/question/:qNumber" element={<QuestionPage />} />
      </Routes>
    </div>
  )
}

export default App;
