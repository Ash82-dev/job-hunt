import logo from "@/assets/logo.png";

type AuthHeaderProps = {
  title: string;
};

function AuthHeader({ title }: AuthHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <img src={logo} alt="Job Hunt" className="w-30" />

      <h1 className="text-2xl sm:text-3xl text-primary font-semibold">
        {title}
      </h1>
    </div>
  );
}

export default AuthHeader;
