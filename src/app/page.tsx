// Application Root

import Image from "next/image";

export default function Home() {
	return (
		<>
			<section className="py-16 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 text-white">
				<div className="container mx-auto flex flex-col items-center justify-center text-center">
					<h1 className="text-4xl md:text-5xl font-bold mb-6">
						Welcome to Our Amazing World!
					</h1>
					<p className="text-lg md:text-xl mb-8">
						Discover the magic and wonders of our universe with our fantastic
						service.
					</p>
					<Image
						src="/logo.png"
						alt="Hero Image"
						width={5000}
						height={5000}
						className="rounded-full w-48 h-48 object-cover mx-auto mb-10"
					/>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="p-4 bg-white text-black rounded-lg shadow-md">
							<h2 className="text-2xl font-semibold mb-4">Explore</h2>
							<p>Explore new horizons and unearth hidden treasures.</p>
						</div>
						<div className="p-4 bg-white text-black rounded-lg shadow-md">
							<h2 className="text-2xl font-semibold mb-4">Adventure</h2>
							<p>Embark on exciting adventures with friends and family.</p>
						</div>
						<div className="p-4 bg-white text-black rounded-lg shadow-md">
							<h2 className="text-2xl font-semibold mb-4">Fun</h2>
							<p>Experience fun and laughter like never before.</p>
						</div>
						<div className="p-4 bg-white text-black rounded-lg shadow-md">
							<h2 className="text-2xl font-semibold mb-4">Magic</h2>
							<p>Witness the magic that surrounds our world.</p>
						</div>
					</div>
					<a
						href="/signup"
						className="mt-12 bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-3 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105"
					>
						Join the Adventure
					</a>
				</div>
			</section>
		</>
	);
}
