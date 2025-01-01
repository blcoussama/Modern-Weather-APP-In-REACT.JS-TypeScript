import { PropsWithChildren } from 'react'
import Header from './Header'

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className='w-s bg-gradient-to-bl from-background to-muted'>
        <Header/>
        <main className='flex items-center justify-center min-h-screen mx-auto px-2 s:px-8 sm:px-12 py-8'>
            {children}
        </main>  
        <footer className='border-t backdrop-blur py-12 supports-[backdrop-filter]:bg-background/60'>
            <div className='mx-auto px-4 text-center text-white'>
                <p>Weather App Made By Belcadi Oussama</p>
            </div>
        </footer>
    </div>
  )
}

export default AppLayout