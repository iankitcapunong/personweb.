import Icon from "./Icon";

type Props = {
  title?: string;
  icon?: React.ComponentProps<typeof Icon>["name"];
  /** Subtle grey wash, used to break up neighbouring cards. */
  tinted?: boolean;
  /** Let the body stretch to the card's full height (for equal-height rows). */
  fill?: boolean;
  className?: string;
  children: React.ReactNode;
};

export default function Card({ title, icon, tinted, fill, className = "", children }: Props) {
  return (
    <section
      className={`rounded-2xl border border-fg/15 p-6 sm:p-7 ${
        fill ? "flex flex-col" : ""
      } ${
        tinted ? "bg-tint" : "bg-card"
      } ${className}`}
    >
      {title && (
        <h2 className="mb-6 flex items-center gap-2.5 text-[15px] font-semibold tracking-tight">
          {icon && <Icon name={icon} className="h-4 w-4 opacity-60" />}
          {title}
        </h2>
      )}
      {fill ? <div className="flex-1">{children}</div> : children}
    </section>
  );
}
