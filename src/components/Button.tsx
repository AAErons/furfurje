import { ArrowRight, CalendarBlank } from "@phosphor-icons/react";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  className?: string;
  onClick?: () => void;
  icon?: "calendar";
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  onClick,
  icon,
}: Props) {
  return (
    <a
      className={`btn btn--${variant} ${className}`.trim()}
      href={href}
      onClick={onClick}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {icon === "calendar" ? (
        <CalendarBlank size={16} weight="regular" aria-hidden="true" />
      ) : null}
      <span>{children}</span>
      <ArrowRight size={16} weight="regular" aria-hidden="true" />
    </a>
  );
}
