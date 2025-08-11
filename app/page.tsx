'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart as LineChartIcon, Users, Shield, Timer, Handshake, CheckCircle } from 'lucide-react';
import CookieBanner from '../components/CookieBanner';
import PrivacyModal from '../components/PrivacyModal';
import LogoMark from '../components/LogoMark';

const CALENDLY_URL = 'https://calendly.com/voorbeeld/intake-20min'; // vervang met echte link

const BRAND = {
  name: 'BOM Financial Services',
  tagline: 'Partner in klantbeheer: wij activeren lijfrentedossiers en begeleiden jouw klanten.',
  primaryCta: 'Plan een gratis intake',
  secondaryCta: 'Hoe werkt het',
  contactEmail: 'info@bomfinancialservices.nl'
};

const BENEFITS = [
  { icon: LineChartIcon, title: 'Meer rendement', text: 'We activeren slapende lijfrentedossiers en zetten ze om in vervolgacties, omzet en langdurige relaties.' },
  { icon: Users, title: 'Betere klantbegeleiding', text: 'Persoonlijk, begrijpelijk en vlot. Ervaren specialisten ondersteunen jouw klant wanneer dat nodig is.' },
  { icon: Handshake, title: 'Naadloze samenwerking', text: 'We sluiten aan op jouw werkwijze en versterken je klantproces rondom lijfrenteadvies.' },
  { icon: Timer, title: 'Efficiëntie', text: 'Je bespaart tijd en verhoogt tegelijk het serviceniveau richting klanten.' },
  { icon: CheckCircle, title: 'Eigen naam en stijl', text: 'Communicatie in jouw tone of voice. Klanten ervaren continuïteit en vertrouwen.' },
  { icon: Shield, title: 'Compliance geborgd', text: 'Conform wet- en regelgeving en AVG. Elk dossier wordt correct behandeld.' },
];

const STEPS = [
  { num: 1, title: 'Signalering', text: 'Relevante lijfrentedossiers identificeren en eerste persoonlijke e-mail sturen in jouw naam.' },
  { num: 2, title: 'Contact en plannen', text: 'Nabellen en verdiepend gesprek plannen om situatie en wensen te verkennen.' },
  { num: 3, title: 'Advies', text: 'Mogelijkheden bespreken en begeleiden naar een passende oplossing.' },
  { num: 4, title: 'Overdracht', text: 'PSK regelen, afstemming met partijen en heldere rapportage.' },
];

