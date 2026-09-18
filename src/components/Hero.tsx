import { Heart } from "@phosphor-icons/react";
import { bookingHref, bookingIsExternal, site } from "../content/site";
import { Button } from "./Button";
import { MediaImage } from "./MediaImage";

export function Hero() {
  const [first, second, third] = site.hero.polaroids;

  return (
    <section className="hero" id="sakums">
      <div className="hero__banner">
        <MediaImage image={site.hero.photo} eager sizes="100vw" />
        <div className="polaroid-stack">
          <figure className="polaroid polaroid-stack__card polaroid-stack__card--a">
            <div className="polaroid__frame">
              <MediaImage image={first.photo} sizes="168px" />
            </div>
          </figure>
          <figure className="polaroid polaroid-stack__card polaroid-stack__card--b">
            <div className="polaroid__frame">
              <MediaImage image={second.photo} sizes="176px" />
            </div>
          </figure>
          <figure className="polaroid polaroid-stack__card polaroid-stack__card--c">
            <div className="polaroid__frame">
              <MediaImage image={third.photo} sizes="192px" />
            </div>
            <figcaption className="hand">
              {third.captionShort ?? third.caption}
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="hero__eyebrow" data-status={site.hero.eyebrowStatus}>
            {site.hero.eyebrow}
          </p>
          <h1>
            {site.hero.headline.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </h1>
          <p className="hero__lede">{site.hero.lede}</p>
          <Button href={bookingHref()} external={bookingIsExternal()}>
            {site.hero.cta}
          </Button>
        </div>

        <div className="hero__visual">
          <p className="hero__note hand">
            <span>{site.hero.handwritten}</span>
            <Heart size={16} weight="regular" aria-hidden="true" />
          </p>
          <div className="hero__cluster">
            <figure className="polaroid polaroid--a">
              <div className="polaroid__frame">
                <MediaImage image={first.photo} sizes="360px" />
              </div>
              <figcaption className="hand">{first.caption}</figcaption>
            </figure>
            <figure className="polaroid polaroid--b">
              <div className="polaroid__frame">
                <MediaImage image={second.photo} sizes="400px" />
              </div>
              <figcaption className="hand">{second.caption}</figcaption>
            </figure>
            <figure className="polaroid polaroid--c">
              <div className="polaroid__frame">
                <MediaImage image={third.photo} sizes="420px" />
              </div>
              <figcaption className="hand">{third.caption}</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
