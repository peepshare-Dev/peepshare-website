const appUrl = "https://open.peepshare.ai/Yxf0/nhogdpsa";
const currentPath = window.location.pathname;

const activeSection = currentPath.startsWith("/event")
  ? "event"
  : currentPath.startsWith("/join") || currentPath.startsWith("/partner")
    ? "join"
    : currentPath.startsWith("/terms-and-conditions")
      ? "terms"
      : "home";

const navItems = [
  ["home", "/", "Home"],
  ["event", "/event/", "Event"],
  ["join", "/join/", "Join with us"],
  ["terms", "/terms-and-conditions/", "Term and Condition"],
];

const renderNavLinks = () =>
  navItems
    .map(
      ([section, href, label]) =>
        `<a${section === activeSection ? ' class="active" aria-current="page"' : ""} href="${href}">${label}</a>`,
    )
    .join("");

const header = document.querySelector("[data-site-header]");

if (header) {
  header.className = "peep-header";
  header.innerHTML = `
    <nav class="nav container" aria-label="Primary navigation">
      <a class="brand" href="/" aria-label="PEEP SHARE home">
        <img class="brand-logo" src="/assets/FooterSquareLogo.png" alt="" />
        <span><span class="brand-peep">PEEP</span> <span class="brand-share">SHARE</span></span>
      </a>
      <div class="nav-links">${renderNavLinks()}</div>
      <a class="nav-cta" href="${appUrl}">Get the App</a>
      <button class="menu-btn" type="button" aria-label="Open navigation" aria-expanded="false">
        <iconify-icon icon="solar:hamburger-menu-linear" aria-hidden="true"></iconify-icon>
      </button>
    </nav>
    <div class="mobile-menu">${renderNavLinks()}<a href="${appUrl}">Get the App</a></div>
  `;

  const menuButton = header.querySelector(".menu-btn");
  const mobileMenu = header.querySelector(".mobile-menu");

  const closeMenu = () => {
    mobileMenu.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    menuButton
      .querySelector("iconify-icon")
      ?.setAttribute("icon", "solar:hamburger-menu-linear");
  };

  menuButton.addEventListener("click", () => {
    const open = !mobileMenu.classList.contains("open");
    mobileMenu.classList.toggle("open", open);
    document.body.classList.toggle("menu-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    menuButton
      .querySelector("iconify-icon")
      ?.setAttribute(
        "icon",
        open ? "solar:close-circle-linear" : "solar:hamburger-menu-linear",
      );
  });

  mobileMenu.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 960) closeMenu();
  });
  window.addEventListener("scroll", () => header.classList.toggle("scrolled", scrollY > 10), {
    passive: true,
  });
}

const footer = document.querySelector("[data-site-footer]");

if (footer) {
  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="site-footer__inner">
      <div class="site-footer__main">
        <div>
          <a class="site-footer__brand" href="/">
            <img src="/assets/FooterSquareLogo.png" alt="" />
            <span>PEEP SHARE</span>
          </a>
          <p class="site-footer__tagline">Let’s “ PEEPSHARE ”<br />keep your memories.</p>
          <a class="site-footer__email" href="mailto:support@peepshare.me">support@peepshare.me</a>
        </div>
        <nav class="site-footer__links" aria-label="Footer navigation">
          <a href="/terms-and-conditions/?document=privacy">นโยบายความเป็นส่วนตัว</a>
          <a href="/join/#faq">ศูนย์ช่วยเหลือ</a>
          <a href="/">เกี่ยวกับ</a>
          <a href="/terms-and-conditions/?document=terms">ข้อกำหนดการใช้บริการ</a>
        </nav>
      </div>
      <div class="site-footer__bottom">
        <span>© 2026 PEEP SHARE. All rights reserved.</span>
        <div class="site-footer__socials">
          <a href="#" aria-label="Facebook"><img src="/assets/Frame1597884737.png" alt="" /></a>
          <a href="#" aria-label="Instagram"><img src="/assets/Frame1597884738.png" alt="" /></a>
          <a href="#" aria-label="TikTok"><img src="/assets/Frame1597884739.png" alt="" /></a>
        </div>
      </div>
    </div>
  `;
}
