import { Moon, Sun, Sparkles, User } from 'lucide-react';

export default function Navbar({ theme = 'system', onThemeChange = () => {} }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-[#00FFC6] to-[#FFD76A] shadow-[0_0_25px_rgba(0,255,198,0.35)] animate-pulse" />
          <div className="leading-tight">
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#00FFC6] to-[#FFD76A] drop-shadow-[0_0_20px_rgba(0,255,198,0.35)]">
                IdeaVault
              </h1>
              <Sparkles size={16} className="text-[#FFD76A]" />
            </div>
            <p className="text-[11px] text-white/60">Capture • Organize • Collaborate</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            onClick={() =>
              onThemeChange(theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light')
            }
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Moon size={16} className="text-[#FFD76A]" />
            ) : theme === 'light' ? (
              <Sun size={16} className="text-[#00FFC6]" />
            ) : (
              <>
                <Sun size={16} className="text-[#00FFC6]" />
                <Moon size={16} className="text-[#FFD76A]" />
              </>
            )}
            <span className="hidden sm:inline text-white/80 capitalize">{theme}</span>
          </button>

          <button className="h-9 w-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 grid place-items-center transition-colors">
            <User size={18} className="text-white/80" />
          </button>
        </div>
      </div>
    </header>
  );
}
