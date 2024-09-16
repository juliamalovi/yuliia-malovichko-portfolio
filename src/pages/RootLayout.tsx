import Footer from '@/components/Footer'
import MainNavigation from '@/components/MainNavigation'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {

    return (
        <div className="min-h-screen flex flex-col">
            <MainNavigation />
            <main className='bg-background h-content flex-grow overflow-hidden' style={{ marginBottom: "var(--footer-height)" }}>
                <div className='overflow-y-auto h-full '>
                    <div className='max-w-4xl mx-auto'>
                        <Outlet />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default RootLayout