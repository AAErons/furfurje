import { navItems, site } from "../content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__bar">
        <a className="brand" href="#sakums" aria-label={site.logo.alt}>
          <img
            className="brand__logo"
            src={site.logo.src}
            alt={site.logo.alt}
            width={site.logo.width}
            height={site.logo.height}
          />
        </a>

        <nav className="footer-nav" aria-label="Kājenes navigācija">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        {site.contact.socials.length > 0 ? (
          <div className="socials">
            {site.contact.socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </footer>
  );
}
