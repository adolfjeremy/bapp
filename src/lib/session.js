import prisma from "@/lib/prisma";
import { cookies } from "next/headers";

// export async function createSession(id) {
//   const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
//   const data = await prisma.AdminSession.create({
//     data: {
//       userId: id,
//       expiresAt,
//     },
//   });
//   const sessionId = data.id;

//   const cookieStore = await cookies();

//   cookieStore.set("auth_session", sessionId, {
//     httpOnly: true,
//     secure: true,
//     expires: expiresAt,
//     sameSite: "lax",
//     path: "/",
//   });
//   return data;
// }

const SESSION_EXPIRATION_SECONDS = 60 * 60 * 24 * 7;
const AUTH_SESSION_KEY = "auth_session_id";

export async function createUserSession(userId, cookies) {
  const session = await prisma.AdminSession.create({
    data: {
      userId: userId,
      expiresAt: new Date(Date.now() + SESSION_EXPIRATION_SECONDS * 1000),
    },
  });
  setCookie(session.id, cookies);
}

function setCookie(sessionId, cookies) {
  cookies.set(AUTH_SESSION_KEY, sessionId, {
    httpOnly: true,
    secure: true,
    expires: new Date(Date.now() + SESSION_EXPIRATION_SECONDS * 1000),
    sameSite: "lax",
    path: "/",
  });
}
