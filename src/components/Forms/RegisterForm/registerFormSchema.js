import { z } from "zod";

export const registerFormSchema = z.object({
  fullName:z.string().min(3,"O nome completo é obrigatório").max(80),
  email:z.string().email("Forneça um e-mail válido").min(3,"O e-mail é obrigatório").max(45),
  password: z
  .string()
  .min(3,"Senha é obrigatória")
  .min(8, "São necessários pelo menos 8 caracteres")
  .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
  .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
  .regex(/.*\d.*/, "É necessário pelo menos um número")
  .regex(
    /(?=.*?[#?!@$%^&*-])/,
    "É necessário pelo menos um caractere especial"
  ),
  phone:




})
.refine(({ password, confirmPassword }) => password === confirmPassword, {
  message: "As senhas não correspondem",
  path: ["confirmPassword"],
});

