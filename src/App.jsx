import Weather from './Weather.jsx'
import Forecast from './Forecast.jsx'
import Intro from './Intro.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/weather' element={<Weather />} />
          <Route path='/forecast' element={<Forecast />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
