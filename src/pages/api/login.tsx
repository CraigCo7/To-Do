import { prisma } from "@/db";
import { useRouter } from "next/router";

import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
	message: string;
	// test: NextApiRequest;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	if (req.method === "POST") {
		const { username, password } = req.body;
		try {
			// Check if the user exists in the database
			const user = await prisma.user.findUnique({
				where: {
					username: username,
				},
			});

			if (user && user.password === password) {
				console.log("IT WORKS");
				res.status(200).json({ message: "Login successful" });
			} else {
				res.setHeader("Location", "/"); // Adjust the path as needed
				res.status(302).end(); // Use status code 302 for temporary redirect
				console.log("CHECK");
				res.status(401).json({ message: "Login failed" });
				console.log("CHECK2");
			}
		} catch (error) {
			console.error("Error:", error);
			res.status(500).json({ message: "Internal server error" });
		} finally {
			await prisma.$disconnect(); // Disconnect from the database
		}
	} else {
		res.status(405).json({ message: "Method not allowed" });
	}
}
