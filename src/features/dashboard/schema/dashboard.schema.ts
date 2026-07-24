import z from "zod";

export const addApplicationSchema = z.object({
  title: z.string().nonempty("This field is required"),
});

export type AddApplicationFormData = z.infer<typeof addApplicationSchema>;
