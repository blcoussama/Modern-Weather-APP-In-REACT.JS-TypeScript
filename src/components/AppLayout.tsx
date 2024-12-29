import { PropsWithChildren } from 'react'
import Header from './Header'

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className='bg-gradient-to-br from-background to-muted'>
        <Header/>
        <main className='min-h-screen container mx-auto px-4 py-8'>
            {children}
        </main>  
        <footer className='border-t backdrop-blur py-12 supports-[backdrop-filter]:bg-background/60'>
            <div className='container mx-auto px-4 text-center text-gray-400'>
                <p>Weather App Made By Belcadi Oussama</p>
            </div>
        </footer>
    </div>
  )
}

export default AppLayout