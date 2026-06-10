"use client";

import { useState } from "react";

interface ContactFormProps {
  locale: string;
  dict: any;
}

export default function ContactForm({ locale, dict }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: dict.contact.form.subjects[0],
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log("Form submitted:", formData);
    alert(dict.contact.form.successMessage);
  };

  return (
    <section className="py-24 bg-[var(--background-secondary)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">
              {dict.contact.form.title}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    {dict.contact.form.name} {dict.contact.form.required}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] focus:border-[var(--modulo-accent)] outline-none text-[var(--foreground)] transition-colors"
                    placeholder={dict.contact.form.namePlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    {dict.contact.form.email} {dict.contact.form.required}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] focus:border-[var(--modulo-accent)] outline-none text-[var(--foreground)] transition-colors"
                    placeholder={dict.contact.form.emailPlaceholder}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    {dict.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] focus:border-[var(--modulo-accent)] outline-none text-[var(--foreground)] transition-colors"
                    placeholder={dict.contact.form.phonePlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    {dict.contact.form.company}
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] focus:border-[var(--modulo-accent)] outline-none text-[var(--foreground)] transition-colors"
                    placeholder={dict.contact.form.companyPlaceholder}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  {dict.contact.form.subject}
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] focus:border-[var(--modulo-accent)] outline-none text-[var(--foreground)] transition-colors"
                >
                  {dict.contact.form.subjects.map((subject: string) => (
                    <option key={subject}>{subject}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  {dict.contact.form.message} {dict.contact.form.required}
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] focus:border-[var(--modulo-accent)] outline-none text-[var(--foreground)] transition-colors resize-none"
                  placeholder={dict.contact.form.messagePlaceholder}
                />
              </div>

              <button type="submit" className="btn-primary w-full md:w-auto">
                {dict.contact.form.submit}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">
              {dict.contact.info.title}
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
                  <span className="tech-label">
                    {dict.contact.info.phoneLabel}
                  </span>
                  <a
                    href="tel:+436767263487"
                    className="block mt-1 text-xl font-semibold text-[var(--foreground)] hover:text-[var(--modulo-accent)] transition-colors"
                  >
                    +43 676 726 34 87
                  </a>
                  <p className="text-sm text-[var(--foreground-muted)] mt-1">
                    {dict.contact.info.phoneHours}
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
                  <span className="tech-label">
                    {dict.contact.info.emailLabel}
                  </span>
                  <a
                    href="mailto:info@modullo-parking.at"
                    className="block mt-1 text-xl font-semibold text-[var(--foreground)] hover:text-[var(--modulo-accent)] transition-colors"
                  >
                    info@modullo-parking.at
                  </a>
                  <p className="text-sm text-[var(--foreground-muted)] mt-1">
                    {dict.contact.info.emailResponse}
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
                  <span className="tech-label">
                    {dict.contact.info.locationLabel}
                  </span>
                  <p className="mt-1 text-xl font-semibold text-[var(--foreground)]">
                    {dict.contact.info.locationValue}
                  </p>
                  <p className="text-sm text-[var(--foreground-muted)] mt-1">
                    {dict.contact.info.locationService}
                  </p>
                </div>
              </div>
            </div>

            {/* Partner Info */}
            <div className="mt-12 p-6 border border-[var(--border)] bg-[var(--background)]">
              <span className="tech-label">{dict.contact.network.label}</span>
              <p className="mt-4 text-[var(--foreground-muted)]">
                {dict.contact.network.description}
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
  );
}
