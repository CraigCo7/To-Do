"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { GoogleSignInButton } from "./authButtons";

type CredentialFormProps = {
	csrfToken?: string;
};

export function LoginForm(props: CredentialFormProps) {
	const router = useRouter();
	const [error, setError] = useState<string | null>(null);

	const handleFormSubmit = async (e: any) => {
		e.preventDefault();

		const data = new FormData(e.currentTarget);

		//credentials is the type of signin provider, which we added in lib/auth.tsx
		const signInResponse = await signIn("credentials", {
			email: data.get("email"),
			password: data.get("password"),
			redirect: false,
		});

		if (signInResponse && !signInResponse.error) {
			router.push("/dashboard");
		} else {
			console.log("ERROR", signInResponse);
			setError("Email or Password is incorrect.");
		}
	};

	return (
		<body className="bg-gray-100 flex items-center justify-center h-screen">
			<div className="bg-white p-8 rounded shadow-md w-80">
				<form onSubmit={handleFormSubmit}>
					{error && (
						<span className="p-4 mb-2 text-lg font-semibold text-black bg-red-500 rounded-md">
							{error}
						</span>
					)}
					<div className="mb-4">
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="email"
						>
							Email:
						</label>
						<input
							className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-black"
							type="email"
							id="email"
							name="email"
							autoComplete="username"
							placeholder="Enter your email"
							required
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
							required
						/>
					</div>
					<button
						className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
						type="submit"
					>
						Login
					</button>
				</form>
				<GoogleSignInButton />
			</div>
		</body>
	);
}

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
