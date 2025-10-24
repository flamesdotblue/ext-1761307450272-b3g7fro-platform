import { useMemo, useState } from 'react';
import { Pin, Grid3X3, List, Search, Clock } from 'lucide-react';

const sampleNotes = [
  {
    id: 'n1',
    title: 'Gujarat field study insights',
    content: 'Voice transcript highlights in Gujarati + English mixed. Explore multilingual tags.',
    labels: ['research', 'gujarati'],
    pinned: true,
    updatedAt: new Date().toISOString(),
    color: 'from-emerald-400/20 to-teal-300/10',
  },
  {
    id: 'n2',
    title: 'Camera concept sketches',
    content: 'Low-fi camera frames for onboarding. Add gesture hints and haptics.',
    labels: ['design', 'sketches'],
    pinned: true,
    updatedAt: new Date().toISOString(),
    color: 'from-amber-300/20 to-yellow-200/10',
  },
  {
    id: 'n3',
    title: 'Retail pitch deck bullets',
    content: 'Summarize AI advantages. Translation demo, 2FA, Apple-style date wheel.',
    labels: ['sales', 'ai'],
    pinned: false,
    updatedAt: new Date().toISOString(),
    color: 'from-cyan-300/20 to-sky-200/10',
  },
  {
    id: 'n4',
    title: 'Weekend checklist',
    content: 'Grocery, run 5k, plan prototype test, record voice memo in Hindi.',
    labels: ['personal', 'tasks'],
    pinned: false,
    updatedAt: new Date().toISOString(),
    color: 'from-fuchsia-300/20 to-pink-200/10',
  },
];

function NoteCard({ note }) {
  return (
    <article className="group relative rounded-2xl p-4 backdrop-blur-xl border border-white/10 bg-white/5 hover:bg-white/10 transition shadow-[0_0_30px_rgba(0,255,198,0.08)]">
      {note.pinned && (
        <div className="absolute -top-2 -right-2 rounded-full bg-gradient-to-br from-[#FFD76A] to-amber-400 text-black px-2 py-1 text-[10px] font-semibold shadow-md">
          <div className="flex items-center gap-1"><Pin size={12} />Pinned</div>
        </div>
      )}
      <div className={`absolute inset-0 -z-0 rounded-2xl bg-gradient-to-br ${note.color} opacity-40 blur-2xl`} aria-hidden />
      <h3 className="relative z-10 font-medium text-white/95 line-clamp-1">
        {note.title}
      </h3>
      <p className="relative z-10 mt-1 text-sm text-white/70 line-clamp-2">{note.content}</p>
      <div className="relative z-10 mt-3 flex items-center gap-2 flex-wrap">
        {note.labels.map((l) => (
          <span
            key={l}
            className="text-[10px] uppercase tracking-wide px-2 py-1 rounded-full bg-white/10 border border-white/10 text-white/70"
          >
            {l}
          </span>
        ))}
      </div>
      <div className="relative z-10 mt-3 flex items-center gap-2 text-xs text-white/50">
        <Clock size={14} />
        <span>{new Date(note.updatedAt).toLocaleString()}</span>
      </div>
    </article>
  );
}

export default function Dashboard() {
  const [layout, setLayout] = useState('grid');
  const [query, setQuery] = useState('');

  const pinned = useMemo(() => sampleNotes.filter((n) => n.pinned), []);
  const all = useMemo(() => {
    const base = sampleNotes;
    if (!query) return base;
    return base.filter(
      (n) =>
        n.title.toLowerCase().includes(query.toLowerCase()) ||
        n.content.toLowerCase().includes(query.toLowerCase()) ||
        n.labels.some((l) => l.toLowerCase().includes(query.toLowerCase()))
    );
  }, [query]);

  return (
    <div id="notes" className="w-full">
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" size={16} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search ideas, labels, content..."
            className="w-full pl-9 pr-3 h-10 rounded-xl bg-white/5 border border-white/10 text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-2 ring-[#00FFC6]/40"
          />
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <button
            className={`h-10 w-10 rounded-xl grid place-items-center border transition ${layout === 'grid' ? 'bg-white/10 border-white/20' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
            onClick={() => setLayout('grid')}
            aria-label="Grid layout"
          >
            <Grid3X3 size={18} />
          </button>
          <button
            className={`h-10 w-10 rounded-xl grid place-items-center border transition ${layout === 'list' ? 'bg-white/10 border-white/20' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
            onClick={() => setLayout('list')}
            aria-label="List layout"
          >
            <List size={18} />
          </button>
        </div>
      </div>

      {pinned.length > 0 && (
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-white/80 tracking-wide">Pinned</h4>
          </div>
          <div className="mt-3 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-1">
            {pinned.map((n) => (
              <div key={n.id} className="snap-center min-w-[280px] max-w-[280px]">
                <NoteCard note={n} />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold text-white/80 tracking-wide">All Notes</h4>
          <div className="sm:hidden flex items-center gap-2" aria-hidden>
            <button
              className={`h-9 w-9 rounded-lg grid place-items-center border transition ${layout === 'grid' ? 'bg-white/10 border-white/20' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
              onClick={() => setLayout('grid')}
            >
              <Grid3X3 size={16} />
            </button>
            <button
              className={`h-9 w-9 rounded-lg grid place-items-center border transition ${layout === 'list' ? 'bg-white/10 border-white/20' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
              onClick={() => setLayout('list')}
            >
              <List size={16} />
            </button>
          </div>
        </div>

        {layout === 'grid' ? (
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {all.map((n) => (
              <NoteCard key={n.id} note={n} />
            ))}
          </div>
        ) : (
          <div className="mt-3 flex flex-col gap-3">
            {all.map((n) => (
              <div key={n.id} className="">
                <NoteCard note={n} />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="h-24" />
    </div>
  );
}
