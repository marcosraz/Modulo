"use client";

import { useState } from "react";
import Link from "next/link";

interface ContactFormProps {
  locale: string;
  dict: any;
}

type Status = "idle" | "sending" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function localePath(path: string, locale: string): string {
  if (locale === "de") return path;
  return `/${locale}${path}`;
}

export default function ContactForm({ locale, dict }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: dict.contact.form.subjects[0],
    message: "",
    website: "", // honeypot
  });
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string; consent?: string }>({});

  const v = dict.contact.form.validation;

  function validate() {
    const next: typeof errors = {};
    if (!formData.name.trim()) next.name = v.name;
    if (!EMAIL_RE.test(formData.email.trim())) next.email = v.email;
    if (formData.message.trim().length < 10) next.message = v.message;
    if (!consent) next.consent = v.consent;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    if (!validate()) {
      setStatus("idle");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, locale }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: dict.contact.form.subjects[0],
        message: "",
        website: "",
      });
      setConsent(false);
      setErrors({});
    } catch {
      setStatus("error");
    }
  };

  // consentText contains a {privacy} placeholder that becomes the policy link.
  const [consentBefore, consentAfter] = String(dict.contact.form.consentText).split("{privacy}");

  const fieldClass =
    "w-full px-4 py-3 bg-[var(--background)] border border-[var(--border-strong)] rounded-[var(--radius-base)] focus:border-[var(--modulo-accent)] text-[var(--foreground)] transition-colors";

  return (
    <section className="py-24 bg-[var(--background-secondary)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">
              {dict.contact.form.title}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    {dict.contact.form.name} <span aria-hidden="true">{dict.contact.form.required}</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    aria-required="true"
                    aria-invalid={errors.name ? "true" : undefined}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={fieldClass}
                    placeholder={dict.contact.form.namePlaceholder}
                  />
                  {errors.name && (
                    <p id="contact-name-error" className="mt-1.5 text-sm text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    {dict.contact.form.email} <span aria-hidden="true">{dict.contact.form.required}</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    aria-required="true"
                    aria-invalid={errors.email ? "true" : undefined}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={fieldClass}
                    placeholder={dict.contact.form.emailPlaceholder}
                  />
                  {errors.email && (
                    <p id="contact-email-error" className="mt-1.5 text-sm text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    {dict.contact.form.phone}
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={fieldClass}
                    placeholder={dict.contact.form.phonePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="contact-company" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    {dict.contact.form.company}
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className={fieldClass}
                    placeholder={dict.contact.form.companyPlaceholder}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  {dict.contact.form.subject}
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={fieldClass}
                >
                  {dict.contact.form.subjects.map((subject: string) => (
                    <option key={subject}>{subject}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  {dict.contact.form.message} <span aria-hidden="true">{dict.contact.form.required}</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  aria-required="true"
                  aria-invalid={errors.message ? "true" : undefined}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${fieldClass} resize-none`}
                  placeholder={dict.contact.form.messagePlaceholder}
                />
                {errors.message && (
                  <p id="contact-message-error" className="mt-1.5 text-sm text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Honeypot (hidden from users + AT) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="contact-website">Website</label>
                <input
                  id="contact-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                />
              </div>

              {/* GDPR consent */}
              <div>
                <label htmlFor="contact-consent" className="flex items-start gap-3 cursor-pointer">
                  <input
                    id="contact-consent"
                    name="consent"
                    type="checkbox"
                    required
                    aria-required="true"
                    aria-invalid={errors.consent ? "true" : undefined}
                    aria-describedby={errors.consent ? "contact-consent-error" : undefined}
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 w-4 h-4 flex-shrink-0 accent-[var(--modulo-accent)]"
                  />
                  <span className="text-sm text-[var(--foreground-muted)]">
                    {consentBefore}
                    <Link
                      href={localePath("/datenschutz", locale)}
                      className="text-[var(--modulo-accent)] hover:underline underline-offset-2"
                      target="_blank"
                    >
                      {dict.contact.form.consentLinkText}
                    </Link>
                    {consentAfter} <span aria-hidden="true">{dict.contact.form.required}</span>
                  </span>
                </label>
                {errors.consent && (
                  <p id="contact-consent-error" className="mt-1.5 text-sm text-red-400">
                    {errors.consent}
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                >
                  {status === "sending" ? dict.contact.form.sending : dict.contact.form.submit}
                </button>

                {status === "success" && (
                  <p role="status" aria-live="polite" className="text-sm text-[var(--modulo-accent)] flex items-center gap-2">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {dict.contact.form.successMessage}
                  </p>
                )}
                {status === "error" && (
                  <p role="alert" className="text-sm text-red-400">
                    {dict.contact.form.errorMessage}
                  </p>
                )}
              </div>
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
                <div className="w-12 h-12 flex items-center justify-center rounded-[var(--radius-base)] border border-[var(--modulo-accent)]/30 text-[var(--modulo-accent)]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="tech-label">{dict.contact.info.phoneLabel}</span>
                  <a
                    href={dict.common.contactInfo.phoneHref}
                    className="block mt-1 text-xl font-semibold text-[var(--foreground)] hover:text-[var(--modulo-accent)] transition-colors"
                  >
                    {dict.common.contactInfo.phone}
                  </a>
                  <p className="text-sm text-[var(--foreground-muted)] mt-1">
                    {dict.contact.info.phoneHours}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-[var(--radius-base)] border border-[var(--modulo-accent)]/30 text-[var(--modulo-accent)]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="tech-label">{dict.contact.info.emailLabel}</span>
                  <a
                    href={`mailto:${dict.common.contactInfo.email}`}
                    className="block mt-1 text-xl font-semibold text-[var(--foreground)] hover:text-[var(--modulo-accent)] transition-colors break-all"
                  >
                    {dict.common.contactInfo.email}
                  </a>
                  <p className="text-sm text-[var(--foreground-muted)] mt-1">
                    {dict.contact.info.emailResponse}
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-[var(--radius-base)] border border-[var(--modulo-accent)]/30 text-[var(--modulo-accent)]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="tech-label">{dict.contact.info.locationLabel}</span>
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
            <div className="mt-12 p-6 card card--flat">
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
