import { z } from "zod";

export const UpdateContactModalSchema = z.object({
  phone: z.regex(
    /^\(?(?:\d{2})\)?[-. ]?(?:\d{4,5})[-. ]?\d{4}$/,
    "Por favor, insira um número de telefone válido no formato (XX) XXXX-XXXX ou (XX) XXXXX-XXXX."
  ),
});
