import Link from "next/link";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export function Button({
  href,
  children,
  variant = "primary",
  type = "button",
  onClick,
}: ButtonProps) {
  const className = `button button-${variant}`;

  if (href) {
    return (
      <Link className={className} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
