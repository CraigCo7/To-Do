"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const checking = async () => {};

	const handleFormSubmit = async (e: any) => {
		e.preventDefault();

		try {
			const response = await fetch("/api/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ username, password }),
			});

			console.log("WHY NOT");

			if (response.ok) {
				const data = await response.json();
				console.log("SUCCESS");
				console.log(data.message); // Log the response message
				// You can also redirect the user or perform other actions here.
			} else {
				console.error("Login failed");
				alert("Account Not Found.");
			}
		} catch (error) {
			console.log("WHY WHY WHY WHY");
			console.error("Error:", error);
			alert("FAILED 2");
		}
	};

	return (
		<body className="bg-gray-100 flex items-center justify-center h-screen">
			<div className="bg-white p-8 rounded shadow-md w-80">
				<form action="api/login" method="POST" onSubmit={handleFormSubmit}>
					<div className="mb-4">
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="username"
						>
							Username:
						</label>
						<input
							className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-black"
							type="text"
							id="username"
							name="username"
							placeholder="Enter your username"
						/>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="password"
						>
							Password:
						</label>
						<input
							className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-black"
							type="password"
							id="password"
							name="password"
							placeholder="Enter your password"
						/>
					</div>
					<button
						className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
						type="submit"
					>
						Login
					</button>
				</form>
			</div>
		</body>
	);
};

export const LoginPage = () => {
	return (
		<div className="login-page h-screen flex items-center justify-center">
			<div className="bg-white p-8 shadow-md rounded-lg">
				<h1 className="text-black text-2xl font-bold mb-4">Login</h1>
				<LoginForm />
			</div>
		</div>
	);
};
