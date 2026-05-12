"use client";

import { type FormEvent, useId, useState } from "react";
import Button from "@/components/ui/Button";

const SUBJECTS = [
  "Product preorder enquiry",
  "Service enquiry",
  "Partnership",
  "Press & media",
  "Other",
] as const;

type Subject = (typeof SUBJECTS)[number];
type Status = "idle" | "sending" | "success" | "error";

interface FormState {
  name: string;
  organisation: string;
  email: string;
  subject: Subject | "";
  message: string;
}

const INITIAL_STATE: FormState = {
  name: "",
  organisation: "",
  email: "",
  subject: "",
  message: "",
};

/* Inputs follow design-system.md §6.2 + §7.2:
   - 48px default height
   - 1px gray-200 border at rest, 1.5px ink border on focus (no glow ring) */

const FIELD_BASE =
  "block w-full rounded-md border border-gray-200 bg-bg px-3 text-body text-ink placeholder:text-text-subtle transition-colors duration-[160ms] hover:border-gray-300 focus:border-ink focus:border-[1.5px] focus:outline-none";

const INPUT_CLASSES = `${FIELD_BASE} h-12`;
const TEXTAREA_CLASSES = `${FIELD_BASE} py-3 min-h-[140px] resize-y`;
const LABEL_CLASSES = "block text-body-sm font-medium text-ink mb-1.5";

export default function ContactForm() {
  const [state, setState] = useState<FormState>(INITIAL_STATE);
  const [status, setStatus] = useState<Status>("idle");
  const ids = {
    name: useId(),
    organisation: useId(),
    email: useId(),
    subject: useId(),
    message: useId(),
    legend: useId(),
  };

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((s) => ({ ...s, [key]: value }));
    if (status !== "idle") setStatus("idle");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (
      !state.name.trim() ||
      !state.email.trim() ||
      !state.subject ||
      !state.message.trim()
    ) {
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setState(INITIAL_STATE);
    } catch {
      setStatus("error");
    }
  }

  const statusMessage =
    status === "success"
      ? "Thanks — we'll get back to you within two business days."
      : status === "error"
        ? "Something went wrong sending your message. Please email info@cervixel.com directly."
        : "";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <p id={ids.legend} className="text-caption text-muted">
        <span aria-hidden="true">*</span> required
      </p>

      <div>
        <label htmlFor={ids.name} className={LABEL_CLASSES}>
          Name <span aria-hidden="true">*</span>
          <span className="sr-only"> (required)</span>
        </label>
        <input
          id={ids.name}
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-required="true"
          value={state.name}
          onChange={(e) => update("name", e.target.value)}
          className={INPUT_CLASSES}
          placeholder="Dr. Aušra Petraitė"
        />
      </div>

      <div>
        <label htmlFor={ids.organisation} className={LABEL_CLASSES}>
          Organisation <span className="text-muted">(optional)</span>
        </label>
        <input
          id={ids.organisation}
          name="organisation"
          type="text"
          autoComplete="organization"
          value={state.organisation}
          onChange={(e) => update("organisation", e.target.value)}
          className={INPUT_CLASSES}
          placeholder="Karolinska Institute"
        />
      </div>

      <div>
        <label htmlFor={ids.email} className={LABEL_CLASSES}>
          Email <span aria-hidden="true">*</span>
          <span className="sr-only"> (required)</span>
        </label>
        <input
          id={ids.email}
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-required="true"
          value={state.email}
          onChange={(e) => update("email", e.target.value)}
          className={INPUT_CLASSES}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor={ids.subject} className={LABEL_CLASSES}>
          Subject <span aria-hidden="true">*</span>
          <span className="sr-only"> (required)</span>
        </label>
        <select
          id={ids.subject}
          name="subject"
          required
          aria-required="true"
          value={state.subject}
          onChange={(e) => update("subject", e.target.value as Subject | "")}
          className={INPUT_CLASSES}
        >
          <option value="" disabled>
            Select a subject
          </option>
          {SUBJECTS.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={ids.message} className={LABEL_CLASSES}>
          Message <span aria-hidden="true">*</span>
          <span className="sr-only"> (required)</span>
        </label>
        <textarea
          id={ids.message}
          name="message"
          rows={6}
          required
          aria-required="true"
          value={state.message}
          onChange={(e) => update("message", e.target.value)}
          className={TEXTAREA_CLASSES}
          placeholder="Tell us about your enquiry, organisation, and timing."
        />
      </div>

      <div className="flex flex-col items-start gap-4">
  <Button
    type="submit"
    variant="primary"
    size="lg"
    disabled={status === "sending"}
  >
    {status === "sending" ? "Sending…" : "Send message"}
  </Button>
  
  <p
    role="status"
    aria-live="polite"
    className="text-body-sm text-muted min-h-[1.5rem]"
  >
    {statusMessage}
  </p>
</div>
    </form>
  );
}
