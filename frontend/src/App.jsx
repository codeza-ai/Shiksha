import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import StartTest from "./pages/StartTest";
import SectionPage from "./pages/SectionPage";
import QuestionPage from "./pages/QuestionPage";
import Register from './pages/Register'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import FinishTest from './pages/FinishTest'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PageTransition from './components/PageTransition'

function enforceFullScreen() {
  if (document.fullscreenEnabled && !document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.log(err);
    });
  }
}

function App() {
  const location = useLocation();


  useEffect(() => {
    if (location.pathname.startsWith("/test")&& window.innerWidth < 768) {
      alert("This test can only be taken on a computer.");
      window.location.href = "/";
    }

    // Detect exit from full-screen
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        enforceFullScreen();
      }
    };

    // Enforce full-screen mode
    if (location.pathname.startsWith("/test")) {
      enforceFullScreen();
      document.addEventListener("fullscreenchange", handleFullscreenChange);
    }


    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };

  }, [location.pathname]);
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Home />
          </PageTransition>
        } />
        <Route path="/register" element={
          <PageTransition>
            <Register />
          </PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition>
            <About />
          </PageTransition>
        } />
        <Route path="/contact" element={
          <PageTransition>
            <Contact />
          </PageTransition>
        } />
        <Route path="/login" element={
          <PageTransition>
            <Login />
          </PageTransition>
        } />
        <Route path="/test" element={<StartTest />} />
        <Route path="/test/section/:sectionName" element={<SectionPage />} />
        <Route path="/test/section/:sectionName/question/:qNumber" element={<QuestionPage />} />
        <Route path="/test/finish" element={<FinishTest/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App;
