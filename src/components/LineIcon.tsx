import {
  Heart,
  House,
  Leaf,
  PawPrint,
  type Icon,
} from "@phosphor-icons/react";

const icons = {
  heart: Heart,
  leaf: Leaf,
  paw: PawPrint,
  house: House,
} as const satisfies Record<string, Icon>;

type Props = {
  name: keyof typeof icons;
  size?: number;
};

export function LineIcon({ name, size = 22 }: Props) {
  const Glyph = icons[name];
  return <Glyph size={size} weight="regular" aria-hidden="true" />;
}
