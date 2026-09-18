import { useEffect, useRef } from "react";
import { CaretLeft, CaretRight, X } from "@phosphor-icons/react";
import type { GalleryItem } from "../content/site";
import { useEscape, useLockedBody } from "../hooks/useUi";

type Props = {
  items: readonly GalleryItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function Lightbox({ items, index, onClose, onPrev, onNext }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const item = items[index];

  useLockedBody(true);
  useEscape(onClose);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onNext, onPrev]);

  if (!item) return null;

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Galerijas attēls"
      onClick={onClose}
    >
      <div className="lightbox__toolbar">
        <button
          ref={closeRef}
          className="icon-btn"
          type="button"
          onClick={onClose}
          aria-label="Aizvērt"
        >
          <X size={20} weight="regular" aria-hidden="true" />
        </button>
      </div>

      <div className="lightbox__stage" onClick={(event) => event.stopPropagation()}>
        <img
          src={item.photo.src}
          alt={item.photo.alt}
          width={item.photo.width}
          height={item.photo.height}
        />
      </div>

      <div className="lightbox__nav" onClick={(event) => event.stopPropagation()}>
        <button
          className="icon-btn"
          type="button"
          onClick={onPrev}
          aria-label="Iepriekšējais attēls"
        >
          <CaretLeft size={20} weight="regular" aria-hidden="true" />
        </button>
        <p>
          {index + 1} / {items.length}
        </p>
        <button
          className="icon-btn"
          type="button"
          onClick={onNext}
          aria-label="Nākamais attēls"
        >
          <CaretRight size={20} weight="regular" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
