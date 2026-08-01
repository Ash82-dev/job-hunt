type LabelProps = {
  title: string;
  description: string;
};

function Label({ title, description }: LabelProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="font-semibold text-lg text-on-surface">{`${title}:`}</span>
      <p className="text-on-surface-variant text-md">{description}</p>
    </div>
  );
}

export default Label;
