import { Prisma } from "@prisma/client";
import hmacSHA512 from "crypto-js/hmac-sha512";
import { prisma } from "~/server/db";

export async function myhash(password: string) {
  return hmacSHA512(password, "secret123");
}

export async function findUser(email: string, password: string) {
  return await prisma.user.findFirst({
    where: {
      email,
      password: (await myhash(password)).toString(),
    },
  });
}

export async function addUSer(values: any) {
  return await prisma.user.create({
    data: {
      ...values,
      password: (await myhash(values.password)).toString(),
    },
  });
}
