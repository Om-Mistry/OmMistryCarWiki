import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <header className="header">
        <h1>Om&apos;s favourite cars!</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
