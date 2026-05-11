"use client";

import { type FormEvent, useId, useState } from "react";
import Button from "@/components/ui/Button";

const ORG_TYPES = [
  "Private clinic",
  "Distributor",
  "Charity or health organisation",
  "Government or public-health programme",
] as const;

const PACKAGES = [
  "100 units",
  "1,000 units",
  "5,000 units",
  "10,000 units",
  "More than 10,000 units",
] as const;

type OrgType = (typeof ORG_TYPES)[number];
type Package = (typeof PACKAGES)[number];
type Status = "idle" | "sending" | "success" | "error";

interface PreorderFormState {
  name: string;
  organisation: string;
  orgType: OrgType | "";
  country: string;
  email: string;
  phone: string;
  package: Package | "";
  message: string;
}

const INITIAL_STATE: PreorderFormState = {
  name: "",
  organisation: "",
  orgType: "",
  country: "",
  email: "",
  phone: "",
  package: "",
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

export default function PreorderForm() {
  const [state, setState] = useState<PreorderFormState>(INITIAL_STATE);
  const [status, setStatus] = useState<Status>("idle");
  const ids = {
    name: useId(),
    organisation: useId(),
    orgType: useId(),
    country: useId(),
    email: useId(),
    phone: useId(),
    package: useId(),
    message: useId(),
    legend: useId(),
  };

  function update<K extends keyof PreorderFormState>(
    key: K,
    value: PreorderFormState[K],
  ) {
    setState((s) => ({ ...s, [key]: value }));
    if (status !== "idle") setStatus("idle");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (
      !state.name.trim() ||
      !state.organisation.trim() ||
      !state.orgType ||
      !state.country.trim() ||
      !state.email.trim() ||
      !state.package
    ) {
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/preorder", {
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
      ? "Thanks — your preorder enquiry has been received. We'll contact you within five business days to confirm allocation, pricing, and next steps."
      : status === "error"
        ? "Something went wrong sending your enquiry. Please email john@cervixel.com directly."
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
          Organisation <span aria-hidden="true">*</span>
          <span className="sr-only"> (required)</span>
        </label>
        <input
          id={ids.organisation}
          name="organisation"
          type="text"
          autoComplete="organization"
          required
          aria-required="true"
          value={state.organisation}
          onChange={(e) => update("organisation", e.target.value)}
          className={INPUT_CLASSES}
          placeholder="Karolinska Institute"
        />
      </div>

      <div>
        <label htmlFor={ids.orgType} className={LABEL_CLASSES}>
          Organisation type <span aria-hidden="true">*</span>
          <span className="sr-only"> (required)</span>
        </label>
        <select
          id={ids.orgType}
          name="orgType"
          required
          aria-required="true"
          value={state.orgType}
          onChange={(e) => update("orgType", e.target.value as OrgType | "")}
          className={INPUT_CLASSES}
        >
          <option value="" disabled>
            Select a type
          </option>
          {ORG_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={ids.country} className={LABEL_CLASSES}>
          Country <span aria-hidden="true">*</span>
          <span className="sr-only"> (required)</span>
        </label>
        <input
          id={ids.country}
          name="country"
          type="text"
          autoComplete="country-name"
          required
          aria-required="true"
          value={state.country}
          onChange={(e) => update("country", e.target.value)}
          className={INPUT_CLASSES}
          placeholder="Lithuania"
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
        <label htmlFor={ids.phone} className={LABEL_CLASSES}>
          Phone <span className="text-muted">(optional)</span>
        </label>
        <input
          id={ids.phone}
          name="phone"
          type="tel"
          autoComplete="tel"
          value={state.phone}
          onChange={(e) => update("phone", e.target.value)}
          className={INPUT_CLASSES}
          placeholder="+370 …"
        />
      </div>

      <div>
        <label htmlFor={ids.package} className={LABEL_CLASSES}>
          Preorder package <span aria-hidden="true">*</span>
          <span className="sr-only"> (required)</span>
        </label>
        <select
          id={ids.package}
          name="package"
          required
          aria-required="true"
          value={state.package}
          onChange={(e) => update("package", e.target.value as Package | "")}
          className={INPUT_CLASSES}
        >
          <option value="" disabled>
            Select a package
          </option>
          {PACKAGES.map((pkg) => (
            <option key={pkg} value={pkg}>
              {pkg}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={ids.message} className={LABEL_CLASSES}>
          Additional details <span className="text-muted">(optional)</span>
        </label>
        <textarea
          id={ids.message}
          name="message"
          rows={4}
          value={state.message}
          onChange={(e) => update("message", e.target.value)}
          className={TEXTAREA_CLASSES}
          placeholder="Target deployment region, timing, technical questions…"
        />
      </div>

      <div className="flex flex-col items-start gap-4">
  <Button
    type="submit"
    variant="primary"
    size="lg"
    disabled={status === "sending"}
  >
    {status === "sending" ? "Sending…" : "Submit preorder enquiry"}
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
