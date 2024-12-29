import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AppLayout from './components/AppLayout'
import { ThemeProvider } from './context/ThemeProvider'
import WeatherDashboard from './routes/WeatherDashboard'
import CityPage from './routes/CityPage'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={ <WeatherDashboard /> } />
            <Route path="/city/:cityName" element={ <CityPage /> } />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
