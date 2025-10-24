import { useState } from 'react';
import Navbar from './components/Navbar';
import SplineHero from './components/SplineHero';
import Dashboard from './components/Dashboard';
import BottomSheetAdd from './components/BottomSheetAdd';

export default function App() {
  const [theme, setTheme] = useState('system');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white antialiased">
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -inset-24 bg-[radial-gradient(circle_at_20%_10%,rgba(0,255,198,0.18),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,215,106,0.14),transparent_45%)] blur-2xl" />
      </div>

      <Navbar theme={theme} onThemeChange={setTheme} />

      <main className="relative">
        <section className="h-[60vh] md:h-[70vh] lg:h-[78vh]">
          <SplineHero />
        </section>

        <section className="relative z-10 -mt-10 md:-mt-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Dashboard />
          </div>
        </section>
      </main>

      <BottomSheetAdd />
    </div>
  );
}
