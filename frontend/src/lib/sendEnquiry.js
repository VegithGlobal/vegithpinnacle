import { CONTACT } from "@/data/content";

const API_BASE = (process.env.REACT_APP_BACKEND_URL || "").replace(/\/+$/, "");

/**
 * Sends a contact-form enquiry by email to CONTACT.email.
 *
 * The site is hosted statically on GitHub Pages, so by default enquiries go
 * through FormSubmit (formsubmit.co), a free form-to-email relay that needs
 * no server. The very first submission makes FormSubmit email an activation
 * link to CONTACT.email; once it is clicked, every enquiry is delivered.
 *
 * If REACT_APP_BACKEND_URL is set at build time (the FastAPI app in
 * /backend), enquiries are POSTed there instead.
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
    return;
  }

  const res = await fetch(`https://formsubmit.co/ajax/${CONTACT.email}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      Name: form.name,
      Email: form.email,
      Company: form.company || "-",
      "Interested in": form.interest,
      Requirement: form.message,
      _replyto: form.email,
      _subject: `Website enquiry: ${form.interest} — ${form.company || form.name}`,
      _template: "table",
      _captcha: "false",
    }),
  });
  const data = await res.json().catch(() => ({}));
  // FormSubmit returns success as the string "true"
  if (!res.ok || String(data.success) !== "true") {
    throw new Error(data?.message || "Failed to send.");
  }
}
