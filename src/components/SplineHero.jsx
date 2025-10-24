import Spline from '@splinetool/react-spline';

export default function SplineHero() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/60" />
        <div className="absolute -inset-10 bg-[radial-gradient(circle_at_center,rgba(0,255,198,0.12),transparent_55%)] blur-2xl" />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#00FFC6] via-teal-200 to-[#FFD76A] drop-shadow-[0_0_30px_rgba(0,255,198,0.35)]">
            Your ideas, beautifully captured
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/80">
            Write, draw, speak, or snap. Organize with labels. Collaborate in real-time. AI helps summarize, translate, and remind you—across languages.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <a
              href="#create"
              className="rounded-full px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-[#00FFC6] to-[#FFD76A] text-black shadow-[0_10px_30px_rgba(0,255,198,0.35)] hover:opacity-90 transition"
            >
              New Idea
            </a>
            <a
              href="#notes"
              className="rounded-full px-5 py-2.5 text-sm font-medium border border-white/10 bg-white/5 hover:bg-white/10 text-white/90 backdrop-blur-xl transition"
            >
              View Notes
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
