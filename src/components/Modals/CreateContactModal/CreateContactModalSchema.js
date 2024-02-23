import { z } from "zod";

export const CreateContactModalSchema = z.object({
  fullName: z.string().min(3, "É necessário informar o nome completo!"),
  email: z.string().min(3, "O e-mail é obrigatório!"),
  phone: z.string().min(3, "O telefone é obrigatório!"),
});
