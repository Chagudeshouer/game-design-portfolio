const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  const setMenuState = (isOpen) => {
    navLinks.classList.toggle("open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "关闭导航" : "打开导航");
    document.body.classList.toggle("no-scroll", isOpen);
  };

  menuButton.addEventListener("click", () => {
    setMenuState(!navLinks.classList.contains("open"));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      setMenuState(false);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navLinks.classList.contains("open")) {
      setMenuState(false);
      menuButton.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 720) setMenuState(false);
  });
}

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealElements = document.querySelectorAll(".reveal");

if (reducedMotion || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("visible"));
} else {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px" },
  );

  revealElements.forEach((element) => observer.observe(element));
}

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());

document.querySelectorAll("[data-autoplay-project-video]").forEach((video) => {
  video.defaultMuted = true;
  video.muted = true;
  video.play().catch(() => {});
});

const caseToc = document.querySelector(".case-toc");
const caseTocLinks = [...document.querySelectorAll("[data-case-nav]")];

if (caseToc && caseTocLinks.length) {
  const caseSections = caseTocLinks
    .map((link) => ({
      link,
      section: document.getElementById(link.dataset.caseNav),
    }))
    .filter((item) => item.section);
  let tocFrame = 0;

  const updateCaseToc = () => {
    tocFrame = 0;
    const headerHeight = document.querySelector(".site-header")?.offsetHeight ?? 74;
    const compactToc = window.innerWidth <= 820;
    const threshold = headerHeight + (compactToc ? caseToc.offsetHeight + 22 : 42);
    let activeItem = caseSections[0];

    caseSections.forEach((item) => {
      if (item.section.getBoundingClientRect().top <= threshold) {
        activeItem = item;
      }
    });

    caseTocLinks.forEach((link) => {
      const isActive = link === activeItem?.link;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    if (compactToc && activeItem?.link) {
      const nav = caseToc.querySelector(".case-toc-links");
      const link = activeItem.link;
      const linkStart = link.offsetLeft;
      const linkEnd = linkStart + link.offsetWidth;
      if (linkStart < nav.scrollLeft || linkEnd > nav.scrollLeft + nav.clientWidth) {
        nav.scrollTo({
          left: Math.max(0, linkStart - (nav.clientWidth - link.offsetWidth) / 2),
          behavior: reducedMotion ? "auto" : "smooth",
        });
      }
    }
  };

  const queueCaseTocUpdate = () => {
    if (tocFrame) return;
    tocFrame = window.requestAnimationFrame(updateCaseToc);
  };

  window.addEventListener("scroll", queueCaseTocUpdate, { passive: true });
  window.addEventListener("resize", queueCaseTocUpdate);
  updateCaseToc();
}
