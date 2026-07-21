import Button from "@/components/Button";
import Select from "@/components/Select";
import { themeOptions, type Theme } from "@/theme/themeContext";
import useTheme from "@/theme/useTheme";
import { useForm } from "react-hook-form";

type SettingsFormData = {
  theme: Theme;
};

function SettingsForm() {
  const { theme, setTheme } = useTheme();
  const { register, handleSubmit } = useForm<SettingsFormData>({
    defaultValues: { theme },
  });

  function onSubmit(data: SettingsFormData) {
    setTheme(data.theme);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <section>
        <Select
          id="theme"
          label="Theme"
          options={themeOptions}
          {...register("theme")}
        />
      </section>
      <footer className="w-1/4 ml-auto">
        <Button>Confirm</Button>
      </footer>
    </form>
  );
}

export default SettingsForm;
