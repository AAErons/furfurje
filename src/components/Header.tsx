import { useEffect, useId, useRef, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { bookingHref, bookingIsExternal, navItems, site } from "../content/site";
import { Button } from "./Button";
import { useEscape, useLockedBody } from "../hooks/useUi";

export function Header() {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useLockedBody(open);
  useEscape(() => setOpen(false), open);

  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
    <header className="site-header">
      <div className="wrap site-header__bar">
        <a className="brand" href="#sakums" aria-label={site.logo.alt}>
          <img
            className="brand__logo"
            src={site.logo.src}
            alt={site.logo.alt}
            width={site.logo.width}
            height={site.logo.height}
          />
        </a>

        <nav className="nav-desktop" aria-label="Galvenā navigācija">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          className="header-cta"
          href={bookingHref()}
          external={bookingIsExternal()}
          icon="calendar"
        >
          {site.hero.cta}
        </Button>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
        >
          <List size={26} weight="regular" aria-hidden="true" />
          <span className="sr-only">Atvērt izvēlni</span>
        </button>
      </div>
    </header>

      {open ? (
        <div
          className="nav-overlay"
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <div className="nav-overlay__top">
            <p id={titleId} className="brand__name">
              Izvēlne
            </p>
            <button
              ref={closeRef}
              className="menu-toggle"
              type="button"
              onClick={close}
            >
              <X size={26} weight="regular" aria-hidden="true" />
              <span className="sr-only">Aizvērt izvēlni</span>
            </button>
          </div>
          <nav aria-label="Mobilā navigācija">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={close}>
                {item.label}
              </a>
            ))}
          </nav>
          <Button href={bookingHref()} external={bookingIsExternal()} onClick={close} icon="calendar">
            {site.hero.cta}
          </Button>
        </div>
      ) : null}
    </>
  );
}
