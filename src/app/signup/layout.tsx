export default function LoginLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="bg-white p-4 border border-gray-300 rounded shadow-md">
			{children}
		</section>
	);
}
