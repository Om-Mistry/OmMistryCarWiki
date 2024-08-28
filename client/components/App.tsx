import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CarList from './carList'
import CarDetail from '../components/carDetail'

import '../styles/cars.css'

function App() {
  return (
    <Router>
      <header className="header">
        <h1>Om&apos;s car collection!</h1>
      </header>
      <section className="main">
        <Routes>
          <Route path="/" element={<CarList />} />
          <Route path="/cars/:id" element={<CarDetail />} />
        </Routes>
      </section>
    </Router>
  )
}

export default App