export default function Page() {
  const [email, setEmail] = useState('');
  const [showCalendly, setShowCalendly] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <div id="home">
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur border-b border-gray-100 bg-white/85">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-xl flex items-center gap-2 text-brand-navy">
            {/* Vervang door <img src="/logo.png" alt="BOM Financial Services" className="h-7 w-auto"/> zodra je logo plaatst */}
            <LogoMark />
            {BRAND.name}
          </a>
          <nav className="hidden md:flex gap-6 text-sm text-brand-navy">
            <a href="#service" className="hover:opacity-80">Dienst</a>
            <a href="#benefits" className="hover:opacity-80">Waarom BOM</a>
            <a href="#team" className="hover:opacity-80">Team</a>
            <a href="#careers" className="hover:opacity-80">Werken bij</a>
            <a href="#faq" className="hover:opacity-80">FAQ</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>
          <button onClick={() => setShowCalendly(true)} className="rounded-2xl text-white text-sm px-4 py-2 shadow-sm hover:opacity-90 bg-brand-teal">
            {BRAND.primaryCta}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-grayBg to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-brand-navy">BOM versterkt het klantproces</h1>
            <p className="mt-4 text-gray-700 text-lg">Als financieel adviseur wil je klanten goed begeleiden, maar tijd is schaars. BOM neemt klantcontact rondom lijfrentetrajecten uit handen: mailen, nabellen, plannen, adviseren en administratief afhandelen.</p>
            <div className="mt-8 flex gap-3">
              <button onClick={() => setShowCalendly(true)} className="rounded-2xl text-white px-5 py-3 text-sm shadow-sm hover:opacity-90 bg-brand-teal">{BRAND.primaryCta}</button>
              <a href="#service" className="rounded-2xl border px-5 py-3 text-sm hover:bg-gray-50 border-brand-navy text-brand-navy">{BRAND.secondaryCta}</a>
            </div>
            <p className="mt-6 text-sm text-gray-600">Of mail direct: <a className="underline" href={`mailto:${BRAND.contactEmail}`}>{BRAND.contactEmail}</a></p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="aspect-video rounded-2xl shadow-inner border flex items-center justify-center bg-brand-grayBg border-gray-200">
              <p className="text-sm text-gray-500 px-6">Plaats hier jullie logo als `/public/logo.png` of een hero-foto.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service */}
      <section id="service" className="py-16 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-brand-navy">Van slapend dossier naar actieve relatie</h2>
          <p className="mt-4 text-gray-700 max-w-3xl">We nemen het volledige proces van lijfrente-overdracht uit handen en werken in lijn met jouw kantoor. Van eerste klantcontact en het plannen van het adviesgesprek tot en met de PSK-documentatie en afstemming met betrokken partijen. Jij blijft op de hoogte met heldere rapportages.</p>
          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {STEPS.map((s) => (
              <div key={s.num} className="rounded-2xl border border-gray-100 p-6 bg-white shadow-sm">
                <div className="text-sm font-semibold text-brand-teal">Stap {s.num}</div>
                <h3 className="mt-1 font-medium text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-brand-navy">Waarom BOM</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((f) => (
              <div key={f.title} className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm">
                <div className="mb-3"><f.icon className="h-6 w-6" /></div>
                <h3 className="font-medium text-lg">{f.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{f.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl p-8 border shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-brand-navy border-brand-navy">
            <div className="text-white">
              <h3 className="text-xl font-semibold">Klaar om aan de slag te gaan?</h3>
              <p className="mt-1 text-white/90 text-sm max-w-2xl">Plan een gratis intake van 20 minuten. We laten zien hoe we jouw dienstverlening versterken en kansen in jouw portefeuille verzilveren.</p>
            </div>
            <button onClick={() => setShowCalendly(true)} className="rounded-2xl px-5 py-3 text-sm font-medium bg-brand-orange text-gray-800">{BRAND.primaryCta}</button>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-16 border-t border-gray-100 bg-brand-grayBg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-brand-navy">Het team achter BOM</h2>
          <p className="mt-4 text-gray-700 max-w-3xl">BOM is gestart door Sjoerd van Opstal en Joost Molkenboer. Wij combineren inhoudelijke kennis met een praktische aanpak en focus op lijfrentes.</p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm">
              <h3 className="font-medium text-lg">Sjoerd van Opstal</h3>
              <p className="mt-2 text-sm text-gray-600">Klantgericht specialist met Wft Basis en Wft Vermogen. Richt zich op vermogensopbouw, sparen, beleggen en financiële planning.</p>
            </div>
            <div className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm">
              <h3 className="font-medium text-lg">Joost Molkenboer</h3>
              <p className="mt-2 text-sm text-gray-600">Ondernemer met focus op relatiebouw en ondersteuning van de adviseur. Beschikt over Wft Basis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-100 p-8 bg-white shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-navy">Werken bij BOM</h2>
            <p className="mt-3 text-gray-700">We groeien en zoeken collega’s die energie krijgen van klantcontact en het ontzorgen van adviseurs.</p>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-100 p-6">
                <h3 className="font-medium">Klantcoördinator Lijfrente (parttime)</h3>
                <ul className="mt-2 text-sm text-gray-600 list-disc pl-5">
                  <li>Opvolgen van klantdossiers en plannen van gesprekken</li>
                  <li>Heldere verslaglegging en rapportage</li>
                  <li>Affiniteit met financiële dienstverlening</li>
                </ul>
                <a href="#contact" className="inline-block mt-4 rounded-2xl border px-4 py-2 text-sm border-brand-navy text-brand-navy">Solliciteer</a>
              </div>
              <div className="rounded-2xl border border-gray-100 p-6">
                <h3 className="font-medium">Junior Lijfrente Specialist</h3>
                <ul className="mt-2 text-sm text-gray-600 list-disc pl-5">
                  <li>Ondersteunen van adviesgesprekken</li>
                  <li>Voorbereiden PSK en overdrachtsdossiers</li>
                  <li>Wft Basis, Wft Vermogen is een plus</li>
                </ul>
                <a href="#contact" className="inline-block mt-4 rounded-2xl border px-4 py-2 text-sm border-brand-navy text-brand-navy">Solliciteer</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-navy">Veelgestelde vragen</h2>
            <p className="mt-2 text-gray-700 text-sm">Klik op een vraag om het antwoord te bekijken.</p>
          </div>
          <div className="space-y-3">
            {[{q:'Hoe communiceert BOM met mijn klanten?',a:'We nemen jouw toon en huisstijl over. Alle communicatie verloopt onder jouw naam en afspraken.'},{q:'Wat kost de service?',a:'Helder tarief per overdracht. Vraag een vrijblijvende intake aan voor een voorstel op maat.'},{q:'Blijf ik tijdens het proces op de hoogte?',a:'Ja, je ontvangt proactief updates bij iedere mijlpaal en duidelijke rapportages.'}].map((item,i)=> (
              <details key={i} className="rounded-2xl border border-gray-200 bg-white p-5">
                <summary className="cursor-pointer list-none flex items-center justify-between"><span className="font-medium">{item.q}</span><span className="text-gray-400">+</span></summary>
                <p className="mt-3 text-sm text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 border-t border-gray-100 bg-brand-grayBg">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-100 p-8 bg-white shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-navy">Neem contact op</h2>
            <form onSubmit={(e)=>{e.preventDefault(); alert(`Bedankt! We nemen snel contact op via ${email}.`); setEmail(''); setDate(''); setTime('');}} className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium">E-mail</label>
                <input required type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="jij@kantoor.nl" className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2" />
              </div>
              <div className="grid grid-cols-2 gap-4 sm:col-span-2">
                <div>
                  <label className="block text-sm font-medium">Voorkeursdatum</label>
                  <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium">Tijd</label>
                  <input type="time" value={time} onChange={(e)=>setTime(e.target.value)} className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium">Bericht</label>
                <textarea placeholder="Waar kunnen we mee helpen?" className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 h-28 focus:outline-none focus:ring-2" />
              </div>
              <div className="sm:col-span-2 flex items-center justify-between">
                <p className="text-sm text-gray-500">Of mail naar {BRAND.contactEmail}</p>
                <button type="submit" className="rounded-2xl px-4 py-2 text-sm shadow-sm hover:opacity-90 text-white bg-brand-teal">Verzenden</button>
              </div>
            </form>
            <div className="mt-6 flex gap-3">
              <button onClick={() => setShowCalendly(true)} className="rounded-2xl border px-4 py-2 text-sm border-brand-navy text-brand-navy">Of boek direct via Calendly</button>
              <button onClick={() => setShowPrivacy(true)} className="rounded-2xl border px-4 py-2 text-sm border-brand-navy text-brand-navy">Privacyverklaring</button>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly modal */}
      {showCalendly && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60" role="dialog" aria-modal="true">
          <div className="w-full max-w-3xl rounded-2xl bg-white overflow-hidden shadow-xl">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-semibold">Plan een intake</h3>
              <button onClick={() => setShowCalendly(false)} className="text-sm px-3 py-1 rounded-xl border">Sluiten</button>
            </div>
            <div className="aspect-video w-full">
              <iframe title="Calendly" src={CALENDLY_URL} className="w-full h-full" frameBorder={0} />
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-10 border-t border-gray-100 bg-brand-grayBg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {BRAND.name}. Alle rechten voorbehouden.</p>
          <div className="flex gap-4">
            <button onClick={() => setShowPrivacy(true)} className="hover:text-gray-700">Privacy</button>
            <a href="#" className="hover:text-gray-700">Voorwaarden</a>
          </div>
        </div>
      </footer>

      <PrivacyModal open={showPrivacy} onClose={() => setShowPrivacy(false)} />
      <CookieBanner />
    </div>
  );
}
