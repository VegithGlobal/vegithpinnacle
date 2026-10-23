import { CONTACT } from "@/data/content";

const API_BASE = (process.env.REACT_APP_BACKEND_URL || "").replace(/\/+$/, "");

/**
 * Sends a contact-form enquiry.
 *
 * The site is hosted statically on GitHub Pages. If REACT_APP_BACKEND_URL is
 * set at build time (the FastAPI app in /backend), the enquiry is POSTed
 * there. Otherwise it falls back to opening the visitor's email app with the
 * enquiry pre-filled to CONTACT.email, so the form always works.
 *
 * Resolves to "sent" (backend accepted it) or "mailto" (email app opened).
 */
export async function sendEnquiry(form) {
  if (API_BASE) {
    const res = await fetch(`${API_BASE}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(data?.detail || "Failed to send. Please try again.");
    }
    return "sent";
  }

  const subject = `Website enquiry: ${form.interest} — ${form.company || form.name}`;
  const body = [
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Company: ${form.company || "-"}`,
    `Interested in: ${form.interest}`,
    "",
    form.message,
  ].join("\n");
  window.location.href =
    `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;
  return "mailto";
}
