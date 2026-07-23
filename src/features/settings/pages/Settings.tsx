import { useForm } from "react-hook-form";

import Button from "@/components/Button";
import Select from "@/components/Select";
import { themeOptions } from "@/theme/themeContext";
import useTheme from "@/theme/useTheme";
import type { SettingsFormData } from "../schema/settings.schema";

function Settings() {
  const { theme, setTheme } = useTheme();
  const { register, handleSubmit } = useForm<SettingsFormData>({
    defaultValues: { theme },
  });

  function onSubmit(data: SettingsFormData) {
    setTheme(data.theme);
  }

  return (
    <div className="px-4 py-6">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Select
          id="theme"
          label="Theme"
          options={themeOptions}
          {...register("theme")}
        />

        <Button className="w-1/4 ml-auto">Confirm</Button>
      </form>
    </div>
  );
}

export default Settings;
