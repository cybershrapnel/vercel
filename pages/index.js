import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className='min-h-screen flex flex-col bg-black text-white'>
      <Head>
        <title>MEQUAVIS Hotline AI</title>
      </Head>

      {!loggedIn ? (
        <div className='flex flex-col items-center justify-center flex-1'>
          <h1 className='text-5xl font-bold mb-4'>MEQUAVIS Hotline AI</h1>
          <p className='mb-8'>Connect your multiverse. Store your files. Explore your reality.</p>
          <div className='flex space-x-4'>
            <button onClick={() => setLoggedIn(true)} className='bg-white text-black px-4 py-2 rounded'>Login</button>
            <button onClick={() => setLoggedIn(true)} className='border border-white px-4 py-2 rounded'>Sign Up</button>
          </div>
        </div>
      ) : (
        <div className='flex flex-1'>
          <aside className='w-64 bg-gray-900 p-4'>
            <nav className='space-y-4'>
              <button className='w-full bg-white text-black py-2 rounded'>Home</button>
              <button className='w-full border border-white py-2 rounded'>Projects</button>
              <button className='w-full border border-white py-2 rounded'>Files</button>
              <button className='w-full border border-white py-2 rounded'>Multiverse Map</button>
              <button className='w-full border border-white py-2 rounded'>Settings</button>
            </nav>
          </aside>
          <main className='flex-1 p-6 space-y-6'>
            <h3 className='text-3xl font-bold'>Welcome to your Hotline Node</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              <div className='p-4 bg-gray-800 rounded'>Project 1 (Placeholder)</div>
              <div className='p-4 bg-gray-800 rounded'>Project 2 (Placeholder)</div>
              <div className='p-4 bg-gray-800 rounded'>Project 3 (Placeholder)</div>
            </div>
            <div className='mt-6'>
              <button className='text-lg bg-white text-black px-4 py-2 rounded'>Generate (Coming Soon)</button>
            </div>
            <div className='mt-10 p-4 bg-gray-800 rounded'>
              <h4 className='text-xl font-bold mb-2'>Multiverse Map (Preview)</h4>
              <p className='text-gray-400'>Graphical server hierarchy will appear here.</p>
            </div>
          </main>
        </div>
      )}
    </div>
  )
}
