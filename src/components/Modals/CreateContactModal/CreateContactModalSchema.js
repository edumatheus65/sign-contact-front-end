import { z } from "zod";

export const CreateContactModalSchema = z.object({
  fullName: z.string().min(3, "É necessário informar o nome completo!"),
  email: z.string().min(3, "O e-mail é obrigatório!"),
  phone: z
    .string()
    .min(3, "O telefone é obrigatório!")
    .regex(
      /^\(?(?:\d{2})\)?[-. ]?(?:\d{4,5})[-. ]?\d{4}$/,
      "Por favor, insira um número de telefone válido no formato (XX) XXXX-XXXX ou (XX) XXXXX-XXXX."
    ),
});
