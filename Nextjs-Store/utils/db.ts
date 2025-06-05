import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

// Usa a instância global em desenvolvimento, nova em produção
export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ["query", "error", "warn"], // útil para debug
  });

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export default prisma;
