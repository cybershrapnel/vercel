import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <h1 className="text-5xl font-bold mb-4">MEQUAVIS Hotline AI</h1>
        <p className="mb-8">Connect your multiverse. Store your files. Explore your reality.</p>
        <div className="flex space-x-4">
          <Button onClick={() => setLoggedIn(true)}>Login</Button>
          <Button variant="outline" onClick={() => setLoggedIn(true)}>Sign Up</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-white">
      <div className="flex h-16 items-center px-6 border-b border-gray-800">
        <h2 className="text-2xl font-bold">Hotline AI Dashboard</h2>
      </div>
      <div className="flex flex-1">
        <aside className="w-64 bg-gray-900 border-r border-gray-800 p-4">
          <nav className="space-y-4">
            <Button className="w-full">Home</Button>
            <Button className="w-full" variant="outline">Projects</Button>
            <Button className="w-full" variant="outline">Files</Button>
            <Button className="w-full" variant="outline">Multiverse Map</Button>
            <Button className="w-full" variant="outline">Settings</Button>
          </nav>
        </aside>
        <main className="flex-1 p-6 space-y-6">
          <h3 className="text-3xl font-bold">Welcome to your Hotline Node</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4">Project 1 (Placeholder)</CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">Project 2 (Placeholder)</CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">Project 3 (Placeholder)</CardContent>
            </Card>
          </div>
          <div className="mt-6">
            <Button className="text-lg">Generate (Coming Soon)</Button>
          </div>
          <div className="mt-10 p-4 bg-gray-800 rounded-xl">
            <h4 className="text-xl font-bold mb-2">Multiverse Map (Preview)</h4>
            <p className="text-gray-400">Graphical server hierarchy will appear here.</p>
          </div>
        </main>
      </div>
    </div>
  );
}
