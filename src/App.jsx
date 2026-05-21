import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Nav from './components/Nav'
import Home from './pages/Home'
import GCMS from './pages/GCMS'
import LinkedPayments from './pages/LinkedPayments'
import PayWithPoints from './pages/PayWithPoints'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/gcms" element={<GCMS />} />
        <Route path="/linked-payments" element={<LinkedPayments />} />
        <Route path="/pay-with-points" element={<PayWithPoints />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <AnimatedRoutes />
    </BrowserRouter>
  )
}
