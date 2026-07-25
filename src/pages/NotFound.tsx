import Button from "@/components/Button";
import { routes } from "@/router/routes";
import { useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="w-dvw h-dvh flex flex-col gap-20 bg-surface items-center justify-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-on-surface">
        404 Page not found
      </h1>
      <Button className="px-10 max-w-70" onClick={() => navigate(routes.login)}>
        Back to login
      </Button>
    </main>
  );
}

export default NotFound;
