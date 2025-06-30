import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [prompt, setPrompt] = useState('')
  const [outputs, setOutputs] = useState([])

  const handleGenerate = () => {
    if (!prompt) return
    setOutputs(prev => [...prev, { text: prompt, id: Date.now() }])
    setPrompt('')
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white font-sans">
      <Head>
        <title>Hotline AI - MEQUAVIS</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 bg-opacity-70 backdrop-blur border-r border-gray-700 p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-6">Hotline AI</h1>
          <nav className="space-y-3">
            <button className="w-full text-left hover:bg-gray-800 rounded px-3 py-2">Home</button>
            <button className="w-full text-left hover:bg-gray-800 rounded px-3 py-2">Generator</button>
            <button className="w-full text-left hover:bg-gray-800 rounded px-3 py-2">Projects</button>
            <button className="w-full text-left hover:bg-gray-800 rounded px-3 py-2">Files</button>
            <button className="w-full text-left hover:bg-gray-800 rounded px-3 py-2">Multiverse Map</button>
            <button className="w-full text-left hover:bg-gray-800 rounded px-3 py-2">Settings</button>
          </nav>
        </div>
        <div className="border-t border-gray-700 pt-4">
          <p className="text-gray-400">Logged in as <strong>User</strong></p>
        </div>
      </aside>

      {/* Main Panel */}
      <main className="flex-1 p-10 overflow-y-auto">
        <h2 className="text-4xl font-bold mb-8">AI Generator</h2>

        <div className="bg-gray-900 bg-opacity-60 backdrop-blur p-6 rounded-xl border border-gray-700 mb-8">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type your prompt here..."
            className="w-full p-4 h-24 bg-gray-800 text-white rounded-xl border border-gray-700 resize-none mb-4"
          />
          <button
            onClick={handleGenerate}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl hover:scale-105 transform transition"
          >
            Generate
          </button>
        </div>

        <h3 className="text-2xl font-bold mb-4">Generated Outputs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {outputs.map(out => (
            <div key={out.id} className="p-4 bg-white bg-opacity-10 backdrop-blur rounded-xl border border-gray-700">
              <p>{out.text}</p>
              <div className="mt-2 text-sm text-gray-400">[Output Placeholder]</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
