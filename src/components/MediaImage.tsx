import type { CSSProperties } from "react";
import type { ImageAsset } from "../content/site";

type Props = {
  image: ImageAsset;
  className?: string;
  eager?: boolean;
  sizes?: string;
};

export function MediaImage({ image, className, eager = false, sizes }: Props) {
  const style: CSSProperties | undefined = image.objectPosition
    ? { objectPosition: image.objectPosition }
    : undefined;

  return (
    <img
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      className={className}
      style={style}
      sizes={sizes}
      loading={eager ? "eager" : "lazy"}
      decoding={eager ? "sync" : "async"}
      fetchPriority={eager ? "high" : "low"}
      draggable={false}
    />
  );
}
