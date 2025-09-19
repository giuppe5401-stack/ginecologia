import React, { useState, useEffect } from "react";

/**
 * Landing Page DEMO per Ginecologo/a (Genova)
 * - Pensata per proporla a un dottore: brand neutro, dati studio "da definire"
 * - CTA unica (prenotazione) con modulo appuntamenti integrato
 * - Layout pulito, responsive, SEO-ready e accessibile
 */

export default function GynecologistLandingGenova() {
  const [mobileCtaVisible, setMobileCtaVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const booking = document.getElementById("booking");
      if (!booking) return;
      const rect = booking.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom >= 0;
      setMobileCtaVisible(!inView);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <HeadTags />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-rose-100 grid place-items-center">
              <span className="text-rose-600 font-bold">G</span>
            </div>
            <span className="font-semibold tracking-tight">Landing Ginecologo/a • Genova (DEMO)</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-rose-600">Chi sono</a>
            <a href="#services" className="hover:text-rose-600">Servizi</a>
            <a href="#faq" className="hover:text-rose-600">FAQ</a>
            <a href="#testimonials" className="hover:text-rose-600">Testimonianze</a>
          </nav>
          <a href="#booking" className="inline-flex items-center justify-center rounded-2xl bg-rose-600 px-4 py-2 text-white font-medium shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2">
            Prenota una visita
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50 to-white pointer-events-none" aria-hidden />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Cura ginecologica su misura, con ascolto e attenzione
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-prose">
              DEMO per medico a Genova: prevenzione, gravidanza, contraccezione ed endometriosi.
              Layout pulito, CTA unica e modulo appuntamenti già pronti.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#booking" className="inline-flex items-center justify-center rounded-2xl bg-rose-600 px-6 py-3 text-white font-semibold shadow hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2">
                Prenota una visita
              </a>
              <a href="#about" className="inline-flex items-center justify-center rounded-2xl px-6 py-3 border border-slate-200 font-semibold hover:bg-slate-50">
                Scopri la pagina
              </a>
            </div>
            <ul className="mt-10 grid sm:grid-cols-3 gap-4 text-sm text-slate-700">
              <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500" aria-hidden></span> Mobile-first & velocissima</li>
              <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500" aria-hidden></span> SEO locale Genova</li>
              <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500" aria-hidden></span> Modulo appuntamenti integrato</li>
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-slate-100 overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1583912267550-c9a2a6a5e09b?q=80&w=1600&auto=format&fit=crop"
                alt="Studio medico accogliente"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4 border border-slate-100 hidden sm:flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-rose-100 grid place-items-center text-rose-600 font-semibold">DEMO</div>
              <div>
                <p className="text-sm font-semibold">Indirizzo studio</p>
                <p className="text-xs text-slate-600">Da definire (verrà aggiunto).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio / Chi sono (neutra) */}
      <section id="about" className="py-16 sm:py-24 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr,1.2fr] gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Chi sono</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              <strong>Nome del Medico</strong> — Ginecologo/a a Genova. Breve biografia da inserire: approccio basato
              sull'<em>ascolto</em>, la <em>chiarezza</em> e il <em>rispetto</em>. Competenze chiave e passioni cliniche
              (es. endometriosi, gravidanza, menopausa, contraccezione).
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
              <li className="flex items-start gap-2"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-rose-500" aria-hidden></span> Specializzazione in Ginecologia e Ostetricia</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-rose-500" aria-hidden></span> Ecografia ginecologica e ostetrica</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-rose-500" aria-hidden></span> Focus: endometriosi & dolore pelvico</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-rose-500" aria-hidden></span> Consulenze fertilità & contraccezione</li>
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/3] rounded-3xl bg-slate-100 overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1600&auto=format&fit=crop"
                alt="Ritratto professionale (se disponibile)"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Servizi / Competenze */}
      <section id="services" className="py-16 sm:py-24 bg-rose-50/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Servizi & Competenze</h2>
          <p className="mt-3 text-slate-700 max-w-prose">Selezione personalizzabile in base al medico.</p>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Visita ginecologica completa", desc: "Valutazione, ecografia, prevenzione (Pap test/HPV)." },
              { title: "Gravidanza e percorso nascita", desc: "Ecografie, screening, accompagnamento personalizzato." },
              { title: "Endometriosi & dolore pelvico", desc: "Diagnosi precoce, terapia e follow-up dedicato." },
              { title: "Contraccezione & fertilità", desc: "Pillola, IUD, impianti, consulenza preconcezionale." },
              { title: "Menopausa serena", desc: "Terapie personalizzate per sintomi e salute a lungo termine." },
              { title: "Infezioni & benessere intimo", desc: "Diagnosi e prevenzione di vaginiti, HPV, candida e cistiti." },
            ].map((s) => (
              <article key={s.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{s.desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <a href="#booking" className="inline-flex items-center justify-center rounded-2xl bg-rose-600 px-6 py-3 text-white font-semibold shadow hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2">
              Prenota una visita
            </a>
          </div>
        </div>
      </section>

      {/* Testimonianze (placeholder) */}
      <section id="testimonials" className="py-16 sm:py-24 bg-rose-50/40 border-y border-rose-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Cosa dicono le pazienti</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { quote: "Mi sono sentita ascoltata e capita.", name: "Sara P." },
              { quote: "Professionale e gentile in ogni fase.", name: "Elena R." },
              { quote: "Disponibile e chiara durante la gravidanza.", name: "Giulia M." },
            ].map((t, i) => (
              <figure key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <blockquote className="text-slate-800">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm text-slate-600">{t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Domande frequenti</h2>
          <div className="mt-6 space-y-3">
            {faqItems.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-slate-200 p-4 open:bg-slate-50">
                <summary className="cursor-pointer font-medium list-none flex items-center justify-between">
                  <span>{f.q}</span>
                  <span className="ml-4 text-slate-400 group-open:rotate-45 transition">＋</span>
                </summary>
                <p className="mt-3 text-slate-700 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA principale: Prenotazione (modulo appuntamenti) */}
      <BookingSection />

      {/* Footer */}
      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Landing Ginecologo/a Genova • DEMO</p>
          <div className="flex items-center gap-5 text-sm">
            <a href="#" className="hover:text-rose-600">Privacy</a>
            <a href="#" className="hover:text-rose-600">Cookie</a>
            <a href="#booking" className="inline-flex items-center justify-center rounded-xl bg-rose-600 px-4 py-2 text-white font-medium shadow-sm hover:bg-rose-700">Prenota</a>
          </div>
        </div>
      </footer>

      {/* Sticky CTA per mobile */}
      {mobileCtaVisible && (
        <div className="fixed bottom-4 inset-x-4 z-40 md:hidden">
          <a href="#booking" className="block text-center rounded-2xl bg-rose-600 px-6 py-3 text-white font-semibold shadow-lg hover:bg-rose-700">
            Prenota una visita
          </a>
        </div>
      )}
    </main>
  );
}

function HeadTags() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'Ginecologo/a a Genova — Visite e Consulenze | Demo',
    medicalSpecialty: 'Gynecology',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Da definire',
      addressLocality: 'Genova',
      addressRegion: 'GE',
      postalCode: '',
      addressCountry: 'IT',
    },
    url: 'https://www.tuodominio.it/ginecologo-genova',
    areaServed: 'Genova e provincia',
    openingHours: 'Mo-Fr 09:00-19:00 Sa 09:00-13:00',
  };

  return (
    <>
      <title>Ginecologo Genova • Prenota una visita | Demo professionale</title>
      <meta name="description" content="Landing page ottimizzata per Ginecologo/a a Genova: prevenzione, gravidanza, contraccezione, endometriosi e menopausa. Prenota una visita tramite modulo appuntamenti." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#f43f5e" />
      <link rel="canonical" href="https://www.tuodominio.it/ginecologo-genova" />
      <meta name="robots" content="index,follow" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}

function BookingSection() {
  const FORM_ENDPOINT = "https://formspree.io/f/XXXXXXXX"; // ⬅️ Sostituisci con il tuo ID Formspree o endpoint personalizzato
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const form = e.currentTarget;
      const formData = Object.fromEntries(new FormData(form).entries());

      // Invia i dati al tuo endpoint (Formspree / Getform / Apps Script / backend)
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Invio non riuscito");

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg("Si è verificato un errore. Riprova o contattaci via WhatsApp.");
    }
  }

  return (
    <section id="booking" className="py-16 sm:py-24 bg-rose-600 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Prenota una visita</h2>
          <p className="mt-3 text-rose-50 max-w-prose">
            Nessuno studio impostato al momento: questa è una <strong>demo per medico a Genova</strong>.
            Una volta definito lo studio, inseriremo indirizzo, orari e contatti ufficiali.
          </p>
          <ul className="mt-6 space-y-2 text-rose-50/90 text-sm">
            <li><strong>Città:</strong> Genova</li>
            <li><strong>Studio:</strong> Da definire</li>
            <li><strong>Contatti:</strong> Verranno aggiunti</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="bg-white text-slate-800 rounded-3xl p-6 shadow-xl border border-rose-100">
          <input type="hidden" name="city" value="Genova" />
          <input type="hidden" name="doctorId" value="DA_DEFINIRE" />
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium">Nome e cognome</label>
              <input id="name" name="name" type="text" required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400" placeholder="Es. Giulia Bianchi" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input id="email" name="email" type="email" required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400" />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-medium">Telefono</label>
              <input id="phone" name="phone" type="tel" inputMode="tel" required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400" placeholder="Es. 333 1234567" />
            </div>
            <div>
              <label htmlFor="date" className="text-sm font-medium">Data preferita</label>
              <input id="date" name="date" type="date" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-sm font-medium">Breve descrizione (opzionale)</label>
              <textarea id="message" name="message" rows={4} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400" placeholder="Come possiamo aiutarti?" />
            </div>
            <div className="sm:col-span-2 flex items-start gap-2 text-sm">
              <input id="privacy" name="privacy" type="checkbox" required className="mt-1" />
              <label htmlFor="privacy">Acconsento al trattamento dei dati per essere ricontattata/o.</label>
            </div>
          </div>
          <button type="submit" disabled={status === "loading"} className="mt-4 w-full rounded-2xl bg-rose-600 px-6 py-3 text-white font-semibold shadow hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-400">
            {status === "loading" ? "Invio..." : "Invia richiesta di prenotazione"}
          </button>
          {status === "success" && (
            <p className="mt-3 text-sm text-emerald-700">Richiesta inviata! Ti contatteremo a breve via email o telefono.</p>
          )}
          {status === "error" && (
            <p className="mt-3 text-sm text-red-700">{errorMsg}</p>
          )}
          <p className="mt-3 text-xs text-slate-500">
            Inviando il modulo accetti la nostra <a href="#" className="underline">Privacy Policy</a>.
          </p>
          <p className="mt-2 text-xs text-slate-500">
            *Suggerimento:* puoi sostituire Formspree con un Google Apps Script per salvare su Google Sheets e inviare una notifica email.
          </p>
        </form>
      </div>
    </section>
  );
}
  }

  return (
    <section id="booking" className="py-16 sm:py-24 bg-rose-600 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Prenota una visita</h2>
          <p className="mt-3 text-rose-50 max-w-prose">
            Nessuno studio impostato al momento: questa è una <strong>demo per medico a Genova</strong>.
            Una volta definito lo studio, inseriremo indirizzo, orari e contatti ufficiali.
          </p>
          <ul className="mt-6 space-y-2 text-rose-50/90 text-sm">
            <li><strong>Città:</strong> Genova</li>
            <li><strong>Studio:</strong> Da definire</li>
            <li><strong>Contatti:</strong> Verranno aggiunti</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="bg-white text-slate-800 rounded-3xl p-6 shadow-xl border border-rose-100">
          <input type="hidden" name="city" value="Genova" />
          <input type="hidden" name="doctorId" value="DA_DEFINIRE" />
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium">Nome e cognome</label>
              <input id="name" name="name" type="text" required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400" placeholder="Es. Giulia Bianchi" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input id="email" name="email" type="email" required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400" placeholder="nome@email.com" />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-medium">Telefono</label>
              <input id="phone" name="phone" type="tel" inputMode="tel" required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400" placeholder="Es. 333 1234567" />
            </div>
            <div>
              <label htmlFor="date" className="text-sm font-medium">Data preferita</label>
              <input id="date" name="date" type="date" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-sm font-medium">Breve descrizione (opzionale)</label>
              <textarea id="message" name="message" rows={4} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400" placeholder="Come possiamo aiutarti?" />
            </div>
            <div className="sm:col-span-2 flex items-start gap-2 text-sm">
              <input id="privacy" name="privacy" type="checkbox" required className="mt-1" />
              <label htmlFor="privacy">Acconsento al trattamento dei dati per essere ricontattata/o.</label>
            </div>
          </div>
          <button type="submit" disabled={status === "loading"} className="mt-4 w-full rounded-2xl bg-rose-600 px-6 py-3 text-white font-semibold shadow hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-400">
            {status === "loading" ? "Invio..." : "Invia richiesta di prenotazione"}
          </button>
          {status === "success" && (
            <p className="mt-3 text-sm text-emerald-700">Richiesta inviata! Ti contatteremo a breve via email o telefono.</p>
          )}
          {status === "error" && (
            <p className="mt-3 text-sm text-red-700">{errorMsg}</p>
          )}
          <p className="mt-3 text-xs text-slate-500">
            Inviando il modulo accetti la nostra <a href="#" className="underline">Privacy Policy</a>.
          </p>
        </form>
      </div>
    </section>
  );
}

const faqItems = [
  { q: "Quanto dura la prima visita?", a: "In media 30–40 minuti, con tempo dedicato a domande e spiegazioni." },
  { q: "Posso prenotare anche online?", a: "Sì, tramite il modulo: verrai ricontattata/o con data e orario disponibili." },
  { q: "Fate ecografie in studio?", a: "Sì, se previste dal medico (dettaglio da confermare)." },
  { q: "Accettate pagamenti con carta?", a: "Impostazione a scelta del medico (da definire)." },
  { q: "Posso venire accompagnata?", a: "Certamente: se preferisci, puoi essere accompagnata da una persona di fiducia." },
];
