"use-client";

import Link from "next/link";
import { LoginPage } from "../../components/loginForm";
// import { GoogleSignInButton } from "@/components/authButtons";

// Application Root
export default function Page() {
	// return <Link href="/dashboard">Dashboard</Link>;
	return (
		<>
			<LoginPage />;
		</>
	);
}
