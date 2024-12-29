import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AppLayout from './components/AppLayout'
import { ThemeProvider } from './context/ThemeProvider'
import WeatherDashboard from './routes/WeatherDashboard'
import CityPage from './routes/CityPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <AppLayout>
            <Routes>
              <Route path="/" element={ <WeatherDashboard /> } />
              <Route path="/city/:cityName" element={ <CityPage /> } />
            </Routes>
          </AppLayout>
        </ThemeProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    
  )
}

export default App
