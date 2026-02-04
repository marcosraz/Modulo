"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "Allgemeine Anfrage",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log("Form submitted:", formData);
    alert(
      "Vielen Dank für Ihre Nachricht! Wir melden uns in Kürze bei Ihnen."
    );
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-[var(--background)] relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern" />
          <div className="absolute inset-0 gradient-radial" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <span className="tech-label">Kontakt</span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold">
                Sprechen wir über Ihr{" "}
                <span className="text-gradient">Projekt</span>
              </h1>
              <p className="mt-6 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
                Ob Neubau, Sanierung oder individuelle Lösung – wir beraten Sie
                gerne und finden das optimale System für Ihre Anforderungen.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-[var(--background-secondary)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">
                  Kontaktformular
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] focus:border-[var(--modulo-accent)] outline-none text-[var(--foreground)] transition-colors"
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] focus:border-[var(--modulo-accent)] outline-none text-[var(--foreground)] transition-colors"
                        placeholder="ihre@email.at"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] focus:border-[var(--modulo-accent)] outline-none text-[var(--foreground)] transition-colors"
                        placeholder="+43 XXX XXX XX XX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                        Unternehmen
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] focus:border-[var(--modulo-accent)] outline-none text-[var(--foreground)] transition-colors"
                        placeholder="Ihre Firma (optional)"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                      Betreff
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] focus:border-[var(--modulo-accent)] outline-none text-[var(--foreground)] transition-colors"
                    >
                      <option>Allgemeine Anfrage</option>
                      <option>Angebot anfordern</option>
                      <option>Technische Beratung</option>
                      <option>Projektplanung</option>
                      <option>Service & Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                      Nachricht *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] focus:border-[var(--modulo-accent)] outline-none text-[var(--foreground)] transition-colors resize-none"
                      placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full md:w-auto">
                    Nachricht senden
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">
                  Kontaktdaten
                </h2>

                <div className="space-y-8">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center border border-[var(--modulo-accent)]/30 text-[var(--modulo-accent)]">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="tech-label">Telefon</span>
                      <a
                        href="tel:+436767263487"
                        className="block mt-1 text-xl font-semibold text-[var(--foreground)] hover:text-[var(--modulo-accent)] transition-colors"
                      >
                        +43 676 726 34 87
                      </a>
                      <p className="text-sm text-[var(--foreground-muted)] mt-1">
                        Mo-Fr 9:00 - 17:00 Uhr
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center border border-[var(--modulo-accent)]/30 text-[var(--modulo-accent)]">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="tech-label">E-Mail</span>
                      <a
                        href="mailto:info@modullo-parking.at"
                        className="block mt-1 text-xl font-semibold text-[var(--foreground)] hover:text-[var(--modulo-accent)] transition-colors"
                      >
                        info@modullo-parking.at
                      </a>
                      <p className="text-sm text-[var(--foreground-muted)] mt-1">
                        Wir antworten innerhalb von 24h
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center border border-[var(--modulo-accent)]/30 text-[var(--modulo-accent)]">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="tech-label">Standort</span>
                      <p className="mt-1 text-xl font-semibold text-[var(--foreground)]">
                        Österreich
                      </p>
                      <p className="text-sm text-[var(--foreground-muted)] mt-1">
                        Bundesweiter Service
                      </p>
                    </div>
                  </div>
                </div>

                {/* Partner Info */}
                <div className="mt-12 p-6 border border-[var(--border)] bg-[var(--background)]">
                  <span className="tech-label">Teil des Netzwerks</span>
                  <p className="mt-4 text-[var(--foreground-muted)]">
                    Als offizieller Vertriebspartner von MODULO in Österreich
                    sind wir Teil eines europaweiten Netzwerks mit
                    Service-Zentren in Polen, Deutschland und Tschechien.
                  </p>
                  <div className="mt-4 flex gap-4">
                    <a
                      href="https://moduloparking.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--modulo-accent)] hover:underline"
                    >
                      moduloparking.com
                    </a>
                    <a
                      href="https://sdil.cz/modulo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--modulo-accent)] hover:underline"
                    >
                      sdil.cz
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
