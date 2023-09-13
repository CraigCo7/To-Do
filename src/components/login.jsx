import React, { useState } from "react";

export default function LoginForm({ onLogin }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onLogin({ username, password }); // Pass the data to the parent component
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="username">Username:</label>
				<input
					type="text"
					id="username"
					name="username"
					value={username}
					onChange={handleUsernameChange}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="password">Password:</label>
				<input
					type="password"
					id="password"
					name="password"
					value={password}
					onChange={handlePasswordChange}
				/>
			</div>
			<button type="submit">Login</button>
		</form>
	);
}

function LoginPage() {
	const handleLogin = (formData) => {
		// Add your login logic here, e.g., send a request to a server with formData.
		console.log("Login data:", formData);
	};

	return (
		<div className="login-page">
			<h1>Login</h1>
			<LoginForm onLogin={handleLogin} />
		</div>
	);
}
