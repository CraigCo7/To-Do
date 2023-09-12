import { PrismaClient } from "@prisma/client";

/*
Need this as a separate file, as when in development mode, NextJS only sends out
files that need to be changed (hotreloading). This means it constantly tries to
make new connections with the Prisma Client. This code creates a singleton connection.
*/

// Take global object, and adding Prisma Client to it.
const globalForPrisma = global as unknown as {
	prisma: PrismaClient | undefined;
};

// Create prisma variable and setting it to previous global variable, or a brand new Prisma Client.
export const prisma =
	globalForPrisma.prisma ??
	new PrismaClient({
		log: ["query"],
	});

if (process.env.NODE_ENV !== "production") {
	globalForPrisma.prisma = prisma;
}
