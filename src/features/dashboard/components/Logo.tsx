import logo from "@/assets/logo.png";
import { routes } from "@/router/routes";
import { useNavigate } from "react-router";

export default function Logo() {
  const navigate = useNavigate();

  return (
    <img
      src={logo}
      alt="Job Hunt"
      className="h-20 cursor-pointer"
      onClick={() => navigate(routes.dashboard)}
    />
  );
}
