'use client';
import { useState } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !localStorage.getItem('cookie-consent');
  });
  if (!visible) return null;
  return (
    <div className="fixed bottom-4 inset-x-0 z-50 px-4">
      <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white shadow-lg p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3">
        <p className="text-sm text-gray-700">
          We gebruiken analytische cookies om de site te verbeteren. Functionele cookies zijn nodig voor de werking van de site.
        </p>
        <div className="flex gap-2 sm:ml-auto">
          <button onClick={() => { localStorage.setItem('cookie-consent', 'declined'); setVisible(false); }} className="rounded-xl border px-3 py-2 text-sm">Weiger</button>
          <button onClick={() => { localStorage.setItem('cookie-consent', 'accepted'); setVisible(false); }} className="rounded-xl px-3 py-2 text-sm text-white bg-brand-teal">Accepteer</button>
        </div>
      </div>
    </div>
  );
}
