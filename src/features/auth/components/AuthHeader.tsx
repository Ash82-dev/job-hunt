import Logo from "@/features/dashboard/components/Logo";

type AuthHeaderProps = {
  title?: string;
};

function AuthHeader({ title }: AuthHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-7">
      <Logo className="w-30" />

      {title && (
        <h1 className="text-2xl sm:text-3xl text-primary font-semibold">
          {title}
        </h1>
      )}
    </div>
  );
}

export default AuthHeader;
