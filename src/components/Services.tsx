import { bookingHref, bookingIsExternal, site } from "../content/site";
import { Button } from "./Button";
import { MediaImage } from "./MediaImage";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section className="services section" id="pakalpojumi">
      <div className="wrap">
        <Reveal className="section-copy">
          <h2>{site.services.title}</h2>
        </Reveal>

        <div className="service-grid">
          {site.services.items.map((service, index) => (
            <Reveal as="article" key={service.id} delay={index * 70}>
              <div className="service-card" data-status={service.status}>
                <div className="service-card__media">
                  <MediaImage
                    image={service.photo}
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                  />
                </div>
                <div className="service-card__body">
                  <h3>{service.title}</h3>
                  <p className="price">{site.services.priceLabel}</p>
                  <Button href={bookingHref()} external={bookingIsExternal()} variant="ghost">
                    {site.services.cta}
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
