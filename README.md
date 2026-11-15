# Vegith Pinnacle Services — website (plain HTML version)

The whole website is ordinary HTML, CSS and JavaScript. There is nothing to
install and no build step. Open any `.html` file in a text editor such as
VS Code or Notepad++, change it, save it, and refresh the browser.

To preview the site, double-click `index.html`.

## What's in this folder

| File / folder | What it is |
|---|---|
| `index.html` | Home page |
| `about.html` | About Us |
| `leadership.html` | Leadership team |
| `services.html` | Services (Staffing, Soft, Technical, Specialised) |
| `compliance.html` | Labour & payroll compliance |
| `industries.html` | Industries / clients |
| `contact.html` | Contact page and enquiry form |
| `404.html` | "Page not found" page |
| `css/style.css` | All colours, fonts, spacing and layout, in numbered sections |
| `js/main.js` | Menu, animations, counters, services slideshow, contact form |
| `images/` | Logo, team photos (`images/team/`), service photos (`images/services/`) |
| `videos/hero-bg.mp4` | Background video at the top of the home page |
| `sitemap.xml`, `robots.txt` | For Google |
| `CNAME` | Tells GitHub Pages to use vegithpinnacle.com |

Each page is laid out the same way, and every section starts with a comment
such as `<!-- ===== OUR STORY ===== -->`, so you can jump to it with Ctrl+F.

## Common edits

**Change some text.** Find it in the page's `.html` file and type over it.
For `&`, write `&amp;`.

**Change a photo.** Put the new image in `images/` and change the `src="..."`
to its file name. Keep the `alt="..."` text describing the photo, because
Google and screen readers use it. WebP or JPG files around 800px wide, under
200 KB, keep the site fast.

**Add a leader's photo** (Ojasvi or Dikshita, who currently show initials):
1. Save the photo as `images/team/ojasvi-sharma.webp`.
2. In `leadership.html`, find their card and replace
   `<span class="media-initials">OS</span>` with
   `<img src="images/team/ojasvi-sharma.webp" alt="Ojasvi Sharma" loading="lazy">`.

**Add a leader's LinkedIn or email.** Copy the `<a ...>` lines inside
`<div class="socials">` on another person's card and change the link.

**Add the company's social media links.** In each page's footer there is a
commented-out block that starts with `<!-- Social links:`. Fill in the real
addresses and remove the `<!--` and `-->` around it.

**Change the numbers** (5,000+ employees and so on). Edit both the
`data-count="5000"` value and the text next to it. They're on `index.html`
and `about.html`.

**Change the phone number or email address.** They appear in the footer of
every page, on `contact.html`, and in the WhatsApp link (`wa.me/919136407944`).
Use your editor's "Find in Files" / "Replace in Files" to change them
everywhere at once. The address that contact-form enquiries go to is set at
the top of `js/main.js` (`CONTACT_EMAIL`).

**Change the menu or footer.** The header and footer are copied into every
page, so a change has to be made in all 8 `.html` files. "Replace in Files"
does this in one go.

**Change a service.** On the home page each service appears twice: once in
the phone card list (`svc-mobile`) and once in the large-screen slideshow
(`svc-pinned`), so update both. The full details are on `services.html`.

**Animations.** Add `data-reveal` to any element to make it fade in as it
scrolls into view. `data-reveal="left"` makes it slide in from the side.

## Contact form

Enquiries are emailed to `connect.hr@vegithglobal.com` through FormSubmit
(formsubmit.co), a free form-to-email service. The first enquiry ever sent
triggers an activation email to that address. Click **Activate Form** in it
once and every enquiry after that is delivered.

## Publishing

Upload the contents of this folder to any web host, or publish it to
GitHub Pages. Page addresses are `/about`, `/contact` and so on, the same as
before, so existing links and Google results keep working.
