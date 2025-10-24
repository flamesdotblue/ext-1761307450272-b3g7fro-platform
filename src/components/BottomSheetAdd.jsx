import * as Dialog from '@radix-ui/react-dialog';
import { Camera, CheckSquare, FileText, Mic, Pencil, Plus, Image as Img } from 'lucide-react';
import { useState } from 'react';

const types = [
  { key: 'text', label: 'Text', icon: FileText, desc: 'Quick note with rich text' },
  { key: 'checklist', label: 'Checklist', icon: CheckSquare, desc: 'Tasks and todos' },
  { key: 'image', label: 'Image', icon: Img, desc: 'Attach or scan photos' },
  { key: 'drawing', label: 'Drawing', icon: Pencil, desc: 'Sketch your idea' },
  { key: 'voice', label: 'Voice', icon: Mic, desc: 'Record a voice note' },
  { key: 'camera', label: 'Camera', icon: Camera, desc: 'Capture with camera' },
];

export default function BottomSheetAdd() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          id="create"
          className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 h-14 w-14 rounded-full bg-gradient-to-br from-[#00FFC6] to-[#FFD76A] text-black shadow-[0_10px_40px_rgba(0,255,198,0.5)] hover:opacity-95 active:scale-95 transition-transform"
          aria-label="Create new idea"
        >
          <Plus size={28} />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed inset-x-0 bottom-0 rounded-t-3xl bg-gray-900/95 border-t border-white/10 backdrop-blur-xl p-4 sm:p-6 shadow-[0_-10px_60px_rgba(0,0,0,0.6)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:slide-in-from-bottom-10 data-[state=closed]:slide-out-to-bottom-10">
          <div className="mx-auto max-w-2xl">
            <div className="mx-auto h-1 w-12 rounded-full bg-white/20" />

            <div className="mt-4 flex items-start justify-between">
              <div>
                <Dialog.Title className="text-lg font-semibold text-white/90">Add new idea</Dialog.Title>
                <Dialog.Description className="text-sm text-white/60 mt-1">
                  Choose how you want to capture it
                </Dialog.Description>
              </div>
              <div className="h-9 px-3 rounded-full grid place-items-center text-xs font-medium bg-white/5 border border-white/10">
                Apple-style • Glow UI
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {types.map((t) => (
                <button
                  key={t.key}
                  className="group relative flex items-center gap-3 rounded-2xl p-4 bg-white/5 hover:bg-white/10 border border-white/10 transition text-left"
                  onClick={() => setOpen(false)}
                >
                  <div className="h-11 w-11 rounded-xl grid place-items-center bg-gradient-to-br from-[#00FFC6]/30 to-[#FFD76A]/30 text-black shadow-[inset_0_0_40px_rgba(255,255,255,0.06)]">
                    <t.icon className="text-black" size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-white/90">{t.label}</div>
                    <div className="text-sm text-white/60">{t.desc}</div>
                  </div>
                  <div className="absolute inset-0 -z-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,198,0.2),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,215,106,0.2),transparent_35%)]" aria-hidden />
                </button>
              ))}
            </div>

            <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
              <div className="text-xs text-white/60">
                Voice transcription: Gujarati • Hindi • English
              </div>
              <Dialog.Close asChild>
                <button className="rounded-full px-4 py-2 text-sm bg-white/10 hover:bg-white/15 border border-white/15 text-white/80">Close</button>
              </Dialog.Close>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
