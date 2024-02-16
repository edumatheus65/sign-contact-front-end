import { z } from "zod";

export const registerFormSchema = z
  .object({
    fullName: z.string().min(3, "O nome completo é obrigatório").max(80),
    email: z
      .string()
      .email("Forneça um e-mail válido")
      .min(3, "O e-mail é obrigatório")
      .max(45),
    password: z
      .string()
      .nonempty("Senha é obrigatória")
      .min(8, "São necessários pelo menos 8 caracteres")
      .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
      .regex(/.*\d.*/, "É necessário pelo menos um número")
      .regex(
        /(?=.*?[#?!@$%^&*-])/,
        "É necessário pelo menos um caractere especial"
      ),
    confirmPassword: z.string().nonempty("É obrigatório confirmar a senha"),
    phone: z
      .string()
      .max(18)
      .min(3, "O telefone é obrigatório")
      .regex(
        /^\(?(?:\d{2})\)?[-. ]?(?:\d{4,5})[-. ]?\d{4}$/,
        "Por favor, insira um número de telefone válido no formato (XX) XXXX-XXXX ou (XX) XXXXX-XXXX."
      ),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
  });
