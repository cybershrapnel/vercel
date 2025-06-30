import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <Head>
        <title>MEQUAVIS Hotline AI</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      {!loggedIn ? (
        <div className="flex flex-col items-center justify-center flex-1">
          <h1 className="text-6xl font-bold mb-6">MEQUAVIS Hotline AI</h1>
          <p className="mb-8 text-gray-400 text-center max-w-md">Connect your multiverse. Store your files. Explore decentralized AI reality.</p>
          <div className="flex space-x-4">
            <button onClick={() => setLoggedIn(true)} className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:scale-105 transform transition">Login</button>
            <button onClick={() => setLoggedIn(true)} className="px-6 py-3 rounded-xl border border-gray-500 hover:bg-gray-800 transition">Sign Up</button>
          </div>
        </div>
      ) : (
        <div className="flex flex-1">
          <aside className="w-64 bg-gray-900 bg-opacity-60 backdrop-blur p-4 space-y-4">
            <nav className="flex flex-col space-y-2">
              <button className="w-full py-2 rounded hover:bg-gray-800 text-left px-3">Home</button>
              <button className="w-full py-2 rounded hover:bg-gray-800 text-left px-3">Projects</button>
              <button className="w-full py-2 rounded hover:bg-gray-800 text-left px-3">Files</button>
              <button className="w-full py-2 rounded hover:bg-gray-800 text-left px-3">Multiverse Map</button>
              <button className="w-full py-2 rounded hover:bg-gray-800 text-left px-3">Settings</button>
            </nav>
          </aside>
          <main className="flex-1 p-6 space-y-6 overflow-y-auto">
            <h3 className="text-4xl font-bold mb-4">Welcome to your Hotline Node</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-white bg-opacity-10 backdrop-blur rounded-xl border border-gray-700">Project 1 (Placeholder)</div>
              <div className="p-4 bg-white bg-opacity-10 backdrop-blur rounded-xl border border-gray-700">Project 2 (Placeholder)</div>
              <div className="p-4 bg-white bg-opacity-10 backdrop-blur rounded-xl border border-gray-700">Project 3 (Placeholder)</div>
            </div>
            <div className="mt-6">
              <button className="text-lg px-6 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-red-500 text-white hover:scale-105 transform transition">Generate (Coming Soon)</button>
            </div>
            <div className="mt-10 p-4 bg-gray-800 bg-opacity-50 backdrop-blur rounded-xl border border-gray-700">
              <h4 className="text-xl font-bold mb-2">Multiverse Map (Preview)</h4>
              <p className="text-gray-400">Graphical server hierarchy will appear here as interactive nodes.</p>
            </div>
          </main>
        </div>
      )}
    </div>
  )
}
