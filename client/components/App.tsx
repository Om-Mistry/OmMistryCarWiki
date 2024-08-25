import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CarList from './carList'
import '../styles/cars.css'
//import carDetail from '../components/carDetail.tsx'

function App() {
  return (
    <Router>
      <header className="header">
        <h1>Om&apos;s car collection!</h1>
      </header>
      <section className="main">
        <Routes>
          <Route path="/" element={<CarList />} />
        </Routes>
      </section>
    </Router>
  )
}

export default App
