import { bookingHref, bookingIsExternal, site } from "../content/site";
import type { ContactField } from "../content/site";
import { Button } from "./Button";
import { MediaImage } from "./MediaImage";
import { Reveal } from "./Reveal";

function ContactValue({ field }: { field: ContactField }) {
  if (!field.value) {
    return <p className="missing">Jānorāda</p>;
  }

  if (field.href) {
    return <a href={field.href}>{field.value}</a>;
  }

  return <p>{field.value}</p>;
}

export function Contact() {
  const { contact } = site;
  const canBook = Boolean(site.bookingUrl);

  return (
    <section className="contact section" id="kontakti">
      <div className="wrap contact__layout">
        <Reveal className="contact__photo">
          <MediaImage
            image={contact.photo}
            sizes="(min-width: 900px) 55vw, 100vw"
          />
        </Reveal>

        <Reveal className="contact__panel" delay={80}>
          <h2>{contact.title}</h2>
          <ul className="contact-list">
            <li>
              <span>{contact.address.label}</span>
              <ContactValue field={contact.address} />
            </li>
            <li>
              <span>{contact.phone.label}</span>
              <ContactValue field={contact.phone} />
            </li>
            <li>
              <span>{contact.hours.label}</span>
              <ContactValue field={contact.hours} />
            </li>
          </ul>
          {canBook ? (
            <Button href={bookingHref()} external={bookingIsExternal()}>
              {site.hero.cta}
            </Button>
          ) : (
            <p className="missing">
              Rezervācijas saite tiks pievienota, kad būs zināms pieraksta kanāls.
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
