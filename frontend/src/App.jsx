import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import QuestionPage from './pages/QuestionPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/test" element={<QuestionPage section={"A"}/>} /> */}
      </Routes>
    </>
  )
}

export default App
