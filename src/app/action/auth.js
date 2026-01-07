"use server";
import { SignupFormSchema } from "@/lib/definitions";
import { generateSalt, hashPassword } from "@/lib/passwordHasher";
import prisma from "@/lib/prisma";
import { createUserSession } from "@/lib/session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signUp(state, formData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const existingUser = await prisma.AdminUser.findUnique({
    where: { email: validatedFields.data.email },
  });

  if (existingUser) {
    return `this email: ${validatedFields.data.email} already registered`;
  }

  try {
    const salt = generateSalt();
    const hashedPassword = await hashPassword(
      validatedFields.data.password,
      salt
    );
    const user = await prisma.adminUser.create({
      data: {
        name: validatedFields.data.name,
        email: validatedFields.data.email,
        password: hashedPassword,
      },
    });
    if (user == null) return "Unable to create account";
    const cookieStore = await cookies();
    await createUserSession(user.id, cookieStore);
  } catch (error) {
    return "Unable to create account";
  }
  redirect("/admin/dashboard");
}
