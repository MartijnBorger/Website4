'use client';
export default function PrivacyModal({ open, onClose }: { open: boolean; onClose: () => void; }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60" role="dialog" aria-modal="true">
      <div className="w-full max-w-3xl rounded-2xl bg-white overflow-hidden shadow-xl">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-semibold">Privacyverklaring</h3>
          <button onClick={onClose} className="text-sm px-3 py-1 rounded-xl border">Sluiten</button>
        </div>
        <div className="p-6 space-y-4 text-sm text-gray-700">
          <p>Deze privacyverklaring beschrijft hoe BOM Financial Services persoonsgegevens verwerkt in het kader van onze dienstverlening rond lijfrente-overdrachten.</p>
          <h4 className="font-medium">Verwerkingsverantwoordelijke</h4>
          <p>BOM Financial Services. Contact: info@bomfinancialservices.nl.</p>
          <h4 className="font-medium">Welke gegevens</h4>
          <p>Naam, contactgegevens, dossierinformatie die noodzakelijk is voor advies en overdracht, en communicatiegegevens.</p>
          <h4 className="font-medium">Doelen</h4>
          <p>Contact en planning, uitvoeren van het advies- en overdrachtsproces, rapportage aan de betrokken adviseur, voldoen aan wettelijke verplichtingen.</p>
          <h4 className="font-medium">Grondslagen</h4>
          <p>Uitvoering overeenkomst, gerechtvaardigd belang en wettelijke verplichtingen.</p>
          <h4 className="font-medium">Bewaartermijnen</h4>
          <p>Niet langer dan noodzakelijk, conform wettelijke termijnen.</p>
          <h4 className="font-medium">Delen met derden</h4>
          <p>Alleen met betrokken financiële instellingen en verwerkers die een verwerkersovereenkomst hebben en adequate beveiliging bieden.</p>
          <h4 className="font-medium">Rechten</h4>
          <p>Recht op inzage, rectificatie, verwijdering, beperking, bezwaar en dataportabiliteit. Mail info@bomfinancialservices.nl.</p>
          <h4 className="font-medium">Beveiliging</h4>
          <p>We nemen passende technische en organisatorische maatregelen om misbruik, verlies en onbevoegde toegang te voorkomen.</p>
          <h4 className="font-medium">Cookies</h4>
          <p>We gebruiken alleen functionele en optioneel analytische cookies. Analytische cookies plaatsen we na toestemming.</p>
          <p className="text-gray-500">Sjabloon, laat juridisch toetsen.</p>
        </div>
      </div>
    </div>
  );
}
