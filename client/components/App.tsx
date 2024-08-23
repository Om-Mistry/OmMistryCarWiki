// In App.tsx or a relevant parent component
import CarList from './carList'

function App() {
  return (
    <>
      <header className="header">
        <h1>Om&apos;s car collection!</h1>
      </header>
      <section className="main">
        <CarList />
      </section>
    </>
  )
}

export default App
