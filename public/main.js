// Keep this file tiny: everything visual lives in CSS.

const year = document.querySelector("[data-year]");
if (year) year.textContent = new Date().getFullYear();

// Highlight the nav link of the section currently in view.
const links = new Map(
  [...document.querySelectorAll(".nav a")].map((link) => [link.hash.slice(1), link]),
);
const sections = [...links.keys()].map((id) => document.getElementById(id)).filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {
  const visible = new Set();

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      }
      // The last section in document order that crosses the middle band wins.
      const current = sections.filter((section) => visible.has(section)).pop();
      for (const [id, link] of links) {
        if (current && id === current.id) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      }
    },
    { rootMargin: "-45% 0px -45% 0px" },
  );

  sections.forEach((section) => observer.observe(section));
}
