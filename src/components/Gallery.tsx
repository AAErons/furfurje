import { useState } from "react";
import { createPortal } from "react-dom";
import { site } from "../content/site";
import { Lightbox } from "./Lightbox";
import { MediaImage } from "./MediaImage";
import { Reveal } from "./Reveal";

export function Gallery() {
  const items = site.gallery.items;
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="gallery section" id="galerija">
      <div className="wrap">
        <Reveal className="gallery-head">
          <h2>{site.gallery.title}</h2>
        </Reveal>

        <div className="gallery-grid">
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`gallery-item gallery-item--${item.span}`}
              onClick={() => setActive(index)}
              aria-label={`Atvērt attēlu: ${item.photo.alt}`}
            >
              <MediaImage
                image={item.photo}
                sizes="(min-width: 900px) 30vw, 50vw"
              />
            </button>
          ))}
        </div>
      </div>

      {active !== null
        ? createPortal(
            <Lightbox
              items={items}
              index={active}
              onClose={() => setActive(null)}
              onPrev={() =>
                setActive((current) => {
                  const i = current ?? 0;
                  return (i - 1 + items.length) % items.length;
                })
              }
              onNext={() =>
                setActive((current) => {
                  const i = current ?? 0;
                  return (i + 1) % items.length;
                })
              }
            />,
            document.body,
          )
        : null}
    </section>
  );
}
