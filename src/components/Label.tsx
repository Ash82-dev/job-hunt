import type { ReactNode } from "react";

type LabelProps = {
  title: string;
  description: string | ReactNode;
  styles?: string;
};

function Label({ title, description, styles = "" }: LabelProps) {
  return (
    <div className={`flex items-baseline gap-2 ${styles}`}>
      <span className="font-semibold text-lg text-on-surface shrink-0">{`${title}:`}</span>
      <p className="text-on-surface-variant text-md min-w-0 wrap-break-word">
        {description}
      </p>
    </div>
  );
}

export default Label;
